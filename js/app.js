/* filepath: js/app.js */
const routes = [
  { path: "/", component: Home, name: "Home" },
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

    console.log(route.name);
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

app.component("technique-page", TechniqueFamilyPage);
app.use(router);
app.mount("#app");
