import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Component2,
  DefaultValueAccessor,
  FirebaseError,
  FormsModule,
  Injectable,
  LogLevel,
  Logger,
  MaxLengthValidator,
  NavigationEnd,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgSelectOption,
  NgZone,
  Observable,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SDK_VERSION,
  SelectControlValueAccessor,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  _getProvider,
  _isFirebaseServerApp,
  _registerComponent,
  bootstrapApplication,
  computed,
  createMockUserToken,
  deepEqual,
  filter,
  getApp,
  getAuth,
  getDefaultEmulatorHostnameAndPort,
  getModularInstance,
  getUA,
  initializeApp,
  inject,
  isCloudWorkstation,
  isSafari,
  onAuthStateChanged,
  pingServer,
  provideRouter,
  provideZoneChangeDetection,
  registerVersion,
  setClassMetadata,
  signal,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ENZX5TG4.js";

// node_modules/firebase/app/dist/esm/index.esm.js
var name = "firebase";
var version = "12.13.0";
registerVersion(name, version, "app");

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bloom_blob_es2018 = {};
var Integer;
var Md5;
(function() {
  var h;
  function k(d, a) {
    function c() {
    }
    c.prototype = a.prototype;
    d.F = a.prototype;
    d.prototype = new c();
    d.prototype.constructor = d;
    d.D = function(f, e, g) {
      for (var b2 = Array(arguments.length - 2), r = 2; r < arguments.length; r++) b2[r - 2] = arguments[r];
      return a.prototype[e].apply(f, b2);
    };
  }
  function l() {
    this.blockSize = -1;
  }
  function m() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.C = Array(this.blockSize);
    this.o = this.h = 0;
    this.u();
  }
  k(m, l);
  m.prototype.u = function() {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  function n(d, a, c) {
    c || (c = 0);
    const f = Array(16);
    if (typeof a === "string") for (var e = 0; e < 16; ++e) f[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
    else for (e = 0; e < 16; ++e) f[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
    a = d.g[0];
    c = d.g[1];
    e = d.g[2];
    let g = d.g[3], b2;
    b2 = a + (g ^ c & (e ^ g)) + f[0] + 3614090360 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + f[1] + 3905402710 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + f[2] + 606105819 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + f[3] + 3250441966 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + f[4] + 4118548399 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + f[5] + 1200080426 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + f[6] + 2821735955 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + f[7] + 4249261313 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + f[8] + 1770035416 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + f[9] + 2336552879 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + f[10] + 4294925233 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + f[11] + 2304563134 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (g ^ c & (e ^ g)) + f[12] + 1804603682 & 4294967295;
    a = c + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g + (e ^ a & (c ^ e)) + f[13] + 4254626195 & 4294967295;
    g = a + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c ^ g & (a ^ c)) + f[14] + 2792965006 & 4294967295;
    e = g + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c + (a ^ e & (g ^ a)) + f[15] + 1236535329 & 4294967295;
    c = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a + (e ^ g & (c ^ e)) + f[1] + 4129170786 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + f[6] + 3225465664 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + f[11] + 643717713 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + f[0] + 3921069994 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + f[5] + 3593408605 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + f[10] + 38016083 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + f[15] + 3634488961 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + f[4] + 3889429448 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + f[9] + 568446438 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + f[14] + 3275163606 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + f[3] + 4107603335 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + f[8] + 1163531501 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (e ^ g & (c ^ e)) + f[13] + 2850285829 & 4294967295;
    a = c + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g + (c ^ e & (a ^ c)) + f[2] + 4243563512 & 4294967295;
    g = a + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a ^ c & (g ^ a)) + f[7] + 1735328473 & 4294967295;
    e = g + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c + (g ^ a & (e ^ g)) + f[12] + 2368359562 & 4294967295;
    c = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a + (c ^ e ^ g) + f[5] + 4294588738 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + f[8] + 2272392833 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + f[11] + 1839030562 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + f[14] + 4259657740 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + f[1] + 2763975236 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + f[4] + 1272893353 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + f[7] + 4139469664 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + f[10] + 3200236656 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + f[13] + 681279174 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + f[0] + 3936430074 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + f[3] + 3572445317 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + f[6] + 76029189 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (c ^ e ^ g) + f[9] + 3654602809 & 4294967295;
    a = c + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g + (a ^ c ^ e) + f[12] + 3873151461 & 4294967295;
    g = a + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g ^ a ^ c) + f[15] + 530742520 & 4294967295;
    e = g + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c + (e ^ g ^ a) + f[2] + 3299628645 & 4294967295;
    c = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a + (e ^ (c | ~g)) + f[0] + 4096336452 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + f[7] + 1126891415 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + f[14] + 2878612391 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + f[5] + 4237533241 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + f[12] + 1700485571 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + f[3] + 2399980690 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + f[10] + 4293915773 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + f[1] + 2240044497 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + f[8] + 1873313359 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + f[15] + 4264355552 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + f[6] + 2734768916 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + f[13] + 1309151649 & 4294967295;
    c = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a + (e ^ (c | ~g)) + f[4] + 4149444226 & 4294967295;
    a = c + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g + (c ^ (a | ~e)) + f[11] + 3174756917 & 4294967295;
    g = a + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a ^ (g | ~c)) + f[2] + 718787259 & 4294967295;
    e = g + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c + (g ^ (e | ~a)) + f[9] + 3951481745 & 4294967295;
    d.g[0] = d.g[0] + a & 4294967295;
    d.g[1] = d.g[1] + (e + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
    d.g[2] = d.g[2] + e & 4294967295;
    d.g[3] = d.g[3] + g & 4294967295;
  }
  m.prototype.v = function(d, a) {
    a === void 0 && (a = d.length);
    const c = a - this.blockSize, f = this.C;
    let e = this.h, g = 0;
    for (; g < a; ) {
      if (e == 0) for (; g <= c; ) n(this, d, g), g += this.blockSize;
      if (typeof d === "string") for (; g < a; ) {
        if (f[e++] = d.charCodeAt(g++), e == this.blockSize) {
          n(this, f);
          e = 0;
          break;
        }
      }
      else for (; g < a; ) if (f[e++] = d[g++], e == this.blockSize) {
        n(this, f);
        e = 0;
        break;
      }
    }
    this.h = e;
    this.o += a;
  };
  m.prototype.A = function() {
    var d = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
    d[0] = 128;
    for (var a = 1; a < d.length - 8; ++a) d[a] = 0;
    a = this.o * 8;
    for (var c = d.length - 8; c < d.length; ++c) d[c] = a & 255, a /= 256;
    this.v(d);
    d = Array(16);
    a = 0;
    for (c = 0; c < 4; ++c) for (let f = 0; f < 32; f += 8) d[a++] = this.g[c] >>> f & 255;
    return d;
  };
  function p(d, a) {
    var c = q2;
    return Object.prototype.hasOwnProperty.call(c, d) ? c[d] : c[d] = a(d);
  }
  function t(d, a) {
    this.h = a;
    const c = [];
    let f = true;
    for (let e = d.length - 1; e >= 0; e--) {
      const g = d[e] | 0;
      f && g == a || (c[e] = g, f = false);
    }
    this.g = c;
  }
  var q2 = {};
  function u(d) {
    return -128 <= d && d < 128 ? p(d, function(a) {
      return new t([a | 0], a < 0 ? -1 : 0);
    }) : new t([d | 0], d < 0 ? -1 : 0);
  }
  function v2(d) {
    if (isNaN(d) || !isFinite(d)) return w;
    if (d < 0) return x2(v2(-d));
    const a = [];
    let c = 1;
    for (let f = 0; d >= c; f++) a[f] = d / c | 0, c *= 4294967296;
    return new t(a, 0);
  }
  function y(d, a) {
    if (d.length == 0) throw Error("number format error: empty string");
    a = a || 10;
    if (a < 2 || 36 < a) throw Error("radix out of range: " + a);
    if (d.charAt(0) == "-") return x2(y(d.substring(1), a));
    if (d.indexOf("-") >= 0) throw Error('number format error: interior "-" character');
    const c = v2(Math.pow(a, 8));
    let f = w;
    for (let g = 0; g < d.length; g += 8) {
      var e = Math.min(8, d.length - g);
      const b2 = parseInt(d.substring(g, g + e), a);
      e < 8 ? (e = v2(Math.pow(a, e)), f = f.j(e).add(v2(b2))) : (f = f.j(c), f = f.add(v2(b2)));
    }
    return f;
  }
  var w = u(0), z = u(1), A = u(16777216);
  h = t.prototype;
  h.m = function() {
    if (B2(this)) return -x2(this).m();
    let d = 0, a = 1;
    for (let c = 0; c < this.g.length; c++) {
      const f = this.i(c);
      d += (f >= 0 ? f : 4294967296 + f) * a;
      a *= 4294967296;
    }
    return d;
  };
  h.toString = function(d) {
    d = d || 10;
    if (d < 2 || 36 < d) throw Error("radix out of range: " + d);
    if (C2(this)) return "0";
    if (B2(this)) return "-" + x2(this).toString(d);
    const a = v2(Math.pow(d, 6));
    var c = this;
    let f = "";
    for (; ; ) {
      const e = D2(c, a).g;
      c = F2(c, e.j(a));
      let g = ((c.g.length > 0 ? c.g[0] : c.h) >>> 0).toString(d);
      c = e;
      if (C2(c)) return g + f;
      for (; g.length < 6; ) g = "0" + g;
      f = g + f;
    }
  };
  h.i = function(d) {
    return d < 0 ? 0 : d < this.g.length ? this.g[d] : this.h;
  };
  function C2(d) {
    if (d.h != 0) return false;
    for (let a = 0; a < d.g.length; a++) if (d.g[a] != 0) return false;
    return true;
  }
  function B2(d) {
    return d.h == -1;
  }
  h.l = function(d) {
    d = F2(this, d);
    return B2(d) ? -1 : C2(d) ? 0 : 1;
  };
  function x2(d) {
    const a = d.g.length, c = [];
    for (let f = 0; f < a; f++) c[f] = ~d.g[f];
    return new t(c, ~d.h).add(z);
  }
  h.abs = function() {
    return B2(this) ? x2(this) : this;
  };
  h.add = function(d) {
    const a = Math.max(this.g.length, d.g.length), c = [];
    let f = 0;
    for (let e = 0; e <= a; e++) {
      let g = f + (this.i(e) & 65535) + (d.i(e) & 65535), b2 = (g >>> 16) + (this.i(e) >>> 16) + (d.i(e) >>> 16);
      f = b2 >>> 16;
      g &= 65535;
      b2 &= 65535;
      c[e] = b2 << 16 | g;
    }
    return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
  };
  function F2(d, a) {
    return d.add(x2(a));
  }
  h.j = function(d) {
    if (C2(this) || C2(d)) return w;
    if (B2(this)) return B2(d) ? x2(this).j(x2(d)) : x2(x2(this).j(d));
    if (B2(d)) return x2(this.j(x2(d)));
    if (this.l(A) < 0 && d.l(A) < 0) return v2(this.m() * d.m());
    const a = this.g.length + d.g.length, c = [];
    for (var f = 0; f < 2 * a; f++) c[f] = 0;
    for (f = 0; f < this.g.length; f++) for (let e = 0; e < d.g.length; e++) {
      const g = this.i(f) >>> 16, b2 = this.i(f) & 65535, r = d.i(e) >>> 16, E = d.i(e) & 65535;
      c[2 * f + 2 * e] += b2 * E;
      G2(c, 2 * f + 2 * e);
      c[2 * f + 2 * e + 1] += g * E;
      G2(c, 2 * f + 2 * e + 1);
      c[2 * f + 2 * e + 1] += b2 * r;
      G2(c, 2 * f + 2 * e + 1);
      c[2 * f + 2 * e + 2] += g * r;
      G2(c, 2 * f + 2 * e + 2);
    }
    for (d = 0; d < a; d++) c[d] = c[2 * d + 1] << 16 | c[2 * d];
    for (d = a; d < 2 * a; d++) c[d] = 0;
    return new t(c, 0);
  };
  function G2(d, a) {
    for (; (d[a] & 65535) != d[a]; ) d[a + 1] += d[a] >>> 16, d[a] &= 65535, a++;
  }
  function H(d, a) {
    this.g = d;
    this.h = a;
  }
  function D2(d, a) {
    if (C2(a)) throw Error("division by zero");
    if (C2(d)) return new H(w, w);
    if (B2(d)) return a = D2(x2(d), a), new H(x2(a.g), x2(a.h));
    if (B2(a)) return a = D2(d, x2(a)), new H(x2(a.g), a.h);
    if (d.g.length > 30) {
      if (B2(d) || B2(a)) throw Error("slowDivide_ only works with positive integers.");
      for (var c = z, f = a; f.l(d) <= 0; ) c = I(c), f = I(f);
      var e = J(c, 1), g = J(f, 1);
      f = J(f, 2);
      for (c = J(c, 2); !C2(f); ) {
        var b2 = g.add(f);
        b2.l(d) <= 0 && (e = e.add(c), g = b2);
        f = J(f, 1);
        c = J(c, 1);
      }
      a = F2(d, e.j(a));
      return new H(e, a);
    }
    for (e = w; d.l(a) >= 0; ) {
      c = Math.max(1, Math.floor(d.m() / a.m()));
      f = Math.ceil(Math.log(c) / Math.LN2);
      f = f <= 48 ? 1 : Math.pow(2, f - 48);
      g = v2(c);
      for (b2 = g.j(a); B2(b2) || b2.l(d) > 0; ) c -= f, g = v2(c), b2 = g.j(a);
      C2(g) && (g = z);
      e = e.add(g);
      d = F2(d, b2);
    }
    return new H(e, d);
  }
  h.B = function(d) {
    return D2(this, d).h;
  };
  h.and = function(d) {
    const a = Math.max(this.g.length, d.g.length), c = [];
    for (let f = 0; f < a; f++) c[f] = this.i(f) & d.i(f);
    return new t(c, this.h & d.h);
  };
  h.or = function(d) {
    const a = Math.max(this.g.length, d.g.length), c = [];
    for (let f = 0; f < a; f++) c[f] = this.i(f) | d.i(f);
    return new t(c, this.h | d.h);
  };
  h.xor = function(d) {
    const a = Math.max(this.g.length, d.g.length), c = [];
    for (let f = 0; f < a; f++) c[f] = this.i(f) ^ d.i(f);
    return new t(c, this.h ^ d.h);
  };
  function I(d) {
    const a = d.g.length + 1, c = [];
    for (let f = 0; f < a; f++) c[f] = d.i(f) << 1 | d.i(f - 1) >>> 31;
    return new t(c, d.h);
  }
  function J(d, a) {
    const c = a >> 5;
    a %= 32;
    const f = d.g.length - c, e = [];
    for (let g = 0; g < f; g++) e[g] = a > 0 ? d.i(g + c) >>> a | d.i(g + c + 1) << 32 - a : d.i(g + c);
    return new t(e, d.h);
  }
  m.prototype.digest = m.prototype.A;
  m.prototype.reset = m.prototype.u;
  m.prototype.update = m.prototype.v;
  Md5 = bloom_blob_es2018.Md5 = m;
  t.prototype.add = t.prototype.add;
  t.prototype.multiply = t.prototype.j;
  t.prototype.modulo = t.prototype.B;
  t.prototype.compare = t.prototype.l;
  t.prototype.toNumber = t.prototype.m;
  t.prototype.toString = t.prototype.toString;
  t.prototype.getBits = t.prototype.i;
  t.fromNumber = v2;
  t.fromString = y;
  Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var webchannel_blob_es2018 = {};
var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
  var h, aa = Object.defineProperty;
  function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal2 && commonjsGlobal2];
    for (var b2 = 0; b2 < a.length; ++b2) {
      var c = a[b2];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a, b2) {
    if (b2) a: {
      var c = ca;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) break a;
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b2 = b2(d);
      b2 != d && b2 != null && aa(c, a, {
        configurable: true,
        writable: true,
        value: b2
      });
    }
  }
  da("Symbol.dispose", function(a) {
    return a ? a : /* @__PURE__ */ Symbol("Symbol.dispose");
  });
  da("Array.prototype.values", function(a) {
    return a ? a : function() {
      return this[Symbol.iterator]();
    };
  });
  da("Object.entries", function(a) {
    return a ? a : function(b2) {
      var c = [], d;
      for (d in b2) Object.prototype.hasOwnProperty.call(b2, d) && c.push([d, b2[d]]);
      return c;
    };
  });
  var ea = ea || {}, l = this || self;
  function n(a) {
    var b2 = typeof a;
    return b2 == "object" && a != null || b2 == "function";
  }
  function fa(a, b2, c) {
    return a.call.apply(a.bind, arguments);
  }
  function p(a, b2, c) {
    p = fa;
    return p.apply(null, arguments);
  }
  function ha(a, b2) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function t(a, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a.Z = b2.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Ob = function(d, e, f) {
      for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
      return b2.prototype[e].apply(d, g);
    };
  }
  var ia = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? (a) => a && AsyncContext.Snapshot.wrap(a) : (a) => a;
  function ja(a) {
    const b2 = a.length;
    if (b2 > 0) {
      const c = Array(b2);
      for (let d = 0; d < b2; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function ka(a, b2) {
    for (let d = 1; d < arguments.length; d++) {
      const e = arguments[d];
      var c = typeof e;
      c = c != "object" ? c : e ? Array.isArray(e) ? "array" : c : "null";
      if (c == "array" || c == "object" && typeof e.length == "number") {
        c = a.length || 0;
        const f = e.length || 0;
        a.length = c + f;
        for (let g = 0; g < f; g++) a[c + g] = e[g];
      } else a.push(e);
    }
  }
  class la {
    constructor(a, b2) {
      this.i = a;
      this.j = b2;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a;
      this.h > 0 ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
      return a;
    }
  }
  function ma(a) {
    l.setTimeout(() => {
      throw a;
    }, 0);
  }
  function na() {
    var a = oa;
    let b2 = null;
    a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
    return b2;
  }
  class pa {
    constructor() {
      this.h = this.g = null;
    }
    add(a, b2) {
      const c = qa.get();
      c.set(a, b2);
      this.h ? this.h.next = c : this.g = c;
      this.h = c;
    }
  }
  var qa = new la(() => new ra(), (a) => a.reset());
  class ra {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a, b2) {
      this.h = a;
      this.g = b2;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let u, v2 = false, oa = new pa(), ta = () => {
    const a = Promise.resolve(void 0);
    u = () => {
      a.then(sa);
    };
  };
  function sa() {
    for (var a; a = na(); ) {
      try {
        a.h.call(a.g);
      } catch (c) {
        ma(c);
      }
      var b2 = qa;
      b2.j(a);
      b2.h < 100 && (b2.h++, a.next = b2.g, b2.g = a);
    }
    v2 = false;
  }
  function w() {
    this.u = this.u;
    this.C = this.C;
  }
  w.prototype.u = false;
  w.prototype.dispose = function() {
    this.u || (this.u = true, this.N());
  };
  w.prototype[Symbol.dispose] = function() {
    this.dispose();
  };
  w.prototype.N = function() {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function x2(a, b2) {
    this.type = a;
    this.g = this.target = b2;
    this.defaultPrevented = false;
  }
  x2.prototype.h = function() {
    this.defaultPrevented = true;
  };
  var ua = (function() {
    if (!l.addEventListener || !Object.defineProperty) return false;
    var a = false, b2 = Object.defineProperty({}, "passive", {
      get: function() {
        a = true;
      }
    });
    try {
      const c = () => {
      };
      l.addEventListener("test", c, b2);
      l.removeEventListener("test", c, b2);
    } catch (c) {
    }
    return a;
  })();
  function y(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function z(a, b2) {
    x2.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    a && this.init(a, b2);
  }
  t(z, x2);
  z.prototype.init = function(a, b2) {
    const c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.g = b2;
    b2 = a.relatedTarget;
    b2 || (c == "mouseover" ? b2 = a.fromElement : c == "mouseout" && (b2 = a.toElement));
    this.relatedTarget = b2;
    d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = a.pointerType;
    this.state = a.state;
    this.i = a;
    a.defaultPrevented && z.Z.h.call(this);
  };
  z.prototype.h = function() {
    z.Z.h.call(this);
    const a = this.i;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var B2 = "closure_listenable_" + (Math.random() * 1e6 | 0);
  var va = 0;
  function wa(a, b2, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b2;
    this.type = c;
    this.capture = !!d;
    this.ha = e;
    this.key = ++va;
    this.da = this.fa = false;
  }
  function xa(a) {
    a.da = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.ha = null;
  }
  function ya(a, b2, c) {
    for (const d in a) b2.call(c, a[d], d, a);
  }
  function Aa(a, b2) {
    for (const c in a) b2.call(void 0, a[c], c, a);
  }
  function Ba(a) {
    const b2 = {};
    for (const c in a) b2[c] = a[c];
    return b2;
  }
  const Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Da(a, b2) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Ca.length; f++) c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Ea(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  Ea.prototype.add = function(a, b2, c, d, e) {
    const f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    const g = Fa(a, b2, d, e);
    g > -1 ? (b2 = a[g], c || (b2.fa = false)) : (b2 = new wa(b2, this.src, f, !!d, e), b2.fa = c, a.push(b2));
    return b2;
  };
  function Ga(a, b2) {
    const c = b2.type;
    if (c in a.g) {
      var d = a.g[c], e = Array.prototype.indexOf.call(d, b2, void 0), f;
      (f = e >= 0) && Array.prototype.splice.call(d, e, 1);
      f && (xa(b2), a.g[c].length == 0 && (delete a.g[c], a.h--));
    }
  }
  function Fa(a, b2, c, d) {
    for (let e = 0; e < a.length; ++e) {
      const f = a[e];
      if (!f.da && f.listener == b2 && f.capture == !!c && f.ha == d) return e;
    }
    return -1;
  }
  var Ha = "closure_lm_" + (Math.random() * 1e6 | 0), Ia = {};
  function Ka(a, b2, c, d, e) {
    if (d && d.once) return La(a, b2, c, d, e);
    if (Array.isArray(b2)) {
      for (let f = 0; f < b2.length; f++) Ka(a, b2[f], c, d, e);
      return null;
    }
    c = Ma(c);
    return a && a[B2] ? a.J(b2, c, n(d) ? !!d.capture : !!d, e) : Na(a, b2, c, false, d, e);
  }
  function Na(a, b2, c, d, e, f) {
    if (!b2) throw Error("Invalid event type");
    const g = n(e) ? !!e.capture : !!e;
    let k = Oa(a);
    k || (a[Ha] = k = new Ea(a));
    c = k.add(b2, c, d, g, f);
    if (c.proxy) return c;
    d = Pa();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) ua || (e = g), e === void 0 && (e = false), a.addEventListener(b2.toString(), d, e);
    else if (a.attachEvent) a.attachEvent(Qa(b2.toString()), d);
    else if (a.addListener && a.removeListener) a.addListener(d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return c;
  }
  function Pa() {
    function a(c) {
      return b2.call(a.src, a.listener, c);
    }
    const b2 = Ra;
    return a;
  }
  function La(a, b2, c, d, e) {
    if (Array.isArray(b2)) {
      for (let f = 0; f < b2.length; f++) La(a, b2[f], c, d, e);
      return null;
    }
    c = Ma(c);
    return a && a[B2] ? a.K(b2, c, n(d) ? !!d.capture : !!d, e) : Na(a, b2, c, true, d, e);
  }
  function Sa(a, b2, c, d, e) {
    if (Array.isArray(b2)) for (var f = 0; f < b2.length; f++) Sa(a, b2[f], c, d, e);
    else (d = n(d) ? !!d.capture : !!d, c = Ma(c), a && a[B2]) ? (a = a.i, f = String(b2).toString(), f in a.g && (b2 = a.g[f], c = Fa(b2, c, d, e), c > -1 && (xa(b2[c]), Array.prototype.splice.call(b2, c, 1), b2.length == 0 && (delete a.g[f], a.h--)))) : a && (a = Oa(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = Fa(b2, c, d, e)), (c = a > -1 ? b2[a] : null) && Ta(c));
  }
  function Ta(a) {
    if (typeof a !== "number" && a && !a.da) {
      var b2 = a.src;
      if (b2 && b2[B2]) Ga(b2.i, a);
      else {
        var c = a.type, d = a.proxy;
        b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(Qa(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c = Oa(b2)) ? (Ga(c, a), c.h == 0 && (c.src = null, b2[Ha] = null)) : xa(a);
      }
    }
  }
  function Qa(a) {
    return a in Ia ? Ia[a] : Ia[a] = "on" + a;
  }
  function Ra(a, b2) {
    if (a.da) a = true;
    else {
      b2 = new z(b2, this);
      const c = a.listener, d = a.ha || a.src;
      a.fa && Ta(a);
      a = c.call(d, b2);
    }
    return a;
  }
  function Oa(a) {
    a = a[Ha];
    return a instanceof Ea ? a : null;
  }
  var Ua = "__closure_events_fn_" + (Math.random() * 1e9 >>> 0);
  function Ma(a) {
    if (typeof a === "function") return a;
    a[Ua] || (a[Ua] = function(b2) {
      return a.handleEvent(b2);
    });
    return a[Ua];
  }
  function C2() {
    w.call(this);
    this.i = new Ea(this);
    this.M = this;
    this.G = null;
  }
  t(C2, w);
  C2.prototype[B2] = true;
  C2.prototype.removeEventListener = function(a, b2, c, d) {
    Sa(this, a, b2, c, d);
  };
  function D2(a, b2) {
    var c, d = a.G;
    if (d) for (c = []; d; d = d.G) c.push(d);
    a = a.M;
    d = b2.type || b2;
    if (typeof b2 === "string") b2 = new x2(b2, a);
    else if (b2 instanceof x2) b2.target = b2.target || a;
    else {
      var e = b2;
      b2 = new x2(d, a);
      Da(b2, e);
    }
    e = true;
    let f, g;
    if (c) for (g = c.length - 1; g >= 0; g--) f = b2.g = c[g], e = Va(f, d, true, b2) && e;
    f = b2.g = a;
    e = Va(f, d, true, b2) && e;
    e = Va(f, d, false, b2) && e;
    if (c) for (g = 0; g < c.length; g++) f = b2.g = c[g], e = Va(f, d, false, b2) && e;
  }
  C2.prototype.N = function() {
    C2.Z.N.call(this);
    if (this.i) {
      var a = this.i;
      for (const c in a.g) {
        const d = a.g[c];
        for (let e = 0; e < d.length; e++) xa(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.G = null;
  };
  C2.prototype.J = function(a, b2, c, d) {
    return this.i.add(String(a), b2, false, c, d);
  };
  C2.prototype.K = function(a, b2, c, d) {
    return this.i.add(String(a), b2, true, c, d);
  };
  function Va(a, b2, c, d) {
    b2 = a.i.g[String(b2)];
    if (!b2) return true;
    b2 = b2.concat();
    let e = true;
    for (let f = 0; f < b2.length; ++f) {
      const g = b2[f];
      if (g && !g.da && g.capture == c) {
        const k = g.listener, q2 = g.ha || g.src;
        g.fa && Ga(a.i, g);
        e = k.call(q2, d) !== false && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function Wa(a, b2) {
    if (typeof a !== "function") if (a && typeof a.handleEvent == "function") a = p(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return Number(b2) > 2147483647 ? -1 : l.setTimeout(a, b2 || 0);
  }
  function Xa(a) {
    a.g = Wa(() => {
      a.g = null;
      a.i && (a.i = false, Xa(a));
    }, a.l);
    const b2 = a.h;
    a.h = null;
    a.m.apply(null, b2);
  }
  class Ya extends w {
    constructor(a, b2) {
      super();
      this.m = a;
      this.l = b2;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    j(a) {
      this.h = arguments;
      this.g ? this.i = true : Xa(this);
    }
    N() {
      super.N();
      this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
    }
  }
  function E(a) {
    w.call(this);
    this.h = a;
    this.g = {};
  }
  t(E, w);
  var Za = [];
  function $a(a) {
    ya(a.g, function(b2, c) {
      this.g.hasOwnProperty(c) && Ta(b2);
    }, a);
    a.g = {};
  }
  E.prototype.N = function() {
    E.Z.N.call(this);
    $a(this);
  };
  E.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var ab = l.JSON.stringify;
  var cb = l.JSON.parse;
  var db = class {
    stringify(a) {
      return l.JSON.stringify(a, void 0);
    }
    parse(a) {
      return l.JSON.parse(a, void 0);
    }
  };
  function eb() {
  }
  function fb() {
  }
  var H = {
    OPEN: "a",
    hb: "b",
    ERROR: "c",
    tb: "d"
  };
  function gb() {
    x2.call(this, "d");
  }
  t(gb, x2);
  function hb() {
    x2.call(this, "c");
  }
  t(hb, x2);
  var I = {}, ib = null;
  function jb() {
    return ib = ib || new C2();
  }
  I.Ia = "serverreachability";
  function kb(a) {
    x2.call(this, I.Ia, a);
  }
  t(kb, x2);
  function lb(a) {
    const b2 = jb();
    D2(b2, new kb(b2));
  }
  I.STAT_EVENT = "statevent";
  function mb(a, b2) {
    x2.call(this, I.STAT_EVENT, a);
    this.stat = b2;
  }
  t(mb, x2);
  function J(a) {
    const b2 = jb();
    D2(b2, new mb(b2, a));
  }
  I.Ja = "timingevent";
  function nb(a, b2) {
    x2.call(this, I.Ja, a);
    this.size = b2;
  }
  t(nb, x2);
  function ob(a, b2) {
    if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function() {
      a();
    }, b2);
  }
  function pb() {
    this.g = true;
  }
  pb.prototype.ua = function() {
    this.g = false;
  };
  function qb(a, b2, c, d, e, f) {
    a.info(function() {
      if (a.g) {
        if (f) {
          var g = "";
          var k = f.split("&");
          for (let m = 0; m < k.length; m++) {
            var q2 = k[m].split("=");
            if (q2.length > 1) {
              const r = q2[0];
              q2 = q2[1];
              const A = r.split("_");
              g = A.length >= 2 && A[1] == "type" ? g + (r + "=" + q2 + "&") : g + (r + "=redacted&");
            }
          }
        } else g = null;
      } else g = f;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + g;
    });
  }
  function rb(a, b2, c, d, e, f, g) {
    a.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + g;
    });
  }
  function K(a, b2, c, d) {
    a.info(function() {
      return "XMLHTTP TEXT (" + b2 + "): " + sb(a, c) + (d ? " " + d : "");
    });
  }
  function tb(a, b2) {
    a.info(function() {
      return "TIMEOUT: " + b2;
    });
  }
  pb.prototype.info = function() {
  };
  function sb(a, b2) {
    if (!a.g) return b2;
    if (!b2) return null;
    try {
      const f = JSON.parse(b2);
      if (f) {
        for (a = 0; a < f.length; a++) if (Array.isArray(f[a])) {
          var c = f[a];
          if (!(c.length < 2)) {
            var d = c[1];
            if (Array.isArray(d) && !(d.length < 1)) {
              var e = d[0];
              if (e != "noop" && e != "stop" && e != "close") for (let g = 1; g < d.length; g++) d[g] = "";
            }
          }
        }
      }
      return ab(f);
    } catch (f) {
      return b2;
    }
  }
  var ub = {
    NO_ERROR: 0,
    cb: 1,
    qb: 2,
    pb: 3,
    kb: 4,
    ob: 5,
    rb: 6,
    Ga: 7,
    TIMEOUT: 8,
    ub: 9
  };
  var vb = {
    ib: "complete",
    Fb: "success",
    ERROR: "error",
    Ga: "abort",
    xb: "ready",
    yb: "readystatechange",
    TIMEOUT: "timeout",
    sb: "incrementaldata",
    wb: "progress",
    lb: "downloadprogress",
    Nb: "uploadprogress"
  };
  var wb;
  function xb() {
  }
  t(xb, eb);
  xb.prototype.g = function() {
    return new XMLHttpRequest();
  };
  wb = new xb();
  function L(a) {
    return encodeURIComponent(String(a));
  }
  function yb(a) {
    var b2 = 1;
    a = a.split(":");
    const c = [];
    for (; b2 > 0 && a.length; ) c.push(a.shift()), b2--;
    a.length && c.push(a.join(":"));
    return c;
  }
  function N2(a, b2, c, d) {
    this.j = a;
    this.i = b2;
    this.l = c;
    this.S = d || 1;
    this.V = new E(this);
    this.H = 45e3;
    this.J = null;
    this.o = false;
    this.u = this.B = this.A = this.M = this.F = this.T = this.D = null;
    this.G = [];
    this.g = null;
    this.C = 0;
    this.m = this.v = null;
    this.X = -1;
    this.K = false;
    this.P = 0;
    this.O = null;
    this.W = this.L = this.U = this.R = false;
    this.h = new zb();
  }
  function zb() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var Ab = {}, Bb = {};
  function Cb(a, b2, c) {
    a.M = 1;
    a.A = Db(O2(b2));
    a.u = c;
    a.R = true;
    Eb(a, null);
  }
  function Eb(a, b2) {
    a.F = Date.now();
    Fb(a);
    a.B = O2(a.A);
    var c = a.B, d = a.S;
    Array.isArray(d) || (d = [String(d)]);
    Gb(c.i, "t", d);
    a.C = 0;
    c = a.j.L;
    a.h = new zb();
    a.g = Hb(a.j, c ? b2 : null, !a.u);
    a.P > 0 && (a.O = new Ya(p(a.Y, a, a.g), a.P));
    b2 = a.V;
    c = a.g;
    d = a.ba;
    var e = "readystatechange";
    Array.isArray(e) || (e && (Za[0] = e.toString()), e = Za);
    for (let f = 0; f < e.length; f++) {
      const g = Ka(c, e[f], d || b2.handleEvent, false, b2.h || b2);
      if (!g) break;
      b2.g[g.key] = g;
    }
    b2 = a.J ? Ba(a.J) : {};
    a.u ? (a.v || (a.v = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.B, a.v, a.u, b2)) : (a.v = "GET", a.g.ea(a.B, a.v, null, b2));
    lb();
    qb(a.i, a.v, a.B, a.l, a.S, a.u);
  }
  N2.prototype.ba = function(a) {
    a = a.target;
    const b2 = this.O;
    b2 && P(a) == 3 ? b2.j() : this.Y(a);
  };
  N2.prototype.Y = function(a) {
    try {
      if (a == this.g) a: {
        const k = P(this.g), q2 = this.g.ya(), m = this.g.ca();
        if (!(k < 3) && (k != 3 || this.g && (this.h.h || this.g.la() || Ib(this.g)))) {
          this.K || k != 4 || q2 == 7 || (q2 == 8 || m <= 0 ? lb(3) : lb(2));
          Jb(this);
          var b2 = this.g.ca();
          this.X = b2;
          var c = Kb(this);
          this.o = b2 == 200;
          rb(this.i, this.v, this.B, this.l, this.S, k, b2);
          if (this.o) {
            if (this.U && !this.L) {
              b: {
                if (this.g) {
                  var d, e = this.g;
                  if ((d = e.g ? e.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !y(d)) {
                    var f = d;
                    break b;
                  }
                }
                f = null;
              }
              if (a = f) K(this.i, this.l, a, "Initial handshake response via X-HTTP-Initial-Response"), this.L = true, Lb(this, a);
              else {
                this.o = false;
                this.m = 3;
                J(12);
                Q(this);
                Mb(this);
                break a;
              }
            }
            if (this.R) {
              a = true;
              let r;
              for (; !this.K && this.C < c.length; ) if (r = Nb(this, c), r == Bb) {
                k == 4 && (this.m = 4, J(14), a = false);
                K(this.i, this.l, null, "[Incomplete Response]");
                break;
              } else if (r == Ab) {
                this.m = 4;
                J(15);
                K(this.i, this.l, c, "[Invalid Chunk]");
                a = false;
                break;
              } else K(this.i, this.l, r, null), Lb(this, r);
              Ob(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0);
              k != 4 || c.length != 0 || this.h.h || (this.m = 1, J(16), a = false);
              this.o = this.o && a;
              if (!a) K(this.i, this.l, c, "[Invalid Chunked Response]"), Q(this), Mb(this);
              else if (c.length > 0 && !this.W) {
                this.W = true;
                var g = this.j;
                g.g == this && g.aa && !g.P && (g.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), Pb(g), g.P = true, J(11));
              }
            } else K(this.i, this.l, c, null), Lb(this, c);
            k == 4 && Q(this);
            this.o && !this.K && (k == 4 ? Qb(this.j, this) : (this.o = false, Fb(this)));
          } else Rb(this.g), b2 == 400 && c.indexOf("Unknown SID") > 0 ? (this.m = 3, J(12)) : (this.m = 0, J(13)), Q(this), Mb(this);
        }
      }
    } catch (k) {
    } finally {
    }
  };
  function Kb(a) {
    if (!Ob(a)) return a.g.la();
    const b2 = Ib(a.g);
    if (b2 === "") return "";
    let c = "";
    const d = b2.length, e = P(a.g) == 4;
    if (!a.h.i) {
      if (typeof TextDecoder === "undefined") return Q(a), Mb(a), "";
      a.h.i = new l.TextDecoder();
    }
    for (let f = 0; f < d; f++) a.h.h = true, c += a.h.i.decode(b2[f], {
      stream: !(e && f == d - 1)
    });
    b2.length = 0;
    a.h.g += c;
    a.C = 0;
    return a.h.g;
  }
  function Ob(a) {
    return a.g ? a.v == "GET" && a.M != 2 && a.j.Aa : false;
  }
  function Nb(a, b2) {
    var c = a.C, d = b2.indexOf("\n", c);
    if (d == -1) return Bb;
    c = Number(b2.substring(c, d));
    if (isNaN(c)) return Ab;
    d += 1;
    if (d + c > b2.length) return Bb;
    b2 = b2.slice(d, d + c);
    a.C = d + c;
    return b2;
  }
  N2.prototype.cancel = function() {
    this.K = true;
    Q(this);
  };
  function Fb(a) {
    a.T = Date.now() + a.H;
    Sb(a, a.H);
  }
  function Sb(a, b2) {
    if (a.D != null) throw Error("WatchDog timer not null");
    a.D = ob(p(a.aa, a), b2);
  }
  function Jb(a) {
    a.D && (l.clearTimeout(a.D), a.D = null);
  }
  N2.prototype.aa = function() {
    this.D = null;
    const a = Date.now();
    a - this.T >= 0 ? (tb(this.i, this.B), this.M != 2 && (lb(), J(17)), Q(this), this.m = 2, Mb(this)) : Sb(this, this.T - a);
  };
  function Mb(a) {
    a.j.I == 0 || a.K || Qb(a.j, a);
  }
  function Q(a) {
    Jb(a);
    var b2 = a.O;
    b2 && typeof b2.dispose == "function" && b2.dispose();
    a.O = null;
    $a(a.V);
    a.g && (b2 = a.g, a.g = null, b2.abort(), b2.dispose());
  }
  function Lb(a, b2) {
    try {
      var c = a.j;
      if (c.I != 0 && (c.g == a || Tb(c.h, a))) {
        if (!a.L && Tb(c.h, a) && c.I == 3) {
          try {
            var d = c.Ba.g.parse(b2);
          } catch (m) {
            d = null;
          }
          if (Array.isArray(d) && d.length == 3) {
            var e = d;
            if (e[0] == 0) a: {
              if (!c.v) {
                if (c.g) if (c.g.F + 3e3 < a.F) Ub(c), Vb(c);
                else break a;
                Wb(c);
                J(18);
              }
            }
            else c.xa = e[1], 0 < c.xa - c.K && e[2] < 37500 && c.F && c.A == 0 && !c.C && (c.C = ob(p(c.Va, c), 6e3));
            Xb(c.h) <= 1 && c.ta && (c.ta = void 0);
          } else R(c, 11);
        } else if ((a.L || c.g == a) && Ub(c), !y(b2)) for (e = c.Ba.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
          let m = e[b2];
          const r = m[0];
          if (!(r <= c.K)) if (c.K = r, m = m[1], c.I == 2) {
            if (m[0] == "c") {
              c.M = m[1];
              c.ba = m[2];
              const A = m[3];
              A != null && (c.ka = A, c.j.info("VER=" + c.ka));
              const M2 = m[4];
              M2 != null && (c.za = M2, c.j.info("SVER=" + c.za));
              const F2 = m[5];
              F2 != null && typeof F2 === "number" && F2 > 0 && (d = 1.5 * F2, c.O = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
              d = c;
              const G2 = a.g;
              if (G2) {
                const za = G2.g ? G2.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (za) {
                  var f = d.h;
                  f.g || za.indexOf("spdy") == -1 && za.indexOf("quic") == -1 && za.indexOf("h2") == -1 || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (Yb(f, f.h), f.h = null));
                }
                if (d.G) {
                  const bb = G2.g ? G2.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  bb && (d.wa = bb, S2(d.J, d.G, bb));
                }
              }
              c.I = 3;
              c.l && c.l.ra();
              c.aa && (c.T = Date.now() - a.F, c.j.info("Handshake RTT: " + c.T + "ms"));
              d = c;
              var g = a;
              d.na = Zb(d, d.L ? d.ba : null, d.W);
              if (g.L) {
                $b(d.h, g);
                var k = g, q2 = d.O;
                q2 && (k.H = q2);
                k.D && (Jb(k), Fb(k));
                d.g = g;
              } else ac(d);
              c.i.length > 0 && bc(c);
            } else m[0] != "stop" && m[0] != "close" || R(c, 7);
          } else c.I == 3 && (m[0] == "stop" || m[0] == "close" ? m[0] == "stop" ? R(c, 7) : cc(c) : m[0] != "noop" && c.l && c.l.qa(m), c.A = 0);
        }
      }
      lb(4);
    } catch (m) {
    }
  }
  var dc = class {
    constructor(a, b2) {
      this.g = a;
      this.map = b2;
    }
  };
  function ec(a) {
    this.l = a || 10;
    l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(l.chrome && l.chrome.loadTimes && l.chrome.loadTimes() && l.chrome.loadTimes().wasFetchedViaSpdy);
    this.j = a ? this.l : 1;
    this.g = null;
    this.j > 1 && (this.g = /* @__PURE__ */ new Set());
    this.h = null;
    this.i = [];
  }
  function fc(a) {
    return a.h ? true : a.g ? a.g.size >= a.j : false;
  }
  function Xb(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function Tb(a, b2) {
    return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
  }
  function Yb(a, b2) {
    a.g ? a.g.add(b2) : a.h = b2;
  }
  function $b(a, b2) {
    a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
  }
  ec.prototype.cancel = function() {
    this.i = hc(this);
    if (this.h) this.h.cancel(), this.h = null;
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values()) a.cancel();
      this.g.clear();
    }
  };
  function hc(a) {
    if (a.h != null) return a.i.concat(a.h.G);
    if (a.g != null && a.g.size !== 0) {
      let b2 = a.i;
      for (const c of a.g.values()) b2 = b2.concat(c.G);
      return b2;
    }
    return ja(a.i);
  }
  var ic = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function jc(a, b2) {
    if (a) {
      a = a.split("&");
      for (let c = 0; c < a.length; c++) {
        const d = a[c].indexOf("=");
        let e, f = null;
        d >= 0 ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
        b2(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
      }
    }
  }
  function T(a) {
    this.g = this.o = this.j = "";
    this.u = null;
    this.m = this.h = "";
    this.l = false;
    let b2;
    a instanceof T ? (this.l = a.l, kc(this, a.j), this.o = a.o, this.g = a.g, lc(this, a.u), this.h = a.h, mc(this, nc(a.i)), this.m = a.m) : a && (b2 = String(a).match(ic)) ? (this.l = false, kc(this, b2[1] || "", true), this.o = oc(b2[2] || ""), this.g = oc(b2[3] || "", true), lc(this, b2[4]), this.h = oc(b2[5] || "", true), mc(this, b2[6] || "", true), this.m = oc(b2[7] || "")) : (this.l = false, this.i = new pc(null, this.l));
  }
  T.prototype.toString = function() {
    const a = [];
    var b2 = this.j;
    b2 && a.push(qc(b2, rc, true), ":");
    var c = this.g;
    if (c || b2 == "file") a.push("//"), (b2 = this.o) && a.push(qc(b2, rc, true), "@"), a.push(L(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.u, c != null && a.push(":", String(c));
    if (c = this.h) this.g && c.charAt(0) != "/" && a.push("/"), a.push(qc(c, c.charAt(0) == "/" ? sc : tc, true));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.m) && a.push("#", qc(c, uc));
    return a.join("");
  };
  T.prototype.resolve = function(a) {
    const b2 = O2(this);
    let c = !!a.j;
    c ? kc(b2, a.j) : c = !!a.o;
    c ? b2.o = a.o : c = !!a.g;
    c ? b2.g = a.g : c = a.u != null;
    var d = a.h;
    if (c) lc(b2, a.u);
    else if (c = !!a.h) {
      if (d.charAt(0) != "/") if (this.g && !this.h) d = "/" + d;
      else {
        var e = b2.h.lastIndexOf("/");
        e != -1 && (d = b2.h.slice(0, e + 1) + d);
      }
      e = d;
      if (e == ".." || e == ".") d = "";
      else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
        d = e.lastIndexOf("/", 0) == 0;
        e = e.split("/");
        const f = [];
        for (let g = 0; g < e.length; ) {
          const k = e[g++];
          k == "." ? d && g == e.length && f.push("") : k == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = true);
        }
        d = f.join("/");
      } else d = e;
    }
    c ? b2.h = d : c = a.i.toString() !== "";
    c ? mc(b2, nc(a.i)) : c = !!a.m;
    c && (b2.m = a.m);
    return b2;
  };
  function O2(a) {
    return new T(a);
  }
  function kc(a, b2, c) {
    a.j = c ? oc(b2, true) : b2;
    a.j && (a.j = a.j.replace(/:$/, ""));
  }
  function lc(a, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || b2 < 0) throw Error("Bad port number " + b2);
      a.u = b2;
    } else a.u = null;
  }
  function mc(a, b2, c) {
    b2 instanceof pc ? (a.i = b2, vc(a.i, a.l)) : (c || (b2 = qc(b2, wc)), a.i = new pc(b2, a.l));
  }
  function S2(a, b2, c) {
    a.i.set(b2, c);
  }
  function Db(a) {
    S2(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36));
    return a;
  }
  function oc(a, b2) {
    return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function qc(a, b2, c) {
    return typeof a === "string" ? (a = encodeURI(a).replace(b2, xc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function xc(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var rc = /[#\/\?@]/g, tc = /[#\?:]/g, sc = /[#\?]/g, wc = /[#\?@]/g, uc = /#/g;
  function pc(a, b2) {
    this.h = this.g = null;
    this.i = a || null;
    this.j = !!b2;
  }
  function U2(a) {
    a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && jc(a.i, function(b2, c) {
      a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
    }));
  }
  h = pc.prototype;
  h.add = function(a, b2) {
    U2(this);
    this.i = null;
    a = V(this, a);
    let c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b2);
    this.h += 1;
    return this;
  };
  function yc(a, b2) {
    U2(a);
    b2 = V(a, b2);
    a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
  }
  function zc(a, b2) {
    U2(a);
    b2 = V(a, b2);
    return a.g.has(b2);
  }
  h.forEach = function(a, b2) {
    U2(this);
    this.g.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b2, e, d, this);
      }, this);
    }, this);
  };
  function Ac(a, b2) {
    U2(a);
    let c = [];
    if (typeof b2 === "string") zc(a, b2) && (c = c.concat(a.g.get(V(a, b2))));
    else for (a = Array.from(a.g.values()), b2 = 0; b2 < a.length; b2++) c = c.concat(a[b2]);
    return c;
  }
  h.set = function(a, b2) {
    U2(this);
    this.i = null;
    a = V(this, a);
    zc(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b2]);
    this.h += 1;
    return this;
  };
  h.get = function(a, b2) {
    if (!a) return b2;
    a = Ac(this, a);
    return a.length > 0 ? String(a[0]) : b2;
  };
  function Gb(a, b2, c) {
    yc(a, b2);
    c.length > 0 && (a.i = null, a.g.set(V(a, b2), ja(c)), a.h += c.length);
  }
  h.toString = function() {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a = [], b2 = Array.from(this.g.keys());
    for (let d = 0; d < b2.length; d++) {
      var c = b2[d];
      const e = L(c);
      c = Ac(this, c);
      for (let f = 0; f < c.length; f++) {
        let g = e;
        c[f] !== "" && (g += "=" + L(c[f]));
        a.push(g);
      }
    }
    return this.i = a.join("&");
  };
  function nc(a) {
    const b2 = new pc();
    b2.i = a.i;
    a.g && (b2.g = new Map(a.g), b2.h = a.h);
    return b2;
  }
  function V(a, b2) {
    b2 = String(b2);
    a.j && (b2 = b2.toLowerCase());
    return b2;
  }
  function vc(a, b2) {
    b2 && !a.j && (U2(a), a.i = null, a.g.forEach(function(c, d) {
      const e = d.toLowerCase();
      d != e && (yc(this, d), Gb(this, e, c));
    }, a));
    a.j = b2;
  }
  function Bc(a, b2) {
    const c = new pb();
    if (l.Image) {
      const d = new Image();
      d.onload = ha(W2, c, "TestLoadImage: loaded", true, b2, d);
      d.onerror = ha(W2, c, "TestLoadImage: error", false, b2, d);
      d.onabort = ha(W2, c, "TestLoadImage: abort", false, b2, d);
      d.ontimeout = ha(W2, c, "TestLoadImage: timeout", false, b2, d);
      l.setTimeout(function() {
        if (d.ontimeout) d.ontimeout();
      }, 1e4);
      d.src = a;
    } else b2(false);
  }
  function Cc(a, b2) {
    const c = new pb(), d = new AbortController(), e = setTimeout(() => {
      d.abort();
      W2(c, "TestPingServer: timeout", false, b2);
    }, 1e4);
    fetch(a, {
      signal: d.signal
    }).then((f) => {
      clearTimeout(e);
      f.ok ? W2(c, "TestPingServer: ok", true, b2) : W2(c, "TestPingServer: server error", false, b2);
    }).catch(() => {
      clearTimeout(e);
      W2(c, "TestPingServer: error", false, b2);
    });
  }
  function W2(a, b2, c, d, e) {
    try {
      e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
    } catch (f) {
    }
  }
  function Dc() {
    this.g = new db();
  }
  function Ec(a) {
    this.i = a.Sb || null;
    this.h = a.ab || false;
  }
  t(Ec, eb);
  Ec.prototype.g = function() {
    return new Fc(this.i, this.h);
  };
  function Fc(a, b2) {
    C2.call(this);
    this.H = a;
    this.o = b2;
    this.m = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.A = new Headers();
    this.h = null;
    this.F = "GET";
    this.D = "";
    this.g = false;
    this.B = this.j = this.l = null;
    this.v = new AbortController();
  }
  t(Fc, C2);
  h = Fc.prototype;
  h.open = function(a, b2) {
    if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
    this.F = a;
    this.D = b2;
    this.readyState = 1;
    Gc(this);
  };
  h.send = function(a) {
    if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
    if (this.v.signal.aborted) throw this.abort(), Error("Request was aborted.");
    this.g = true;
    const b2 = {
      headers: this.A,
      method: this.F,
      credentials: this.m,
      cache: void 0,
      signal: this.v.signal
    };
    a && (b2.body = a);
    (this.H || l).fetch(new Request(this.D, b2)).then(this.Pa.bind(this), this.ga.bind(this));
  };
  h.abort = function() {
    this.response = this.responseText = "";
    this.A = new Headers();
    this.status = 0;
    this.v.abort();
    this.j && this.j.cancel("Request was aborted.").catch(() => {
    });
    this.readyState >= 1 && this.g && this.readyState != 4 && (this.g = false, Hc(this));
    this.readyState = 0;
  };
  h.Pa = function(a) {
    if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Gc(this)), this.g && (this.readyState = 3, Gc(this), this.g))) if (this.responseType === "arraybuffer") a.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
    else if (typeof l.ReadableStream !== "undefined" && "body" in a) {
      this.j = a.body.getReader();
      if (this.o) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else this.response = this.responseText = "", this.B = new TextDecoder();
      Ic(this);
    } else a.text().then(this.Oa.bind(this), this.ga.bind(this));
  };
  function Ic(a) {
    a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a));
  }
  h.Ma = function(a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value);
      else if (!this.o) {
        var b2 = a.value ? a.value : new Uint8Array(0);
        if (b2 = this.B.decode(b2, {
          stream: !a.done
        })) this.response = this.responseText += b2;
      }
      a.done ? Hc(this) : Gc(this);
      this.readyState == 3 && Ic(this);
    }
  };
  h.Oa = function(a) {
    this.g && (this.response = this.responseText = a, Hc(this));
  };
  h.Na = function(a) {
    this.g && (this.response = a, Hc(this));
  };
  h.ga = function() {
    this.g && Hc(this);
  };
  function Hc(a) {
    a.readyState = 4;
    a.l = null;
    a.j = null;
    a.B = null;
    Gc(a);
  }
  h.setRequestHeader = function(a, b2) {
    this.A.append(a, b2);
  };
  h.getResponseHeader = function(a) {
    return this.h ? this.h.get(a.toLowerCase()) || "" : "";
  };
  h.getAllResponseHeaders = function() {
    if (!this.h) return "";
    const a = [], b2 = this.h.entries();
    for (var c = b2.next(); !c.done; ) c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
    return a.join("\r\n");
  };
  function Gc(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(Fc.prototype, "withCredentials", {
    get: function() {
      return this.m === "include";
    },
    set: function(a) {
      this.m = a ? "include" : "same-origin";
    }
  });
  function Jc(a) {
    let b2 = "";
    ya(a, function(c, d) {
      b2 += d;
      b2 += ":";
      b2 += c;
      b2 += "\r\n";
    });
    return b2;
  }
  function Kc(a, b2, c) {
    a: {
      for (d in c) {
        var d = false;
        break a;
      }
      d = true;
    }
    d || (c = Jc(c), typeof a === "string" ? c != null && L(c) : S2(a, b2, c));
  }
  function X(a) {
    C2.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.L = a || null;
    this.h = false;
    this.g = null;
    this.D = "";
    this.o = 0;
    this.l = "";
    this.j = this.B = this.v = this.A = false;
    this.m = null;
    this.F = "";
    this.H = false;
  }
  t(X, C2);
  var Lc = /^https?$/i, Mc = ["POST", "PUT"];
  h = X.prototype;
  h.Fa = function(a) {
    this.H = a;
  };
  h.ea = function(a, b2, c, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
    b2 = b2 ? b2.toUpperCase() : "GET";
    this.D = a;
    this.l = "";
    this.o = 0;
    this.A = false;
    this.h = true;
    this.g = this.L ? this.L.g() : wb.g();
    this.g.onreadystatechange = ia(p(this.Ca, this));
    try {
      this.B = true, this.g.open(b2, String(a), true), this.B = false;
    } catch (f) {
      Nc(this, f);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d) if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
    else if (typeof d.keys === "function" && typeof d.get === "function") for (const f of d.keys()) c.set(f, d.get(f));
    else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
    e = l.FormData && a instanceof l.FormData;
    !(Array.prototype.indexOf.call(Mc, b2, void 0) >= 0) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [f, g] of c) this.g.setRequestHeader(f, g);
    this.F && (this.g.responseType = this.F);
    "withCredentials" in this.g && this.g.withCredentials !== this.H && (this.g.withCredentials = this.H);
    try {
      this.m && (clearTimeout(this.m), this.m = null), this.v = true, this.g.send(a), this.v = false;
    } catch (f) {
      Nc(this, f);
    }
  };
  function Nc(a, b2) {
    a.h = false;
    a.g && (a.j = true, a.g.abort(), a.j = false);
    a.l = b2;
    a.o = 5;
    Oc(a);
    Pc(a);
  }
  function Oc(a) {
    a.A || (a.A = true, D2(a, "complete"), D2(a, "error"));
  }
  h.abort = function(a) {
    this.g && this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false, this.o = a || 7, D2(this, "complete"), D2(this, "abort"), Pc(this));
  };
  h.N = function() {
    this.g && (this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false), Pc(this, true));
    X.Z.N.call(this);
  };
  h.Ca = function() {
    this.u || (this.B || this.v || this.j ? Qc(this) : this.Xa());
  };
  h.Xa = function() {
    Qc(this);
  };
  function Qc(a) {
    if (a.h && typeof ea != "undefined") {
      if (a.v && P(a) == 4) setTimeout(a.Ca.bind(a), 0);
      else if (D2(a, "readystatechange"), P(a) == 4) {
        a.h = false;
        try {
          const f = a.ca();
          a: switch (f) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var b2 = true;
              break a;
            default:
              b2 = false;
          }
          var c;
          if (!(c = b2)) {
            var d;
            if (d = f === 0) {
              let g = String(a.D).match(ic)[1] || null;
              !g && l.self && l.self.location && (g = l.self.location.protocol.slice(0, -1));
              d = !Lc.test(g ? g.toLowerCase() : "");
            }
            c = d;
          }
          if (c) D2(a, "complete"), D2(a, "success");
          else {
            a.o = 6;
            try {
              var e = P(a) > 2 ? a.g.statusText : "";
            } catch (g) {
              e = "";
            }
            a.l = e + " [" + a.ca() + "]";
            Oc(a);
          }
        } finally {
          Pc(a);
        }
      }
    }
  }
  function Pc(a, b2) {
    if (a.g) {
      a.m && (clearTimeout(a.m), a.m = null);
      const c = a.g;
      a.g = null;
      b2 || D2(a, "ready");
      try {
        c.onreadystatechange = null;
      } catch (d) {
      }
    }
  }
  h.isActive = function() {
    return !!this.g;
  };
  function P(a) {
    return a.g ? a.g.readyState : 0;
  }
  h.ca = function() {
    try {
      return P(this) > 2 ? this.g.status : -1;
    } catch (a) {
      return -1;
    }
  };
  h.la = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a) {
      return "";
    }
  };
  h.La = function(a) {
    if (this.g) {
      var b2 = this.g.responseText;
      a && b2.indexOf(a) == 0 && (b2 = b2.substring(a.length));
      return cb(b2);
    }
  };
  function Ib(a) {
    try {
      if (!a.g) return null;
      if ("response" in a.g) return a.g.response;
      switch (a.F) {
        case "":
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b2) {
      return null;
    }
  }
  function Rb(a) {
    const b2 = {};
    a = (a.g && P(a) >= 2 ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
    for (let d = 0; d < a.length; d++) {
      if (y(a[d])) continue;
      var c = yb(a[d]);
      const e = c[0];
      c = c[1];
      if (typeof c !== "string") continue;
      c = c.trim();
      const f = b2[e] || [];
      b2[e] = f;
      f.push(c);
    }
    Aa(b2, function(d) {
      return d.join(", ");
    });
  }
  h.ya = function() {
    return this.o;
  };
  h.Ha = function() {
    return typeof this.l === "string" ? this.l : String(this.l);
  };
  function Rc(a, b2, c) {
    return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
  }
  function Sc(a) {
    this.za = 0;
    this.i = [];
    this.j = new pb();
    this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null;
    this.Ya = this.V = 0;
    this.Sa = Rc("failFast", false, a);
    this.F = this.C = this.v = this.m = this.l = null;
    this.X = true;
    this.xa = this.K = -1;
    this.Y = this.A = this.D = 0;
    this.Qa = Rc("baseRetryDelayMs", 5e3, a);
    this.Za = Rc("retryDelaySeedMs", 1e4, a);
    this.Ta = Rc("forwardChannelMaxRetries", 2, a);
    this.va = Rc("forwardChannelRequestTimeoutMs", 2e4, a);
    this.ma = a && a.xmlHttpFactory || void 0;
    this.Ua = a && a.Rb || void 0;
    this.Aa = a && a.useFetchStreams || false;
    this.O = void 0;
    this.L = a && a.supportsCrossDomainXhr || false;
    this.M = "";
    this.h = new ec(a && a.concurrentRequestLimit);
    this.Ba = new Dc();
    this.S = a && a.fastHandshake || false;
    this.R = a && a.encodeInitMessageHeaders || false;
    this.S && this.R && (this.R = false);
    this.Ra = a && a.Pb || false;
    a && a.ua && this.j.ua();
    a && a.forceLongPolling && (this.X = false);
    this.aa = !this.S && this.X && a && a.detectBufferingProxy || false;
    this.ia = void 0;
    a && a.longPollingTimeout && a.longPollingTimeout > 0 && (this.ia = a.longPollingTimeout);
    this.ta = void 0;
    this.T = 0;
    this.P = false;
    this.ja = this.B = null;
  }
  h = Sc.prototype;
  h.ka = 8;
  h.I = 1;
  h.connect = function(a, b2, c, d) {
    J(0);
    this.W = a;
    this.H = b2 || {};
    c && d !== void 0 && (this.H.OSID = c, this.H.OAID = d);
    this.F = this.X;
    this.J = Zb(this, null, this.W);
    bc(this);
  };
  function cc(a) {
    Tc(a);
    if (a.I == 3) {
      var b2 = a.V++, c = O2(a.J);
      S2(c, "SID", a.M);
      S2(c, "RID", b2);
      S2(c, "TYPE", "terminate");
      Uc(a, c);
      b2 = new N2(a, a.j, b2);
      b2.M = 2;
      b2.A = Db(O2(c));
      c = false;
      if (l.navigator && l.navigator.sendBeacon) try {
        c = l.navigator.sendBeacon(b2.A.toString(), "");
      } catch (d) {
      }
      !c && l.Image && (new Image().src = b2.A, c = true);
      c || (b2.g = Hb(b2.j, null), b2.g.ea(b2.A));
      b2.F = Date.now();
      Fb(b2);
    }
    Vc(a);
  }
  function Vb(a) {
    a.g && (Pb(a), a.g.cancel(), a.g = null);
  }
  function Tc(a) {
    Vb(a);
    a.v && (l.clearTimeout(a.v), a.v = null);
    Ub(a);
    a.h.cancel();
    a.m && (typeof a.m === "number" && l.clearTimeout(a.m), a.m = null);
  }
  function bc(a) {
    if (!fc(a.h) && !a.m) {
      a.m = true;
      var b2 = a.Ea;
      u || ta();
      v2 || (u(), v2 = true);
      oa.add(b2, a);
      a.D = 0;
    }
  }
  function Wc(a, b2) {
    if (Xb(a.h) >= a.h.j - (a.m ? 1 : 0)) return false;
    if (a.m) return a.i = b2.G.concat(a.i), true;
    if (a.I == 1 || a.I == 2 || a.D >= (a.Sa ? 0 : a.Ta)) return false;
    a.m = ob(p(a.Ea, a, b2), Xc(a, a.D));
    a.D++;
    return true;
  }
  h.Ea = function(a) {
    if (this.m) if (this.m = null, this.I == 1) {
      if (!a) {
        this.V = Math.floor(Math.random() * 1e5);
        a = this.V++;
        const e = new N2(this, this.j, a);
        let f = this.o;
        this.U && (f ? (f = Ba(f), Da(f, this.U)) : f = this.U);
        this.u !== null || this.R || (e.J = f, f = null);
        if (this.S) a: {
          var b2 = 0;
          for (var c = 0; c < this.i.length; c++) {
            b: {
              var d = this.i[c];
              if ("__data__" in d.map && (d = d.map.__data__, typeof d === "string")) {
                d = d.length;
                break b;
              }
              d = void 0;
            }
            if (d === void 0) break;
            b2 += d;
            if (b2 > 4096) {
              b2 = c;
              break a;
            }
            if (b2 === 4096 || c === this.i.length - 1) {
              b2 = c + 1;
              break a;
            }
          }
          b2 = 1e3;
        }
        else b2 = 1e3;
        b2 = Yc(this, e, b2);
        c = O2(this.J);
        S2(c, "RID", a);
        S2(c, "CVER", 22);
        this.G && S2(c, "X-HTTP-Session-Id", this.G);
        Uc(this, c);
        f && (this.R ? b2 = "headers=" + L(Jc(f)) + "&" + b2 : this.u && Kc(c, this.u, f));
        Yb(this.h, e);
        this.Ra && S2(c, "TYPE", "init");
        this.S ? (S2(c, "$req", b2), S2(c, "SID", "null"), e.U = true, Cb(e, c, null)) : Cb(e, c, b2);
        this.I = 2;
      }
    } else this.I == 3 && (a ? Zc(this, a) : this.i.length == 0 || fc(this.h) || Zc(this));
  };
  function Zc(a, b2) {
    var c;
    b2 ? c = b2.l : c = a.V++;
    const d = O2(a.J);
    S2(d, "SID", a.M);
    S2(d, "RID", c);
    S2(d, "AID", a.K);
    Uc(a, d);
    a.u && a.o && Kc(d, a.u, a.o);
    c = new N2(a, a.j, c, a.D + 1);
    a.u === null && (c.J = a.o);
    b2 && (a.i = b2.G.concat(a.i));
    b2 = Yc(a, c, 1e3);
    c.H = Math.round(a.va * 0.5) + Math.round(a.va * 0.5 * Math.random());
    Yb(a.h, c);
    Cb(c, d, b2);
  }
  function Uc(a, b2) {
    a.H && ya(a.H, function(c, d) {
      S2(b2, d, c);
    });
    a.l && ya({}, function(c, d) {
      S2(b2, d, c);
    });
  }
  function Yc(a, b2, c) {
    c = Math.min(a.i.length, c);
    const d = a.l ? p(a.l.Ka, a.l, a) : null;
    a: {
      var e = a.i;
      let k = -1;
      for (; ; ) {
        const q2 = ["count=" + c];
        k == -1 ? c > 0 ? (k = e[0].g, q2.push("ofs=" + k)) : k = 0 : q2.push("ofs=" + k);
        let m = true;
        for (let r = 0; r < c; r++) {
          var f = e[r].g;
          const A = e[r].map;
          f -= k;
          if (f < 0) k = Math.max(0, e[r].g - 100), m = false;
          else try {
            f = "req" + f + "_" || "";
            try {
              var g = A instanceof Map ? A : Object.entries(A);
              for (const [M2, F2] of g) {
                let G2 = F2;
                n(F2) && (G2 = ab(F2));
                q2.push(f + M2 + "=" + encodeURIComponent(G2));
              }
            } catch (M2) {
              throw q2.push(f + "type=" + encodeURIComponent("_badmap")), M2;
            }
          } catch (M2) {
            d && d(A);
          }
        }
        if (m) {
          g = q2.join("&");
          break a;
        }
      }
      g = void 0;
    }
    a = a.i.splice(0, c);
    b2.G = a;
    return g;
  }
  function ac(a) {
    if (!a.g && !a.v) {
      a.Y = 1;
      var b2 = a.Da;
      u || ta();
      v2 || (u(), v2 = true);
      oa.add(b2, a);
      a.A = 0;
    }
  }
  function Wb(a) {
    if (a.g || a.v || a.A >= 3) return false;
    a.Y++;
    a.v = ob(p(a.Da, a), Xc(a, a.A));
    a.A++;
    return true;
  }
  h.Da = function() {
    this.v = null;
    $c(this);
    if (this.aa && !(this.P || this.g == null || this.T <= 0)) {
      var a = 4 * this.T;
      this.j.info("BP detection timer enabled: " + a);
      this.B = ob(p(this.Wa, this), a);
    }
  };
  h.Wa = function() {
    this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = false, this.P = true, J(10), Vb(this), $c(this));
  };
  function Pb(a) {
    a.B != null && (l.clearTimeout(a.B), a.B = null);
  }
  function $c(a) {
    a.g = new N2(a, a.j, "rpc", a.Y);
    a.u === null && (a.g.J = a.o);
    a.g.P = 0;
    var b2 = O2(a.na);
    S2(b2, "RID", "rpc");
    S2(b2, "SID", a.M);
    S2(b2, "AID", a.K);
    S2(b2, "CI", a.F ? "0" : "1");
    !a.F && a.ia && S2(b2, "TO", a.ia);
    S2(b2, "TYPE", "xmlhttp");
    Uc(a, b2);
    a.u && a.o && Kc(b2, a.u, a.o);
    a.O && (a.g.H = a.O);
    var c = a.g;
    a = a.ba;
    c.M = 1;
    c.A = Db(O2(b2));
    c.u = null;
    c.R = true;
    Eb(c, a);
  }
  h.Va = function() {
    this.C != null && (this.C = null, Vb(this), Wb(this), J(19));
  };
  function Ub(a) {
    a.C != null && (l.clearTimeout(a.C), a.C = null);
  }
  function Qb(a, b2) {
    var c = null;
    if (a.g == b2) {
      Ub(a);
      Pb(a);
      a.g = null;
      var d = 2;
    } else if (Tb(a.h, b2)) c = b2.G, $b(a.h, b2), d = 1;
    else return;
    if (a.I != 0) {
      if (b2.o) {
        if (d == 1) {
          c = b2.u ? b2.u.length : 0;
          b2 = Date.now() - b2.F;
          var e = a.D;
          d = jb();
          D2(d, new nb(d, c));
          bc(a);
        } else ac(a);
      } else if (e = b2.m, e == 3 || e == 0 && b2.X > 0 || !(d == 1 && Wc(a, b2) || d == 2 && Wb(a))) switch (c && c.length > 0 && (b2 = a.h, b2.i = b2.i.concat(c)), e) {
        case 1:
          R(a, 5);
          break;
        case 4:
          R(a, 10);
          break;
        case 3:
          R(a, 6);
          break;
        default:
          R(a, 2);
      }
    }
  }
  function Xc(a, b2) {
    let c = a.Qa + Math.floor(Math.random() * a.Za);
    a.isActive() || (c *= 2);
    return c * b2;
  }
  function R(a, b2) {
    a.j.info("Error code " + b2);
    if (b2 == 2) {
      var c = p(a.bb, a), d = a.Ua;
      const e = !d;
      d = new T(d || "//www.google.com/images/cleardot.gif");
      l.location && l.location.protocol == "http" || kc(d, "https");
      Db(d);
      e ? Bc(d.toString(), c) : Cc(d.toString(), c);
    } else J(2);
    a.I = 0;
    a.l && a.l.pa(b2);
    Vc(a);
    Tc(a);
  }
  h.bb = function(a) {
    a ? (this.j.info("Successfully pinged google.com"), J(2)) : (this.j.info("Failed to ping google.com"), J(1));
  };
  function Vc(a) {
    a.I = 0;
    a.ja = [];
    if (a.l) {
      const b2 = hc(a.h);
      if (b2.length != 0 || a.i.length != 0) ka(a.ja, b2), ka(a.ja, a.i), a.h.i.length = 0, ja(a.i), a.i.length = 0;
      a.l.oa();
    }
  }
  function Zb(a, b2, c) {
    var d = c instanceof T ? O2(c) : new T(c);
    if (d.g != "") b2 && (d.g = b2 + "." + d.g), lc(d, d.u);
    else {
      var e = l.location;
      d = e.protocol;
      b2 = b2 ? b2 + "." + e.hostname : e.hostname;
      e = +e.port;
      const f = new T(null);
      d && kc(f, d);
      b2 && (f.g = b2);
      e && lc(f, e);
      c && (f.h = c);
      d = f;
    }
    c = a.G;
    b2 = a.wa;
    c && b2 && S2(d, c, b2);
    S2(d, "VER", a.ka);
    Uc(a, d);
    return d;
  }
  function Hb(a, b2, c) {
    if (b2 && !a.L) throw Error("Can't create secondary domain capable XhrIo object.");
    b2 = a.Aa && !a.ma ? new X(new Ec({
      ab: c
    })) : new X(a.ma);
    b2.Fa(a.L);
    return b2;
  }
  h.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function ad() {
  }
  h = ad.prototype;
  h.ra = function() {
  };
  h.qa = function() {
  };
  h.pa = function() {
  };
  h.oa = function() {
  };
  h.isActive = function() {
    return true;
  };
  h.Ka = function() {
  };
  function bd() {
  }
  bd.prototype.g = function(a, b2) {
    return new Y2(a, b2);
  };
  function Y2(a, b2) {
    C2.call(this);
    this.g = new Sc(b2);
    this.l = a;
    this.h = b2 && b2.messageUrlParams || null;
    a = b2 && b2.messageHeaders || null;
    b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
      "X-Client-Protocol": "webchannel"
    });
    this.g.o = a;
    a = b2 && b2.initMessageHeaders || null;
    b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = {
      "X-WebChannel-Content-Type": b2.messageContentType
    });
    b2 && b2.sa && (a ? a["X-WebChannel-Client-Profile"] = b2.sa : a = {
      "X-WebChannel-Client-Profile": b2.sa
    });
    this.g.U = a;
    (a = b2 && b2.Qb) && !y(a) && (this.g.u = a);
    this.A = b2 && b2.supportsCrossDomainXhr || false;
    this.v = b2 && b2.sendRawJson || false;
    (b2 = b2 && b2.httpSessionIdParam) && !y(b2) && (this.g.G = b2, a = this.h, a !== null && b2 in a && (a = this.h, b2 in a && delete a[b2]));
    this.j = new Z(this);
  }
  t(Y2, C2);
  Y2.prototype.m = function() {
    this.g.l = this.j;
    this.A && (this.g.L = true);
    this.g.connect(this.l, this.h || void 0);
  };
  Y2.prototype.close = function() {
    cc(this.g);
  };
  Y2.prototype.o = function(a) {
    var b2 = this.g;
    if (typeof a === "string") {
      var c = {};
      c.__data__ = a;
      a = c;
    } else this.v && (c = {}, c.__data__ = ab(a), a = c);
    b2.i.push(new dc(b2.Ya++, a));
    b2.I == 3 && bc(b2);
  };
  Y2.prototype.N = function() {
    this.g.l = null;
    delete this.j;
    cc(this.g);
    delete this.g;
    Y2.Z.N.call(this);
  };
  function cd(a) {
    gb.call(this);
    a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
    var b2 = a.__sm__;
    if (b2) {
      a: {
        for (const c in b2) {
          a = c;
          break a;
        }
        a = void 0;
      }
      if (this.i = a) a = this.i, b2 = b2 !== null && a in b2 ? b2[a] : void 0;
      this.data = b2;
    } else this.data = a;
  }
  t(cd, gb);
  function dd() {
    hb.call(this);
    this.status = 1;
  }
  t(dd, hb);
  function Z(a) {
    this.g = a;
  }
  t(Z, ad);
  Z.prototype.ra = function() {
    D2(this.g, "a");
  };
  Z.prototype.qa = function(a) {
    D2(this.g, new cd(a));
  };
  Z.prototype.pa = function(a) {
    D2(this.g, new dd());
  };
  Z.prototype.oa = function() {
    D2(this.g, "b");
  };
  bd.prototype.createWebChannel = bd.prototype.g;
  Y2.prototype.send = Y2.prototype.o;
  Y2.prototype.open = Y2.prototype.m;
  Y2.prototype.close = Y2.prototype.close;
  createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
    return new bd();
  };
  getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
    return jb();
  };
  Event = webchannel_blob_es2018.Event = I;
  Stat = webchannel_blob_es2018.Stat = {
    jb: 0,
    mb: 1,
    nb: 2,
    Hb: 3,
    Mb: 4,
    Jb: 5,
    Kb: 6,
    Ib: 7,
    Gb: 8,
    Lb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Eb: 12,
    Ab: 13,
    Bb: 14,
    zb: 15,
    Cb: 16,
    Db: 17,
    fb: 18,
    eb: 19,
    gb: 20
  };
  ub.NO_ERROR = 0;
  ub.TIMEOUT = 8;
  ub.HTTP_ERROR = 6;
  ErrorCode = webchannel_blob_es2018.ErrorCode = ub;
  vb.COMPLETE = "complete";
  EventType = webchannel_blob_es2018.EventType = vb;
  fb.EventType = H;
  H.OPEN = "a";
  H.CLOSE = "b";
  H.ERROR = "c";
  H.MESSAGE = "d";
  C2.prototype.listen = C2.prototype.J;
  WebChannel = webchannel_blob_es2018.WebChannel = fb;
  FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Ec;
  X.prototype.listenOnce = X.prototype.K;
  X.prototype.getLastError = X.prototype.Ha;
  X.prototype.getLastErrorCode = X.prototype.ya;
  X.prototype.getStatus = X.prototype.ca;
  X.prototype.getResponseJson = X.prototype.La;
  X.prototype.getResponseText = X.prototype.la;
  X.prototype.send = X.prototype.ea;
  X.prototype.setWithCredentials = X.prototype.Fa;
  XhrIo = webchannel_blob_es2018.XhrIo = X;
}).apply(typeof commonjsGlobal2 !== "undefined" ? commonjsGlobal2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/firestore/dist/common-7a7519be.esm.js
var User = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
var b = "12.13.0";
function __PRIVATE_setSDKVersion(e) {
  b = e;
}
var S = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
  return S.logLevel;
}
function __PRIVATE_logDebug(e, ...t) {
  if (S.logLevel <= LogLevel.DEBUG) {
    const n = t.map(__PRIVATE_argToString);
    S.debug(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_logError(e, ...t) {
  if (S.logLevel <= LogLevel.ERROR) {
    const n = t.map(__PRIVATE_argToString);
    S.error(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_logWarn(e, ...t) {
  if (S.logLevel <= LogLevel.WARN) {
    const n = t.map(__PRIVATE_argToString);
    S.warn(`Firestore (${b}): ${e}`, ...n);
  }
}
function __PRIVATE_argToString(e) {
  if ("string" == typeof e) return e;
  try {
    return (function __PRIVATE_formatJSON(e2) {
      return JSON.stringify(e2);
    })(e);
  } catch (t) {
    return e;
  }
}
function fail(e, t, n) {
  let r = "Unexpected state";
  "string" == typeof t ? r = t : n = t, __PRIVATE__fail(e, r, n);
}
function __PRIVATE__fail(e, t, n) {
  let r = `FIRESTORE (${b}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;
  if (void 0 !== n) try {
    r += " CONTEXT: " + JSON.stringify(n);
  } catch (e2) {
    r += " CONTEXT: " + n;
  }
  throw __PRIVATE_logError(r), new Error(r);
}
function __PRIVATE_hardAssert(e, t, n, r) {
  let i = "Unexpected state";
  "string" == typeof n ? i = n : r = n, e || __PRIVATE__fail(t, i, r);
}
function __PRIVATE_debugCast(e, t) {
  return e;
}
var D = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var FirestoreError = class extends FirebaseError {
  /** @hideconstructor */
  constructor(e, t) {
    super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var __PRIVATE_Deferred = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
};
var __PRIVATE_OAuthToken = class {
  constructor(e, t) {
    this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
};
var __PRIVATE_EmptyAuthCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t) {
    e.enqueueRetryable(() => t(User.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var __PRIVATE_EmulatorAuthCredentialsProvider = class {
  constructor(e) {
    this.token = e, /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {
  }
  start(e, t) {
    this.changeListener = t, // Fire with initial user.
    e.enqueueRetryable(() => t(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
};
var __PRIVATE_FirebaseAuthCredentialsProvider = class {
  constructor(e) {
    this.t = e, /** Tracks the current User. */
    this.currentUser = User.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(e, t) {
    __PRIVATE_hardAssert(void 0 === this.o, 42304);
    let n = this.i;
    const __PRIVATE_guardedChangeListener = (e2) => this.i !== n ? (n = this.i, t(e2)) : Promise.resolve();
    let r = new __PRIVATE_Deferred();
    this.o = () => {
      this.i++, this.currentUser = this.u(), r.resolve(), r = new __PRIVATE_Deferred(), e.enqueueRetryable(() => __PRIVATE_guardedChangeListener(this.currentUser));
    };
    const __PRIVATE_awaitNextToken = () => {
      const t2 = r;
      e.enqueueRetryable(() => __async(this, null, function* () {
        yield t2.promise, yield __PRIVATE_guardedChangeListener(this.currentUser);
      }));
    }, __PRIVATE_registerAuth = (e2) => {
      __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e2, this.o && (this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken());
    };
    this.t.onInit((e2) => __PRIVATE_registerAuth(e2)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const e2 = this.t.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAuth(e2) : (
          // If auth is still not available, proceed with `null` user
          (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r.resolve(), r = new __PRIVATE_Deferred())
        );
      }
    }, 0), __PRIVATE_awaitNextToken();
  }
  getToken() {
    const e = this.i, t = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(t).then((t2) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t2 ? (__PRIVATE_hardAssert("string" == typeof t2.accessToken, 31837, {
        l: t2
      }), new __PRIVATE_OAuthToken(t2.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const e = this.auth && this.auth.getUid();
    return __PRIVATE_hardAssert(null === e || "string" == typeof e, 2055, {
      h: e
    }), new User(e);
  }
};
var __PRIVATE_FirstPartyToken = class {
  constructor(e, t, n) {
    this.P = e, this.T = t, this.I = n, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.R = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  A() {
    return this.I ? this.I() : null;
  }
  get headers() {
    this.R.set("X-Goog-AuthUser", this.P);
    const e = this.A();
    return e && this.R.set("Authorization", e), this.T && this.R.set("X-Goog-Iam-Authorization-Token", this.T), this.R;
  }
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
  constructor(e, t, n) {
    this.P = e, this.T = t, this.I = n;
  }
  getToken() {
    return Promise.resolve(new __PRIVATE_FirstPartyToken(this.P, this.T, this.I));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(User.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var AppCheckToken = class {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var __PRIVATE_FirebaseAppCheckTokenProvider = class {
  constructor(t, n) {
    this.V = n, this.forceRefresh = false, this.appCheck = null, this.m = null, this.p = null, _isFirebaseServerApp(t) && t.settings.appCheckToken && (this.p = t.settings.appCheckToken);
  }
  start(e, t) {
    __PRIVATE_hardAssert(void 0 === this.o, 3512);
    const onTokenChanged = (e2) => {
      null != e2.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e2.error.message}`);
      const n = e2.token !== this.m;
      return this.m = e2.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e2.token) : Promise.resolve();
    };
    this.o = (t2) => {
      e.enqueueRetryable(() => onTokenChanged(t2));
    };
    const __PRIVATE_registerAppCheck = (e2) => {
      __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e2, this.o && this.appCheck.addTokenListener(this.o);
    };
    this.V.onInit((e2) => __PRIVATE_registerAppCheck(e2)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const e2 = this.V.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAppCheck(e2) : (
          // If AppCheck is still not available, proceed without it.
          __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    if (this.p) return Promise.resolve(new AppCheckToken(this.p));
    const e = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e).then((e2) => e2 ? (__PRIVATE_hardAssert("string" == typeof e2.token, 44558, {
      tokenResult: e2
    }), this.m = e2.token, new AppCheckToken(e2.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
  }
};
function __PRIVATE_randomBytes(e) {
  const t = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto)
  ), n = new Uint8Array(e);
  if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
  else
    for (let t2 = 0; t2 < e; t2++) n[t2] = Math.floor(256 * Math.random());
  return n;
}
var __PRIVATE_AutoId = class {
  static newId() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = 62 * Math.floor(256 / 62);
    let n = "";
    for (; n.length < 20; ) {
      const r = __PRIVATE_randomBytes(40);
      for (let i = 0; i < r.length; ++i)
        n.length < 20 && r[i] < t && (n += e.charAt(r[i] % 62));
    }
    return n;
  }
};
function __PRIVATE_primitiveComparator(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function __PRIVATE_compareUtf8Strings(e, t) {
  const n = Math.min(e.length, t.length);
  for (let r = 0; r < n; r++) {
    const n2 = e.charAt(r), i = t.charAt(r);
    if (n2 !== i) return __PRIVATE_isSurrogate(n2) === __PRIVATE_isSurrogate(i) ? __PRIVATE_primitiveComparator(n2, i) : __PRIVATE_isSurrogate(n2) ? 1 : -1;
  }
  return __PRIVATE_primitiveComparator(e.length, t.length);
}
var C = 55296;
var v = 57343;
function __PRIVATE_isSurrogate(e) {
  const t = e.charCodeAt(0);
  return t >= C && t <= v;
}
function __PRIVATE_arrayEquals(e, t, n) {
  return e.length === t.length && e.every((e2, r) => n(e2, t[r]));
}
var F = "__name__";
var BasePath = class _BasePath {
  constructor(e, t, n) {
    void 0 === t ? t = 0 : t > e.length && fail(637, {
      offset: t,
      range: e.length
    }), void 0 === n ? n = e.length - t : n > e.length - t && fail(1746, {
      length: n,
      range: e.length - t
    }), this.segments = e, this.offset = t, this.len = n;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return 0 === _BasePath.comparator(this, e);
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return e instanceof _BasePath ? e.forEach((e2) => {
      t.push(e2);
    }) : t.push(e), this.construct(t);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return false;
    for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return false;
    return true;
  }
  forEach(e) {
    for (let t = this.offset, n = this.limit(); t < n; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  /**
   * Compare 2 paths segment by segment, prioritizing numeric IDs
   * (e.g., "__id123__") in numeric ascending order, followed by string
   * segments in lexicographical order.
   */
  static comparator(e, t) {
    const n = Math.min(e.length, t.length);
    for (let r = 0; r < n; r++) {
      const n2 = _BasePath.compareSegments(e.get(r), t.get(r));
      if (0 !== n2) return n2;
    }
    return __PRIVATE_primitiveComparator(e.length, t.length);
  }
  static compareSegments(e, t) {
    const n = _BasePath.isNumericId(e), r = _BasePath.isNumericId(t);
    return n && !r ? -1 : !n && r ? 1 : n && r ? _BasePath.extractNumericId(e).compare(_BasePath.extractNumericId(t)) : __PRIVATE_compareUtf8Strings(e, t);
  }
  // Checks if a segment is a numeric ID (starts with "__id" and ends with "__").
  static isNumericId(e) {
    return e.startsWith("__id") && e.endsWith("__");
  }
  static extractNumericId(e) {
    return Integer.fromString(e.substring(4, e.length - 2));
  }
};
var ResourcePath = class _ResourcePath extends BasePath {
  construct(e, t, n) {
    return new _ResourcePath(e, t, n);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t = [];
    for (const n of e) {
      if (n.indexOf("//") >= 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
      t.push(...n.split("/").filter((e2) => e2.length > 0));
    }
    return new _ResourcePath(t);
  }
  static emptyPath() {
    return new _ResourcePath([]);
  }
};
var M = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var FieldPath$1 = class _FieldPath$1 extends BasePath {
  construct(e, t, n) {
    return new _FieldPath$1(e, t, n);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return M.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && this.get(0) === F;
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new _FieldPath$1([F]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t = [];
    let n = "", r = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (0 === n.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t.push(n), n = "";
    };
    let i = false;
    for (; r < e.length; ) {
      const t2 = e[r];
      if ("\\" === t2) {
        if (r + 1 === e.length) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const t3 = e[r + 1];
        if ("\\" !== t3 && "." !== t3 && "`" !== t3) throw new FirestoreError(D.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        n += t3, r += 2;
      } else "`" === t2 ? (i = !i, r++) : "." !== t2 || i ? (n += t2, r++) : (__PRIVATE_addCurrentSegment(), r++);
    }
    if (__PRIVATE_addCurrentSegment(), i) throw new FirestoreError(D.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new _FieldPath$1(t);
  }
  static emptyPath() {
    return new _FieldPath$1([]);
  }
};
var DocumentKey = class _DocumentKey {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new _DocumentKey(ResourcePath.fromString(e));
  }
  static fromName(e) {
    return new _DocumentKey(ResourcePath.fromString(e).popFirst(5));
  }
  static empty() {
    return new _DocumentKey(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return ResourcePath.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new _DocumentKey(new ResourcePath(e.slice()));
  }
};
function __PRIVATE_validateNonEmptyArgument(e, t, n) {
  if (!n) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
}
function __PRIVATE_validateIsNotUsedTogether(e, t, n, r) {
  if (true === t && true === r) throw new FirestoreError(D.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function __PRIVATE_validateDocumentPath(e) {
  if (!DocumentKey.isDocumentKey(e)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_validateCollectionPath(e) {
  if (DocumentKey.isDocumentKey(e)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`);
}
function __PRIVATE_isPlainObject(e) {
  return "object" == typeof e && null !== e && (Object.getPrototypeOf(e) === Object.prototype || null === Object.getPrototypeOf(e));
}
function __PRIVATE_valueDescription(e) {
  if (void 0 === e) return "undefined";
  if (null === e) return "null";
  if ("string" == typeof e) return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if ("number" == typeof e || "boolean" == typeof e) return "" + e;
  if ("object" == typeof e) {
    if (e instanceof Array) return "an array";
    {
      const t = (
        /** try to get the constructor name for an object. */
        (function __PRIVATE_tryGetCustomObjectType(e2) {
          if (e2.constructor) return e2.constructor.name;
          return null;
        })(e)
      );
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return "function" == typeof e ? "a function" : fail(12329, {
    type: typeof e
  });
}
function __PRIVATE_cast(e, t) {
  if ("_delegate" in e && // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e = e._delegate), !(e instanceof t)) {
    if (t.name === e.constructor.name) throw new FirestoreError(D.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    {
      const n = __PRIVATE_valueDescription(e);
      throw new FirestoreError(D.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
function property(e, t) {
  const n = {
    typeString: e
  };
  return t && (n.value = t), n;
}
function __PRIVATE_validateJSON(e, t) {
  if (!__PRIVATE_isPlainObject(e)) throw new FirestoreError(D.INVALID_ARGUMENT, "JSON must be an object");
  let n;
  for (const r in t) if (t[r]) {
    const i = t[r].typeString, s = "value" in t[r] ? {
      value: t[r].value
    } : void 0;
    if (!(r in e)) {
      n = `JSON missing required field: '${r}'`;
      break;
    }
    const o = e[r];
    if (i && typeof o !== i) {
      n = `JSON field '${r}' must be a ${i}.`;
      break;
    }
    if (void 0 !== s && o !== s.value) {
      n = `Expected '${r}' field to equal '${s.value}'`;
      break;
    }
  }
  if (n) throw new FirestoreError(D.INVALID_ARGUMENT, n);
  return true;
}
var x = -62135596800;
var O = 1e6;
var Timestamp = class _Timestamp {
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return _Timestamp.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return _Timestamp.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t = Math.floor(e / 1e3), n = Math.floor((e - 1e3 * t) * O);
    return new _Timestamp(t, n);
  }
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t) {
    if (this.seconds = e, this.nanoseconds = t, t < 0) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (t >= 1e9) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
    if (e < x) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800) throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / O;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /**
   * Returns a JSON-serializable representation of this `Timestamp`.
   */
  toJSON() {
    return {
      type: _Timestamp._jsonSchemaVersion,
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Builds a `Timestamp` instance from a JSON object created by {@link Timestamp.toJSON}.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _Timestamp._jsonSchema)) return new _Timestamp(e.seconds, e.nanoseconds);
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - x;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
Timestamp._jsonSchemaVersion = "firestore/timestamp/1.0", Timestamp._jsonSchema = {
  type: property("string", Timestamp._jsonSchemaVersion),
  seconds: property("number"),
  nanoseconds: property("number")
};
var SnapshotVersion = class _SnapshotVersion {
  static fromTimestamp(e) {
    return new _SnapshotVersion(e);
  }
  static min() {
    return new _SnapshotVersion(new Timestamp(0, 0));
  }
  static max() {
    return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
  }
  constructor(e) {
    this.timestamp = e;
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var N = -1;
var FieldIndex = class {
  constructor(e, t, n, r) {
    this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r;
  }
};
FieldIndex.UNKNOWN_ID = -1;
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
  const n = e.toTimestamp().seconds, r = e.toTimestamp().nanoseconds + 1, i = SnapshotVersion.fromTimestamp(1e9 === r ? new Timestamp(n + 1, 0) : new Timestamp(n, r));
  return new IndexOffset(i, DocumentKey.empty(), t);
}
function __PRIVATE_newIndexOffsetFromDocument(e) {
  return new IndexOffset(e.readTime, e.key, N);
}
var IndexOffset = class _IndexOffset {
  constructor(e, t, n) {
    this.readTime = e, this.documentKey = t, this.largestBatchId = n;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new _IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), N);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new _IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), N);
  }
};
function __PRIVATE_indexOffsetComparator(e, t) {
  let n = e.readTime.compareTo(t.readTime);
  return 0 !== n ? n : (n = DocumentKey.comparator(e.documentKey, t.documentKey), 0 !== n ? n : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId));
}
var B = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
var PersistenceTransaction = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
};
function __PRIVATE_ignoreIfPrimaryLeaseLoss(e) {
  return __async(this, null, function* () {
    if (e.code !== D.FAILED_PRECONDITION || e.message !== B) throw e;
    __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
  });
}
var PersistencePromise = class _PersistencePromise {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = false, e((e2) => {
      this.isDone = true, this.result = e2, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(e2);
    }, (e2) => {
      this.isDone = true, this.error = e2, this.catchCallback && this.catchCallback(e2);
    });
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return this.callbackAttached && fail(59440), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new _PersistencePromise((n, r) => {
      this.nextCallback = (t2) => {
        this.wrapSuccess(e, t2).next(n, r);
      }, this.catchCallback = (e2) => {
        this.wrapFailure(t, e2).next(n, r);
      };
    });
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof _PersistencePromise ? t : _PersistencePromise.resolve(t);
    } catch (e2) {
      return _PersistencePromise.reject(e2);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.reject(t);
  }
  static resolve(e) {
    return new _PersistencePromise((t, n) => {
      t(e);
    });
  }
  static reject(e) {
    return new _PersistencePromise((t, n) => {
      n(e);
    });
  }
  static waitFor(e) {
    return new _PersistencePromise((t, n) => {
      let r = 0, i = 0, s = false;
      e.forEach((e2) => {
        ++r, e2.next(() => {
          ++i, s && i === r && t();
        }, (e3) => n(e3));
      }), s = true, i === r && t();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(e) {
    let t = _PersistencePromise.resolve(false);
    for (const n of e) t = t.next((e2) => e2 ? _PersistencePromise.resolve(e2) : n());
    return t;
  }
  static forEach(e, t) {
    const n = [];
    return e.forEach((e2, r) => {
      n.push(t.call(this, e2, r));
    }), this.waitFor(n);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(e, t) {
    return new _PersistencePromise((n, r) => {
      const i = e.length, s = new Array(i);
      let o = 0;
      for (let _ = 0; _ < i; _++) {
        const a = _;
        t(e[a]).next((e2) => {
          s[a] = e2, ++o, o === i && n(s);
        }, (e2) => r(e2));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(e, t) {
    return new _PersistencePromise((n, r) => {
      const process2 = () => {
        true === e() ? t().next(() => {
          process2();
        }, r) : n();
      };
      process2();
    });
  }
};
function __PRIVATE_getAndroidVersion(e) {
  const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n);
}
function __PRIVATE_isIndexedDbTransactionError(e) {
  return "IndexedDbTransactionError" === e.name;
}
var __PRIVATE_ListenSequence = class {
  constructor(e, t) {
    this.previousValue = e, t && (t.sequenceNumberHandler = (e2) => this.ae(e2), this.ue = (e2) => t.writeSequenceNumber(e2));
  }
  ae(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.ue && this.ue(e), e;
  }
};
__PRIVATE_ListenSequence.ce = -1;
var q = -1;
function __PRIVATE_isNullOrUndefined(e) {
  return null == e;
}
function __PRIVATE_isNegativeZero(e) {
  return 0 === e && 1 / e == -1 / 0;
}
function isSafeInteger(e) {
  return "number" == typeof e && Number.isInteger(e) && !__PRIVATE_isNegativeZero(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
}
var U = "";
function __PRIVATE_encodeResourcePath(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t.length > 0 && (t = __PRIVATE_encodeSeparator(t)), t = __PRIVATE_encodeSegment(e.get(n), t);
  return __PRIVATE_encodeSeparator(t);
}
function __PRIVATE_encodeSegment(e, t) {
  let n = t;
  const r = e.length;
  for (let t2 = 0; t2 < r; t2++) {
    const r2 = e.charAt(t2);
    switch (r2) {
      case "\0":
        n += "";
        break;
      case U:
        n += "";
        break;
      default:
        n += r2;
    }
  }
  return n;
}
function __PRIVATE_encodeSeparator(e) {
  return e + U + "";
}
var $ = "remoteDocuments";
var W = "owner";
var G = "mutationQueues";
var j = "mutations";
var Y = "documentMutations";
var ee = "remoteDocumentsV14";
var oe = "remoteDocumentGlobal";
var ae = "targets";
var le = "targetDocuments";
var Ee = "targetGlobal";
var Re = "collectionParents";
var Ve = "clientMetadata";
var me = "bundles";
var ge = "namedQueries";
var ye = "indexConfiguration";
var De = "indexState";
var Me = "indexEntries";
var Be = "documentOverlays";
var $e = "globals";
var Qe = [...[...[...[...[G, j, Y, $, ae, W, Ee, le], Ve], oe], Re], me, ge];
var Ge = [...Qe, Be];
var ze = [G, j, Y, ee, ae, W, Ee, le, Ve, oe, Re, me, ge, Be];
var je = ze;
var He = [...je, ye, De, Me];
var Ze = [...He, $e];
function __PRIVATE_objectSize(e) {
  let t = 0;
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
  return t;
}
function forEach(e, t) {
  for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
}
function isEmpty(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return false;
  return true;
}
var SortedMap = class _SortedMap {
  constructor(e, t) {
    this.comparator = e, this.root = t || LLRBNode.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t) {
    return new _SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new _SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t = this.root;
    for (; !t.isEmpty(); ) {
      const n = this.comparator(e, t.key);
      if (0 === n) return t.value;
      n < 0 ? t = t.left : n > 0 && (t = t.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t = 0, n = this.root;
    for (; !n.isEmpty(); ) {
      const r = this.comparator(e, n.key);
      if (0 === r) return t + n.left.size;
      r < 0 ? n = n.left : (
        // Count all nodes left of the node plus the node itself
        (t += n.left.size + 1, n = n.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t, n) => (e(t, n), false));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), false)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(e, t, n, r) {
    this.isReverse = r, this.nodeStack = [];
    let i = 1;
    for (; !e.isEmpty(); ) if (i = t ? n(e.key, t) : 1, // flip the comparison if we're going in reverse
    t && r && (i *= -1), i < 0)
      e = this.isReverse ? e.left : e.right;
    else {
      if (0 === i) {
        this.nodeStack.push(e);
        break;
      }
      this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
    }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), e = e.right;
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), e = e.left;
    return t;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
};
var LLRBNode = class _LLRBNode {
  constructor(e, t, n, r, i) {
    this.key = e, this.value = t, this.color = null != n ? n : _LLRBNode.RED, this.left = null != r ? r : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t, n, r, i) {
    return new _LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t, n) {
    let r = this;
    const i = n(e, r.key);
    return r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty()) return _LLRBNode.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t) {
    let n, r = this;
    if (t(e, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(e, t), null);
    else {
      if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === t(e, r.key)) {
        if (r.right.isEmpty()) return _LLRBNode.EMPTY;
        n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin());
      }
      r = r.copy(null, null, null, null, r.right.remove(e, t));
    }
    return r.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed()) throw fail(43730, {
      key: this.key,
      value: this.value
    });
    if (this.right.isRed()) throw fail(14113, {
      key: this.key,
      value: this.value
    });
    const e = this.left.check();
    if (e !== this.right.check()) throw fail(27949);
    return e + (this.isRed() ? 0 : 1);
  }
};
LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail(57766);
  }
  get value() {
    throw fail(16141);
  }
  get color() {
    throw fail(16727);
  }
  get left() {
    throw fail(29726);
  }
  get right() {
    throw fail(36894);
  }
  // Returns a copy of the current node.
  copy(e, t, n, r, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t, n) {
    return new LLRBNode(e, t);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e) {
    return false;
  }
  reverseTraversal(e) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var SortedSet = class _SortedSet {
  constructor(e) {
    this.comparator = e, this.data = new SortedMap(this.comparator);
  }
  has(e) {
    return null !== this.data.get(e);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((t, n) => (e(t), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t) {
    const n = this.data.getIteratorFrom(e[0]);
    for (; n.hasNext(); ) {
      const r = n.getNext();
      if (this.comparator(r.key, e[1]) >= 0) return;
      t(r.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t) {
    let n;
    for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); ) {
      if (!e(n.getNext().key)) return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new SortedSetIterator(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, true));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return t.size < e.size && (t = e, e = this), e.forEach((e2) => {
      t = t.add(e2);
    }), t;
  }
  isEqual(e) {
    if (!(e instanceof _SortedSet)) return false;
    if (this.size !== e.size) return false;
    const t = this.data.getIterator(), n = e.data.getIterator();
    for (; t.hasNext(); ) {
      const e2 = t.getNext().key, r = n.getNext().key;
      if (0 !== this.comparator(e2, r)) return false;
    }
    return true;
  }
  toArray() {
    const e = [];
    return this.forEach((t) => {
      e.push(t);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t = new _SortedSet(this.comparator);
    return t.data = e, t;
  }
};
var SortedSetIterator = class {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
var FieldMask = class _FieldMask {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(FieldPath$1.comparator);
  }
  static empty() {
    return new _FieldMask([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t = new SortedSet(FieldPath$1.comparator);
    for (const e2 of this.fields) t = t.add(e2);
    for (const n of e) t = t.add(n);
    return new _FieldMask(t.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return true;
    return false;
  }
  isEqual(e) {
    return __PRIVATE_arrayEquals(this.fields, e.fields, (e2, t) => e2.isEqual(t));
  }
};
var __PRIVATE_Base64DecodeError = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
var ByteString = class _ByteString {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = (function __PRIVATE_decodeBase64(e2) {
      try {
        return atob(e2);
      } catch (e3) {
        throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
      }
    })(e);
    return new _ByteString(t);
  }
  static fromUint8Array(e) {
    const t = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      (function __PRIVATE_binaryStringFromUint8Array(e2) {
        let t2 = "";
        for (let n = 0; n < e2.length; ++n) t2 += String.fromCharCode(e2[n]);
        return t2;
      })(e)
    );
    return new _ByteString(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return (function __PRIVATE_encodeBase64(e) {
      return btoa(e);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function __PRIVATE_uint8ArrayFromBinaryString(e) {
      const t = new Uint8Array(e.length);
      for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
      return t;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var Ye = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(e) {
  if (__PRIVATE_hardAssert(!!e, 39018), "string" == typeof e) {
    let t = 0;
    const n = Ye.exec(e);
    if (__PRIVATE_hardAssert(!!n, 46558, {
      timestamp: e
    }), n[1]) {
      let e2 = n[1];
      e2 = (e2 + "000000000").substr(0, 9), t = Number(e2);
    }
    const r = new Date(e);
    return {
      seconds: Math.floor(r.getTime() / 1e3),
      nanos: t
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e.seconds),
    nanos: __PRIVATE_normalizeNumber(e.nanos)
  };
}
function __PRIVATE_normalizeNumber(e) {
  return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
function __PRIVATE_normalizeByteString(e) {
  return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
var et = "server_timestamp";
var tt = "__type__";
var nt = "__previous_value__";
var rt = "__local_write_time__";
function __PRIVATE_isServerTimestamp(e) {
  const t = (e?.mapValue?.fields || {})[tt]?.stringValue;
  return t === et;
}
function __PRIVATE_getPreviousValue(e) {
  const t = e.mapValue.fields[nt];
  return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
}
function __PRIVATE_getLocalWriteTime(e) {
  const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields[rt].timestampValue);
  return new Timestamp(t.seconds, t.nanos);
}
var DatabaseInfo = class {
  /**
   * Constructs a DatabaseInfo using the provided host, databaseId and
   * persistenceKey.
   *
   * @param databaseId - The database to use.
   * @param appId - The Firebase App Id.
   * @param persistenceKey - A unique identifier for this Firestore's local
   * storage (used in conjunction with the databaseId).
   * @param host - The Firestore backend host to connect to.
   * @param ssl - Whether to use SSL when connecting.
   * @param forceLongPolling - Whether to use the forceLongPolling option
   * when using WebChannel as the network transport.
   * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
   * option when using WebChannel as the network transport.
   * @param longPollingOptions - Options that configure long-polling.
   * @param useFetchStreams - Whether to use the Fetch API instead of
   * XMLHTTPRequest
   */
  constructor(e, t, n, r, i, s, o, _, a, u, c) {
    this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = _, this.useFetchStreams = a, this.isUsingEmulator = u, this.apiKey = c;
  }
};
var it = "(default)";
var DatabaseId = class _DatabaseId {
  constructor(e, t) {
    this.projectId = e, this.database = t || it;
  }
  static empty() {
    return new _DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return this.database === it;
  }
  isEqual(e) {
    return e instanceof _DatabaseId && e.projectId === this.projectId && e.database === this.database;
  }
};
function __PRIVATE_databaseIdFromApp(e, t) {
  if (!Object.prototype.hasOwnProperty.apply(e.options, ["projectId"])) throw new FirestoreError(D.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
  return new DatabaseId(e.options.projectId, t);
}
var st = "__type__";
var ot = "__max__";
var _t = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: ot
      }
    }
  }
};
var at = "__vector__";
var ut = "value";
function __PRIVATE_typeOrder(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : __PRIVATE_isVectorValue(e) ? 10 : 11 : fail(28295, {
    value: e
  });
}
function __PRIVATE_valueEquals(e, t) {
  if (e === t) return true;
  const n = __PRIVATE_typeOrder(e);
  if (n !== __PRIVATE_typeOrder(t)) return false;
  switch (n) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e.booleanValue === t.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
    case 3:
      return (function __PRIVATE_timestampEquals(e2, t2) {
        if ("string" == typeof e2.timestampValue && "string" == typeof t2.timestampValue && e2.timestampValue.length === t2.timestampValue.length)
          return e2.timestampValue === t2.timestampValue;
        const n2 = __PRIVATE_normalizeTimestamp(e2.timestampValue), r = __PRIVATE_normalizeTimestamp(t2.timestampValue);
        return n2.seconds === r.seconds && n2.nanos === r.nanos;
      })(e, t);
    case 5:
      return e.stringValue === t.stringValue;
    case 6:
      return (function __PRIVATE_blobEquals(e2, t2) {
        return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t2.bytesValue));
      })(e, t);
    case 7:
      return e.referenceValue === t.referenceValue;
    case 8:
      return (function __PRIVATE_geoPointEquals(e2, t2) {
        return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.longitude);
      })(e, t);
    case 2:
      return (function __PRIVATE_numberEquals(e2, t2) {
        if ("integerValue" in e2 && "integerValue" in t2) return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t2.integerValue);
        if ("doubleValue" in e2 && "doubleValue" in t2) {
          const n2 = __PRIVATE_normalizeNumber(e2.doubleValue), r = __PRIVATE_normalizeNumber(t2.doubleValue);
          return n2 === r ? __PRIVATE_isNegativeZero(n2) === __PRIVATE_isNegativeZero(r) : isNaN(n2) && isNaN(r);
        }
        return false;
      })(e, t);
    case 9:
      return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], __PRIVATE_valueEquals);
    case 10:
    case 11:
      return (function __PRIVATE_objectEquals(e2, t2) {
        const n2 = e2.mapValue.fields || {}, r = t2.mapValue.fields || {};
        if (__PRIVATE_objectSize(n2) !== __PRIVATE_objectSize(r)) return false;
        for (const e3 in n2) if (n2.hasOwnProperty(e3) && (void 0 === r[e3] || !__PRIVATE_valueEquals(n2[e3], r[e3]))) return false;
        return true;
      })(e, t);
    default:
      return fail(52216, {
        left: e
      });
  }
}
function __PRIVATE_arrayValueContains(e, t) {
  return void 0 !== (e.values || []).find((e2) => __PRIVATE_valueEquals(e2, t));
}
function __PRIVATE_valueCompare(e, t) {
  if (e === t) return 0;
  const n = __PRIVATE_typeOrder(e), r = __PRIVATE_typeOrder(t);
  if (n !== r) return __PRIVATE_primitiveComparator(n, r);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
    case 2:
      return (function __PRIVATE_compareNumbers(e2, t2) {
        const n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), r2 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue);
        return n2 < r2 ? -1 : n2 > r2 ? 1 : n2 === r2 ? 0 : (
          // one or both are NaN.
          isNaN(n2) ? isNaN(r2) ? 0 : -1 : 1
        );
      })(e, t);
    case 3:
      return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
    case 5:
      return __PRIVATE_compareUtf8Strings(e.stringValue, t.stringValue);
    case 6:
      return (function __PRIVATE_compareBlobs(e2, t2) {
        const n2 = __PRIVATE_normalizeByteString(e2), r2 = __PRIVATE_normalizeByteString(t2);
        return n2.compareTo(r2);
      })(e.bytesValue, t.bytesValue);
    case 7:
      return (function __PRIVATE_compareReferences(e2, t2) {
        const n2 = e2.split("/"), r2 = t2.split("/");
        for (let e3 = 0; e3 < n2.length && e3 < r2.length; e3++) {
          const t3 = __PRIVATE_primitiveComparator(n2[e3], r2[e3]);
          if (0 !== t3) return t3;
        }
        return __PRIVATE_primitiveComparator(n2.length, r2.length);
      })(e.referenceValue, t.referenceValue);
    case 8:
      return (function __PRIVATE_compareGeoPoints(e2, t2) {
        const n2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t2.latitude));
        if (0 !== n2) return n2;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t2.longitude));
      })(e.geoPointValue, t.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(e.arrayValue, t.arrayValue);
    case 10:
      return (function __PRIVATE_compareVectors(e2, t2) {
        const n2 = e2.fields || {}, r2 = t2.fields || {}, i = n2[ut]?.arrayValue, s = r2[ut]?.arrayValue, o = __PRIVATE_primitiveComparator(i?.values?.length || 0, s?.values?.length || 0);
        if (0 !== o) return o;
        return __PRIVATE_compareArrays(i, s);
      })(e.mapValue, t.mapValue);
    case 11:
      return (function __PRIVATE_compareMaps(e2, t2) {
        if (e2 === _t.mapValue && t2 === _t.mapValue) return 0;
        if (e2 === _t.mapValue) return 1;
        if (t2 === _t.mapValue) return -1;
        const n2 = e2.fields || {}, r2 = Object.keys(n2), i = t2.fields || {}, s = Object.keys(i);
        r2.sort(), s.sort();
        for (let e3 = 0; e3 < r2.length && e3 < s.length; ++e3) {
          const t3 = __PRIVATE_compareUtf8Strings(r2[e3], s[e3]);
          if (0 !== t3) return t3;
          const o = __PRIVATE_valueCompare(n2[r2[e3]], i[s[e3]]);
          if (0 !== o) return o;
        }
        return __PRIVATE_primitiveComparator(r2.length, s.length);
      })(e.mapValue, t.mapValue);
    default:
      throw fail(23264, {
        he: n
      });
  }
}
function __PRIVATE_compareTimestamps(e, t) {
  if ("string" == typeof e && "string" == typeof t && e.length === t.length) return __PRIVATE_primitiveComparator(e, t);
  const n = __PRIVATE_normalizeTimestamp(e), r = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(n.seconds, r.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(n.nanos, r.nanos);
}
function __PRIVATE_compareArrays(e, t) {
  const n = e.values || [], r = t.values || [];
  for (let e2 = 0; e2 < n.length && e2 < r.length; ++e2) {
    const t2 = __PRIVATE_valueCompare(n[e2], r[e2]);
    if (t2) return t2;
  }
  return __PRIVATE_primitiveComparator(n.length, r.length);
}
function canonicalId(e) {
  return __PRIVATE_canonifyValue(e);
}
function __PRIVATE_canonifyValue(e) {
  return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? (function __PRIVATE_canonifyTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return `time(${t.seconds},${t.nanos})`;
  })(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? (function __PRIVATE_canonifyByteString(e2) {
    return __PRIVATE_normalizeByteString(e2).toBase64();
  })(e.bytesValue) : "referenceValue" in e ? (function __PRIVATE_canonifyReference(e2) {
    return DocumentKey.fromName(e2).toString();
  })(e.referenceValue) : "geoPointValue" in e ? (function __PRIVATE_canonifyGeoPoint(e2) {
    return `geo(${e2.latitude},${e2.longitude})`;
  })(e.geoPointValue) : "arrayValue" in e ? (function __PRIVATE_canonifyArray(e2) {
    let t = "[", n = true;
    for (const r of e2.values || []) n ? n = false : t += ",", t += __PRIVATE_canonifyValue(r);
    return t + "]";
  })(e.arrayValue) : "mapValue" in e ? (function __PRIVATE_canonifyMap(e2) {
    const t = Object.keys(e2.fields || {}).sort();
    let n = "{", r = true;
    for (const i of t) r ? r = false : n += ",", n += `${i}:${__PRIVATE_canonifyValue(e2.fields[i])}`;
    return n + "}";
  })(e.mapValue) : fail(61005, {
    value: e
  });
}
function __PRIVATE_estimateByteSize(e) {
  switch (__PRIVATE_typeOrder(e)) {
    case 0:
    case 1:
      return 4;
    case 2:
      return 8;
    case 3:
    case 8:
      return 16;
    case 4:
      const t = __PRIVATE_getPreviousValue(e);
      return t ? 16 + __PRIVATE_estimateByteSize(t) : 16;
    case 5:
      return 2 * e.stringValue.length;
    case 6:
      return __PRIVATE_normalizeByteString(e.bytesValue).approximateByteSize();
    case 7:
      return e.referenceValue.length;
    case 9:
      return (function __PRIVATE_estimateArrayByteSize(e2) {
        return (e2.values || []).reduce((e3, t2) => e3 + __PRIVATE_estimateByteSize(t2), 0);
      })(e.arrayValue);
    case 10:
    case 11:
      return (function __PRIVATE_estimateMapByteSize(e2) {
        let t2 = 0;
        return forEach(e2.fields, (e3, n) => {
          t2 += e3.length + __PRIVATE_estimateByteSize(n);
        }), t2;
      })(e.mapValue);
    default:
      throw fail(13486, {
        value: e
      });
  }
}
function __PRIVATE_refValue(e, t) {
  return {
    referenceValue: `projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`
  };
}
function isInteger(e) {
  return !!e && "integerValue" in e;
}
function isArray(e) {
  return !!e && "arrayValue" in e;
}
function __PRIVATE_isNullValue(e) {
  return !!e && "nullValue" in e;
}
function __PRIVATE_isNanValue(e) {
  return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
}
function __PRIVATE_isMapValue(e) {
  return !!e && "mapValue" in e;
}
function __PRIVATE_isVectorValue(e) {
  const t = (e?.mapValue?.fields || {})[st]?.stringValue;
  return t === at;
}
function __PRIVATE_deepClone(e) {
  if (e.geoPointValue) return {
    geoPointValue: __spreadValues({}, e.geoPointValue)
  };
  if (e.timestampValue && "object" == typeof e.timestampValue) return {
    timestampValue: __spreadValues({}, e.timestampValue)
  };
  if (e.mapValue) {
    const t = {
      mapValue: {
        fields: {}
      }
    };
    return forEach(e.mapValue.fields, (e2, n) => t.mapValue.fields[e2] = __PRIVATE_deepClone(n)), t;
  }
  if (e.arrayValue) {
    const t = {
      arrayValue: {
        values: []
      }
    };
    for (let n = 0; n < (e.arrayValue.values || []).length; ++n) t.arrayValue.values[n] = __PRIVATE_deepClone(e.arrayValue.values[n]);
    return t;
  }
  return __spreadValues({}, e);
}
function __PRIVATE_isMaxValue(e) {
  return (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === ot;
}
var lt = {
  mapValue: {
    fields: {
      [st]: {
        stringValue: at
      },
      [ut]: {
        arrayValue: {}
      }
    }
  }
};
var ObjectValue = class _ObjectValue {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new _ObjectValue({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let n = 0; n < e.length - 1; ++n) if (t = (t.mapValue.fields || {})[e.get(n)], !__PRIVATE_isMapValue(t)) return null;
      return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t = FieldPath$1.emptyPath(), n = {}, r = [];
    e.forEach((e2, i2) => {
      if (!t.isImmediateParentOf(i2)) {
        const e3 = this.getFieldsMap(t);
        this.applyChanges(e3, n, r), n = {}, r = [], t = i2.popLast();
      }
      e2 ? n[i2.lastSegment()] = __PRIVATE_deepClone(e2) : r.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(t);
    this.applyChanges(i, n, r);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t = this.field(e.popLast());
    __PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return __PRIVATE_valueEquals(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = {
      fields: {}
    });
    for (let n = 0; n < e.length; ++n) {
      let r = t.mapValue.fields[e.get(n)];
      __PRIVATE_isMapValue(r) && r.mapValue.fields || (r = {
        mapValue: {
          fields: {}
        }
      }, t.mapValue.fields[e.get(n)] = r), t = r;
    }
    return t.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t, n) {
    forEach(t, (t2, n2) => e[t2] = n2);
    for (const t2 of n) delete e[t2];
  }
  clone() {
    return new _ObjectValue(__PRIVATE_deepClone(this.value));
  }
};
function __PRIVATE_extractFieldMask(e) {
  const t = [];
  return forEach(e.fields, (e2, n) => {
    const r = new FieldPath$1([e2]);
    if (__PRIVATE_isMapValue(n)) {
      const e3 = __PRIVATE_extractFieldMask(n.mapValue).fields;
      if (0 === e3.length)
        t.push(r);
      else
        for (const n2 of e3) t.push(r.child(n2));
    } else
      t.push(r);
  }), new FieldMask(t);
}
var MutableDocument = class _MutableDocument {
  constructor(e, t, n, r, i, s, o) {
    this.key = e, this.documentType = t, this.version = n, this.readTime = r, this.createTime = i, this.data = s, this.documentState = o;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new _MutableDocument(
      e,
      0,
      /* version */
      SnapshotVersion.min(),
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t, n, r) {
    return new _MutableDocument(
      e,
      1,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      n,
      r,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t) {
    return new _MutableDocument(
      e,
      2,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t) {
    return new _MutableDocument(
      e,
      3,
      /* version */
      t,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t) {
    return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = SnapshotVersion.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(e) {
    return e instanceof _MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var Bound = class {
  constructor(e, t) {
    this.position = e, this.inclusive = t;
  }
};
function __PRIVATE_boundCompareToDocument(e, t, n) {
  let r = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s = t[i], o = e.position[i];
    if (s.field.isKeyField()) r = DocumentKey.comparator(DocumentKey.fromName(o.referenceValue), n.key);
    else {
      r = __PRIVATE_valueCompare(o, n.data.field(s.field));
    }
    if ("desc" === s.dir && (r *= -1), 0 !== r) break;
  }
  return r;
}
function __PRIVATE_boundEquals(e, t) {
  if (null === e) return null === t;
  if (null === t) return false;
  if (e.inclusive !== t.inclusive || e.position.length !== t.position.length) return false;
  for (let n = 0; n < e.position.length; n++) {
    if (!__PRIVATE_valueEquals(e.position[n], t.position[n])) return false;
  }
  return true;
}
var OrderBy = class {
  constructor(e, t = "asc") {
    this.field = e, this.dir = t;
  }
};
function __PRIVATE_orderByEquals(e, t) {
  return e.dir === t.dir && e.field.isEqual(t.field);
}
var Filter = class {
};
var FieldFilter = class _FieldFilter extends Filter {
  constructor(e, t, n) {
    super(), this.field = e, this.op = t, this.value = n;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t, n) {
    return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new __PRIVATE_KeyFieldFilter(e, t, n) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, n) : "in" === t ? new __PRIVATE_InFilter(e, n) : "not-in" === t ? new __PRIVATE_NotInFilter(e, n) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, n) : new _FieldFilter(e, t, n);
  }
  static createKeyFieldInFilter(e, t, n) {
    return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, n) : new __PRIVATE_KeyFieldNotInFilter(e, n);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return "!=" === this.op ? null !== t && void 0 === t.nullValue && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return 0 === e;
      case "!=":
        return 0 !== e;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return fail(47266, {
          operator: this.op
        });
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var CompositeFilter = class _CompositeFilter extends Filter {
  constructor(e, t) {
    super(), this.filters = e, this.op = t, this.Pe = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t) {
    return new _CompositeFilter(e, t);
  }
  matches(e) {
    return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find((t) => !t.matches(e)) : void 0 !== this.filters.find((t) => t.matches(e));
  }
  getFlattenedFilters() {
    return null !== this.Pe || (this.Pe = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.Pe;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function __PRIVATE_compositeFilterIsConjunction(e) {
  return "and" === e.op;
}
function __PRIVATE_compositeFilterIsFlatConjunction(e) {
  return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
}
function __PRIVATE_compositeFilterIsFlat(e) {
  for (const t of e.filters) if (t instanceof CompositeFilter) return false;
  return true;
}
function __PRIVATE_canonifyFilter(e) {
  if (e instanceof FieldFilter)
    return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
  if (__PRIVATE_compositeFilterIsFlatConjunction(e))
    return e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
  {
    const t = e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
    return `${e.op}(${t})`;
  }
}
function __PRIVATE_filterEquals(e, t) {
  return e instanceof FieldFilter ? (function __PRIVATE_fieldFilterEquals(e2, t2) {
    return t2 instanceof FieldFilter && e2.op === t2.op && e2.field.isEqual(t2.field) && __PRIVATE_valueEquals(e2.value, t2.value);
  })(e, t) : e instanceof CompositeFilter ? (function __PRIVATE_compositeFilterEquals(e2, t2) {
    if (t2 instanceof CompositeFilter && e2.op === t2.op && e2.filters.length === t2.filters.length) {
      return e2.filters.reduce((e3, n, r) => e3 && __PRIVATE_filterEquals(n, t2.filters[r]), true);
    }
    return false;
  })(e, t) : void fail(19439);
}
function __PRIVATE_stringifyFilter(e) {
  return e instanceof FieldFilter ? (function __PRIVATE_stringifyFieldFilter(e2) {
    return `${e2.field.canonicalString()} ${e2.op} ${canonicalId(e2.value)}`;
  })(e) : e instanceof CompositeFilter ? (function __PRIVATE_stringifyCompositeFilter(e2) {
    return e2.op.toString() + " {" + e2.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
  })(e) : "Filter";
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
  constructor(e, t, n) {
    super(e, t, n), this.key = DocumentKey.fromName(n.referenceValue);
  }
  matches(e) {
    const t = DocumentKey.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
};
var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
};
var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
};
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
  return (t.arrayValue?.values || []).map((e2) => DocumentKey.fromName(e2.referenceValue));
}
var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
  }
};
var __PRIVATE_InFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "in", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_NotInFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "not-in", t);
  }
  matches(e) {
    if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return false;
    const t = e.data.field(this.field);
    return null !== t && void 0 === t.nullValue && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
  }
};
var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
  constructor(e, t) {
    super(e, "array-contains-any", t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2));
  }
};
var __PRIVATE_TargetImpl = class {
  constructor(e, t = null, n = [], r = [], i = null, s = null, o = null) {
    this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = s, this.endAt = o, this.Te = null;
  }
};
function __PRIVATE_newTarget(e, t = null, n = [], r = [], i = null, s = null, o = null) {
  return new __PRIVATE_TargetImpl(e, t, n, r, i, s, o);
}
function __PRIVATE_canonifyTarget(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.Te) {
    let e2 = t.path.canonicalString();
    null !== t.collectionGroup && (e2 += "|cg:" + t.collectionGroup), e2 += "|f:", e2 += t.filters.map((e3) => __PRIVATE_canonifyFilter(e3)).join(","), e2 += "|ob:", e2 += t.orderBy.map((e3) => (function __PRIVATE_canonifyOrderBy(e4) {
      return e4.field.canonicalString() + e4.dir;
    })(e3)).join(","), __PRIVATE_isNullOrUndefined(t.limit) || (e2 += "|l:", e2 += t.limit), t.startAt && (e2 += "|lb:", e2 += t.startAt.inclusive ? "b:" : "a:", e2 += t.startAt.position.map((e3) => canonicalId(e3)).join(",")), t.endAt && (e2 += "|ub:", e2 += t.endAt.inclusive ? "a:" : "b:", e2 += t.endAt.position.map((e3) => canonicalId(e3)).join(",")), t.Te = e2;
  }
  return t.Te;
}
function __PRIVATE_targetEquals(e, t) {
  if (e.limit !== t.limit) return false;
  if (e.orderBy.length !== t.orderBy.length) return false;
  for (let n = 0; n < e.orderBy.length; n++) if (!__PRIVATE_orderByEquals(e.orderBy[n], t.orderBy[n])) return false;
  if (e.filters.length !== t.filters.length) return false;
  for (let n = 0; n < e.filters.length; n++) if (!__PRIVATE_filterEquals(e.filters[n], t.filters[n])) return false;
  return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!__PRIVATE_boundEquals(e.startAt, t.startAt) && __PRIVATE_boundEquals(e.endAt, t.endAt);
}
function __PRIVATE_targetIsDocumentTarget(e) {
  return DocumentKey.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length;
}
var __PRIVATE_QueryImpl = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t = null, n = [], r = [], i = null, s = "F", o = null, _ = null) {
    this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = _, this.Ie = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.Ee = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.Re = null, this.startAt, this.endAt;
  }
};
function __PRIVATE_newQuery(e, t, n, r, i, s, o, _) {
  return new __PRIVATE_QueryImpl(e, t, n, r, i, s, o, _);
}
function __PRIVATE_newQueryForPath(e) {
  return new __PRIVATE_QueryImpl(e);
}
function __PRIVATE_queryMatchesAllDocuments(e) {
  return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
}
function __PRIVATE_isDocumentQuery$1(e) {
  return DocumentKey.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length;
}
function __PRIVATE_isCollectionGroupQuery(e) {
  return null !== e.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(e) {
  const t = __PRIVATE_debugCast(e);
  if (null === t.Ie) {
    t.Ie = [];
    const e2 = /* @__PURE__ */ new Set();
    for (const n2 of t.explicitOrderBy) t.Ie.push(n2), e2.add(n2.field.canonicalString());
    const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", r = (function __PRIVATE_getInequalityFilterFields(e3) {
      let t2 = new SortedSet(FieldPath$1.comparator);
      return e3.filters.forEach((e4) => {
        e4.getFlattenedFilters().forEach((e5) => {
          e5.isInequality() && (t2 = t2.add(e5.field));
        });
      }), t2;
    })(t);
    r.forEach((r2) => {
      e2.has(r2.canonicalString()) || r2.isKeyField() || t.Ie.push(new OrderBy(r2, n));
    }), // Add the document key field to the last if it is not explicitly ordered.
    e2.has(FieldPath$1.keyField().canonicalString()) || t.Ie.push(new OrderBy(FieldPath$1.keyField(), n));
  }
  return t.Ie;
}
function __PRIVATE_queryToTarget(e) {
  const t = __PRIVATE_debugCast(e);
  return t.Ee || (t.Ee = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.Ee;
}
function __PRIVATE__queryToTarget(e, t) {
  if ("F" === e.limitType) return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
  {
    t = t.map((e2) => {
      const t2 = "desc" === e2.dir ? "asc" : "desc";
      return new OrderBy(e2.field, t2);
    });
    const n = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, n, r);
  }
}
function __PRIVATE_queryWithAddedFilter(e, t) {
  const n = e.filters.concat([t]);
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), n, e.limit, e.limitType, e.startAt, e.endAt);
}
function __PRIVATE_queryWithAddedOrderBy(e, t) {
  const n = e.explicitOrderBy.concat([t]);
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, n, e.filters.slice(), e.limit, e.limitType, e.startAt, e.endAt);
}
function __PRIVATE_queryWithLimit(e, t, n) {
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t) {
  return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
}
function __PRIVATE_canonifyQuery(e) {
  return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
}
function __PRIVATE_stringifyQuery(e) {
  return `Query(target=${(function __PRIVATE_stringifyTarget(e2) {
    let t = e2.path.canonicalString();
    return null !== e2.collectionGroup && (t += " collectionGroup=" + e2.collectionGroup), e2.filters.length > 0 && (t += `, filters: [${e2.filters.map((e3) => __PRIVATE_stringifyFilter(e3)).join(", ")}]`), __PRIVATE_isNullOrUndefined(e2.limit) || (t += ", limit: " + e2.limit), e2.orderBy.length > 0 && (t += `, orderBy: [${e2.orderBy.map((e3) => (function __PRIVATE_stringifyOrderBy(e4) {
      return `${e4.field.canonicalString()} (${e4.dir})`;
    })(e3)).join(", ")}]`), e2.startAt && (t += ", startAt: ", t += e2.startAt.inclusive ? "b:" : "a:", t += e2.startAt.position.map((e3) => canonicalId(e3)).join(",")), e2.endAt && (t += ", endAt: ", t += e2.endAt.inclusive ? "a:" : "b:", t += e2.endAt.position.map((e3) => canonicalId(e3)).join(",")), `Target(${t})`;
  })(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
}
function __PRIVATE_queryMatches(e, t) {
  return t.isFoundDocument() && (function __PRIVATE_queryMatchesPathAndCollectionGroup(e2, t2) {
    const n = t2.key.path;
    return null !== e2.collectionGroup ? t2.key.hasCollectionId(e2.collectionGroup) && e2.path.isPrefixOf(n) : DocumentKey.isDocumentKey(e2.path) ? e2.path.isEqual(n) : e2.path.isImmediateParentOf(n);
  })(e, t) && (function __PRIVATE_queryMatchesOrderBy(e2, t2) {
    for (const n of __PRIVATE_queryNormalizedOrderBy(e2))
      if (!n.field.isKeyField() && null === t2.data.field(n.field)) return false;
    return true;
  })(e, t) && (function __PRIVATE_queryMatchesFilters(e2, t2) {
    for (const n of e2.filters) if (!n.matches(t2)) return false;
    return true;
  })(e, t) && (function __PRIVATE_queryMatchesBounds(e2, t2) {
    if (e2.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    (function __PRIVATE_boundSortsBeforeDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r <= 0 : r < 0;
    })(e2.startAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    if (e2.endAt && !(function __PRIVATE_boundSortsAfterDocument(e3, t3, n) {
      const r = __PRIVATE_boundCompareToDocument(e3, t3, n);
      return e3.inclusive ? r >= 0 : r > 0;
    })(e2.endAt, __PRIVATE_queryNormalizedOrderBy(e2), t2)) return false;
    return true;
  })(e, t);
}
function __PRIVATE_queryCollectionGroup(e) {
  return e.collectionGroup || (e.path.length % 2 == 1 ? e.path.lastSegment() : e.path.get(e.path.length - 2));
}
function __PRIVATE_newQueryComparator(e) {
  return (t, n) => {
    let r = false;
    for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
      const e2 = __PRIVATE_compareDocs(i, t, n);
      if (0 !== e2) return e2;
      r = r || i.field.isKeyField();
    }
    return 0;
  };
}
function __PRIVATE_compareDocs(e, t, n) {
  const r = e.field.isKeyField() ? DocumentKey.comparator(t.key, n.key) : (function __PRIVATE_compareDocumentsByField(e2, t2, n2) {
    const r2 = t2.data.field(e2), i = n2.data.field(e2);
    return null !== r2 && null !== i ? __PRIVATE_valueCompare(r2, i) : fail(42886);
  })(e.field, t, n);
  switch (e.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return fail(19790, {
        direction: e.dir
      });
  }
}
var ObjectMap = class {
  constructor(e, t) {
    this.mapKeyFn = e, this.equalsFn = t, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(e) {
    const t = this.mapKeyFn(e), n = this.inner[t];
    if (void 0 !== n) {
      for (const [t2, r] of n) if (this.equalsFn(t2, e)) return r;
    }
  }
  has(e) {
    return void 0 !== this.get(e);
  }
  /** Put this key and value in the map. */
  set(e, t) {
    const n = this.mapKeyFn(e), r = this.inner[n];
    if (void 0 === r) return this.inner[n] = [[e, t]], void this.innerSize++;
    for (let n2 = 0; n2 < r.length; n2++) if (this.equalsFn(r[n2][0], e))
      return void (r[n2] = [e, t]);
    r.push([e, t]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(e) {
    const t = this.mapKeyFn(e), n = this.inner[t];
    if (void 0 === n) return false;
    for (let r = 0; r < n.length; r++) if (this.equalsFn(n[r][0], e)) return 1 === n.length ? delete this.inner[t] : n.splice(r, 1), this.innerSize--, true;
    return false;
  }
  forEach(e) {
    forEach(this.inner, (t, n) => {
      for (const [t2, r] of n) e(t2, r);
    });
  }
  isEmpty() {
    return isEmpty(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var ht = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
  return ht;
}
var Pt = new SortedMap(DocumentKey.comparator);
function documentMap(...e) {
  let t = Pt;
  for (const n of e) t = t.insert(n.key, n);
  return t;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
  let t = Pt;
  return e.forEach((e2, n) => t = t.insert(e2, n.overlayedDocument)), t;
}
function __PRIVATE_newOverlayMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
  return new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t));
}
var Tt = new SortedMap(DocumentKey.comparator);
var It = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...e) {
  let t = It;
  for (const n of e) t = t.add(n);
  return t;
}
var Et = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
  return Et;
}
function __PRIVATE_toDouble(e, t) {
  if (e.useProto3Json) {
    if (isNaN(t)) return {
      doubleValue: "NaN"
    };
    if (t === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (t === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t
  };
}
function __PRIVATE_toInteger(e) {
  return {
    integerValue: "" + e
  };
}
function toNumber(e, t) {
  return isSafeInteger(t) ? __PRIVATE_toInteger(t) : __PRIVATE_toDouble(e, t);
}
var TransformOperation = class {
  constructor() {
    this._ = void 0;
  }
};
function __PRIVATE_applyTransformOperationToLocalView(e, t, n) {
  return e instanceof __PRIVATE_ServerTimestampTransform ? (function serverTimestamp$1(e2, t2) {
    const n2 = {
      fields: {
        [tt]: {
          stringValue: et
        },
        [rt]: {
          timestampValue: {
            seconds: e2.seconds,
            nanos: e2.nanoseconds
          }
        }
      }
    };
    return t2 && __PRIVATE_isServerTimestamp(t2) && (t2 = __PRIVATE_getPreviousValue(t2)), t2 && (n2.fields[nt] = t2), {
      mapValue: n2
    };
  })(n, t) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : (function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e2, t2) {
    const n2 = __PRIVATE_computeTransformOperationBaseValue(e2, t2), r = asNumber(n2) + asNumber(e2.Ae);
    return isInteger(n2) && isInteger(e2.Ae) ? __PRIVATE_toInteger(r) : __PRIVATE_toDouble(e2.serializer, r);
  })(e, t);
}
function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, n) {
  return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : n;
}
function __PRIVATE_computeTransformOperationBaseValue(e, t) {
  return e instanceof __PRIVATE_NumericIncrementTransformOperation ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    (function __PRIVATE_isNumber(e2) {
      return isInteger(e2) || (function __PRIVATE_isDouble(e3) {
        return !!e3 && "doubleValue" in e3;
      })(e2);
    })(t) ? t : {
      integerValue: 0
    }
  ) : null;
}
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
};
var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
  const n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n.some((e2) => __PRIVATE_valueEquals(e2, t2)) || n.push(t2);
  return {
    arrayValue: {
      values: n
    }
  };
}
var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
  let n = __PRIVATE_coercedFieldValuesArray(t);
  for (const t2 of e.elements) n = n.filter((e2) => !__PRIVATE_valueEquals(e2, t2));
  return {
    arrayValue: {
      values: n
    }
  };
}
var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
  constructor(e, t) {
    super(), this.serializer = e, this.Ae = t;
  }
};
function asNumber(e) {
  return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e) {
  return isArray(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function __PRIVATE_fieldTransformEquals(e, t) {
  return e.field.isEqual(t.field) && (function __PRIVATE_transformOperationEquals(e2, t2) {
    return e2 instanceof __PRIVATE_ArrayUnionTransformOperation && t2 instanceof __PRIVATE_ArrayUnionTransformOperation || e2 instanceof __PRIVATE_ArrayRemoveTransformOperation && t2 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e2.elements, t2.elements, __PRIVATE_valueEquals) : e2 instanceof __PRIVATE_NumericIncrementTransformOperation && t2 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e2.Ae, t2.Ae) : e2 instanceof __PRIVATE_ServerTimestampTransform && t2 instanceof __PRIVATE_ServerTimestampTransform;
  })(e.transform, t.transform);
}
var MutationResult = class {
  constructor(e, t) {
    this.version = e, this.transformResults = t;
  }
};
var Precondition = class _Precondition {
  constructor(e, t) {
    this.updateTime = e, this.exists = t;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new _Precondition();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new _Precondition(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new _Precondition(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
};
function __PRIVATE_preconditionIsValidForDocument(e, t) {
  return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument();
}
var Mutation = class {
};
function __PRIVATE_calculateOverlayMutation(e, t) {
  if (!e.hasLocalMutations || t && 0 === t.fields.length) return null;
  if (null === t) return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
  {
    const n = e.data, r = ObjectValue.empty();
    let i = new SortedSet(FieldPath$1.comparator);
    for (let e2 of t.fields) if (!i.has(e2)) {
      let t2 = n.field(e2);
      null === t2 && e2.length > 1 && (e2 = e2.popLast(), t2 = n.field(e2)), null === t2 ? r.delete(e2) : r.set(e2, t2), i = i.add(e2);
    }
    return new __PRIVATE_PatchMutation(e.key, r, new FieldMask(i.toArray()), Precondition.none());
  }
}
function __PRIVATE_mutationApplyToRemoteDocument(e, t, n) {
  e instanceof __PRIVATE_SetMutation ? (function __PRIVATE_setMutationApplyToRemoteDocument(e2, t2, n2) {
    const r = e2.value.clone(), i = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults);
    r.setAll(i), t2.convertToFoundDocument(n2.version, r).setHasCommittedMutations();
  })(e, t, n) : e instanceof __PRIVATE_PatchMutation ? (function __PRIVATE_patchMutationApplyToRemoteDocument(e2, t2, n2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return void t2.convertToUnknownDocument(n2.version);
    const r = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults), i = t2.data;
    i.setAll(__PRIVATE_getPatch(e2)), i.setAll(r), t2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
  })(e, t, n) : (function __PRIVATE_deleteMutationApplyToRemoteDocument(e2, t2, n2) {
    t2.convertToNoDocument(n2.version).setHasCommittedMutations();
  })(0, t, n);
}
function __PRIVATE_mutationApplyToLocalView(e, t, n, r) {
  return e instanceof __PRIVATE_SetMutation ? (function __PRIVATE_setMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
      return n2;
    const i = e2.value.clone(), s = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2);
    return i.setAll(s), t2.convertToFoundDocument(t2.version, i).setHasLocalMutations(), null;
  })(e, t, n, r) : e instanceof __PRIVATE_PatchMutation ? (function __PRIVATE_patchMutationApplyToLocalView(e2, t2, n2, r2) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return n2;
    const i = __PRIVATE_localTransformResults(e2.fieldTransforms, r2, t2), s = t2.data;
    if (s.setAll(__PRIVATE_getPatch(e2)), s.setAll(i), t2.convertToFoundDocument(t2.version, s).setHasLocalMutations(), null === n2) return null;
    return n2.unionWith(e2.fieldMask.fields).unionWith(e2.fieldTransforms.map((e3) => e3.field));
  })(e, t, n, r) : (function __PRIVATE_deleteMutationApplyToLocalView(e2, t2, n2) {
    if (__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2)) return t2.convertToNoDocument(t2.version).setHasLocalMutations(), null;
    return n2;
  })(e, t, n);
}
function __PRIVATE_mutationExtractBaseValue(e, t) {
  let n = null;
  for (const r of e.fieldTransforms) {
    const e2 = t.data.field(r.field), i = __PRIVATE_computeTransformOperationBaseValue(r.transform, e2 || null);
    null != i && (null === n && (n = ObjectValue.empty()), n.set(r.field, i));
  }
  return n || null;
}
function __PRIVATE_mutationEquals(e, t) {
  return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!(function __PRIVATE_fieldTransformsAreEqual(e2, t2) {
    return void 0 === e2 && void 0 === t2 || !(!e2 || !t2) && __PRIVATE_arrayEquals(e2, t2, (e3, t3) => __PRIVATE_fieldTransformEquals(e3, t3));
  })(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask));
}
var __PRIVATE_SetMutation = class extends Mutation {
  constructor(e, t, n, r = []) {
    super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_PatchMutation = class extends Mutation {
  constructor(e, t, n, r, i = []) {
    super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function __PRIVATE_getPatch(e) {
  const t = /* @__PURE__ */ new Map();
  return e.fieldMask.fields.forEach((n) => {
    if (!n.isEmpty()) {
      const r = e.data.field(n);
      t.set(n, r);
    }
  }), t;
}
function __PRIVATE_serverTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  __PRIVATE_hardAssert(e.length === n.length, 32656, {
    Ve: n.length,
    de: e.length
  });
  for (let i = 0; i < n.length; i++) {
    const s = e[i], o = s.transform, _ = t.data.field(s.field);
    r.set(s.field, __PRIVATE_applyTransformOperationToRemoteDocument(o, _, n[i]));
  }
  return r;
}
function __PRIVATE_localTransformResults(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of e) {
    const e2 = i.transform, s = n.data.field(i.field);
    r.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e2, s, t));
  }
  return r;
}
var __PRIVATE_DeleteMutation = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_VerifyMutation = class extends Mutation {
  constructor(e, t) {
    super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var MutationBatch = class {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(e, t, n, r) {
    this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(e, t) {
    const n = t.mutationResults;
    for (let t2 = 0; t2 < this.mutations.length; t2++) {
      const r = this.mutations[t2];
      if (r.key.isEqual(e.key)) {
        __PRIVATE_mutationApplyToRemoteDocument(r, e, n[t2]);
      }
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(e, t) {
    for (const n of this.baseMutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
    for (const n of this.mutations) n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
    return t;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(e, t) {
    const n = __PRIVATE_newMutationMap();
    return this.mutations.forEach((r) => {
      const i = e.get(r.key), s = i.overlayedDocument;
      let o = this.applyToLocalView(s, i.mutatedFields);
      o = t.has(r.key) ? null : o;
      const _ = __PRIVATE_calculateOverlayMutation(s, o);
      null !== _ && n.set(r.key, _), s.isValidDocument() || s.convertToNoDocument(SnapshotVersion.min());
    }), n;
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), __PRIVATE_documentKeySet());
  }
  isEqual(e) {
    return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, (e2, t) => __PRIVATE_mutationEquals(e2, t)) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e2, t) => __PRIVATE_mutationEquals(e2, t));
  }
};
var MutationBatchResult = class _MutationBatchResult {
  constructor(e, t, n, r) {
    this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r;
  }
  /**
   * Creates a new MutationBatchResult for the given batch and results. There
   * must be one result for each mutation in the batch. This static factory
   * caches a document=&gt;version mapping (docVersions).
   */
  static from(e, t, n) {
    __PRIVATE_hardAssert(e.mutations.length === n.length, 58842, {
      me: e.mutations.length,
      fe: n.length
    });
    let r = /* @__PURE__ */ (function __PRIVATE_documentVersionMap() {
      return Tt;
    })();
    const i = e.mutations;
    for (let e2 = 0; e2 < i.length; e2++) r = r.insert(i[e2].key, n[e2].version);
    return new _MutationBatchResult(e, t, n, r);
  }
};
var Overlay = class {
  constructor(e, t) {
    this.largestBatchId = e, this.mutation = t;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return null !== e && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var ExistenceFilter = class {
  constructor(e, t) {
    this.count = e, this.unchangedNames = t;
  }
};
var Rt;
var At;
function __PRIVATE_isPermanentError(e) {
  switch (e) {
    case D.OK:
      return fail(64938);
    case D.CANCELLED:
    case D.UNKNOWN:
    case D.DEADLINE_EXCEEDED:
    case D.RESOURCE_EXHAUSTED:
    case D.INTERNAL:
    case D.UNAVAILABLE:
    // Unauthenticated means something went wrong with our token and we need
    // to retry with new credentials which will happen automatically.
    case D.UNAUTHENTICATED:
      return false;
    case D.INVALID_ARGUMENT:
    case D.NOT_FOUND:
    case D.ALREADY_EXISTS:
    case D.PERMISSION_DENIED:
    case D.FAILED_PRECONDITION:
    // Aborted might be retried in some scenarios, but that is dependent on
    // the context and should handled individually by the calling code.
    // See https://cloud.google.com/apis/design/errors.
    case D.ABORTED:
    case D.OUT_OF_RANGE:
    case D.UNIMPLEMENTED:
    case D.DATA_LOSS:
      return true;
    default:
      return fail(15467, {
        code: e
      });
  }
}
function __PRIVATE_mapCodeFromRpcCode(e) {
  if (void 0 === e)
    return __PRIVATE_logError("GRPC error has no .code"), D.UNKNOWN;
  switch (e) {
    case Rt.OK:
      return D.OK;
    case Rt.CANCELLED:
      return D.CANCELLED;
    case Rt.UNKNOWN:
      return D.UNKNOWN;
    case Rt.DEADLINE_EXCEEDED:
      return D.DEADLINE_EXCEEDED;
    case Rt.RESOURCE_EXHAUSTED:
      return D.RESOURCE_EXHAUSTED;
    case Rt.INTERNAL:
      return D.INTERNAL;
    case Rt.UNAVAILABLE:
      return D.UNAVAILABLE;
    case Rt.UNAUTHENTICATED:
      return D.UNAUTHENTICATED;
    case Rt.INVALID_ARGUMENT:
      return D.INVALID_ARGUMENT;
    case Rt.NOT_FOUND:
      return D.NOT_FOUND;
    case Rt.ALREADY_EXISTS:
      return D.ALREADY_EXISTS;
    case Rt.PERMISSION_DENIED:
      return D.PERMISSION_DENIED;
    case Rt.FAILED_PRECONDITION:
      return D.FAILED_PRECONDITION;
    case Rt.ABORTED:
      return D.ABORTED;
    case Rt.OUT_OF_RANGE:
      return D.OUT_OF_RANGE;
    case Rt.UNIMPLEMENTED:
      return D.UNIMPLEMENTED;
    case Rt.DATA_LOSS:
      return D.DATA_LOSS;
    default:
      return fail(39323, {
        code: e
      });
  }
}
(At = Rt || (Rt = {}))[At.OK = 0] = "OK", At[At.CANCELLED = 1] = "CANCELLED", At[At.UNKNOWN = 2] = "UNKNOWN", At[At.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", At[At.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", At[At.NOT_FOUND = 5] = "NOT_FOUND", At[At.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", At[At.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", At[At.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", At[At.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", At[At.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", At[At.ABORTED = 10] = "ABORTED", At[At.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", At[At.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", At[At.INTERNAL = 13] = "INTERNAL", At[At.UNAVAILABLE = 14] = "UNAVAILABLE", At[At.DATA_LOSS = 15] = "DATA_LOSS";
var Vt = null;
function __PRIVATE_newTextEncoder() {
  return new TextEncoder();
}
var dt = new Integer([4294967295, 4294967295], 0);
function __PRIVATE_getMd5HashValue(e) {
  const t = __PRIVATE_newTextEncoder().encode(e), n = new Md5();
  return n.update(t), new Uint8Array(n.digest());
}
function __PRIVATE_get64BitUints(e) {
  const t = new DataView(e.buffer), n = t.getUint32(
    0,
    /* littleEndian= */
    true
  ), r = t.getUint32(
    4,
    /* littleEndian= */
    true
  ), i = t.getUint32(
    8,
    /* littleEndian= */
    true
  ), s = t.getUint32(
    12,
    /* littleEndian= */
    true
  );
  return [new Integer([n, r], 0), new Integer([i, s], 0)];
}
var BloomFilter = class _BloomFilter {
  constructor(e, t, n) {
    if (this.bitmap = e, this.padding = t, this.hashCount = n, t < 0 || t >= 8) throw new __PRIVATE_BloomFilterError(`Invalid padding: ${t}`);
    if (n < 0) throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
    if (e.length > 0 && 0 === this.hashCount)
      throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${n}`);
    if (0 === e.length && 0 !== t)
      throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${t}`);
    this.ge = 8 * e.length - t, // Set the bit count in Integer to avoid repetition in mightContain().
    this.pe = Integer.fromNumber(this.ge);
  }
  // Calculate the ith hash value based on the hashed 64bit integers,
  // and calculate its corresponding bit index in the bitmap to be checked.
  ye(e, t, n) {
    let r = e.add(t.multiply(Integer.fromNumber(n)));
    return 1 === r.compare(dt) && (r = new Integer([r.getBits(0), r.getBits(1)], 0)), r.modulo(this.pe).toNumber();
  }
  // Return whether the bit on the given index in the bitmap is set to 1.
  we(e) {
    return !!(this.bitmap[Math.floor(e / 8)] & 1 << e % 8);
  }
  mightContain(e) {
    if (0 === this.ge) return false;
    const t = __PRIVATE_getMd5HashValue(e), [n, r] = __PRIVATE_get64BitUints(t);
    for (let e2 = 0; e2 < this.hashCount; e2++) {
      const t2 = this.ye(n, r, e2);
      if (!this.we(t2)) return false;
    }
    return true;
  }
  /** Create bloom filter for testing purposes only. */
  static create(e, t, n) {
    const r = e % 8 == 0 ? 0 : 8 - e % 8, i = new Uint8Array(Math.ceil(e / 8)), s = new _BloomFilter(i, r, t);
    return n.forEach((e2) => s.insert(e2)), s;
  }
  insert(e) {
    if (0 === this.ge) return;
    const t = __PRIVATE_getMd5HashValue(e), [n, r] = __PRIVATE_get64BitUints(t);
    for (let e2 = 0; e2 < this.hashCount; e2++) {
      const t2 = this.ye(n, r, e2);
      this.Se(t2);
    }
  }
  Se(e) {
    const t = Math.floor(e / 8), n = e % 8;
    this.bitmap[t] |= 1 << n;
  }
};
var __PRIVATE_BloomFilterError = class extends Error {
  constructor() {
    super(...arguments), this.name = "BloomFilterError";
  }
};
var RemoteEvent = class _RemoteEvent {
  constructor(e, t, n, r, i) {
    this.snapshotVersion = e, this.targetChanges = t, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only
  static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
    const r = /* @__PURE__ */ new Map();
    return r.set(e, TargetChange.createSynthesizedTargetChangeForCurrentChange(e, t, n)), new _RemoteEvent(SnapshotVersion.min(), r, new SortedMap(__PRIVATE_primitiveComparator), __PRIVATE_mutableDocumentMap(), __PRIVATE_documentKeySet());
  }
};
var TargetChange = class _TargetChange {
  constructor(e, t, n, r, i) {
    this.resumeToken = e, this.current = t, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i;
  }
  /**
   * This method is used to create a synthesized TargetChanges that can be used to
   * apply a CURRENT status change to a View (for queries executed in a different
   * tab) or for new queries (to raise snapshots with correct CURRENT status).
   */
  static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
    return new _TargetChange(n, t, __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet(), __PRIVATE_documentKeySet());
  }
};
var __PRIVATE_DocumentWatchChange = class {
  constructor(e, t, n, r) {
    this.be = e, this.removedTargetIds = t, this.key = n, this.De = r;
  }
};
var __PRIVATE_ExistenceFilterChange = class {
  constructor(e, t) {
    this.targetId = e, this.Ce = t;
  }
};
var __PRIVATE_WatchTargetChange = class {
  constructor(e, t, n = ByteString.EMPTY_BYTE_STRING, r = null) {
    this.state = e, this.targetIds = t, this.resumeToken = n, this.cause = r;
  }
};
var __PRIVATE_TargetState = class {
  constructor() {
    this.ve = 0, /**
     * Keeps track of the document changes since the last raised snapshot.
     *
     * These changes are continuously updated as we receive document updates and
     * always reflect the current set of changes against the last issued snapshot.
     */
    this.Fe = __PRIVATE_snapshotChangesMap(), /** See public getters for explanations of these fields. */
    this.Me = ByteString.EMPTY_BYTE_STRING, this.xe = false, /**
     * Whether this target state should be included in the next snapshot. We
     * initialize to true so that newly-added targets are included in the next
     * RemoteEvent.
     */
    this.Oe = true;
  }
  /**
   * Whether this target has been marked 'current'.
   *
   * 'Current' has special meaning in the RPC protocol: It implies that the
   * Watch backend has sent us all changes up to the point at which the target
   * was added and that the target is consistent with the rest of the watch
   * stream.
   */
  get current() {
    return this.xe;
  }
  /** The last resume token sent to us for this target. */
  get resumeToken() {
    return this.Me;
  }
  /** Whether this target has pending target adds or target removes. */
  get Ne() {
    return 0 !== this.ve;
  }
  /** Whether we have modified any state that should trigger a snapshot. */
  get Be() {
    return this.Oe;
  }
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  Le(e) {
    e.approximateByteSize() > 0 && (this.Oe = true, this.Me = e);
  }
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  ke() {
    let e = __PRIVATE_documentKeySet(), t = __PRIVATE_documentKeySet(), n = __PRIVATE_documentKeySet();
    return this.Fe.forEach((r, i) => {
      switch (i) {
        case 0:
          e = e.add(r);
          break;
        case 2:
          t = t.add(r);
          break;
        case 1:
          n = n.add(r);
          break;
        default:
          fail(38017, {
            changeType: i
          });
      }
    }), new TargetChange(this.Me, this.xe, e, t, n);
  }
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  Ke() {
    this.Oe = false, this.Fe = __PRIVATE_snapshotChangesMap();
  }
  qe(e, t) {
    this.Oe = true, this.Fe = this.Fe.insert(e, t);
  }
  Ue(e) {
    this.Oe = true, this.Fe = this.Fe.remove(e);
  }
  $e() {
    this.ve += 1;
  }
  We() {
    this.ve -= 1, __PRIVATE_hardAssert(this.ve >= 0, 3241, {
      ve: this.ve
    });
  }
  Qe() {
    this.Oe = true, this.xe = true;
  }
};
var __PRIVATE_WatchChangeAggregator = class {
  constructor(e) {
    this.Ge = e, /** The internal state of all tracked targets. */
    this.ze = /* @__PURE__ */ new Map(), /** Keeps track of the documents to update since the last raised snapshot. */
    this.je = __PRIVATE_mutableDocumentMap(), this.Je = __PRIVATE_documentTargetMap(), /** A mapping of document keys to their set of target IDs. */
    this.He = __PRIVATE_documentTargetMap(), /**
     * A map of targets with existence filter mismatches. These targets are
     * known to be inconsistent and their listens needs to be re-established by
     * RemoteStore.
     */
    this.Ze = new SortedMap(__PRIVATE_primitiveComparator);
  }
  /**
   * Processes and adds the DocumentWatchChange to the current set of changes.
   */
  Xe(e) {
    for (const t of e.be) e.De && e.De.isFoundDocument() ? this.Ye(t, e.De) : this.et(t, e.key, e.De);
    for (const t of e.removedTargetIds) this.et(t, e.key, e.De);
  }
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  tt(e) {
    this.forEachTarget(e, (t) => {
      const n = this.nt(t);
      switch (e.state) {
        case 0:
          this.rt(t) && n.Le(e.resumeToken);
          break;
        case 1:
          n.We(), n.Ne || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          n.Ke(), n.Le(e.resumeToken);
          break;
        case 2:
          n.We(), n.Ne || this.removeTarget(t);
          break;
        case 3:
          this.rt(t) && (n.Qe(), n.Le(e.resumeToken));
          break;
        case 4:
          this.rt(t) && // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          (this.it(t), n.Le(e.resumeToken));
          break;
        default:
          fail(56790, {
            state: e.state
          });
      }
    });
  }
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  forEachTarget(e, t) {
    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.ze.forEach((e2, n) => {
      this.rt(n) && t(n);
    });
  }
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  st(e) {
    const t = e.targetId, n = e.Ce.count, r = this.ot(t);
    if (r) {
      const i = r.target;
      if (__PRIVATE_targetIsDocumentTarget(i)) {
        if (0 === n) {
          const e2 = new DocumentKey(i.path);
          this.et(t, e2, MutableDocument.newNoDocument(e2, SnapshotVersion.min()));
        } else __PRIVATE_hardAssert(1 === n, 20013, {
          expectedCount: n
        });
      } else {
        const r2 = this._t(t);
        if (r2 !== n) {
          const n2 = this.ut(e), i2 = n2 ? this.ct(n2, e, r2) : 1;
          if (0 !== i2) {
            this.it(t);
            const e2 = 2 === i2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
            this.Ze = this.Ze.insert(t, e2);
          }
          Vt?.o((function __PRIVATE_createExistenceFilterMismatchInfoForTestingHooks(e2, t2, n3, r3, i3) {
            const s = {
              localCacheCount: e2,
              existenceFilterCount: t2.count,
              databaseId: n3.database,
              projectId: n3.projectId
            }, o = t2.unchangedNames;
            o && (s.bloomFilter = {
              applied: 0 === i3,
              hashCount: o?.hashCount ?? 0,
              bitmapLength: o?.bits?.bitmap?.length ?? 0,
              padding: o?.bits?.padding ?? 0,
              mightContain: (e3) => r3?.mightContain(e3) ?? false
            });
            return s;
          })(r2, e.Ce, this.Ge.ht(), n2, i2));
        }
      }
    }
  }
  /**
   * Parse the bloom filter from the "unchanged_names" field of an existence
   * filter.
   */
  ut(e) {
    const t = e.Ce.unchangedNames;
    if (!t || !t.bits) return null;
    const {
      bits: {
        bitmap: n = "",
        padding: r = 0
      },
      hashCount: i = 0
    } = t;
    let s, o;
    try {
      s = __PRIVATE_normalizeByteString(n).toUint8Array();
    } catch (e2) {
      if (e2 instanceof __PRIVATE_Base64DecodeError) return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed (" + e2.message + "); ignoring the bloom filter and falling back to full re-query."), null;
      throw e2;
    }
    try {
      o = new BloomFilter(s, r, i);
    } catch (e2) {
      return __PRIVATE_logWarn(e2 instanceof __PRIVATE_BloomFilterError ? "BloomFilter error: " : "Applying bloom filter failed: ", e2), null;
    }
    return 0 === o.ge ? null : o;
  }
  /**
   * Apply bloom filter to remove the deleted documents, and return the
   * application status.
   */
  ct(e, t, n) {
    return t.Ce.count === n - this.Pt(e, t.targetId) ? 0 : 2;
  }
  /**
   * Filter out removed documents based on bloom filter membership result and
   * return number of documents removed.
   */
  Pt(e, t) {
    const n = this.Ge.getRemoteKeysForTarget(t);
    let r = 0;
    return n.forEach((n2) => {
      const i = this.Ge.ht(), s = `projects/${i.projectId}/databases/${i.database}/documents/${n2.path.canonicalString()}`;
      e.mightContain(s) || (this.et(
        t,
        n2,
        /*updatedDocument=*/
        null
      ), r++);
    }), r;
  }
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  Tt(e) {
    const t = /* @__PURE__ */ new Map();
    this.ze.forEach((n2, r2) => {
      const i = this.ot(r2);
      if (i) {
        if (n2.current && __PRIVATE_targetIsDocumentTarget(i.target)) {
          const t2 = new DocumentKey(i.target.path);
          this.It(t2).has(r2) || this.Et(r2, t2) || this.et(r2, t2, MutableDocument.newNoDocument(t2, e));
        }
        n2.Be && (t.set(r2, n2.ke()), n2.Ke());
      }
    });
    let n = __PRIVATE_documentKeySet();
    this.He.forEach((e2, t2) => {
      let r2 = true;
      t2.forEachWhile((e3) => {
        const t3 = this.ot(e3);
        return !t3 || "TargetPurposeLimboResolution" === t3.purpose || (r2 = false, false);
      }), r2 && (n = n.add(e2));
    }), this.je.forEach((t2, n2) => n2.setReadTime(e));
    const r = new RemoteEvent(e, t, this.Ze, this.je, n);
    return this.je = __PRIVATE_mutableDocumentMap(), this.Je = __PRIVATE_documentTargetMap(), this.He = __PRIVATE_documentTargetMap(), this.Ze = new SortedMap(__PRIVATE_primitiveComparator), r;
  }
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  Ye(e, t) {
    if (!this.rt(e)) return;
    const n = this.Et(e, t.key) ? 2 : 0;
    this.nt(e).qe(t.key, n), this.je = this.je.insert(t.key, t), this.Je = this.Je.insert(t.key, this.It(t.key).add(e)), this.He = this.He.insert(t.key, this.Rt(t.key).add(e));
  }
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  et(e, t, n) {
    if (!this.rt(e)) return;
    const r = this.nt(e);
    this.Et(e, t) ? r.qe(
      t,
      1
      /* ChangeType.Removed */
    ) : (
      // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      r.Ue(t)
    ), this.He = this.He.insert(t, this.Rt(t).delete(e)), this.He = this.He.insert(t, this.Rt(t).add(e)), n && (this.je = this.je.insert(t, n));
  }
  removeTarget(e) {
    this.ze.delete(e);
  }
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  _t(e) {
    const t = this.nt(e).ke();
    return this.Ge.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
  }
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  $e(e) {
    this.nt(e).$e();
  }
  nt(e) {
    let t = this.ze.get(e);
    return t || (t = new __PRIVATE_TargetState(), this.ze.set(e, t)), t;
  }
  Rt(e) {
    let t = this.He.get(e);
    return t || (t = new SortedSet(__PRIVATE_primitiveComparator), this.He = this.He.insert(e, t)), t;
  }
  It(e) {
    let t = this.Je.get(e);
    return t || (t = new SortedSet(__PRIVATE_primitiveComparator), this.Je = this.Je.insert(e, t)), t;
  }
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  rt(e) {
    const t = null !== this.ot(e);
    return t || __PRIVATE_logDebug("WatchChangeAggregator", "Detected inactive target", e), t;
  }
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  ot(e) {
    const t = this.ze.get(e);
    return t && t.Ne ? null : this.Ge.At(e);
  }
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  it(e) {
    this.ze.set(e, new __PRIVATE_TargetState());
    this.Ge.getRemoteKeysForTarget(e).forEach((t) => {
      this.et(
        e,
        t,
        /*updatedDocument=*/
        null
      );
    });
  }
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  Et(e, t) {
    return this.Ge.getRemoteKeysForTarget(e).has(t);
  }
};
function __PRIVATE_documentTargetMap() {
  return new SortedMap(DocumentKey.comparator);
}
function __PRIVATE_snapshotChangesMap() {
  return new SortedMap(DocumentKey.comparator);
}
var mt = /* @__PURE__ */ (() => {
  const e = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return e;
})();
var ft = /* @__PURE__ */ (() => {
  const e = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return e;
})();
var gt = /* @__PURE__ */ (() => {
  const e = {
    and: "AND",
    or: "OR"
  };
  return e;
})();
var JsonProtoSerializer = class {
  constructor(e, t) {
    this.databaseId = e, this.useProto3Json = t;
  }
};
function __PRIVATE_toInt32Proto(e, t) {
  return e.useProto3Json || __PRIVATE_isNullOrUndefined(t) ? t : {
    value: t
  };
}
function toTimestamp(e, t) {
  if (e.useProto3Json) {
    return `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
  }
  return {
    seconds: "" + t.seconds,
    nanos: t.nanoseconds
  };
}
function __PRIVATE_toBytes(e, t) {
  return e.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function __PRIVATE_toVersion(e, t) {
  return toTimestamp(e, t.toTimestamp());
}
function __PRIVATE_fromVersion(e) {
  return __PRIVATE_hardAssert(!!e, 49232), SnapshotVersion.fromTimestamp((function fromTimestamp(e2) {
    const t = __PRIVATE_normalizeTimestamp(e2);
    return new Timestamp(t.seconds, t.nanos);
  })(e));
}
function __PRIVATE_toResourceName(e, t) {
  return __PRIVATE_toResourcePath(e, t).canonicalString();
}
function __PRIVATE_toResourcePath(e, t) {
  const n = (function __PRIVATE_fullyQualifiedPrefixPath(e2) {
    return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
  })(e).child("documents");
  return void 0 === t ? n : n.child(t);
}
function __PRIVATE_fromResourceName(e) {
  const t = ResourcePath.fromString(e);
  return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t), 10190, {
    key: t.toString()
  }), t;
}
function __PRIVATE_toName(e, t) {
  return __PRIVATE_toResourceName(e.databaseId, t.path);
}
function fromName(e, t) {
  const n = __PRIVATE_fromResourceName(t);
  if (n.get(1) !== e.databaseId.projectId) throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
  if (n.get(3) !== e.databaseId.database) throw new FirestoreError(D.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
  return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(n));
}
function __PRIVATE_toQueryPath(e, t) {
  return __PRIVATE_toResourceName(e.databaseId, t);
}
function __PRIVATE_fromQueryPath(e) {
  const t = __PRIVATE_fromResourceName(e);
  return 4 === t.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t);
}
function __PRIVATE_getEncodedDatabaseId(e) {
  return new ResourcePath(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString();
}
function __PRIVATE_extractLocalPathFromResourceName(e) {
  return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4), 29091, {
    key: e.toString()
  }), e.popFirst(5);
}
function __PRIVATE_toMutationDocument(e, t, n) {
  return {
    name: __PRIVATE_toName(e, t),
    fields: n.value.mapValue.fields
  };
}
function __PRIVATE_fromWatchChange(e, t) {
  let n;
  if ("targetChange" in t) {
    t.targetChange;
    const r = (function __PRIVATE_fromWatchTargetChangeState(e2) {
      return "NO_CHANGE" === e2 ? 0 : "ADD" === e2 ? 1 : "REMOVE" === e2 ? 2 : "CURRENT" === e2 ? 3 : "RESET" === e2 ? 4 : fail(39313, {
        state: e2
      });
    })(t.targetChange.targetChangeType || "NO_CHANGE"), i = t.targetChange.targetIds || [], s = (function __PRIVATE_fromBytes(e2, t2) {
      return e2.useProto3Json ? (__PRIVATE_hardAssert(void 0 === t2 || "string" == typeof t2, 58123), ByteString.fromBase64String(t2 || "")) : (__PRIVATE_hardAssert(void 0 === t2 || // Check if the value is an instance of both Buffer and Uint8Array,
      // despite the fact that Buffer extends Uint8Array. In some
      // environments, such as jsdom, the prototype chain of Buffer
      // does not indicate that it extends Uint8Array.
      t2 instanceof Buffer || t2 instanceof Uint8Array, 16193), ByteString.fromUint8Array(t2 || new Uint8Array()));
    })(e, t.targetChange.resumeToken), o = t.targetChange.cause, _ = o && (function __PRIVATE_fromRpcStatus(e2) {
      const t2 = void 0 === e2.code ? D.UNKNOWN : __PRIVATE_mapCodeFromRpcCode(e2.code);
      return new FirestoreError(t2, e2.message || "");
    })(o);
    n = new __PRIVATE_WatchTargetChange(r, i, s, _ || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const i = fromName(e, r.document.name), s = __PRIVATE_fromVersion(r.document.updateTime), o = r.document.createTime ? __PRIVATE_fromVersion(r.document.createTime) : SnapshotVersion.min(), _ = new ObjectValue({
      mapValue: {
        fields: r.document.fields
      }
    }), a = MutableDocument.newFoundDocument(i, s, o, _), u = r.targetIds || [], c = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange(u, c, a.key, a);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const i = fromName(e, r.document), s = r.readTime ? __PRIVATE_fromVersion(r.readTime) : SnapshotVersion.min(), o = MutableDocument.newNoDocument(i, s), _ = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange([], _, o.key, o);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const i = fromName(e, r.document), s = r.removedTargetIds || [];
    n = new __PRIVATE_DocumentWatchChange([], s, i, null);
  } else {
    if (!("filter" in t)) return fail(11601, {
      Vt: t
    });
    {
      t.filter;
      const e2 = t.filter;
      e2.targetId;
      const {
        count: r = 0,
        unchangedNames: i
      } = e2, s = new ExistenceFilter(r, i), o = e2.targetId;
      n = new __PRIVATE_ExistenceFilterChange(o, s);
    }
  }
  return n;
}
function toMutation(e, t) {
  let n;
  if (t instanceof __PRIVATE_SetMutation) n = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.value)
  };
  else if (t instanceof __PRIVATE_DeleteMutation) n = {
    delete: __PRIVATE_toName(e, t.key)
  };
  else if (t instanceof __PRIVATE_PatchMutation) n = {
    update: __PRIVATE_toMutationDocument(e, t.key, t.data),
    updateMask: __PRIVATE_toDocumentMask(t.fieldMask)
  };
  else {
    if (!(t instanceof __PRIVATE_VerifyMutation)) return fail(16599, {
      dt: t.type
    });
    n = {
      verify: __PRIVATE_toName(e, t.key)
    };
  }
  return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e2) => (function __PRIVATE_toFieldTransform(e3, t2) {
    const n2 = t2.transform;
    if (n2 instanceof __PRIVATE_ServerTimestampTransform) return {
      fieldPath: t2.field.canonicalString(),
      setToServerValue: "REQUEST_TIME"
    };
    if (n2 instanceof __PRIVATE_ArrayUnionTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      appendMissingElements: {
        values: n2.elements
      }
    };
    if (n2 instanceof __PRIVATE_ArrayRemoveTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      removeAllFromArray: {
        values: n2.elements
      }
    };
    if (n2 instanceof __PRIVATE_NumericIncrementTransformOperation) return {
      fieldPath: t2.field.canonicalString(),
      increment: n2.Ae
    };
    throw fail(20930, {
      transform: t2.transform
    });
  })(0, e2))), t.precondition.isNone || (n.currentDocument = (function __PRIVATE_toPrecondition(e2, t2) {
    return void 0 !== t2.updateTime ? {
      updateTime: __PRIVATE_toVersion(e2, t2.updateTime)
    } : void 0 !== t2.exists ? {
      exists: t2.exists
    } : fail(27497);
  })(e, t.precondition)), n;
}
function __PRIVATE_fromWriteResults(e, t) {
  return e && e.length > 0 ? (__PRIVATE_hardAssert(void 0 !== t, 14353), e.map((e2) => (function __PRIVATE_fromWriteResult(e3, t2) {
    let n = e3.updateTime ? __PRIVATE_fromVersion(e3.updateTime) : __PRIVATE_fromVersion(t2);
    return n.isEqual(SnapshotVersion.min()) && // The Firestore Emulator currently returns an update time of 0 for
    // deletes of non-existing documents (rather than null). This breaks the
    // test "get deleted doc while offline with source=cache" as NoDocuments
    // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
    // TODO(#2149): Remove this when Emulator is fixed
    (n = __PRIVATE_fromVersion(t2)), new MutationResult(n, e3.transformResults || []);
  })(e2, t))) : [];
}
function __PRIVATE_toDocumentsTarget(e, t) {
  return {
    documents: [__PRIVATE_toQueryPath(e, t.path)]
  };
}
function __PRIVATE_toQueryTarget(e, t) {
  const n = {
    structuredQuery: {}
  }, r = t.path;
  let i;
  null !== t.collectionGroup ? (i = r, n.structuredQuery.from = [{
    collectionId: t.collectionGroup,
    allDescendants: true
  }]) : (i = r.popLast(), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]), n.parent = __PRIVATE_toQueryPath(e, i);
  const s = (function __PRIVATE_toFilters(e2) {
    if (0 === e2.length) return;
    return __PRIVATE_toFilter(CompositeFilter.create(
      e2,
      "and"
      /* CompositeOperator.AND */
    ));
  })(t.filters);
  s && (n.structuredQuery.where = s);
  const o = (function __PRIVATE_toOrder(e2) {
    if (0 === e2.length) return;
    return e2.map((e3) => (
      // visible for testing
      (function __PRIVATE_toPropertyOrder(e4) {
        return {
          field: __PRIVATE_toFieldPathReference(e4.field),
          direction: __PRIVATE_toDirection(e4.dir)
        };
      })(e3)
    ));
  })(t.orderBy);
  o && (n.structuredQuery.orderBy = o);
  const _ = __PRIVATE_toInt32Proto(e, t.limit);
  return null !== _ && (n.structuredQuery.limit = _), t.startAt && (n.structuredQuery.startAt = (function __PRIVATE_toStartAtCursor(e2) {
    return {
      before: e2.inclusive,
      values: e2.position
    };
  })(t.startAt)), t.endAt && (n.structuredQuery.endAt = (function __PRIVATE_toEndAtCursor(e2) {
    return {
      before: !e2.inclusive,
      values: e2.position
    };
  })(t.endAt)), {
    ft: n,
    parent: i
  };
}
function __PRIVATE_convertQueryTargetToQuery(e) {
  let t = __PRIVATE_fromQueryPath(e.parent);
  const n = e.structuredQuery, r = n.from ? n.from.length : 0;
  let i = null;
  if (r > 0) {
    __PRIVATE_hardAssert(1 === r, 65062);
    const e2 = n.from[0];
    e2.allDescendants ? i = e2.collectionId : t = t.child(e2.collectionId);
  }
  let s = [];
  n.where && (s = (function __PRIVATE_fromFilters(e2) {
    const t2 = __PRIVATE_fromFilter(e2);
    if (t2 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t2)) return t2.getFilters();
    return [t2];
  })(n.where));
  let o = [];
  n.orderBy && (o = (function __PRIVATE_fromOrder(e2) {
    return e2.map((e3) => (function __PRIVATE_fromPropertyOrder(e4) {
      return new OrderBy(
        __PRIVATE_fromFieldPathReference(e4.field),
        // visible for testing
        (function __PRIVATE_fromDirection(e5) {
          switch (e5) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        })(e4.direction)
      );
    })(e3));
  })(n.orderBy));
  let _ = null;
  n.limit && (_ = (function __PRIVATE_fromInt32Proto(e2) {
    let t2;
    return t2 = "object" == typeof e2 ? e2.value : e2, __PRIVATE_isNullOrUndefined(t2) ? null : t2;
  })(n.limit));
  let a = null;
  n.startAt && (a = (function __PRIVATE_fromStartAtCursor(e2) {
    const t2 = !!e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  })(n.startAt));
  let u = null;
  return n.endAt && (u = (function __PRIVATE_fromEndAtCursor(e2) {
    const t2 = !e2.before, n2 = e2.values || [];
    return new Bound(n2, t2);
  })(n.endAt)), __PRIVATE_newQuery(t, i, o, s, _, "F", a, u);
}
function __PRIVATE_toListenRequestLabels(e, t) {
  const n = (function __PRIVATE_toLabel(e2) {
    switch (e2) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return fail(28987, {
          purpose: e2
        });
    }
  })(t.purpose);
  return null == n ? null : {
    "goog-listen-tags": n
  };
}
function __PRIVATE_fromFilter(e) {
  return void 0 !== e.unaryFilter ? (function __PRIVATE_fromUnaryFilter(e2) {
    switch (e2.unaryFilter.op) {
      case "IS_NAN":
        const t = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(t, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(n, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const r = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(r, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      case "OPERATOR_UNSPECIFIED":
        return fail(61313);
      default:
        return fail(60726);
    }
  })(e) : void 0 !== e.fieldFilter ? (function __PRIVATE_fromFieldFilter(e2) {
    return FieldFilter.create(__PRIVATE_fromFieldPathReference(e2.fieldFilter.field), (function __PRIVATE_fromOperatorName(e3) {
      switch (e3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        case "OPERATOR_UNSPECIFIED":
          return fail(58110);
        default:
          return fail(50506);
      }
    })(e2.fieldFilter.op), e2.fieldFilter.value);
  })(e) : void 0 !== e.compositeFilter ? (function __PRIVATE_fromCompositeFilter(e2) {
    return CompositeFilter.create(e2.compositeFilter.filters.map((e3) => __PRIVATE_fromFilter(e3)), (function __PRIVATE_fromCompositeOperatorName(e3) {
      switch (e3) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return fail(1026);
      }
    })(e2.compositeFilter.op));
  })(e) : fail(30097, {
    filter: e
  });
}
function __PRIVATE_toDirection(e) {
  return mt[e];
}
function __PRIVATE_toOperatorName(e) {
  return ft[e];
}
function __PRIVATE_toCompositeOperatorName(e) {
  return gt[e];
}
function __PRIVATE_toFieldPathReference(e) {
  return {
    fieldPath: e.canonicalString()
  };
}
function __PRIVATE_fromFieldPathReference(e) {
  return FieldPath$1.fromServerFormat(e.fieldPath);
}
function __PRIVATE_toFilter(e) {
  return e instanceof FieldFilter ? (function __PRIVATE_toUnaryOrFieldFilter(e2) {
    if ("==" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NULL"
        }
      };
    } else if ("!=" === e2.op) {
      if (__PRIVATE_isNanValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NAN"
        }
      };
      if (__PRIVATE_isNullValue(e2.value)) return {
        unaryFilter: {
          field: __PRIVATE_toFieldPathReference(e2.field),
          op: "IS_NOT_NULL"
        }
      };
    }
    return {
      fieldFilter: {
        field: __PRIVATE_toFieldPathReference(e2.field),
        op: __PRIVATE_toOperatorName(e2.op),
        value: e2.value
      }
    };
  })(e) : e instanceof CompositeFilter ? (function __PRIVATE_toCompositeFilter(e2) {
    const t = e2.getFilters().map((e3) => __PRIVATE_toFilter(e3));
    if (1 === t.length) return t[0];
    return {
      compositeFilter: {
        op: __PRIVATE_toCompositeOperatorName(e2.op),
        filters: t
      }
    };
  })(e) : fail(54877, {
    filter: e
  });
}
function __PRIVATE_toDocumentMask(e) {
  const t = [];
  return e.fields.forEach((e2) => t.push(e2.canonicalString())), {
    fieldPaths: t
  };
}
function __PRIVATE_isValidResourceName(e) {
  return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
function __PRIVATE_isProtoValueSerializable(e) {
  return !!e && "function" == typeof e._toProto && "ProtoValue" === e._protoValueType;
}
var TargetData = class _TargetData {
  constructor(e, t, n, r, i = SnapshotVersion.min(), s = SnapshotVersion.min(), o = ByteString.EMPTY_BYTE_STRING, _ = null) {
    this.target = e, this.targetId = t, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = s, this.resumeToken = o, this.expectedCount = _;
  }
  /** Creates a new target data instance with an updated sequence number. */
  withSequenceNumber(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, this.expectedCount);
  }
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  withResumeToken(e, t) {
    return new _TargetData(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      /* expectedCount= */
      null
    );
  }
  /**
   * Creates a new target data instance with an updated expected count.
   */
  withExpectedCount(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken, e);
  }
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  withLastLimboFreeSnapshotVersion(e) {
    return new _TargetData(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken, this.expectedCount);
  }
};
var __PRIVATE_LocalSerializer = class {
  constructor(e) {
    this.yt = e;
  }
};
function __PRIVATE_fromBundledQuery(e) {
  const t = __PRIVATE_convertQueryTargetToQuery({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(
    t,
    t.limit,
    "L"
    /* LimitType.Last */
  ) : t;
}
var __PRIVATE_FirestoreIndexValueWriter = class {
  constructor() {
  }
  // The write methods below short-circuit writing terminators for values
  // containing a (terminating) truncated value.
  // As an example, consider the resulting encoding for:
  // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
  // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
  // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
  /** Writes an index value.  */
  Dt(e, t) {
    this.Ct(e, t), // Write separator to split index values
    // (see go/firestore-storage-format#encodings).
    t.vt();
  }
  Ct(e, t) {
    if ("nullValue" in e) this.Ft(t, 5);
    else if ("booleanValue" in e) this.Ft(t, 10), t.Mt(e.booleanValue ? 1 : 0);
    else if ("integerValue" in e) this.Ft(t, 15), t.Mt(__PRIVATE_normalizeNumber(e.integerValue));
    else if ("doubleValue" in e) {
      const n = __PRIVATE_normalizeNumber(e.doubleValue);
      isNaN(n) ? this.Ft(t, 13) : (this.Ft(t, 15), __PRIVATE_isNegativeZero(n) ? (
        // -0.0, 0 and 0.0 are all considered the same
        t.Mt(0)
      ) : t.Mt(n));
    } else if ("timestampValue" in e) {
      let n = e.timestampValue;
      this.Ft(t, 20), "string" == typeof n && (n = __PRIVATE_normalizeTimestamp(n)), t.xt(`${n.seconds || ""}`), t.Mt(n.nanos || 0);
    } else if ("stringValue" in e) this.Ot(e.stringValue, t), this.Nt(t);
    else if ("bytesValue" in e) this.Ft(t, 30), t.Bt(__PRIVATE_normalizeByteString(e.bytesValue)), this.Nt(t);
    else if ("referenceValue" in e) this.Lt(e.referenceValue, t);
    else if ("geoPointValue" in e) {
      const n = e.geoPointValue;
      this.Ft(t, 45), t.Mt(n.latitude || 0), t.Mt(n.longitude || 0);
    } else "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.Ft(t, Number.MAX_SAFE_INTEGER) : __PRIVATE_isVectorValue(e) ? this.kt(e.mapValue, t) : (this.Kt(e.mapValue, t), this.Nt(t)) : "arrayValue" in e ? (this.qt(e.arrayValue, t), this.Nt(t)) : fail(19022, {
      Ut: e
    });
  }
  Ot(e, t) {
    this.Ft(t, 25), this.$t(e, t);
  }
  $t(e, t) {
    t.xt(e);
  }
  Kt(e, t) {
    const n = e.fields || {};
    this.Ft(t, 55);
    for (const e2 of Object.keys(n)) this.Ot(e2, t), this.Ct(n[e2], t);
  }
  kt(e, t) {
    const n = e.fields || {};
    this.Ft(t, 53);
    const r = ut, i = n[r].arrayValue?.values?.length || 0;
    this.Ft(t, 15), t.Mt(__PRIVATE_normalizeNumber(i)), // Vectors then sort by position value
    this.Ot(r, t), this.Ct(n[r], t);
  }
  qt(e, t) {
    const n = e.values || [];
    this.Ft(t, 50);
    for (const e2 of n) this.Ct(e2, t);
  }
  Lt(e, t) {
    this.Ft(t, 37);
    DocumentKey.fromName(e).path.forEach((e2) => {
      this.Ft(t, 60), this.$t(e2, t);
    });
  }
  Ft(e, t) {
    e.Mt(t);
  }
  Nt(e) {
    e.Mt(2);
  }
};
__PRIVATE_FirestoreIndexValueWriter.Wt = new __PRIVATE_FirestoreIndexValueWriter();
var __PRIVATE_MemoryIndexManager = class {
  constructor() {
    this.bn = new __PRIVATE_MemoryCollectionParentIndex();
  }
  addToCollectionParentIndex(e, t) {
    return this.bn.add(t), PersistencePromise.resolve();
  }
  getCollectionParents(e, t) {
    return PersistencePromise.resolve(this.bn.getEntries(t));
  }
  addFieldIndex(e, t) {
    return PersistencePromise.resolve();
  }
  deleteFieldIndex(e, t) {
    return PersistencePromise.resolve();
  }
  deleteAllFieldIndexes(e) {
    return PersistencePromise.resolve();
  }
  createTargetIndexes(e, t) {
    return PersistencePromise.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return PersistencePromise.resolve(null);
  }
  getIndexType(e, t) {
    return PersistencePromise.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(e, t) {
    return PersistencePromise.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return PersistencePromise.resolve(null);
  }
  getMinOffset(e, t) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  updateCollectionGroup(e, t, n) {
    return PersistencePromise.resolve();
  }
  updateIndexEntries(e, t) {
    return PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryCollectionParentIndex = class {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(e) {
    const t = e.lastSegment(), n = e.popLast(), r = this.index[t] || new SortedSet(ResourcePath.comparator), i = !r.has(n);
    return this.index[t] = r.add(n), i;
  }
  has(e) {
    const t = e.lastSegment(), n = e.popLast(), r = this.index[t];
    return r && r.has(n);
  }
  getEntries(e) {
    return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
  }
};
var wt = new Uint8Array(0);
var bt = {
  didRun: false,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
};
var St = 41943040;
var LruParams = class _LruParams {
  static withCacheSize(e) {
    return new _LruParams(e, _LruParams.DEFAULT_COLLECTION_PERCENTILE, _LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
  constructor(e, t, n) {
    this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
  }
};
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(St, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
var __PRIVATE_TargetIdGenerator = class ___PRIVATE_TargetIdGenerator {
  constructor(e) {
    this.sr = e;
  }
  next() {
    return this.sr += 2, this.sr;
  }
  static _r() {
    return new ___PRIVATE_TargetIdGenerator(0);
  }
  static ar() {
    return new ___PRIVATE_TargetIdGenerator(-1);
  }
};
var Dt = "LruGarbageCollector";
var Ct = 1048576;
function __PRIVATE_bufferEntryComparator([e, t], [n, r]) {
  const i = __PRIVATE_primitiveComparator(e, n);
  return 0 === i ? __PRIVATE_primitiveComparator(t, r) : i;
}
var __PRIVATE_RollingSequenceNumberBuffer = class {
  constructor(e) {
    this.Pr = e, this.buffer = new SortedSet(__PRIVATE_bufferEntryComparator), this.Tr = 0;
  }
  Ir() {
    return ++this.Tr;
  }
  Er(e) {
    const t = [e, this.Ir()];
    if (this.buffer.size < this.Pr) this.buffer = this.buffer.add(t);
    else {
      const e2 = this.buffer.last();
      __PRIVATE_bufferEntryComparator(t, e2) < 0 && (this.buffer = this.buffer.delete(e2).add(t));
    }
  }
  get maxValue() {
    return this.buffer.last()[0];
  }
};
var __PRIVATE_LruScheduler = class {
  constructor(e, t, n) {
    this.garbageCollector = e, this.asyncQueue = t, this.localStore = n, this.Rr = null;
  }
  start() {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.Ar(6e4);
  }
  stop() {
    this.Rr && (this.Rr.cancel(), this.Rr = null);
  }
  get started() {
    return null !== this.Rr;
  }
  Ar(e) {
    __PRIVATE_logDebug(Dt, `Garbage collection scheduled in ${e}ms`), this.Rr = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", e, () => __async(this, null, function* () {
      this.Rr = null;
      try {
        yield this.localStore.collectGarbage(this.garbageCollector);
      } catch (e2) {
        __PRIVATE_isIndexedDbTransactionError(e2) ? __PRIVATE_logDebug(Dt, "Ignoring IndexedDB error during garbage collection: ", e2) : yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
      }
      yield this.Ar(3e5);
    }));
  }
};
var __PRIVATE_LruGarbageCollectorImpl = class {
  constructor(e, t) {
    this.Vr = e, this.params = t;
  }
  calculateTargetCount(e, t) {
    return this.Vr.dr(e).next((e2) => Math.floor(t / 100 * e2));
  }
  nthSequenceNumber(e, t) {
    if (0 === t) return PersistencePromise.resolve(__PRIVATE_ListenSequence.ce);
    const n = new __PRIVATE_RollingSequenceNumberBuffer(t);
    return this.Vr.forEachTarget(e, (e2) => n.Er(e2.sequenceNumber)).next(() => this.Vr.mr(e, (e2) => n.Er(e2))).next(() => n.maxValue);
  }
  removeTargets(e, t, n) {
    return this.Vr.removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    return this.Vr.removeOrphanedDocuments(e, t);
  }
  collect(e, t) {
    return -1 === this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", "Garbage collection skipped; disabled"), PersistencePromise.resolve(bt)) : this.getCacheSize(e).next((n) => n < this.params.cacheSizeCollectionThreshold ? (__PRIVATE_logDebug("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`), bt) : this.gr(e, t));
  }
  getCacheSize(e) {
    return this.Vr.getCacheSize(e);
  }
  gr(e, t) {
    let n, r, i, s, o, _, a;
    const u = Date.now();
    return this.calculateTargetCount(e, this.params.percentileToCollect).next((t2) => (
      // Cap at the configured max
      (t2 > this.params.maximumSequenceNumbersToCollect ? (__PRIVATE_logDebug("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t2}`), r = this.params.maximumSequenceNumbersToCollect) : r = t2, s = Date.now(), this.nthSequenceNumber(e, r))
    )).next((r2) => (n = r2, o = Date.now(), this.removeTargets(e, n, t))).next((t2) => (i = t2, _ = Date.now(), this.removeOrphanedDocuments(e, n))).next((e2) => {
      if (a = Date.now(), __PRIVATE_getLogLevel() <= LogLevel.DEBUG) {
        __PRIVATE_logDebug("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${s - u}ms
	Determined least recently used ${r} in ` + (o - s) + `ms
	Removed ${i} targets in ` + (_ - o) + `ms
	Removed ${e2} documents in ` + (a - _) + `ms
Total Duration: ${a - u}ms`);
      }
      return PersistencePromise.resolve({
        didRun: true,
        sequenceNumbersCollected: r,
        targetsRemoved: i,
        documentsRemoved: e2
      });
    });
  }
};
function __PRIVATE_newLruGarbageCollector(e, t) {
  return new __PRIVATE_LruGarbageCollectorImpl(e, t);
}
var RemoteDocumentChangeBuffer = class {
  constructor() {
    this.changes = new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = false;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(e, t) {
    this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(e, t) {
    this.assertNotApplied();
    const n = this.changes.get(t);
    return void 0 !== n ? PersistencePromise.resolve(n) : this.getFromCache(e, t);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
};
var OverlayedDocument = class {
  constructor(e, t) {
    this.overlayedDocument = e, this.mutatedFields = t;
  }
};
var LocalDocumentsView = class {
  constructor(e, t, n, r) {
    this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(e, t) {
    let n = null;
    return this.documentOverlayCache.getOverlay(e, t).next((r) => (n = r, this.remoteDocumentCache.getEntry(e, t))).next((e2) => (null !== n && __PRIVATE_mutationApplyToLocalView(n.mutation, e2, FieldMask.empty(), Timestamp.now()), e2));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.getLocalViewOfDocuments(e, t2, __PRIVATE_documentKeySet()).next(() => t2));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(e, t, n = __PRIVATE_documentKeySet()) {
    const r = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, n).next((e2) => {
      let t2 = documentMap();
      return e2.forEach((e3, n2) => {
        t2 = t2.insert(e3, n2.overlayedDocument);
      }), t2;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(e, t) {
    const n = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, n, t).next(() => this.computeViews(e, t, n, __PRIVATE_documentKeySet()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(e, t, n) {
    const r = [];
    return n.forEach((e2) => {
      t.has(e2) || r.push(e2);
    }), this.documentOverlayCache.getOverlays(e, r).next((e2) => {
      e2.forEach((e3, n2) => {
        t.set(e3, n2);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @returns A map represents the local documents view.
   */
  computeViews(e, t, n, r) {
    let i = __PRIVATE_mutableDocumentMap();
    const s = __PRIVATE_newDocumentKeyMap(), o = (function __PRIVATE_newOverlayedDocumentMap() {
      return __PRIVATE_newDocumentKeyMap();
    })();
    return t.forEach((e2, t2) => {
      const o2 = n.get(t2.key);
      r.has(t2.key) && (void 0 === o2 || o2.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t2.key, t2) : void 0 !== o2 ? (s.set(t2.key, o2.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o2.mutation, t2, o2.mutation.getFieldMask(), Timestamp.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        s.set(t2.key, FieldMask.empty())
      );
    }), this.recalculateAndSaveOverlays(e, i).next((e2) => (e2.forEach((e3, t2) => s.set(e3, t2)), t.forEach((e3, t2) => o.set(e3, new OverlayedDocument(t2, s.get(e3) ?? null))), o));
  }
  recalculateAndSaveOverlays(e, t) {
    const n = __PRIVATE_newDocumentKeyMap();
    let r = new SortedMap((e2, t2) => e2 - t2), i = __PRIVATE_documentKeySet();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e2) => {
      for (const i2 of e2) i2.keys().forEach((e3) => {
        const s = t.get(e3);
        if (null === s) return;
        let o = n.get(e3) || FieldMask.empty();
        o = i2.applyToLocalView(s, o), n.set(e3, o);
        const _ = (r.get(i2.batchId) || __PRIVATE_documentKeySet()).add(e3);
        r = r.insert(i2.batchId, _);
      });
    }).next(() => {
      const s = [], o = r.getReverseIterator();
      for (; o.hasNext(); ) {
        const r2 = o.getNext(), _ = r2.key, a = r2.value, u = __PRIVATE_newMutationMap();
        a.forEach((e2) => {
          if (!i.has(e2)) {
            const r3 = __PRIVATE_calculateOverlayMutation(t.get(e2), n.get(e2));
            null !== r3 && u.set(e2, r3), i = i.add(e2);
          }
        }), s.push(this.documentOverlayCache.saveOverlays(e, _, u));
      }
      return PersistencePromise.waitFor(s);
    }).next(() => n);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.recalculateAndSaveOverlays(e, t2));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(e, t, n, r) {
    return __PRIVATE_isDocumentQuery$1(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : __PRIVATE_isCollectionGroupQuery(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r) : this.getDocumentsMatchingCollectionQuery(e, t, n, r);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup - The collection group for the documents.
   * @param offset - The offset to index into.
   * @param count - The number of documents to return
   * @returns A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(e, t, n, r) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r).next((i) => {
      const s = r - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
      let o = N, _ = i;
      return s.next((t2) => PersistencePromise.forEach(t2, (t3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(t3) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t3).next((e2) => {
        _ = _.insert(t3, e2);
      }))).next(() => this.populateOverlays(e, t2, i)).next(() => this.computeViews(e, _, t2, __PRIVATE_documentKeySet())).next((e2) => ({
        batchId: o,
        changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e2)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new DocumentKey(t)).next((e2) => {
      let t2 = documentMap();
      return e2.isFoundDocument() && (t2 = t2.insert(e2.key, e2)), t2;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, n, r) {
    const i = t.collectionGroup;
    let s = documentMap();
    return this.indexManager.getCollectionParents(e, i).next((o) => PersistencePromise.forEach(o, (o2) => {
      const _ = (function __PRIVATE_asCollectionQueryAtPath(e2, t2) {
        return new __PRIVATE_QueryImpl(
          t2,
          /*collectionGroup=*/
          null,
          e2.explicitOrderBy.slice(),
          e2.filters.slice(),
          e2.limit,
          e2.limitType,
          e2.startAt,
          e2.endAt
        );
      })(t, o2.child(i));
      return this.getDocumentsMatchingCollectionQuery(e, _, n, r).next((e2) => {
        e2.forEach((e3, t2) => {
          s = s.insert(e3, t2);
        });
      });
    }).next(() => s));
  }
  getDocumentsMatchingCollectionQuery(e, t, n, r) {
    let i;
    return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((s) => (i = s, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r))).next((e2) => {
      i.forEach((t2, n3) => {
        const r2 = n3.getKey();
        null === e2.get(r2) && (e2 = e2.insert(r2, MutableDocument.newInvalidDocument(r2)));
      });
      let n2 = documentMap();
      return e2.forEach((e3, r2) => {
        const s = i.get(e3);
        void 0 !== s && __PRIVATE_mutationApplyToLocalView(s.mutation, r2, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
        __PRIVATE_queryMatches(t, r2) && (n2 = n2.insert(e3, r2));
      }), n2;
    });
  }
};
var __PRIVATE_MemoryBundleCache = class {
  constructor(e) {
    this.serializer = e, this.Nr = /* @__PURE__ */ new Map(), this.Br = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(e, t) {
    return PersistencePromise.resolve(this.Nr.get(t));
  }
  saveBundleMetadata(e, t) {
    return this.Nr.set(
      t.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      (function __PRIVATE_fromBundleMetadata(e2) {
        return {
          id: e2.id,
          version: e2.version,
          createTime: __PRIVATE_fromVersion(e2.createTime)
        };
      })(t)
    ), PersistencePromise.resolve();
  }
  getNamedQuery(e, t) {
    return PersistencePromise.resolve(this.Br.get(t));
  }
  saveNamedQuery(e, t) {
    return this.Br.set(t.name, (function __PRIVATE_fromProtoNamedQuery(e2) {
      return {
        name: e2.name,
        query: __PRIVATE_fromBundledQuery(e2.bundledQuery),
        readTime: __PRIVATE_fromVersion(e2.readTime)
      };
    })(t)), PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryDocumentOverlayCache = class {
  constructor() {
    this.overlays = new SortedMap(DocumentKey.comparator), this.Lr = /* @__PURE__ */ new Map();
  }
  getOverlay(e, t) {
    return PersistencePromise.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const n = __PRIVATE_newOverlayMap();
    return PersistencePromise.forEach(t, (t2) => this.getOverlay(e, t2).next((e2) => {
      null !== e2 && n.set(t2, e2);
    })).next(() => n);
  }
  saveOverlays(e, t, n) {
    return n.forEach((n2, r) => {
      this.St(e, t, r);
    }), PersistencePromise.resolve();
  }
  removeOverlaysForBatchId(e, t, n) {
    const r = this.Lr.get(n);
    return void 0 !== r && (r.forEach((e2) => this.overlays = this.overlays.remove(e2)), this.Lr.delete(n)), PersistencePromise.resolve();
  }
  getOverlaysForCollection(e, t, n) {
    const r = __PRIVATE_newOverlayMap(), i = t.length + 1, s = new DocumentKey(t.child("")), o = this.overlays.getIteratorFrom(s);
    for (; o.hasNext(); ) {
      const e2 = o.getNext().value, s2 = e2.getKey();
      if (!t.isPrefixOf(s2.path)) break;
      s2.path.length === i && e2.largestBatchId > n && r.set(e2.getKey(), e2);
    }
    return PersistencePromise.resolve(r);
  }
  getOverlaysForCollectionGroup(e, t, n, r) {
    let i = new SortedMap((e2, t2) => e2 - t2);
    const s = this.overlays.getIterator();
    for (; s.hasNext(); ) {
      const e2 = s.getNext().value;
      if (e2.getKey().getCollectionGroup() === t && e2.largestBatchId > n) {
        let t2 = i.get(e2.largestBatchId);
        null === t2 && (t2 = __PRIVATE_newOverlayMap(), i = i.insert(e2.largestBatchId, t2)), t2.set(e2.getKey(), e2);
      }
    }
    const o = __PRIVATE_newOverlayMap(), _ = i.getIterator();
    for (; _.hasNext(); ) {
      if (_.getNext().value.forEach((e2, t2) => o.set(e2, t2)), o.size() >= r) break;
    }
    return PersistencePromise.resolve(o);
  }
  St(e, t, n) {
    const r = this.overlays.get(n.key);
    if (null !== r) {
      const e2 = this.Lr.get(r.largestBatchId).delete(n.key);
      this.Lr.set(r.largestBatchId, e2);
    }
    this.overlays = this.overlays.insert(n.key, new Overlay(t, n));
    let i = this.Lr.get(t);
    void 0 === i && (i = __PRIVATE_documentKeySet(), this.Lr.set(t, i)), this.Lr.set(t, i.add(n.key));
  }
};
var __PRIVATE_MemoryGlobalsCache = class {
  constructor() {
    this.sessionToken = ByteString.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return PersistencePromise.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return this.sessionToken = t, PersistencePromise.resolve();
  }
};
var __PRIVATE_ReferenceSet = class {
  constructor() {
    this.kr = new SortedSet(__PRIVATE_DocReference.Kr), // A set of outstanding references to a document sorted by target id.
    this.qr = new SortedSet(__PRIVATE_DocReference.Ur);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.kr.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(e, t) {
    const n = new __PRIVATE_DocReference(e, t);
    this.kr = this.kr.add(n), this.qr = this.qr.add(n);
  }
  /** Add references to the given document keys for the given ID. */
  $r(e, t) {
    e.forEach((e2) => this.addReference(e2, t));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(e, t) {
    this.Wr(new __PRIVATE_DocReference(e, t));
  }
  Qr(e, t) {
    e.forEach((e2) => this.removeReference(e2, t));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  Gr(e) {
    const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1), i = [];
    return this.qr.forEachInRange([n, r], (e2) => {
      this.Wr(e2), i.push(e2.key);
    }), i;
  }
  zr() {
    this.kr.forEach((e) => this.Wr(e));
  }
  Wr(e) {
    this.kr = this.kr.delete(e), this.qr = this.qr.delete(e);
  }
  jr(e) {
    const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r = new __PRIVATE_DocReference(t, e + 1);
    let i = __PRIVATE_documentKeySet();
    return this.qr.forEachInRange([n, r], (e2) => {
      i = i.add(e2.key);
    }), i;
  }
  containsKey(e) {
    const t = new __PRIVATE_DocReference(e, 0), n = this.kr.firstAfterOrEqual(t);
    return null !== n && e.isEqual(n.key);
  }
};
var __PRIVATE_DocReference = class {
  constructor(e, t) {
    this.key = e, this.Jr = t;
  }
  /** Compare by key then by ID */
  static Kr(e, t) {
    return DocumentKey.comparator(e.key, t.key) || __PRIVATE_primitiveComparator(e.Jr, t.Jr);
  }
  /** Compare by ID then by key */
  static Ur(e, t) {
    return __PRIVATE_primitiveComparator(e.Jr, t.Jr) || DocumentKey.comparator(e.key, t.key);
  }
};
var __PRIVATE_MemoryMutationQueue = class {
  constructor(e, t) {
    this.indexManager = e, this.referenceDelegate = t, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.Yn = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.Hr = new SortedSet(__PRIVATE_DocReference.Kr);
  }
  checkEmpty(e) {
    return PersistencePromise.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(e, t, n, r) {
    const i = this.Yn;
    this.Yn++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const s = new MutationBatch(i, t, n, r);
    this.mutationQueue.push(s);
    for (const t2 of r) this.Hr = this.Hr.add(new __PRIVATE_DocReference(t2.key, i)), this.indexManager.addToCollectionParentIndex(e, t2.key.path.popLast());
    return PersistencePromise.resolve(s);
  }
  lookupMutationBatch(e, t) {
    return PersistencePromise.resolve(this.Zr(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const n = t + 1, r = this.Xr(n), i = r < 0 ? 0 : r;
    return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return PersistencePromise.resolve(0 === this.mutationQueue.length ? q : this.Yn - 1);
  }
  getAllMutationBatches(e) {
    return PersistencePromise.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const n = new __PRIVATE_DocReference(t, 0), r = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY), i = [];
    return this.Hr.forEachInRange([n, r], (e2) => {
      const t2 = this.Zr(e2.Jr);
      i.push(t2);
    }), PersistencePromise.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let n = new SortedSet(__PRIVATE_primitiveComparator);
    return t.forEach((e2) => {
      const t2 = new __PRIVATE_DocReference(e2, 0), r = new __PRIVATE_DocReference(e2, Number.POSITIVE_INFINITY);
      this.Hr.forEachInRange([t2, r], (e3) => {
        n = n.add(e3.Jr);
      });
    }), PersistencePromise.resolve(this.Yr(n));
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const n = t.path, r = n.length + 1;
    let i = n;
    DocumentKey.isDocumentKey(i) || (i = i.child(""));
    const s = new __PRIVATE_DocReference(new DocumentKey(i), 0);
    let o = new SortedSet(__PRIVATE_primitiveComparator);
    return this.Hr.forEachWhile((e2) => {
      const t2 = e2.key.path;
      return !!n.isPrefixOf(t2) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (t2.length === r && (o = o.add(e2.Jr)), true);
    }, s), PersistencePromise.resolve(this.Yr(o));
  }
  Yr(e) {
    const t = [];
    return e.forEach((e2) => {
      const n = this.Zr(e2);
      null !== n && t.push(n);
    }), t;
  }
  removeMutationBatch(e, t) {
    __PRIVATE_hardAssert(0 === this.ei(t.batchId, "removed"), 55003), this.mutationQueue.shift();
    let n = this.Hr;
    return PersistencePromise.forEach(t.mutations, (r) => {
      const i = new __PRIVATE_DocReference(r.key, t.batchId);
      return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r.key);
    }).next(() => {
      this.Hr = n;
    });
  }
  nr(e) {
  }
  containsKey(e, t) {
    const n = new __PRIVATE_DocReference(t, 0), r = this.Hr.firstAfterOrEqual(n);
    return PersistencePromise.resolve(t.isEqual(r && r.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, PersistencePromise.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  ei(e, t) {
    return this.Xr(e);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  Xr(e) {
    if (0 === this.mutationQueue.length)
      return 0;
    return e - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  Zr(e) {
    const t = this.Xr(e);
    if (t < 0 || t >= this.mutationQueue.length) return null;
    return this.mutationQueue[t];
  }
};
var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(e) {
    this.ti = e, /** Underlying cache of documents and their read times. */
    this.docs = (function __PRIVATE_documentEntryMap() {
      return new SortedMap(DocumentKey.comparator);
    })(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(e, t) {
    const n = t.key, r = this.docs.get(n), i = r ? r.size : 0, s = this.ti(t);
    return this.docs = this.docs.insert(n, {
      document: t.mutableCopy(),
      size: s
    }), this.size += s - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(e) {
    const t = this.docs.get(e);
    t && (this.docs = this.docs.remove(e), this.size -= t.size);
  }
  getEntry(e, t) {
    const n = this.docs.get(t);
    return PersistencePromise.resolve(n ? n.document.mutableCopy() : MutableDocument.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let n = __PRIVATE_mutableDocumentMap();
    return t.forEach((e2) => {
      const t2 = this.docs.get(e2);
      n = n.insert(e2, t2 ? t2.document.mutableCopy() : MutableDocument.newInvalidDocument(e2));
    }), PersistencePromise.resolve(n);
  }
  getDocumentsMatchingQuery(e, t, n, r) {
    let i = __PRIVATE_mutableDocumentMap();
    const s = t.path, o = new DocumentKey(s.child("__id-9223372036854775808__")), _ = this.docs.getIteratorFrom(o);
    for (; _.hasNext(); ) {
      const {
        key: e2,
        value: {
          document: o2
        }
      } = _.getNext();
      if (!s.isPrefixOf(e2.path)) break;
      e2.path.length > s.length + 1 || __PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o2), n) <= 0 || (r.has(o2.key) || __PRIVATE_queryMatches(t, o2)) && (i = i.insert(o2.key, o2.mutableCopy()));
    }
    return PersistencePromise.resolve(i);
  }
  getAllFromCollectionGroup(e, t, n, r) {
    fail(9500);
  }
  ni(e, t) {
    return PersistencePromise.forEach(this.docs, (e2) => t(e2));
  }
  newChangeBuffer(e) {
    return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
  }
  getSize(e) {
    return PersistencePromise.resolve(this.size);
  }
};
var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
  constructor(e) {
    super(), this.Mr = e;
  }
  applyChanges(e) {
    const t = [];
    return this.changes.forEach((n, r) => {
      r.isValidDocument() ? t.push(this.Mr.addEntry(e, r)) : this.Mr.removeEntry(n);
    }), PersistencePromise.waitFor(t);
  }
  getFromCache(e, t) {
    return this.Mr.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.Mr.getEntries(e, t);
  }
};
var __PRIVATE_MemoryTargetCache = class {
  constructor(e) {
    this.persistence = e, /**
     * Maps a target to the data about that target
     */
    this.ri = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.ii = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.si = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.oi = __PRIVATE_TargetIdGenerator._r();
  }
  forEachTarget(e, t) {
    return this.ri.forEach((e2, n) => t(n)), PersistencePromise.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return PersistencePromise.resolve(this.ii);
  }
  allocateTargetId(e) {
    return this.highestTargetId = this.oi.next(), PersistencePromise.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t, n) {
    return n && (this.lastRemoteSnapshotVersion = n), t > this.ii && (this.ii = t), PersistencePromise.resolve();
  }
  lr(e) {
    this.ri.set(e.target, e);
    const t = e.targetId;
    t > this.highestTargetId && (this.oi = new __PRIVATE_TargetIdGenerator(t), this.highestTargetId = t), e.sequenceNumber > this.ii && (this.ii = e.sequenceNumber);
  }
  addTargetData(e, t) {
    return this.lr(t), this.targetCount += 1, PersistencePromise.resolve();
  }
  updateTargetData(e, t) {
    return this.lr(t), PersistencePromise.resolve();
  }
  removeTargetData(e, t) {
    return this.ri.delete(t.target), this.si.Gr(t.targetId), this.targetCount -= 1, PersistencePromise.resolve();
  }
  removeTargets(e, t, n) {
    let r = 0;
    const i = [];
    return this.ri.forEach((s, o) => {
      o.sequenceNumber <= t && null === n.get(o.targetId) && (this.ri.delete(s), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r++);
    }), PersistencePromise.waitFor(i).next(() => r);
  }
  getTargetCount(e) {
    return PersistencePromise.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const n = this.ri.get(t) || null;
    return PersistencePromise.resolve(n);
  }
  addMatchingKeys(e, t, n) {
    return this.si.$r(t, n), PersistencePromise.resolve();
  }
  removeMatchingKeys(e, t, n) {
    this.si.Qr(t, n);
    const r = this.persistence.referenceDelegate, i = [];
    return r && t.forEach((t2) => {
      i.push(r.markPotentiallyOrphaned(e, t2));
    }), PersistencePromise.waitFor(i);
  }
  removeMatchingKeysForTargetId(e, t) {
    return this.si.Gr(t), PersistencePromise.resolve();
  }
  getMatchingKeysForTargetId(e, t) {
    const n = this.si.jr(t);
    return PersistencePromise.resolve(n);
  }
  containsKey(e, t) {
    return PersistencePromise.resolve(this.si.containsKey(t));
  }
};
var __PRIVATE_MemoryPersistence = class {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(e, t) {
    this._i = {}, this.overlays = {}, this.ai = new __PRIVATE_ListenSequence(0), this.ui = false, this.ui = true, this.ci = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e(this), this.li = new __PRIVATE_MemoryTargetCache(this);
    this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = (function __PRIVATE_newMemoryRemoteDocumentCache(e2) {
      return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e2);
    })((e2) => this.referenceDelegate.hi(e2)), this.serializer = new __PRIVATE_LocalSerializer(t), this.Pi = new __PRIVATE_MemoryBundleCache(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.ui = false, Promise.resolve();
  }
  get started() {
    return this.ui;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return t || (t = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t), t;
  }
  getMutationQueue(e, t) {
    let n = this._i[e.toKey()];
    return n || (n = new __PRIVATE_MemoryMutationQueue(t, this.referenceDelegate), this._i[e.toKey()] = n), n;
  }
  getGlobalsCache() {
    return this.ci;
  }
  getTargetCache() {
    return this.li;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Pi;
  }
  runTransaction(e, t, n) {
    __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
    const r = new __PRIVATE_MemoryTransaction(this.ai.next());
    return this.referenceDelegate.Ti(), n(r).next((e2) => this.referenceDelegate.Ii(r).next(() => e2)).toPromise().then((e2) => (r.raiseOnCommittedEvent(), e2));
  }
  Ei(e, t) {
    return PersistencePromise.or(Object.values(this._i).map((n) => () => n.containsKey(e, t)));
  }
};
var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
  constructor(e) {
    super(), this.currentSequenceNumber = e;
  }
};
var __PRIVATE_MemoryEagerDelegate = class ___PRIVATE_MemoryEagerDelegate {
  constructor(e) {
    this.persistence = e, /** Tracks all documents that are active in Query views. */
    this.Ri = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
    this.Ai = null;
  }
  static Vi(e) {
    return new ___PRIVATE_MemoryEagerDelegate(e);
  }
  get di() {
    if (this.Ai) return this.Ai;
    throw fail(60996);
  }
  addReference(e, t, n) {
    return this.Ri.addReference(n, t), this.di.delete(n.toString()), PersistencePromise.resolve();
  }
  removeReference(e, t, n) {
    return this.Ri.removeReference(n, t), this.di.add(n.toString()), PersistencePromise.resolve();
  }
  markPotentiallyOrphaned(e, t) {
    return this.di.add(t.toString()), PersistencePromise.resolve();
  }
  removeTarget(e, t) {
    this.Ri.Gr(t.targetId).forEach((e2) => this.di.add(e2.toString()));
    const n = this.persistence.getTargetCache();
    return n.getMatchingKeysForTargetId(e, t.targetId).next((e2) => {
      e2.forEach((e3) => this.di.add(e3.toString()));
    }).next(() => n.removeTargetData(e, t));
  }
  Ti() {
    this.Ai = /* @__PURE__ */ new Set();
  }
  Ii(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return PersistencePromise.forEach(this.di, (n) => {
      const r = DocumentKey.fromPath(n);
      return this.mi(e, r).next((e2) => {
        e2 || t.removeEntry(r, SnapshotVersion.min());
      });
    }).next(() => (this.Ai = null, t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.mi(e, t).next((e2) => {
      e2 ? this.di.delete(t.toString()) : this.di.add(t.toString());
    });
  }
  hi(e) {
    return 0;
  }
  mi(e, t) {
    return PersistencePromise.or([() => PersistencePromise.resolve(this.Ri.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Ei(e, t)]);
  }
};
var __PRIVATE_MemoryLruDelegate = class ___PRIVATE_MemoryLruDelegate {
  constructor(e, t) {
    this.persistence = e, this.fi = new ObjectMap((e2) => __PRIVATE_encodeResourcePath(e2.path), (e2, t2) => e2.isEqual(t2)), this.garbageCollector = __PRIVATE_newLruGarbageCollector(this, t);
  }
  static Vi(e, t) {
    return new ___PRIVATE_MemoryLruDelegate(e, t);
  }
  // No-ops, present so memory persistence doesn't have to care which delegate
  // it has.
  Ti() {
  }
  Ii(e) {
    return PersistencePromise.resolve();
  }
  forEachTarget(e, t) {
    return this.persistence.getTargetCache().forEachTarget(e, t);
  }
  dr(e) {
    const t = this.pr(e);
    return this.persistence.getTargetCache().getTargetCount(e).next((e2) => t.next((t2) => e2 + t2));
  }
  pr(e) {
    let t = 0;
    return this.mr(e, (e2) => {
      t++;
    }).next(() => t);
  }
  mr(e, t) {
    return PersistencePromise.forEach(this.fi, (n, r) => this.wr(e, n, r).next((e2) => e2 ? PersistencePromise.resolve() : t(r)));
  }
  removeTargets(e, t, n) {
    return this.persistence.getTargetCache().removeTargets(e, t, n);
  }
  removeOrphanedDocuments(e, t) {
    let n = 0;
    const r = this.persistence.getRemoteDocumentCache(), i = r.newChangeBuffer();
    return r.ni(e, (r2) => this.wr(e, r2, t).next((e2) => {
      e2 || (n++, i.removeEntry(r2, SnapshotVersion.min()));
    })).next(() => i.apply(e)).next(() => n);
  }
  markPotentiallyOrphaned(e, t) {
    return this.fi.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  removeTarget(e, t) {
    const n = t.withSequenceNumber(e.currentSequenceNumber);
    return this.persistence.getTargetCache().updateTargetData(e, n);
  }
  addReference(e, t, n) {
    return this.fi.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  removeReference(e, t, n) {
    return this.fi.set(n, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  updateLimboDocument(e, t) {
    return this.fi.set(t, e.currentSequenceNumber), PersistencePromise.resolve();
  }
  hi(e) {
    let t = e.key.toString().length;
    return e.isFoundDocument() && (t += __PRIVATE_estimateByteSize(e.data.value)), t;
  }
  wr(e, t, n) {
    return PersistencePromise.or([() => this.persistence.Ei(e, t), () => this.persistence.getTargetCache().containsKey(e, t), () => {
      const e2 = this.fi.get(t);
      return PersistencePromise.resolve(void 0 !== e2 && e2 > n);
    }]);
  }
  getCacheSize(e) {
    return this.persistence.getRemoteDocumentCache().getSize(e);
  }
};
var __PRIVATE_LocalViewChanges = class ___PRIVATE_LocalViewChanges {
  constructor(e, t, n, r) {
    this.targetId = e, this.fromCache = t, this.Ts = n, this.Is = r;
  }
  static Es(e, t) {
    let n = __PRIVATE_documentKeySet(), r = __PRIVATE_documentKeySet();
    for (const e2 of t.docChanges) switch (e2.type) {
      case 0:
        n = n.add(e2.doc.key);
        break;
      case 1:
        r = r.add(e2.doc.key);
    }
    return new ___PRIVATE_LocalViewChanges(e, t.fromCache, n, r);
  }
};
var QueryContext = class {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
};
var __PRIVATE_QueryEngine = class {
  constructor() {
    this.Rs = false, this.As = false, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.Vs = 100, this.ds = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    (function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
      return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
    })();
  }
  /** Sets the document view to query against. */
  initialize(e, t) {
    this.fs = e, this.indexManager = t, this.Rs = true;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(e, t, n, r) {
    const i = {
      result: null
    };
    return this.gs(e, t).next((e2) => {
      i.result = e2;
    }).next(() => {
      if (!i.result) return this.ps(e, t, r, n).next((e2) => {
        i.result = e2;
      });
    }).next(() => {
      if (i.result) return;
      const n2 = new QueryContext();
      return this.ys(e, t, n2).next((r2) => {
        if (i.result = r2, this.As) return this.ws(e, t, n2, r2.size);
      });
    }).next(() => i.result);
  }
  ws(e, t, n, r) {
    return n.documentReadCount < this.Vs ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."), n.documentReadCount > this.ds * r ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t))) : PersistencePromise.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  gs(e, t) {
    if (__PRIVATE_queryMatchesAllDocuments(t))
      return PersistencePromise.resolve(null);
    let n = __PRIVATE_queryToTarget(t);
    return this.indexManager.getIndexType(e, n).next((r) => 0 === r ? null : (null !== t.limit && 1 === r && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (t = __PRIVATE_queryWithLimit(
      t,
      null,
      "F"
      /* LimitType.First */
    ), n = __PRIVATE_queryToTarget(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r2) => {
      const i = __PRIVATE_documentKeySet(...r2);
      return this.fs.getDocuments(e, i).next((r3) => this.indexManager.getMinOffset(e, n).next((n2) => {
        const s = this.Ss(t, r3);
        return this.bs(t, s, i, n2.readTime) ? this.gs(e, __PRIVATE_queryWithLimit(
          t,
          null,
          "F"
          /* LimitType.First */
        )) : this.Ds(e, s, t, n2);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  ps(e, t, n, r) {
    return __PRIVATE_queryMatchesAllDocuments(t) || r.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.fs.getDocuments(e, n).next((i) => {
      const s = this.Ss(t, i);
      return this.bs(t, s, n, r) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), __PRIVATE_stringifyQuery(t)), this.Ds(e, s, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r, N)).next((e2) => e2));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  Ss(e, t) {
    let n = new SortedSet(__PRIVATE_newQueryComparator(e));
    return t.forEach((t2, r) => {
      __PRIVATE_queryMatches(e, r) && (n = n.add(r));
    }), n;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  bs(e, t, n, r) {
    if (null === e.limit)
      return false;
    if (n.size !== t.size)
      return true;
    const i = "F" === e.limitType ? t.last() : t.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
  }
  ys(e, t, n) {
    return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t)), this.fs.getDocumentsMatchingQuery(e, t, IndexOffset.min(), n);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  Ds(e, t, n, r) {
    return this.fs.getDocumentsMatchingQuery(e, n, r).next((e2) => (
      // Merge with existing results
      (t.forEach((t2) => {
        e2 = e2.insert(t2.key, t2);
      }), e2)
    ));
  }
};
var Nt = "LocalStore";
var Bt = 3e8;
var __PRIVATE_LocalStoreImpl = class {
  constructor(e, t, n, r) {
    this.persistence = e, this.Cs = t, this.serializer = r, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.vs = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.Fs = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.Ms = /* @__PURE__ */ new Map(), this.xs = e.getRemoteDocumentCache(), this.li = e.getTargetCache(), this.Pi = e.getBundleCache(), this.Os(n);
  }
  Os(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.xs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.xs.setIndexManager(this.indexManager), this.Cs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.vs));
  }
};
function __PRIVATE_newLocalStore(e, t, n, r) {
  return new __PRIVATE_LocalStoreImpl(e, t, n, r);
}
function __PRIVATE_localStoreHandleUserChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    return yield n.persistence.runTransaction("Handle user change", "readonly", (e2) => {
      let r;
      return n.mutationQueue.getAllMutationBatches(e2).next((i) => (r = i, n.Os(t), n.mutationQueue.getAllMutationBatches(e2))).next((t2) => {
        const i = [], s = [];
        let o = __PRIVATE_documentKeySet();
        for (const e3 of r) {
          i.push(e3.batchId);
          for (const t3 of e3.mutations) o = o.add(t3.key);
        }
        for (const e3 of t2) {
          s.push(e3.batchId);
          for (const t3 of e3.mutations) o = o.add(t3.key);
        }
        return n.localDocuments.getDocuments(e2, o).next((e3) => ({
          Ns: e3,
          removedBatchIds: i,
          addedBatchIds: s
        }));
      });
    });
  });
}
function __PRIVATE_localStoreAcknowledgeBatch(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e2) => {
    const r = t.batch.keys(), i = n.xs.newChangeBuffer({
      trackRemovals: true
    });
    return (function __PRIVATE_applyWriteToRemoteDocuments(e3, t2, n2, r2) {
      const i2 = n2.batch, s = i2.keys();
      let o = PersistencePromise.resolve();
      return s.forEach((e4) => {
        o = o.next(() => r2.getEntry(t2, e4)).next((t3) => {
          const s2 = n2.docVersions.get(e4);
          __PRIVATE_hardAssert(null !== s2, 48541), t3.version.compareTo(s2) < 0 && (i2.applyToRemoteDocument(t3, n2), t3.isValidDocument() && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          (t3.setReadTime(n2.commitVersion), r2.addEntry(t3)));
        });
      }), o.next(() => e3.mutationQueue.removeMutationBatch(t2, i2));
    })(n, e2, t, i).next(() => i.apply(e2)).next(() => n.mutationQueue.performConsistencyCheck(e2)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(e2, r, t.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e2, (function __PRIVATE_getKeysWithTransformResults(e3) {
      let t2 = __PRIVATE_documentKeySet();
      for (let n2 = 0; n2 < e3.mutationResults.length; ++n2) {
        e3.mutationResults[n2].transformResults.length > 0 && (t2 = t2.add(e3.batch.mutations[n2].key));
      }
      return t2;
    })(t))).next(() => n.localDocuments.getDocuments(e2, r));
  });
}
function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e) {
  const t = __PRIVATE_debugCast(e);
  return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e2) => t.li.getLastRemoteSnapshotVersion(e2));
}
function __PRIVATE_localStoreApplyRemoteEventToLocalCache(e, t) {
  const n = __PRIVATE_debugCast(e), r = t.snapshotVersion;
  let i = n.vs;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (e2) => {
    const s = n.xs.newChangeBuffer({
      trackRemovals: true
    });
    i = n.vs;
    const o = [];
    t.targetChanges.forEach((s2, _2) => {
      const a2 = i.get(_2);
      if (!a2) return;
      o.push(n.li.removeMatchingKeys(e2, s2.removedDocuments, _2).next(() => n.li.addMatchingKeys(e2, s2.addedDocuments, _2)));
      let u = a2.withSequenceNumber(e2.currentSequenceNumber);
      null !== t.targetMismatches.get(_2) ? u = u.withResumeToken(ByteString.EMPTY_BYTE_STRING, SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()) : s2.resumeToken.approximateByteSize() > 0 && (u = u.withResumeToken(s2.resumeToken, r)), i = i.insert(_2, u), // Update the target data if there are target changes (or if
      // sufficient time has passed since the last update).
      /**
      * Returns true if the newTargetData should be persisted during an update of
      * an active target. TargetData should always be persisted when a target is
      * being released and should not call this function.
      *
      * While the target is active, TargetData updates can be omitted when nothing
      * about the target has changed except metadata like the resume token or
      * snapshot version. Occasionally it's worth the extra write to prevent these
      * values from getting too stale after a crash, but this doesn't have to be
      * too frequent.
      */
      (function __PRIVATE_shouldPersistTargetData(e3, t2, n2) {
        if (0 === e3.resumeToken.approximateByteSize()) return true;
        const r2 = t2.snapshotVersion.toMicroseconds() - e3.snapshotVersion.toMicroseconds();
        if (r2 >= Bt) return true;
        const i2 = n2.addedDocuments.size + n2.modifiedDocuments.size + n2.removedDocuments.size;
        return i2 > 0;
      })(a2, u, s2) && o.push(n.li.updateTargetData(e2, u));
    });
    let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
    if (t.documentUpdates.forEach((r2) => {
      t.resolvedLimboDocuments.has(r2) && o.push(n.persistence.referenceDelegate.updateLimboDocument(e2, r2));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all
    // the remote documents in advance in a single call.
    o.push(__PRIVATE_populateDocumentChangeBuffer(e2, s, t.documentUpdates).next((e3) => {
      _ = e3.Bs, a = e3.Ls;
    })), !r.isEqual(SnapshotVersion.min())) {
      const t2 = n.li.getLastRemoteSnapshotVersion(e2).next((t3) => n.li.setTargetsMetadata(e2, e2.currentSequenceNumber, r));
      o.push(t2);
    }
    return PersistencePromise.waitFor(o).next(() => s.apply(e2)).next(() => n.localDocuments.getLocalViewOfDocuments(e2, _, a)).next(() => _);
  }).then((e2) => (n.vs = i, e2));
}
function __PRIVATE_populateDocumentChangeBuffer(e, t, n) {
  let r = __PRIVATE_documentKeySet(), i = __PRIVATE_documentKeySet();
  return n.forEach((e2) => r = r.add(e2)), t.getEntries(e, r).next((e2) => {
    let r2 = __PRIVATE_mutableDocumentMap();
    return n.forEach((n2, s) => {
      const o = e2.get(n2);
      s.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n2)), // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.
      s.isNoDocument() && s.version.isEqual(SnapshotVersion.min()) ? (
        // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        (t.removeEntry(n2, s.readTime), r2 = r2.insert(n2, s))
      ) : !o.isValidDocument() || s.version.compareTo(o.version) > 0 || 0 === s.version.compareTo(o.version) && o.hasPendingWrites ? (t.addEntry(s), r2 = r2.insert(n2, s)) : __PRIVATE_logDebug(Nt, "Ignoring outdated watch update for ", n2, ". Current version:", o.version, " Watch version:", s.version);
    }), {
      Bs: r2,
      Ls: i
    };
  });
}
function __PRIVATE_localStoreGetNextMutationBatch(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", (e2) => (void 0 === t && (t = q), n.mutationQueue.getNextMutationBatchAfterBatchId(e2, t)));
}
function __PRIVATE_localStoreAllocateTarget(e, t) {
  const n = __PRIVATE_debugCast(e);
  return n.persistence.runTransaction("Allocate target", "readwrite", (e2) => {
    let r;
    return n.li.getTargetData(e2, t).next((i) => i ? (
      // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      (r = i, PersistencePromise.resolve(r))
    ) : n.li.allocateTargetId(e2).next((i2) => (r = new TargetData(t, i2, "TargetPurposeListen", e2.currentSequenceNumber), n.li.addTargetData(e2, r).next(() => r))));
  }).then((e2) => {
    const r = n.vs.get(e2.targetId);
    return (null === r || e2.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.vs = n.vs.insert(e2.targetId, e2), n.Fs.set(t, e2.targetId)), e2;
  });
}
function __PRIVATE_localStoreReleaseTarget(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = r.vs.get(t), s = n ? "readwrite" : "readwrite-primary";
    try {
      n || (yield r.persistence.runTransaction("Release target", s, (e2) => r.persistence.referenceDelegate.removeTarget(e2, i)));
    } catch (e2) {
      if (!__PRIVATE_isIndexedDbTransactionError(e2)) throw e2;
      __PRIVATE_logDebug(Nt, `Failed to update sequence numbers for target ${t}: ${e2}`);
    }
    r.vs = r.vs.remove(t), r.Fs.delete(i.target);
  });
}
function __PRIVATE_localStoreExecuteQuery(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  let i = SnapshotVersion.min(), s = __PRIVATE_documentKeySet();
  return r.persistence.runTransaction(
    "Execute query",
    "readwrite",
    // Use readwrite instead of readonly so indexes can be created
    // Use readwrite instead of readonly so indexes can be created
    (e2) => (function __PRIVATE_localStoreGetTargetData(e3, t2, n2) {
      const r2 = __PRIVATE_debugCast(e3), i2 = r2.Fs.get(n2);
      return void 0 !== i2 ? PersistencePromise.resolve(r2.vs.get(i2)) : r2.li.getTargetData(t2, n2);
    })(r, e2, __PRIVATE_queryToTarget(t)).next((t2) => {
      if (t2) return i = t2.lastLimboFreeSnapshotVersion, r.li.getMatchingKeysForTargetId(e2, t2.targetId).next((e3) => {
        s = e3;
      });
    }).next(() => r.Cs.getDocumentsMatchingQuery(e2, t, n ? i : SnapshotVersion.min(), n ? s : __PRIVATE_documentKeySet())).next((e3) => (__PRIVATE_setMaxReadTime(r, __PRIVATE_queryCollectionGroup(t), e3), {
      documents: e3,
      ks: s
    }))
  );
}
function __PRIVATE_setMaxReadTime(e, t, n) {
  let r = e.Ms.get(t) || SnapshotVersion.min();
  n.forEach((e2, t2) => {
    t2.readTime.compareTo(r) > 0 && (r = t2.readTime);
  }), e.Ms.set(t, r);
}
var __PRIVATE_LocalClientState = class {
  constructor() {
    this.activeTargetIds = __PRIVATE_targetIdSet();
  }
  Qs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  Gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Ws() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
};
var __PRIVATE_MemorySharedClientState = class {
  constructor() {
    this.vo = new __PRIVATE_LocalClientState(), this.Fo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {
  }
  updateMutationState(e, t, n) {
  }
  addLocalQueryTarget(e, t = true) {
    return t && this.vo.Qs(e), this.Fo[e] || "not-current";
  }
  updateQueryState(e, t, n) {
    this.Fo[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.vo.Gs(e);
  }
  isLocalQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.Fo[e];
  }
  getAllActiveQueryTargets() {
    return this.vo.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.vo.activeTargetIds.has(e);
  }
  start() {
    return this.vo = new __PRIVATE_LocalClientState(), Promise.resolve();
  }
  handleUserChange(e, t, n) {
  }
  setOnlineState(e) {
  }
  shutdown() {
  }
  writeSequenceNumber(e) {
  }
  notifyBundleLoaded(e) {
  }
};
var __PRIVATE_NoopConnectivityMonitor = class {
  Mo(e) {
  }
  shutdown() {
  }
};
var Ut = "ConnectivityMonitor";
var __PRIVATE_BrowserConnectivityMonitor = class {
  constructor() {
    this.xo = () => this.Oo(), this.No = () => this.Bo(), this.Lo = [], this.ko();
  }
  Mo(e) {
    this.Lo.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.xo), window.removeEventListener("offline", this.No);
  }
  ko() {
    window.addEventListener("online", this.xo), window.addEventListener("offline", this.No);
  }
  Oo() {
    __PRIVATE_logDebug(Ut, "Network connectivity changed: AVAILABLE");
    for (const e of this.Lo) e(
      0
      /* NetworkStatus.AVAILABLE */
    );
  }
  Bo() {
    __PRIVATE_logDebug(Ut, "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Lo) e(
      1
      /* NetworkStatus.UNAVAILABLE */
    );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static v() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var $t = null;
function __PRIVATE_generateUniqueDebugId() {
  return null === $t ? $t = (function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  })() : $t++, "0x" + $t.toString(16);
}
var Wt = "RestConnection";
var Qt = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
  ExecutePipeline: "executePipeline"
};
var __PRIVATE_RestConnection = class {
  get Ko() {
    return false;
  }
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r = encodeURIComponent(this.databaseId.database);
    this.qo = t + "://" + e.host, this.Uo = `projects/${n}/databases/${r}`, this.$o = this.databaseId.database === it ? `project_id=${n}` : `project_id=${n}&database_id=${r}`;
  }
  Wo(e, t, n, r, i) {
    const s = __PRIVATE_generateUniqueDebugId(), o = this.Qo(e, t.toUriEncodedString());
    __PRIVATE_logDebug(Wt, `Sending RPC '${e}' ${s}:`, o, n);
    const _ = {
      "google-cloud-resource-prefix": this.Uo,
      "x-goog-request-params": this.$o
    };
    this.Go(_, r, i);
    const {
      host: a
    } = new URL(o), c = isCloudWorkstation(a);
    return this.zo(e, o, _, n, c).then((t2) => (__PRIVATE_logDebug(Wt, `Received RPC '${e}' ${s}: `, t2), t2), (t2) => {
      throw __PRIVATE_logWarn(Wt, `RPC '${e}' ${s} failed with error: `, t2, "url: ", o, "request:", n), t2;
    });
  }
  jo(e, t, n, r, i, s) {
    return this.Wo(e, t, n, r, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  Go(e, t, n) {
    e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    (function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + b;
    })(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach((t2, n2) => e[n2] = t2), n && n.headers.forEach((t2, n2) => e[n2] = t2);
  }
  Qo(e, t) {
    const n = Qt[e];
    let r = `${this.qo}/v1/${t}:${n}`;
    return this.databaseInfo.apiKey && (r = `${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`), r;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
};
var __PRIVATE_StreamBridge = class {
  constructor(e) {
    this.Jo = e.Jo, this.Ho = e.Ho;
  }
  Zo(e) {
    this.Xo = e;
  }
  Yo(e) {
    this.e_ = e;
  }
  t_(e) {
    this.n_ = e;
  }
  onMessage(e) {
    this.r_ = e;
  }
  close() {
    this.Ho();
  }
  send(e) {
    this.Jo(e);
  }
  i_() {
    this.Xo();
  }
  s_() {
    this.e_();
  }
  o_(e) {
    this.n_(e);
  }
  __(e) {
    this.r_(e);
  }
};
var Gt = "WebChannelConnection";
var __PRIVATE_unguardedEventListen = (e, t, n) => {
  e.listen(t, (e2) => {
    try {
      n(e2);
    } catch (e3) {
      setTimeout(() => {
        throw e3;
      }, 0);
    }
  });
};
var __PRIVATE_WebChannelConnection = class ___PRIVATE_WebChannelConnection extends __PRIVATE_RestConnection {
  constructor(e) {
    super(e), /** A collection of open WebChannel instances */
    this.a_ = [], this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
  }
  /**
   * Initialize STAT_EVENT listener once. Subsequent calls are a no-op.
   * getStatEventTarget() returns the same target every time.
   */
  static u_() {
    if (!___PRIVATE_WebChannelConnection.c_) {
      const e = getStatEventTarget();
      __PRIVATE_unguardedEventListen(e, Event.STAT_EVENT, (e2) => {
        e2.stat === Stat.PROXY ? __PRIVATE_logDebug(Gt, "STAT_EVENT: detected buffering proxy") : e2.stat === Stat.NOPROXY && __PRIVATE_logDebug(Gt, "STAT_EVENT: detected no buffering proxy");
      }), ___PRIVATE_WebChannelConnection.c_ = true;
    }
  }
  zo(e, t, n, r, i) {
    const s = __PRIVATE_generateUniqueDebugId();
    return new Promise((i2, o) => {
      const _ = new XhrIo();
      _.setWithCredentials(true), _.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (_.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const t2 = _.getResponseJson();
              __PRIVATE_logDebug(Gt, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(t2)), i2(t2);
              break;
            case ErrorCode.TIMEOUT:
              __PRIVATE_logDebug(Gt, `RPC '${e}' ${s} timed out`), o(new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n2 = _.getStatus();
              if (__PRIVATE_logDebug(Gt, `RPC '${e}' ${s} failed with status:`, n2, "response text:", _.getResponseText()), n2 > 0) {
                let e2 = _.getResponseJson();
                Array.isArray(e2) && (e2 = e2[0]);
                const t3 = e2?.error;
                if (t3 && t3.status && t3.message) {
                  const e3 = (function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e4) {
                    const t4 = e4.toLowerCase().replace(/_/g, "-");
                    return Object.values(D).indexOf(t4) >= 0 ? t4 : D.UNKNOWN;
                  })(t3.status);
                  o(new FirestoreError(e3, t3.message));
                } else o(new FirestoreError(D.UNKNOWN, "Server responded with status " + _.getStatus()));
              } else
                o(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
              break;
            default:
              fail(9055, {
                l_: e,
                streamId: s,
                h_: _.getLastErrorCode(),
                P_: _.getLastError()
              });
          }
        } finally {
          __PRIVATE_logDebug(Gt, `RPC '${e}' ${s} completed.`);
        }
      });
      const a = JSON.stringify(r);
      __PRIVATE_logDebug(Gt, `RPC '${e}' ${s} sending request:`, r), _.send(t, "POST", a, n, 15);
    });
  }
  T_(e, t, n) {
    const r = __PRIVATE_generateUniqueDebugId(), i = [this.qo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], s = this.createWebChannelTransport(), o = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, _ = this.longPollingOptions.timeoutSeconds;
    void 0 !== _ && (o.longPollingTimeout = Math.round(1e3 * _)), this.useFetchStreams && (o.useFetchStreams = true), this.Go(o.initMessageHeaders, t, n), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    o.encodeInitMessageHeaders = true;
    const a = i.join("");
    __PRIVATE_logDebug(Gt, `Creating RPC '${e}' stream ${r}: ${a}`, o);
    const u = s.createWebChannel(a, o);
    this.I_(u);
    let c = false, l = false;
    const h = new __PRIVATE_StreamBridge({
      Jo: (t2) => {
        l ? __PRIVATE_logDebug(Gt, `Not sending because RPC '${e}' stream ${r} is closed:`, t2) : (c || (__PRIVATE_logDebug(Gt, `Opening RPC '${e}' stream ${r} transport.`), u.open(), c = true), __PRIVATE_logDebug(Gt, `RPC '${e}' stream ${r} sending:`, t2), u.send(t2));
      },
      Ho: () => u.close()
    });
    return __PRIVATE_unguardedEventListen(u, WebChannel.EventType.OPEN, () => {
      l || (__PRIVATE_logDebug(Gt, `RPC '${e}' stream ${r} transport opened.`), h.i_());
    }), __PRIVATE_unguardedEventListen(u, WebChannel.EventType.CLOSE, () => {
      l || (l = true, __PRIVATE_logDebug(Gt, `RPC '${e}' stream ${r} transport closed`), h.o_(), this.E_(u));
    }), __PRIVATE_unguardedEventListen(u, WebChannel.EventType.ERROR, (t2) => {
      l || (l = true, __PRIVATE_logWarn(Gt, `RPC '${e}' stream ${r} transport errored. Name:`, t2.name, "Message:", t2.message), h.o_(new FirestoreError(D.UNAVAILABLE, "The operation could not be completed")));
    }), __PRIVATE_unguardedEventListen(u, WebChannel.EventType.MESSAGE, (t2) => {
      if (!l) {
        const n2 = t2.data[0];
        __PRIVATE_hardAssert(!!n2, 16349);
        const i2 = n2, s2 = i2?.error || i2[0]?.error;
        if (s2) {
          __PRIVATE_logDebug(Gt, `RPC '${e}' stream ${r} received error:`, s2);
          const t3 = s2.status;
          let n3 = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            (function __PRIVATE_mapCodeFromRpcStatus(e2) {
              const t4 = Rt[e2];
              if (void 0 !== t4) return __PRIVATE_mapCodeFromRpcCode(t4);
            })(t3)
          ), i3 = s2.message;
          "NOT_FOUND" === t3 && i3.includes("database") && i3.includes("does not exist") && i3.includes(this.databaseId.database) && __PRIVATE_logWarn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`), void 0 === n3 && (n3 = D.INTERNAL, i3 = "Unknown error status: " + t3 + " with message " + s2.message), // Mark closed so no further events are propagated
          l = true, h.o_(new FirestoreError(n3, i3)), u.close();
        } else __PRIVATE_logDebug(Gt, `RPC '${e}' stream ${r} received:`, n2), h.__(n2);
      }
    }), // Ensure that event listeners are configured for STAT_EVENTs.
    ___PRIVATE_WebChannelConnection.u_(), setTimeout(() => {
      h.s_();
    }, 0), h;
  }
  /**
   * Closes and cleans up any resources associated with the connection.
   */
  terminate() {
    this.a_.forEach((e) => e.close()), this.a_ = [];
  }
  /**
   * Add a WebChannel instance to the collection of open instances.
   * @param webChannel
   */
  I_(e) {
    this.a_.push(e);
  }
  /**
   * Remove a WebChannel instance from the collection of open instances.
   * @param webChannel
   */
  E_(e) {
    this.a_ = this.a_.filter((t) => t === e);
  }
  /**
   * Modifies the headers for a request, adding the api key if present,
   * and then calling super.modifyHeadersForRequest
   */
  Go(e, t, n) {
    super.Go(e, t, n), // For web channel streams, we want to send the api key in the headers.
    this.databaseInfo.apiKey && (e["x-goog-api-key"] = this.databaseInfo.apiKey);
  }
  /**
   * Wrapped for mocking.
   * @protected
   */
  createWebChannelTransport() {
    return createWebChannelTransport();
  }
};
function __PRIVATE_newConnection(e) {
  return new __PRIVATE_WebChannelConnection(e);
}
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
function __PRIVATE_newSerializer(e) {
  return new JsonProtoSerializer(
    e,
    /* useProto3Json= */
    true
  );
}
__PRIVATE_WebChannelConnection.c_ = false;
var __PRIVATE_ExponentialBackoff = class {
  constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
    this.Ci = e, this.timerId = t, this.R_ = n, this.A_ = r, this.V_ = i, this.d_ = 0, this.m_ = null, /** The last backoff attempt, as epoch milliseconds. */
    this.f_ = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.d_ = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  g_() {
    this.d_ = this.V_;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  p_(e) {
    this.cancel();
    const t = Math.floor(this.d_ + this.y_()), n = Math.max(0, Date.now() - this.f_), r = Math.max(0, t - n);
    r > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.m_ = this.Ci.enqueueAfterDelay(this.timerId, r, () => (this.f_ = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.d_ *= this.A_, this.d_ < this.R_ && (this.d_ = this.R_), this.d_ > this.V_ && (this.d_ = this.V_);
  }
  w_() {
    null !== this.m_ && (this.m_.skipDelay(), this.m_ = null);
  }
  cancel() {
    null !== this.m_ && (this.m_.cancel(), this.m_ = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  y_() {
    return (Math.random() - 0.5) * this.d_;
  }
};
var zt = "PersistentStream";
var __PRIVATE_PersistentStream = class {
  constructor(e, t, n, r, i, s, o, _) {
    this.Ci = e, this.S_ = n, this.b_ = r, this.connection = i, this.authCredentialsProvider = s, this.appCheckCredentialsProvider = o, this.listener = _, this.state = 0, /**
     * A close count that's incremented every time the stream is closed; used by
     * getCloseGuardedDispatcher() to invalidate callbacks that happen after
     * close.
     */
    this.D_ = 0, this.C_ = null, this.v_ = null, this.stream = null, /**
     * Count of response messages received.
     */
    this.F_ = 0, this.M_ = new __PRIVATE_ExponentialBackoff(e, t);
  }
  /**
   * Returns true if start() has been called and no error has occurred. True
   * indicates the stream is open or in the process of opening (which
   * encompasses respecting backoff, getting auth tokens, and starting the
   * actual RPC). Use isOpen() to determine if the stream is open and ready for
   * outbound requests.
   */
  x_() {
    return 1 === this.state || 5 === this.state || this.O_();
  }
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  O_() {
    return 2 === this.state || 3 === this.state;
  }
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  start() {
    this.F_ = 0, 4 !== this.state ? this.auth() : this.N_();
  }
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  stop() {
    return __async(this, null, function* () {
      this.x_() && (yield this.close(
        0
        /* PersistentStreamState.Initial */
      ));
    });
  }
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  B_() {
    this.state = 0, this.M_.reset();
  }
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  L_() {
    this.O_() && null === this.C_ && (this.C_ = this.Ci.enqueueAfterDelay(this.S_, 6e4, () => this.k_()));
  }
  /** Sends a message to the underlying stream. */
  K_(e) {
    this.q_(), this.stream.send(e);
  }
  /** Called by the idle timer when the stream should close due to inactivity. */
  k_() {
    return __async(this, null, function* () {
      if (this.O_())
        return this.close(
          0
          /* PersistentStreamState.Initial */
        );
    });
  }
  /** Marks the stream as active again. */
  q_() {
    this.C_ && (this.C_.cancel(), this.C_ = null);
  }
  /** Cancels the health check delayed operation. */
  U_() {
    this.v_ && (this.v_.cancel(), this.v_ = null);
  }
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  close(e, t) {
    return __async(this, null, function* () {
      this.q_(), this.U_(), this.M_.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
      // underlying stream), guaranteeing they won't execute.
      this.D_++, 4 !== e ? (
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.M_.reset()
      ) : t && t.code === D.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        (__PRIVATE_logError(t.toString()), __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."), this.M_.g_())
      ) : t && t.code === D.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
      // happen since both Auth and AppCheck ensure a sufficient TTL when we
      // request a token. If a user manually resets their system clock this can
      // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
      // before we received the first message and we need to invalidate the token
      // to ensure that we fetch a new token.
      (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
      null !== this.stream && (this.W_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
      // inhibit backoff or otherwise manipulate the state in its non-started state.
      this.state = e, // Notify the listener that the stream closed.
      yield this.listener.t_(t);
    });
  }
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  W_() {
  }
  auth() {
    this.state = 1;
    const e = this.Q_(this.D_), t = this.D_;
    Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([e2, n]) => {
      this.D_ === t && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      this.G_(e2, n);
    }, (t2) => {
      e(() => {
        const e2 = new FirestoreError(D.UNKNOWN, "Fetching auth token failed: " + t2.message);
        return this.z_(e2);
      });
    });
  }
  G_(e, t) {
    const n = this.Q_(this.D_);
    this.stream = this.j_(e, t), this.stream.Zo(() => {
      n(() => this.listener.Zo());
    }), this.stream.Yo(() => {
      n(() => (this.state = 2, this.v_ = this.Ci.enqueueAfterDelay(this.b_, 1e4, () => (this.O_() && (this.state = 3), Promise.resolve())), this.listener.Yo()));
    }), this.stream.t_((e2) => {
      n(() => this.z_(e2));
    }), this.stream.onMessage((e2) => {
      n(() => 1 == ++this.F_ ? this.J_(e2) : this.onNext(e2));
    });
  }
  N_() {
    this.state = 5, this.M_.p_(() => __async(this, null, function* () {
      this.state = 0, this.start();
    }));
  }
  // Visible for tests
  z_(e) {
    return __PRIVATE_logDebug(zt, `close with error: ${e}`), this.stream = null, this.close(4, e);
  }
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  Q_(e) {
    return (t) => {
      this.Ci.enqueueAndForget(() => this.D_ === e ? t() : (__PRIVATE_logDebug(zt, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
    };
  }
};
var __PRIVATE_PersistentListenStream = class extends __PRIVATE_PersistentStream {
  constructor(e, t, n, r, i, s) {
    super(e, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
  }
  j_(e, t) {
    return this.connection.T_("Listen", e, t);
  }
  J_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.M_.reset();
    const t = __PRIVATE_fromWatchChange(this.serializer, e), n = (function __PRIVATE_versionFromListenResponse(e2) {
      if (!("targetChange" in e2)) return SnapshotVersion.min();
      const t2 = e2.targetChange;
      return t2.targetIds && t2.targetIds.length ? SnapshotVersion.min() : t2.readTime ? __PRIVATE_fromVersion(t2.readTime) : SnapshotVersion.min();
    })(e);
    return this.listener.H_(t, n);
  }
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  Z_(e) {
    const t = {};
    t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.addTarget = (function __PRIVATE_toTarget(e2, t2) {
      let n2;
      const r = t2.target;
      if (n2 = __PRIVATE_targetIsDocumentTarget(r) ? {
        documents: __PRIVATE_toDocumentsTarget(e2, r)
      } : {
        query: __PRIVATE_toQueryTarget(e2, r).ft
      }, n2.targetId = t2.targetId, t2.resumeToken.approximateByteSize() > 0) {
        n2.resumeToken = __PRIVATE_toBytes(e2, t2.resumeToken);
        const r2 = __PRIVATE_toInt32Proto(e2, t2.expectedCount);
        null !== r2 && (n2.expectedCount = r2);
      } else if (t2.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
        n2.readTime = toTimestamp(e2, t2.snapshotVersion.toTimestamp());
        const r2 = __PRIVATE_toInt32Proto(e2, t2.expectedCount);
        null !== r2 && (n2.expectedCount = r2);
      }
      return n2;
    })(this.serializer, e);
    const n = __PRIVATE_toListenRequestLabels(this.serializer, e);
    n && (t.labels = n), this.K_(t);
  }
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  X_(e) {
    const t = {};
    t.database = __PRIVATE_getEncodedDatabaseId(this.serializer), t.removeTarget = e, this.K_(t);
  }
};
var __PRIVATE_PersistentWriteStream = class extends __PRIVATE_PersistentStream {
  constructor(e, t, n, r, i, s) {
    super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r, s), this.serializer = i;
  }
  /**
   * Tracks whether or not a handshake has been successfully exchanged and
   * the stream is ready to accept mutations.
   */
  get Y_() {
    return this.F_ > 0;
  }
  // Override of PersistentStream.start
  start() {
    this.lastStreamToken = void 0, super.start();
  }
  W_() {
    this.Y_ && this.ea([]);
  }
  j_(e, t) {
    return this.connection.T_("Write", e, t);
  }
  J_(e) {
    return __PRIVATE_hardAssert(!!e.streamToken, 31322), this.lastStreamToken = e.streamToken, // The first response is always the handshake response
    __PRIVATE_hardAssert(!e.writeResults || 0 === e.writeResults.length, 55816), this.listener.ta();
  }
  onNext(e) {
    __PRIVATE_hardAssert(!!e.streamToken, 12678), this.lastStreamToken = e.streamToken, // A successful first write response means the stream is healthy,
    // Note, that we could consider a successful handshake healthy, however,
    // the write itself might be causing an error we want to back off from.
    this.M_.reset();
    const t = __PRIVATE_fromWriteResults(e.writeResults, e.commitTime), n = __PRIVATE_fromVersion(e.commitTime);
    return this.listener.na(n, t);
  }
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  ra() {
    const e = {};
    e.database = __PRIVATE_getEncodedDatabaseId(this.serializer), this.K_(e);
  }
  /** Sends a group of mutations to the Firestore backend to apply. */
  ea(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((e2) => toMutation(this.serializer, e2))
    };
    this.K_(t);
  }
};
var Datastore = class {
};
var __PRIVATE_DatastoreImpl = class extends Datastore {
  constructor(e, t, n, r) {
    super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r, this.ia = false;
  }
  sa() {
    if (this.ia) throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Wo(e, t, n, r) {
    return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s]) => this.connection.Wo(e, __PRIVATE_toResourcePath(t, n), r, i, s)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  jo(e, t, n, r, i) {
    return this.sa(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.jo(e, __PRIVATE_toResourcePath(t, n), r, s, o, i)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
    });
  }
  terminate() {
    this.ia = true, this.connection.terminate();
  }
};
function __PRIVATE_newDatastore(e, t, n, r) {
  return new __PRIVATE_DatastoreImpl(e, t, n, r);
}
var __PRIVATE_OnlineStateTracker = class {
  constructor(e, t) {
    this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.oa = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this._a = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.aa = true;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  ua() {
    0 === this.oa && (this.ca(
      "Unknown"
      /* OnlineState.Unknown */
    ), this._a = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this._a = null, this.la("Backend didn't respond within 10 seconds."), this.ca(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  ha(e) {
    "Online" === this.state ? this.ca(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.oa++, this.oa >= 1 && (this.Pa(), this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.ca(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(e) {
    this.Pa(), this.oa = 0, "Online" === e && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.aa = false), this.ca(e);
  }
  ca(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e));
  }
  la(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.aa ? (__PRIVATE_logError(t), this.aa = false) : __PRIVATE_logDebug("OnlineStateTracker", t);
  }
  Pa() {
    null !== this._a && (this._a.cancel(), this._a = null);
  }
};
var jt = "RemoteStore";
var __PRIVATE_RemoteStoreImpl = class {
  constructor(e, t, n, r, i) {
    this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.Ta = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.Ia = /* @__PURE__ */ new Map(), this.Ea = /* @__PURE__ */ new Map(), this.Ra = /* @__PURE__ */ new Map(), this.Aa = new __PRIVATE_TargetIdGenerator(1e3), this.Va = new __PRIVATE_TargetIdGenerator(1001), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.da = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.ma = [], this.fa = i, this.fa.Mo((e2) => {
      n.enqueueAndForget(() => __async(this, null, function* () {
        __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug(jt, "Restarting streams for network reachability change."), yield (function __PRIVATE_restartNetwork(e3) {
          return __async(this, null, function* () {
            const t2 = __PRIVATE_debugCast(e3);
            t2.da.add(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield __PRIVATE_disableNetworkInternal(t2), t2.ga.set(
              "Unknown"
              /* OnlineState.Unknown */
            ), t2.da.delete(
              4
              /* OfflineCause.ConnectivityChange */
            ), yield __PRIVATE_enableNetworkInternal(t2);
          });
        })(this));
      }));
    }), this.ga = new __PRIVATE_OnlineStateTracker(n, r);
  }
};
function __PRIVATE_enableNetworkInternal(e) {
  return __async(this, null, function* () {
    if (__PRIVATE_canUseNetwork(e)) for (const t of e.ma) yield t(
      /* enabled= */
      true
    );
  });
}
function __PRIVATE_disableNetworkInternal(e) {
  return __async(this, null, function* () {
    for (const t of e.ma) yield t(
      /* enabled= */
      false
    );
  });
}
function __PRIVATE_getRemoteTargetId(e, t) {
  return e.Ea.get(t) || void 0;
}
function __PRIVATE_remoteStoreListen(e, t) {
  const n = __PRIVATE_debugCast(e), r = __PRIVATE_getRemoteTargetId(n, t.targetId);
  if (void 0 !== r && n.Ia.has(r)) return;
  const i = (
    /**
    * Generate a new remote target ID for the given SDK target ID.
    * Re-map the given SDK to the new remote ID.
    * Delete any mapping of the old remote ID, if given.
    * @param remoteStoreImpl
    * @param sdkTargetId
    * @return The new remote ID.
    */
    (function __PRIVATE_allocateRemoteTargetId(e2, t2) {
      const n2 = __PRIVATE_getRemoteTargetId(e2, t2);
      void 0 !== n2 && // If there was an existing remote target ID mapped to that SDK target ID, forget about the old remote ID.
      e2.Ra.delete(n2);
      const r2 = (function __PRIVATE_generateRemoteTargetId(e3, t3) {
        return t3 % 2 != 0 ? e3.Va.next() : e3.Aa.next();
      })(e2, t2);
      return e2.Ea.set(t2, r2), e2.Ra.set(r2, t2), r2;
    })(n, t.targetId)
  );
  __PRIVATE_logDebug(jt, "remoteStoreListen mapping SDK target ID to remote", t.targetId, i);
  const s = new TargetData(t.target, i, t.purpose, t.sequenceNumber, t.snapshotVersion, t.lastLimboFreeSnapshotVersion, t.resumeToken);
  n.Ia.set(i, s), __PRIVATE_shouldStartWatchStream(n) ? (
    // The listen will be sent in onWatchStreamOpen
    __PRIVATE_startWatchStream(n)
  ) : __PRIVATE_ensureWatchStream(n).O_() && __PRIVATE_sendWatchRequest(n, s);
}
function __PRIVATE_remoteStoreUnlisten(e, t) {
  const n = __PRIVATE_debugCast(e), r = __PRIVATE_ensureWatchStream(n), i = __PRIVATE_getRemoteTargetId(n, t);
  __PRIVATE_logDebug(jt, "remoteStoreUnlisten removing mapping of SDK target ID to remote", t, i), n.Ia.delete(i), n.Ea.delete(t), n.Ra.delete(i), r.O_() && __PRIVATE_sendUnwatchRequest(n, i), 0 === n.Ia.size && (r.O_() ? r.L_() : __PRIVATE_canUseNetwork(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.ga.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
function __PRIVATE_sendWatchRequest(e, t) {
  if (e.pa.$e(t.targetId), t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(SnapshotVersion.min()) > 0) {
    const n = e.Ra.get(t.targetId);
    if (void 0 === n)
      return void __PRIVATE_logDebug(jt, "SDK target ID not found for remote ID: " + t.targetId);
    const r = e.remoteSyncer.getRemoteKeysForTarget(n).size;
    t = t.withExpectedCount(r);
  }
  __PRIVATE_ensureWatchStream(e).Z_(t);
}
function __PRIVATE_sendUnwatchRequest(e, t) {
  e.pa.$e(t), __PRIVATE_ensureWatchStream(e).X_(t);
}
function __PRIVATE_startWatchStream(e) {
  e.pa = new __PRIVATE_WatchChangeAggregator({
    getRemoteKeysForTarget: (t) => {
      const n = e.Ra.get(t);
      return void 0 !== n ? e.remoteSyncer.getRemoteKeysForTarget(n) : __PRIVATE_documentKeySet();
    },
    At: (t) => e.Ia.get(t) || null,
    ht: () => e.datastore.serializer.databaseId
  }), __PRIVATE_ensureWatchStream(e).start(), e.ga.ua();
}
function __PRIVATE_shouldStartWatchStream(e) {
  return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWatchStream(e).x_() && e.Ia.size > 0;
}
function __PRIVATE_canUseNetwork(e) {
  return 0 === __PRIVATE_debugCast(e).da.size;
}
function __PRIVATE_cleanUpWatchStreamState(e) {
  e.pa = void 0;
}
function __PRIVATE_onWatchStreamConnected(e) {
  return __async(this, null, function* () {
    e.ga.set(
      "Online"
      /* OnlineState.Online */
    );
  });
}
function __PRIVATE_onWatchStreamOpen(e) {
  return __async(this, null, function* () {
    e.Ia.forEach((t, n) => {
      __PRIVATE_sendWatchRequest(e, t);
    });
  });
}
function __PRIVATE_onWatchStreamClose(e, t) {
  return __async(this, null, function* () {
    __PRIVATE_cleanUpWatchStreamState(e), // If we still need the watch stream, retry the connection.
    __PRIVATE_shouldStartWatchStream(e) ? (e.ga.ha(t), __PRIVATE_startWatchStream(e)) : (
      // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      e.ga.set(
        "Unknown"
        /* OnlineState.Unknown */
      )
    );
  });
}
function __PRIVATE_onWatchStreamChange(e, t, n) {
  return __async(this, null, function* () {
    if (
      // Mark the client as online since we got a message from the server
      e.ga.set(
        "Online"
        /* OnlineState.Online */
      ), t instanceof __PRIVATE_WatchTargetChange && 2 === t.state && t.cause
    )
      try {
        yield (function __PRIVATE_handleTargetError(e2, t2) {
          return __async(this, null, function* () {
            const n2 = t2.cause;
            for (const r of t2.targetIds) {
              if (e2.Ia.has(r)) {
                const t3 = e2.Ra.get(r);
                void 0 !== t3 && (yield e2.remoteSyncer.rejectListen(t3, n2), e2.Ea.delete(t3), e2.Ra.delete(r)), e2.Ia.delete(r);
              }
              e2.pa.removeTarget(r);
            }
          });
        })(e, t);
      } catch (n2) {
        __PRIVATE_logDebug(jt, "Failed to remove targets %s: %s ", t.targetIds.join(","), n2), yield __PRIVATE_disableNetworkUntilRecovery(e, n2);
      }
    else if (t instanceof __PRIVATE_DocumentWatchChange ? e.pa.Xe(t) : t instanceof __PRIVATE_ExistenceFilterChange ? e.pa.st(t) : e.pa.tt(t), !n.isEqual(SnapshotVersion.min())) try {
      const t2 = yield __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);
      n.compareTo(t2) >= 0 && // We have received a target change with a global snapshot if the snapshot
      // version is not equal to SnapshotVersion.min().
      /**
      * Takes a batch of changes from the Datastore, repackages them as a
      * RemoteEvent, and passes that on to the listener, which is typically the
      * SyncEngine.
      */
      (yield (function __PRIVATE_raiseWatchSnapshot(e2, t3) {
        const n2 = e2.pa.Tt(t3);
        n2.targetChanges.forEach((n3, r2) => {
          if (n3.resumeToken.approximateByteSize() > 0) {
            const i = e2.Ia.get(r2);
            i && e2.Ia.set(r2, i.withResumeToken(n3.resumeToken, t3));
          }
        }), // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n2.targetMismatches.forEach((t4, n3) => {
          const r2 = e2.Ia.get(t4);
          if (!r2)
            return;
          e2.Ia.set(t4, r2.withResumeToken(ByteString.EMPTY_BYTE_STRING, r2.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
          // deliberately don't send a resume token so that we get a full update.
          __PRIVATE_sendUnwatchRequest(e2, t4);
          const i = new TargetData(r2.target, t4, n3, r2.sequenceNumber);
          __PRIVATE_sendWatchRequest(e2, i);
        });
        const r = (
          /**
          * Convert a RemoteEvent with remote IDs to a RemoteEvent with
          * SDK IDs and dropped updates
          * for any targets we no longer track.
          *
          * @param remoteStoreImpl
          * @param remoteEvent
          * @return a new RemoteEvent with SDK IDs and dropped updates
          * for any targets we no longer track.
          */
          (function __PRIVATE_toSdkRemoteEvent(e3, t4) {
            const n3 = /* @__PURE__ */ new Map();
            t4.targetChanges.forEach((t5, r3) => {
              const i = e3.Ra.get(r3);
              void 0 !== i && n3.set(i, t5);
            });
            let r2 = new SortedMap(__PRIVATE_primitiveComparator);
            return t4.targetMismatches.forEach((t5, n4) => {
              const i = e3.Ra.get(t5);
              void 0 !== i && (r2 = r2.insert(i, n4));
            }), new RemoteEvent(t4.snapshotVersion, n3, r2, t4.documentUpdates, t4.resolvedLimboDocuments);
          })(e2, n2)
        );
        return e2.remoteSyncer.applyRemoteEvent(r);
      })(e, n));
    } catch (t2) {
      __PRIVATE_logDebug(jt, "Failed to raise snapshot:", t2), yield __PRIVATE_disableNetworkUntilRecovery(e, t2);
    }
  });
}
function __PRIVATE_disableNetworkUntilRecovery(e, t, n) {
  return __async(this, null, function* () {
    if (!__PRIVATE_isIndexedDbTransactionError(t)) throw t;
    e.da.add(
      1
      /* OfflineCause.IndexedDbFailed */
    ), // Disable network and raise offline snapshots
    yield __PRIVATE_disableNetworkInternal(e), e.ga.set(
      "Offline"
      /* OnlineState.Offline */
    ), n || // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    (n = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)), // Probe IndexedDB periodically and re-enable network
    e.asyncQueue.enqueueRetryable(() => __async(null, null, function* () {
      __PRIVATE_logDebug(jt, "Retrying IndexedDB access"), yield n(), e.da.delete(
        1
        /* OfflineCause.IndexedDbFailed */
      ), yield __PRIVATE_enableNetworkInternal(e);
    }));
  });
}
function __PRIVATE_executeWithRecovery(e, t) {
  return t().catch((n) => __PRIVATE_disableNetworkUntilRecovery(e, n, t));
}
function __PRIVATE_fillWritePipeline(e) {
  return __async(this, null, function* () {
    const t = __PRIVATE_debugCast(e), n = __PRIVATE_ensureWriteStream(t);
    let r = t.Ta.length > 0 ? t.Ta[t.Ta.length - 1].batchId : q;
    for (; __PRIVATE_canAddToWritePipeline(t); ) try {
      const e2 = yield __PRIVATE_localStoreGetNextMutationBatch(t.localStore, r);
      if (null === e2) {
        0 === t.Ta.length && n.L_();
        break;
      }
      r = e2.batchId, __PRIVATE_addToWritePipeline(t, e2);
    } catch (e2) {
      yield __PRIVATE_disableNetworkUntilRecovery(t, e2);
    }
    __PRIVATE_shouldStartWriteStream(t) && __PRIVATE_startWriteStream(t);
  });
}
function __PRIVATE_canAddToWritePipeline(e) {
  return __PRIVATE_canUseNetwork(e) && e.Ta.length < 10;
}
function __PRIVATE_addToWritePipeline(e, t) {
  e.Ta.push(t);
  const n = __PRIVATE_ensureWriteStream(e);
  n.O_() && n.Y_ && n.ea(t.mutations);
}
function __PRIVATE_shouldStartWriteStream(e) {
  return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWriteStream(e).x_() && e.Ta.length > 0;
}
function __PRIVATE_startWriteStream(e) {
  __PRIVATE_ensureWriteStream(e).start();
}
function __PRIVATE_onWriteStreamOpen(e) {
  return __async(this, null, function* () {
    __PRIVATE_ensureWriteStream(e).ra();
  });
}
function __PRIVATE_onWriteHandshakeComplete(e) {
  return __async(this, null, function* () {
    const t = __PRIVATE_ensureWriteStream(e);
    for (const n of e.Ta) t.ea(n.mutations);
  });
}
function __PRIVATE_onMutationResult(e, t, n) {
  return __async(this, null, function* () {
    const r = e.Ta.shift(), i = MutationBatchResult.from(r, t, n);
    yield __PRIVATE_executeWithRecovery(e, () => e.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
    // slot has freed up.
    yield __PRIVATE_fillWritePipeline(e);
  });
}
function __PRIVATE_onWriteStreamClose(e, t) {
  return __async(this, null, function* () {
    t && __PRIVATE_ensureWriteStream(e).Y_ && // This error affects the actual write.
    (yield (function __PRIVATE_handleWriteError(e2, t2) {
      return __async(this, null, function* () {
        if ((function __PRIVATE_isPermanentWriteError(e3) {
          return __PRIVATE_isPermanentError(e3) && e3 !== D.ABORTED;
        })(t2.code)) {
          const n = e2.Ta.shift();
          __PRIVATE_ensureWriteStream(e2).B_(), yield __PRIVATE_executeWithRecovery(e2, () => e2.remoteSyncer.rejectFailedWrite(n.batchId, t2)), // It's possible that with the completion of this mutation
          // another slot has freed up.
          yield __PRIVATE_fillWritePipeline(e2);
        }
      });
    })(e, t)), // The write stream might have been started by refilling the write
    // pipeline for failed writes
    __PRIVATE_shouldStartWriteStream(e) && __PRIVATE_startWriteStream(e);
  });
}
function __PRIVATE_remoteStoreHandleCredentialChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    n.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug(jt, "RemoteStore received new credentials");
    const r = __PRIVATE_canUseNetwork(n);
    n.da.add(
      3
      /* OfflineCause.CredentialChange */
    ), yield __PRIVATE_disableNetworkInternal(n), r && // Don't set the network status to Unknown if we are offline.
    n.ga.set(
      "Unknown"
      /* OnlineState.Unknown */
    ), yield n.remoteSyncer.handleCredentialChange(t), n.da.delete(
      3
      /* OfflineCause.CredentialChange */
    ), yield __PRIVATE_enableNetworkInternal(n);
  });
}
function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    t ? (n.da.delete(
      2
      /* OfflineCause.IsSecondary */
    ), yield __PRIVATE_enableNetworkInternal(n)) : t || (n.da.add(
      2
      /* OfflineCause.IsSecondary */
    ), yield __PRIVATE_disableNetworkInternal(n), n.ga.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  });
}
function __PRIVATE_ensureWatchStream(e) {
  return e.ya || // Create stream (but note that it is not started yet).
  (e.ya = (function __PRIVATE_newPersistentWatchStream(e2, t, n) {
    const r = __PRIVATE_debugCast(e2);
    return r.sa(), new __PRIVATE_PersistentListenStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
  })(e.datastore, e.asyncQueue, {
    Zo: __PRIVATE_onWatchStreamConnected.bind(null, e),
    Yo: __PRIVATE_onWatchStreamOpen.bind(null, e),
    t_: __PRIVATE_onWatchStreamClose.bind(null, e),
    H_: __PRIVATE_onWatchStreamChange.bind(null, e)
  }), e.ma.push((t) => __async(null, null, function* () {
    t ? (e.ya.B_(), __PRIVATE_shouldStartWatchStream(e) ? __PRIVATE_startWatchStream(e) : e.ga.set(
      "Unknown"
      /* OnlineState.Unknown */
    )) : (yield e.ya.stop(), __PRIVATE_cleanUpWatchStreamState(e));
  }))), e.ya;
}
function __PRIVATE_ensureWriteStream(e) {
  return e.wa || // Create stream (but note that it is not started yet).
  (e.wa = (function __PRIVATE_newPersistentWriteStream(e2, t, n) {
    const r = __PRIVATE_debugCast(e2);
    return r.sa(), new __PRIVATE_PersistentWriteStream(t, r.connection, r.authCredentials, r.appCheckCredentials, r.serializer, n);
  })(e.datastore, e.asyncQueue, {
    Zo: () => Promise.resolve(),
    Yo: __PRIVATE_onWriteStreamOpen.bind(null, e),
    t_: __PRIVATE_onWriteStreamClose.bind(null, e),
    ta: __PRIVATE_onWriteHandshakeComplete.bind(null, e),
    na: __PRIVATE_onMutationResult.bind(null, e)
  }), e.ma.push((t) => __async(null, null, function* () {
    t ? (e.wa.B_(), // This will start the write stream if necessary.
    yield __PRIVATE_fillWritePipeline(e)) : (yield e.wa.stop(), e.Ta.length > 0 && (__PRIVATE_logDebug(jt, `Stopping write stream with ${e.Ta.length} pending writes`), e.Ta = []));
  }))), e.wa;
}
var DelayedOperation = class _DelayedOperation {
  constructor(e, t, n, r, i) {
    this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((e2) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(e, t, n, r, i) {
    const s = Date.now() + n, o = new _DelayedOperation(e, t, s, r, i);
    return o.start(n), o;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(e) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(D.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
function __PRIVATE_wrapInUserErrorIfRecoverable(e, t) {
  if (__PRIVATE_logError("AsyncQueue", `${t}: ${e}`), __PRIVATE_isIndexedDbTransactionError(e)) return new FirestoreError(D.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
var DocumentSet = class _DocumentSet {
  /**
   * Returns an empty copy of the existing DocumentSet, using the same
   * comparator.
   */
  static emptySet(e) {
    return new _DocumentSet(e.comparator);
  }
  /** The default ordering is by key if the comparator is omitted */
  constructor(e) {
    this.comparator = e ? (t, n) => e(t, n) || DocumentKey.comparator(t.key, n.key) : (e2, t) => DocumentKey.comparator(e2.key, t.key), this.keyedMap = documentMap(), this.sortedSet = new SortedMap(this.comparator);
  }
  has(e) {
    return null != this.keyedMap.get(e);
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  /** Iterates documents in order defined by "comparator" */
  forEach(e) {
    this.sortedSet.inorderTraversal((t, n) => (e(t), false));
  }
  /** Inserts or updates a document with the same key */
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  /** Deletes a document with a given key */
  delete(e) {
    const t = this.get(e);
    return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
  }
  isEqual(e) {
    if (!(e instanceof _DocumentSet)) return false;
    if (this.size !== e.size) return false;
    const t = this.sortedSet.getIterator(), n = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const e2 = t.getNext().key, r = n.getNext().key;
      if (!e2.isEqual(r)) return false;
    }
    return true;
  }
  toString() {
    const e = [];
    return this.forEach((t) => {
      e.push(t.toString());
    }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)";
  }
  copy(e, t) {
    const n = new _DocumentSet();
    return n.comparator = this.comparator, n.keyedMap = e, n.sortedSet = t, n;
  }
};
var __PRIVATE_DocumentChangeSet = class {
  constructor() {
    this.Sa = new SortedMap(DocumentKey.comparator);
  }
  track(e) {
    const t = e.doc.key, n = this.Sa.get(t);
    n ? (
      // Merge the new change with the existing change.
      0 !== e.type && 3 === n.type ? this.Sa = this.Sa.insert(t, e) : 3 === e.type && 1 !== n.type ? this.Sa = this.Sa.insert(t, {
        type: n.type,
        doc: e.doc
      }) : 2 === e.type && 2 === n.type ? this.Sa = this.Sa.insert(t, {
        type: 2,
        doc: e.doc
      }) : 2 === e.type && 0 === n.type ? this.Sa = this.Sa.insert(t, {
        type: 0,
        doc: e.doc
      }) : 1 === e.type && 0 === n.type ? this.Sa = this.Sa.remove(t) : 1 === e.type && 2 === n.type ? this.Sa = this.Sa.insert(t, {
        type: 1,
        doc: n.doc
      }) : 0 === e.type && 1 === n.type ? this.Sa = this.Sa.insert(t, {
        type: 2,
        doc: e.doc
      }) : (
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        fail(63341, {
          Vt: e,
          ba: n
        })
      )
    ) : this.Sa = this.Sa.insert(t, e);
  }
  Da() {
    const e = [];
    return this.Sa.inorderTraversal((t, n) => {
      e.push(n);
    }), e;
  }
};
var ViewSnapshot = class _ViewSnapshot {
  constructor(e, t, n, r, i, s, o, _, a) {
    this.query = e, this.docs = t, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = s, this.syncStateChanged = o, this.excludesMetadataChanges = _, this.hasCachedResults = a;
  }
  /** Returns a view snapshot as if all documents in the snapshot were added. */
  static fromInitialDocuments(e, t, n, r, i) {
    const s = [];
    return t.forEach((e2) => {
      s.push({
        type: 0,
        doc: e2
      });
    }), new _ViewSnapshot(
      e,
      t,
      DocumentSet.emptySet(t),
      s,
      n,
      r,
      /* syncStateChanged= */
      true,
      /* excludesMetadataChanges= */
      false,
      i
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (!(this.fromCache === e.fromCache && this.hasCachedResults === e.hasCachedResults && this.syncStateChanged === e.syncStateChanged && this.mutatedKeys.isEqual(e.mutatedKeys) && __PRIVATE_queryEquals(this.query, e.query) && this.docs.isEqual(e.docs) && this.oldDocs.isEqual(e.oldDocs))) return false;
    const t = this.docChanges, n = e.docChanges;
    if (t.length !== n.length) return false;
    for (let e2 = 0; e2 < t.length; e2++) if (t[e2].type !== n[e2].type || !t[e2].doc.isEqual(n[e2].doc)) return false;
    return true;
  }
};
var __PRIVATE_QueryListenersInfo = class {
  constructor() {
    this.Ca = void 0, this.va = [];
  }
  // Helper methods that checks if the query has listeners that listening to remote store
  Fa() {
    return this.va.some((e) => e.Ma());
  }
};
var __PRIVATE_EventManagerImpl = class {
  constructor() {
    this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.xa = /* @__PURE__ */ new Set();
  }
  terminate() {
    !(function __PRIVATE_errorAllTargets(e, t) {
      const n = __PRIVATE_debugCast(e), r = n.queries;
      n.queries = __PRIVATE_newQueriesObjectMap(), r.forEach((e2, n2) => {
        for (const e3 of n2.va) e3.onError(t);
      });
    })(this, new FirestoreError(D.ABORTED, "Firestore shutting down"));
  }
};
function __PRIVATE_newQueriesObjectMap() {
  return new ObjectMap((e) => __PRIVATE_canonifyQuery(e), __PRIVATE_queryEquals);
}
function __PRIVATE_eventManagerListen(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    let r = 3;
    const i = t.query;
    let s = n.queries.get(i);
    s ? !s.Fa() && t.Ma() && // Query has been listening to local cache, and tries to add a new listener sourced from watch.
    (r = 2) : (s = new __PRIVATE_QueryListenersInfo(), r = t.Ma() ? 0 : 1);
    try {
      switch (r) {
        case 0:
          s.Ca = yield n.onListen(
            i,
            /** enableRemoteListen= */
            true
          );
          break;
        case 1:
          s.Ca = yield n.onListen(
            i,
            /** enableRemoteListen= */
            false
          );
          break;
        case 2:
          yield n.onFirstRemoteStoreListen(i);
      }
    } catch (e2) {
      const n2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, `Initialization of query '${__PRIVATE_stringifyQuery(t.query)}' failed`);
      return void t.onError(n2);
    }
    if (n.queries.set(i, s), s.va.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
    t.Oa(n.onlineState), s.Ca) {
      t.Na(s.Ca) && __PRIVATE_raiseSnapshotsInSyncEvent(n);
    }
  });
}
function __PRIVATE_eventManagerUnlisten(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = t.query;
    let i = 3;
    const s = n.queries.get(r);
    if (s) {
      const e2 = s.va.indexOf(t);
      e2 >= 0 && (s.va.splice(e2, 1), 0 === s.va.length ? i = t.Ma() ? 0 : 1 : !s.Fa() && t.Ma() && // The removed listener is the last one that sourced from watch.
      (i = 2));
    }
    switch (i) {
      case 0:
        return n.queries.delete(r), n.onUnlisten(
          r,
          /** disableRemoteListen= */
          true
        );
      case 1:
        return n.queries.delete(r), n.onUnlisten(
          r,
          /** disableRemoteListen= */
          false
        );
      case 2:
        return n.onLastRemoteStoreUnlisten(r);
      default:
        return;
    }
  });
}
function __PRIVATE_eventManagerOnWatchChange(e, t) {
  const n = __PRIVATE_debugCast(e);
  let r = false;
  for (const e2 of t) {
    const t2 = e2.query, i = n.queries.get(t2);
    if (i) {
      for (const t3 of i.va) t3.Na(e2) && (r = true);
      i.Ca = e2;
    }
  }
  r && __PRIVATE_raiseSnapshotsInSyncEvent(n);
}
function __PRIVATE_eventManagerOnWatchError(e, t, n) {
  const r = __PRIVATE_debugCast(e), i = r.queries.get(t);
  if (i) for (const e2 of i.va) e2.onError(n);
  r.queries.delete(t);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
  e.xa.forEach((e2) => {
    e2.next();
  });
}
var Ht;
var Jt;
(Jt = Ht || (Ht = {})).Ba = "default", /** Listen to changes in cache only */
Jt.Cache = "cache";
var __PRIVATE_QueryListener = class {
  constructor(e, t, n) {
    this.query = e, this.La = t, /**
     * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
     * observer. This flag is set to true once we've actually raised an event.
     */
    this.ka = false, this.Ka = null, this.onlineState = "Unknown", this.options = n || {};
  }
  /**
   * Applies the new ViewSnapshot to this listener, raising a user-facing event
   * if applicable (depending on what changed, whether the user has opted into
   * metadata-only changes, etc.). Returns true if a user-facing event was
   * indeed raised.
   */
  Na(e) {
    if (!this.options.includeMetadataChanges) {
      const t2 = [];
      for (const n of e.docChanges) 3 !== n.type && t2.push(n);
      e = new ViewSnapshot(
        e.query,
        e.docs,
        e.oldDocs,
        t2,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        /* excludesMetadataChanges= */
        true,
        e.hasCachedResults
      );
    }
    let t = false;
    return this.ka ? this.qa(e) && (this.La.next(e), t = true) : this.Ua(e, this.onlineState) && (this.$a(e), t = true), this.Ka = e, t;
  }
  onError(e) {
    this.La.error(e);
  }
  /** Returns whether a snapshot was raised. */
  Oa(e) {
    this.onlineState = e;
    let t = false;
    return this.Ka && !this.ka && this.Ua(this.Ka, e) && (this.$a(this.Ka), t = true), t;
  }
  Ua(e, t) {
    if (!e.fromCache) return true;
    if (!this.Ma()) return true;
    const n = "Offline" !== t;
    return (!this.options.Wa || !n) && (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t);
  }
  qa(e) {
    if (e.docChanges.length > 0) return true;
    const t = this.Ka && this.Ka.hasPendingWrites !== e.hasPendingWrites;
    return !(!e.syncStateChanged && !t) && true === this.options.includeMetadataChanges;
  }
  $a(e) {
    e = ViewSnapshot.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults), this.ka = true, this.La.next(e);
  }
  Ma() {
    return this.options.source !== Ht.Cache;
  }
};
var __PRIVATE_AddedLimboDocument = class {
  constructor(e) {
    this.key = e;
  }
};
var __PRIVATE_RemovedLimboDocument = class {
  constructor(e) {
    this.key = e;
  }
};
var __PRIVATE_View = class {
  constructor(e, t) {
    this.query = e, this.tu = t, this.nu = null, this.hasCachedResults = false, /**
     * A flag whether the view is current with the backend. A view is considered
     * current after it has seen the current flag from the backend and did not
     * lose consistency within the watch stream (e.g. because of an existence
     * filter mismatch).
     */
    this.current = false, /** Documents in the view but not in the remote target */
    this.ru = __PRIVATE_documentKeySet(), /** Document Keys that have local changes */
    this.mutatedKeys = __PRIVATE_documentKeySet(), this.iu = __PRIVATE_newQueryComparator(e), this.su = new DocumentSet(this.iu);
  }
  /**
   * The set of remote documents that the server has told us belongs to the target associated with
   * this view.
   */
  get ou() {
    return this.tu;
  }
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  _u(e, t) {
    const n = t ? t.au : new __PRIVATE_DocumentChangeSet(), r = t ? t.su : this.su;
    let i = t ? t.mutatedKeys : this.mutatedKeys, s = r, o = false;
    const _ = "F" === this.query.limitType && r.size === this.query.limit ? r.last() : null, a = "L" === this.query.limitType && r.size === this.query.limit ? r.first() : null;
    if (e.inorderTraversal((e2, t2) => {
      const u = r.get(e2), c = __PRIVATE_queryMatches(this.query, t2) ? t2 : null, l = !!u && this.mutatedKeys.has(u.key), h = !!c && (c.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      this.mutatedKeys.has(c.key) && c.hasCommittedMutations);
      let P = false;
      if (u && c) {
        u.data.isEqual(c.data) ? l !== h && (n.track({
          type: 3,
          doc: c
        }), P = true) : this.uu(u, c) || (n.track({
          type: 2,
          doc: c
        }), P = true, (_ && this.iu(c, _) > 0 || a && this.iu(c, a) < 0) && // This doc moved from inside the limit to outside the limit.
        // That means there may be some other doc in the local cache
        // that should be included instead.
        (o = true));
      } else !u && c ? (n.track({
        type: 0,
        doc: c
      }), P = true) : u && !c && (n.track({
        type: 1,
        doc: u
      }), P = true, (_ || a) && // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      (o = true));
      P && (c ? (s = s.add(c), i = h ? i.add(e2) : i.delete(e2)) : (s = s.delete(e2), i = i.delete(e2)));
    }), null !== this.query.limit) for (; s.size > this.query.limit; ) {
      const e2 = "F" === this.query.limitType ? s.last() : s.first();
      s = s.delete(e2.key), i = i.delete(e2.key), n.track({
        type: 1,
        doc: e2
      });
    }
    return {
      su: s,
      au: n,
      bs: o,
      mutatedKeys: i
    };
  }
  uu(e, t) {
    return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
  }
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param limboResolutionEnabled - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @param targetIsPendingReset - Whether the target is pending to reset due to
   *        existence filter mismatch. If not explicitly specified, it is treated
   *        equivalently to `false`.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  applyChanges(e, t, n, r) {
    const i = this.su;
    this.su = e.su, this.mutatedKeys = e.mutatedKeys;
    const s = e.au.Da();
    s.sort((e2, t2) => (function __PRIVATE_compareChangeType(e3, t3) {
      const order = (e4) => {
        switch (e4) {
          case 0:
            return 1;
          case 2:
          case 3:
            return 2;
          case 1:
            return 0;
          default:
            return fail(20277, {
              Vt: e4
            });
        }
      };
      return order(e3) - order(t3);
    })(e2.type, t2.type) || this.iu(e2.doc, t2.doc)), this.cu(n), r = r ?? false;
    const o = t && !r ? this.lu() : [], _ = 0 === this.ru.size && this.current && !r ? 1 : 0, a = _ !== this.nu;
    if (this.nu = _, 0 !== s.length || a) {
      return {
        snapshot: new ViewSnapshot(
          this.query,
          e.su,
          i,
          s,
          e.mutatedKeys,
          0 === _,
          a,
          /* excludesMetadataChanges= */
          false,
          !!n && n.resumeToken.approximateByteSize() > 0
        ),
        hu: o
      };
    }
    return {
      hu: o
    };
  }
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  Oa(e) {
    return this.current && "Offline" === e ? (
      // If we're offline, set `current` to false and then call applyChanges()
      // to refresh our syncState and generate a ViewChange as appropriate. We
      // are guaranteed to get a new TargetChange that sets `current` back to
      // true once the client is back online.
      (this.current = false, this.applyChanges(
        {
          su: this.su,
          au: new __PRIVATE_DocumentChangeSet(),
          mutatedKeys: this.mutatedKeys,
          bs: false
        },
        /* limboResolutionEnabled= */
        false
      ))
    ) : {
      hu: []
    };
  }
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  Pu(e) {
    return !this.tu.has(e) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.su.has(e) && !this.su.get(e).hasLocalMutations;
  }
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  cu(e) {
    e && (e.addedDocuments.forEach((e2) => this.tu = this.tu.add(e2)), e.modifiedDocuments.forEach((e2) => {
    }), e.removedDocuments.forEach((e2) => this.tu = this.tu.delete(e2)), this.current = e.current);
  }
  lu() {
    if (!this.current) return [];
    const e = this.ru;
    this.ru = __PRIVATE_documentKeySet(), this.su.forEach((e2) => {
      this.Pu(e2.key) && (this.ru = this.ru.add(e2.key));
    });
    const t = [];
    return e.forEach((e2) => {
      this.ru.has(e2) || t.push(new __PRIVATE_RemovedLimboDocument(e2));
    }), this.ru.forEach((n) => {
      e.has(n) || t.push(new __PRIVATE_AddedLimboDocument(n));
    }), t;
  }
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  Tu(e) {
    this.tu = e.ks, this.ru = __PRIVATE_documentKeySet();
    const t = this._u(e.documents);
    return this.applyChanges(
      t,
      /* limboResolutionEnabled= */
      true
    );
  }
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  Iu() {
    return ViewSnapshot.fromInitialDocuments(this.query, this.su, this.mutatedKeys, 0 === this.nu, this.hasCachedResults);
  }
};
var Zt = "SyncEngine";
var __PRIVATE_QueryView = class {
  constructor(e, t, n) {
    this.query = e, this.targetId = t, this.view = n;
  }
};
var LimboResolution = class {
  constructor(e) {
    this.key = e, /**
     * Set to true once we've received a document. This is used in
     * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
     * decide whether it needs to manufacture a delete event for the target once
     * the target is CURRENT.
     */
    this.Eu = false;
  }
};
var __PRIVATE_SyncEngineImpl = class {
  constructor(e, t, n, r, i, s) {
    this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = s, this.Ru = {}, this.Au = new ObjectMap((e2) => __PRIVATE_canonifyQuery(e2), __PRIVATE_queryEquals), this.Vu = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.du = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.mu = new SortedMap(DocumentKey.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.fu = /* @__PURE__ */ new Map(), this.gu = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.pu = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.yu = /* @__PURE__ */ new Map(), this.wu = __PRIVATE_TargetIdGenerator.ar(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Su = void 0;
  }
  get isPrimaryClient() {
    return true === this.Su;
  }
};
function __PRIVATE_syncEngineListen(e, t, n = true) {
  return __async(this, null, function* () {
    const r = __PRIVATE_ensureWatchCallbacks(e);
    let i;
    const s = r.Au.get(t);
    return s ? (
      // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
      // already exists when EventManager calls us for the first time. This
      // happens when the primary tab is already listening to this query on
      // behalf of another tab and the user of the primary also starts listening
      // to the query. EventManager will not have an assigned target ID in this
      // case and calls `listen` to obtain this ID.
      (r.sharedClientState.addLocalQueryTarget(s.targetId), i = s.view.Iu())
    ) : i = yield __PRIVATE_allocateTargetAndMaybeListen(
      r,
      t,
      n,
      /** shouldInitializeView= */
      true
    ), i;
  });
}
function __PRIVATE_triggerRemoteStoreListen(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_ensureWatchCallbacks(e);
    yield __PRIVATE_allocateTargetAndMaybeListen(
      n,
      t,
      /** shouldListenToRemote= */
      true,
      /** shouldInitializeView= */
      false
    );
  });
}
function __PRIVATE_allocateTargetAndMaybeListen(e, t, n, r) {
  return __async(this, null, function* () {
    const i = yield __PRIVATE_localStoreAllocateTarget(e.localStore, __PRIVATE_queryToTarget(t)), s = i.targetId, o = e.sharedClientState.addLocalQueryTarget(s, n);
    let _;
    return r && (_ = yield __PRIVATE_initializeViewAndComputeSnapshot(e, t, s, "current" === o, i.resumeToken)), e.isPrimaryClient && n && __PRIVATE_remoteStoreListen(e.remoteStore, i), _;
  });
}
function __PRIVATE_initializeViewAndComputeSnapshot(e, t, n, r, i) {
  return __async(this, null, function* () {
    e.bu = (t2, n2, r2) => (function __PRIVATE_applyDocChanges(e2, t3, n3, r3) {
      return __async(this, null, function* () {
        let i2 = t3.view._u(n3);
        i2.bs && // The query has a limit and some docs were removed, so we need
        // to re-run the query against the local store to make sure we
        // didn't lose any good docs that had been past the limit.
        (i2 = yield __PRIVATE_localStoreExecuteQuery(
          e2.localStore,
          t3.query,
          /* usePreviousResults= */
          false
        ).then(({
          documents: e3
        }) => t3.view._u(e3, i2)));
        const s2 = r3 && r3.targetChanges.get(t3.targetId), o2 = r3 && null != r3.targetMismatches.get(t3.targetId), _2 = t3.view.applyChanges(
          i2,
          /* limboResolutionEnabled= */
          e2.isPrimaryClient,
          s2,
          o2
        );
        return __PRIVATE_updateTrackedLimbos(e2, t3.targetId, _2.hu), _2.snapshot;
      });
    })(e, t2, n2, r2);
    const s = yield __PRIVATE_localStoreExecuteQuery(
      e.localStore,
      t,
      /* usePreviousResults= */
      true
    ), o = new __PRIVATE_View(t, s.ks), _ = o._u(s.documents), a = TargetChange.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline" !== e.onlineState, i), u = o.applyChanges(
      _,
      /* limboResolutionEnabled= */
      e.isPrimaryClient,
      a
    );
    __PRIVATE_updateTrackedLimbos(e, n, u.hu);
    const c = new __PRIVATE_QueryView(t, n, o);
    return e.Au.set(t, c), e.Vu.has(n) ? e.Vu.get(n).push(t) : e.Vu.set(n, [t]), u.snapshot;
  });
}
function __PRIVATE_syncEngineUnlisten(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = r.Au.get(t), s = r.Vu.get(i.targetId);
    if (s.length > 1) return r.Vu.set(i.targetId, s.filter((e2) => !__PRIVATE_queryEquals(e2, t))), void r.Au.delete(t);
    if (r.isPrimaryClient) {
      r.sharedClientState.removeLocalQueryTarget(i.targetId);
      r.sharedClientState.isActiveQueryTarget(i.targetId) || (yield __PRIVATE_localStoreReleaseTarget(
        r.localStore,
        i.targetId,
        /*keepPersistedTargetData=*/
        false
      ).then(() => {
        r.sharedClientState.clearQueryState(i.targetId), n && __PRIVATE_remoteStoreUnlisten(r.remoteStore, i.targetId), __PRIVATE_removeAndCleanupTarget(r, i.targetId);
      }).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss));
    } else __PRIVATE_removeAndCleanupTarget(r, i.targetId), yield __PRIVATE_localStoreReleaseTarget(
      r.localStore,
      i.targetId,
      /*keepPersistedTargetData=*/
      true
    );
  });
}
function __PRIVATE_triggerRemoteStoreUnlisten(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = n.Au.get(t), i = n.Vu.get(r.targetId);
    n.isPrimaryClient && 1 === i.length && // PORTING NOTE: Unregister the target ID with local Firestore client as
    // watch target.
    (n.sharedClientState.removeLocalQueryTarget(r.targetId), __PRIVATE_remoteStoreUnlisten(n.remoteStore, r.targetId));
  });
}
function __PRIVATE_syncEngineWrite(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_syncEngineEnsureWriteCallbacks(e);
    try {
      const e2 = yield (function __PRIVATE_localStoreWriteLocally(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3), r2 = Timestamp.now(), i = t2.reduce((e4, t3) => e4.add(t3.key), __PRIVATE_documentKeySet());
        let s, o;
        return n2.persistence.runTransaction("Locally write mutations", "readwrite", (e4) => {
          let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
          return n2.xs.getEntries(e4, i).next((e5) => {
            _ = e5, _.forEach((e6, t3) => {
              t3.isValidDocument() || (a = a.add(e6));
            });
          }).next(() => n2.localDocuments.getOverlayedDocuments(e4, _)).next((i2) => {
            s = i2;
            const o2 = [];
            for (const e5 of t2) {
              const t3 = __PRIVATE_mutationExtractBaseValue(e5, s.get(e5.key).overlayedDocument);
              null != t3 && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              o2.push(new __PRIVATE_PatchMutation(e5.key, t3, __PRIVATE_extractFieldMask(t3.value.mapValue), Precondition.exists(true)));
            }
            return n2.mutationQueue.addMutationBatch(e4, r2, o2, t2);
          }).next((t3) => {
            o = t3;
            const r3 = t3.applyToLocalDocumentSet(s, a);
            return n2.documentOverlayCache.saveOverlays(e4, t3.batchId, r3);
          });
        }).then(() => ({
          batchId: o.batchId,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(s)
        }));
      })(r.localStore, t);
      r.sharedClientState.addPendingMutation(e2.batchId), (function __PRIVATE_addMutationCallback(e3, t2, n2) {
        let r2 = e3.pu[e3.currentUser.toKey()];
        r2 || (r2 = new SortedMap(__PRIVATE_primitiveComparator));
        r2 = r2.insert(t2, n2), e3.pu[e3.currentUser.toKey()] = r2;
      })(r, e2.batchId, n), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e2.changes), yield __PRIVATE_fillWritePipeline(r.remoteStore);
    } catch (e2) {
      const t2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, "Failed to persist write");
      n.reject(t2);
    }
  });
}
function __PRIVATE_syncEngineApplyRemoteEvent(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    try {
      const e2 = yield __PRIVATE_localStoreApplyRemoteEventToLocalCache(n.localStore, t);
      t.targetChanges.forEach((e3, t2) => {
        const r = n.fu.get(t2);
        r && // Since this is a limbo resolution lookup, it's for a single document
        // and it could be added, modified, or removed, but not a combination.
        (__PRIVATE_hardAssert(e3.addedDocuments.size + e3.modifiedDocuments.size + e3.removedDocuments.size <= 1, 22616), e3.addedDocuments.size > 0 ? r.Eu = true : e3.modifiedDocuments.size > 0 ? __PRIVATE_hardAssert(r.Eu, 14607) : e3.removedDocuments.size > 0 && (__PRIVATE_hardAssert(r.Eu, 42227), r.Eu = false));
      }), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2, t);
    } catch (e2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
    }
  });
}
function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  if (r.isPrimaryClient && 0 === n || !r.isPrimaryClient && 1 === n) {
    const e2 = [];
    r.Au.forEach((n2, r2) => {
      const i = r2.view.Oa(t);
      i.snapshot && e2.push(i.snapshot);
    }), (function __PRIVATE_eventManagerOnOnlineStateChange(e3, t2) {
      const n2 = __PRIVATE_debugCast(e3);
      n2.onlineState = t2;
      let r2 = false;
      n2.queries.forEach((e4, n3) => {
        for (const e5 of n3.va)
          e5.Oa(t2) && (r2 = true);
      }), r2 && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
    })(r.eventManager, t), e2.length && r.Ru.H_(e2), r.onlineState = t, r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
function __PRIVATE_syncEngineRejectListen(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e);
    r.sharedClientState.updateQueryState(t, "rejected", n);
    const i = r.fu.get(t), s = i && i.key;
    if (s) {
      let e2 = new SortedMap(DocumentKey.comparator);
      e2 = e2.insert(s, MutableDocument.newNoDocument(s, SnapshotVersion.min()));
      const n2 = __PRIVATE_documentKeySet().add(s), i2 = new RemoteEvent(
        SnapshotVersion.min(),
        /* targetChanges= */
        /* @__PURE__ */ new Map(),
        /* targetMismatches= */
        new SortedMap(__PRIVATE_primitiveComparator),
        e2,
        n2
      );
      yield __PRIVATE_syncEngineApplyRemoteEvent(r, i2), // Since this query failed, we won't want to manually unlisten to it.
      // We only remove it from bookkeeping after we successfully applied the
      // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
      // this query when the RemoteStore restarts the Watch stream, which should
      // re-trigger the target failure.
      r.mu = r.mu.remove(s), r.fu.delete(t), __PRIVATE_pumpEnqueuedLimboResolutions(r);
    } else yield __PRIVATE_localStoreReleaseTarget(
      r.localStore,
      t,
      /* keepPersistedTargetData */
      false
    ).then(() => __PRIVATE_removeAndCleanupTarget(r, t, n)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss);
  });
}
function __PRIVATE_syncEngineApplySuccessfulWrite(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e), r = t.batch.batchId;
    try {
      const e2 = yield __PRIVATE_localStoreAcknowledgeBatch(n.localStore, t);
      __PRIVATE_processUserCallback(
        n,
        r,
        /*error=*/
        null
      ), __PRIVATE_triggerPendingWritesCallbacks(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2);
    } catch (e2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
    }
  });
}
function __PRIVATE_syncEngineRejectFailedWrite(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e);
    try {
      const e2 = yield (function __PRIVATE_localStoreRejectBatch(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3);
        return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (e4) => {
          let r2;
          return n2.mutationQueue.lookupMutationBatch(e4, t2).next((t3) => (__PRIVATE_hardAssert(null !== t3, 37113), r2 = t3.keys(), n2.mutationQueue.removeMutationBatch(e4, t3))).next(() => n2.mutationQueue.performConsistencyCheck(e4)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(e4, r2, t2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e4, r2)).next(() => n2.localDocuments.getDocuments(e4, r2));
        });
      })(r.localStore, t);
      __PRIVATE_processUserCallback(r, t, n), __PRIVATE_triggerPendingWritesCallbacks(r, t), r.sharedClientState.updateMutationState(t, "rejected", n), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r, e2);
    } catch (n2) {
      yield __PRIVATE_ignoreIfPrimaryLeaseLoss(n2);
    }
  });
}
function __PRIVATE_triggerPendingWritesCallbacks(e, t) {
  (e.yu.get(t) || []).forEach((e2) => {
    e2.resolve();
  }), e.yu.delete(t);
}
function __PRIVATE_processUserCallback(e, t, n) {
  const r = __PRIVATE_debugCast(e);
  let i = r.pu[r.currentUser.toKey()];
  if (i) {
    const e2 = i.get(t);
    e2 && (n ? e2.reject(n) : e2.resolve(), i = i.remove(t)), r.pu[r.currentUser.toKey()] = i;
  }
}
function __PRIVATE_removeAndCleanupTarget(e, t, n = null) {
  e.sharedClientState.removeLocalQueryTarget(t);
  for (const r of e.Vu.get(t)) e.Au.delete(r), n && e.Ru.Du(r, n);
  if (e.Vu.delete(t), e.isPrimaryClient) {
    e.gu.Gr(t).forEach((t2) => {
      e.gu.containsKey(t2) || // We removed the last reference for this key
      __PRIVATE_removeLimboTarget(e, t2);
    });
  }
}
function __PRIVATE_removeLimboTarget(e, t) {
  e.du.delete(t.path.canonicalString());
  const n = e.mu.get(t);
  null !== n && (__PRIVATE_remoteStoreUnlisten(e.remoteStore, n), e.mu = e.mu.remove(t), e.fu.delete(n), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
function __PRIVATE_updateTrackedLimbos(e, t, n) {
  for (const r of n) if (r instanceof __PRIVATE_AddedLimboDocument) e.gu.addReference(r.key, t), __PRIVATE_trackLimboChange(e, r);
  else if (r instanceof __PRIVATE_RemovedLimboDocument) {
    __PRIVATE_logDebug(Zt, "Document no longer in limbo: " + r.key), e.gu.removeReference(r.key, t);
    e.gu.containsKey(r.key) || // We removed the last reference for this key
    __PRIVATE_removeLimboTarget(e, r.key);
  } else fail(19791, {
    Cu: r
  });
}
function __PRIVATE_trackLimboChange(e, t) {
  const n = t.key, r = n.path.canonicalString();
  e.mu.get(n) || e.du.has(r) || (__PRIVATE_logDebug(Zt, "New document in limbo: " + n), e.du.add(r), __PRIVATE_pumpEnqueuedLimboResolutions(e));
}
function __PRIVATE_pumpEnqueuedLimboResolutions(e) {
  for (; e.du.size > 0 && e.mu.size < e.maxConcurrentLimboResolutions; ) {
    const t = e.du.values().next().value;
    e.du.delete(t);
    const n = new DocumentKey(ResourcePath.fromString(t)), r = e.wu.next();
    e.fu.set(r, new LimboResolution(n)), e.mu = e.mu.insert(n, r), __PRIVATE_remoteStoreListen(e.remoteStore, new TargetData(__PRIVATE_queryToTarget(__PRIVATE_newQueryForPath(n.path)), r, "TargetPurposeLimboResolution", __PRIVATE_ListenSequence.ce));
  }
}
function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t, n) {
  return __async(this, null, function* () {
    const r = __PRIVATE_debugCast(e), i = [], s = [], o = [];
    r.Au.isEmpty() || (r.Au.forEach((e2, _) => {
      o.push(r.bu(_, t, n).then((e3) => {
        if ((e3 || n) && r.isPrimaryClient) {
          const t2 = e3 ? !e3.fromCache : n?.targetChanges.get(_.targetId)?.current;
          r.sharedClientState.updateQueryState(_.targetId, t2 ? "current" : "not-current");
        }
        if (e3) {
          i.push(e3);
          const t2 = __PRIVATE_LocalViewChanges.Es(_.targetId, e3);
          s.push(t2);
        }
      }));
    }), yield Promise.all(o), r.Ru.H_(i), yield (function __PRIVATE_localStoreNotifyLocalViewChanges(e2, t2) {
      return __async(this, null, function* () {
        const n2 = __PRIVATE_debugCast(e2);
        try {
          yield n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e3) => PersistencePromise.forEach(t2, (t3) => PersistencePromise.forEach(t3.Ts, (r2) => n2.persistence.referenceDelegate.addReference(e3, t3.targetId, r2)).next(() => PersistencePromise.forEach(t3.Is, (r2) => n2.persistence.referenceDelegate.removeReference(e3, t3.targetId, r2)))));
        } catch (e3) {
          if (!__PRIVATE_isIndexedDbTransactionError(e3)) throw e3;
          __PRIVATE_logDebug(Nt, "Failed to update sequence numbers: " + e3);
        }
        for (const e3 of t2) {
          const t3 = e3.targetId;
          if (!e3.fromCache) {
            const e4 = n2.vs.get(t3), r2 = e4.snapshotVersion, i2 = e4.withLastLimboFreeSnapshotVersion(r2);
            n2.vs = n2.vs.insert(t3, i2);
          }
        }
      });
    })(r.localStore, s));
  });
}
function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
  return __async(this, null, function* () {
    const n = __PRIVATE_debugCast(e);
    if (!n.currentUser.isEqual(t)) {
      __PRIVATE_logDebug(Zt, "User change. New user:", t.toKey());
      const e2 = yield __PRIVATE_localStoreHandleUserChange(n.localStore, t);
      n.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
      (function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e3, t2) {
        e3.yu.forEach((e4) => {
          e4.forEach((e5) => {
            e5.reject(new FirestoreError(D.CANCELLED, t2));
          });
        }), e3.yu.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
      n.sharedClientState.handleUserChange(t, e2.removedBatchIds, e2.addedBatchIds), yield __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2.Ns);
    }
  });
}
function __PRIVATE_syncEngineGetRemoteKeysForTarget(e, t) {
  const n = __PRIVATE_debugCast(e), r = n.fu.get(t);
  if (r && r.Eu) return __PRIVATE_documentKeySet().add(r.key);
  {
    let e2 = __PRIVATE_documentKeySet();
    const r2 = n.Vu.get(t);
    if (!r2) return e2;
    for (const t2 of r2) {
      const r3 = n.Au.get(t2);
      e2 = e2.unionWith(r3.view.ou);
    }
    return e2;
  }
}
function __PRIVATE_ensureWatchCallbacks(e) {
  const t = __PRIVATE_debugCast(e);
  return t.remoteStore.remoteSyncer.applyRemoteEvent = __PRIVATE_syncEngineApplyRemoteEvent.bind(null, t), t.remoteStore.remoteSyncer.getRemoteKeysForTarget = __PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null, t), t.remoteStore.remoteSyncer.rejectListen = __PRIVATE_syncEngineRejectListen.bind(null, t), t.Ru.H_ = __PRIVATE_eventManagerOnWatchChange.bind(null, t.eventManager), t.Ru.Du = __PRIVATE_eventManagerOnWatchError.bind(null, t.eventManager), t;
}
function __PRIVATE_syncEngineEnsureWriteCallbacks(e) {
  const t = __PRIVATE_debugCast(e);
  return t.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, t), t;
}
var __PRIVATE_MemoryOfflineComponentProvider = class {
  constructor() {
    this.kind = "memory", this.synchronizeTabs = false;
  }
  initialize(e) {
    return __async(this, null, function* () {
      this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.Mu(e), this.persistence = this.xu(e), yield this.persistence.start(), this.localStore = this.Ou(e), this.gcScheduler = this.Nu(e, this.localStore), this.indexBackfillerScheduler = this.Bu(e, this.localStore);
    });
  }
  Nu(e, t) {
    return null;
  }
  Bu(e, t) {
    return null;
  }
  Ou(e) {
    return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
  }
  xu(e) {
    return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Vi, this.serializer);
  }
  Mu(e) {
    return new __PRIVATE_MemorySharedClientState();
  }
  terminate() {
    return __async(this, null, function* () {
      this.gcScheduler?.stop(), this.indexBackfillerScheduler?.stop(), this.sharedClientState.shutdown(), yield this.persistence.shutdown();
    });
  }
};
__PRIVATE_MemoryOfflineComponentProvider.provider = {
  build: () => new __PRIVATE_MemoryOfflineComponentProvider()
};
var __PRIVATE_LruGcMemoryOfflineComponentProvider = class extends __PRIVATE_MemoryOfflineComponentProvider {
  constructor(e) {
    super(), this.cacheSizeBytes = e;
  }
  Nu(e, t) {
    __PRIVATE_hardAssert(this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate, 46915);
    const n = this.persistence.referenceDelegate.garbageCollector;
    return new __PRIVATE_LruScheduler(n, e.asyncQueue, t);
  }
  xu(e) {
    const t = void 0 !== this.cacheSizeBytes ? LruParams.withCacheSize(this.cacheSizeBytes) : LruParams.DEFAULT;
    return new __PRIVATE_MemoryPersistence((e2) => __PRIVATE_MemoryLruDelegate.Vi(e2, t), this.serializer);
  }
};
var OnlineComponentProvider = class {
  initialize(e, t) {
    return __async(this, null, function* () {
      this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
        t,
        /* startAsPrimary=*/
        !e.synchronizeTabs
      ), this.sharedClientState.onlineStateHandler = (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e2,
        1
        /* OnlineStateSource.SharedClientState */
      ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), yield __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
    });
  }
  createEventManager(e) {
    return (function __PRIVATE_newEventManager() {
      return new __PRIVATE_EventManagerImpl();
    })();
  }
  createDatastore(e) {
    const t = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n = __PRIVATE_newConnection(e.databaseInfo);
    return __PRIVATE_newDatastore(e.authCredentials, e.appCheckCredentials, n, t);
  }
  createRemoteStore(e) {
    return (function __PRIVATE_newRemoteStore(e2, t, n, r, i) {
      return new __PRIVATE_RemoteStoreImpl(e2, t, n, r, i);
    })(this.localStore, this.datastore, e.asyncQueue, (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
      this.syncEngine,
      e2,
      0
      /* OnlineStateSource.RemoteStore */
    ), (function __PRIVATE_newConnectivityMonitor() {
      return __PRIVATE_BrowserConnectivityMonitor.v() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
    })());
  }
  createSyncEngine(e, t) {
    return (function __PRIVATE_newSyncEngine(e2, t2, n, r, i, s, o) {
      const _ = new __PRIVATE_SyncEngineImpl(e2, t2, n, r, i, s);
      return o && (_.Su = true), _;
    })(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
  }
  terminate() {
    return __async(this, null, function* () {
      yield (function __PRIVATE_remoteStoreShutdown(e) {
        return __async(this, null, function* () {
          const t = __PRIVATE_debugCast(e);
          __PRIVATE_logDebug(jt, "RemoteStore shutting down."), t.da.add(
            5
            /* OfflineCause.Shutdown */
          ), yield __PRIVATE_disableNetworkInternal(t), t.fa.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
          // triggering spurious listener events with cached data, etc.
          t.ga.set(
            "Unknown"
            /* OnlineState.Unknown */
          );
        });
      })(this.remoteStore), this.datastore?.terminate(), this.eventManager?.terminate();
    });
  }
};
OnlineComponentProvider.provider = {
  build: () => new OnlineComponentProvider()
};
var __PRIVATE_AsyncObserver = class {
  constructor(e) {
    this.observer = e, /**
     * When set to true, will not raise future events. Necessary to deal with
     * async detachment of listener.
     */
    this.muted = false;
  }
  next(e) {
    this.muted || this.observer.next && this.ku(this.observer.next, e);
  }
  error(e) {
    this.muted || (this.observer.error ? this.ku(this.observer.error, e) : __PRIVATE_logError("Uncaught Error in snapshot listener:", e.toString()));
  }
  Ku() {
    this.muted = true;
  }
  ku(e, t) {
    setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
};
var Xt = "FirestoreClient";
var FirestoreClient = class {
  constructor(e, t, n, r, i) {
    this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this._databaseInfo = r, this.user = User.UNAUTHENTICATED, this.clientId = __PRIVATE_AutoId.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this._uninitializedComponentsProvider = i, this.authCredentials.start(n, (e2) => __async(this, null, function* () {
      __PRIVATE_logDebug(Xt, "Received user=", e2.uid), yield this.authCredentialListener(e2), this.user = e2;
    })), this.appCheckCredentials.start(n, (e2) => (__PRIVATE_logDebug(Xt, "Received new app check token=", e2), this.appCheckCredentialListener(e2, this.user)));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this._databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new __PRIVATE_Deferred();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(() => __async(this, null, function* () {
      try {
        this._onlineComponents && (yield this._onlineComponents.terminate()), this._offlineComponents && (yield this._offlineComponents.terminate()), // The credentials provider must be terminated after shutting down the
        // RemoteStore as it will prevent the RemoteStore from retrieving auth
        // tokens.
        this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
      } catch (t) {
        const n = __PRIVATE_wrapInUserErrorIfRecoverable(t, "Failed to shutdown persistence");
        e.reject(n);
      }
    })), e.promise;
  }
};
function __PRIVATE_setOfflineComponentProvider(e, t) {
  return __async(this, null, function* () {
    e.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug(Xt, "Initializing OfflineComponentProvider");
    const n = e.configuration;
    yield t.initialize(n);
    let r = n.initialUser;
    e.setCredentialChangeListener((e2) => __async(null, null, function* () {
      r.isEqual(e2) || (yield __PRIVATE_localStoreHandleUserChange(t.localStore, e2), r = e2);
    })), // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    t.persistence.setDatabaseDeletedListener(() => e.terminate()), e._offlineComponents = t;
  });
}
function __PRIVATE_setOnlineComponentProvider(e, t) {
  return __async(this, null, function* () {
    e.asyncQueue.verifyOperationInProgress();
    const n = yield __PRIVATE_ensureOfflineComponents(e);
    __PRIVATE_logDebug(Xt, "Initializing OnlineComponentProvider"), yield t.initialize(n, e.configuration), // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    e.setCredentialChangeListener((e2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, e2)), e.setAppCheckTokenChangeListener((e2, n2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, n2)), e._onlineComponents = t;
  });
}
function __PRIVATE_ensureOfflineComponents(e) {
  return __async(this, null, function* () {
    if (!e._offlineComponents) if (e._uninitializedComponentsProvider) {
      __PRIVATE_logDebug(Xt, "Using user provided OfflineComponentProvider");
      try {
        yield __PRIVATE_setOfflineComponentProvider(e, e._uninitializedComponentsProvider._offline);
      } catch (t) {
        const n = t;
        if (!(function __PRIVATE_canFallbackFromIndexedDbError(e2) {
          return "FirebaseError" === e2.name ? e2.code === D.FAILED_PRECONDITION || e2.code === D.UNIMPLEMENTED : !("undefined" != typeof DOMException && e2 instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
          // or an aborted error depending on whether the error happened during
          // schema migration.
          22 === e2.code || 20 === e2.code || // Firefox Private Browsing mode disables IndexedDb and returns
          // INVALID_STATE for any usage.
          11 === e2.code;
        })(n)) throw n;
        __PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + n), yield __PRIVATE_setOfflineComponentProvider(e, new __PRIVATE_MemoryOfflineComponentProvider());
      }
    } else __PRIVATE_logDebug(Xt, "Using default OfflineComponentProvider"), yield __PRIVATE_setOfflineComponentProvider(e, new __PRIVATE_LruGcMemoryOfflineComponentProvider(void 0));
    return e._offlineComponents;
  });
}
function __PRIVATE_ensureOnlineComponents(e) {
  return __async(this, null, function* () {
    return e._onlineComponents || (e._uninitializedComponentsProvider ? (__PRIVATE_logDebug(Xt, "Using user provided OnlineComponentProvider"), yield __PRIVATE_setOnlineComponentProvider(e, e._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug(Xt, "Using default OnlineComponentProvider"), yield __PRIVATE_setOnlineComponentProvider(e, new OnlineComponentProvider()))), e._onlineComponents;
  });
}
function __PRIVATE_getSyncEngine(e) {
  return __PRIVATE_ensureOnlineComponents(e).then((e2) => e2.syncEngine);
}
function __PRIVATE_getEventManager(e) {
  return __async(this, null, function* () {
    const t = yield __PRIVATE_ensureOnlineComponents(e), n = t.eventManager;
    return n.onListen = __PRIVATE_syncEngineListen.bind(null, t.syncEngine), n.onUnlisten = __PRIVATE_syncEngineUnlisten.bind(null, t.syncEngine), n.onFirstRemoteStoreListen = __PRIVATE_triggerRemoteStoreListen.bind(null, t.syncEngine), n.onLastRemoteStoreUnlisten = __PRIVATE_triggerRemoteStoreUnlisten.bind(null, t.syncEngine), n;
  });
}
function __PRIVATE_firestoreClientListen(e, t, n, r) {
  const i = new __PRIVATE_AsyncObserver(r), s = new __PRIVATE_QueryListener(t, i, n);
  return e.asyncQueue.enqueueAndForget(() => __async(null, null, function* () {
    return __PRIVATE_eventManagerListen(yield __PRIVATE_getEventManager(e), s);
  })), () => {
    i.Ku(), e.asyncQueue.enqueueAndForget(() => __async(null, null, function* () {
      return __PRIVATE_eventManagerUnlisten(yield __PRIVATE_getEventManager(e), s);
    }));
  };
}
function __PRIVATE_firestoreClientWrite(e, t) {
  const n = new __PRIVATE_Deferred();
  return e.asyncQueue.enqueueAndForget(() => __async(null, null, function* () {
    return __PRIVATE_syncEngineWrite(yield __PRIVATE_getSyncEngine(e), t, n);
  })), n.promise;
}
function __PRIVATE_cloneLongPollingOptions(e) {
  const t = {};
  return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
}
var Yt = "ComponentProvider";
var en = /* @__PURE__ */ new Map();
function __PRIVATE_makeDatabaseInfo(e, t, n, r, i) {
  return new DatabaseInfo(e, t, n, i.host, i.ssl, i.experimentalForceLongPolling, i.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(i.experimentalLongPollingOptions), i.useFetchStreams, i.isUsingEmulator, r);
}
var tn = "firestore.googleapis.com";
var nn = true;
var FirestoreSettingsImpl = class {
  constructor(e) {
    if (void 0 === e.host) {
      if (void 0 !== e.ssl) throw new FirestoreError(D.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = tn, this.ssl = nn;
    } else this.host = e.host, this.ssl = e.ssl ?? nn;
    if (this.isUsingEmulator = void 0 !== e.emulatorOptions, this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes) this.cacheSizeBytes = St;
    else {
      if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < Ct) throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(e.experimentalLongPollingOptions ?? {}), (function __PRIVATE_validateLongPollingOptions(e2) {
      if (void 0 !== e2.timeoutSeconds) {
        if (isNaN(e2.timeoutSeconds)) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
        if (e2.timeoutSeconds < 5) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
        if (e2.timeoutSeconds > 30) throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    })(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && (function __PRIVATE_longPollingOptionsEqual(e2, t) {
      return e2.timeoutSeconds === t.timeoutSeconds;
    })(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
};
var Firestore$1 = class {
  /** @hideconstructor */
  constructor(e, t, n, r) {
    this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false, this._emulatorOptions = {}, // A task that is assigned when the terminate() is invoked and resolved when
    // all components have shut down. Otherwise, Firestore is not terminated,
    // which can mean either the FirestoreClient is in the process of starting,
    // or restarting.
    this._terminateTask = "notTerminated";
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return "notTerminated" !== this._terminateTask;
  }
  _setSettings(e) {
    if (this._settingsFrozen) throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new FirestoreSettingsImpl(e), this._emulatorOptions = e.emulatorOptions || {}, void 0 !== e.credentials && (this._authCredentials = (function __PRIVATE_makeAuthCredentialsProvider(e2) {
      if (!e2) return new __PRIVATE_EmptyAuthCredentialsProvider();
      switch (e2.type) {
        case "firstParty":
          return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
        case "provider":
          return e2.client;
        default:
          throw new FirestoreError(D.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _getEmulatorOptions() {
    return this._emulatorOptions;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
  }
  _restart() {
    return __async(this, null, function* () {
      "notTerminated" === this._terminateTask ? yield this._terminate() : this._terminateTask = "notTerminated";
    });
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return (function __PRIVATE_removeComponents(e) {
      const t = en.get(e);
      t && (__PRIVATE_logDebug(Yt, "Removing Datastore"), en.delete(e), t.terminate());
    })(this), Promise.resolve();
  }
};
function connectFirestoreEmulator(e, t, n, r = {}) {
  e = __PRIVATE_cast(e, Firestore$1);
  const i = isCloudWorkstation(t), s = e._getSettings(), o = __spreadProps(__spreadValues({}, s), {
    emulatorOptions: e._getEmulatorOptions()
  }), _ = `${t}:${n}`;
  i && pingServer(`https://${_}`), s.host !== tn && s.host !== _ && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
  const a = __spreadProps(__spreadValues({}, s), {
    host: _,
    ssl: i,
    emulatorOptions: r
  });
  if (!deepEqual(a, o) && (e._setSettings(a), r.mockUserToken)) {
    let t2, n2;
    if ("string" == typeof r.mockUserToken) t2 = r.mockUserToken, n2 = User.MOCK_USER;
    else {
      t2 = createMockUserToken(r.mockUserToken, e._app?.options.projectId);
      const i2 = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!i2) throw new FirestoreError(D.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      n2 = new User(i2);
    }
    e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t2, n2));
  }
}
var Query = class _Query {
  // This is the lite version of the Query class in the main SDK.
  /** @hideconstructor protected */
  constructor(e, t, n) {
    this.converter = t, this._query = n, /** The type of this Firestore reference. */
    this.type = "query", this.firestore = e;
  }
  withConverter(e) {
    return new _Query(this.firestore, e, this._query);
  }
};
var DocumentReference = class _DocumentReference {
  /** @hideconstructor */
  constructor(e, t, n) {
    this.converter = t, this._key = n, /** The type of this Firestore reference. */
    this.type = "document", this.firestore = e;
  }
  get _path() {
    return this._key.path;
  }
  /**
   * The document's identifier within its collection.
   */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced document (relative
   * to the root of the database).
   */
  get path() {
    return this._key.path.canonicalString();
  }
  /**
   * The collection this `DocumentReference` belongs to.
   */
  get parent() {
    return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new _DocumentReference(this.firestore, e, this._key);
  }
  /**
   * Returns a JSON-serializable representation of this `DocumentReference` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _DocumentReference._jsonSchemaVersion,
      referencePath: this._key.toString()
    };
  }
  static fromJSON(e, t, n) {
    if (__PRIVATE_validateJSON(t, _DocumentReference._jsonSchema)) return new _DocumentReference(e, n || null, new DocumentKey(ResourcePath.fromString(t.referencePath)));
  }
};
DocumentReference._jsonSchemaVersion = "firestore/documentReference/1.0", DocumentReference._jsonSchema = {
  type: property("string", DocumentReference._jsonSchemaVersion),
  referencePath: property("string")
};
var CollectionReference = class _CollectionReference extends Query {
  /** @hideconstructor */
  constructor(e, t, n) {
    super(e, t, __PRIVATE_newQueryForPath(n)), this._path = n, /** The type of this Firestore reference. */
    this.type = "collection";
  }
  /** The collection's identifier. */
  get id() {
    return this._query.path.lastSegment();
  }
  /**
   * A string representing the path of the referenced collection (relative
   * to the root of the database).
   */
  get path() {
    return this._query.path.canonicalString();
  }
  /**
   * A reference to the containing `DocumentReference` if this is a
   * subcollection. If this isn't a subcollection, the reference is null.
   */
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      new DocumentKey(e)
    );
  }
  withConverter(e) {
    return new _CollectionReference(this.firestore, e, this._path);
  }
};
function collection(e, t, ...n) {
  if (e = getModularInstance(e), __PRIVATE_validateNonEmptyArgument("collection", "path", t), e instanceof Firestore$1) {
    const r = ResourcePath.fromString(t, ...n);
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e,
      /* converter= */
      null,
      r
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ResourcePath.fromString(t, ...n));
    return __PRIVATE_validateCollectionPath(r), new CollectionReference(
      e.firestore,
      /* converter= */
      null,
      r
    );
  }
}
function doc(e, t, ...n) {
  if (e = getModularInstance(e), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (t = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t), e instanceof Firestore$1) {
    const r = ResourcePath.fromString(t, ...n);
    return __PRIVATE_validateDocumentPath(r), new DocumentReference(
      e,
      /* converter= */
      null,
      new DocumentKey(r)
    );
  }
  {
    if (!(e instanceof DocumentReference || e instanceof CollectionReference)) throw new FirestoreError(D.INVALID_ARGUMENT, "Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    const r = e._path.child(ResourcePath.fromString(t, ...n));
    return __PRIVATE_validateDocumentPath(r), new DocumentReference(e.firestore, e instanceof CollectionReference ? e.converter : null, new DocumentKey(r));
  }
}
var rn = "AsyncQueue";
var __PRIVATE_AsyncQueueImpl = class {
  constructor(e = Promise.resolve()) {
    this.rc = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.sc = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.oc = [], // visible for testing
    this._c = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.ac = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.uc = false, // List of TimerIds to fast-forward delays for.
    this.cc = [], // Backoff timer used to schedule retries for retryable operations
    this.M_ = new __PRIVATE_ExponentialBackoff(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.lc = () => {
      const e2 = getDocument();
      e2 && __PRIVATE_logDebug(rn, "Visibility state changed to " + e2.visibilityState), this.M_.w_();
    }, this.hc = e;
    const t = getDocument();
    t && "function" == typeof t.addEventListener && t.addEventListener("visibilitychange", this.lc);
  }
  get isShuttingDown() {
    return this.sc;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.Pc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Tc(e);
  }
  enterRestrictedMode(e) {
    if (!this.sc) {
      this.sc = true, this.uc = e || false;
      const t = getDocument();
      t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.lc);
    }
  }
  enqueue(e) {
    if (this.Pc(), this.sc)
      return new Promise(() => {
      });
    const t = new __PRIVATE_Deferred();
    return this.Tc(() => this.sc && this.uc ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.rc.push(e), this.Ic()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  Ic() {
    return __async(this, null, function* () {
      if (0 !== this.rc.length) {
        try {
          yield this.rc[0](), this.rc.shift(), this.M_.reset();
        } catch (e) {
          if (!__PRIVATE_isIndexedDbTransactionError(e)) throw e;
          __PRIVATE_logDebug(rn, "Operation failed with retryable error: " + e);
        }
        this.rc.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
        // This is necessary to run retryable operations that failed during
        // their initial attempt since we don't know whether they are already
        // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
        // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
        // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
        // call scheduled here.
        // Since `backoffAndRun()` cancels an existing backoff and schedules a
        // new backoff on every call, there is only ever a single additional
        // operation in the queue.
        this.M_.p_(() => this.Ic());
      }
    });
  }
  Tc(e) {
    const t = this.hc.then(() => (this.ac = true, e().catch((e2) => {
      this._c = e2, this.ac = false;
      throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", __PRIVATE_getMessageOrStack(e2)), e2;
    }).then((e2) => (this.ac = false, e2))));
    return this.hc = t, t;
  }
  enqueueAfterDelay(e, t, n) {
    this.Pc(), // Fast-forward delays for timerIds that have been overridden.
    this.cc.indexOf(e) > -1 && (t = 0);
    const r = DelayedOperation.createAndSchedule(this, e, t, n, (e2) => this.Ec(e2));
    return this.oc.push(r), r;
  }
  Pc() {
    this._c && fail(47125, {
      Rc: __PRIVATE_getMessageOrStack(this._c)
    });
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  Ac() {
    return __async(this, null, function* () {
      let e;
      do {
        e = this.hc, yield e;
      } while (e !== this.hc);
    });
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  Vc(e) {
    for (const t of this.oc) if (t.timerId === e) return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  dc(e) {
    return this.Ac().then(() => {
      this.oc.sort((e2, t) => e2.targetTimeMs - t.targetTimeMs);
      for (const t of this.oc) if (t.skipDelay(), "all" !== e && t.timerId === e) break;
      return this.Ac();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  mc(e) {
    this.cc.push(e);
  }
  /** Called once a DelayedOperation is run or canceled. */
  Ec(e) {
    const t = this.oc.indexOf(e);
    this.oc.splice(t, 1);
  }
};
function __PRIVATE_getMessageOrStack(e) {
  let t = e.message || "";
  return e.stack && (t = e.stack.includes(e.message) ? e.stack : e.message + "\n" + e.stack), t;
}
var Firestore = class extends Firestore$1 {
  /** @hideconstructor */
  constructor(e, t, n, r) {
    super(e, t, n, r), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = new __PRIVATE_AsyncQueueImpl(), this._persistenceKey = r?.name || "[DEFAULT]";
  }
  _terminate() {
    return __async(this, null, function* () {
      if (this._firestoreClient) {
        const e = this._firestoreClient.terminate();
        this._queue = new __PRIVATE_AsyncQueueImpl(e), this._firestoreClient = void 0, yield e;
      }
    });
  }
};
function getFirestore(e, n) {
  const r = "object" == typeof e ? e : getApp(), i = "string" == typeof e ? e : n || it, s = _getProvider(r, "firestore").getImmediate({
    identifier: i
  });
  if (!s._initialized) {
    const e2 = getDefaultEmulatorHostnameAndPort("firestore");
    e2 && connectFirestoreEmulator(s, ...e2);
  }
  return s;
}
function ensureFirestoreConfigured(e) {
  if (e._terminated) throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
  return e._firestoreClient || __PRIVATE_configureFirestore(e), e._firestoreClient;
}
function __PRIVATE_configureFirestore(e) {
  const t = e._freezeSettings(), n = __PRIVATE_makeDatabaseInfo(e._databaseId, e._app?.options.appId || "", e._persistenceKey, e._app?.options.apiKey, t);
  e._componentsProvider || t.localCache?._offlineComponentProvider && t.localCache?._onlineComponentProvider && (e._componentsProvider = {
    _offline: t.localCache._offlineComponentProvider,
    _online: t.localCache._onlineComponentProvider
  }), e._firestoreClient = new FirestoreClient(e._authCredentials, e._appCheckCredentials, e._queue, n, e._componentsProvider && (function __PRIVATE_buildComponentProvider(e2) {
    const t2 = e2?._online.build();
    return {
      _offline: e2?._offline.build(t2),
      _online: t2
    };
  })(e._componentsProvider));
}
var Bytes = class _Bytes {
  /** @hideconstructor */
  constructor(e) {
    this._byteString = e;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */
  static fromBase64String(e) {
    try {
      return new _Bytes(ByteString.fromBase64String(e));
    } catch (e2) {
      throw new FirestoreError(D.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e2);
    }
  }
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  static fromUint8Array(e) {
    return new _Bytes(ByteString.fromUint8Array(e));
  }
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  toBase64() {
    return this._byteString.toBase64();
  }
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
  /**
   * Returns a JSON-serializable representation of this `Bytes` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _Bytes._jsonSchemaVersion,
      bytes: this.toBase64()
    };
  }
  /**
   * Builds a `Bytes` instance from a JSON object created by {@link Bytes.toJSON}.
   *
   * @param json - a JSON object represention of a `Bytes` instance
   * @returns an instance of {@link Bytes} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _Bytes._jsonSchema)) return _Bytes.fromBase64String(e.bytes);
  }
};
Bytes._jsonSchemaVersion = "firestore/bytes/1.0", Bytes._jsonSchema = {
  type: property("string", Bytes._jsonSchemaVersion),
  bytes: property("string")
};
var FieldPath = class {
  /**
   * Creates a `FieldPath` from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...e) {
    for (let t = 0; t < e.length; ++t) if (0 === e[t].length) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this._internalPath = new FieldPath$1(e);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
};
var FieldValue = class {
  /**
   * @param _methodName - The public API endpoint that returns this class.
   * @hideconstructor
   */
  constructor(e) {
    this._methodName = e;
  }
};
var GeoPoint = class _GeoPoint {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90) throw new FirestoreError(D.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
    if (!isFinite(t) || t < -180 || t > 180) throw new FirestoreError(D.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
    this._lat = e, this._long = t;
  }
  /**
   * The latitude of this `GeoPoint` instance.
   */
  get latitude() {
    return this._lat;
  }
  /**
   * The longitude of this `GeoPoint` instance.
   */
  get longitude() {
    return this._long;
  }
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  _compareTo(e) {
    return __PRIVATE_primitiveComparator(this._lat, e._lat) || __PRIVATE_primitiveComparator(this._long, e._long);
  }
  /**
   * Returns a JSON-serializable representation of this `GeoPoint` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      latitude: this._lat,
      longitude: this._long,
      type: _GeoPoint._jsonSchemaVersion
    };
  }
  /**
   * Builds a `GeoPoint` instance from a JSON object created by {@link GeoPoint.toJSON}.
   *
   * @param json - a JSON object represention of a `GeoPoint` instance
   * @returns an instance of {@link GeoPoint} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _GeoPoint._jsonSchema)) return new _GeoPoint(e.latitude, e.longitude);
  }
};
GeoPoint._jsonSchemaVersion = "firestore/geoPoint/1.0", GeoPoint._jsonSchema = {
  type: property("string", GeoPoint._jsonSchemaVersion),
  latitude: property("number"),
  longitude: property("number")
};
var VectorValue = class _VectorValue {
  /**
   * @private
   * @internal
   */
  constructor(e) {
    this._values = (e || []).map((e2) => e2);
  }
  /**
   * Returns a copy of the raw number array form of the vector.
   */
  toArray() {
    return this._values.map((e) => e);
  }
  /**
   * Returns `true` if the two `VectorValue` values have the same raw number arrays, returns `false` otherwise.
   */
  isEqual(e) {
    return (function __PRIVATE_isPrimitiveArrayEqual(e2, t) {
      if (e2.length !== t.length) return false;
      for (let n = 0; n < e2.length; ++n) if (e2[n] !== t[n]) return false;
      return true;
    })(this._values, e._values);
  }
  /**
   * Returns a JSON-serializable representation of this `VectorValue` instance.
   *
   * @returns a JSON representation of this object.
   */
  toJSON() {
    return {
      type: _VectorValue._jsonSchemaVersion,
      vectorValues: this._values
    };
  }
  /**
   * Builds a `VectorValue` instance from a JSON object created by {@link VectorValue.toJSON}.
   *
   * @param json - a JSON object represention of a `VectorValue` instance.
   * @returns an instance of {@link VectorValue} if the JSON object could be parsed. Throws a
   * {@link FirestoreError} if an error occurs.
   */
  static fromJSON(e) {
    if (__PRIVATE_validateJSON(e, _VectorValue._jsonSchema)) {
      if (Array.isArray(e.vectorValues) && e.vectorValues.every((e2) => "number" == typeof e2)) return new _VectorValue(e.vectorValues);
      throw new FirestoreError(D.INVALID_ARGUMENT, "Expected 'vectorValues' field to be a number array");
    }
  }
};
VectorValue._jsonSchemaVersion = "firestore/vectorValue/1.0", VectorValue._jsonSchema = {
  type: property("string", VectorValue._jsonSchemaVersion),
  vectorValues: property("object")
};
var on = /^__.*__$/;
var ParsedSetData = class {
  constructor(e, t, n) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = n;
  }
  toMutation(e, t) {
    return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms) : new __PRIVATE_SetMutation(e, this.data, t, this.fieldTransforms);
  }
};
var ParsedUpdateData = class {
  constructor(e, t, n) {
    this.data = e, this.fieldMask = t, this.fieldTransforms = n;
  }
  toMutation(e, t) {
    return new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms);
  }
};
function __PRIVATE_isWrite(e) {
  switch (e) {
    case 0:
    // fall through
    case 2:
    // fall through
    case 1:
      return true;
    case 3:
    case 4:
      return false;
    default:
      throw fail(40011, {
        dataSource: e
      });
  }
}
var __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  constructor(e, t, n, r, i, s) {
    this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.fc(), this.fieldTransforms = i || [], this.fieldMask = s || [];
  }
  get path() {
    return this.settings.path;
  }
  get dataSource() {
    return this.settings.dataSource;
  }
  /** Returns a new context with the specified settings overwritten. */
  i(e) {
    return new ___PRIVATE_ParseContextImpl(__spreadValues(__spreadValues({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }
  yc(e) {
    const t = this.path?.child(e), n = this.i({
      path: t,
      arrayElement: false
    });
    return n.wc(e), n;
  }
  Sc(e) {
    const t = this.path?.child(e), n = this.i({
      path: t,
      arrayElement: false
    });
    return n.fc(), n;
  }
  bc(e) {
    return this.i({
      path: void 0,
      arrayElement: true
    });
  }
  Dc(e) {
    return __PRIVATE_createError(e, this.settings.methodName, this.settings.hasConverter || false, this.path, this.settings.targetDoc);
  }
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  contains(e) {
    return void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) || void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field));
  }
  fc() {
    if (this.path) for (let e = 0; e < this.path.length; e++) this.wc(this.path.get(e));
  }
  wc(e) {
    if (0 === e.length) throw this.Dc("Document fields must not be empty");
    if (__PRIVATE_isWrite(this.dataSource) && on.test(e)) throw this.Dc('Document fields cannot begin and end with "__"');
  }
};
var __PRIVATE_UserDataReader = class {
  constructor(e, t, n) {
    this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || __PRIVATE_newSerializer(e);
  }
  /** Creates a new top-level parse context. */
  V(e, t, n, r = false) {
    return new __PRIVATE_ParseContextImpl({
      dataSource: e,
      methodName: t,
      targetDoc: n,
      path: FieldPath$1.emptyPath(),
      arrayElement: false,
      hasConverter: r
    }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
  }
};
function __PRIVATE_newUserDataReader(e) {
  const t = e._freezeSettings(), n = __PRIVATE_newSerializer(e._databaseId);
  return new __PRIVATE_UserDataReader(e._databaseId, !!t.ignoreUndefinedProperties, n);
}
function __PRIVATE_parseSetData(e, t, n, r, i, s = {}) {
  const o = e.V(s.merge || s.mergeFields ? 2 : 0, t, n, i);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", o, r);
  const _ = __PRIVATE_parseObject(r, o);
  let a, u;
  if (s.merge) a = new FieldMask(o.fieldMask), u = o.fieldTransforms;
  else if (s.mergeFields) {
    const e2 = [];
    for (const r2 of s.mergeFields) {
      const i2 = __PRIVATE_fieldPathFromArgument(t, r2, n);
      if (!o.contains(i2)) throw new FirestoreError(D.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
      __PRIVATE_fieldMaskContains(e2, i2) || e2.push(i2);
    }
    a = new FieldMask(e2), u = o.fieldTransforms.filter((e3) => a.covers(e3.field));
  } else a = null, u = o.fieldTransforms;
  return new ParsedSetData(new ObjectValue(_), a, u);
}
var __PRIVATE_DeleteFieldValueImpl = class ___PRIVATE_DeleteFieldValueImpl extends FieldValue {
  _toFieldTransform(e) {
    if (2 !== e.dataSource) throw 1 === e.dataSource ? e.Dc(`${this._methodName}() can only appear at the top level of your update data`) : e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof ___PRIVATE_DeleteFieldValueImpl;
  }
};
function __PRIVATE_parseUpdateData(e, t, n, r) {
  const i = e.V(1, t, n);
  __PRIVATE_validatePlainObject("Data must be an object, but it was:", i, r);
  const s = [], o = ObjectValue.empty();
  forEach(r, (e2, r2) => {
    const _2 = __PRIVATE_fieldPathFromDotSeparatedString(t, e2, n);
    r2 = getModularInstance(r2);
    const a = i.Sc(_2);
    if (r2 instanceof __PRIVATE_DeleteFieldValueImpl)
      s.push(_2);
    else {
      const e3 = __PRIVATE_parseData(r2, a);
      null != e3 && (s.push(_2), o.set(_2, e3));
    }
  });
  const _ = new FieldMask(s);
  return new ParsedUpdateData(o, _, i.fieldTransforms);
}
function __PRIVATE_parseUpdateVarargs(e, t, n, r, i, s) {
  const o = e.V(1, t, n), _ = [__PRIVATE_fieldPathFromArgument(t, r, n)], a = [i];
  if (s.length % 2 != 0) throw new FirestoreError(D.INVALID_ARGUMENT, `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);
  for (let e2 = 0; e2 < s.length; e2 += 2) _.push(__PRIVATE_fieldPathFromArgument(t, s[e2])), a.push(s[e2 + 1]);
  const u = [], c = ObjectValue.empty();
  for (let e2 = _.length - 1; e2 >= 0; --e2) if (!__PRIVATE_fieldMaskContains(u, _[e2])) {
    const t2 = _[e2];
    let n2 = a[e2];
    n2 = getModularInstance(n2);
    const r2 = o.Sc(t2);
    if (n2 instanceof __PRIVATE_DeleteFieldValueImpl)
      u.push(t2);
    else {
      const e3 = __PRIVATE_parseData(n2, r2);
      null != e3 && (u.push(t2), c.set(t2, e3));
    }
  }
  const l = new FieldMask(u);
  return new ParsedUpdateData(c, l, o.fieldTransforms);
}
function __PRIVATE_parseQueryValue(e, t, n, r = false) {
  return __PRIVATE_parseData(n, e.V(r ? 4 : 3, t));
}
function __PRIVATE_parseData(e, t) {
  if (__PRIVATE_looksLikeJsonObject(
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    e = getModularInstance(e)
  )) return __PRIVATE_validatePlainObject("Unsupported field value:", t, e), __PRIVATE_parseObject(e, t);
  if (e instanceof FieldValue)
    return (function __PRIVATE_parseSentinelFieldValue(e2, t2) {
      if (!__PRIVATE_isWrite(t2.dataSource)) throw t2.Dc(`${e2._methodName}() can only be used with update() and set()`);
      if (!t2.path) throw t2.Dc(`${e2._methodName}() is not currently supported inside arrays`);
      const n = e2._toFieldTransform(t2);
      n && t2.fieldTransforms.push(n);
    })(e, t), null;
  if (void 0 === e && t.ignoreUndefinedProperties)
    return null;
  if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    t.path && t.fieldMask.push(t.path), e instanceof Array
  ) {
    if (t.settings.arrayElement && 4 !== t.dataSource) throw t.Dc("Nested arrays are not supported");
    return (function __PRIVATE_parseArray(e2, t2) {
      const n = [];
      let r = 0;
      for (const i of e2) {
        let e3 = __PRIVATE_parseData(i, t2.bc(r));
        null == e3 && // Just include nulls in the array for fields being replaced with a
        // sentinel.
        (e3 = {
          nullValue: "NULL_VALUE"
        }), n.push(e3), r++;
      }
      return {
        arrayValue: {
          values: n
        }
      };
    })(e, t);
  }
  return (function __PRIVATE_parseScalarValue(e2, t2) {
    if (null === (e2 = getModularInstance(e2))) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof e2) return toNumber(t2.serializer, e2);
    if ("boolean" == typeof e2) return {
      booleanValue: e2
    };
    if ("string" == typeof e2) return {
      stringValue: e2
    };
    if (e2 instanceof Date) {
      const n = Timestamp.fromDate(e2);
      return {
        timestampValue: toTimestamp(t2.serializer, n)
      };
    }
    if (e2 instanceof Timestamp) {
      const n = new Timestamp(e2.seconds, 1e3 * Math.floor(e2.nanoseconds / 1e3));
      return {
        timestampValue: toTimestamp(t2.serializer, n)
      };
    }
    if (e2 instanceof GeoPoint) return {
      geoPointValue: {
        latitude: e2.latitude,
        longitude: e2.longitude
      }
    };
    if (e2 instanceof Bytes) return {
      bytesValue: __PRIVATE_toBytes(t2.serializer, e2._byteString)
    };
    if (e2 instanceof DocumentReference) {
      const n = t2.databaseId, r = e2.firestore._databaseId;
      if (!r.isEqual(n)) throw t2.Dc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);
      return {
        referenceValue: __PRIVATE_toResourceName(e2.firestore._databaseId || t2.databaseId, e2._key.path)
      };
    }
    if (e2 instanceof VectorValue)
      return (function __PRIVATE_parseVectorValue(e3, t3) {
        const n = e3 instanceof VectorValue ? e3.toArray() : e3, r = {
          fields: {
            [st]: {
              stringValue: at
            },
            [ut]: {
              arrayValue: {
                values: n.map((e4) => {
                  if ("number" != typeof e4) throw t3.Dc("VectorValues must only contain numeric values.");
                  return __PRIVATE_toDouble(t3.serializer, e4);
                })
              }
            }
          }
        };
        return {
          mapValue: r
        };
      })(e2, t2);
    if (__PRIVATE_isProtoValueSerializable(e2)) return e2._toProto(t2.serializer);
    throw t2.Dc(`Unsupported field value: ${__PRIVATE_valueDescription(e2)}`);
  })(e, t);
}
function __PRIVATE_parseObject(e, t) {
  const n = {};
  return isEmpty(e) ? (
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    t.path && t.path.length > 0 && t.fieldMask.push(t.path)
  ) : forEach(e, (e2, r) => {
    const i = __PRIVATE_parseData(r, t.yc(e2));
    null != i && (n[e2] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}
function __PRIVATE_looksLikeJsonObject(e) {
  return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Bytes || e instanceof DocumentReference || e instanceof FieldValue || e instanceof VectorValue || __PRIVATE_isProtoValueSerializable(e));
}
function __PRIVATE_validatePlainObject(e, t, n) {
  if (!__PRIVATE_looksLikeJsonObject(n) || !__PRIVATE_isPlainObject(n)) {
    const r = __PRIVATE_valueDescription(n);
    throw "an object" === r ? t.Dc(e + " a custom object") : t.Dc(e + " " + r);
  }
}
function __PRIVATE_fieldPathFromArgument(e, t, n) {
  if (
    // If required, replace the FieldPath Compat class with the firestore-exp
    // FieldPath.
    (t = getModularInstance(t)) instanceof FieldPath
  ) return t._internalPath;
  if ("string" == typeof t) return __PRIVATE_fieldPathFromDotSeparatedString(e, t);
  throw __PRIVATE_createError(
    "Field path arguments must be of type string or ",
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
}
var _n = new RegExp("[~\\*/\\[\\]]");
function __PRIVATE_fieldPathFromDotSeparatedString(e, t, n) {
  if (t.search(_n) >= 0) throw __PRIVATE_createError(
    `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
    e,
    /* hasConverter= */
    false,
    /* path= */
    void 0,
    n
  );
  try {
    return new FieldPath(...t.split("."))._internalPath;
  } catch (r) {
    throw __PRIVATE_createError(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      e,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  }
}
function __PRIVATE_createError(e, t, n, r, i) {
  const s = r && !r.isEmpty(), o = void 0 !== i;
  let _ = `Function ${t}() called with invalid data`;
  n && (_ += " (via `toFirestore()`)"), _ += ". ";
  let a = "";
  return (s || o) && (a += " (found", s && (a += ` in field ${r}`), o && (a += ` in document ${i}`), a += ")"), new FirestoreError(D.INVALID_ARGUMENT, _ + e + a);
}
function __PRIVATE_fieldMaskContains(e, t) {
  return e.some((e2) => e2.isEqual(t));
}
var AbstractUserDataWriter = class {
  convertValue(e, t = "none") {
    switch (__PRIVATE_typeOrder(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 11:
        return this.convertObject(e.mapValue, t);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw fail(62114, {
          value: e
        });
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  /**
   * @internal
   */
  convertObjectMap(e, t = "none") {
    const n = {};
    return forEach(e, (e2, r) => {
      n[e2] = this.convertValue(r, t);
    }), n;
  }
  /**
   * @internal
   */
  convertVectorValue(e) {
    const t = e.fields?.[ut].arrayValue?.values?.map((e2) => __PRIVATE_normalizeNumber(e2.doubleValue));
    return new VectorValue(t);
  }
  convertGeoPoint(e) {
    return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude), __PRIVATE_normalizeNumber(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((e2) => this.convertValue(e2, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case "previous":
        const n = __PRIVATE_getPreviousValue(e);
        return null == n ? null : this.convertValue(n, t);
      case "estimate":
        return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = __PRIVATE_normalizeTimestamp(e);
    return new Timestamp(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const n = ResourcePath.fromString(e);
    __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(n), 9688, {
      name: e
    });
    const r = new DatabaseId(n.get(1), n.get(3)), i = new DocumentKey(n.popFirst(5));
    return r.isEqual(t) || // TODO(b/64130202): Somehow support foreign references.
    __PRIVATE_logError(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`), i;
  }
};
var __PRIVATE_ExpUserDataWriter = class extends AbstractUserDataWriter {
  constructor(e) {
    super(), this.firestore = e;
  }
  convertBytes(e) {
    return new Bytes(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new DocumentReference(
      this.firestore,
      /* converter= */
      null,
      t
    );
  }
};
function deleteField() {
  return new __PRIVATE_DeleteFieldValueImpl("deleteField");
}

// node_modules/@firebase/firestore/dist/index.esm.js
var Ut2 = "@firebase/firestore";
var Ht2 = "4.14.1";
function __PRIVATE_isPartialObserver(t) {
  return (function __PRIVATE_implementsAnyMethods(t2, e) {
    if ("object" != typeof t2 || null === t2) return false;
    const n = t2;
    for (const t3 of e) if (t3 in n && "function" == typeof n[t3]) return true;
    return false;
  })(t, ["next", "error", "complete"]);
}
var DocumentSnapshot$1 = class {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.
  /** @hideconstructor protected */
  constructor(t, e, n, r, s) {
    this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, this._converter = s;
  }
  /** Property of the `DocumentSnapshot` that provides the document's ID. */
  get id() {
    return this._key.path.lastSegment();
  }
  /**
   * The `DocumentReference` for the document included in the `DocumentSnapshot`.
   */
  get ref() {
    return new DocumentReference(this._firestore, this._converter, this._key);
  }
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  exists() {
    return null !== this._document;
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new QueryDocumentSnapshot$1(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  /**
   * @internal
   * @private
   *
   * Retrieves all fields in the document as a proto Value. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  _fieldsProto() {
    return this._document?.data.clone().value.mapValue.fields ?? void 0;
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t) {
    if (this._document) {
      const e = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", t));
      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }
};
var QueryDocumentSnapshot$1 = class extends DocumentSnapshot$1 {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */
  data() {
    return super.data();
  }
};
function __PRIVATE_validateHasExplicitOrderByForLimitToLast(t) {
  if ("L" === t.limitType && 0 === t.explicitOrderBy.length) throw new FirestoreError(D.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
var AppliableConstraint = class {
};
var QueryConstraint = class extends AppliableConstraint {
};
function query(t, e, ...n) {
  let r = [];
  e instanceof AppliableConstraint && r.push(e), r = r.concat(n), (function __PRIVATE_validateQueryConstraintArray(t2) {
    const e2 = t2.filter((t3) => t3 instanceof QueryCompositeFilterConstraint).length, n2 = t2.filter((t3) => t3 instanceof QueryFieldFilterConstraint).length;
    if (e2 > 1 || e2 > 0 && n2 > 0) throw new FirestoreError(D.INVALID_ARGUMENT, "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.");
  })(r);
  for (const e2 of r) t = e2._apply(t);
  return t;
}
var QueryFieldFilterConstraint = class _QueryFieldFilterConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e, n) {
    super(), this._field = t, this._op = e, this._value = n, /** The type of this query constraint */
    this.type = "where";
  }
  static _create(t, e, n) {
    return new _QueryFieldFilterConstraint(t, e, n);
  }
  _apply(t) {
    const e = this._parse(t);
    return __PRIVATE_validateNewFieldFilter(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e));
  }
  _parse(t) {
    const e = __PRIVATE_newUserDataReader(t.firestore), n = (function __PRIVATE_newQueryFilter(t2, e2, n2, r, s, a, o) {
      let i;
      if (s.isKeyField()) {
        if ("array-contains" === a || "array-contains-any" === a) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. You can't perform '${a}' queries on documentId().`);
        if ("in" === a || "not-in" === a) {
          __PRIVATE_validateDisjunctiveFilterElements(o, a);
          const e3 = [];
          for (const n3 of o) e3.push(__PRIVATE_parseDocumentIdValue(r, t2, n3));
          i = {
            arrayValue: {
              values: e3
            }
          };
        } else i = __PRIVATE_parseDocumentIdValue(r, t2, o);
      } else "in" !== a && "not-in" !== a && "array-contains-any" !== a || __PRIVATE_validateDisjunctiveFilterElements(o, a), i = __PRIVATE_parseQueryValue(
        n2,
        e2,
        o,
        /* allowArrays= */
        "in" === a || "not-in" === a
      );
      const c = FieldFilter.create(s, a, i);
      return c;
    })(t._query, "where", e, t.firestore._databaseId, this._field, this._op, this._value);
    return n;
  }
};
var QueryCompositeFilterConstraint = class _QueryCompositeFilterConstraint extends AppliableConstraint {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this.type = t, this._queryConstraints = e;
  }
  static _create(t, e) {
    return new _QueryCompositeFilterConstraint(t, e);
  }
  _parse(t) {
    const e = this._queryConstraints.map((e2) => e2._parse(t)).filter((t2) => t2.getFilters().length > 0);
    return 1 === e.length ? e[0] : CompositeFilter.create(e, this._getOperator());
  }
  _apply(t) {
    const e = this._parse(t);
    return 0 === e.getFilters().length ? t : ((function __PRIVATE_validateNewFilter(t2, e2) {
      let n = t2;
      const r = e2.getFlattenedFilters();
      for (const t3 of r) __PRIVATE_validateNewFieldFilter(n, t3), n = __PRIVATE_queryWithAddedFilter(n, t3);
    })(t._query, e), new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedFilter(t._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return "and" === this.type ? "and" : "or";
  }
};
var QueryOrderByConstraint = class _QueryOrderByConstraint extends QueryConstraint {
  /**
   * @internal
   */
  constructor(t, e) {
    super(), this._field = t, this._direction = e, /** The type of this query constraint */
    this.type = "orderBy";
  }
  static _create(t, e) {
    return new _QueryOrderByConstraint(t, e);
  }
  _apply(t) {
    const e = (function __PRIVATE_newQueryOrderBy(t2, e2, n) {
      if (null !== t2.startAt) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t2.endAt) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      const r = new OrderBy(e2, n);
      return r;
    })(t._query, this._field, this._direction);
    return new Query(t.firestore, t.converter, __PRIVATE_queryWithAddedOrderBy(t._query, e));
  }
};
function orderBy(t, e = "asc") {
  const n = e, r = __PRIVATE_fieldPathFromArgument("orderBy", t);
  return QueryOrderByConstraint._create(r, n);
}
function __PRIVATE_parseDocumentIdValue(t, e, n) {
  if ("string" == typeof (n = getModularInstance(n))) {
    if ("" === n) throw new FirestoreError(D.INVALID_ARGUMENT, "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!__PRIVATE_isCollectionGroupQuery(e) && -1 !== n.indexOf("/")) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);
    const r = e.path.child(ResourcePath.fromString(n));
    if (!DocumentKey.isDocumentKey(r)) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);
    return __PRIVATE_refValue(t, new DocumentKey(r));
  }
  if (n instanceof DocumentReference) return __PRIVATE_refValue(t, n._key);
  throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(n)}.`);
}
function __PRIVATE_validateDisjunctiveFilterElements(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);
}
function __PRIVATE_validateNewFieldFilter(t, e) {
  const n = (function __PRIVATE_findOpInsideFilters(t2, e2) {
    for (const n2 of t2) for (const t3 of n2.getFlattenedFilters()) if (e2.indexOf(t3.op) >= 0) return t3.op;
    return null;
  })(t.filters, (function __PRIVATE_conflictingOps(t2) {
    switch (t2) {
      case "!=":
        return [
          "!=",
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "array-contains-any":
      case "in":
        return [
          "not-in"
          /* Operator.NOT_IN */
        ];
      case "not-in":
        return [
          "array-contains-any",
          "in",
          "not-in",
          "!="
          /* Operator.NOT_EQUAL */
        ];
      default:
        return [];
    }
  })(e.op));
  if (null !== n)
    throw n === e.op ? new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`) : new FirestoreError(D.INVALID_ARGUMENT, `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`);
}
function __PRIVATE_applyFirestoreDataConverter(t, e, n) {
  let r;
  return r = t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e, r;
}
var SnapshotMetadata = class {
  /** @hideconstructor */
  constructor(t, e) {
    this.hasPendingWrites = t, this.fromCache = e;
  }
  /**
   * Returns true if this `SnapshotMetadata` is equal to the provided one.
   *
   * @param other - The `SnapshotMetadata` to compare against.
   * @returns true if this `SnapshotMetadata` is equal to the provided one.
   */
  isEqual(t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }
};
var DocumentSnapshot = class _DocumentSnapshot extends DocumentSnapshot$1 {
  /** @hideconstructor protected */
  constructor(t, e, n, r, s, a) {
    super(t, e, n, r, a), this._firestore = t, this._firestoreImpl = t, this.metadata = s;
  }
  /**
   * Returns whether or not the data exists. True if the document exists.
   */
  exists() {
    return super.exists();
  }
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new QueryDocumentSnapshot(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          /* converter= */
          null
        );
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps);
    }
  }
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(t, e = {}) {
    if (this._document) {
      const n = this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get", t));
      if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }
  /**
   * Returns a JSON-serializable representation of this `DocumentSnapshot` instance.
   *
   * @returns a JSON representation of this object.  Throws a {@link FirestoreError} if this
   * `DocumentSnapshot` has pending writes.
   */
  toJSON() {
    if (this.metadata.hasPendingWrites) throw new FirestoreError(D.FAILED_PRECONDITION, "DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    const t = this._document, e = {};
    if (e.type = _DocumentSnapshot._jsonSchemaVersion, e.bundle = "", e.bundleSource = "DocumentSnapshot", e.bundleName = this._key.toString(), !t || !t.isValidDocument() || !t.isFoundDocument()) return e;
    this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields, "previous");
    return e.bundle = (this._firestore, this.ref.path, "NOT SUPPORTED"), e;
  }
};
DocumentSnapshot._jsonSchemaVersion = "firestore/documentSnapshot/1.0", DocumentSnapshot._jsonSchema = {
  type: property("string", DocumentSnapshot._jsonSchemaVersion),
  bundleSource: property("string", "DocumentSnapshot"),
  bundleName: property("string"),
  bundle: property("string")
};
var QueryDocumentSnapshot = class extends DocumentSnapshot {
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */
  data(t = {}) {
    return super.data(t);
  }
};
var QuerySnapshot = class _QuerySnapshot {
  /** @hideconstructor */
  constructor(t, e, n, r) {
    this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new SnapshotMetadata(r.hasPendingWrites, r.fromCache), this.query = n;
  }
  /** An array of all the documents in the `QuerySnapshot`. */
  get docs() {
    const t = [];
    return this.forEach((e) => t.push(e)), t;
  }
  /** The number of documents in the `QuerySnapshot`. */
  get size() {
    return this._snapshot.docs.size;
  }
  /** True if there are no documents in the `QuerySnapshot`. */
  get empty() {
    return 0 === this.size;
  }
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  forEach(t, e) {
    this._snapshot.docs.forEach((n) => {
      t.call(e, new QueryDocumentSnapshot(this._firestore, this._userDataWriter, n.key, n, new SnapshotMetadata(this._snapshot.mutatedKeys.has(n.key), this._snapshot.fromCache), this.query.converter));
    });
  }
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  docChanges(t = {}) {
    const e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges) throw new FirestoreError(D.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = /** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */
    (function __PRIVATE_changesFromSnapshot(t2, e2) {
      if (t2._snapshot.oldDocs.isEmpty()) {
        let e3 = 0;
        return t2._snapshot.docChanges.map((n) => {
          const r = new QueryDocumentSnapshot(t2._firestore, t2._userDataWriter, n.doc.key, n.doc, new SnapshotMetadata(t2._snapshot.mutatedKeys.has(n.doc.key), t2._snapshot.fromCache), t2.query.converter);
          return n.doc, {
            type: "added",
            doc: r,
            oldIndex: -1,
            newIndex: e3++
          };
        });
      }
      {
        let n = t2._snapshot.oldDocs;
        return t2._snapshot.docChanges.filter((t3) => e2 || 3 !== t3.type).map((e3) => {
          const r = new QueryDocumentSnapshot(t2._firestore, t2._userDataWriter, e3.doc.key, e3.doc, new SnapshotMetadata(t2._snapshot.mutatedKeys.has(e3.doc.key), t2._snapshot.fromCache), t2.query.converter);
          let s = -1, a = -1;
          return 0 !== e3.type && (s = n.indexOf(e3.doc.key), n = n.delete(e3.doc.key)), 1 !== e3.type && (n = n.add(e3.doc), a = n.indexOf(e3.doc.key)), {
            type: __PRIVATE_resultChangeType(e3.type),
            doc: r,
            oldIndex: s,
            newIndex: a
          };
        });
      }
    })(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }
  /**
   * Returns a JSON-serializable representation of this `QuerySnapshot` instance.
   *
   * @returns a JSON representation of this object. Throws a {@link FirestoreError} if this
   * `QuerySnapshot` has pending writes.
   */
  toJSON() {
    if (this.metadata.hasPendingWrites) throw new FirestoreError(D.FAILED_PRECONDITION, "QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
    const t = {};
    t.type = _QuerySnapshot._jsonSchemaVersion, t.bundleSource = "QuerySnapshot", t.bundleName = __PRIVATE_AutoId.newId(), this._firestore._databaseId.database, this._firestore._databaseId.projectId;
    const e = [], n = [], r = [];
    return this.docs.forEach((t2) => {
      null !== t2._document && (e.push(t2._document), n.push(this._userDataWriter.convertObjectMap(t2._document.data.value.mapValue.fields, "previous")), r.push(t2.ref.path));
    }), t.bundle = (this._firestore, this.query._query, t.bundleName, "NOT SUPPORTED"), t;
  }
};
function __PRIVATE_resultChangeType(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return fail(61501, {
        type: t
      });
  }
}
QuerySnapshot._jsonSchemaVersion = "firestore/querySnapshot/1.0", QuerySnapshot._jsonSchema = {
  type: property("string", QuerySnapshot._jsonSchemaVersion),
  bundleSource: property("string", "QuerySnapshot"),
  bundleName: property("string"),
  bundle: property("string")
};
var WriteBatch = class {
  /** @hideconstructor */
  constructor(t, e) {
    this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = false, this._dataReader = __PRIVATE_newUserDataReader(t);
  }
  set(t, e, n) {
    this._verifyNotCommitted();
    const r = __PRIVATE_validateReference(t, this._firestore), s = __PRIVATE_applyFirestoreDataConverter(r.converter, e, n), a = __PRIVATE_parseSetData(this._dataReader, "WriteBatch.set", r._key, s, null !== r.converter, n);
    return this._mutations.push(a.toMutation(r._key, Precondition.none())), this;
  }
  update(t, e, n, ...r) {
    this._verifyNotCommitted();
    const s = __PRIVATE_validateReference(t, this._firestore);
    let a;
    return a = "string" == typeof (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(this._dataReader, "WriteBatch.update", s._key, e, n, r) : __PRIVATE_parseUpdateData(this._dataReader, "WriteBatch.update", s._key, e), this._mutations.push(a.toMutation(s._key, Precondition.exists(true))), this;
  }
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  delete(t) {
    this._verifyNotCommitted();
    const e = __PRIVATE_validateReference(t, this._firestore);
    return this._mutations = this._mutations.concat(new __PRIVATE_DeleteMutation(e._key, Precondition.none())), this;
  }
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A `Promise` resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  commit() {
    return this._verifyNotCommitted(), this._committed = true, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }
  _verifyNotCommitted() {
    if (this._committed) throw new FirestoreError(D.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }
};
function __PRIVATE_validateReference(t, e) {
  if ((t = getModularInstance(t)).firestore !== e) throw new FirestoreError(D.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t;
}
function setDoc(t, e, n) {
  t = __PRIVATE_cast(t, DocumentReference);
  const r = __PRIVATE_cast(t.firestore, Firestore), s = __PRIVATE_applyFirestoreDataConverter(t.converter, e, n), o = __PRIVATE_newUserDataReader(r);
  return executeWrite(r, [__PRIVATE_parseSetData(o, "setDoc", t._key, s, null !== t.converter, n).toMutation(t._key, Precondition.none())]);
}
function updateDoc(t, e, n, ...r) {
  t = __PRIVATE_cast(t, DocumentReference);
  const s = __PRIVATE_cast(t.firestore, Firestore), o = __PRIVATE_newUserDataReader(s);
  let i;
  i = "string" == typeof // For Compat types, we have to "extract" the underlying types before
  // performing validation.
  (e = getModularInstance(e)) || e instanceof FieldPath ? __PRIVATE_parseUpdateVarargs(o, "updateDoc", t._key, e, n, r) : __PRIVATE_parseUpdateData(o, "updateDoc", t._key, e);
  return executeWrite(s, [i.toMutation(t._key, Precondition.exists(true))]);
}
function addDoc(t, e) {
  const n = __PRIVATE_cast(t.firestore, Firestore), r = doc(t), s = __PRIVATE_applyFirestoreDataConverter(t.converter, e), o = __PRIVATE_newUserDataReader(t.firestore);
  return executeWrite(n, [__PRIVATE_parseSetData(o, "addDoc", r._key, s, null !== t.converter, {}).toMutation(r._key, Precondition.exists(false))]).then(() => r);
}
function onSnapshot(t, ...e) {
  t = getModularInstance(t);
  let n = {
    includeMetadataChanges: false,
    source: "default"
  }, r = 0;
  "object" != typeof e[r] || __PRIVATE_isPartialObserver(e[r]) || (n = e[r++]);
  const s = {
    includeMetadataChanges: n.includeMetadataChanges,
    source: n.source
  };
  if (__PRIVATE_isPartialObserver(e[r])) {
    const t2 = e[r];
    e[r] = t2.next?.bind(t2), e[r + 1] = t2.error?.bind(t2), e[r + 2] = t2.complete?.bind(t2);
  }
  let o, i, c;
  if (t instanceof DocumentReference) i = __PRIVATE_cast(t.firestore, Firestore), c = __PRIVATE_newQueryForPath(t._key.path), o = {
    next: (n2) => {
      e[r] && e[r](__PRIVATE_convertToDocSnapshot(i, t, n2));
    },
    error: e[r + 1],
    complete: e[r + 2]
  };
  else {
    const n2 = __PRIVATE_cast(t, Query);
    i = __PRIVATE_cast(n2.firestore, Firestore), c = n2._query;
    const s2 = new __PRIVATE_ExpUserDataWriter(i);
    o = {
      next: (t2) => {
        e[r] && e[r](new QuerySnapshot(i, s2, n2, t2));
      },
      error: e[r + 1],
      complete: e[r + 2]
    }, __PRIVATE_validateHasExplicitOrderByForLimitToLast(t._query);
  }
  const h = ensureFirestoreConfigured(i);
  return __PRIVATE_firestoreClientListen(h, c, s, o);
}
function executeWrite(t, e) {
  const n = ensureFirestoreConfigured(t);
  return __PRIVATE_firestoreClientWrite(n, e);
}
function __PRIVATE_convertToDocSnapshot(t, e, n) {
  const r = n.docs.get(e._key), s = new __PRIVATE_ExpUserDataWriter(t);
  return new DocumentSnapshot(t, s, e._key, r, new SnapshotMetadata(n.hasPendingWrites, n.fromCache), e.converter);
}
function writeBatch(t) {
  return t = __PRIVATE_cast(t, Firestore), ensureFirestoreConfigured(t), new WriteBatch(t, (e) => executeWrite(t, e));
}
!(function __PRIVATE_registerFirestore(h, d = true) {
  __PRIVATE_setSDKVersion(SDK_VERSION), _registerComponent(new Component2("firestore", (t, {
    instanceIdentifier: e,
    options: n
  }) => {
    const r = t.getProvider("app").getImmediate(), s = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(t.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(r, t.getProvider("app-check-internal")), __PRIVATE_databaseIdFromApp(r, e), r);
    return n = __spreadValues({
      useFetchStreams: d
    }, n), s._setSettings(n), s;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(Ut2, Ht2, h), // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
  registerVersion(Ut2, Ht2, "esm2020");
})();

// src/app/clientes/clientes.component.ts
function ClientesComponent_div_42_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 29)(18, "span", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function ClientesComponent_div_42_tr_17_Template_button_click_20_listener() {
      const cliente_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cambiarEstado(cliente_r3));
    });
    \u0275\u0275text(21, " \u21BA ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "td", 24)(23, "div", 32)(24, "button", 33);
    \u0275\u0275listener("click", function ClientesComponent_div_42_tr_17_Template_button_click_24_listener() {
      const cliente_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editarCliente(cliente_r3));
    });
    \u0275\u0275text(25, "\u270E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 34);
    \u0275\u0275listener("click", function ClientesComponent_div_42_tr_17_Template_button_click_26_listener() {
      const cliente_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.verHistorial(cliente_r3));
    });
    \u0275\u0275text(27, "\u25A4");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cliente_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.obtenerIniciales(cliente_r3.nombre));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cliente_r3.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r3.dni);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r3.telefono || "Sin tel\xE9fono");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.obtenerResumenMoto(cliente_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r3.ultimaVisita || "Sin registro");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inactive", cliente_r3.estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cliente_r3.estado, " ");
  }
}
function ClientesComponent_div_42_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 17);
    \u0275\u0275listener("click", function ClientesComponent_div_42_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.mostrarMasClientes());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Mostrar m\xE1s (", ctx_r3.quedanClientesOcultos, ") ");
  }
}
function ClientesComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Moto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\xDAltima visita");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ClientesComponent_div_42_tr_17_Template, 28, 9, "tr", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ClientesComponent_div_42_div_18_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r3.clientesMostrados);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.quedanClientesOcultos > 0);
  }
}
function ClientesComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.clientes.length === 0 ? "A\xFAn no hay clientes registrados" : "No se encontraron clientes");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.clientes.length === 0 ? "Agrega tu primer cliente desde el bot\xF3n Nuevo cliente." : "Prueba con otro nombre, DNI o tel\xE9fono.");
  }
}
function ClientesComponent_div_45_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.errorGuardado);
  }
}
function ClientesComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "form", 38);
    \u0275\u0275listener("ngSubmit", function ClientesComponent_div_45_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.guardarCliente());
    });
    \u0275\u0275elementStart(2, "div", 39)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ClientesComponent_div_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "div", 42)(9, "label")(10, "span");
    \u0275\u0275text(11, "Nombre completo *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_45_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formCliente.nombre, $event) || (ctx_r3.formCliente.nombre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientesComponent_div_45_Template_input_input_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.validarSoloLetras("nombre"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label")(14, "span");
    \u0275\u0275text(15, "DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_45_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formCliente.dni, $event) || (ctx_r3.formCliente.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientesComponent_div_45_Template_input_input_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.validarSoloNumeros("dni"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label")(18, "span");
    \u0275\u0275text(19, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_45_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formCliente.telefono, $event) || (ctx_r3.formCliente.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientesComponent_div_45_Template_input_input_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.validarSoloNumeros("telefono"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 46)(22, "span");
    \u0275\u0275text(23, "Motos (separadas por coma)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_div_45_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.formCliente.motos, $event) || (ctx_r3.formCliente.motos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ClientesComponent_div_45_Template_input_input_24_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.validarMotos());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, ClientesComponent_div_45_p_25_Template, 2, 1, "p", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 49)(27, "button", 50);
    \u0275\u0275listener("click", function ClientesComponent_div_45_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarModal());
    });
    \u0275\u0275text(28, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.editando ? "Editar cliente" : "Nuevo cliente");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formCliente.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formCliente.dni);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formCliente.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.formCliente.motos);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.errorGuardado);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.guardandoCliente);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.guardandoCliente);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.guardandoCliente ? "Guardando..." : ctx_r3.editando ? "Guardar cambios" : "Guardar cliente", " ");
  }
}
function ClientesComponent_div_46_ul_10_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.fecha);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.nota);
  }
}
function ClientesComponent_div_46_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 56);
    \u0275\u0275template(1, ClientesComponent_div_46_ul_10_li_1_Template, 5, 2, "li", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.clienteHistorial == null ? null : ctx_r3.clienteHistorial.historial);
  }
}
function ClientesComponent_div_46_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1, "No hay historial disponible para este cliente.");
    \u0275\u0275elementEnd();
  }
}
function ClientesComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 53)(2, "div", 39)(3, "h3");
    \u0275\u0275text(4, "Historial de cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ClientesComponent_div_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarHistorial());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41)(8, "p", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ClientesComponent_div_46_ul_10_Template, 2, 1, "ul", 55)(11, ClientesComponent_div_46_ng_template_11_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noHistory_r9 = \u0275\u0275reference(12);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.clienteHistorial == null ? null : ctx_r3.clienteHistorial.nombre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.clienteHistorial == null ? null : ctx_r3.clienteHistorial.historial == null ? null : ctx_r3.clienteHistorial.historial.length)("ngIfElse", noHistory_r9);
  }
}
function ClientesComponent_div_47_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cliente_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r11.ultimaVisita || "Sin fecha");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", cliente_r11.nombre, " \xB7 ", ctx_r3.obtenerResumenMoto(cliente_r11), "");
  }
}
function ClientesComponent_div_47_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 56);
    \u0275\u0275template(1, ClientesComponent_div_47_ul_8_li_1_Template, 5, 3, "li", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.clientes);
  }
}
function ClientesComponent_div_47_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 57);
    \u0275\u0275text(1, "Todav\xEDa no hay movimientos registrados.");
    \u0275\u0275elementEnd();
  }
}
function ClientesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 53)(2, "div", 39)(3, "h3");
    \u0275\u0275text(4, "Historial general");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40);
    \u0275\u0275listener("click", function ClientesComponent_div_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.cerrarHistorialGeneral());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275template(8, ClientesComponent_div_47_ul_8_Template, 2, 1, "ul", 55)(9, ClientesComponent_div_47_ng_template_9_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noGeneralHistory_r12 = \u0275\u0275reference(10);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r3.clientes.length > 0)("ngIfElse", noGeneralHistory_r12);
  }
}
var ClientesComponent = class _ClientesComponent {
  cdr;
  ngZone;
  clientes = [];
  clientesFiltrados = [];
  clientesVisibles = 10;
  totalClientesRegistrados = signal(this.leerResumenLocal("clientesRegistrados"));
  totalMotosRegistradas = signal(this.leerResumenLocal("motosRegistradas"));
  busqueda = "";
  modalAbierto = false;
  historialAbierto = false;
  editando = false;
  guardandoCliente = false;
  errorGuardado = "";
  clienteHistorial = null;
  historialGeneralAbierto = false;
  formCliente = this.crearClienteVacio();
  db = getFirestore();
  cancelarEscuchaClientes = null;
  cancelarEscuchaResumen = null;
  ultimoResumenGuardado = "";
  constructor(cdr, ngZone) {
    this.cdr = cdr;
    this.ngZone = ngZone;
  }
  ngOnInit() {
    this.cargarResumenGuardado();
    this.cargarClientes();
  }
  ngOnDestroy() {
    this.cancelarEscuchaClientes?.();
    this.cancelarEscuchaResumen?.();
  }
  get clientesMostrados() {
    return this.clientesFiltrados.slice(0, this.clientesVisibles);
  }
  get quedanClientesOcultos() {
    return Math.max(this.clientesFiltrados.length - this.clientesVisibles, 0);
  }
  get fechaPanel() {
    return new Intl.DateTimeFormat("es-PE", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric"
    }).format(/* @__PURE__ */ new Date());
  }
  cargarClientes() {
    try {
      const clientesQuery = query(collection(this.db, "clientes"), orderBy("nombre", "asc"));
      this.cancelarEscuchaClientes?.();
      this.cancelarEscuchaClientes = onSnapshot(clientesQuery, (snapshot) => __async(this, null, function* () {
        const clientesActuales = snapshot.docs.filter((docItem) => docItem.id !== "resumen").map((docItem) => this.normalizarCliente(docItem.id, docItem.data()));
        this.ngZone.run(() => {
          this.clientes = clientesActuales;
          if (clientesActuales.length > 0) {
            this.actualizarResumen();
          }
          this.filtrarClientes();
          this.cdr.detectChanges();
        });
        this.eliminarDireccionDeDocumentos(snapshot.docs).catch((error) => {
          console.warn("No se pudo limpiar el campo direccion:", error);
        });
      }), (error) => {
        console.error("Error cargando clientes:", error);
        this.ngZone.run(() => {
          if (this.clientes.length === 0) {
            this.clientesFiltrados = [];
          }
          this.cdr.detectChanges();
        });
      });
    } catch (error) {
      console.error("Error cargando clientes:", error);
      this.ngZone.run(() => {
        this.clientes = [];
        this.clientesFiltrados = [];
        this.cdr.detectChanges();
      });
    }
  }
  cargarResumenGuardado() {
    this.cancelarEscuchaResumen?.();
    this.cancelarEscuchaResumen = onSnapshot(doc(this.db, "clientes", "resumen"), (snapshot) => {
      if (!snapshot.exists()) {
        return;
      }
      const resumen = snapshot.data();
      this.ngZone.run(() => {
        this.totalClientesRegistrados.set(Number(resumen.clientesRegistrados || 0));
        this.totalMotosRegistradas.set(Number(resumen.motosRegistradas || 0));
        this.ultimoResumenGuardado = `${this.totalClientesRegistrados()}-${this.totalMotosRegistradas()}`;
        this.guardarResumenLocal();
        this.cdr.detectChanges();
      });
    }, (error) => {
      console.warn("No se pudo leer el resumen de clientes:", error);
    });
  }
  filtrarClientes() {
    const texto = this.busqueda.trim().toLowerCase();
    this.clientesVisibles = 10;
    this.clientesFiltrados = this.clientes.filter((cliente) => [
      cliente.nombre,
      cliente.dni,
      cliente.telefono,
      cliente.motos
    ].some((valor) => valor.toLowerCase().includes(texto)));
  }
  mostrarMasClientes() {
    this.clientesVisibles += 10;
  }
  abrirModalNuevo() {
    this.formCliente = this.crearClienteVacio();
    this.editando = false;
    this.errorGuardado = "";
    this.modalAbierto = true;
  }
  editarCliente(cliente) {
    this.formCliente = __spreadProps(__spreadValues({}, cliente), {
      historial: cliente.historial ? [...cliente.historial] : []
    });
    this.editando = true;
    this.errorGuardado = "";
    this.modalAbierto = true;
  }
  verHistorial(cliente) {
    this.clienteHistorial = cliente;
    this.historialAbierto = true;
  }
  cambiarEstado(cliente) {
    return __async(this, null, function* () {
      if (!cliente.id) {
        return;
      }
      const nuevoEstado = cliente.estado === "Activo" ? "Inactivo" : "Activo";
      try {
        yield updateDoc(doc(this.db, "clientes", cliente.id), { estado: nuevoEstado });
      } catch (error) {
        console.error("Error actualizando estado del cliente:", error);
      }
    });
  }
  abrirHistorialGeneral() {
    this.historialGeneralAbierto = true;
  }
  cerrarModal() {
    this.modalAbierto = false;
    this.editando = false;
    this.errorGuardado = "";
    this.guardandoCliente = false;
    this.formCliente = this.crearClienteVacio();
  }
  cerrarHistorial() {
    this.historialAbierto = false;
    this.clienteHistorial = null;
  }
  cerrarHistorialGeneral() {
    this.historialGeneralAbierto = false;
  }
  guardarCliente() {
    return __async(this, null, function* () {
      this.errorGuardado = "";
      const errorValidacion = this.validarFormularioCliente();
      if (errorValidacion) {
        this.errorGuardado = errorValidacion;
        return;
      }
      if (this.guardandoCliente) {
        return;
      }
      this.guardandoCliente = true;
      const historialBase = this.formCliente.historial ? [...this.formCliente.historial] : [];
      const registro = {
        id: this.formCliente.id,
        nombre: this.formCliente.nombre.trim(),
        dni: this.formCliente.dni.trim(),
        telefono: this.formCliente.telefono.trim(),
        motos: this.formCliente.motos.trim(),
        ultimaVisita: this.formCliente.ultimaVisita || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        estado: this.formCliente.estado || "Activo",
        historial: [
          ...historialBase,
          {
            fecha: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
            nota: this.editando ? "Datos actualizados" : "Cliente registrado"
          }
        ]
      };
      try {
        const _a = registro, { id } = _a, registroData = __objRest(_a, ["id"]);
        if (this.editando && this.formCliente.id) {
          const clienteRef = doc(this.db, "clientes", this.formCliente.id);
          yield updateDoc(clienteRef, registroData);
        } else {
          yield addDoc(collection(this.db, "clientes"), registroData);
        }
        this.ngZone.run(() => {
          this.cerrarModal();
          this.cdr.detectChanges();
        });
      } catch (error) {
        console.error("Error guardando cliente:", error);
        this.ngZone.run(() => {
          this.errorGuardado = this.obtenerMensajeErrorGuardado(error);
          this.cdr.detectChanges();
        });
      } finally {
        this.ngZone.run(() => {
          this.guardandoCliente = false;
          this.cdr.detectChanges();
        });
      }
    });
  }
  obtenerIniciales(nombre) {
    return nombre.split(" ").map((palabra) => palabra.charAt(0)).join("").substring(0, 2).toUpperCase();
  }
  obtenerMotos(cliente) {
    return (cliente.motos || cliente.moto || "").split(",").map((moto) => moto.trim()).filter(Boolean);
  }
  obtenerResumenMoto(cliente) {
    return this.obtenerMotos(cliente).join(", ") || "Sin moto registrada";
  }
  validarSoloLetras(campo) {
    this.formCliente[campo] = this.formCliente[campo].replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, "");
  }
  validarSoloNumeros(campo) {
    this.formCliente[campo] = this.formCliente[campo].replace(/\D/g, "");
  }
  validarMotos() {
    this.formCliente.motos = this.formCliente.motos.replace(/[^A-Za-z0-9ÁÉÍÓÚáéíóúÑñ ,.-]/g, "");
  }
  validarFormularioCliente() {
    const nombre = this.formCliente.nombre.trim();
    const dni = this.formCliente.dni.trim();
    const telefono = this.formCliente.telefono.trim();
    const motos = this.formCliente.motos.trim();
    if (!nombre) {
      return "Completa el nombre antes de guardar.";
    }
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
      return "El nombre solo debe contener letras.";
    }
    if (dni && !/^\d{8}$/.test(dni)) {
      return "El DNI debe tener 8 numeros.";
    }
    if (telefono && !/^\d+$/.test(telefono)) {
      return "El telefono solo debe contener numeros.";
    }
    if (motos && !/^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ ,.-]+$/.test(motos)) {
      return "El campo motos no debe contener caracteres especiales.";
    }
    return "";
  }
  actualizarResumen(guardarEnFirestore = true) {
    if (this.clientes.length === 0 && (this.totalClientesRegistrados() > 0 || this.totalMotosRegistradas() > 0)) {
      return;
    }
    this.totalClientesRegistrados.set(this.clientes.length);
    this.totalMotosRegistradas.set(this.clientes.reduce((total, cliente) => total + this.obtenerMotos(cliente).length, 0));
    this.guardarResumenLocal();
    if (guardarEnFirestore) {
      this.guardarResumenEnFirestore();
    }
  }
  exportarCSV() {
    const encabezados = ["Nombre", "DNI", "Telefono", "Motos", "Ultima visita", "Estado"];
    const filas = this.clientesFiltrados.map((cliente) => [
      cliente.nombre,
      cliente.dni,
      cliente.telefono,
      cliente.motos,
      cliente.ultimaVisita,
      cliente.estado
    ]);
    const csv = [encabezados, ...filas].map((fila) => fila.map((valor) => `"${String(valor).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "clientes.csv";
    enlace.click();
    URL.revokeObjectURL(enlace.href);
  }
  exportarPDF() {
    window.print();
  }
  normalizarCliente(id, data) {
    const cliente = data;
    const motos = cliente.motos || [cliente.moto, cliente.placa].filter(Boolean).join(" ");
    return {
      id,
      nombre: cliente.nombre || "",
      dni: cliente.dni || "",
      telefono: cliente.telefono || "",
      motos,
      moto: cliente.moto,
      placa: cliente.placa,
      ultimaVisita: cliente.ultimaVisita || "",
      estado: cliente.estado || "Activo",
      historial: cliente.historial || []
    };
  }
  leerResumenLocal(campo) {
    const resumenLocal = localStorage.getItem("clientesResumen");
    if (!resumenLocal) {
      return 0;
    }
    try {
      const resumen = JSON.parse(resumenLocal);
      return Number(resumen[campo] || 0);
    } catch {
      return 0;
    }
  }
  guardarResumenLocal() {
    if (this.totalClientesRegistrados() === 0 && this.totalMotosRegistradas() === 0) {
      return;
    }
    localStorage.setItem("clientesResumen", JSON.stringify({
      clientesRegistrados: this.totalClientesRegistrados(),
      motosRegistradas: this.totalMotosRegistradas()
    }));
  }
  guardarResumenEnFirestore() {
    const resumen = {
      clientesRegistrados: this.totalClientesRegistrados(),
      motosRegistradas: this.totalMotosRegistradas(),
      actualizadoEn: (/* @__PURE__ */ new Date()).toISOString()
    };
    const resumenClave = `${resumen.clientesRegistrados}-${resumen.motosRegistradas}`;
    if (this.ultimoResumenGuardado === resumenClave) {
      return;
    }
    this.ultimoResumenGuardado = resumenClave;
    setDoc(doc(this.db, "clientes", "resumen"), resumen, { merge: true }).catch((error) => {
      console.warn("No se pudo guardar el resumen de clientes:", error);
      this.ultimoResumenGuardado = "";
    });
  }
  eliminarDireccionDeDocumentos(docs) {
    return __async(this, null, function* () {
      const docsConDireccion = docs.filter((docItem) => {
        const data = docItem.data();
        return Object.prototype.hasOwnProperty.call(data, "direccion");
      });
      if (!docsConDireccion.length) {
        return;
      }
      const batch = writeBatch(this.db);
      docsConDireccion.forEach((docItem) => {
        batch.update(docItem.ref, { direccion: deleteField() });
      });
      yield batch.commit();
    });
  }
  obtenerMensajeErrorGuardado(error) {
    const firebaseError = error;
    if (firebaseError.code === "permission-denied") {
      return "Firebase bloquea el guardado. Publica en Firestore Rules la regla temporal: allow read, write: if true;";
    }
    if (firebaseError.code === "unavailable") {
      return "No hay conexion con Firebase. Revisa internet e intenta otra vez.";
    }
    return firebaseError.message || "No se pudo guardar el cliente. Intenta nuevamente.";
  }
  crearClienteVacio() {
    return {
      nombre: "",
      dni: "",
      telefono: "",
      motos: "",
      ultimaVisita: "",
      estado: "Activo",
      historial: []
    };
  }
  static \u0275fac = function ClientesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClientesComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesComponent, selectors: [["app-clientes"]], decls: 48, vars: 9, consts: [["emptyState", ""], ["noHistory", ""], ["noGeneralHistory", ""], [1, "clientes-shell"], [1, "topbar"], [1, "brand-block"], [1, "topbar-actions"], [1, "date-chip"], ["aria-label", "Resumen de clientes", 1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-card", "stat-purple"], [1, "clientes-panel"], [1, "panel-toolbar"], [1, "panel-title"], [1, "toolbar-buttons"], ["type", "button", 1, "outline-button", "csv", 3, "click"], ["type", "button", 1, "outline-button", "pdf", 3, "click"], ["type", "button", 1, "outline-button", 3, "click"], ["type", "button", 1, "primary-button", 3, "click"], [1, "search-box"], ["type", "text", "placeholder", "Buscar por nombre, DNI o tel\xE9fono...", 3, "ngModelChange", "input", "ngModel"], ["class", "table-wrap", 4, "ngIf", "ngIfElse"], ["class", "modal-backdrop", 4, "ngIf"], [1, "table-wrap"], [1, "print-hidden"], [4, "ngFor", "ngForOf"], ["class", "show-more", 4, "ngIf"], [1, "client-cell"], [1, "avatar"], [1, "status-actions"], [1, "status-badge"], ["type", "button", "title", "Cambiar estado", 1, "state-toggle", 3, "click"], [1, "row-actions"], ["type", "button", "title", "Editar cliente", 1, "row-button", "edit", 3, "click"], ["type", "button", "title", "Ver historial", 1, "row-button", "history", 3, "click"], [1, "show-more"], [1, "empty-state"], [1, "modal-backdrop"], ["novalidate", "", 1, "modal-card", "client-modal", 3, "ngSubmit"], [1, "modal-header"], ["type", "button", "aria-label", "Cerrar", 1, "close-btn", 3, "click"], [1, "modal-body"], [1, "form-grid"], ["name", "nombre", "type", "text", "placeholder", "Ej. Juan R\xEDos Medina", "required", "", 3, "ngModelChange", "input", "ngModel"], ["name", "dni", "type", "text", "inputmode", "numeric", "maxlength", "8", "placeholder", "Ej. 45231890", 3, "ngModelChange", "input", "ngModel"], ["name", "telefono", "type", "tel", "inputmode", "numeric", "placeholder", "Ej. 987654321", 3, "ngModelChange", "input", "ngModel"], [1, "span-2"], ["name", "motos", "type", "text", "placeholder", "Honda CB500 ABC-123, Yamaha FZ ZZZ-999", 3, "ngModelChange", "input", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "ghost-button", 3, "click", "disabled"], ["type", "submit", 1, "primary-button", "save", 3, "disabled"], [1, "form-error"], [1, "modal-card", "history-modal"], [1, "history-name"], ["class", "history-list", 4, "ngIf", "ngIfElse"], [1, "history-list"], [1, "no-data"]], template: function ClientesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "header", 4)(2, "div", 5)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Clientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Gesti\xF3n y registro de clientes y sus motos");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 8)(12, "article", 9)(13, "div")(14, "strong");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Clientes registrados");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "article", 10)(19, "div")(20, "strong");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Motos registradas");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "section", 11)(25, "div", 12)(26, "div", 13)(27, "h2");
      \u0275\u0275text(28, "Lista de Clientes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 14)(30, "button", 15);
      \u0275\u0275listener("click", function ClientesComponent_Template_button_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportarCSV());
      });
      \u0275\u0275text(31, "\u25A7 CSV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 16);
      \u0275\u0275listener("click", function ClientesComponent_Template_button_click_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportarPDF());
      });
      \u0275\u0275text(33, "\u25A4 PDF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 17);
      \u0275\u0275listener("click", function ClientesComponent_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.abrirHistorialGeneral());
      });
      \u0275\u0275text(35, "\u25A3 Historial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function ClientesComponent_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.abrirModalNuevo());
      });
      \u0275\u0275text(37, "\u2659 Nuevo cliente");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "label", 19)(39, "span");
      \u0275\u0275text(40, "\u2315");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ClientesComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.busqueda, $event) || (ctx.busqueda = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function ClientesComponent_Template_input_input_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filtrarClientes());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, ClientesComponent_div_42_Template, 19, 2, "div", 21)(43, ClientesComponent_ng_template_43_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, ClientesComponent_div_45_Template, 31, 9, "div", 22)(46, ClientesComponent_div_46_Template, 13, 3, "div", 22)(47, ClientesComponent_div_47_Template, 11, 2, "div", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyState_r13 = \u0275\u0275reference(44);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.fechaPanel);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalClientesRegistrados());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalMotosRegistradas());
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.busqueda);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.clientesFiltrados.length > 0)("ngIfElse", emptyState_r13);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.modalAbierto);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historialAbierto);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historialGeneralAbierto);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.clientes-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 0 23px 28px;\n  background: #edf4fb;\n  color: #162033;\n  font-family:\n    Inter,\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.topbar[_ngcontent-%COMP%] {\n  min-height: 62px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 12px 1px;\n}\n.brand-block[_ngcontent-%COMP%], \n.topbar-actions[_ngcontent-%COMP%], \n.panel-toolbar[_ngcontent-%COMP%], \n.toolbar-buttons[_ngcontent-%COMP%], \n.client-cell[_ngcontent-%COMP%], \n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.brand-block[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.brand-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.1;\n}\n.brand-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #8a98b2;\n  font-size: 12px;\n}\n.topbar-actions[_ngcontent-%COMP%] {\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.date-chip[_ngcontent-%COMP%] {\n  height: 32px;\n  border: 1px solid #dbe5f1;\n  border-radius: 16px;\n  background: #f8fbff;\n  color: #66748d;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 14px;\n  font-size: 12px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(160px, 1fr));\n  gap: 16px;\n  margin: 20px 0 18px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  min-height: 106px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 17px 20px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid #dde6f1;\n  border-top-width: 3px;\n  box-shadow: 0 7px 16px rgba(28, 45, 74, 0.09);\n}\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 22px;\n  color: #182235;\n  font-size: 31px;\n  line-height: 1;\n}\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #687b99;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  border-top-color: #3f80f7;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  border-top-color: #8b5cf6;\n}\n.clientes-panel[_ngcontent-%COMP%] {\n  padding: 20px 20px 16px;\n  border: 1px solid #dbe5f1;\n  border-radius: 13px;\n  background: #f8fbff;\n  box-shadow: 0 6px 15px rgba(28, 45, 74, 0.08);\n}\n.panel-toolbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 9px;\n  border-left: 4px solid #3f80f7;\n}\n.panel-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #123fa3;\n  font-size: 13px;\n}\n.panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #91a0b8;\n  font-size: 12px;\n}\n.toolbar-buttons[_ngcontent-%COMP%] {\n  gap: 9px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.primary-button[_ngcontent-%COMP%], \n.outline-button[_ngcontent-%COMP%], \n.ghost-button[_ngcontent-%COMP%], \n.row-button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.16s ease,\n    box-shadow 0.16s ease,\n    border-color 0.16s ease;\n}\n.primary-button[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0 13px;\n  border-radius: 7px;\n  background: #3f80f7;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 800;\n}\n.primary-button.save[_ngcontent-%COMP%] {\n  height: 38px;\n  min-width: 138px;\n}\n.outline-button[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 0 11px;\n  border-radius: 7px;\n  background: #ffffff;\n  border-color: #dce4ee;\n  color: #4e5d72;\n  font-size: 12px;\n}\n.outline-button.csv[_ngcontent-%COMP%] {\n  border-color: #8ff0bf;\n  background: #f2fff8;\n  color: #0c9860;\n  font-weight: 800;\n}\n.outline-button.pdf[_ngcontent-%COMP%] {\n  border-color: #ffb3b3;\n  background: #fff5f5;\n  color: #ef4444;\n  font-weight: 800;\n}\n.primary-button[_ngcontent-%COMP%]:hover, \n.outline-button[_ngcontent-%COMP%]:hover, \n.ghost-button[_ngcontent-%COMP%]:hover, \n.row-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.14);\n}\n.search-box[_ngcontent-%COMP%] {\n  height: 37px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 20px;\n  padding: 0 13px;\n  border: 1px solid #dbe5f1;\n  border-radius: 8px;\n  background: #f7fbff;\n  color: #9aa8ba;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #26374d;\n  font-size: 13px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 850px;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  border-bottom: 1px solid #e5ecf4;\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 900;\n  text-align: left;\n  text-transform: uppercase;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-bottom: 1px solid #edf2f7;\n  color: #7384a0;\n  font-size: 12px;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #ffffff;\n}\n.client-cell[_ngcontent-%COMP%] {\n  gap: 9px;\n  color: #162033;\n}\n.client-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.client-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.client-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #91a0b8;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  flex: 0 0 auto;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  border: 1px solid #c5b6ff;\n  background: #f3efff;\n  color: #7c3aed;\n  font-size: 10px;\n  font-weight: 900;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   .avatar[_ngcontent-%COMP%] {\n  border-color: #ffd38a;\n  background: #fff8e8;\n  color: #f59e0b;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(3)   .avatar[_ngcontent-%COMP%], \ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4)   .avatar[_ngcontent-%COMP%] {\n  border-color: #8beecb;\n  background: #eafff6;\n  color: #0ca971;\n}\n.status-badge[_ngcontent-%COMP%] {\n  min-width: 70px;\n  height: 26px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #98c4ff;\n  border-radius: 8px;\n  background: #eaf3ff;\n  color: #1b70ff;\n  font-size: 11px;\n  font-weight: 700;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  border-color: #ffbebc;\n  background: #fff1f0;\n  color: #dc2626;\n}\n.row-actions[_ngcontent-%COMP%] {\n  gap: 5px;\n}\n.status-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.state-toggle[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 1px solid #bfdbfe;\n  border-radius: 7px;\n  background: #eff6ff;\n  color: #2563eb;\n  cursor: pointer;\n}\n.row-button[_ngcontent-%COMP%] {\n  width: 29px;\n  height: 24px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 900;\n}\n.row-button.edit[_ngcontent-%COMP%] {\n  background: #3f80f7;\n  color: #ffffff;\n}\n.row-button.history[_ngcontent-%COMP%] {\n  border-color: #d9cbff;\n  background: #f5f0ff;\n  color: #8b5cf6;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 42px 12px;\n  text-align: center;\n  color: #7c8da8;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #26374d;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(15, 23, 42, 0.45);\n}\n.modal-card[_ngcontent-%COMP%] {\n  width: min(100%, 518px);\n  max-height: calc(100vh - 24px);\n  overflow: hidden;\n  border: 1px solid #dfe6ef;\n  border-radius: 13px;\n  background: #ffffff;\n  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.28);\n}\n.modal-header[_ngcontent-%COMP%] {\n  height: 73px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid #edf1f6;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #dfe6ef;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 18px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 174px);\n  overflow-y: auto;\n  padding: 23px 20px 34px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 12px;\n}\n.form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4f5f75;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  border: 1px solid #dbe2ea;\n  border-radius: 8px;\n  outline: none;\n  padding: 0 12px;\n  background: #f9fbfd;\n  color: #1f2937;\n  font-size: 13px;\n}\n.form-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3f80f7;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(63, 128, 247, 0.12);\n}\n.form-error[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  padding: 10px 12px;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  background: #fff1f2;\n  color: #b91c1c;\n  font-size: 12px;\n}\n.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 23px;\n  border-top: 1px solid #edf1f6;\n  background: #fbfcfe;\n}\n.ghost-button[_ngcontent-%COMP%] {\n  height: 38px;\n  min-width: 90px;\n  border-color: #dfe6ef;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #44546a;\n}\n.primary-button[_ngcontent-%COMP%]:disabled, \n.ghost-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n  transform: none;\n  box-shadow: none;\n}\n.history-modal[_ngcontent-%COMP%] {\n  width: min(100%, 560px);\n}\n.history-name[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #162033;\n  font-weight: 800;\n}\n.history-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.history-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 13px 14px;\n  border: 1px solid #e5ecf4;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  background: #fbfdff;\n}\n.history-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #8292aa;\n  font-size: 12px;\n}\n.history-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.no-data[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n}\n@media (max-width: 900px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .panel-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .toolbar-buttons[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .clientes-shell[_ngcontent-%COMP%] {\n    padding: 0 14px 20px;\n  }\n  .topbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .span-2[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .ghost-button[_ngcontent-%COMP%], \n   .primary-button.save[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media print {\n  .topbar-actions[_ngcontent-%COMP%], \n   .stats-grid[_ngcontent-%COMP%], \n   .toolbar-buttons[_ngcontent-%COMP%], \n   .search-box[_ngcontent-%COMP%], \n   .row-actions[_ngcontent-%COMP%], \n   .show-more[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .clientes-shell[_ngcontent-%COMP%], \n   .clientes-panel[_ngcontent-%COMP%] {\n    padding: 0;\n    background: #ffffff;\n    box-shadow: none;\n    border: 0;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .print-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=clientes.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesComponent, [{
    type: Component,
    args: [{ selector: "app-clientes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="clientes-shell">
    <header class="topbar">
        <div class="brand-block">
            <div>
                <h1>Clientes</h1>
                <p>Gesti\xF3n y registro de clientes y sus motos</p>
            </div>
        </div>

        <div class="topbar-actions">
            <span class="date-chip">{{ fechaPanel }}</span>
        </div>
    </header>

    <section class="stats-grid" aria-label="Resumen de clientes">
        <article class="stat-card stat-blue">
            <div>
                <strong>{{ totalClientesRegistrados() }}</strong>
                <span>Clientes registrados</span>
            </div>
        </article>

        <article class="stat-card stat-purple">
            <div>
                <strong>{{ totalMotosRegistradas() }}</strong>
                <span>Motos registradas</span>
            </div>
        </article>
    </section>

    <section class="clientes-panel">
        <div class="panel-toolbar">
            <div class="panel-title">
                <h2>Lista de Clientes</h2>

            </div>

            <div class="toolbar-buttons">
                <button class="outline-button csv" type="button" (click)="exportarCSV()">\u25A7 CSV</button>
                <button class="outline-button pdf" type="button" (click)="exportarPDF()">\u25A4 PDF</button>
                <button class="outline-button" type="button" (click)="abrirHistorialGeneral()">\u25A3 Historial</button>
                <button class="primary-button" type="button" (click)="abrirModalNuevo()">\u2659 Nuevo cliente</button>
            </div>
        </div>

        <label class="search-box">
            <span>\u2315</span>
            <input type="text" placeholder="Buscar por nombre, DNI o tel\xE9fono..." [(ngModel)]="busqueda"
                (input)="filtrarClientes()" />
        </label>

        <div class="table-wrap" *ngIf="clientesFiltrados.length > 0; else emptyState">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tel\xE9fono</th>
                        <th>Moto</th>
                        <th>\xDAltima visita</th>
                        <th>Estado</th>
                        <th class="print-hidden">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let cliente of clientesMostrados">
                        <td>
                            <div class="client-cell">
                                <span class="avatar">{{ obtenerIniciales(cliente.nombre) }}</span>
                                <div>
                                    <strong>{{ cliente.nombre }}</strong>
                                    <small>{{ cliente.dni }}</small>
                                </div>
                            </div>
                        </td>
                        <td>{{ cliente.telefono || 'Sin tel\xE9fono' }}</td>
                        <td>{{ obtenerResumenMoto(cliente) }}</td>
                        <td>{{ cliente.ultimaVisita || 'Sin registro' }}</td>
            <td>
                            <div class="status-actions">
                                <span class="status-badge" [class.inactive]="cliente.estado !== 'Activo'">
                                    {{ cliente.estado }}
                                </span>
                                <button class="state-toggle" type="button" title="Cambiar estado"
                                    (click)="cambiarEstado(cliente)">
                                    \u21BA
                                </button>
                            </div>
                        </td>
            <td class="print-hidden">
                            <div class="row-actions">
                                <button class="row-button edit" type="button" title="Editar cliente"
                                    (click)="editarCliente(cliente)">\u270E</button>
                                <button class="row-button history" type="button" title="Ver historial"
                                    (click)="verHistorial(cliente)">\u25A4</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="show-more" *ngIf="quedanClientesOcultos > 0">
                <button class="outline-button" type="button" (click)="mostrarMasClientes()">
                    Mostrar m\xE1s ({{ quedanClientesOcultos }})
                </button>
            </div>
        </div>

        <ng-template #emptyState>
            <div class="empty-state">
                <strong>{{ clientes.length === 0 ? 'A\xFAn no hay clientes registrados' : 'No se encontraron clientes'
                    }}</strong>
                <p>{{ clientes.length === 0 ? 'Agrega tu primer cliente desde el bot\xF3n Nuevo cliente.' : 'Prueba con
                    otro nombre, DNI o tel\xE9fono.' }}</p>
            </div>
        </ng-template>
    </section>

    <div class="modal-backdrop" *ngIf="modalAbierto">
        <form class="modal-card client-modal" novalidate (ngSubmit)="guardarCliente()">
            <div class="modal-header">
                <h3>{{ editando ? 'Editar cliente' : 'Nuevo cliente' }}</h3>
                <button class="close-btn" type="button" (click)="cerrarModal()" aria-label="Cerrar">\xD7</button>
            </div>

            <div class="modal-body">
                <div class="form-grid">
                    <label>
                        <span>Nombre completo *</span>
                        <input name="nombre" type="text" placeholder="Ej. Juan R\xEDos Medina"
                            [(ngModel)]="formCliente.nombre" (input)="validarSoloLetras('nombre')" required />
                    </label>

                    <label>
                        <span>DNI</span>
                        <input name="dni" type="text" inputmode="numeric" maxlength="8" placeholder="Ej. 45231890"
                            [(ngModel)]="formCliente.dni" (input)="validarSoloNumeros('dni')" />
                    </label>

                    <label>
                        <span>Tel\xE9fono</span>
                        <input name="telefono" type="tel" inputmode="numeric" placeholder="Ej. 987654321"
                            [(ngModel)]="formCliente.telefono" (input)="validarSoloNumeros('telefono')" />
                    </label>

                    <label class="span-2">
                        <span>Motos (separadas por coma)</span>
                        <input name="motos" type="text" placeholder="Honda CB500 ABC-123, Yamaha FZ ZZZ-999"
                            [(ngModel)]="formCliente.motos" (input)="validarMotos()" />
                    </label>
                </div>

                <p class="form-error" *ngIf="errorGuardado">{{ errorGuardado }}</p>
            </div>

            <div class="modal-actions">
                <button class="ghost-button" type="button" (click)="cerrarModal()"
                    [disabled]="guardandoCliente">Cancelar</button>
                <button class="primary-button save" type="submit" [disabled]="guardandoCliente">
                    {{ guardandoCliente ? 'Guardando...' : (editando ? 'Guardar cambios' : 'Guardar cliente') }}
                </button>
            </div>
        </form>
    </div>

    <div class="modal-backdrop" *ngIf="historialAbierto">
        <div class="modal-card history-modal">
            <div class="modal-header">
                <h3>Historial de cliente</h3>
                <button class="close-btn" type="button" (click)="cerrarHistorial()" aria-label="Cerrar">\xD7</button>
            </div>
            <div class="modal-body">
                <p class="history-name">{{ clienteHistorial?.nombre }}</p>
                <ul class="history-list" *ngIf="clienteHistorial?.historial?.length; else noHistory">
                    <li *ngFor="let item of clienteHistorial?.historial">
                        <span>{{ item.fecha }}</span>
                        <p>{{ item.nota }}</p>
                    </li>
                </ul>
                <ng-template #noHistory>
                    <p class="no-data">No hay historial disponible para este cliente.</p>
                </ng-template>
            </div>
        </div>
    </div>

    <div class="modal-backdrop" *ngIf="historialGeneralAbierto">
        <div class="modal-card history-modal">
            <div class="modal-header">
                <h3>Historial general</h3>
                <button class="close-btn" type="button" (click)="cerrarHistorialGeneral()"
                    aria-label="Cerrar">\xD7</button>
            </div>
            <div class="modal-body">
                <ul class="history-list" *ngIf="clientes.length > 0; else noGeneralHistory">
                    <li *ngFor="let cliente of clientes">
                        <span>{{ cliente.ultimaVisita || 'Sin fecha' }}</span>
                        <p>{{ cliente.nombre }} \xB7 {{ obtenerResumenMoto(cliente) }}</p>
                    </li>
                </ul>
                <ng-template #noGeneralHistory>
                    <p class="no-data">Todav\xEDa no hay movimientos registrados.</p>
                </ng-template>
            </div>
        </div>
    </div>
</div>
`, styles: ['/* src/app/clientes/clientes.component.css */\n:host {\n  display: block;\n}\n.clientes-shell {\n  min-height: 100vh;\n  padding: 0 23px 28px;\n  background: #edf4fb;\n  color: #162033;\n  font-family:\n    Inter,\n    "Segoe UI",\n    Arial,\n    sans-serif;\n}\n.topbar {\n  min-height: 62px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  padding: 12px 1px;\n}\n.brand-block,\n.topbar-actions,\n.panel-toolbar,\n.toolbar-buttons,\n.client-cell,\n.row-actions {\n  display: flex;\n  align-items: center;\n}\n.brand-block {\n  gap: 12px;\n}\n.brand-block h1 {\n  margin: 0;\n  font-size: 18px;\n  line-height: 1.1;\n}\n.brand-block p {\n  margin: 4px 0 0;\n  color: #8a98b2;\n  font-size: 12px;\n}\n.topbar-actions {\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.date-chip {\n  height: 32px;\n  border: 1px solid #dbe5f1;\n  border-radius: 16px;\n  background: #f8fbff;\n  color: #66748d;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 14px;\n  font-size: 12px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(160px, 1fr));\n  gap: 16px;\n  margin: 20px 0 18px;\n}\n.stat-card {\n  min-height: 106px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 17px 20px;\n  border-radius: 12px;\n  background: #ffffff;\n  border: 1px solid #dde6f1;\n  border-top-width: 3px;\n  box-shadow: 0 7px 16px rgba(28, 45, 74, 0.09);\n}\n.stat-card strong {\n  display: block;\n  margin-bottom: 22px;\n  color: #182235;\n  font-size: 31px;\n  line-height: 1;\n}\n.stat-card span {\n  color: #687b99;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n.stat-blue {\n  border-top-color: #3f80f7;\n}\n.stat-purple {\n  border-top-color: #8b5cf6;\n}\n.clientes-panel {\n  padding: 20px 20px 16px;\n  border: 1px solid #dbe5f1;\n  border-radius: 13px;\n  background: #f8fbff;\n  box-shadow: 0 6px 15px rgba(28, 45, 74, 0.08);\n}\n.panel-toolbar {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.panel-title {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding-left: 9px;\n  border-left: 4px solid #3f80f7;\n}\n.panel-title h2 {\n  margin: 0;\n  color: #123fa3;\n  font-size: 13px;\n}\n.panel-title span {\n  color: #91a0b8;\n  font-size: 12px;\n}\n.toolbar-buttons {\n  gap: 9px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\nbutton {\n  font: inherit;\n}\n.primary-button,\n.outline-button,\n.ghost-button,\n.row-button {\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition:\n    transform 0.16s ease,\n    box-shadow 0.16s ease,\n    border-color 0.16s ease;\n}\n.primary-button {\n  height: 30px;\n  padding: 0 13px;\n  border-radius: 7px;\n  background: #3f80f7;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 800;\n}\n.primary-button.save {\n  height: 38px;\n  min-width: 138px;\n}\n.outline-button {\n  height: 30px;\n  padding: 0 11px;\n  border-radius: 7px;\n  background: #ffffff;\n  border-color: #dce4ee;\n  color: #4e5d72;\n  font-size: 12px;\n}\n.outline-button.csv {\n  border-color: #8ff0bf;\n  background: #f2fff8;\n  color: #0c9860;\n  font-weight: 800;\n}\n.outline-button.pdf {\n  border-color: #ffb3b3;\n  background: #fff5f5;\n  color: #ef4444;\n  font-weight: 800;\n}\n.primary-button:hover,\n.outline-button:hover,\n.ghost-button:hover,\n.row-button:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.14);\n}\n.search-box {\n  height: 37px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 20px;\n  padding: 0 13px;\n  border: 1px solid #dbe5f1;\n  border-radius: 8px;\n  background: #f7fbff;\n  color: #9aa8ba;\n}\n.search-box input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #26374d;\n  font-size: 13px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 850px;\n  border-collapse: collapse;\n}\nth {\n  padding: 12px 10px;\n  border-bottom: 1px solid #e5ecf4;\n  color: #94a3b8;\n  font-size: 11px;\n  font-weight: 900;\n  text-align: left;\n  text-transform: uppercase;\n}\ntd {\n  padding: 10px;\n  border-bottom: 1px solid #edf2f7;\n  color: #7384a0;\n  font-size: 12px;\n}\ntbody tr:hover {\n  background: #ffffff;\n}\n.client-cell {\n  gap: 9px;\n  color: #162033;\n}\n.client-cell strong,\n.client-cell small {\n  display: block;\n}\n.client-cell small {\n  margin-top: 2px;\n  color: #91a0b8;\n}\n.avatar {\n  width: 28px;\n  height: 28px;\n  flex: 0 0 auto;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  border: 1px solid #c5b6ff;\n  background: #f3efff;\n  color: #7c3aed;\n  font-size: 10px;\n  font-weight: 900;\n}\ntbody tr:nth-child(2) .avatar {\n  border-color: #ffd38a;\n  background: #fff8e8;\n  color: #f59e0b;\n}\ntbody tr:nth-child(3) .avatar,\ntbody tr:nth-child(4) .avatar {\n  border-color: #8beecb;\n  background: #eafff6;\n  color: #0ca971;\n}\n.status-badge {\n  min-width: 70px;\n  height: 26px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #98c4ff;\n  border-radius: 8px;\n  background: #eaf3ff;\n  color: #1b70ff;\n  font-size: 11px;\n  font-weight: 700;\n}\n.status-badge.inactive {\n  border-color: #ffbebc;\n  background: #fff1f0;\n  color: #dc2626;\n}\n.row-actions {\n  gap: 5px;\n}\n.status-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.state-toggle {\n  width: 24px;\n  height: 24px;\n  border: 1px solid #bfdbfe;\n  border-radius: 7px;\n  background: #eff6ff;\n  color: #2563eb;\n  cursor: pointer;\n}\n.row-button {\n  width: 29px;\n  height: 24px;\n  display: grid;\n  place-items: center;\n  border-radius: 8px;\n  font-weight: 900;\n}\n.row-button.edit {\n  background: #3f80f7;\n  color: #ffffff;\n}\n.row-button.history {\n  border-color: #d9cbff;\n  background: #f5f0ff;\n  color: #8b5cf6;\n}\n.empty-state {\n  padding: 42px 12px;\n  text-align: center;\n  color: #7c8da8;\n}\n.empty-state strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #26374d;\n}\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  z-index: 50;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(15, 23, 42, 0.45);\n}\n.modal-card {\n  width: min(100%, 518px);\n  max-height: calc(100vh - 24px);\n  overflow: hidden;\n  border: 1px solid #dfe6ef;\n  border-radius: 13px;\n  background: #ffffff;\n  box-shadow: 0 22px 45px rgba(15, 23, 42, 0.28);\n}\n.modal-header {\n  height: 73px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid #edf1f6;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 16px;\n}\n.close-btn {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #dfe6ef;\n  border-radius: 8px;\n  background: #f8fafc;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 18px;\n}\n.modal-body {\n  max-height: calc(100vh - 174px);\n  overflow-y: auto;\n  padding: 23px 20px 34px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 12px;\n}\n.form-grid label {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-grid span {\n  color: #4f5f75;\n  font-size: 11px;\n  font-weight: 900;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n.form-grid input {\n  height: 40px;\n  width: 100%;\n  border: 1px solid #dbe2ea;\n  border-radius: 8px;\n  outline: none;\n  padding: 0 12px;\n  background: #f9fbfd;\n  color: #1f2937;\n  font-size: 13px;\n}\n.form-grid input:focus {\n  border-color: #3f80f7;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(63, 128, 247, 0.12);\n}\n.form-error {\n  margin: 14px 0 0;\n  padding: 10px 12px;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  background: #fff1f2;\n  color: #b91c1c;\n  font-size: 12px;\n}\n.span-2 {\n  grid-column: span 2;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 16px 23px;\n  border-top: 1px solid #edf1f6;\n  background: #fbfcfe;\n}\n.ghost-button {\n  height: 38px;\n  min-width: 90px;\n  border-color: #dfe6ef;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #44546a;\n}\n.primary-button:disabled,\n.ghost-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.65;\n  transform: none;\n  box-shadow: none;\n}\n.history-modal {\n  width: min(100%, 560px);\n}\n.history-name {\n  margin: 0 0 14px;\n  color: #162033;\n  font-weight: 800;\n}\n.history-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.history-list li {\n  padding: 13px 14px;\n  border: 1px solid #e5ecf4;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  background: #fbfdff;\n}\n.history-list span {\n  display: block;\n  margin-bottom: 4px;\n  color: #8292aa;\n  font-size: 12px;\n}\n.history-list p,\n.no-data {\n  margin: 0;\n  color: #334155;\n}\n@media (max-width: 900px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .panel-toolbar {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .toolbar-buttons {\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 640px) {\n  .clientes-shell {\n    padding: 0 14px 20px;\n  }\n  .topbar {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .span-2 {\n    grid-column: span 1;\n  }\n  .modal-actions {\n    flex-direction: column-reverse;\n  }\n  .ghost-button,\n  .primary-button.save {\n    width: 100%;\n  }\n}\n@media print {\n  .topbar-actions,\n  .stats-grid,\n  .toolbar-buttons,\n  .search-box,\n  .row-actions,\n  .show-more {\n    display: none;\n  }\n  .clientes-shell,\n  .clientes-panel {\n    padding: 0;\n    background: #ffffff;\n    box-shadow: none;\n    border: 0;\n  }\n  table {\n    min-width: 0;\n  }\n  .print-hidden {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=clientes.component.css.map */\n'] }]
  }], () => [{ type: ChangeDetectorRef }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesComponent, { className: "ClientesComponent", filePath: "app/clientes/clientes.component.ts", lineNumber: 49 });
})();

// src/app/services/ordenes.service.ts
var MECANICOS_COLLECTION = "MECANICOS";
var OrdenesService = class _OrdenesService {
  db = getFirestore();
  cancelarEscuchaMecanicos = null;
  ordenes = signal([
    {
      id: "001",
      cliente: "Juan P\xE9rez",
      vehiculo: "Auto",
      descripcion: "Cambio de aceite y ajuste de frenos",
      status: "Pendiente"
    },
    {
      id: "002",
      cliente: "Carlos D\xEDaz",
      vehiculo: "Moto",
      descripcion: "Revisi\xF3n general de motor",
      status: "Completada",
      mecanicoId: "m2",
      mecanicoNombre: "Ana Rojas"
    }
  ]);
  mecanicos = signal([]);
  mecanicosDisponibles = computed(() => this.mecanicos().filter((mecanico) => mecanico.disponible));
  constructor() {
    this.cargarMecanicos();
  }
  cargarMecanicos() {
    const mecanicosQuery = query(collection(this.db, MECANICOS_COLLECTION), orderBy("nombre_completo", "asc"));
    this.cancelarEscuchaMecanicos?.();
    this.cancelarEscuchaMecanicos = onSnapshot(mecanicosQuery, (snapshot) => {
      const mecanicosData = snapshot.docs.map((docSnapshot) => {
        const data = docSnapshot.data();
        return {
          id: docSnapshot.id,
          nombre: data["nombre_completo"] ?? data["nombre"] ?? "Sin nombre",
          dni: data["dni"],
          telefono: data["telefono"],
          correo: data["correo"],
          direccion: data["direccion"],
          especialidad: data["especialidad"],
          fecha_ingreso: data["fecha_ingreso"],
          estado: data["estado"],
          disponible: data["disponible"] ?? true,
          trabajoActual: data["trabajoActual"]
        };
      });
      this.mecanicos.set(mecanicosData);
    });
  }
  agregarMecanico(mecanico) {
    return __async(this, null, function* () {
      yield addDoc(collection(this.db, MECANICOS_COLLECTION), {
        nombre: mecanico.nombre,
        nombre_completo: mecanico.nombre,
        dni: mecanico.dni || "",
        telefono: mecanico.telefono || "",
        correo: mecanico.correo || "",
        direccion: mecanico.direccion || "",
        especialidad: mecanico.especialidad || "",
        fecha_ingreso: mecanico.fecha_ingreso || (/* @__PURE__ */ new Date()).toISOString(),
        estado: mecanico.estado || "Activo",
        disponible: true,
        trabajoActual: null
      });
    });
  }
  asignarOrden(ordenId, mecanicoId) {
    const mecanico = this.mecanicos().find((item) => item.id === mecanicoId);
    if (!mecanico || !mecanico.disponible) {
      return;
    }
    this.ordenes.update((ordenes) => ordenes.map((orden) => {
      if (orden.id !== ordenId) {
        return orden;
      }
      return __spreadProps(__spreadValues({}, orden), {
        mecanicoId,
        mecanicoNombre: mecanico.nombre,
        status: "En proceso"
      });
    }));
    updateDoc(doc(this.db, "mecanicos", mecanicoId), {
      disponible: false,
      trabajoActual: ordenId
    }).catch(() => {
      this.mecanicos.update((lista) => lista.map((item) => item.id === mecanicoId ? __spreadProps(__spreadValues({}, item), {
        disponible: false,
        trabajoActual: ordenId
      }) : item));
    });
  }
  marcarCompletada(ordenId) {
    const orden = this.ordenes().find((item) => item.id === ordenId);
    if (!orden) {
      return;
    }
    this.ordenes.update((ordenes) => ordenes.map((item) => item.id === ordenId ? __spreadProps(__spreadValues({}, item), {
      status: "Completada"
    }) : item));
    if (orden.mecanicoId) {
      updateDoc(doc(this.db, "mecanicos", orden.mecanicoId), {
        disponible: true,
        trabajoActual: void 0
      }).catch(() => {
        this.mecanicos.update((lista) => lista.map((item) => item.id === orden.mecanicoId ? __spreadProps(__spreadValues({}, item), {
          disponible: true,
          trabajoActual: void 0
        }) : item));
      });
    }
  }
  crearOrden(cliente, vehiculo, descripcion, mecanicoId) {
    const numeroNuevo = String(this.ordenes().length + 1).padStart(3, "0");
    const mecanico = mecanicoId ? this.mecanicos().find((item) => item.id === mecanicoId) : void 0;
    const nuevaOrden = {
      id: numeroNuevo,
      cliente,
      vehiculo,
      descripcion,
      status: mecanico ? "En proceso" : "Pendiente",
      mecanicoId: mecanico?.id,
      mecanicoNombre: mecanico?.nombre
    };
    this.ordenes.update((ordenes) => [nuevaOrden, ...ordenes]);
    if (mecanico) {
      updateDoc(doc(this.db, "mecanicos", mecanico.id), {
        disponible: false,
        trabajoActual: nuevaOrden.id
      }).catch(() => {
        this.mecanicos.update((lista) => lista.map((item) => item.id === mecanico.id ? __spreadProps(__spreadValues({}, item), {
          disponible: false,
          trabajoActual: nuevaOrden.id
        }) : item));
      });
    }
  }
  static \u0275fac = function OrdenesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdenesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdenesService, factory: _OrdenesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdenesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/ordenes/ordenes.component.ts
function OrdenesComponent_section_9_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r3 = ctx.$implicit;
    \u0275\u0275property("value", mecanico_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mecanico_r3.nombre, " ");
  }
}
function OrdenesComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 7)(1, "h2");
    \u0275\u0275text(2, "Crear nueva orden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "label");
    \u0275\u0275text(5, " Cliente ");
    \u0275\u0275elementStart(6, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function OrdenesComponent_section_9_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaOrden.cliente, $event) || (ctx_r1.nuevaOrden.cliente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, " Tipo de veh\xEDculo ");
    \u0275\u0275elementStart(9, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function OrdenesComponent_section_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaOrden.vehiculo, $event) || (ctx_r1.nuevaOrden.vehiculo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 11);
    \u0275\u0275text(11, " Descripci\xF3n ");
    \u0275\u0275elementStart(12, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function OrdenesComponent_section_9_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaOrden.descripcion, $event) || (ctx_r1.nuevaOrden.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 11);
    \u0275\u0275text(14, " Mec\xE1nico a asignar ");
    \u0275\u0275elementStart(15, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function OrdenesComponent_section_9_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.nuevaOrden.mecanicoId, $event) || (ctx_r1.nuevaOrden.mecanicoId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 14);
    \u0275\u0275text(17, "Sin asignar");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, OrdenesComponent_section_9_option_18_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 16);
    \u0275\u0275listener("click", function OrdenesComponent_section_9_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.crearOrden());
    });
    \u0275\u0275text(20, "Guardar orden");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaOrden.cliente);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaOrden.vehiculo);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaOrden.descripcion);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.nuevaOrden.mecanicoId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.ordenesService.mecanicosDisponibles());
  }
}
function OrdenesComponent_div_11_div_15_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r6 = ctx.$implicit;
    \u0275\u0275property("value", mecanico_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mecanico_r6.nombre, " ");
  }
}
function OrdenesComponent_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function OrdenesComponent_div_11_div_15_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.asignaciones[order_r5.id], $event) || (ctx_r1.asignaciones[order_r5.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "option", 14);
    \u0275\u0275text(3, "Seleccionar mec\xE1nico");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, OrdenesComponent_div_11_div_15_option_4_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function OrdenesComponent_div_11_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const order_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.asignarOrden(order_r5.id));
    });
    \u0275\u0275text(6, " Asignar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.asignaciones[order_r5.id]);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.ordenesService.mecanicosDisponibles());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.asignaciones[order_r5.id]);
  }
}
function OrdenesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 23)(12, "strong");
    \u0275\u0275text(13, "Mec\xE1nico:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, OrdenesComponent_div_11_div_15_Template, 7, 3, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", order_r5.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.cliente);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.vehiculo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r5.descripcion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", order_r5.mecanicoNombre || "Sin asignar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !order_r5.mecanicoId);
  }
}
function OrdenesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " No hay \xF3rdenes pendientes. ");
    \u0275\u0275elementEnd();
  }
}
var OrdenesComponent = class _OrdenesComponent {
  ordenesService;
  busqueda = "";
  mostrarForm = true;
  asignaciones = {};
  nuevaOrden = {
    cliente: "",
    vehiculo: "",
    descripcion: "",
    mecanicoId: ""
  };
  constructor(ordenesService) {
    this.ordenesService = ordenesService;
  }
  get ordenesFiltradas() {
    const filtro = this.busqueda.toLowerCase().trim();
    return this.ordenesService.ordenes().filter((orden) => orden.status === "Pendiente").filter((orden) => {
      if (!filtro) {
        return true;
      }
      return [orden.id, orden.cliente, orden.vehiculo, orden.descripcion, orden.mecanicoNombre].filter(Boolean).some((valor) => valor?.toLowerCase().includes(filtro));
    });
  }
  asignarOrden(ordenId) {
    const mecanicoId = this.asignaciones[ordenId];
    if (!mecanicoId) {
      return;
    }
    this.ordenesService.asignarOrden(ordenId, mecanicoId);
    delete this.asignaciones[ordenId];
  }
  completarOrden(ordenId) {
    this.ordenesService.marcarCompletada(ordenId);
  }
  crearOrden() {
    const cliente = this.nuevaOrden.cliente.trim();
    const vehiculo = this.nuevaOrden.vehiculo.trim();
    const descripcion = this.nuevaOrden.descripcion.trim();
    if (!cliente || !vehiculo || !descripcion) {
      return;
    }
    const mecanicoId = this.nuevaOrden.mecanicoId || void 0;
    this.ordenesService.crearOrden(cliente, vehiculo, descripcion, mecanicoId);
    this.nuevaOrden = {
      cliente: "",
      vehiculo: "",
      descripcion: "",
      mecanicoId: ""
    };
  }
  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }
  static \u0275fac = function OrdenesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdenesComponent)(\u0275\u0275directiveInject(OrdenesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdenesComponent, selectors: [["app-ordenes"]], decls: 13, vars: 4, consts: [[1, "orders-page"], [1, "orders-header"], [1, "primary-btn", 3, "click"], ["class", "order-form-card", 4, "ngIf"], [1, "orders-grid"], ["class", "order-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "order-form-card"], [1, "order-form"], ["type", "text", "placeholder", "Nombre del cliente", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Auto, Moto, Cami\xF3n...", 3, "ngModelChange", "ngModel"], [1, "full-width"], ["rows", "3", "placeholder", "Descripci\xF3n del trabajo", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "primary-btn", "create-btn", 3, "click"], [3, "value"], [1, "order-card"], [1, "card-header"], [1, "order-client"], [1, "order-vehicle"], [1, "order-desc"], [1, "order-mechanic"], ["class", "assign-row", 4, "ngIf"], [1, "assign-row"], [1, "assign-btn", 3, "click", "disabled"], [1, "empty-state"]], template: function OrdenesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "\xD3rdenes pendientes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Gesti\xF3n simple de \xF3rdenes: cliente, veh\xEDculo, descripci\xF3n y mec\xE1nico a asignar.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 2);
      \u0275\u0275listener("click", function OrdenesComponent_Template_button_click_7_listener() {
        return ctx.mostrarForm = !ctx.mostrarForm;
      });
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, OrdenesComponent_section_9_Template, 21, 5, "section", 3);
      \u0275\u0275elementStart(10, "section", 4);
      \u0275\u0275template(11, OrdenesComponent_div_11_Template, 16, 6, "div", 5)(12, OrdenesComponent_div_12_Template, 2, 0, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.mostrarForm ? "Ocultar formulario" : "Nueva orden", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mostrarForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.ordenesFiltradas);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.ordenesFiltradas.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.orders-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  padding: 24px;\n  background: #eef2ff;\n  box-sizing: border-box;\n}\n.orders-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.orders-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n  color: #111827;\n}\n.orders-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #4b5563;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 12px 18px;\n  border-radius: 16px;\n  background: #4338ca;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n}\n.order-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n  margin-bottom: 20px;\n}\n.order-form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 1.2rem;\n  color: #111827;\n}\n.order-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.order-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: #334155;\n  font-weight: 600;\n}\n.order-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.order-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.order-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  color: #111827;\n}\n.order-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 90px;\n  resize: vertical;\n}\n.create-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 4px;\n}\n.orders-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 18px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #111827;\n}\n.order-client[_ngcontent-%COMP%], \n.order-vehicle[_ngcontent-%COMP%], \n.order-mechanic[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n  font-size: 0.95rem;\n}\n.order-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #334155;\n  line-height: 1.5;\n}\n.assign-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.assign-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n}\n.assign-btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: #4338ca;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  padding: 24px;\n  border-radius: 20px;\n  background: white;\n  border: 1px dashed #cbd5e1;\n  color: #475569;\n  text-align: center;\n}\n@media (max-width: 1100px) {\n  .orders-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .orders-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=ordenes.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdenesComponent, [{
    type: Component,
    args: [{ selector: "app-ordenes", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="orders-page">
  <header class="orders-header">
    <div>
      <h1>\xD3rdenes pendientes</h1>
      <p>Gesti\xF3n simple de \xF3rdenes: cliente, veh\xEDculo, descripci\xF3n y mec\xE1nico a asignar.</p>
    </div>

    <button class="primary-btn" (click)="mostrarForm = !mostrarForm">
      {{ mostrarForm ? 'Ocultar formulario' : 'Nueva orden' }}
    </button>
  </header>

  <section class="order-form-card" *ngIf="mostrarForm">
    <h2>Crear nueva orden</h2>
    <div class="order-form">
      <label>
        Cliente
        <input type="text" placeholder="Nombre del cliente" [(ngModel)]="nuevaOrden.cliente" />
      </label>

      <label>
        Tipo de veh\xEDculo
        <input type="text" placeholder="Auto, Moto, Cami\xF3n..." [(ngModel)]="nuevaOrden.vehiculo" />
      </label>

      <label class="full-width">
        Descripci\xF3n
        <textarea rows="3" placeholder="Descripci\xF3n del trabajo" [(ngModel)]="nuevaOrden.descripcion"></textarea>
      </label>

      <label class="full-width">
        Mec\xE1nico a asignar
        <select [(ngModel)]="nuevaOrden.mecanicoId">
          <option value="">Sin asignar</option>
          <option *ngFor="let mecanico of ordenesService.mecanicosDisponibles()" [value]="mecanico.id">
            {{ mecanico.nombre }}
          </option>
        </select>
      </label>

      <button class="primary-btn create-btn" (click)="crearOrden()">Guardar orden</button>
    </div>
  </section>

  <section class="orders-grid">
    <div class="order-card" *ngFor="let order of ordenesFiltradas">
      <div class="card-header">
        <div>
          <h3>#{{ order.id }}</h3>
          <p class="order-client">{{ order.cliente }}</p>
          <p class="order-vehicle">{{ order.vehiculo }}</p>
        </div>
      </div>

      <p class="order-desc">{{ order.descripcion }}</p>
      <p class="order-mechanic">
        <strong>Mec\xE1nico:</strong> {{ order.mecanicoNombre || 'Sin asignar' }}
      </p>

      <div class="assign-row" *ngIf="!order.mecanicoId">
        <select [(ngModel)]="asignaciones[order.id]">
          <option value="">Seleccionar mec\xE1nico</option>
          <option *ngFor="let mecanico of ordenesService.mecanicosDisponibles()" [value]="mecanico.id">
            {{ mecanico.nombre }}
          </option>
        </select>
        <button class="assign-btn" [disabled]="!asignaciones[order.id]" (click)="asignarOrden(order.id)">
          Asignar
        </button>
      </div>
    </div>

    <div class="empty-state" *ngIf="ordenesFiltradas.length === 0">
      No hay \xF3rdenes pendientes.
    </div>
  </section>
</div>
`, styles: ["/* src/app/ordenes/ordenes.component.css */\n.orders-page {\n  min-height: 100vh;\n  width: 100%;\n  padding: 24px;\n  background: #eef2ff;\n  box-sizing: border-box;\n}\n.orders-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.orders-header h1 {\n  margin: 0;\n  font-size: 2rem;\n  color: #111827;\n}\n.orders-header p {\n  margin: 6px 0 0;\n  color: #4b5563;\n}\n.primary-btn {\n  border: none;\n  padding: 12px 18px;\n  border-radius: 16px;\n  background: #4338ca;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n}\n.order-form-card {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n  margin-bottom: 20px;\n}\n.order-form-card h2 {\n  margin: 0 0 14px;\n  font-size: 1.2rem;\n  color: #111827;\n}\n.order-form {\n  display: grid;\n  gap: 14px;\n}\n.order-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: #334155;\n  font-weight: 600;\n}\n.order-form input,\n.order-form textarea,\n.order-form select {\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n  color: #111827;\n}\n.order-form textarea {\n  min-height: 90px;\n  resize: vertical;\n}\n.create-btn {\n  width: 100%;\n  margin-top: 4px;\n}\n.orders-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.order-card {\n  background: white;\n  border-radius: 20px;\n  padding: 18px;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-header {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.card-header h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #111827;\n}\n.order-client,\n.order-vehicle,\n.order-mechanic {\n  margin: 0;\n  color: #475569;\n  font-size: 0.95rem;\n}\n.order-desc {\n  margin: 0;\n  color: #334155;\n  line-height: 1.5;\n}\n.assign-row {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.assign-row select {\n  width: 100%;\n  padding: 12px 14px;\n  border-radius: 14px;\n  border: 1px solid #cbd5e1;\n  background: #f8fafc;\n}\n.assign-btn {\n  border: none;\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: #4338ca;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n}\n.empty-state {\n  grid-column: 1 / -1;\n  padding: 24px;\n  border-radius: 20px;\n  background: white;\n  border: 1px dashed #cbd5e1;\n  color: #475569;\n  text-align: center;\n}\n@media (max-width: 1100px) {\n  .orders-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .orders-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=ordenes.component.css.map */\n"] }]
  }], () => [{ type: OrdenesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdenesComponent, { className: "OrdenesComponent", filePath: "app/ordenes/ordenes.component.ts", lineNumber: 13 });
})();

// src/app/inventario/inventario.component.ts
var InventarioComponent = class _InventarioComponent {
  static \u0275fac = function InventarioComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventarioComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventarioComponent, selectors: [["app-inventario"]], decls: 3, vars: 0, consts: [[1, "module-page"]], template: function InventarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p");
      \u0275\u0275text(2, "hola mundo");
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventarioComponent, [{
    type: Component,
    args: [{ selector: "app-inventario", imports: [], template: '<div class="module-page">\n  <p>hola mundo</p>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventarioComponent, { className: "InventarioComponent", filePath: "app/inventario/inventario.component.ts", lineNumber: 9 });
})();

// src/app/ventas/ventas.component.ts
var VentasComponent = class _VentasComponent {
  static \u0275fac = function VentasComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentasComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentasComponent, selectors: [["app-ventas"]], decls: 3, vars: 0, consts: [[1, "module-page"]], template: function VentasComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p");
      \u0275\u0275text(2, "hola mundo");
      \u0275\u0275elementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentasComponent, [{
    type: Component,
    args: [{ selector: "app-ventas", imports: [], template: '<div class="module-page">\n  <p>hola mundo</p>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentasComponent, { className: "VentasComponent", filePath: "app/ventas/ventas.component.ts", lineNumber: 9 });
})();

// src/app/mecanicos/mecanicos.component.ts
function MecanicosComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensajeExito);
  }
}
function MecanicosComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.mensajeError);
  }
}
function MecanicosComponent_article_51_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Orden asignada: ", mecanico_r2.trabajoActual, "");
  }
}
function MecanicosComponent_article_51_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Sin trabajo asignado");
    \u0275\u0275elementEnd();
  }
}
function MecanicosComponent_article_51_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("DNI: ", mecanico_r2.dni, "");
  }
}
function MecanicosComponent_article_51_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Tel: ", mecanico_r2.telefono, "");
  }
}
function MecanicosComponent_article_51_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Correo: ", mecanico_r2.correo, "");
  }
}
function MecanicosComponent_article_51_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Especialidad: ", mecanico_r2.especialidad, "");
  }
}
function MecanicosComponent_article_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, " Estado: ");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, MecanicosComponent_article_51_p_7_Template, 2, 1, "p", 25)(8, MecanicosComponent_article_51_p_8_Template, 2, 0, "p", 25)(9, MecanicosComponent_article_51_p_9_Template, 2, 1, "p", 25)(10, MecanicosComponent_article_51_p_10_Template, 2, 1, "p", 25)(11, MecanicosComponent_article_51_p_11_Template, 2, 1, "p", 25)(12, MecanicosComponent_article_51_p_12_Template, 2, 1, "p", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mecanico_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mecanico_r2.nombre);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("busy", !mecanico_r2.disponible);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mecanico_r2.disponible ? "Disponible" : "Ocupado", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mecanico_r2.trabajoActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mecanico_r2.trabajoActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mecanico_r2.dni);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mecanico_r2.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mecanico_r2.correo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", mecanico_r2.especialidad);
  }
}
var MecanicosComponent = class _MecanicosComponent {
  ordenesService;
  mecanicoForm = {
    nombre: "",
    dni: "",
    telefono: "",
    correo: "",
    direccion: "",
    especialidad: "",
    fecha_ingreso: (/* @__PURE__ */ new Date()).toISOString(),
    estado: "Activo"
  };
  mensajeError = "";
  mensajeExito = "";
  constructor(ordenesService) {
    this.ordenesService = ordenesService;
  }
  agregarMecanico() {
    return __async(this, null, function* () {
      this.mensajeError = "";
      this.mensajeExito = "";
      if (!this.mecanicoForm.nombre?.trim()) {
        this.mensajeError = "El nombre del mec\xE1nico es obligatorio.";
        return;
      }
      try {
        yield this.ordenesService.agregarMecanico(__spreadProps(__spreadValues({}, this.mecanicoForm), {
          nombre: this.mecanicoForm.nombre.trim()
        }));
        this.mensajeExito = "Mec\xE1nico guardado correctamente.";
        this.mecanicoForm = {
          nombre: "",
          dni: "",
          telefono: "",
          correo: "",
          direccion: "",
          especialidad: "",
          fecha_ingreso: (/* @__PURE__ */ new Date()).toISOString(),
          estado: "Activo"
        };
      } catch (error) {
        console.error("Error al guardar mec\xE1nico:", error);
        this.mensajeError = "No se pudo guardar el mec\xE1nico. Revisa la conexi\xF3n a Firebase.";
      }
    });
  }
  static \u0275fac = function MecanicosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MecanicosComponent)(\u0275\u0275directiveInject(OrdenesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MecanicosComponent, selectors: [["app-mecanicos"]], decls: 70, vars: 12, consts: [[1, "module-page"], [1, "module-header"], [1, "body-card", "add-mechanic-card"], [1, "card-header-row"], [1, "badge"], [1, "add-form"], [1, "form-grid"], [1, "form-field"], ["type", "text", "placeholder", "Ingresa el nombre", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Documento de identidad", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "N\xFAmero de contacto", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Correo electr\xF3nico", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "C\xF3mo ubicar al mec\xE1nico", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej. motor, frenos, electricidad", 3, "ngModelChange", "ngModel"], [1, "primary-btn", "full-width", 3, "click"], ["class", "form-message success", 4, "ngIf"], ["class", "form-message error", 4, "ngIf"], [1, "module-body"], [1, "body-card"], [1, "mecanico-list"], ["class", "mecanico-card", 4, "ngFor", "ngForOf"], [1, "form-message", "success"], [1, "form-message", "error"], [1, "mecanico-card"], [1, "status-text"], [4, "ngIf"]], template: function MecanicosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Mec\xE1nicos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Agrega mec\xE1nicos y revisa qui\xE9n est\xE1 disponible en Firestore.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 2)(8, "div", 3)(9, "div")(10, "h2");
      \u0275\u0275text(11, "Agregar mec\xE1nico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Registra un nuevo t\xE9cnico y mantenlo disponible para asignar \xF3rdenes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "span", 4);
      \u0275\u0275text(15, "Nuevo registro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 5)(17, "div", 6)(18, "label", 7)(19, "span");
      \u0275\u0275text(20, "Nombre completo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.nombre, $event) || (ctx.mecanicoForm.nombre = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "label", 7)(23, "span");
      \u0275\u0275text(24, "DNI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.dni, $event) || (ctx.mecanicoForm.dni = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "label", 7)(27, "span");
      \u0275\u0275text(28, "Tel\xE9fono");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.telefono, $event) || (ctx.mecanicoForm.telefono = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "label", 7)(31, "span");
      \u0275\u0275text(32, "Correo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.correo, $event) || (ctx.mecanicoForm.correo = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "label", 7)(35, "span");
      \u0275\u0275text(36, "Direcci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.direccion, $event) || (ctx.mecanicoForm.direccion = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "label", 7)(39, "span");
      \u0275\u0275text(40, "Especialidad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function MecanicosComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mecanicoForm.especialidad, $event) || (ctx.mecanicoForm.especialidad = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "button", 14);
      \u0275\u0275listener("click", function MecanicosComponent_Template_button_click_42_listener() {
        return ctx.agregarMecanico();
      });
      \u0275\u0275text(43, "Guardar mec\xE1nico");
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, MecanicosComponent_div_44_Template, 2, 1, "div", 15)(45, MecanicosComponent_div_45_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 17)(47, "section", 18)(48, "h2");
      \u0275\u0275text(49, "Equipo de taller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 19);
      \u0275\u0275template(51, MecanicosComponent_article_51_Template, 13, 10, "article", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "section", 18)(53, "h2");
      \u0275\u0275text(54, "Resumen de asignaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "En el m\xF3dulo de \xF3rdenes puedes crear \xF3rdenes nuevas y asignar t\xE9cnicos disponibles directamente a cada trabajo.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul")(58, "li");
      \u0275\u0275text(59, "Total mec\xE1nicos: ");
      \u0275\u0275elementStart(60, "strong");
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li");
      \u0275\u0275text(63, "Disponibles: ");
      \u0275\u0275elementStart(64, "strong");
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li");
      \u0275\u0275text(67, "Ocupados: ");
      \u0275\u0275elementStart(68, "strong");
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.nombre);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.dni);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.telefono);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.correo);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.direccion);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.mecanicoForm.especialidad);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.mensajeExito);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mensajeError);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.ordenesService.mecanicos());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.ordenesService.mecanicos().length);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ordenesService.mecanicosDisponibles().length);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.ordenesService.mecanicos().length - ctx.ordenesService.mecanicosDisponibles().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.module-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 100%;\n}\n.module-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 28px;\n  background: #0f172a;\n  border-radius: 24px;\n  box-shadow: 0 4px 40px rgba(8, 16, 39, 0.08);\n}\n.module-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.85rem;\n  color: #f8fafc;\n}\n.module-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #94a3b8;\n}\n.metric-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.metric-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 140px;\n  border-radius: 24px;\n  color: #0f172a;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);\n}\n.metric-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: 0.1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0));\n}\n.metric-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n}\n.card-purple[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f3e8ff 0%,\n      #ede9fe 100%);\n}\n.card-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.card-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n}\n.card-yellow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fef3c7 0%,\n      #fef08a 100%);\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #475569;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  width: 48px;\n  height: 48px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.85);\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n}\n.module-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.body-card[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  border-radius: 24px;\n  background: #0f172a;\n  box-shadow: 0 8px 50px rgba(8, 16, 39, 0.1);\n}\n.add-mechanic-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #1e293b 100%);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.card-header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f8fafc;\n}\n.card-header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #cbd5e1;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.18);\n  color: #bfdbfe;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.add-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: #cbd5e1;\n  font-size: 0.92rem;\n}\n.form-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 48px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  background: #111827;\n  color: #f8fafc;\n  outline: none;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #60a5fa;\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.12);\n}\n.primary-btn[_ngcontent-%COMP%] {\n  width: fit-content;\n  padding: 14px 26px;\n  border: none;\n  border-radius: 16px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.form-message[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 14px;\n  margin-top: 14px;\n  font-size: 0.94rem;\n}\n.form-message.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #bbf7d0;\n}\n.form-message.error[_ngcontent-%COMP%] {\n  background: rgba(248, 113, 113, 0.12);\n  color: #fecaca;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 900px) {\n  .module-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=mecanicos.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MecanicosComponent, [{
    type: Component,
    args: [{ selector: "app-mecanicos", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="module-page">
  <div class="module-header">
    <div>
      <h1>Mec\xE1nicos</h1>
      <p>Agrega mec\xE1nicos y revisa qui\xE9n est\xE1 disponible en Firestore.</p>
    </div>
  </div>

  <section class="body-card add-mechanic-card">
    <div class="card-header-row">
      <div>
        <h2>Agregar mec\xE1nico</h2>
        <p>Registra un nuevo t\xE9cnico y mantenlo disponible para asignar \xF3rdenes.</p>
      </div>
      <span class="badge">Nuevo registro</span>
    </div>

    <div class="add-form">
      <div class="form-grid">
        <label class="form-field">
          <span>Nombre completo</span>
          <input type="text" [(ngModel)]="mecanicoForm.nombre" placeholder="Ingresa el nombre" />
        </label>

        <label class="form-field">
          <span>DNI</span>
          <input type="text" [(ngModel)]="mecanicoForm.dni" placeholder="Documento de identidad" />
        </label>

        <label class="form-field">
          <span>Tel\xE9fono</span>
          <input type="text" [(ngModel)]="mecanicoForm.telefono" placeholder="N\xFAmero de contacto" />
        </label>

        <label class="form-field">
          <span>Correo</span>
          <input type="email" [(ngModel)]="mecanicoForm.correo" placeholder="Correo electr\xF3nico" />
        </label>

        <label class="form-field">
          <span>Direcci\xF3n</span>
          <input type="text" [(ngModel)]="mecanicoForm.direccion" placeholder="C\xF3mo ubicar al mec\xE1nico" />
        </label>

        <label class="form-field">
          <span>Especialidad</span>
          <input type="text" [(ngModel)]="mecanicoForm.especialidad" placeholder="Ej. motor, frenos, electricidad" />
        </label>
      </div>

      <button class="primary-btn full-width" (click)="agregarMecanico()">Guardar mec\xE1nico</button>

      <div class="form-message success" *ngIf="mensajeExito">{{ mensajeExito }}</div>
      <div class="form-message error" *ngIf="mensajeError">{{ mensajeError }}</div>
    </div>
  </section>

  <div class="module-body">
    <section class="body-card">
      <h2>Equipo de taller</h2>
      <div class="mecanico-list">
        <article class="mecanico-card" *ngFor="let mecanico of ordenesService.mecanicos()">
          <h3>{{ mecanico.nombre }}</h3>
          <p class="status-text">
            Estado:
            <span [class.busy]="!mecanico.disponible">
              {{ mecanico.disponible ? 'Disponible' : 'Ocupado' }}
            </span>
          </p>
          <p *ngIf="mecanico.trabajoActual">Orden asignada: {{ mecanico.trabajoActual }}</p>
          <p *ngIf="!mecanico.trabajoActual">Sin trabajo asignado</p>
          <p *ngIf="mecanico.dni">DNI: {{ mecanico.dni }}</p>
          <p *ngIf="mecanico.telefono">Tel: {{ mecanico.telefono }}</p>
          <p *ngIf="mecanico.correo">Correo: {{ mecanico.correo }}</p>
          <p *ngIf="mecanico.especialidad">Especialidad: {{ mecanico.especialidad }}</p>
        </article>
      </div>
    </section>

    <section class="body-card">
      <h2>Resumen de asignaciones</h2>
      <p>En el m\xF3dulo de \xF3rdenes puedes crear \xF3rdenes nuevas y asignar t\xE9cnicos disponibles directamente a cada trabajo.</p>
      <ul>
        <li>Total mec\xE1nicos: <strong>{{ ordenesService.mecanicos().length }}</strong></li>
        <li>Disponibles: <strong>{{ ordenesService.mecanicosDisponibles().length }}</strong></li>
        <li>Ocupados: <strong>{{ ordenesService.mecanicos().length - ordenesService.mecanicosDisponibles().length }}</strong></li>
      </ul>
    </section>
  </div>
</div>
`, styles: ['/* src/app/mecanicos/mecanicos.component.css */\n.module-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  width: 100%;\n}\n.module-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 28px;\n  background: #0f172a;\n  border-radius: 24px;\n  box-shadow: 0 4px 40px rgba(8, 16, 39, 0.08);\n}\n.module-header h1 {\n  margin: 0;\n  font-size: 1.85rem;\n  color: #f8fafc;\n}\n.module-header p {\n  margin: 8px 0 0;\n  color: #94a3b8;\n}\n.metric-cards {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.metric-card {\n  position: relative;\n  overflow: hidden;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-height: 140px;\n  border-radius: 24px;\n  color: #0f172a;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);\n}\n.metric-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: 0.1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0));\n}\n.metric-card > * {\n  position: relative;\n}\n.card-purple {\n  background:\n    linear-gradient(\n      180deg,\n      #f3e8ff 0%,\n      #ede9fe 100%);\n}\n.card-blue {\n  background:\n    linear-gradient(\n      180deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n}\n.card-green {\n  background:\n    linear-gradient(\n      180deg,\n      #dcfce7 0%,\n      #bbf7d0 100%);\n}\n.card-yellow {\n  background:\n    linear-gradient(\n      180deg,\n      #fef3c7 0%,\n      #fef08a 100%);\n}\n.metric-value {\n  font-size: 2.2rem;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.metric-label {\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #475569;\n}\n.metric-icon {\n  align-self: flex-end;\n  width: 48px;\n  height: 48px;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.85);\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n}\n.module-body {\n  display: flex;\n  gap: 24px;\n}\n.body-card {\n  flex: 1;\n  padding: 24px;\n  border-radius: 24px;\n  background: #0f172a;\n  box-shadow: 0 8px 50px rgba(8, 16, 39, 0.1);\n}\n.add-mechanic-card {\n  background:\n    linear-gradient(\n      180deg,\n      #111827 0%,\n      #1e293b 100%);\n  border: 1px solid rgba(148, 163, 184, 0.12);\n}\n.card-header-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.card-header-row h2 {\n  margin: 0;\n  color: #f8fafc;\n}\n.card-header-row p {\n  margin: 6px 0 0;\n  color: #cbd5e1;\n}\n.badge {\n  padding: 8px 14px;\n  border-radius: 999px;\n  background: rgba(59, 130, 246, 0.18);\n  color: #bfdbfe;\n  font-weight: 700;\n  font-size: 0.78rem;\n}\n.add-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  color: #cbd5e1;\n  font-size: 0.92rem;\n}\n.form-field span {\n  font-weight: 600;\n}\n.form-field input {\n  width: 100%;\n  min-height: 48px;\n  padding: 0 16px;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  background: #111827;\n  color: #f8fafc;\n  outline: none;\n}\n.form-field input:focus {\n  border-color: #60a5fa;\n  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.12);\n}\n.primary-btn {\n  width: fit-content;\n  padding: 14px 26px;\n  border: none;\n  border-radius: 16px;\n  background: #2563eb;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n.primary-btn:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.form-message {\n  padding: 12px 16px;\n  border-radius: 14px;\n  margin-top: 14px;\n  font-size: 0.94rem;\n}\n.form-message.success {\n  background: rgba(34, 197, 94, 0.12);\n  color: #bbf7d0;\n}\n.form-message.error {\n  background: rgba(248, 113, 113, 0.12);\n  color: #fecaca;\n}\n.full-width {\n  width: 100%;\n}\n@media (max-width: 900px) {\n  .module-body {\n    flex-direction: column;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=mecanicos.component.css.map */\n'] }]
  }], () => [{ type: OrdenesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MecanicosComponent, { className: "MecanicosComponent", filePath: "app/mecanicos/mecanicos.component.ts", lineNumber: 13 });
})();

// src/app/reportes/reportes.component.ts
var ReportesComponent = class _ReportesComponent {
  static \u0275fac = function ReportesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesComponent, selectors: [["app-reportes"]], decls: 3, vars: 0, consts: [[1, "module-page"]], template: function ReportesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p");
      \u0275\u0275text(2, "hola mundo");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesComponent, [{
    type: Component,
    args: [{ selector: "app-reportes", standalone: true, imports: [CommonModule], template: '<div class="module-page">\n  <p>hola mundo</p>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesComponent, { className: "ReportesComponent", filePath: "app/reportes/reportes.component.ts", lineNumber: 11 });
})();

// src/app/auth.guard.ts
var authGuard = () => {
  const router = inject(Router);
  const auth = getAuth();
  return new Observable((subscriber) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      subscriber.next(user ? true : router.createUrlTree(["/"]));
      subscriber.complete();
    });
    return unsubscribe;
  });
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ONJE54XF.js").then((m) => m.LoginComponent)
  },
  { path: "clientes", component: ClientesComponent, canActivate: [authGuard] },
  { path: "ordenes", component: OrdenesComponent, canActivate: [authGuard] },
  { path: "inventario", component: InventarioComponent, canActivate: [authGuard] },
  { path: "ventas", component: VentasComponent, canActivate: [authGuard] },
  { path: "mecanicos", component: MecanicosComponent, canActivate: [authGuard] },
  { path: "reportes", component: ReportesComponent, canActivate: [authGuard] },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

// src/app/header/header.component.ts
function HeaderComponent_a_12_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(module_r1.badge);
  }
}
function HeaderComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13)(1, "span", 14);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, HeaderComponent_a_12_span_5_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    \u0275\u0275classProp("active", module_r1.active);
    \u0275\u0275property("routerLink", module_r1.route);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(module_r1.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", module_r1.badge);
  }
}
var HeaderComponent = class _HeaderComponent {
  modules = [
    { label: "Clientes", route: "/clientes", icon: "\u{1F465}" },
    { label: "\xD3rdenes", route: "/ordenes", icon: "\u{1F9FE}" },
    { label: "Inventario", route: "/inventario", icon: "\u{1F4E6}" },
    { label: "Ventas", route: "/ventas", icon: "\u{1F4B5}" },
    { label: "Mec\xE1nicos", route: "/mecanicos", icon: "\u{1F6E0}\uFE0F" },
    { label: "Reportes", route: "/reportes", icon: "\u{1F4CA}" }
  ];
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 21, vars: 1, consts: [[1, "sidebar"], [1, "brand"], [1, "brand-icon"], [1, "brand-title"], [1, "brand-subtitle"], [1, "section-title"], [1, "modules"], ["class", "module", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [1, "profile-card"], [1, "profile-avatar"], [1, "profile-info"], [1, "profile-role"], [1, "profile-access"], [1, "module", 3, "routerLink"], [1, "module-icon"], [1, "module-label"], ["class", "module-badge", 4, "ngIf"], [1, "module-badge"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "\u{1F527}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "div", 3);
      \u0275\u0275text(6, "TallerOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275text(8, "Gesti\xF3n de taller");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275text(10, "M\xD3DULOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "nav", 6);
      \u0275\u0275template(12, HeaderComponent_a_12_Template, 6, 5, "a", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
      \u0275\u0275text(15, "AD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "div", 11);
      \u0275\u0275text(18, "Administrador");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12);
      \u0275\u0275text(20, "Acceso total");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngForOf", ctx.modules);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 auto 0 0;\n  width: 260px;\n  height: 100vh;\n  overflow-y: auto;\n  padding: 24px;\n  background: #0f172a;\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n@media (max-width: 800px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n    width: 100%;\n    height: auto;\n    min-height: 0;\n  }\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #1e293b;\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.modules[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.module[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 16px;\n  color: #cbd5e1;\n  text-decoration: none;\n  background: transparent;\n  transition: background 0.2s ease;\n}\n.module[_ngcontent-%COMP%]:hover, \n.module.active[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.12);\n  color: #f8fafc;\n}\n.module-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #60a5fa;\n}\n.module-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.module-badge[_ngcontent-%COMP%] {\n  background: #1491ff;\n  border-radius: 999px;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: white;\n  min-width: 28px;\n  text-align: center;\n}\n.profile-card[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 24px;\n  background: #0c2149;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #1d4ed8;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.profile-role[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.profile-access[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule], template: '<aside class="sidebar">\n  <div class="brand">\n    <div class="brand-icon">\u{1F527}</div>\n    <div>\n      <div class="brand-title">TallerOS</div>\n      <div class="brand-subtitle">Gesti\xF3n de taller</div>\n    </div>\n  </div>\n\n  <div class="section-title">M\xD3DULOS</div>\n\n  <nav class="modules">\n    <a\n      *ngFor="let module of modules"\n      [routerLink]="module.route"\n      class="module"\n      [class.active]="module.active"\n    >\n      <span class="module-icon">\u2022</span>\n      <span class="module-label">{{ module.label }}</span>\n      <span *ngIf="module.badge" class="module-badge">{{ module.badge }}</span>\n    </a>\n  </nav>\n\n  <div class="profile-card">\n    <div class="profile-avatar">AD</div>\n    <div class="profile-info">\n      <div class="profile-role">Administrador</div>\n      <div class="profile-access">Acceso total</div>\n    </div>\n  </div>\n</aside>\n', styles: ["/* src/app/header/header.component.css */\n.sidebar {\n  position: fixed;\n  inset: 0 auto 0 0;\n  width: 260px;\n  height: 100vh;\n  overflow-y: auto;\n  padding: 24px;\n  background: #0f172a;\n  color: #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n@media (max-width: 800px) {\n  .sidebar {\n    position: static;\n    width: 100%;\n    height: auto;\n    min-height: 0;\n  }\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.brand-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #1e293b;\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n}\n.brand-title {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.brand-subtitle {\n  color: #94a3b8;\n  font-size: 0.85rem;\n  margin-top: 4px;\n}\n.section-title {\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  color: #64748b;\n}\n.modules {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.module {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 16px;\n  color: #cbd5e1;\n  text-decoration: none;\n  background: transparent;\n  transition: background 0.2s ease;\n}\n.module:hover,\n.module.active {\n  background: rgba(148, 163, 184, 0.12);\n  color: #f8fafc;\n}\n.module-icon {\n  width: 20px;\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #60a5fa;\n}\n.module-label {\n  flex: 1;\n  font-weight: 500;\n}\n.module-badge {\n  background: #1491ff;\n  border-radius: 999px;\n  padding: 0 10px;\n  font-size: 0.75rem;\n  color: white;\n  min-width: 28px;\n  text-align: center;\n}\n.profile-card {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  border-radius: 24px;\n  background: #0c2149;\n}\n.profile-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: #1d4ed8;\n  display: grid;\n  place-items: center;\n  font-weight: 700;\n}\n.profile-role {\n  font-weight: 600;\n}\n.profile-access {\n  font-size: 0.82rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "app/header/header.component.ts", lineNumber: 20 });
})();

// src/app/app.component.ts
function AppComponent_app_header_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
  }
}
var AppComponent = class _AppComponent {
  router;
  title = "mecanica-system";
  showHeader = false;
  constructor(router) {
    this.router = router;
    this.updateHeaderVisibility(router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => this.updateHeaderVisibility(event.urlAfterRedirects));
  }
  updateHeaderVisibility(url) {
    const normalized = url === "" ? "/" : url;
    this.showHeader = normalized !== "/";
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [[1, "app-layout"], [4, "ngIf"], [1, "app-main"], [1, "app-page"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, AppComponent_app_header_1_Template, 1, 0, "app-header", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "section", 3);
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("with-sidebar", ctx.showHeader);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showHeader);
    }
  }, dependencies: [CommonModule, NgIf, RouterOutlet, HeaderComponent], styles: ["\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n}\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #dcdee4;\n  color: #e2e8f0;\n  min-height: 100vh;\n  padding: 16px;\n}\n.app-layout.with-sidebar[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n  margin-left: 260px;\n  width: calc(100vw - 260px);\n}\n.app-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1400px;\n  min-height: calc(100vh - 64px);\n  margin: 0 auto;\n  padding: 16px;\n  background: #e5ecf5;\n  border-radius: 24px;\n}\n@media (max-width: 800px) {\n  .app-layout[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .app-layout.with-sidebar[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n@media print {\n  app-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .print-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .app-layout[_ngcontent-%COMP%], \n   .app-main[_ngcontent-%COMP%], \n   .app-page[_ngcontent-%COMP%] {\n    display: block;\n    width: 100% !important;\n    min-height: 0;\n    margin: 0 !important;\n    padding: 0 !important;\n    background: #ffffff !important;\n    border-radius: 0;\n    color: #111827;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [CommonModule, RouterOutlet, HeaderComponent], template: '<div class="app-layout" [class.with-sidebar]="showHeader">\n  <app-header *ngIf="showHeader"></app-header>\n  <main class="app-main">\n    <section class="app-page">\n      <router-outlet></router-outlet>\n    </section>\n  </main>\n</div>\n', styles: ["/* src/app/app.component.css */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  width: 100vw;\n}\n.app-main {\n  flex: 1;\n  background: #dcdee4;\n  color: #e2e8f0;\n  min-height: 100vh;\n  padding: 16px;\n}\n.app-layout.with-sidebar .app-main {\n  margin-left: 260px;\n  width: calc(100vw - 260px);\n}\n.app-page {\n  width: 100%;\n  max-width: 1400px;\n  min-height: calc(100vh - 64px);\n  margin: 0 auto;\n  padding: 16px;\n  background: #e5ecf5;\n  border-radius: 24px;\n}\n@media (max-width: 800px) {\n  .app-layout {\n    display: block;\n  }\n  .app-layout.with-sidebar .app-main {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n@media print {\n  app-header {\n    display: none !important;\n  }\n  .print-hidden {\n    display: none !important;\n  }\n  .app-layout,\n  .app-main,\n  .app-page {\n    display: block;\n    width: 100% !important;\n    min-height: 0;\n    margin: 0 !important;\n    padding: 0 !important;\n    background: #ffffff !important;\n    border-radius: 0;\n    color: #111827;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 14 });
})();

// src/environments/environment.ts
var environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBM4VaqefoOShQDhM62GeYPhGr7cG_fMXU",
    authDomain: "mecanica-luchito-daebe.firebaseapp.com",
    projectId: "mecanica-luchito-daebe",
    storageBucket: "mecanica-luchito-daebe.firebasestorage.app",
    messagingSenderId: "814825123910",
    appId: "1:814825123910:web:9adad4d84e0749688f9a47",
    measurementId: "G-2NNYWSH3NL"
  }
};

// src/main.ts
initializeApp(environment.firebase);
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

firebase/app/dist/esm/index.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/common-7a7519be.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm.js:
@firebase/firestore/dist/index.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=main.js.map
