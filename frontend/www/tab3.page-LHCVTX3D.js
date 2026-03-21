import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from "./chunk-BLTW27U7.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/explore-container/explore-container.component.ts
var _ExploreContainerComponent = class _ExploreContainerComponent {
};
_ExploreContainerComponent.\u0275fac = function ExploreContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreContainerComponent)();
};
_ExploreContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreContainerComponent, selectors: [["app-explore-container"]], inputs: { name: "name" }, decls: 7, vars: 1, consts: [["id", "container"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://ionicframework.com/docs/components"]], template: function ExploreContainerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, " Explore ");
    \u0275\u0275domElementStart(5, "a", 1);
    \u0275\u0275text(6, "UI Components");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.name);
  }
}, styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=explore-container.component.css.map */"] });
var ExploreContainerComponent = _ExploreContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreContainerComponent, [{
    type: Component,
    args: [{ selector: "app-explore-container", template: '<div id="container">\n  <strong>{{ name }}</strong>\n  <p>\n    Explore\n    <a\n      target="_blank"\n      rel="noopener noreferrer"\n      href="https://ionicframework.com/docs/components"\n      >UI Components</a\n    >\n  </p>\n</div>\n', styles: ["/* src/app/explore-container/explore-container.component.scss */\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=explore-container.component.css.map */\n"] }]
  }], null, { name: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreContainerComponent, { className: "ExploreContainerComponent", filePath: "src/app/explore-container/explore-container.component.ts", lineNumber: 8 });
})();

// src/app/tab3/tab3.page.ts
var _Tab3Page = class _Tab3Page {
  constructor() {
  }
};
_Tab3Page.\u0275fac = function Tab3Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab3Page)();
};
_Tab3Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab3Page, selectors: [["app-tab3"]], decls: 10, vars: 2, consts: [[3, "translucent"], [3, "fullscreen"], ["collapse", "condense"], ["size", "large"], ["name", "Tab 3 page"]], template: function Tab3Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, " Tab 3 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar")(7, "ion-title", 3);
    \u0275\u0275text(8, "Tab 3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "app-explore-container", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
  }
}, dependencies: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent], encapsulation: 2 });
var Tab3Page = _Tab3Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab3Page, [{
    type: Component,
    args: [{ selector: "app-tab3", imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent], template: '<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-title>\n      Tab 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]="true">\n  <ion-header collapse="condense">\n    <ion-toolbar>\n      <ion-title size="large">Tab 3</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name="Tab 3 page"></app-explore-container>\n</ion-content>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab3Page, { className: "Tab3Page", filePath: "src/app/tab3/tab3.page.ts", lineNumber: 11 });
})();
export {
  Tab3Page
};
//# sourceMappingURL=tab3.page-LHCVTX3D.js.map
