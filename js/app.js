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
    name: "Favorites",
  },
  {
    path: "/:family",
    component: TechniqueFamilyPage,
    name: "TechniqueFamily",
    props: true,
  },
  // Technique detail as a separate top-level route
  {
    path: "/technique/:technique",
    component: TechniqueDetailPage,
    name: "TechniqueDetail",
    props: true,
  },
];

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

// Add router navigation guards to update body class
router.afterEach((to, from) => {
  // Add/remove is-home class on body based on route
  if (to.path === "/" || to.path === "") {
    document.body.classList.add("is-home");
  } else {
    document.body.classList.remove("is-home");
  }
});

// Import and register service worker
import { registerServiceWorker } from "./sw-register.js";
registerServiceWorker();
