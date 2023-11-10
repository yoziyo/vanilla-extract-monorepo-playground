import Tr, { forwardRef as Or } from "react";
var H = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function se() {
  if (Rr)
    return D;
  Rr = 1;
  var l = Tr, f = Symbol.for("react.element"), g = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, A = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(R, d, O) {
    var h, y = {}, w = null, $ = null;
    O !== void 0 && (w = "" + O), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && ($ = d.ref);
    for (h in d)
      c.call(d, h) && !I.hasOwnProperty(h) && (y[h] = d[h]);
    if (R && R.defaultProps)
      for (h in d = R.defaultProps, d)
        y[h] === void 0 && (y[h] = d[h]);
    return { $$typeof: f, type: R, key: w, ref: $, props: y, _owner: A.current };
  }
  return D.Fragment = g, D.jsx = x, D.jsxs = x, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr;
function fe() {
  return wr || (wr = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Tr, f = Symbol.for("react.element"), g = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), R = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), X = Symbol.iterator, Cr = "@@iterator";
    function xr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = X && r[X] || r[Cr];
      return typeof e == "function" ? e : null;
    }
    var P = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
          t[a - 1] = arguments[a];
        jr("error", r, t);
      }
    }
    function jr(r, e, t) {
      {
        var a = P.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, u);
      }
    }
    var kr = !1, Dr = !1, Fr = !1, Ar = !1, Ir = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $r(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === c || r === I || Ir || r === A || r === O || r === h || Ar || r === $ || kr || Dr || Fr || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === y || r.$$typeof === x || r.$$typeof === R || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Z || r.getModuleId !== void 0));
    }
    function Wr(r, e, t) {
      var a = r.displayName;
      if (a)
        return a;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Q(r) {
      return r.displayName || "Context";
    }
    function m(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case c:
          return "Fragment";
        case g:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case O:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case R:
            var e = r;
            return Q(e) + ".Consumer";
          case x:
            var t = r;
            return Q(t._context) + ".Provider";
          case d:
            return Wr(r, r.render, "ForwardRef");
          case y:
            var a = r.displayName || null;
            return a !== null ? a : m(r.type) || "Memo";
          case w: {
            var o = r, u = o._payload, i = o._init;
            try {
              return m(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, j = 0, rr, er, tr, ar, nr, ir, or;
    function ur() {
    }
    ur.__reactDisabledLog = !0;
    function Yr() {
      {
        if (j === 0) {
          rr = console.log, er = console.info, tr = console.warn, ar = console.error, nr = console.group, ir = console.groupCollapsed, or = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ur,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        j++;
      }
    }
    function Nr() {
      {
        if (j--, j === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, r, {
              value: rr
            }),
            info: T({}, r, {
              value: er
            }),
            warn: T({}, r, {
              value: tr
            }),
            error: T({}, r, {
              value: ar
            }),
            group: T({}, r, {
              value: nr
            }),
            groupCollapsed: T({}, r, {
              value: ir
            }),
            groupEnd: T({}, r, {
              value: or
            })
          });
        }
        j < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = P.ReactCurrentDispatcher, U;
    function W(r, e, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            U = a && a[1] || "";
          }
        return `
` + U + r;
      }
    }
    var q = !1, Y;
    {
      var Lr = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Lr();
    }
    function lr(r, e) {
      if (!r || q)
        return "";
      {
        var t = Y.get(r);
        if (t !== void 0)
          return t;
      }
      var a;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = M.current, M.current = null, Yr();
      try {
        if (e) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (E) {
              a = E;
            }
            Reflect.construct(r, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              a = E;
            }
            r.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          r();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var n = E.stack.split(`
`), _ = a.stack.split(`
`), s = n.length - 1, v = _.length - 1; s >= 1 && v >= 0 && n[s] !== _[v]; )
            v--;
          for (; s >= 1 && v >= 0; s--, v--)
            if (n[s] !== _[v]) {
              if (s !== 1 || v !== 1)
                do
                  if (s--, v--, v < 0 || n[s] !== _[v]) {
                    var p = `
` + n[s].replace(" at new ", " at ");
                    return r.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", r.displayName)), typeof r == "function" && Y.set(r, p), p;
                  }
                while (s >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        q = !1, M.current = u, Nr(), Error.prepareStackTrace = o;
      }
      var C = r ? r.displayName || r.name : "", Er = C ? W(C) : "";
      return typeof r == "function" && Y.set(r, Er), Er;
    }
    function Vr(r, e, t) {
      return lr(r, !1);
    }
    function Mr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function N(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return lr(r, Mr(r));
      if (typeof r == "string")
        return W(r);
      switch (r) {
        case O:
          return W("Suspense");
        case h:
          return W("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Vr(r.render);
          case y:
            return N(r.type, e, t);
          case w: {
            var a = r, o = a._payload, u = a._init;
            try {
              return N(u(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, sr = {}, fr = P.ReactDebugCurrentFrame;
    function V(r) {
      if (r) {
        var e = r._owner, t = N(r.type, r._source, e ? e.type : null);
        fr.setExtraStackFrame(t);
      } else
        fr.setExtraStackFrame(null);
    }
    function Ur(r, e, t, a, o) {
      {
        var u = Function.call.bind(L);
        for (var i in r)
          if (u(r, i)) {
            var n = void 0;
            try {
              if (typeof r[i] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              n = r[i](e, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              n = s;
            }
            n && !(n instanceof Error) && (V(o), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), V(null)), n instanceof Error && !(n.message in sr) && (sr[n.message] = !0, V(o), b("Failed %s type: %s", t, n.message), V(null));
          }
      }
    }
    var qr = Array.isArray;
    function B(r) {
      return qr(r);
    }
    function Br(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function zr(r) {
      try {
        return cr(r), !1;
      } catch {
        return !0;
      }
    }
    function cr(r) {
      return "" + r;
    }
    function vr(r) {
      if (zr(r))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Br(r)), cr(r);
    }
    var k = P.ReactCurrentOwner, Jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dr, br, z;
    z = {};
    function Gr(r) {
      if (L.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Kr(r) {
      if (L.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Hr(r, e) {
      if (typeof r.ref == "string" && k.current && e && k.current.stateNode !== e) {
        var t = m(k.current.type);
        z[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(k.current.type), r.ref), z[t] = !0);
      }
    }
    function Xr(r, e) {
      {
        var t = function() {
          dr || (dr = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Zr(r, e) {
      {
        var t = function() {
          br || (br = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qr = function(r, e, t, a, o, u, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function re(r, e, t, a, o) {
      {
        var u, i = {}, n = null, _ = null;
        t !== void 0 && (vr(t), n = "" + t), Kr(e) && (vr(e.key), n = "" + e.key), Gr(e) && (_ = e.ref, Hr(e, o));
        for (u in e)
          L.call(e, u) && !Jr.hasOwnProperty(u) && (i[u] = e[u]);
        if (r && r.defaultProps) {
          var s = r.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (n || _) {
          var v = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          n && Xr(i, v), _ && Zr(i, v);
        }
        return Qr(r, n, _, o, a, k.current, i);
      }
    }
    var J = P.ReactCurrentOwner, _r = P.ReactDebugCurrentFrame;
    function S(r) {
      if (r) {
        var e = r._owner, t = N(r.type, r._source, e ? e.type : null);
        _r.setExtraStackFrame(t);
      } else
        _r.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function K(r) {
      return typeof r == "object" && r !== null && r.$$typeof === f;
    }
    function hr() {
      {
        if (J.current) {
          var r = m(J.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ee(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var pr = {};
    function te(r) {
      {
        var e = hr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function gr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = te(e);
        if (pr[t])
          return;
        pr[t] = !0;
        var a = "";
        r && r._owner && r._owner !== J.current && (a = " It was passed a child from " + m(r._owner.type) + "."), S(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), S(null);
      }
    }
    function yr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (B(r))
          for (var t = 0; t < r.length; t++) {
            var a = r[t];
            K(a) && gr(a, e);
          }
        else if (K(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var o = xr(r);
          if (typeof o == "function" && o !== r.entries)
            for (var u = o.call(r), i; !(i = u.next()).done; )
              K(i.value) && gr(i.value, e);
        }
      }
    }
    function ae(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === y))
          t = e.propTypes;
        else
          return;
        if (t) {
          var a = m(e);
          Ur(t, r.props, "prop", a, r);
        } else if (e.PropTypes !== void 0 && !G) {
          G = !0;
          var o = m(e);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ne(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var a = e[t];
          if (a !== "children" && a !== "key") {
            S(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), S(null);
            break;
          }
        }
        r.ref !== null && (S(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function mr(r, e, t, a, o, u) {
      {
        var i = $r(r);
        if (!i) {
          var n = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ee(o);
          _ ? n += _ : n += hr();
          var s;
          r === null ? s = "null" : B(r) ? s = "array" : r !== void 0 && r.$$typeof === f ? (s = "<" + (m(r.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, n);
        }
        var v = re(r, e, t, o, u);
        if (v == null)
          return v;
        if (i) {
          var p = e.children;
          if (p !== void 0)
            if (a)
              if (B(p)) {
                for (var C = 0; C < p.length; C++)
                  yr(p[C], r);
                Object.freeze && Object.freeze(p);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(p, r);
        }
        return r === c ? ne(v) : ae(v), v;
      }
    }
    function ie(r, e, t) {
      return mr(r, e, t, !0);
    }
    function oe(r, e, t) {
      return mr(r, e, t, !1);
    }
    var ue = oe, le = ie;
    F.Fragment = c, F.jsx = ue, F.jsxs = le;
  }()), F;
}
process.env.NODE_ENV === "production" ? H.exports = se() : H.exports = fe();
var Pr = H.exports;
var ce = "yjq96t0";
function Sr(l) {
  var f, g, c = "";
  if (typeof l == "string" || typeof l == "number")
    c += l;
  else if (typeof l == "object")
    if (Array.isArray(l))
      for (f = 0; f < l.length; f++)
        l[f] && (g = Sr(l[f])) && (c && (c += " "), c += g);
    else
      for (f in l)
        l[f] && (c && (c += " "), c += f);
  return c;
}
function ve() {
  for (var l, f, g = 0, c = ""; g < arguments.length; )
    (l = arguments[g++]) && (f = Sr(l)) && (c && (c += " "), c += f);
  return c;
}
const _e = Or(({ className: l, ...f }, g) => /* @__PURE__ */ Pr.jsx("div", { ...f, className: ve(ce, l) }));
var de = "_1oxsocr0";
const he = Or((l, f) => /* @__PURE__ */ Pr.jsx("button", { ...l, className: de }));
var pe = "_3h2itb0", ge = { color: { black: "var(--_3h2itb1)", white: "var(--_3h2itb2)", gray900: "var(--_3h2itb3)", gray800: "var(--_3h2itb4)", gray700: "var(--_3h2itb5)", gray600: "var(--_3h2itb6)", gray500: "var(--_3h2itb7)", gray400: "var(--_3h2itb8)", gray300: "var(--_3h2itb9)", gray200: "var(--_3h2itba)", gray100: "var(--_3h2itbb)", gray50: "var(--_3h2itbc)", purple900: "var(--_3h2itbd)", purple800: "var(--_3h2itbe)", purple700: "var(--_3h2itbf)", purple600: "var(--_3h2itbg)", purple500: "var(--_3h2itbh)", purple400: "var(--_3h2itbi)", purple300: "var(--_3h2itbj)", purple200: "var(--_3h2itbk)", purple100: "var(--_3h2itbl)", purple50: "var(--_3h2itbm)", orange900: "var(--_3h2itbn)", orange800: "var(--_3h2itbo)", orange700: "var(--_3h2itbp)", orange600: "var(--_3h2itbq)", orange500: "var(--_3h2itbr)", orange400: "var(--_3h2itbs)", orange300: "var(--_3h2itbt)", orange200: "var(--_3h2itbu)", orange100: "var(--_3h2itbv)", orange50: "var(--_3h2itbw)", danger: "var(--_3h2itbx)", red900: "var(--_3h2itby)", red800: "var(--_3h2itbz)", red700: "var(--_3h2itb10)", red600: "var(--_3h2itb11)", red500: "var(--_3h2itb12)", red400: "var(--_3h2itb13)", red300: "var(--_3h2itb14)", red200: "var(--_3h2itb15)", red100: "var(--_3h2itb16)", red50: "var(--_3h2itb17)", green900: "var(--_3h2itb18)", green800: "var(--_3h2itb19)", green700: "var(--_3h2itb1a)", green600: "var(--_3h2itb1b)", green500: "var(--_3h2itb1c)", green400: "var(--_3h2itb1d)", green300: "var(--_3h2itb1e)", green200: "var(--_3h2itb1f)", green100: "var(--_3h2itb1g)", green50: "var(--_3h2itb1h)", blue900: "var(--_3h2itb1i)", blue800: "var(--_3h2itb1j)", blue700: "var(--_3h2itb1k)", blue600: "var(--_3h2itb1l)", blue500: "var(--_3h2itb1m)", blue400: "var(--_3h2itb1n)", blue300: "var(--_3h2itb1o)", blue200: "var(--_3h2itb1p)", blue100: "var(--_3h2itb1q)", blue50: "var(--_3h2itb1r)", yellow900: "var(--_3h2itb1s)", yellow800: "var(--_3h2itb1t)", yellow700: "var(--_3h2itb1u)", yellow600: "var(--_3h2itb1v)", yellow500: "var(--_3h2itb1w)", yellow400: "var(--_3h2itb1x)", yellow300: "var(--_3h2itb1y)", yellow200: "var(--_3h2itb1z)", yellow100: "var(--_3h2itb20)", yellow50: "var(--_3h2itb21)" } };
export {
  _e as Box,
  he as Button,
  pe as KPDSTheme,
  ge as KPDSVars
};
