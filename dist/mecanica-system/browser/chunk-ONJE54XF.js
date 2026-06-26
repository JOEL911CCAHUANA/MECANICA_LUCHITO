import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  RequiredValidator,
  Router,
  __async,
  createUserWithEmailAndPassword,
  getAuth,
  setClassMetadata,
  signInWithEmailAndPassword,
  updateProfile,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ENZX5TG4.js";

// src/app/usuarios/login/login.component.ts
function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label");
    \u0275\u0275text(2, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_9_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.name);
  }
}
var LoginComponent = class _LoginComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  isLogin = true;
  loading = false;
  errorMessage = "";
  successMessage = "";
  email = "";
  password = "";
  name = "";
  toggleForm() {
    this.isLogin = !this.isLogin;
    this.clearMessages();
  }
  submit() {
    return __async(this, null, function* () {
      this.clearMessages();
      this.loading = true;
      const auth = getAuth();
      try {
        if (this.isLogin) {
          yield signInWithEmailAndPassword(auth, this.email, this.password);
          this.router.navigate(["/clientes"]);
        } else {
          const userCredential = yield createUserWithEmailAndPassword(auth, this.email, this.password);
          if (this.name.trim()) {
            yield updateProfile(userCredential.user, { displayName: this.name.trim() });
          }
          this.successMessage = "Cuenta creada correctamente";
          this.router.navigate(["/clientes"]);
        }
      } catch (error) {
        this.errorMessage = this.mapFirebaseError(error);
      } finally {
        this.loading = false;
      }
    });
  }
  clearMessages() {
    this.errorMessage = "";
    this.successMessage = "";
  }
  mapFirebaseError(error) {
    const firebaseError = error;
    if (firebaseError?.code) {
      switch (firebaseError.code) {
        case "auth/invalid-email":
          return "El correo no es v\xE1lido.";
        case "auth/user-not-found":
          return "Usuario no encontrado.";
        case "auth/wrong-password":
          return "Contrase\xF1a incorrecta.";
        case "auth/email-already-in-use":
          return "El correo ya est\xE1 en uso.";
        case "auth/weak-password":
          return "La contrase\xF1a es demasiado d\xE9bil.";
        default:
          return firebaseError.message ?? "Ocurri\xF3 un error con Firebase.";
      }
    }
    return "Ocurri\xF3 un error. Intenta de nuevo.";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 24, vars: 10, consts: [[1, "container"], [1, "form-box"], [1, "subtitle"], [3, "ngSubmit"], ["class", "message error", 4, "ngIf"], ["class", "message success", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], [1, "input-group"], ["type", "email", "placeholder", "Ingrese su correo", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Ingrese su contrase\xF1a", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], [1, "toggle-text"], [3, "click"], [1, "message", "error"], [1, "message", "success"], ["type", "text", "placeholder", "Ingrese su nombre", "name", "name", 3, "ngModelChange", "ngModel"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Sistema Mec\xE1nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "form", 3);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() {
        return ctx.submit();
      });
      \u0275\u0275template(7, LoginComponent_div_7_Template, 2, 1, "div", 4)(8, LoginComponent_div_8_Template, 2, 1, "div", 5)(9, LoginComponent_div_9_Template, 4, 1, "div", 6);
      \u0275\u0275elementStart(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 7)(15, "label");
      \u0275\u0275text(16, "Contrase\xF1a");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 11);
      \u0275\u0275text(21);
      \u0275\u0275elementStart(22, "span", 12);
      \u0275\u0275listener("click", function LoginComponent_Template_span_click_22_listener() {
        return ctx.toggleForm();
      });
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.isLogin ? "Iniciar Sesi\xF3n" : "Crear Cuenta");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLogin);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLogin ? "Ingresar" : "Registrarse", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isLogin ? "\xBFNo tienes cuenta?" : "\xBFYa tienes cuenta?", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isLogin ? "Registrarse" : "Iniciar sesi\xF3n");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1d2671,\n      #c33764);\n}\n.form-box[_ngcontent-%COMP%] {\n  width: 400px;\n  background: white;\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #1d2671;\n  margin-bottom: 10px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: gray;\n  margin-bottom: 30px;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-weight: bold;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: 0.3s;\n}\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #1d2671;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background: #1d2671;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #2938a3;\n}\n.toggle-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n.toggle-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1d2671;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="container">
  <div class="form-box">
    <h1>{{ isLogin ? 'Iniciar Sesi\xF3n' : 'Crear Cuenta' }}</h1>

    <p class="subtitle">Sistema Mec\xE1nico</p>

    <form (ngSubmit)="submit()">
      <div class="message error" *ngIf="errorMessage">{{ errorMessage }}</div>
      <div class="message success" *ngIf="successMessage">{{ successMessage }}</div>

      <div class="input-group" *ngIf="!isLogin">
        <label>Nombre</label>
        <input type="text" placeholder="Ingrese su nombre" [(ngModel)]="name" name="name" />
      </div>

      <div class="input-group">
        <label>Correo</label>
        <input type="email" placeholder="Ingrese su correo" [(ngModel)]="email" name="email" required />
      </div>

      <div class="input-group">
        <label>Contrase\xF1a</label>
        <input type="password" placeholder="Ingrese su contrase\xF1a" [(ngModel)]="password" name="password" required />
      </div>

      <button type="submit" [disabled]="loading">
        {{ isLogin ? 'Ingresar' : 'Registrarse' }}
      </button>
    </form>

    <p class="toggle-text">
      {{ isLogin ? '\xBFNo tienes cuenta?' : '\xBFYa tienes cuenta?' }}
      <span (click)="toggleForm()">{{ isLogin ? 'Registrarse' : 'Iniciar sesi\xF3n' }}</span>
    </p>
  </div>
</div>
`, styles: ["/* src/app/usuarios/login/login.component.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family:\n    Arial,\n    Helvetica,\n    sans-serif;\n}\n.container {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1d2671,\n      #c33764);\n}\n.form-box {\n  width: 400px;\n  background: white;\n  padding: 40px;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\nh1 {\n  text-align: center;\n  color: #1d2671;\n  margin-bottom: 10px;\n}\n.subtitle {\n  text-align: center;\n  color: gray;\n  margin-bottom: 30px;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.input-group label {\n  margin-bottom: 8px;\n  font-weight: bold;\n}\n.input-group input {\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  outline: none;\n  transition: 0.3s;\n}\n.input-group input:focus {\n  border-color: #1d2671;\n}\nbutton {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background: #1d2671;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s;\n}\nbutton:hover {\n  background: #2938a3;\n}\n.toggle-text {\n  margin-top: 20px;\n  text-align: center;\n}\n.toggle-text span {\n  color: #1d2671;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/usuarios/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-ONJE54XF.js.map
