const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/DashboardList.lite-DBVTu_xU.js","./chunks/TheAppHeader-yUeOxtaF.js","./chunks/_plugin-vue_export-helper-oSXMEj3A.js","../css/main-exactmetrics-BlALUF99.css","./chunks/useSampleData-BG9kvNlB.js","./chunks/Icon--fkRQaED.js","../css/main-exactmetrics-DdCOUrGJ.css","./chunks/useFeatureGate-AuD4tn8P.js","../css/main-exactmetrics-tn0RQdqM.css","./chunks/DashboardCreate-C0KY_OIO.js","./chunks/useAuthGate-CZakOJgu.js","./chunks/ReAuthModal-Cp18Y62o.js","../css/main-exactmetrics-Du5DxmSn.css","./chunks/html2pdf-MPm2rWml.js","../css/main-exactmetrics-D5i6pgxk.css","../css/main-exactmetrics-C1F5oIAZ.css","../css/main-exactmetrics-Bs2heOd-.css","./chunks/DashboardEdit-5N_ulWBT.js","./chunks/DashboardView-CWTr6dhH.js","../css/main-exactmetrics-Ey0IgSK7.css"])))=>i.map(i=>d[i]);
import { _ as _sfc_main$1, a as __vitePreload, c as createRouter, b as createWebHashHistory, s as setupPinia } from "./chunks/TheAppHeader-yUeOxtaF.js";
import { c as createElementBlock, a as createBaseVNode, b as createVNode, r as resolveComponent, o as openBlock, d as createApp } from "./chunks/_plugin-vue_export-helper-oSXMEj3A.js";
const _hoisted_1 = { class: "mi-custom-dashboard-app" };
const _hoisted_2 = { id: "exactmetrics-app" };
const _hoisted_3 = { class: "exactmetrics-dashboard-content" };
const _hoisted_4 = { class: "exactmetrics-container" };
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$1),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_RouterView)
            ])
          ])
        ])
      ]);
    };
  }
};
const DashboardList = () => __vitePreload(() => import("./chunks/DashboardList.lite-DBVTu_xU.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url);
const DashboardCreate = () => __vitePreload(() => import("./chunks/DashboardCreate-C0KY_OIO.js"), true ? __vite__mapDeps([9,1,2,3,10,5,6,7,11,12,13,14,15,4,8,16]) : void 0, import.meta.url);
const DashboardEdit = () => __vitePreload(() => import("./chunks/DashboardEdit-5N_ulWBT.js"), true ? __vite__mapDeps([17,9,1,2,3,10,5,6,7,11,12,13,14,15,4,8,16]) : void 0, import.meta.url);
const DashboardView = () => __vitePreload(() => import("./chunks/DashboardView-CWTr6dhH.js"), true ? __vite__mapDeps([18,1,2,3,10,5,6,7,11,12,13,14,15,4,8]) : void 0, import.meta.url);
const routes = [
  {
    path: "/",
    redirect: "/dashboards"
  },
  {
    path: "/dashboards",
    name: "dashboard-list",
    component: DashboardList,
    meta: {
      title: "Custom Views",
      requiresAuth: true
    }
  },
  {
    path: "/dashboards/add",
    name: "dashboard-add",
    component: DashboardList,
    meta: {
      title: "Add Custom View",
      requiresAuth: true,
      requiresEdit: true,
      showTemplateSelector: true
    }
  },
  {
    path: "/dashboards/new",
    name: "dashboard-create",
    component: DashboardCreate,
    meta: {
      title: "Create View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/edit",
    name: "dashboard-edit",
    component: DashboardEdit,
    props: true,
    meta: {
      title: "Edit View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/view",
    name: "dashboard-view",
    component: DashboardView,
    props: true,
    meta: {
      title: "View",
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboards"
  }
];
function hasCustomViewsAccess() {
  return false;
}
const stylePromise = __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([19]) : void 0, import.meta.url);
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, _from, next) => {
  if (!hasCustomViewsAccess() && (to.name === "dashboard-list" || to.path === "/dashboards")) {
    next({ name: "dashboard-view", params: { id: "sample" } });
    return;
  }
  next();
});
const app = createApp(_sfc_main);
app.use(router);
setupPinia(app);
app.config.errorHandler = (err, _vm, info) => {
  console.error("Custom View Error:", err, info);
};
stylePromise.then(() => {
  app.mount("#exactmetrics-custom-dashboard-app");
});
