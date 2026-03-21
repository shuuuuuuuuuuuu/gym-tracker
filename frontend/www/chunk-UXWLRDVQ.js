import {
  IonButtons,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5KE3V35Y.js";

// src/app/components/app-header/app-header.component.ts
var _c0 = ["*"];
var _AppHeaderComponent = class _AppHeaderComponent {
  constructor() {
    this.title = "";
  }
};
_AppHeaderComponent.\u0275fac = function AppHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppHeaderComponent)();
};
_AppHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppHeaderComponent, selectors: [["app-header"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 6, vars: 1, consts: [["slot", "end"]], template: function AppHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 0);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.title);
  }
}, dependencies: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons
], encapsulation: 2 });
var AppHeaderComponent = _AppHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons
    ], template: '<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ title }}</ion-title>\n\n    <ion-buttons slot="end">\n      <ng-content></ng-content>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n' }]
  }], null, { title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppHeaderComponent, { className: "AppHeaderComponent", filePath: "src/app/components/app-header/app-header.component.ts", lineNumber: 16 });
})();

export {
  AppHeaderComponent
};
//# sourceMappingURL=chunk-UXWLRDVQ.js.map
