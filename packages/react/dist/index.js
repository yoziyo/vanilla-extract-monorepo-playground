import Tr, { forwardRef as Cr } from "react";
var H = { exports: {} }, A = {};
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
function de() {
  if (Rr)
    return A;
  Rr = 1;
  var a = Tr, n = Symbol.for("react.element"), u = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(x, d, w) {
    var h, m = {}, T = null, N = null;
    w !== void 0 && (T = "" + w), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (N = d.ref);
    for (h in d)
      i.call(d, h) && !E.hasOwnProperty(h) && (m[h] = d[h]);
    if (x && x.defaultProps)
      for (h in d = x.defaultProps, d)
        m[h] === void 0 && (m[h] = d[h]);
    return { $$typeof: n, type: x, key: T, ref: N, props: m, _owner: _.current };
  }
  return A.Fragment = u, A.jsx = R, A.jsxs = R, A;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function be() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Tr, n = Symbol.for("react.element"), u = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), X = Symbol.iterator, Dr = "@@iterator";
    function Fr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = X && r[X] || r[Dr];
      return typeof e == "function" ? e : null;
    }
    var j = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
          t[o - 1] = arguments[o];
        Ar("error", r, t);
      }
    }
    function Ar(r, e, t) {
      {
        var o = j.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (e += "%s", t = t.concat([f]));
        var c = t.map(function(l) {
          return String(l);
        });
        c.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, c);
      }
    }
    var Ir = !1, Nr = !1, Vr = !1, Wr = !1, Yr = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $r(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === E || Yr || r === _ || r === w || r === h || Wr || r === N || Ir || Nr || Vr || typeof r == "object" && r !== null && (r.$$typeof === T || r.$$typeof === m || r.$$typeof === R || r.$$typeof === x || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Z || r.getModuleId !== void 0));
    }
    function Lr(r, e, t) {
      var o = r.displayName;
      if (o)
        return o;
      var f = e.displayName || e.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function Q(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case u:
          return "Portal";
        case E:
          return "Profiler";
        case _:
          return "StrictMode";
        case w:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var e = r;
            return Q(e) + ".Consumer";
          case R:
            var t = r;
            return Q(t._context) + ".Provider";
          case d:
            return Lr(r, r.render, "ForwardRef");
          case m:
            var o = r.displayName || null;
            return o !== null ? o : O(r.type) || "Memo";
          case T: {
            var f = r, c = f._payload, l = f._init;
            try {
              return O(l(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, rr, er, tr, ar, nr, ir, or;
    function ur() {
    }
    ur.__reactDisabledLog = !0;
    function qr() {
      {
        if (D === 0) {
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
        D++;
      }
    }
    function Mr() {
      {
        if (D--, D === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, r, {
              value: rr
            }),
            info: C({}, r, {
              value: er
            }),
            warn: C({}, r, {
              value: tr
            }),
            error: C({}, r, {
              value: ar
            }),
            group: C({}, r, {
              value: nr
            }),
            groupCollapsed: C({}, r, {
              value: ir
            }),
            groupEnd: C({}, r, {
              value: or
            })
          });
        }
        D < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = j.ReactCurrentDispatcher, M;
    function V(r, e, t) {
      {
        if (M === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            M = o && o[1] || "";
          }
        return `
` + M + r;
      }
    }
    var U = !1, W;
    {
      var Ur = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ur();
    }
    function sr(r, e) {
      if (!r || U)
        return "";
      {
        var t = W.get(r);
        if (t !== void 0)
          return t;
      }
      var o;
      U = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = q.current, q.current = null, qr();
      try {
        if (e) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (P) {
              o = P;
            }
            Reflect.construct(r, [], l);
          } else {
            try {
              l.call();
            } catch (P) {
              o = P;
            }
            r.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            o = P;
          }
          r();
        }
      } catch (P) {
        if (P && o && typeof P.stack == "string") {
          for (var s = P.stack.split(`
`), g = o.stack.split(`
`), v = s.length - 1, b = g.length - 1; v >= 1 && b >= 0 && s[v] !== g[b]; )
            b--;
          for (; v >= 1 && b >= 0; v--, b--)
            if (s[v] !== g[b]) {
              if (v !== 1 || b !== 1)
                do
                  if (v--, b--, b < 0 || s[v] !== g[b]) {
                    var y = `
` + s[v].replace(" at new ", " at ");
                    return r.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", r.displayName)), typeof r == "function" && W.set(r, y), y;
                  }
                while (v >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        U = !1, q.current = c, Mr(), Error.prepareStackTrace = f;
      }
      var k = r ? r.displayName || r.name : "", Er = k ? V(k) : "";
      return typeof r == "function" && W.set(r, Er), Er;
    }
    function zr(r, e, t) {
      return sr(r, !1);
    }
    function Br(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function Y(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return sr(r, Br(r));
      if (typeof r == "string")
        return V(r);
      switch (r) {
        case w:
          return V("Suspense");
        case h:
          return V("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return zr(r.render);
          case m:
            return Y(r.type, e, t);
          case T: {
            var o = r, f = o._payload, c = o._init;
            try {
              return Y(c(f), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, lr = {}, fr = j.ReactDebugCurrentFrame;
    function L(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        fr.setExtraStackFrame(t);
      } else
        fr.setExtraStackFrame(null);
    }
    function Kr(r, e, t, o, f) {
      {
        var c = Function.call.bind($);
        for (var l in r)
          if (c(r, l)) {
            var s = void 0;
            try {
              if (typeof r[l] != "function") {
                var g = Error((o || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              s = r[l](e, l, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              s = v;
            }
            s && !(s instanceof Error) && (L(f), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, l, typeof s), L(null)), s instanceof Error && !(s.message in lr) && (lr[s.message] = !0, L(f), p("Failed %s type: %s", t, s.message), L(null));
          }
      }
    }
    var Jr = Array.isArray;
    function z(r) {
      return Jr(r);
    }
    function Gr(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Hr(r) {
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
      if (Hr(r))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gr(r)), cr(r);
    }
    var F = j.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dr, br, B;
    B = {};
    function Zr(r) {
      if ($.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Qr(r) {
      if ($.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function re(r, e) {
      if (typeof r.ref == "string" && F.current && e && F.current.stateNode !== e) {
        var t = O(F.current.type);
        B[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(F.current.type), r.ref), B[t] = !0);
      }
    }
    function ee(r, e) {
      {
        var t = function() {
          dr || (dr = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function te(r, e) {
      {
        var t = function() {
          br || (br = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ae = function(r, e, t, o, f, c, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ne(r, e, t, o, f) {
      {
        var c, l = {}, s = null, g = null;
        t !== void 0 && (vr(t), s = "" + t), Qr(e) && (vr(e.key), s = "" + e.key), Zr(e) && (g = e.ref, re(e, f));
        for (c in e)
          $.call(e, c) && !Xr.hasOwnProperty(c) && (l[c] = e[c]);
        if (r && r.defaultProps) {
          var v = r.defaultProps;
          for (c in v)
            l[c] === void 0 && (l[c] = v[c]);
        }
        if (s || g) {
          var b = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          s && ee(l, b), g && te(l, b);
        }
        return ae(r, s, g, f, o, F.current, l);
      }
    }
    var K = j.ReactCurrentOwner, _r = j.ReactDebugCurrentFrame;
    function S(r) {
      if (r) {
        var e = r._owner, t = Y(r.type, r._source, e ? e.type : null);
        _r.setExtraStackFrame(t);
      } else
        _r.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function G(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function hr() {
      {
        if (K.current) {
          var r = O(K.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ie(r) {
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
    function oe(r) {
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
        var t = oe(e);
        if (pr[t])
          return;
        pr[t] = !0;
        var o = "";
        r && r._owner && r._owner !== K.current && (o = " It was passed a child from " + O(r._owner.type) + "."), S(r), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), S(null);
      }
    }
    function yr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (z(r))
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            G(o) && gr(o, e);
          }
        else if (G(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var f = Fr(r);
          if (typeof f == "function" && f !== r.entries)
            for (var c = f.call(r), l; !(l = c.next()).done; )
              G(l.value) && gr(l.value, e);
        }
      }
    }
    function ue(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === m))
          t = e.propTypes;
        else
          return;
        if (t) {
          var o = O(e);
          Kr(t, r.props, "prop", o, r);
        } else if (e.PropTypes !== void 0 && !J) {
          J = !0;
          var f = O(e);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function se(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var o = e[t];
          if (o !== "children" && o !== "key") {
            S(r), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), S(null);
            break;
          }
        }
        r.ref !== null && (S(r), p("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function mr(r, e, t, o, f, c) {
      {
        var l = $r(r);
        if (!l) {
          var s = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = ie(f);
          g ? s += g : s += hr();
          var v;
          r === null ? v = "null" : z(r) ? v = "array" : r !== void 0 && r.$$typeof === n ? (v = "<" + (O(r.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : v = typeof r, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, s);
        }
        var b = ne(r, e, t, f, c);
        if (b == null)
          return b;
        if (l) {
          var y = e.children;
          if (y !== void 0)
            if (o)
              if (z(y)) {
                for (var k = 0; k < y.length; k++)
                  yr(y[k], r);
                Object.freeze && Object.freeze(y);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(y, r);
        }
        return r === i ? se(b) : ue(b), b;
      }
    }
    function le(r, e, t) {
      return mr(r, e, t, !0);
    }
    function fe(r, e, t) {
      return mr(r, e, t, !1);
    }
    var ce = fe, ve = le;
    I.Fragment = i, I.jsx = ce, I.jsxs = ve;
  }()), I;
}
process.env.NODE_ENV === "production" ? H.exports = de() : H.exports = be();
var jr = H.exports;
var _e = "yjq96t0";
function Sr(a) {
  var n, u, i = "";
  if (typeof a == "string" || typeof a == "number")
    i += a;
  else if (typeof a == "object")
    if (Array.isArray(a))
      for (n = 0; n < a.length; n++)
        a[n] && (u = Sr(a[n])) && (i && (i += " "), i += u);
    else
      for (n in a)
        a[n] && (i && (i += " "), i += n);
  return i;
}
function kr() {
  for (var a, n, u = 0, i = ""; u < arguments.length; )
    (a = arguments[u++]) && (n = Sr(a)) && (i && (i += " "), i += n);
  return i;
}
const xe = Cr(({ className: a, ...n }, u) => /* @__PURE__ */ jr.jsx("div", { ...n, className: kr(_e, a) }));
function he(a, n) {
  if (typeof a != "object" || a === null)
    return a;
  var u = a[Symbol.toPrimitive];
  if (u !== void 0) {
    var i = u.call(a, n || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(a);
}
function pe(a) {
  var n = he(a, "string");
  return typeof n == "symbol" ? n : String(n);
}
function ge(a, n, u) {
  return n = pe(n), n in a ? Object.defineProperty(a, n, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[n] = u, a;
}
function wr(a, n) {
  var u = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    n && (i = i.filter(function(_) {
      return Object.getOwnPropertyDescriptor(a, _).enumerable;
    })), u.push.apply(u, i);
  }
  return u;
}
function Or(a) {
  for (var n = 1; n < arguments.length; n++) {
    var u = arguments[n] != null ? arguments[n] : {};
    n % 2 ? wr(Object(u), !0).forEach(function(i) {
      ge(a, i, u[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : wr(Object(u)).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(u, i));
    });
  }
  return a;
}
function Pr(a, n) {
  var u = {};
  for (var i in a)
    u[i] = n(a[i], i);
  return u;
}
var ye = (a, n, u) => {
  for (var i of Object.keys(a)) {
    var _;
    if (a[i] !== ((_ = n[i]) !== null && _ !== void 0 ? _ : u[i]))
      return !1;
  }
  return !0;
}, me = (a) => {
  var n = (u) => {
    var i = a.defaultClassName, _ = Or(Or({}, a.defaultVariants), u);
    for (var E in _) {
      var R, x = (R = _[E]) !== null && R !== void 0 ? R : a.defaultVariants[E];
      if (x != null) {
        var d = x;
        typeof d == "boolean" && (d = d === !0 ? "true" : "false");
        var w = (
          // @ts-expect-error
          a.variantClassNames[E][d]
        );
        w && (i += " " + w);
      }
    }
    for (var [h, m] of a.compoundVariants)
      ye(h, _, a.defaultVariants) && (i += " " + m);
    return i;
  };
  return n.variants = () => Object.keys(a.variantClassNames), n.classNames = {
    get base() {
      return a.defaultClassName.split(" ")[0];
    },
    get variants() {
      return Pr(a.variantClassNames, (u) => Pr(u, (i) => i.split(" ")[0]));
    }
  }, n;
}, Ee = me({ defaultClassName: "_1oxsocr0", variantClassNames: { color: { primary: "_1oxsocr1", secondary: "_1oxsocr2", tertiary: "_1oxsocr3", danger: "_1oxsocr4" }, size: { extraLarge: "_1oxsocr5", large: "_1oxsocr6", medium: "_1oxsocr7", small: "_1oxsocr8" }, shape: { rounded: "_1oxsocr9", square: "_1oxsocra" }, variant: { fill: "_1oxsocrb", stroke: "_1oxsocrc", tender: "_1oxsocrd" } }, defaultVariants: { variant: "fill", shape: "rounded", color: "primary", size: "extraLarge" }, compoundVariants: [[{ variant: "stroke", color: "primary" }, "_1oxsocre"], [{ variant: "tender", color: "primary" }, "_1oxsocrf"], [{ variant: "stroke", color: "secondary" }, "_1oxsocrg"], [{ variant: "tender", color: "secondary" }, "_1oxsocrh"], [{ variant: "stroke", color: "tertiary" }, "_1oxsocri"], [{ variant: "tender", color: "tertiary" }, "_1oxsocrj"], [{ variant: "stroke", color: "danger" }, "_1oxsocrk"], [{ variant: "tender", color: "danger" }, "_1oxsocrl"], [{ size: "extraLarge", shape: "square" }, "_1oxsocrm"], [{ size: "large", shape: "square" }, "_1oxsocrn"], [{ size: "medium", shape: "square" }, "_1oxsocro"], [{ size: "small", shape: "square" }, "_1oxsocrp"]] });
const we = Cr(({ className: a, size: n, color: u, shape: i, variant: _, ...E }, R) => /* @__PURE__ */ jr.jsx(
  "button",
  {
    ...E,
    className: kr(
      Ee({
        size: n,
        color: u,
        shape: i,
        variant: _
      }),
      a
    )
  }
));
var Oe = "_3h2itb0", Pe = { color: { black: "var(--_3h2itb1)", white: "var(--_3h2itb2)", gray900: "var(--_3h2itb3)", gray800: "var(--_3h2itb4)", gray700: "var(--_3h2itb5)", gray600: "var(--_3h2itb6)", gray500: "var(--_3h2itb7)", gray400: "var(--_3h2itb8)", gray300: "var(--_3h2itb9)", gray200: "var(--_3h2itba)", gray100: "var(--_3h2itbb)", gray50: "var(--_3h2itbc)", purple900: "var(--_3h2itbd)", purple800: "var(--_3h2itbe)", purple700: "var(--_3h2itbf)", purple600: "var(--_3h2itbg)", purple500: "var(--_3h2itbh)", purple400: "var(--_3h2itbi)", purple300: "var(--_3h2itbj)", purple200: "var(--_3h2itbk)", purple100: "var(--_3h2itbl)", purple50: "var(--_3h2itbm)", orange900: "var(--_3h2itbn)", orange800: "var(--_3h2itbo)", orange700: "var(--_3h2itbp)", orange600: "var(--_3h2itbq)", orange500: "var(--_3h2itbr)", orange400: "var(--_3h2itbs)", orange300: "var(--_3h2itbt)", orange200: "var(--_3h2itbu)", orange100: "var(--_3h2itbv)", orange50: "var(--_3h2itbw)", red900: "var(--_3h2itbx)", red800: "var(--_3h2itby)", red700: "var(--_3h2itbz)", red600: "var(--_3h2itb10)", red500: "var(--_3h2itb11)", red400: "var(--_3h2itb12)", red300: "var(--_3h2itb13)", red200: "var(--_3h2itb14)", red100: "var(--_3h2itb15)", red50: "var(--_3h2itb16)", green900: "var(--_3h2itb17)", green800: "var(--_3h2itb18)", green700: "var(--_3h2itb19)", green600: "var(--_3h2itb1a)", green500: "var(--_3h2itb1b)", green400: "var(--_3h2itb1c)", green300: "var(--_3h2itb1d)", green200: "var(--_3h2itb1e)", green100: "var(--_3h2itb1f)", green50: "var(--_3h2itb1g)", blue900: "var(--_3h2itb1h)", blue800: "var(--_3h2itb1i)", blue700: "var(--_3h2itb1j)", blue600: "var(--_3h2itb1k)", blue500: "var(--_3h2itb1l)", blue400: "var(--_3h2itb1m)", blue300: "var(--_3h2itb1n)", blue200: "var(--_3h2itb1o)", blue100: "var(--_3h2itb1p)", blue50: "var(--_3h2itb1q)", yellow900: "var(--_3h2itb1r)", yellow800: "var(--_3h2itb1s)", yellow700: "var(--_3h2itb1t)", yellow600: "var(--_3h2itb1u)", yellow500: "var(--_3h2itb1v)", yellow400: "var(--_3h2itb1w)", yellow300: "var(--_3h2itb1x)", yellow200: "var(--_3h2itb1y)", yellow100: "var(--_3h2itb1z)", yellow50: "var(--_3h2itb20)", main: { primary: "var(--_3h2itb21)", primaryContainer: "var(--_3h2itb22)", secondary: "var(--_3h2itb23)", secondaryContainer: "var(--_3h2itb24)", tertiary: "var(--_3h2itb25)", tertiaryContainer: "var(--_3h2itb26)", danger: "var(--_3h2itb27)", dangerContainer: "var(--_3h2itb28)", complete: "var(--_3h2itb29)", completeContainer: "var(--_3h2itb2a)" }, text: { primary: "var(--_3h2itb2b)", secondary: "var(--_3h2itb2c)", tertiary: "var(--_3h2itb2d)", quaternary: "var(--_3h2itb2e)", disabled: "var(--_3h2itb2f)", inverse: "var(--_3h2itb2g)" }, background: { background1: "var(--_3h2itb2h)", background2: "var(--_3h2itb2i)", background3: "var(--_3h2itb2j)", background4: "var(--_3h2itb2k)", background5: "var(--_3h2itb2l)" }, line: { line1: "var(--_3h2itb2m)", line2: "var(--_3h2itb2n)" }, pointSet: { point1: "var(--_3h2itb2o)", point2: "var(--_3h2itb2p)" } } };
export {
  xe as Box,
  we as Button,
  Oe as KPDSTheme,
  Pe as KPDSVars
};
