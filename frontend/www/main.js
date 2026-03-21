import {
  add,
  addIcons,
  barbellOutline,
  chevronBack,
  chevronBackOutline,
  chevronForward,
  chevronForwardOutline,
  close,
  exitOutline,
  lockClosedOutline,
  personCircleOutline,
  playSkipBack,
  playSkipForward
} from "./chunk-WACRAYBC.js";
import {
  IonApp,
  IonRouterOutlet,
  provideIonicAngular
} from "./chunk-BLTW27U7.js";
import {
  Component,
  IonicRouteStrategy,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  bootstrapApplication,
  catchError,
  inject,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  throwError,
  withInterceptors,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-5KE3V35Y.js";
import "./chunk-7JBBV5MQ.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-WLQLEYHL.js";
import "./chunk-ZMYRL6MC.js";
import "./chunk-W4U5NYAB.js";
import "./chunk-2BQZEK2L.js";
import "./chunk-ELTLXXM6.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import "./chunk-QHQP2P2Z.js";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    addIcons({
      "person-circle-outline": personCircleOutline
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./login.page-FJPPSETM.js").then((m) => m.LoginPage)
  },
  {
    path: "tabs",
    loadComponent: () => import("./tabs.page-SYGIMICV.js").then((m) => m.TabsPage),
    children: [
      {
        path: "tab1",
        loadComponent: () => import("./tab1.page-JWX2GXNX.js").then((m) => m.Tab1Page)
      },
      {
        path: "tab2",
        loadComponent: () => import("./tab2.page-OXBKPEKX.js").then((m) => m.Tab2Page)
      },
      {
        path: "tab3",
        loadComponent: () => import("./tab3.page-LHCVTX3D.js").then((m) => m.Tab3Page)
      },
      {
        path: "",
        redirectTo: "tab1",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "profile",
    loadComponent: () => import("./profile.page-NQKEF2UJ.js").then((m) => m.ProfilePage)
  }
];

// src/app/interceptors/auth-interceptor.ts
var authInterceptor = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  }) : req;
  return next(authReq).pipe(catchError((error) => {
    if (error.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.navigate(["/login"]);
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([authInterceptor]))
    // ⭐⭐⭐ 關鍵
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
addIcons({
  add,
  close,
  chevronBackOutline,
  chevronForwardOutline,
  personCircleOutline,
  lockClosedOutline,
  exitOutline,
  barbellOutline,
  playSkipBack,
  playSkipForward,
  chevronBack,
  chevronForward
});
//# sourceMappingURL=main.js.map
