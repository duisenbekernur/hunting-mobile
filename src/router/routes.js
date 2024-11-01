const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        children: [
          {
            path: "home",
            name: "home",
            component: () => import("pages/Home.vue"),
          },
          {
            path: "licences",
            name: "licences",
            component: () => import("pages/Licences.vue"),
          },
          {
            path: "notifications",
            name: "notifications",
            component: () => import("pages/Notifications.vue"),
          },
          {
            path: "settings",
            name: "settings",
            component: () => import("pages/Settings.vue"),
          },
          {
            path: "login",
            name: "login",
            component: () => import("pages/Login.vue"),
          },
          {
            path: "register",
            name: "register",
            component: () => import("pages/Register.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
