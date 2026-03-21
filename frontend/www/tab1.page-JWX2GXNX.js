import {
  WorkoutService
} from "./chunk-KVFL3EXW.js";
import {
  AppHeaderComponent
} from "./chunk-UXWLRDVQ.js";
import {
  AlertController,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-4IBXKFKT.js";
import "./chunk-WCRYE7U4.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-H3EIEZS4.js";
import "./chunk-A3WLMMKZ.js";
import "./chunk-D4JVJAVH.js";
import "./chunk-ZOIVHI5D.js";
import "./chunk-SVOI3SOO.js";
import "./chunk-CNH67HVB.js";
import "./chunk-XQK2O555.js";
import "./chunk-LSWEXWS5.js";
import "./chunk-4U5P7HOO.js";
import "./chunk-ISO4A3EC.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-Y3WLEH2N.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-JCMPO4RJ.js";
import "./chunk-BLTW27U7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  RequiredValidator,
  Router,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// src/app/tab1/tab1.page.ts
var _c0 = () => [1, 2, 3, 4, 5];
function Tab1Page_ion_text_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 14)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function Tab1Page_ion_list_7_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h2");
    \u0275\u0275element(3, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 19);
    \u0275\u0275elementEnd()()();
  }
}
function Tab1Page_ion_list_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, Tab1Page_ion_list_7_ion_item_1_Template, 8, 0, "ion-item", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function Tab1Page_ion_list_8_ion_item_sliding_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workout_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", workout_r3.weight, " kg \xB7 ");
  }
}
function Tab1Page_ion_list_8_ion_item_sliding_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item-sliding")(1, "ion-item", 20);
    \u0275\u0275listener("click", function Tab1Page_ion_list_8_ion_item_sliding_1_Template_ion_item_click_1_listener() {
      const workout_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(workout_r3));
    });
    \u0275\u0275elementStart(2, "ion-label")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275template(6, Tab1Page_ion_list_8_ion_item_sliding_1_span_6_Template, 2, 1, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-item-options", 21)(12, "ion-item-option", 22);
    \u0275\u0275listener("click", function Tab1Page_ion_list_8_ion_item_sliding_1_Template_ion_item_option_click_12_listener() {
      const workout_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDelete(workout_r3));
    });
    \u0275\u0275text(13, " \u522A\u9664 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const workout_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(workout_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", workout_r3.weight !== null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", workout_r3.value, " ", workout_r3.unit, " \xD7 ", workout_r3.sets, " sets ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, workout_r3.workout_date, "yyyy/MM/dd"));
  }
}
function Tab1Page_ion_list_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, Tab1Page_ion_list_8_ion_item_sliding_1_Template, 14, 9, "ion-item-sliding", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.workouts);
  }
}
function Tab1Page_ion_text_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text")(1, "p", 15);
    \u0275\u0275text(2, "\u76EE\u524D\u6C92\u6709\u5065\u8EAB\u7D00\u9304");
    \u0275\u0275elementEnd()();
  }
}
function Tab1Page_ng_template_11_p_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function Tab1Page_ng_template_11_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function Tab1Page_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 23)(5, "ion-icon", 24);
    \u0275\u0275listener("click", function Tab1Page_ng_template_11_Template_ion_icon_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "ion-content")(7, "ion-card", 25)(8, "ion-card-content")(9, "form", 26, 0);
    \u0275\u0275listener("ngSubmit", function Tab1Page_ng_template_11_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.submitWorkout();
      return \u0275\u0275resetView(ctx_r0.closeCreateModal());
    });
    \u0275\u0275elementStart(11, "ion-item", 27)(12, "ion-label", 28);
    \u0275\u0275text(13, "\u540D\u7A31");
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-item")(17, "ion-input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.name, $event) || (ctx_r0.formWorkout.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item", 27)(19, "ion-label", 28);
    \u0275\u0275text(20, "\u91CD\u91CF (kg)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-item")(22, "ion-input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.weight, $event) || (ctx_r0.formWorkout.weight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-item", 27)(24, "ion-label", 28);
    \u0275\u0275text(25, "\u7D00\u9304\u55AE\u4F4D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.unit, $event) || (ctx_r0.formWorkout.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function Tab1Page_ng_template_11_Template_ion_select_ionChange_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.formWorkout.value = 0);
    });
    \u0275\u0275elementStart(28, "ion-select-option", 33);
    \u0275\u0275text(29, "\u6B21\u6578 (reps)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-select-option", 34);
    \u0275\u0275text(31, "\u6642\u9593 (sec)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "ion-item", 27)(33, "ion-label", 28);
    \u0275\u0275text(34);
    \u0275\u0275elementStart(35, "span", 29);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "ion-item")(38, "ion-input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.value, $event) || (ctx_r0.formWorkout.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkValue());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, Tab1Page_ng_template_11_p_39_Template, 2, 1, "p", 36);
    \u0275\u0275elementStart(40, "ion-item", 27)(41, "ion-label", 28);
    \u0275\u0275text(42, "\u7D44\u6578 (sets)");
    \u0275\u0275elementStart(43, "span", 29);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "ion-item")(46, "ion-input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.sets, $event) || (ctx_r0.formWorkout.sets = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_input_ngModelChange_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.checkSets());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, Tab1Page_ng_template_11_p_47_Template, 2, 1, "p", 36);
    \u0275\u0275elementStart(48, "ion-item", 27)(49, "ion-label", 28);
    \u0275\u0275text(50, "\u65E5\u671F");
    \u0275\u0275elementStart(51, "span", 29);
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "ion-item")(54, "ion-datetime", 38);
    \u0275\u0275twoWayListener("ngModelChange", function Tab1Page_ng_template_11_Template_ion_datetime_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formWorkout.workout_date, $event) || (ctx_r0.formWorkout.workout_date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "ion-button", 39);
    \u0275\u0275text(56, " \u78BA\u8A8D ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const workoutForm_r5 = \u0275\u0275reference(10);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingWorkoutId ? "\u7DE8\u8F2F" : "\u65B0\u589E", " ");
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.weight);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.unit);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formWorkout.unit === "sec" ? "\u6642\u9593 (sec)" : "\u6B21\u6578 (reps)");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.valueError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.sets);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.setsError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formWorkout.workout_date);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", workoutForm_r5.invalid);
  }
}
function Tab1Page_ion_footer_15_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 48);
    \u0275\u0275listener("click", function Tab1Page_ion_footer_15_ion_button_7_Template_ion_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goPage(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("fill", page_r8 === ctx_r0.currentPage ? "solid" : "clear");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function Tab1Page_ion_footer_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-footer", 15)(1, "ion-toolbar")(2, "ion-buttons", 41)(3, "ion-button", 42);
    \u0275\u0275listener("click", function Tab1Page_ion_footer_15_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(1));
    });
    \u0275\u0275element(4, "ion-icon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 42);
    \u0275\u0275listener("click", function Tab1Page_ion_footer_15_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.currentPage - 1));
    });
    \u0275\u0275element(6, "ion-icon", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Tab1Page_ion_footer_15_ion_button_7_Template, 2, 2, "ion-button", 45);
    \u0275\u0275elementStart(8, "ion-button", 42);
    \u0275\u0275listener("click", function Tab1Page_ion_footer_15_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.currentPage + 1));
    });
    \u0275\u0275element(9, "ion-icon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-button", 42);
    \u0275\u0275listener("click", function Tab1Page_ion_footer_15_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goPage(ctx_r0.totalPages));
    });
    \u0275\u0275element(11, "ion-icon", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
var _Tab1Page = class _Tab1Page {
  constructor(workoutService, toastCtrl, alertCtrl, router) {
    this.workoutService = workoutService;
    this.toastCtrl = toastCtrl;
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.workouts = [];
    this.loading = false;
    this.error = null;
    this.currentPage = 1;
    this.totalPages = 0;
    this.pages = [];
    this.formWorkout = {
      name: "",
      weight: null,
      unit: "reps",
      sets: 0,
      value: 0,
      // reps 或 sec 共用
      workout_date: ""
    };
    this.showCreateModal = false;
    this.editingWorkoutId = null;
    this.valueError = false;
    this.setsError = false;
    this.errorMessage = "";
    console.log("WorkoutService OK");
  }
  ngOnInit() {
    this.fetchWorkouts(this.workoutService.currentPage);
    this.checkValue();
    this.checkSets();
  }
  fetchWorkouts(page = this.currentPage || 1, done) {
    this.loading = true;
    this.error = null;
    this.workoutService.getWorkouts(page).subscribe({
      next: (data) => {
        console.log("Workouts raw:", data);
        this.workouts = data.data.data;
        this.currentPage = data.data.current_page;
        this.totalPages = data.data.last_page;
        this.loading = false;
        this.generatePages();
        done?.();
      },
      error: (err) => {
        console.error(err);
        this.error = "\u7121\u6CD5\u53D6\u5F97\u5065\u8EAB\u7D00\u9304";
        this.loading = false;
        done?.();
      }
    });
  }
  presentToast(message) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message,
        duration: 2e3,
        position: "top"
      });
      yield toast.present();
    });
  }
  submitWorkout() {
    const request$ = this.editingWorkoutId ? this.workoutService.updateWorkout(this.editingWorkoutId, this.formWorkout) : this.workoutService.createWorkout(this.formWorkout);
    request$.subscribe({
      next: (res) => {
        this.closeCreateModal();
        this.fetchWorkouts(this.currentPage);
        this.presentToast(this.editingWorkoutId ? "\u66F4\u65B0\u6210\u529F" : "\u65B0\u589E\u6210\u529F");
        this.editingWorkoutId = null;
      },
      error: (err) => {
        console.error("\u65B0\u589E\u5931\u6557", err);
        this.presentToast("\u5931\u6557");
      }
    });
  }
  resetForm() {
    this.formWorkout = {
      name: "",
      weight: null,
      unit: "reps",
      value: 0,
      sets: 0,
      workout_date: ""
    };
    this.checkValue();
    this.checkSets();
  }
  openCreateModal() {
    this.showCreateModal = true;
    this.editingWorkoutId = null;
    this.resetForm();
  }
  closeCreateModal() {
    this.showCreateModal = false;
  }
  confirmDelete(workout) {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "\u78BA\u8A8D\u522A\u9664",
        message: `\u78BA\u5B9A\u8981\u522A\u9664\u300C${workout.name}\u300D\u55CE\uFF1F`,
        buttons: [
          { text: "\u53D6\u6D88", role: "cancel" },
          {
            text: "\u522A\u9664",
            role: "destructive",
            handler: () => this.deleteWorkout(workout.id)
          }
        ]
      });
      yield alert.present();
    });
  }
  deleteWorkout(id) {
    this.workoutService.deleteWorkout(id).subscribe({
      next: () => {
        this.presentToast("\u5DF2\u522A\u9664");
        this.fetchWorkouts(this.currentPage);
      },
      error: () => {
        this.presentToast("\u522A\u9664\u5931\u6557");
      }
    });
  }
  openEditModal(workout) {
    this.editingWorkoutId = workout.id;
    this.formWorkout = {
      name: workout.name,
      weight: workout.weight,
      unit: workout.unit,
      value: workout.value,
      sets: workout.sets,
      workout_date: workout.workout_date
    };
    this.showCreateModal = true;
    this.checkValue();
    this.checkSets();
  }
  doRefresh(event) {
    console.log("Pull to refresh");
    this.fetchWorkouts(this.currentPage, () => {
      event.target.complete();
    });
  }
  // 檢查次數或秒數數值>=1
  checkValue() {
    this.valueError = !this.formWorkout.value || this.formWorkout.value < 1;
    this.errorMessage = "\u6578\u503C\u5FC5\u9808>= 1";
  }
  // 檢查組數數值>=1
  checkSets() {
    this.setsError = !this.formWorkout.sets || this.formWorkout.sets < 1;
  }
  generatePages() {
    const maxVisible = 5;
    let start = Math.max(this.currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, this.totalPages);
    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }
    this.pages = [];
    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }
  goPage(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.currentPage = page;
    this.fetchWorkouts(page);
    this.generatePages();
  }
  goProfile() {
    this.router.navigateByUrl("/profile");
  }
};
_Tab1Page.\u0275fac = function Tab1Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1Page)(\u0275\u0275directiveInject(WorkoutService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router));
};
_Tab1Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab1Page, selectors: [["app-tab1"]], decls: 16, vars: 6, consts: [["workoutForm", "ngForm"], ["title", "GYM TRACKER"], ["fill", "clear", 3, "click"], ["name", "person-circle-outline", 1, "person-circle"], ["color", "dark"], ["color", "danger", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], ["pullingText", "\u66F4\u65B0", "refreshingSpinner", "circles", "refreshingText", "\u66F4\u65B0\u4E2D..."], [4, "ngIf"], [3, "didDismiss", "isOpen"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", 3, "click"], ["name", "add"], ["class", "ion-padding", 4, "ngIf"], ["color", "danger"], [1, "ion-padding"], [4, "ngFor", "ngForOf"], ["animated", "", 2, "width", "60%"], ["animated", "", 2, "width", "80%"], ["animated", "", 2, "width", "40%"], ["button", "", 3, "click"], ["side", "end"], ["color", "danger", 3, "click"], ["slot", "end"], ["name", "close", 3, "click"], [1, "ion-margin"], [3, "ngSubmit"], ["lines", "none"], [1, "form-label"], [1, "required"], ["name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "weight", 3, "ngModelChange", "ngModel"], ["name", "unit", "interface", "popover", "required", "", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "reps"], ["value", "sec"], ["type", "number", "name", "value", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error-text", 4, "ngIf"], ["type", "number", "name", "sets", "required", "", 3, "ngModelChange", "ngModel"], ["presentation", "date", "name", "workout_date", "required", "", 3, "ngModelChange", "ngModel"], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "disabled"], [1, "error-text"], [1, "pagination"], ["fill", "clear", 3, "click", "disabled"], ["slot", "icon-only", "name", "play-skip-back", 1, "white-icon"], ["slot", "icon-only", "name", "chevron-back", 1, "white-icon"], [3, "fill", "click", 4, "ngFor", "ngForOf"], ["slot", "icon-only", "name", "chevron-forward", 1, "white-icon"], ["slot", "icon-only", "name", "play-skip-forward", 1, "white-icon"], [3, "click", "fill"]], template: function Tab1Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-header", 1)(1, "ion-button", 2);
    \u0275\u0275listener("click", function Tab1Page_Template_ion_button_click_1_listener() {
      return ctx.goProfile();
    });
    \u0275\u0275element(2, "ion-icon", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-content", 4);
    \u0275\u0275template(4, Tab1Page_ion_text_4_Template, 3, 1, "ion-text", 5);
    \u0275\u0275elementStart(5, "ion-refresher", 6);
    \u0275\u0275listener("ionRefresh", function Tab1Page_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.doRefresh($event);
    });
    \u0275\u0275element(6, "ion-refresher-content", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Tab1Page_ion_list_7_Template, 2, 2, "ion-list", 8)(8, Tab1Page_ion_list_8_Template, 2, 1, "ion-list", 8)(9, Tab1Page_ion_text_9_Template, 3, 0, "ion-text", 8);
    \u0275\u0275elementStart(10, "ion-modal", 9);
    \u0275\u0275listener("didDismiss", function Tab1Page_Template_ion_modal_didDismiss_10_listener() {
      return ctx.closeCreateModal();
    });
    \u0275\u0275template(11, Tab1Page_ng_template_11_Template, 57, 11, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-fab", 10)(13, "ion-fab-button", 11);
    \u0275\u0275listener("click", function Tab1Page_Template_ion_fab_button_click_13_listener() {
      return ctx.openCreateModal();
    });
    \u0275\u0275element(14, "ion-icon", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, Tab1Page_ion_footer_15_Template, 12, 5, "ion-footer", 13);
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.workouts.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && ctx.workouts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showCreateModal);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.totalPages > 1);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonDatetime, IonFab, IonFabButton, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonRefresher, IonRefresherContent, IonSelect, IonSelectOption, IonSkeletonText, IonText, IonTitle, IonToolbar, IonModal, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AppHeaderComponent, DatePipe], styles: ['@charset "UTF-8";\n\n\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nion-text[color=danger][_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ff6b6b;\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 16px;\n  --background: rgba(255, 255, 255, 0.05);\n}\nion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.required[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 2px;\n}\n.error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.9rem;\n  margin-left: 16px;\n  margin-top: 2px;\n}\nion-modal[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.6 rem;\n  font-weight: bold;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\nion-button[fill=solid][_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --color: #fff;\n}\n.white-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=tab1.page.css.map */'] });
var Tab1Page = _Tab1Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tab1Page, [{
    type: Component,
    args: [{ selector: "app-tab1", standalone: true, imports: [IonicModule, CommonModule, FormsModule, AppHeaderComponent], template: `<app-header title="GYM TRACKER">
  <ion-button fill="clear" (click)="goProfile()">
    <ion-icon name="person-circle-outline" class="person-circle"></ion-icon>
  </ion-button>
</app-header>

<ion-content color="dark">

  <!-- Error Message -->
  <ion-text color="danger" *ngIf="error">
    <p class="ion-padding">{{ error }}</p>
  </ion-text>

  <!-- Pull to Refresh -->
  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">
    <ion-refresher-content
      pullingText="\u66F4\u65B0"
      refreshingSpinner="circles"
      refreshingText="\u66F4\u65B0\u4E2D...">
    </ion-refresher-content>
  </ion-refresher>

  <!-- Skeleton Loading -->
  <ion-list *ngIf="loading">
    <ion-item *ngFor="let i of [1,2,3,4,5]">
      <ion-label>
        <h2>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </h2>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 40%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>


  <!-- Workouts List -->
  <ion-list *ngIf="!loading && workouts.length > 0">
    <ion-item-sliding *ngFor="let workout of workouts">
  
      <ion-item button (click)="openEditModal(workout)">
        <ion-label>
          <h2>{{ workout.name }}</h2>
          <p>
            <span *ngIf="workout.weight !== null">
              {{ workout.weight }} kg \xB7
            </span>
            {{ workout.value }} {{ workout.unit }} \xD7 {{ workout.sets }} sets
          </p>          
          <p>{{ workout.workout_date | date:'yyyy/MM/dd' }}</p>
        </ion-label>
      </ion-item>
  
      <!-- \u6ED1\u52D5\u9078\u9805 -->
      <ion-item-options side="end">
        <ion-item-option color="danger" (click)="confirmDelete(workout)">
          \u522A\u9664
        </ion-item-option>
      </ion-item-options>
  
    </ion-item-sliding>
  </ion-list>
  

  <!-- No Workouts -->
  <ion-text *ngIf="!loading && workouts.length === 0">
    <p class="ion-padding">\u76EE\u524D\u6C92\u6709\u5065\u8EAB\u7D00\u9304</p>
  </ion-text>

  <!-- create/edit workout -->
  <ion-modal [isOpen]="showCreateModal" (didDismiss)="closeCreateModal()">
    <ng-template>
  
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {{ editingWorkoutId ? '\u7DE8\u8F2F' : '\u65B0\u589E' }}
          </ion-title>
          <ion-buttons slot="end">
            <ion-icon name="close" (click)="closeCreateModal()"></ion-icon>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-card class="ion-margin">
          <ion-card-content>
  
            <form (ngSubmit)="submitWorkout(); closeCreateModal()" #workoutForm="ngForm">
  
              <ion-item lines="none">
                <ion-label class="form-label">\u540D\u7A31<span class="required">*</span></ion-label>
              </ion-item>
              <ion-item>
                <ion-input
                  name="name"
                  [(ngModel)]="formWorkout.name"
                  required>
                </ion-input>
              </ion-item>
  
              <ion-item lines="none">
                <ion-label class="form-label">\u91CD\u91CF (kg)</ion-label>
              </ion-item>
              <ion-item>
                <ion-input
                  type="number"
                  name="weight"
                  [(ngModel)]="formWorkout.weight">
                </ion-input>
              </ion-item>
  
              <!-- <ion-item>
                <ion-label class="form-label">\u6B21\u6578 (reps)</ion-label>
                <ion-input
                  type="number"
                  name="reps"
                  [(ngModel)]="formWorkout.reps"
                  required>
                </ion-input>
              </ion-item> -->

              <!-- \u55AE\u4F4D\u5207\u63DB -->
              <ion-item lines="none">
                <ion-label class="form-label">\u7D00\u9304\u55AE\u4F4D</ion-label>
              </ion-item>
              <ion-item>
                <ion-select
                  [(ngModel)]="formWorkout.unit"
                  (ionChange)="formWorkout.value = 0"
                  name="unit"
                  interface="popover"
                  required>

                  <ion-select-option value="reps">\u6B21\u6578 (reps)</ion-select-option>
                  <ion-select-option value="sec">\u6642\u9593 (sec)</ion-select-option>

                </ion-select>
              </ion-item>

              <!-- \u52D5\u614B\u8F38\u5165 -->
              <ion-item lines="none">
                <ion-label class="form-label">
                  {{ formWorkout.unit === 'sec' ? '\u6642\u9593 (sec)' : '\u6B21\u6578 (reps)' }}<span class="required">*</span>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-input
                  type="number"
                  name="value"
                  [(ngModel)]="formWorkout.value"
                  (ngModelChange)="checkValue()"
                  required>
                </ion-input>
              </ion-item>
              <p *ngIf="valueError" class="error-text">{{ errorMessage }}</p>
  
              <ion-item lines="none">
                <ion-label class="form-label">\u7D44\u6578 (sets)<span class="required">*</span></ion-label>
              </ion-item>
              <ion-item>
                <ion-input
                  type="number"
                  name="sets"
                  [(ngModel)]="formWorkout.sets"
                  (ngModelChange)="checkSets()"
                  required>
                </ion-input>
              </ion-item>
              <p *ngIf="setsError" class="error-text">{{ errorMessage }}</p>
  
              <ion-item lines="none">
                <ion-label class="form-label">\u65E5\u671F<span class="required">*</span></ion-label>
              </ion-item>
              <ion-item>
                <ion-datetime
                  presentation="date"
                  name="workout_date"
                  [(ngModel)]="formWorkout.workout_date"
                  required>
                </ion-datetime>
              </ion-item>
  
              <ion-button
                expand="block"
                type="submit"
                [disabled]="workoutForm.invalid"
                class="ion-margin-top">
                \u78BA\u8A8D
              </ion-button>
  
            </form>
  
          </ion-card-content>
        </ion-card>
      </ion-content>
  
    </ng-template>
  </ion-modal>


  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button color="primary" (click)="openCreateModal()">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
  
</ion-content>

  <!-- Pagination -->
  <!-- <ion-footer *ngIf="totalPages > 0" class="ion-padding">
    <ion-button 
      expand="block" 
      fill="outline" 
      [disabled]="currentPage <= 1"
      (click)="fetchWorkouts(currentPage - 1)">
      \u4E0A\u4E00\u9801
    </ion-button>

    <ion-button 
      expand="block" 
      fill="outline" 
      [disabled]="currentPage >= totalPages"
      (click)="fetchWorkouts(currentPage + 1)">
      \u4E0B\u4E00\u9801
    </ion-button>

    <p class="ion-text-center">\u7B2C {{ currentPage }} \u9801 / \u5171 {{ totalPages }} \u7B46</p>
  </ion-footer> -->

  <ion-footer *ngIf="totalPages > 1" class="ion-padding">
    <ion-toolbar>
      <ion-buttons class="pagination">
  
        <!-- \u7B2C\u4E00\u9801 -->
        <ion-button
          fill="clear"
          [disabled]="currentPage === 1"
          (click)="goPage(1)">
          <ion-icon slot="icon-only" name="play-skip-back" class="white-icon"></ion-icon>
        </ion-button>
  
        <!-- \u4E0A\u4E00\u9801 -->
        <ion-button
          fill="clear"
          [disabled]="currentPage === 1"
          (click)="goPage(currentPage - 1)">
          <ion-icon slot="icon-only" name="chevron-back" class="white-icon"></ion-icon>
        </ion-button>
  
        <!-- \u9801\u78BC -->
        <ion-button
          *ngFor="let page of pages"
          [fill]="page === currentPage ? 'solid' : 'clear'"
          (click)="goPage(page)">
          {{ page }}
        </ion-button>
  
        <!-- \u4E0B\u4E00\u9801 -->
        <ion-button
          fill="clear"
          [disabled]="currentPage === totalPages"
          (click)="goPage(currentPage + 1)">
          <ion-icon slot="icon-only" name="chevron-forward" class="white-icon"></ion-icon>
        </ion-button>
  
        <!-- \u6700\u5F8C\u4E00\u9801 -->
        <ion-button
          fill="clear"
          [disabled]="currentPage === totalPages"
          (click)="goPage(totalPages)">
          <ion-icon slot="icon-only" name="play-skip-forward" class="white-icon"></ion-icon>
        </ion-button>
  
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/tab1/tab1.page.scss */\nion-item ion-label h2,\nion-item ion-label p {\n  color: #ffffff;\n}\nion-text[color=danger] p {\n  color: #ff6b6b;\n}\nion-item {\n  --inner-padding-start: 16px;\n  --inner-padding-end: 16px;\n  --background: rgba(255, 255, 255, 0.05);\n}\nion-item h2 {\n  font-weight: bolder;\n}\n.required {\n  color: red;\n  margin-left: 2px;\n}\n.error-text {\n  color: red;\n  font-size: 0.9rem;\n  margin-left: 16px;\n  margin-top: 2px;\n}\nion-modal ion-label {\n  font-size: 1rem;\n}\n.form-label {\n  font-size: 0.6 rem;\n  font-weight: bold;\n}\n.pagination {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\nion-button[fill=solid] {\n  --background: var(--ion-color-primary);\n  --color: #fff;\n}\n.white-icon {\n  color: #fff;\n}\n/*# sourceMappingURL=tab1.page.css.map */\n'] }]
  }], () => [{ type: WorkoutService }, { type: ToastController }, { type: AlertController }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab1Page, { className: "Tab1Page", filePath: "src/app/tab1/tab1.page.ts", lineNumber: 19 });
})();
export {
  Tab1Page
};
//# sourceMappingURL=tab1.page-JWX2GXNX.js.map
