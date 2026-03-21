import {
  addIcons,
  ellipse,
  square,
  triangle
} from "./chunk-WACRAYBC.js";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "./chunk-BLTW27U7.js";
import {
  Component,
  EnvironmentInjector,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
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

// src/app/tabs/tabs.page.ts
var _TabsPage = class _TabsPage {
  constructor() {
    this.environmentInjector = inject(EnvironmentInjector);
    addIcons({ triangle, ellipse, square });
  }
};
_TabsPage.\u0275fac = function TabsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPage)();
};
_TabsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabsPage, selectors: [["app-tabs"]], decls: 8, vars: 0, consts: [["slot", "bottom"], ["tab", "tab1", "href", "/tabs/tab1"], ["tab", "tab2", "href", "/tabs/tab2"]], template: function TabsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1)(3, "ion-label");
    \u0275\u0275text(4, "\u7D00\u9304");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-tab-button", 2)(6, "ion-label");
    \u0275\u0275text(7, "\u7D71\u8A08");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [IonTabs, IonTabBar, IonTabButton, IonLabel], encapsulation: 2 });
var TabsPage = _TabsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsPage, [{
    type: Component,
    args: [{ selector: "app-tabs", imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel], template: '<ion-tabs>\n  <ion-tab-bar slot="bottom">\n    <ion-tab-button tab="tab1" href="/tabs/tab1">\n      <!-- <ion-icon aria-hidden="true" name="triangle"></ion-icon> -->\n      <ion-label>\u7D00\u9304</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab="tab2" href="/tabs/tab2">\n      <!-- <ion-icon aria-hidden="true" name="ellipse"></ion-icon> -->\n      <ion-label>\u7D71\u8A08</ion-label>\n    </ion-tab-button>\n\n    <!-- <ion-tab-button tab="tab3" href="/tabs/tab3">\n      <ion-icon aria-hidden="true" name="square"></ion-icon>\n      <ion-label>\u8A2D\u5B9A</ion-label>\n    </ion-tab-button> -->\n  </ion-tab-bar>\n</ion-tabs>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabsPage, { className: "TabsPage", filePath: "src/app/tabs/tabs.page.ts", lineNumber: 12 });
})();
export {
  TabsPage
};
//# sourceMappingURL=tabs.page-SYGIMICV.js.map
