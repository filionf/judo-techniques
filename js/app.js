const i18n = VueI18n.createI18n({
  legacy: false,
  locale:
    localStorage.getItem("preferredLanguage") ||
    navigator.language.split("-")[0] ||
    "en",
  fallbackLocale: "en",
  messages: { en, fr },
});

// In your routes definition, make sure to pass the level prop from the router to each component
const routes = [
  {
    path: "/",
    component: HomeComponent,
    name: "Home",
    props: true,
  },
  {
    path: "/favorites",
    component: FavoritesComponent,
  },
  {
    path: "/:family",
    component: TechniqueFamilyPage,
    name: "TechniqueFamily",
    props: true,
    children: [
      {
        path: ":technique",
        component: TechniqueDetailPage,
        name: "TechniqueDetail",
        props: true,
      },
    ],
  },
];

routes.forEach((route) => {
  // Only add technique detail as a child for technique families
  if (route.name !== "Home") {
    if (!route.children) {
      route.children = [];
    }

    route.children.push({
      path: ":id", // nested under the family route, e.g. '/te-waza/:id'
      component: TechniqueDetailPage,
      name: route.name + "Detail",
    });
  }
});

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  data() {
    return {
      routes: routes.map((route) => ({
        path: route.path,
        name: route.name,
      })),
    };
  },
});

app.use(router);
app.use(i18n);

app.component("technique-page", TechniqueFamilyPage);
app.component("header-component", HeaderComponent);
app.component("app-root", RootComponent);

app.mount("#app");
