! function() {
    "use strict";
    var e, t, n, r, o, i, a, s = {},
        c = [],
        l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function u(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function d(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function p(t, n, r) {
        var o, i, a, s = {};
        for (a in n) "key" == a ? o = n[a] : "ref" == a ? i = n[a] : s[a] = n[a];
        if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), "function" == typeof t && null != t.defaultProps)
            for (a in t.defaultProps) void 0 === s[a] && (s[a] = t.defaultProps[a]);
        return f(t, s, o, i, null)
    }

    function f(e, r, o, i, a) {
        var s = {
            type: e,
            props: r,
            key: o,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++n : a
        };
        return null == a && null != t.vnode && t.vnode(s), s
    }

    function h(e) {
        return e.children
    }

    function m(e, t) {
        this.props = e, this.context = t
    }

    function v(e, t) {
        if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? v(e) : null
    }

    function g(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return g(e)
        }
    }

    function _(e) {
        (!e.__d && (e.__d = !0) && r.push(e) && !y.__r++ || i !== t.debounceRendering) && ((i = t.debounceRendering) || o)(y)
    }

    function y() {
        for (var e; y.__r = r.length;) e = r.sort((function(e, t) {
            return e.__v.__b - t.__v.__b
        })), r = [], e.some((function(e) {
            var t, n, r, o, i, a;
            e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = u({}, o)).__v = o.__v + 1, T(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? v(o) : i, o.__h), R(n, o), o.__e != i && g(o)))
        }))
    }

    function b(e, t, n, r, o, i, a, l, u, d) {
        var p, m, g, _, y, b, w, k = r && r.__k || c,
            E = k.length;
        for (n.__k = [], p = 0; p < t.length; p++)
            if (null != (_ = n.__k[p] = null == (_ = t[p]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? f(null, _, null, null, _) : Array.isArray(_) ? f(h, {
                    children: _
                }, null, null, null) : _.__b > 0 ? f(_.type, _.props, _.key, null, _.__v) : _)) {
                if (_.__ = n, _.__b = n.__b + 1, null === (g = k[p]) || g && _.key == g.key && _.type === g.type) k[p] = void 0;
                else
                    for (m = 0; m < E; m++) {
                        if ((g = k[m]) && _.key == g.key && _.type === g.type) {
                            k[m] = void 0;
                            break
                        }
                        g = null
                    }
                T(e, _, g = g || s, o, i, a, l, u, d), y = _.__e, (m = _.ref) && g.ref != m && (w || (w = []), g.ref && w.push(g.ref, null, _), w.push(m, _.__c || y, _)), null != y ? (null == b && (b = y), "function" == typeof _.type && _.__k === g.__k ? _.__d = u = x(_, u, e) : u = S(e, _, g, k, y, u), "function" == typeof n.type && (n.__d = u)) : u && g.__e == u && u.parentNode != e && (u = v(g))
            } for (n.__e = b, p = E; p--;) null != k[p] && ("function" == typeof n.type && null != k[p].__e && k[p].__e == n.__d && (n.__d = v(r, p + 1)), M(k[p], k[p]));
        if (w)
            for (p = 0; p < w.length; p++) P(w[p], w[++p], w[++p])
    }

    function x(e, t, n) {
        for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? x(r, t, n) : S(n, r, r, o, r.__e, t));
        return t
    }

    function w(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
            w(e, t)
        })) : t.push(e)), t
    }

    function S(e, t, n, r, o, i) {
        var a, s, c;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
            else {
                for (s = i, c = 0;
                    (s = s.nextSibling) && c < r.length; c += 2)
                    if (s == o) break e;
                e.insertBefore(o, i), a = i
            } return void 0 !== a ? a : o.nextSibling
    }

    function k(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || l.test(t) ? n : n + "px"
    }

    function E(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || k(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || k(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? O : C, i) : e.removeEventListener(t, i ? O : C, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function C(e) {
        this.l[e.type + !1](t.event ? t.event(e) : e)
    }

    function O(e) {
        this.l[e.type + !0](t.event ? t.event(e) : e)
    }

    function T(n, r, o, i, a, c, l, p, f) {
        var g, _, y, x, w, S, k, C, O, T, R, P = r.type;
        if (void 0 !== r.constructor) return null;
        null != o.__h && (f = o.__h, p = r.__e = o.__e, r.__h = null, c = [p]), (g = t.__b) && g(r);
        try {
            e: if ("function" == typeof P) {
                if (C = r.props, O = (g = P.contextType) && i[g.__c], T = g ? O ? O.props.value : g.__ : i, o.__c ? k = (_ = r.__c = o.__c).__ = _.__E : ("prototype" in P && P.prototype.render ? r.__c = _ = new P(C, T) : (r.__c = _ = new m(C, T), _.constructor = P, _.render = A), O && O.sub(_), _.props = C, _.state || (_.state = {}), _.context = T, _.__n = i, y = _.__d = !0, _.__h = []), null == _.__s && (_.__s = _.state), null != P.getDerivedStateFromProps && (_.__s == _.state && (_.__s = u({}, _.__s)), u(_.__s, P.getDerivedStateFromProps(C, _.__s))), x = _.props, w = _.state, y) null == P.getDerivedStateFromProps && null != _.componentWillMount && _.componentWillMount(), null != _.componentDidMount && _.__h.push(_.componentDidMount);
                else {
                    if (null == P.getDerivedStateFromProps && C !== x && null != _.componentWillReceiveProps && _.componentWillReceiveProps(C, T), !_.__e && null != _.shouldComponentUpdate && !1 === _.shouldComponentUpdate(C, _.__s, T) || r.__v === o.__v) {
                        _.props = C, _.state = _.__s, r.__v !== o.__v && (_.__d = !1), _.__v = r, r.__e = o.__e, r.__k = o.__k, r.__k.forEach((function(e) {
                            e && (e.__ = r)
                        })), _.__h.length && l.push(_);
                        break e
                    }
                    null != _.componentWillUpdate && _.componentWillUpdate(C, _.__s, T), null != _.componentDidUpdate && _.__h.push((function() {
                        _.componentDidUpdate(x, w, S)
                    }))
                }
                _.context = T, _.props = C, _.state = _.__s, (g = t.__r) && g(r), _.__d = !1, _.__v = r, _.__P = n, g = _.render(_.props, _.state, _.context), _.state = _.__s, null != _.getChildContext && (i = u(u({}, i), _.getChildContext())), y || null == _.getSnapshotBeforeUpdate || (S = _.getSnapshotBeforeUpdate(x, w)), R = null != g && g.type === h && null == g.key ? g.props.children : g, b(n, Array.isArray(R) ? R : [R], r, o, i, a, c, l, p, f), _.base = r.__e, r.__h = null, _.__h.length && l.push(_), k && (_.__E = _.__ = null), _.__e = !1
            } else null == c && r.__v === o.__v ? (r.__k = o.__k, r.__e = o.__e) : r.__e = function(t, n, r, o, i, a, c, l) {
                var u, p, f, h = r.props,
                    m = n.props,
                    g = n.type,
                    _ = 0;
                if ("svg" === g && (i = !0), null != a)
                    for (; _ < a.length; _++)
                        if ((u = a[_]) && "setAttribute" in u == !!g && (g ? u.localName === g : 3 === u.nodeType)) {
                            t = u, a[_] = null;
                            break
                        } if (null == t) {
                    if (null === g) return document.createTextNode(m);
                    t = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), a = null, l = !1
                }
                if (null === g) h === m || l && t.data === m || (t.data = m);
                else {
                    if (a = a && e.call(t.childNodes), p = (h = r.props || s).dangerouslySetInnerHTML, f = m.dangerouslySetInnerHTML, !l) {
                        if (null != a)
                            for (h = {}, _ = 0; _ < t.attributes.length; _++) h[t.attributes[_].name] = t.attributes[_].value;
                        (f || p) && (f && (p && f.__html == p.__html || f.__html === t.innerHTML) || (t.innerHTML = f && f.__html || ""))
                    }
                    if (function(e, t, n, r, o) {
                            var i;
                            for (i in n) "children" === i || "key" === i || i in t || E(e, i, null, n[i], r);
                            for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || E(e, i, t[i], n[i], r)
                        }(t, m, h, i, l), f) n.__k = [];
                    else if (_ = n.props.children, b(t, Array.isArray(_) ? _ : [_], n, r, o, i && "foreignObject" !== g, a, c, a ? a[0] : r.__k && v(r, 0), l), null != a)
                        for (_ = a.length; _--;) null != a[_] && d(a[_]);
                    l || ("value" in m && void 0 !== (_ = m.value) && (_ !== h.value || _ !== t.value || "progress" === g && !_) && E(t, "value", _, h.value, !1), "checked" in m && void 0 !== (_ = m.checked) && _ !== t.checked && E(t, "checked", _, h.checked, !1))
                }
                return t
            }(o.__e, r, o, i, a, c, l, f);
            (g = t.diffed) && g(r)
        }
        catch (n) {
            r.__v = null, (f || null != c) && (r.__e = p, r.__h = !!f, c[c.indexOf(p)] = null), t.__e(n, r, o)
        }
    }

    function R(e, n) {
        t.__c && t.__c(n, e), e.some((function(n) {
            try {
                e = n.__h, n.__h = [], e.some((function(e) {
                    e.call(n)
                }))
            } catch (e) {
                t.__e(e, n.__v)
            }
        }))
    }

    function P(e, n, r) {
        try {
            "function" == typeof e ? e(n) : e.current = n
        } catch (e) {
            t.__e(e, r)
        }
    }

    function M(e, n, r) {
        var o, i;
        if (t.unmount && t.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || P(o, null, n)), null != (o = e.__c)) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (e) {
                t.__e(e, n)
            }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (i = 0; i < o.length; i++) o[i] && M(o[i], n, "function" != typeof e.type);
        r || null == e.__e || d(e.__e), e.__e = e.__d = void 0
    }

    function A(e, t, n) {
        return this.constructor(e, n)
    }

    function I(n, r, o) {
        var i, a, c;
        t.__ && t.__(n, r), a = (i = "function" == typeof o) ? null : o && o.__k || r.__k, c = [], T(r, n = (!i && o || r).__k = p(h, null, [n]), a || s, s, void 0 !== r.ownerSVGElement, !i && o ? [o] : a ? null : r.firstChild ? e.call(r.childNodes) : null, c, !i && o ? o : a ? a.__e : r.firstChild, i), R(c, n)
    }

    function N(e, t) {
        I(e, t, N)
    }

    function L(t, n, r) {
        var o, i, a, s = u({}, t.props);
        for (a in n) "key" == a ? o = n[a] : "ref" == a ? i = n[a] : s[a] = n[a];
        return arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), f(t.type, s, o || t.key, i || t.ref, null)
    }

    function j(e, t) {
        var n = {
            __c: t = "__cC" + a++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                var n, r;
                return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                    return r
                }, this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.some(_)
                }, this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1), t && t.call(e)
                    }
                }), e.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }
    e = c.slice, t = {
        __e: function(e, t) {
            for (var n, r, o; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, n = 0, m.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = u({}, this.state), "function" == typeof e && (e = e(u({}, n), this.props)), e && u(n, e), null != e && this.__v && (t && this.__h.push(t), _(this))
    }, m.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), _(this))
    }, m.prototype.render = h, r = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, y.__r = 0, a = 0;
    var D, $, B, z = 0,
        F = [],
        W = t.__b,
        H = t.__r,
        U = t.diffed,
        q = t.__c,
        V = t.unmount;

    function G(e, n) {
        t.__h && t.__h($, e, z || n), z = 0;
        var r = $.__H || ($.__H = {
            __: [],
            __h: []
        });
        return e >= r.__.length && r.__.push({}), r.__[e]
    }

    function K(e) {
        return z = 1, X(le, e)
    }

    function X(e, t, n) {
        var r = G(D++, 2);
        return r.t = e, r.__c || (r.__ = [n ? n(t) : le(void 0, t), function(e) {
            var t = r.t(r.__[0], e);
            r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
        }], r.__c = $), r.__
    }

    function Y(e, n) {
        var r = G(D++, 3);
        !t.__s && ce(r.__H, n) && (r.__ = e, r.__H = n, $.__H.__h.push(r))
    }

    function J(e, n) {
        var r = G(D++, 4);
        !t.__s && ce(r.__H, n) && (r.__ = e, r.__H = n, $.__h.push(r))
    }

    function Q(e) {
        return z = 5, ee((function() {
            return {
                current: e
            }
        }), [])
    }

    function Z(e, t, n) {
        z = 6, J((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == n ? n : n.concat(e))
    }

    function ee(e, t) {
        var n = G(D++, 7);
        return ce(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
    }

    function te(e, t) {
        return z = 8, ee((function() {
            return e
        }), t)
    }

    function ne(e) {
        var t = $.context[e.__c],
            n = G(D++, 9);
        return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub($)), t.props.value) : e.__
    }

    function re(e, n) {
        t.useDebugValue && t.useDebugValue(n ? n(e) : e)
    }

    function oe() {
        var e;
        for (F.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            })); e = F.pop();)
            if (e.__P) try {
                e.__H.__h.forEach(ae), e.__H.__h.forEach(se), e.__H.__h = []
            } catch (n) {
                e.__H.__h = [], t.__e(n, e.__v)
            }
    }
    t.__b = function(e) {
        $ = null, W && W(e)
    }, t.__r = function(e) {
        H && H(e), D = 0;
        var t = ($ = e.__c).__H;
        t && (t.__h.forEach(ae), t.__h.forEach(se), t.__h = [])
    }, t.diffed = function(e) {
        U && U(e);
        var n = e.__c;
        n && n.__H && n.__H.__h.length && (1 !== F.push(n) && B === t.requestAnimationFrame || ((B = t.requestAnimationFrame) || function(e) {
            var t, n = function() {
                    clearTimeout(r), ie && cancelAnimationFrame(t), setTimeout(e)
                },
                r = setTimeout(n, 100);
            ie && (t = requestAnimationFrame(n))
        })(oe)), $ = null
    }, t.__c = function(e, n) {
        n.some((function(e) {
            try {
                e.__h.forEach(ae), e.__h = e.__h.filter((function(e) {
                    return !e.__ || se(e)
                }))
            } catch (r) {
                n.some((function(e) {
                    e.__h && (e.__h = [])
                })), n = [], t.__e(r, e.__v)
            }
        })), q && q(e, n)
    }, t.unmount = function(e) {
        V && V(e);
        var n, r = e.__c;
        r && r.__H && (r.__H.__.forEach((function(e) {
            try {
                ae(e)
            } catch (e) {
                n = e
            }
        })), n && t.__e(n, r.__v))
    };
    var ie = "function" == typeof requestAnimationFrame;

    function ae(e) {
        var t = $,
            n = e.__c;
        "function" == typeof n && (e.__c = void 0, n()), $ = t
    }

    function se(e) {
        var t = $;
        e.__c = e.__(), $ = t
    }

    function ce(e, t) {
        return !e || e.length !== t.length || t.some((function(t, n) {
            return t !== e[n]
        }))
    }

    function le(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function ue(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function de(e, t) {
        for (var n in e)
            if ("__source" !== n && !(n in t)) return !0;
        for (var r in t)
            if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1
    }

    function pe(e) {
        this.props = e
    }

    function fe(e, t) {
        function n(e) {
            var n = this.props.ref,
                r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : de(this.props, e)
        }

        function r(t) {
            return this.shouldComponentUpdate = n, p(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    }(pe.prototype = new m).isPureReactComponent = !0, pe.prototype.shouldComponentUpdate = function(e, t) {
        return de(this.props, e) || de(this.state, t)
    };
    var he = t.__b;
    t.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), he && he(e)
    };
    var me = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

    function ve(e) {
        function t(t, n) {
            var r = ue({}, t);
            return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
        }
        return t.$$typeof = me, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
    }
    var ge = function(e, t) {
            return null == e ? null : w(w(e).map(t))
        },
        _e = {
            map: ge,
            forEach: ge,
            count: function(e) {
                return e ? w(e).length : 0
            },
            only: function(e) {
                var t = w(e);
                if (1 !== t.length) throw "Children.only";
                return t[0]
            },
            toArray: w
        },
        ye = t.__e;
    t.__e = function(e, t, n) {
        if (e.then)
            for (var r, o = t; o = o.__;)
                if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        ye(e, t, n)
    };
    var be = t.unmount;

    function xe() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function we(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }

    function Se() {
        this.u = null, this.o = null
    }
    t.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), be && be(e)
    }, (xe.prototype = new m).__c = function(e, t) {
        var n = t.__c,
            r = this;
        null == r.t && (r.t = []), r.t.push(n);
        var o = we(r.__v),
            i = !1,
            a = function() {
                i || (i = !0, n.__R = null, o ? o(s) : s())
            };
        n.__R = a;
        var s = function() {
                if (!--r.__u) {
                    if (r.state.__e) {
                        var e = r.state.__e;
                        r.__v.__k[0] = function e(t, n, r) {
                            return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                                return e(t, n, r)
                            })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                        }(e, e.__c.__P, e.__c.__O)
                    }
                    var t;
                    for (r.setState({
                            __e: r.__b = null
                        }); t = r.t.pop();) t.forceUpdate()
                }
            },
            c = !0 === t.__h;
        r.__u++ || c || r.setState({
            __e: r.__b = r.__v.__k[0]
        }), e.then(a, a)
    }, xe.prototype.componentWillUnmount = function() {
        this.t = []
    }, xe.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                        "function" == typeof e.__c && e.__c()
                    })), t.__c.__H = null), null != (t = ue({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                        return e(t, n, r)
                    }))), t
                }(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var o = t.__e && p(h, null, e.fallback);
        return o && (o.__h = null), [p(h, null, t.__e ? null : e.children), o]
    };
    var ke = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2]
            }
    };

    function Ee(e) {
        return this.getChildContext = function() {
            return e.context
        }, e.children
    }

    function Ce(e) {
        var t = this,
            n = e.i;
        t.componentWillUnmount = function() {
            I(null, t.l), t.l = null, t.i = null
        }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            insertBefore: function(e, n) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
            }
        }), I(p(Ee, {
            context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }

    function Oe(e, t) {
        return p(Ce, {
            __v: e,
            i: t
        })
    }(Se.prototype = new m).__e = function(e) {
        var t = this,
            n = we(t.__v),
            r = t.o.get(e);
        return r[0]++,
            function(o) {
                var i = function() {
                    t.props.revealOrder ? (r.push(o), ke(t, e, r)) : o()
                };
                n ? n(i) : i()
            }
    }, Se.prototype.render = function(e) {
        this.u = null, this.o = new Map;
        var t = w(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }, Se.prototype.componentDidUpdate = Se.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach((function(t, n) {
            ke(e, n, t)
        }))
    };
    var Te = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        Re = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Pe = "undefined" != typeof document,
        Me = function(e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
        };
    m.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
        Object.defineProperty(m.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    }));
    var Ae = t.event;

    function Ie() {}

    function Ne() {
        return this.cancelBubble
    }

    function Le() {
        return this.defaultPrevented
    }
    t.event = function(e) {
        return Ae && (e = Ae(e)), e.persist = Ie, e.isPropagationStopped = Ne, e.isDefaultPrevented = Le, e.nativeEvent = e
    };
    var je, De = {
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        $e = t.vnode;
    t.vnode = function(e) {
        var t = e.type,
            n = e.props,
            r = n;
        if ("string" == typeof t) {
            var o = -1 === t.indexOf("-");
            for (var i in r = {}, n) {
                var a = n[i];
                Pe && "children" === i && "noscript" === t || "value" === i && "defaultValue" in n && null == a || ("defaultValue" === i && "value" in n && null == n.value ? i = "value" : "download" === i && !0 === a ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Me(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(i) ? i = i.toLowerCase() : o && Re.test(i) ? i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), r[i] = a)
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (r.value = w(n.children).forEach((function(e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
            }))), "select" == t && null != r.defaultValue && (r.value = w(n.children).forEach((function(e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
            }))), e.props = r, n.class != n.className && (De.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", De))
        }
        e.$$typeof = Te, $e && $e(e)
    };
    var Be = t.__r;
    t.__r = function(e) {
        Be && Be(e), je = e.__c
    };
    var ze = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return je.__n[e.__c].props.value
                }
            }
        }
    };

    function Fe(e) {
        return !!e && e.$$typeof === Te
    }

    function We(e) {
        return Fe(e) ? L.apply(null, arguments) : e
    }
    var He = function(e, t) {
            return e(t)
        },
        Ue = {
            useState: K,
            useReducer: X,
            useEffect: Y,
            useLayoutEffect: J,
            useRef: Q,
            useImperativeHandle: Z,
            useMemo: ee,
            useCallback: te,
            useContext: ne,
            useDebugValue: re,
            version: "17.0.2",
            Children: _e,
            render: function(e, t, n) {
                return null == t.__k && (t.textContent = ""), I(e, t), "function" == typeof n && n(), e ? e.__c : null
            },
            hydrate: function(e, t, n) {
                return N(e, t), "function" == typeof n && n(), e ? e.__c : null
            },
            unmountComponentAtNode: function(e) {
                return !!e.__k && (I(null, e), !0)
            },
            createPortal: Oe,
            createElement: p,
            createContext: j,
            createFactory: function(e) {
                return p.bind(null, e)
            },
            cloneElement: We,
            createRef: function() {
                return {
                    current: null
                }
            },
            Fragment: h,
            isValidElement: Fe,
            findDOMNode: function(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            },
            Component: m,
            PureComponent: pe,
            memo: fe,
            forwardRef: ve,
            flushSync: function(e, t) {
                return e(t)
            },
            unstable_batchedUpdates: He,
            StrictMode: h,
            Suspense: xe,
            SuspenseList: Se,
            lazy: function(e) {
                var t, n, r;

                function o(o) {
                    if (t || (t = e()).then((function(e) {
                            n = e.default || e
                        }), (function(e) {
                            r = e
                        })), r) throw r;
                    if (!n) throw t;
                    return p(n, o)
                }
                return o.displayName = "Lazy", o.__f = !0, o
            },
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ze
        };

    function qe(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function Ve(e) {
        var t = e.default;
        if ("function" == typeof t) {
            var n = function() {
                return t.apply(this, arguments)
            };
            n.prototype = t.prototype
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach((function(t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(n, t, r.get ? r : {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            })
        })), n
    }
    var Ge = Ue.createContext(null);
    var Ke = function(e) {
            e()
        },
        Xe = function() {
            return Ke
        };
    var Ye = {
        notify: function() {},
        get: function() {
            return []
        }
    };

    function Je(e, t) {
        var n, r = Ye;

        function o() {
            a.onStateChange && a.onStateChange()
        }

        function i() {
            n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = function() {
                var e = Xe(),
                    t = null,
                    n = null;
                return {
                    clear: function() {
                        t = null, n = null
                    },
                    notify: function() {
                        e((function() {
                            for (var e = t; e;) e.callback(), e = e.next
                        }))
                    },
                    get: function() {
                        for (var e = [], n = t; n;) e.push(n), n = n.next;
                        return e
                    },
                    subscribe: function(e) {
                        var r = !0,
                            o = n = {
                                callback: e,
                                next: null,
                                prev: n
                            };
                        return o.prev ? o.prev.next = o : t = o,
                            function() {
                                r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                            }
                    }
                }
            }())
        }
        var a = {
            addNestedSub: function(e) {
                return i(), r.subscribe(e)
            },
            notifyNestedSubs: function() {
                r.notify()
            },
            handleChangeWrapper: o,
            isSubscribed: function() {
                return Boolean(n)
            },
            trySubscribe: i,
            tryUnsubscribe: function() {
                n && (n(), n = void 0, r.clear(), r = Ye)
            },
            getListeners: function() {
                return r
            }
        };
        return a
    }
    var Qe = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? J : Y;

    function Ze(e) {
        var t = e.store,
            n = e.context,
            r = e.children,
            o = ee((function() {
                var e = Je(t);
                return e.onStateChange = e.notifyNestedSubs, {
                    store: t,
                    subscription: e
                }
            }), [t]),
            i = ee((function() {
                return t.getState()
            }), [t]);
        Qe((function() {
            var e = o.subscription;
            return e.trySubscribe(), i !== t.getState() && e.notifyNestedSubs(),
                function() {
                    e.tryUnsubscribe(), e.onStateChange = null
                }
        }), [o, i]);
        var a = n || Ge;
        return Ue.createElement(a.Provider, {
            value: o
        }, r)
    }

    function et() {
        return et = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, et.apply(this, arguments)
    }

    function tt(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }

    function nt() {
        return ne(Ge)
    }

    function rt(e) {
        void 0 === e && (e = Ge);
        var t = e === Ge ? nt : function() {
            return ne(e)
        };
        return function() {
            return t().store
        }
    }
    var ot = rt();

    function it(e) {
        void 0 === e && (e = Ge);
        var t = e === Ge ? ot : rt(e);
        return function() {
            return t().dispatch
        }
    }
    var at = it(),
        st = function(e, t) {
            return e === t
        };

    function ct(e) {
        void 0 === e && (e = Ge);
        var t = e === Ge ? nt : function() {
            return ne(e)
        };
        return function(e, n) {
            void 0 === n && (n = st);
            var r = t(),
                o = function(e, t, n, r) {
                    var o, i = X((function(e) {
                            return e + 1
                        }), 0),
                        a = i[1],
                        s = ee((function() {
                            return Je(n, r)
                        }), [n, r]),
                        c = Q(),
                        l = Q(),
                        u = Q(),
                        d = Q(),
                        p = n.getState();
                    try {
                        if (e !== l.current || p !== u.current || c.current) {
                            var f = e(p);
                            o = void 0 !== d.current && t(f, d.current) ? d.current : f
                        } else o = d.current
                    } catch (e) {
                        throw c.current && (e.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), e
                    }
                    return Qe((function() {
                        l.current = e, u.current = p, d.current = o, c.current = void 0
                    })), Qe((function() {
                        function e() {
                            try {
                                var e = n.getState();
                                if (e === u.current) return;
                                var r = l.current(e);
                                if (t(r, d.current)) return;
                                d.current = r, u.current = e
                            } catch (e) {
                                c.current = e
                            }
                            a()
                        }
                        return s.onStateChange = e, s.trySubscribe(), e(),
                            function() {
                                return s.tryUnsubscribe()
                            }
                    }), [n, s]), o
                }(e, n, r.store, r.subscription);
            return re(o), o
        }
    }
    var lt = ct();

    function ut(e) {
        var t, n, r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
            if (Array.isArray(e))
                for (t = 0; t < e.length; t++) e[t] && (n = ut(e[t])) && (r && (r += " "), r += n);
            else
                for (t in e) e[t] && (r && (r += " "), r += t);
        return r
    }

    function dt() {
        for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = ut(e)) && (r && (r += " "), r += t);
        return r
    }

    function pt(e, t) {
        return pt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, pt(e, t)
    }

    function ft(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pt(e, t)
    }
    var ht = !1,
        mt = Ue.createContext(null),
        vt = "unmounted",
        gt = "exited",
        _t = "entering",
        yt = "entered",
        bt = "exiting",
        xt = function(e) {
            function t(t, n) {
                var r;
                r = e.call(this, t, n) || this;
                var o, i = n && !n.isMounting ? t.enter : t.appear;
                return r.appearStatus = null, t.in ? i ? (o = gt, r.appearStatus = _t) : o = yt : o = t.unmountOnExit || t.mountOnEnter ? vt : gt, r.state = {
                    status: o
                }, r.nextCallback = null, r
            }
            ft(t, e), t.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === vt ? {
                    status: gt
                } : null
            };
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }, n.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== _t && n !== yt && (t = _t) : n !== _t && n !== yt || (t = bt)
                }
                this.updateStatus(!1, t)
            }, n.componentWillUnmount = function() {
                this.cancelNextCallback()
            }, n.getTimeouts = function() {
                var e, t, n, r = this.props.timeout;
                return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                    exit: e,
                    enter: t,
                    appear: n
                }
		                }, n.updateStatus = function(e, t) {
                void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === _t ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === gt && this.setState({
                    status: vt
                })
            }, n.performEnter = function(e) {
                var t = this,
                    n = this.props.enter,
                    r = this.context ? this.context.isMounting : e,
                    o = this.props.nodeRef ? [r] : [Ue.findDOMNode(this), r],
                    i = o[0],
                    a = o[1],
                    s = this.getTimeouts(),
                    c = r ? s.appear : s.enter;
                !e && !n || ht ? this.safeSetState({
                    status: yt
                }, (function() {
                    t.props.onEntered(i)
                })) : (this.props.onEnter(i, a), this.safeSetState({
                    status: _t
                }, (function() {
                    t.props.onEntering(i, a), t.onTransitionEnd(c, (function() {
                        t.safeSetState({
                            status: yt
                        }, (function() {
                            t.props.onEntered(i, a)
                        }))
                    }))
                })))
            }, n.performExit = function() {
                var e = this,
                    t = this.props.exit,
                    n = this.getTimeouts(),
                    r = this.props.nodeRef ? void 0 : Ue.findDOMNode(this);
                t && !ht ? (this.props.onExit(r), this.safeSetState({
                    status: bt
                }, (function() {
                    e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                        e.safeSetState({
                            status: gt
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }))
                }))) : this.safeSetState({
                    status: gt
                }, (function() {
                    e.props.onExited(r)
                }))
            }, n.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
            }, n.safeSetState = function(e, t) {
                t = this.setNextCallback(t), this.setState(e, t)
            }, n.setNextCallback = function(e) {
                var t = this,
                    n = !0;
                return this.nextCallback = function(r) {
                    n && (n = !1, t.nextCallback = null, e(r))
                }, this.nextCallback.cancel = function() {
                    n = !1
                }, this.nextCallback
            }, n.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : Ue.findDOMNode(this),
                    r = null == e && !this.props.addEndListener;
                if (n && !r) {
                    if (this.props.addEndListener) {
                        var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                            i = o[0],
                            a = o[1];
                        this.props.addEndListener(i, a)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else setTimeout(this.nextCallback, 0)
            }, n.render = function() {
                var e = this.state.status;
                if (e === vt) return null;
                var t = this.props,
                    n = t.children,
                    r = tt(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
                return Ue.createElement(mt.Provider, {
                    value: null
                }, "function" == typeof n ? n(e, r) : Ue.cloneElement(Ue.Children.only(n), r))
            }, t
        }(Ue.Component);

    function wt() {}
    xt.contextType = mt, xt.propTypes = {}, xt.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: wt,
        onEntering: wt,
        onEntered: wt,
        onExit: wt,
        onExiting: wt,
        onExited: wt
    }, xt.UNMOUNTED = vt, xt.EXITED = gt, xt.ENTERING = _t, xt.ENTERED = yt, xt.EXITING = bt;
    var St = xt;

    function kt(e, t) {
        var n = Object.create(null);
        return e && _e.map(e, (function(e) {
            return e
        })).forEach((function(e) {
            n[e.key] = function(e) {
                return t && Fe(e) ? t(e) : e
            }(e)
        })), n
    }

    function Et(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
    }

    function Ct(e, t, n) {
        var r = kt(e.children),
            o = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var r, o = Object.create(null),
                    i = [];
                for (var a in e) a in t ? i.length && (o[a] = i, i = []) : i.push(a);
                var s = {};
                for (var c in t) {
                    if (o[c])
                        for (r = 0; r < o[c].length; r++) {
                            var l = o[c][r];
                            s[o[c][r]] = n(l)
                        }
                    s[c] = n(c)
                }
                for (r = 0; r < i.length; r++) s[i[r]] = n(i[r]);
                return s
            }(t, r);
        return Object.keys(o).forEach((function(i) {
            var a = o[i];
            if (Fe(a)) {
                var s = i in t,
                    c = i in r,
                    l = t[i],
                    u = Fe(l) && !l.props.in;
                !c || s && !u ? c || !s || u ? c && s && Fe(l) && (o[i] = We(a, {
                    onExited: n.bind(null, a),
                    in: l.props.in,
                    exit: Et(a, "exit", e),
                    enter: Et(a, "enter", e)
                })) : o[i] = We(a, {
                    in: !1
                }) : o[i] = We(a, {
                    onExited: n.bind(null, a),
                    in: !0,
                    exit: Et(a, "exit", e),
                    enter: Et(a, "enter", e)
                })
            }
        })), o
    }
    var Ot = Object.values || function(e) {
            return Object.keys(e).map((function(t) {
                return e[t]
            }))
        },
        Tt = function(e) {
            function t(t, n) {
                var r, o = (r = e.call(this, t, n) || this).handleExited.bind(function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(r));
                return r.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: o,
                    firstRender: !0
                }, r
            }
            ft(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }, n.componentWillUnmount = function() {
                this.mounted = !1
            }, t.getDerivedStateFromProps = function(e, t) {
                var n, r, o = t.children,
                    i = t.handleExited;
                return {
                    children: t.firstRender ? (n = e, r = i, kt(n.children, (function(e) {
                        return We(e, {
                            onExited: r.bind(null, e),
                            in: !0,
                            appear: Et(e, "appear", n),
                            enter: Et(e, "enter", n),
                            exit: Et(e, "exit", n)
                        })
                    }))) : Ct(e, o, i),
                    firstRender: !1
                }
            }, n.handleExited = function(e, t) {
                var n = kt(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                    var n = et({}, t.children);
                    return delete n[e.key], {
                        children: n
                    }
                })))
            }, n.render = function() {
                var e = this.props,
                    t = e.component,
                    n = e.childFactory,
                    r = tt(e, ["component", "childFactory"]),
                    o = this.state.contextValue,
                    i = Ot(this.state.children).map(n);
                return delete r.appear, delete r.enter, delete r.exit, null === t ? Ue.createElement(mt.Provider, {
                    value: o
                }, i) : Ue.createElement(mt.Provider, {
                    value: o
                }, Ue.createElement(t, r, i))
            }, t
        }(Ue.Component);
    Tt.propTypes = {}, Tt.defaultProps = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    };
    var Rt = Tt;

    function Pt(e) {
        return null !== e && "object" == typeof e && e.constructor === Object
    }

    function Mt(e, t, n = {
        clone: !0
    }) {
        const r = n.clone ? et({}, e) : e;
        return Pt(e) && Pt(t) && Object.keys(t).forEach((o => {
            "__proto__" !== o && (Pt(t[o]) && o in e && Pt(e[o]) ? r[o] = Mt(e[o], t[o], n) : r[o] = t[o])
        })), r
    }

    function At(e) {
        let t = "https://mui.com/production-error/?code=" + e;
        for (let e = 1; e < arguments.length; e += 1) t += "&args[]=" + encodeURIComponent(arguments[e]);
        return "Minified MUI error #" + e + "; visit " + t + " for the full message."
    }

    function It(e) {
        if ("string" != typeof e) throw new Error(At(7));
        return e.charAt(0).toUpperCase() + e.slice(1)
    }

    function Nt(...e) {
        return e.reduce(((e, t) => null == t ? e : function(...n) {
            e.apply(this, n), t.apply(this, n)
        }), (() => {}))
    }

    function Lt(e, t = 166) {
        let n;

        function r(...r) {
            clearTimeout(n), n = setTimeout((() => {
                e.apply(this, r)
            }), t)
        }
        return r.clear = () => {
            clearTimeout(n)
        }, r
    }

    function jt(e, t) {
        return Fe(e) && -1 !== t.indexOf(e.type.muiName)
    }

    function Dt(e) {
        return e && e.ownerDocument || document
    }

    function $t(e) {
        return Dt(e).defaultView || window
    }

    function Bt(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }
    var zt = "undefined" != typeof window ? J : Y;
    let Ft = 0;

    function Wt(e) {
        const [t, n] = K(e), r = e || t;
        return Y((() => {
            null == t && (Ft += 1, n(`mui-${Ft}`))
        }), [t]), r
    }

    function Ht({
        controlled: e,
        default: t,
        name: n,
        state: r = "value"
    }) {
        const {
            current: o
        } = Q(void 0 !== e), [i, a] = K(t);
        return [o ? e : i, te((e => {
            o || a(e)
        }), [])]
    }

    function Ut(e) {
        const t = Q(e);
        return zt((() => {
            t.current = e
        })), te(((...e) => (0, t.current)(...e)), [])
    }

    function qt(e, t) {
        return ee((() => null == e && null == t ? null : n => {
            Bt(e, n), Bt(t, n)
        }), [e, t])
    }
    let Vt, Gt = !0,
        Kt = !1;
    const Xt = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
    };

    function Yt(e) {
        e.metaKey || e.altKey || e.ctrlKey || (Gt = !0)
    }

    function Jt() {
        Gt = !1
    }

    function Qt() {
        "hidden" === this.visibilityState && Kt && (Gt = !0)
    }

    function Zt(e) {
        const {
            target: t
        } = e;
        try {
            return t.matches(":focus-visible")
        } catch (e) {}
        return Gt || function(e) {
            const {
                type: t,
                tagName: n
            } = e;
            return !("INPUT" !== n || !Xt[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
        }(t)
    }

    function en() {
        const e = te((e => {
                var t;
                null != e && ((t = e.ownerDocument).addEventListener("keydown", Yt, !0), t.addEventListener("mousedown", Jt, !0), t.addEventListener("pointerdown", Jt, !0), t.addEventListener("touchstart", Jt, !0), t.addEventListener("visibilitychange", Qt, !0))
            }), []),
            t = Q(!1);
        return {
            isFocusVisibleRef: t,
            onFocus: function(e) {
                return !!Zt(e) && (t.current = !0, !0)
            },
            onBlur: function() {
                return !!t.current && (Kt = !0, window.clearTimeout(Vt), Vt = window.setTimeout((() => {
                    Kt = !1
                }), 100), t.current = !1, !0)
            },
            ref: e
        }
    }
    let tn;

    function nn() {
        if (tn) return tn;
        const e = document.createElement("div"),
            t = document.createElement("div");
        return t.style.width = "10px", t.style.height = "1px", e.appendChild(t), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), tn = "reverse", e.scrollLeft > 0 ? tn = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (tn = "negative")), document.body.removeChild(e), tn
    }

    function rn(e, t) {
        const n = e.scrollLeft;
        if ("rtl" !== t) return n;
        switch (nn()) {
            case "negative":
                return e.scrollWidth - e.clientWidth + n;
            case "reverse":
                return e.scrollWidth - e.clientWidth - n;
            default:
                return n
        }
    }

    function on(e, t) {
        const n = et({}, t);
        return Object.keys(e).forEach((t => {
            void 0 === n[t] && (n[t] = e[t])
        })), n
    }

    function an() {
        return an = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, an.apply(this, arguments)
    }

    function sn(e) {
        var t = Object.create(null);
        return function(n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n]
        }
    }
    var cn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        ln = sn((function(e) {
            return cn.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        }));
    var un = function() {
            function e(e) {
                var t = this;
                this._insertTag = function(e) {
                    var n;
                    n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
            }
            var t = e.prototype;
            return t.hydrate = function(e) {
                e.forEach(this._insertTag)
            }, t.insert = function(e) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                    var t = document.createElement("style");
                    return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                }(this));
                var t = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var n = function(e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }(t);
                    try {
                        n.insertRule(e, n.cssRules.length)
                    } catch (e) {}
                } else t.appendChild(document.createTextNode(e));
                this.ctr++
            }, t.flush = function() {
                this.tags.forEach((function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                })), this.tags = [], this.ctr = 0
            }, e
        }(),
        dn = "-ms-",
        pn = "-moz-",
        fn = "-webkit-",
        hn = "comm",
        mn = "rule",
        vn = "decl",
        gn = "@keyframes",
        _n = Math.abs,
        yn = String.fromCharCode,
        bn = Object.assign;

    function xn(e) {
        return e.trim()
    }

    function wn(e, t, n) {
        return e.replace(t, n)
    }

    function Sn(e, t) {
        return e.indexOf(t)
    }

    function kn(e, t) {
        return 0 | e.charCodeAt(t)
    }

    function En(e, t, n) {
        return e.slice(t, n)
    }

    function Cn(e) {
        return e.length
    }

    function On(e) {
        return e.length
    }

    function Tn(e, t) {
        return t.push(e), e
    }
    var Rn = 1,
        Pn = 1,
        Mn = 0,
        An = 0,
        In = 0,
        Nn = "";

    function Ln(e, t, n, r, o, i, a) {
        return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: o,
            children: i,
            line: Rn,
            column: Pn,
            length: a,
            return: ""
        }
    }

    function jn(e, t) {
        return bn(Ln("", null, null, "", null, null, 0), e, {
            length: -e.length
        }, t)
    }

    function Dn() {
        return In = An > 0 ? kn(Nn, --An) : 0, Pn--, 10 === In && (Pn = 1, Rn--), In
    }

    function $n() {
        return In = An < Mn ? kn(Nn, An++) : 0, Pn++, 10 === In && (Pn = 1, Rn++), In
    }

    function Bn() {
        return kn(Nn, An)
    }

    function zn() {
        return An
    }

    function Fn(e, t) {
        return En(Nn, e, t)
    }

    function Wn(e) {
        switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
                return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
                return 4;
            case 58:
                return 3;
            case 34:
            case 39:
            case 40:
            case 91:
                return 2;
            case 41:
            case 93:
                return 1
        }
        return 0
    }

    function Hn(e) {
        return Rn = Pn = 1, Mn = Cn(Nn = e), An = 0, []
    }

    function Un(e) {
        return Nn = "", e
    }

    function qn(e) {
        return xn(Fn(An - 1, Kn(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
    }

    function Vn(e) {
        for (;
            (In = Bn()) && In < 33;) $n();
        return Wn(e) > 2 || Wn(In) > 3 ? "" : " "
    }

    function Gn(e, t) {
        for (; --t && $n() && !(In < 48 || In > 102 || In > 57 && In < 65 || In > 70 && In < 97););
        return Fn(e, zn() + (t < 6 && 32 == Bn() && 32 == $n()))
    }

    function Kn(e) {
        for (; $n();) switch (In) {
            case e:
                return An;
            case 34:
            case 39:
                34 !== e && 39 !== e && Kn(In);
                break;
            case 40:
                41 === e && Kn(e);
                break;
            case 92:
                $n()
        }
        return An
    }

    function Xn(e, t) {
        for (; $n() && e + In !== 57 && (e + In !== 84 || 47 !== Bn()););
        return "/*" + Fn(t, An - 1) + "*" + yn(47 === e ? e : $n())
    }

    function Yn(e) {
        for (; !Wn(Bn());) $n();
        return Fn(e, An)
    }

    function Jn(e) {
        return Un(Qn("", null, null, null, [""], e = Hn(e), 0, [0], e))
    }

    function Qn(e, t, n, r, o, i, a, s, c) {
        for (var l = 0, u = 0, d = a, p = 0, f = 0, h = 0, m = 1, v = 1, g = 1, _ = 0, y = "", b = o, x = i, w = r, S = y; v;) switch (h = _, _ = $n()) {
            case 40:
                if (108 != h && 58 == S.charCodeAt(d - 1)) {
                    -1 != Sn(S += wn(qn(_), "&", "&\f"), "&\f") && (g = -1);
                    break
                }
                case 34:
                case 39:
                case 91:
                    S += qn(_);
                    break;
                case 9:
                case 10:
                case 13:
                case 32:
                    S += Vn(h);
                    break;
                case 92:
                    S += Gn(zn() - 1, 7);
                    continue;
                case 47:
                    switch (Bn()) {
                        case 42:
                        case 47:
                            Tn(er(Xn($n(), zn()), t, n), c);
                            break;
                        default:
                            S += "/"
                    }
                    break;
                case 123 * m:
                    s[l++] = Cn(S) * g;
                case 125 * m:
                case 59:
                case 0:
                    switch (_) {
                        case 0:
                        case 125:
                            v = 0;
                        case 59 + u:
                            f > 0 && Cn(S) - d && Tn(f > 32 ? tr(S + ";", r, n, d - 1) : tr(wn(S, " ", "") + ";", r, n, d - 2), c);
                            break;
                        case 59:
                            S += ";";
                        default:
                            if (Tn(w = Zn(S, t, n, l, u, o, s, y, b = [], x = [], d), i), 123 === _)
                                if (0 === u) Qn(S, t, w, w, b, i, d, s, x);
                                else switch (p) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        Qn(e, w, w, r && Tn(Zn(e, w, w, 0, 0, o, s, y, o, b = [], d), x), o, x, d, s, r ? b : x);
                                        break;
                                    default:
                                        Qn(S, w, w, w, [""], x, 0, s, x)
                                }
                    }
                    l = u = f = 0, m = g = 1, y = S = "", d = a;
                    break;
                case 58:
                    d = 1 + Cn(S), f = h;
                default:
                    if (m < 1)
                        if (123 == _) --m;
                        else if (125 == _ && 0 == m++ && 125 == Dn()) continue;
                    switch (S += yn(_), _ * m) {
                        case 38:
                            g = u > 0 ? 1 : (S += "\f", -1);
                            break;
                        case 44:
                            s[l++] = (Cn(S) - 1) * g, g = 1;
                            break;
                        case 64:
                            45 === Bn() && (S += qn($n())), p = Bn(), u = d = Cn(y = S += Yn(zn())), _++;
                            break;
                        case 45:
                            45 === h && 2 == Cn(S) && (m = 0)
                    }
        }
        return i
    }

    function Zn(e, t, n, r, o, i, a, s, c, l, u) {
        for (var d = o - 1, p = 0 === o ? i : [""], f = On(p), h = 0, m = 0, v = 0; h < r; ++h)
            for (var g = 0, _ = En(e, d + 1, d = _n(m = a[h])), y = e; g < f; ++g)(y = xn(m > 0 ? p[g] + " " + _ : wn(_, /&\f/g, p[g]))) && (c[v++] = y);
        return Ln(e, t, n, 0 === o ? mn : s, c, l, u)
    }

    function er(e, t, n) {
        return Ln(e, t, n, hn, yn(In), En(e, 2, -2), 0)
    }

    function tr(e, t, n, r) {
        return Ln(e, t, n, vn, En(e, 0, r), En(e, r + 1, -1), r)
    }

    function nr(e, t) {
        switch (function(e, t) {
                return (((t << 2 ^ kn(e, 0)) << 2 ^ kn(e, 1)) << 2 ^ kn(e, 2)) << 2 ^ kn(e, 3)
            }(e, t)) {
            case 5103:
                return fn + "print-" + e + e;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
                return fn + e + e;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
                return fn + e + pn + e + dn + e + e;
            case 6828:
            case 4268:
                return fn + e + dn + e + e;
            case 6165:
                return fn + e + dn + "flex-" + e + e;
            case 5187:
                return fn + e + wn(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
            case 5443:
                return fn + e + dn + "flex-item-" + wn(e, /flex-|-self/, "") + e;
            case 4675:
                return fn + e + dn + "flex-line-pack" + wn(e, /align-content|flex-|-self/, "") + e;
            case 5548:
                return fn + e + dn + wn(e, "shrink", "negative") + e;
            case 5292:
                return fn + e + dn + wn(e, "basis", "preferred-size") + e;
            case 6060:
                return fn + "box-" + wn(e, "-grow", "") + fn + e + dn + wn(e, "grow", "positive") + e;
            case 4554:
                return fn + wn(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
            case 6187:
                return wn(wn(wn(e, /(zoom-|grab)/, fn + "$1"), /(image-set)/, fn + "$1"), e, "") + e;
            case 5495:
            case 3959:
                return wn(e, /(image-set\([^]*)/, fn + "$1$`$1");
            case 4968:
                return wn(wn(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + fn + e + e;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
                return wn(e, /(.+)-inline(.+)/, fn + "$1$2") + e;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
                if (Cn(e) - 1 - t > 6) switch (kn(e, t + 1)) {
                    case 109:
                        if (45 !== kn(e, t + 4)) break;
                    case 102:
                        return wn(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + pn + (108 == kn(e, t + 3) ? "$3" : "$2-$3")) + e;
                    case 115:
                        return ~Sn(e, "stretch") ? nr(wn(e, "stretch", "fill-available"), t) + e : e
                }
                break;
            case 4949:
                if (115 !== kn(e, t + 1)) break;
            case 6444:
                switch (kn(e, Cn(e) - 3 - (~Sn(e, "!important") && 10))) {
                    case 107:
                        return wn(e, ":", ":" + fn) + e;
                    case 101:
                        return wn(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + fn + (45 === kn(e, 14) ? "inline-" : "") + "box$3$1" + fn + "$2$3$1" + dn + "$2box$3") + e
                }
                break;
            case 5936:
                switch (kn(e, t + 11)) {
                    case 114:
                        return fn + e + dn + wn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                    case 108:
                        return fn + e + dn + wn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                    case 45:
                        return fn + e + dn + wn(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                }
                return fn + e + dn + e + e
        }
        return e
    }

    function rr(e, t) {
        for (var n = "", r = On(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
        return n
    }

    function or(e, t, n, r) {
        switch (e.type) {
            case "@import":
            case vn:
                return e.return = e.return || e.value;
            case hn:
                return "";
            case gn:
                return e.return = e.value + "{" + rr(e.children, r) + "}";
            case mn:
                e.value = e.props.join(",")
        }
        return Cn(n = rr(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
    }

    function ir(e) {
        var t = On(e);
        return function(n, r, o, i) {
            for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
            return a
        }
    }
    var ar = function(e) {
            var t = new WeakMap;
            return function(n) {
                if (t.has(n)) return t.get(n);
                var r = e(n);
                return t.set(n, r), r
            }
        },
        sr = function(e, t, n) {
            for (var r = 0, o = 0; r = o, o = Bn(), 38 === r && 12 === o && (t[n] = 1), !Wn(o);) $n();
            return Fn(e, An)
        },
        cr = function(e, t) {
            return Un(function(e, t) {
                var n = -1,
                    r = 44;
                do {
                    switch (Wn(r)) {
                        case 0:
                            38 === r && 12 === Bn() && (t[n] = 1), e[n] += sr(An - 1, t, n);
                            break;
                        case 2:
                            e[n] += qn(r);
                            break;
                        case 4:
                            if (44 === r) {
                                e[++n] = 58 === Bn() ? "&\f" : "", t[n] = e[n].length;
                                break
                            }
                            default:
                                e[n] += yn(r)
                    }
                } while (r = $n());
                return e
            }(Hn(e), t))
        },
        lr = new WeakMap,
        ur = function(e) {
            if ("rule" === e.type && e.parent && !(e.length < 1)) {
                for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                    "rule" !== n.type;)
                    if (!(n = n.parent)) return;
                if ((1 !== e.props.length || 58 === t.charCodeAt(0) || lr.get(n)) && !r) {
                    lr.set(e, !0);
                    for (var o = [], i = cr(t, o), a = n.props, s = 0, c = 0; s < i.length; s++)
                        for (var l = 0; l < a.length; l++, c++) e.props[c] = o[s] ? i[s].replace(/&\f/g, a[l]) : a[l] + " " + i[s]
                }
            }
        },
        dr = function(e) {
            if ("decl" === e.type) {
                var t = e.value;
                108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
            }
        },
        pr = "undefined" != typeof document,
        fr = pr ? void 0 : ar((function() {
            return sn((function() {
                var e = {};
                return function(t) {
                    return e[t]
                }
            }))
        })),
        hr = [function(e, t, n, r) {
            if (e.length > -1 && !e.return) switch (e.type) {
                case vn:
                    e.return = nr(e.value, e.length);
                    break;
                case gn:
                    return rr([jn(e, {
                        value: wn(e.value, "@", "@" + fn)
                    })], r);
                case mn:
                    if (e.length) return function(e, t) {
                        return e.map(t).join("")
                    }(e.props, (function(t) {
                        switch (function(e, t) {
                                return (e = t.exec(e)) ? e[0] : e
                            }(t, /(::plac\w+|:read-\w+)/)) {
                            case ":read-only":
                            case ":read-write":
                                return rr([jn(e, {
                                    props: [wn(t, /:(read-\w+)/, ":-moz-$1")]
                                })], r);
                            case "::placeholder":
                                return rr([jn(e, {
                                    props: [wn(t, /:(plac\w+)/, ":-webkit-input-$1")]
                                }), jn(e, {
                                    props: [wn(t, /:(plac\w+)/, ":-moz-$1")]
                                }), jn(e, {
                                    props: [wn(t, /:(plac\w+)/, dn + "input-$1")]
                                })], r)
                        }
                        return ""
                    }))
            }
        }],
        mr = function(e) {
            var t = e.key;
            if (pr && "css" === t) {
                var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                Array.prototype.forEach.call(n, (function(e) {
                    -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                }))
            }
            var r, o, i = e.stylisPlugins || hr,
                a = {},
                s = [];
            pr && (r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) a[t[n]] = !0;
                s.push(e)
            })));
            var c, l = [ur, dr];
            if (pr) {
                var u, d = [or, (c = function(e) {
                        u.insert(e)
                    }, function(e) {
                        e.root || (e = e.return) && c(e)
                    })],
                    p = ir(l.concat(i, d));
                o = function(e, t, n, r) {
                    u = n,
                        function(e) {
                            rr(Jn(e), p)
                        }(e ? e + "{" + t.styles + "}" : t.styles), r && (g.inserted[t.name] = !0)
                }
            } else {
                var f = [or],
                    h = ir(l.concat(i, f)),
                    m = fr(i)(t),
                    v = function(e, t) {
                        var n = t.name;
                        return void 0 === m[n] && (m[n] = function(e) {
                            return rr(Jn(e), h)
                        }(e ? e + "{" + t.styles + "}" : t.styles)), m[n]
                    };
                o = function(e, t, n, r) {
                    var o = t.name,
                        i = v(e, t);
                    return r && (g.inserted[o] = !0), i
                }
            }
            var g = {
                key: t,
                sheet: new un({
                    key: t,
                    container: r,
                    nonce: e.nonce,
                    speedy: e.speedy,
                    prepend: e.prepend,
                    insertionPoint: e.insertionPoint
                }),
                nonce: e.nonce,
                inserted: a,
                registered: {},
                insert: o
            };
            return g.sheet.hydrate(s), g
        },
        vr = "undefined" != typeof document;

    function gr(e, t, n) {
        var r = "";
        return n.split(" ").forEach((function(n) {
            void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
        })), r
    }
    var _r = function(e, t, n) {
        var r = e.key + "-" + t.name;
        if ((!1 === n || !1 === vr && void 0 !== e.compat) && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name]) {
            var o = "",
                i = t;
            do {
                var a = e.insert(t === i ? "." + r : "", i, e.sheet, !0);
                vr || void 0 === a || (o += a), i = i.next
            } while (void 0 !== i);
            if (!vr && 0 !== o.length) return o
        }
    };
    var yr = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        },
        br = /[A-Z]|^ms/g,
        xr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        wr = function(e) {
            return 45 === e.charCodeAt(1)
        },
        Sr = function(e) {
            return null != e && "boolean" != typeof e
        },
        kr = sn((function(e) {
            return wr(e) ? e : e.replace(br, "-$&").toLowerCase()
        })),
        Er = function(e, t) {
            switch (e) {
                case "animation":
                case "animationName":
                    if ("string" == typeof t) return t.replace(xr, (function(e, t, n) {
                        return Or = {
                            name: t,
                            styles: n,
                            next: Or
                        }, t
                    }))
            }
            return 1 === yr[e] || wr(e) || "number" != typeof t || 0 === t ? t : t + "px"
        };

    function Cr(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
            case "boolean":
                return "";
            case "object":
                if (1 === n.anim) return Or = {
                    name: n.name,
                    styles: n.styles,
                    next: Or
                }, n.name;
                if (void 0 !== n.styles) {
                    var r = n.next;
                    if (void 0 !== r)
                        for (; void 0 !== r;) Or = {
                            name: r.name,
                            styles: r.styles,
                            next: Or
                        }, r = r.next;
                    return n.styles + ";"
                }
                return function(e, t, n) {
                    var r = "";
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++) r += Cr(e, t, n[o]) + ";";
                    else
                        for (var i in n) {
                            var a = n[i];
                            if ("object" != typeof a) null != t && void 0 !== t[a] ? r += i + "{" + t[a] + "}" : Sr(a) && (r += kr(i) + ":" + Er(i, a) + ";");
                            else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                var s = Cr(e, t, a);
                                switch (i) {
                                    case "animation":
                                    case "animationName":
                                        r += kr(i) + ":" + s + ";";
                                        break;
                                    default:
                                        r += i + "{" + s + "}"
                                }
                            } else
                                for (var c = 0; c < a.length; c++) Sr(a[c]) && (r += kr(i) + ":" + Er(i, a[c]) + ";")
                        }
                    return r
                }(e, t, n);
            case "function":
                if (void 0 !== e) {
                    var o = Or,
                        i = n(e);
                    return Or = o, Cr(e, t, i)
                }
        }
        if (null == t) return n;
        var a = t[n];
        return void 0 !== a ? a : n
    }
    var Or, Tr = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Rr = function(e, t, n) {
            if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
            var r = !0,
                o = "";
            Or = void 0;
            var i = e[0];
            null == i || void 0 === i.raw ? (r = !1, o += Cr(n, t, i)) : o += i[0];
            for (var a = 1; a < e.length; a++) o += Cr(n, t, e[a]), r && (o += i[a]);
            Tr.lastIndex = 0;
            for (var s, c = ""; null !== (s = Tr.exec(o));) c += "-" + s[1];
            var l = function(e) {
                for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                switch (o) {
                    case 3:
                        n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                }
                return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
            }(o) + c;
            return {
                name: l,
                styles: o,
                next: Or
            }
        },
        Pr = "undefined" != typeof document,
        Mr = j("undefined" != typeof HTMLElement ? mr({
            key: "css"
        }) : null),
        Ar = function(e) {
            return ve((function(t, n) {
                var r = ne(Mr);
                return e(t, r, n)
            }))
        };
    Pr || (Ar = function(e) {
        return function(t) {
            var n = ne(Mr);
            return null === n ? (n = mr({
                key: "css"
            }), p(Mr.Provider, {
                value: n
            }, e(t, n))) : e(t, n)
        }
    });
    var Ir = j({}),
        Nr = Ar((function(e, t) {
            var n = e.styles,
                r = Rr([n], void 0, ne(Ir));
            if (!Pr) {
                for (var o, i = r.name, a = r.styles, s = r.next; void 0 !== s;) i += " " + s.name, a += s.styles, s = s.next;
                var c = !0 === t.compat,
                    l = t.insert("", {
                        name: i,
                        styles: a
                    }, t.sheet, c);
                return c ? null : p("style", ((o = {})["data-emotion"] = t.key + "-global " + i, o.dangerouslySetInnerHTML = {
                    __html: l
                }, o.nonce = t.sheet.nonce, o))
            }
            var u = Q();
            return J((function() {
                var e = t.key + "-global",
                    n = new un({
                        key: e,
                        nonce: t.sheet.nonce,
                        container: t.sheet.container,
                        speedy: t.sheet.isSpeedy
                    }),
                    o = !1,
                    i = document.querySelector('style[data-emotion="' + e + " " + r.name + '"]');
                return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== i && (o = !0, i.setAttribute("data-emotion", e), n.hydrate([i])), u.current = [n, o],
                    function() {
                        n.flush()
                    }
            }), [t]), J((function() {
                var e = u.current,
                    n = e[0];
                if (e[1]) e[1] = !1;
                else {
                    if (void 0 !== r.next && _r(t, r.next, !0), n.tags.length) {
                        var o = n.tags[n.tags.length - 1].nextElementSibling;
                        n.before = o, n.flush()
                    }
                    t.insert("", r, n, !1)
                }
            }), [t, r.name]), null
        }));

    function Lr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Rr(t)
    }
    var jr = function() {
            var e = Lr.apply(void 0, arguments),
                t = "animation-" + e.name;
            return {
                name: t,
                styles: "@keyframes " + t + "{" + e.styles + "}",
                anim: 1,
                toString: function() {
                    return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                }
            }
        },
        Dr = ln,
        $r = function(e) {
            return "theme" !== e
        },
        Br = function(e) {
            return "string" == typeof e && e.charCodeAt(0) > 96 ? Dr : $r
        },
        zr = function(e, t, n) {
            var r;
            if (t) {
                var o = t.shouldForwardProp;
                r = e.__emotion_forwardProp && o ? function(t) {
                    return e.__emotion_forwardProp(t) && o(t)
                } : o
            }
            return "function" != typeof r && n && (r = e.__emotion_forwardProp), r
        },
        Fr = "undefined" != typeof document,
        Wr = function() {
            return null
        },
        Hr = function e(t, n) {
            var r, o, i = t.__emotion_real === t,
                a = i && t.__emotion_base || t;
            void 0 !== n && (r = n.label, o = n.target);
            var s = zr(t, n, i),
                c = s || Br(a),
                l = !c("as");
            return function() {
                var u = arguments,
                    d = i && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                if (void 0 !== r && d.push("label:" + r + ";"), null == u[0] || void 0 === u[0].raw) d.push.apply(d, u);
                else {
                    d.push(u[0][0]);
                    for (var f = u.length, m = 1; m < f; m++) d.push(u[m], u[0][m])
                }
                var v = Ar((function(e, t, n) {
                    var r = l && e.as || a,
                        i = "",
                        u = [],
                        f = e;
                    if (null == e.theme) {
                        for (var m in f = {}, e) f[m] = e[m];
                        f.theme = ne(Ir)
                    }
                    "string" == typeof e.className ? i = gr(t.registered, u, e.className) : null != e.className && (i = e.className + " ");
                    var v = Rr(d.concat(u), t.registered, f),
                        g = _r(t, v, "string" == typeof r);
                    i += t.key + "-" + v.name, void 0 !== o && (i += " " + o);
                    var _ = l && void 0 === s ? Br(r) : c,
                        y = {};
                    for (var b in e) l && "as" === b || _(b) && (y[b] = e[b]);
                    y.className = i, y.ref = n;
                    var x = p(r, y),
                        w = p(Wr, null);
                    if (!Fr && void 0 !== g) {
                        for (var S, k = v.name, E = v.next; void 0 !== E;) k += " " + E.name, E = E.next;
                        w = p("style", ((S = {})["data-emotion"] = t.key + " " + k, S.dangerouslySetInnerHTML = {
                            __html: g
                        }, S.nonce = t.sheet.nonce, S))
                    }
                    return p(h, null, w, x)
                }));
                return v.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof a ? a : a.displayName || a.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = a, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
                    value: function() {
                        return "." + o
                    }
                }), v.withComponent = function(t, r) {
                    return e(t, et({}, n, r, {
                        shouldForwardProp: zr(v, r, !0)
                    })).apply(void 0, d)
                }, v
            }
        },
        Ur = 0;

    function qr(e, n, r, o, i) {
        var a, s, c = {};
        for (s in n) "ref" == s ? a = n[s] : c[s] = n[s];
        var l = {
            type: e,
            props: c,
            key: r,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --Ur,
            __source: o,
            __self: i
        };
        if ("function" == typeof e && (a = e.defaultProps))
            for (s in a) void 0 === c[s] && (c[s] = a[s]);
        return t.vnode && t.vnode(l), l
    }

    function Vr(e) {
        const {
            styles: t,
            defaultTheme: n = {}
        } = e;
        return qr(Nr, {
            styles: "function" == typeof t ? e => {
                return t(null == (r = e) || 0 === Object.keys(r).length ? n : e);
                var r
            } : t
        })
    }

    function Gr(e, t) {
        return Hr(e, an({}, {
            target: "e1de0imv0"
        }, t))
    }

    function Kr(e, t) {
        return t ? Mt(e, t, {
            clone: !1
        }) : e
    }
    const Xr = {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
        Yr = {
            keys: ["xs", "sm", "md", "lg", "xl"],
            up: e => `@media (min-width:${Xr[e]}px)`
        };

    function Jr(e, t, n) {
        const r = e.theme || {};
        if (Array.isArray(t)) {
            const e = r.breakpoints || Yr;
            return t.reduce(((r, o, i) => (r[e.up(e.keys[i])] = n(t[i]), r)), {})
        }
        if ("object" == typeof t) {
            const e = r.breakpoints || Yr;
            return Object.keys(t).reduce(((r, o) => {
                if (-1 !== Object.keys(e.values || Xr).indexOf(o)) {
                    r[e.up(o)] = n(t[o], o)
                } else {
                    const e = o;
                    r[e] = t[e]
                }
                return r
            }), {})
        }
        return n(t)
    }

    function Qr(e, t) {
        return t && "string" == typeof t ? t.split(".").reduce(((e, t) => e && e[t] ? e[t] : null), e) : null
    }

    function Zr(e, t, n, r = n) {
        let o;
        return o = "function" == typeof e ? e(n) : Array.isArray(e) ? e[n] || r : Qr(e, n) || r, t && (o = t(o)), o
    }

    function eo(e) {
        const {
            prop: t,
            cssProperty: n = e.prop,
            themeKey: r,
            transform: o
        } = e, i = e => {
            if (null == e[t]) return null;
            const i = e[t],
                a = Qr(e.theme, r) || {};
            return Jr(e, i, (e => {
                let r = Zr(a, o, e);
                return e === r && "string" == typeof e && (r = Zr(a, o, `${t}${"default"===e?"":It(e)}`, e)), !1 === n ? r : {
                    [n]: r
                }
            }))
        };
        return i.propTypes = {}, i.filterProps = [t], i
    }

    function to(...e) {
        const t = e.reduce(((e, t) => (t.filterProps.forEach((n => {
                e[n] = t
            })), e)), {}),
            n = e => Object.keys(e).reduce(((n, r) => t[r] ? Kr(n, t[r](e)) : n), {});
        return n.propTypes = {}, n.filterProps = e.reduce(((e, t) => e.concat(t.filterProps)), []), n
    }
    const no = {
            m: "margin",
            p: "padding"
        },
        ro = {
            t: "Top",
            r: "Right",
            b: "Bottom",
            l: "Left",
            x: ["Left", "Right"],
            y: ["Top", "Bottom"]
        },
        oo = {
            marginX: "mx",
            marginY: "my",
            paddingX: "px",
            paddingY: "py"
        },
        io = function(e) {
            const t = {};
            return n => (void 0 === t[n] && (t[n] = e(n)), t[n])
        }((e => {
            if (e.length > 2) {
                if (!oo[e]) return [e];
                e = oo[e]
            }
		           const [t, n] = e.split(""), r = no[t], o = ro[n] || "";
            return Array.isArray(o) ? o.map((e => r + e)) : [r + o]
        })),
        ao = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd", "p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];

    function so(e, t, n, r) {
        const o = Qr(e, t) || n;
        return "number" == typeof o ? e => "string" == typeof e ? e : o * e : Array.isArray(o) ? e => "string" == typeof e ? e : o[e] : "function" == typeof o ? o : () => {}
    }

    function co(e) {
        return so(e, "spacing", 8)
    }

    function lo(e, t) {
        if ("string" == typeof t || null == t) return t;
        const n = e(Math.abs(t));
        return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`
    }

    function uo(e, t, n, r) {
        if (-1 === t.indexOf(n)) return null;
        const o = function(e, t) {
            return n => e.reduce(((e, r) => (e[r] = lo(t, n), e)), {})
        }(io(n), r);
        return Jr(e, e[n], o)
    }

    function po(e) {
        return function(e, t) {
            const n = co(e.theme);
            return Object.keys(e).map((r => uo(e, t, r, n))).reduce(Kr, {})
        }(e, ao)
    }

    function fo(e) {
        return "number" != typeof e ? e : `${e}px solid`
    }
    po.propTypes = {}, po.filterProps = ao;
    const ho = eo({
            prop: "border",
            themeKey: "borders",
            transform: fo
        }),
        mo = eo({
            prop: "borderTop",
            themeKey: "borders",
            transform: fo
        }),
        vo = eo({
            prop: "borderRight",
            themeKey: "borders",
            transform: fo
        }),
        go = eo({
            prop: "borderBottom",
            themeKey: "borders",
            transform: fo
        }),
        _o = eo({
            prop: "borderLeft",
            themeKey: "borders",
            transform: fo
        }),
        yo = eo({
            prop: "borderColor",
            themeKey: "palette"
        }),
        bo = eo({
            prop: "borderTopColor",
            themeKey: "palette"
        }),
        xo = eo({
            prop: "borderRightColor",
            themeKey: "palette"
        }),
        wo = eo({
            prop: "borderBottomColor",
            themeKey: "palette"
        }),
        So = eo({
            prop: "borderLeftColor",
            themeKey: "palette"
        }),
        ko = e => {
            if (void 0 !== e.borderRadius && null !== e.borderRadius) {
                const t = so(e.theme, "shape.borderRadius", 4),
                    n = e => ({
                        borderRadius: lo(t, e)
                    });
                return Jr(e, e.borderRadius, n)
            }
            return null
        };
    ko.propTypes = {}, ko.filterProps = ["borderRadius"];
    var Eo = to(ho, mo, vo, go, _o, yo, bo, xo, wo, So, ko);
    var Co = to(eo({
        prop: "displayPrint",
        cssProperty: !1,
        transform: e => ({
            "@media print": {
                display: e
            }
        })
    }), eo({
        prop: "display"
    }), eo({
        prop: "overflow"
    }), eo({
        prop: "textOverflow"
    }), eo({
        prop: "visibility"
    }), eo({
        prop: "whiteSpace"
    }));
    var Oo = to(eo({
        prop: "flexBasis"
    }), eo({
        prop: "flexDirection"
    }), eo({
        prop: "flexWrap"
    }), eo({
        prop: "justifyContent"
    }), eo({
        prop: "alignItems"
    }), eo({
        prop: "alignContent"
    }), eo({
        prop: "order"
    }), eo({
        prop: "flex"
    }), eo({
        prop: "flexGrow"
    }), eo({
        prop: "flexShrink"
    }), eo({
        prop: "alignSelf"
    }), eo({
        prop: "justifyItems"
    }), eo({
        prop: "justifySelf"
    }));
    const To = e => {
        if (void 0 !== e.gap && null !== e.gap) {
            const t = so(e.theme, "spacing", 8),
                n = e => ({
                    gap: lo(t, e)
                });
            return Jr(e, e.gap, n)
        }
        return null
    };
    To.propTypes = {}, To.filterProps = ["gap"];
    const Ro = e => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
            const t = so(e.theme, "spacing", 8),
                n = e => ({
                    columnGap: lo(t, e)
                });
            return Jr(e, e.columnGap, n)
        }
        return null
    };
    Ro.propTypes = {}, Ro.filterProps = ["columnGap"];
    const Po = e => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
            const t = so(e.theme, "spacing", 8),
                n = e => ({
                    rowGap: lo(t, e)
                });
            return Jr(e, e.rowGap, n)
        }
        return null
    };
    Po.propTypes = {}, Po.filterProps = ["rowGap"];
    var Mo = to(To, Ro, Po, eo({
        prop: "gridColumn"
    }), eo({
        prop: "gridRow"
    }), eo({
        prop: "gridAutoFlow"
    }), eo({
        prop: "gridAutoColumns"
    }), eo({
        prop: "gridAutoRows"
    }), eo({
        prop: "gridTemplateColumns"
    }), eo({
        prop: "gridTemplateRows"
    }), eo({
        prop: "gridTemplateAreas"
    }), eo({
        prop: "gridArea"
    }));
    var Ao = to(eo({
        prop: "color",
        themeKey: "palette"
    }), eo({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette"
    }), eo({
        prop: "backgroundColor",
        themeKey: "palette"
    }));
    var Io = to(eo({
        prop: "position"
    }), eo({
        prop: "zIndex",
        themeKey: "zIndex"
    }), eo({
        prop: "top"
    }), eo({
        prop: "right"
    }), eo({
        prop: "bottom"
    }), eo({
        prop: "left"
    }));
    var No = eo({
        prop: "boxShadow",
        themeKey: "shadows"
    });

    function Lo(e) {
        return e <= 1 && 0 !== e ? 100 * e + "%" : e
    }
    const jo = eo({
            prop: "width",
            transform: Lo
        }),
        Do = e => {
            if (void 0 !== e.maxWidth && null !== e.maxWidth) {
                const t = t => {
                    var n, r, o;
                    return {
                        maxWidth: (null == (n = e.theme) || null == (r = n.breakpoints) || null == (o = r.values) ? void 0 : o[t]) || Xr[t] || Lo(t)
                    }
                };
                return Jr(e, e.maxWidth, t)
            }
            return null
        };
    Do.filterProps = ["maxWidth"];
    const $o = eo({
            prop: "minWidth",
            transform: Lo
        }),
        Bo = eo({
            prop: "height",
            transform: Lo
        }),
        zo = eo({
            prop: "maxHeight",
            transform: Lo
        }),
        Fo = eo({
            prop: "minHeight",
            transform: Lo
        });
    eo({
        prop: "size",
        cssProperty: "width",
        transform: Lo
    }), eo({
        prop: "size",
        cssProperty: "height",
        transform: Lo
    });
    var Wo = to(jo, Do, $o, Bo, zo, Fo, eo({
        prop: "boxSizing"
    }));
    const Ho = eo({
            prop: "fontFamily",
            themeKey: "typography"
        }),
        Uo = eo({
            prop: "fontSize",
            themeKey: "typography"
        }),
        qo = eo({
            prop: "fontStyle",
            themeKey: "typography"
        }),
        Vo = eo({
            prop: "fontWeight",
            themeKey: "typography"
        }),
        Go = eo({
            prop: "letterSpacing"
        }),
        Ko = eo({
            prop: "lineHeight"
        }),
        Xo = eo({
            prop: "textAlign"
        });
    var Yo = to(eo({
        prop: "typography",
        cssProperty: !1,
        themeKey: "typography"
    }), Ho, Uo, qo, Vo, Go, Ko, Xo);
    const Jo = {
            borders: Eo.filterProps,
            display: Co.filterProps,
            flexbox: Oo.filterProps,
            grid: Mo.filterProps,
            positions: Io.filterProps,
            palette: Ao.filterProps,
            shadows: No.filterProps,
            sizing: Wo.filterProps,
            spacing: po.filterProps,
            typography: Yo.filterProps
        },
        Qo = {
            borders: Eo,
            display: Co,
            flexbox: Oo,
            grid: Mo,
            positions: Io,
            palette: Ao,
            shadows: No,
            sizing: Wo,
            spacing: po,
            typography: Yo
        },
        Zo = Object.keys(Jo).reduce(((e, t) => (Jo[t].forEach((n => {
            e[n] = Qo[t]
        })), e)), {});

    function ei(e, t, n) {
        const r = {
                [e]: t,
                theme: n
            },
            o = Zo[e];
        return o ? o(r) : {
            [e]: t
        }
    }

    function ti(e) {
        const {
            sx: t,
            theme: n = {}
        } = e || {};
        if (!t) return null;

        function r(e) {
            let t = e;
            if ("function" == typeof e) t = e(n);
            else if ("object" != typeof e) return e;
            const r = function(e = {}) {
                    var t;
                    return (null == e || null == (t = e.keys) ? void 0 : t.reduce(((t, n) => (t[e.up(n)] = {}, t)), {})) || {}
                }(n.breakpoints),
                o = Object.keys(r);
            let i = r;
            return Object.keys(t).forEach((e => {
                    const r = (o = t[e], a = n, "function" == typeof o ? o(a) : o);
                    var o, a;
                    if (null != r)
                        if ("object" == typeof r)
                            if (Zo[e]) i = Kr(i, ei(e, r, n));
                            else {
                                const t = Jr({
                                    theme: n
                                }, r, (t => ({
                                    [e]: t
                                })));
                                ! function(...e) {
                                    const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []),
                                        n = new Set(t);
                                    return e.every((e => n.size === Object.keys(e).length))
                                }(t, r) ? i = Kr(i, t): i[e] = ti({
                                    sx: r,
                                    theme: n
                                })
                            }
                    else i = Kr(i, ei(e, r, n))
                })),
                function(e, t) {
                    return e.reduce(((e, t) => {
                        const n = e[t];
                        return (!n || 0 === Object.keys(n).length) && delete e[t], e
                    }), t)
                }(o, i)
        }
        return Array.isArray(t) ? t.map(r) : r(t)
    }
    ti.filterProps = ["sx"];
    const ni = ["sx"];

    function ri(e) {
        const {
            sx: t
        } = e, n = tt(e, ni), {
            systemProps: r,
            otherProps: o
        } = (e => {
            const t = {
                systemProps: {},
                otherProps: {}
            };
            return Object.keys(e).forEach((n => {
                Zo[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n]
            })), t
        })(n);
        let i;
        return i = Array.isArray(t) ? [r, ...t] : "function" == typeof t ? (...e) => {
            const n = t(...e);
            return Pt(n) ? et({}, r, n) : r
        } : et({}, r, t), et({}, o, {
            sx: i
        })
    }
    const oi = ["values", "unit", "step"];
    var ii = {
        borderRadius: 4
    };
    const ai = ["breakpoints", "palette", "spacing", "shape"];

    function si(e = {}, ...t) {
        const {
            breakpoints: n = {},
            palette: r = {},
            spacing: o,
            shape: i = {}
        } = e, a = tt(e, ai), s = function(e) {
            const {
                values: t = {
                    xs: 0,
                    sm: 600,
                    md: 900,
                    lg: 1200,
                    xl: 1536
                },
                unit: n = "px",
                step: r = 5
            } = e, o = tt(e, oi), i = Object.keys(t);

            function a(e) {
                return `@media (min-width:${"number"==typeof t[e]?t[e]:e}${n})`
            }

            function s(e) {
                return `@media (max-width:${("number"==typeof t[e]?t[e]:e)-r/100}${n})`
            }

            function c(e, o) {
                const a = i.indexOf(o);
                return `@media (min-width:${"number"==typeof t[e]?t[e]:e}${n}) and (max-width:${(-1!==a&&"number"==typeof t[i[a]]?t[i[a]]:o)-r/100}${n})`
            }
            return et({
                keys: i,
                values: t,
                up: a,
                down: s,
                between: c,
                only: function(e) {
                    return i.indexOf(e) + 1 < i.length ? c(e, i[i.indexOf(e) + 1]) : a(e)
                },
                not: function(e) {
                    const t = i.indexOf(e);
                    return 0 === t ? a(i[1]) : t === i.length - 1 ? s(i[t]) : c(e, i[i.indexOf(e) + 1]).replace("@media", "@media not all and")
                },
                unit: n
            }, o)
        }(n), c = function(e = 8) {
            if (e.mui) return e;
            const t = co({
                    spacing: e
                }),
                n = (...e) => (0 === e.length ? [1] : e).map((e => {
                    const n = t(e);
                    return "number" == typeof n ? `${n}px` : n
                })).join(" ");
            return n.mui = !0, n
        }(o);
        let l = Mt({
            breakpoints: s,
            direction: "ltr",
            components: {},
            palette: et({
                mode: "light"
            }, r),
            spacing: c,
            shape: et({}, ii, i)
        }, a);
        return l = t.reduce(((e, t) => Mt(e, t)), l), l
    }
    var ci = j(null);

    function li(e = null) {
        const t = ne(ci);
        return t && (n = t, 0 !== Object.keys(n).length) ? t : e;
        var n
    }
    const ui = si();

    function di(e = ui) {
        return li(e)
    }
    const pi = ["className", "component"];
    const fi = ["variant"];

    function hi(e) {
        return 0 === e.length
    }

    function mi(e) {
        const {
            variant: t
        } = e, n = tt(e, fi);
        let r = t || "";
        return Object.keys(n).sort().forEach((t => {
            r += "color" === t ? hi(r) ? e[t] : It(e[t]) : `${hi(r)?t:It(t)}${It(e[t].toString())}`
        })), r
    }
    const vi = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
        gi = ["theme"],
        _i = ["theme"];

    function yi(e) {
        return 0 === Object.keys(e).length
    }

    function bi(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e
    }
    const xi = si();

    function wi({
        props: e,
        name: t,
        defaultTheme: n
    }) {
        const r = function(e) {
            const {
                theme: t,
                name: n,
                props: r
            } = e;
            return t && t.components && t.components[n] && t.components[n].defaultProps ? on(t.components[n].defaultProps, r) : r
        }({
            theme: di(n),
            name: t,
            props: e
        });
        return r
    }

    function Si(e, t = 0, n = 1) {
        return Math.min(Math.max(t, e), n)
    }

    function ki(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0)) return ki(function(e) {
            e = e.substr(1);
            const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g");
            let n = e.match(t);
            return n && 1 === n[0].length && (n = n.map((e => e + e))), n ? `rgb${4===n.length?"a":""}(${n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})` : ""
        }(e));
        const t = e.indexOf("("),
            n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n)) throw new Error(At(9, e));
        let r, o = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
            if (o = o.split(" "), r = o.shift(), 4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].substr(1)), -1 === ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(r)) throw new Error(At(10, r))
        } else o = o.split(",");
        return o = o.map((e => parseFloat(e))), {
            type: n,
            values: o,
            colorSpace: r
        }
    }

    function Ei(e) {
        const {
            type: t,
            colorSpace: n
        } = e;
        let {
            values: r
        } = e;
        return -1 !== t.indexOf("rgb") ? r = r.map(((e, t) => t < 3 ? parseInt(e, 10) : e)) : -1 !== t.indexOf("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = -1 !== t.indexOf("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`
    }

    function Ci(e) {
        let t = "hsl" === (e = ki(e)).type ? ki(function(e) {
            e = ki(e);
            const {
                values: t
            } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (e, t = (e + n / 30) % 12) => o - i * Math.max(Math.min(t - 3, 9 - t, 1), -1);
            let s = "rgb";
            const c = [Math.round(255 * a(0)), Math.round(255 * a(8)), Math.round(255 * a(4))];
            return "hsla" === e.type && (s += "a", c.push(t[3])), Ei({
                type: s,
                values: c
            })
        }(e)).values : e.values;
        return t = t.map((t => ("color" !== e.type && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4))), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
    }

    function Oi(e, t) {
        return e = ki(e), t = Si(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), "color" === e.type ? e.values[3] = `/${t}` : e.values[3] = t, Ei(e)
    }

    function Ti(e, t) {
        if (e = ki(e), t = Si(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
            for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
        return Ei(e)
    }

    function Ri(e, t) {
        if (e = ki(e), t = Si(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb"))
            for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
        else if (-1 !== e.type.indexOf("color"))
            for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
        return Ei(e)
    }

    function Pi(e) {
        return "string" == typeof e
    }

    function Mi(e, t, n) {
        const r = {};
        return Object.keys(e).forEach((o => {
            r[o] = e[o].reduce(((e, r) => (r && (n && n[r] && e.push(n[r]), e.push(t(r))), e)), []).join(" ")
        })), r
    }
    const Ai = e => e,
        Ii = (() => {
            let e = Ai;
            return {
                configure(t) {
                    e = t
                },
                generate: t => e(t),
                reset() {
                    e = Ai
                }
            }
        })();
    var Ni = Ii;
    const Li = {
        active: "Mui-active",
        checked: "Mui-checked",
        completed: "Mui-completed",
        disabled: "Mui-disabled",
        error: "Mui-error",
        expanded: "Mui-expanded",
        focused: "Mui-focused",
        focusVisible: "Mui-focusVisible",
        required: "Mui-required",
        selected: "Mui-selected"
    };

    function ji(e, t) {
        return Li[t] || `${Ni.generate(e)}-${t}`
    }

    function Di(e, t) {
        const n = {};
        return t.forEach((t => {
            n[t] = ji(e, t)
        })), n
    }

    function $i(e) {
        return ji("MuiBackdrop", e)
    }
    Di("MuiBackdrop", ["root", "invisible"]);
    const Bi = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"],
        zi = ve((function(e, t) {
            const {
                classes: n,
                className: r,
                invisible: o = !1,
                component: i = "div",
                components: a = {},
                componentsProps: s = {},
                theme: c
            } = e, l = tt(e, Bi), u = et({}, e, {
                classes: n,
                invisible: o
            }), d = (e => {
                const {
                    classes: t,
                    invisible: n
                } = e;
                return Mi({
                    root: ["root", n && "invisible"]
                }, $i, t)
            })(u), p = a.Root || i, f = s.root || {};
            return qr(p, et({
                "aria-hidden": !0
            }, f, !Pi(p) && {
                as: i,
                ownerState: et({}, u, f.ownerState),
                theme: c
            }, {
                ref: t
            }, l, {
                className: dt(d.root, f.className, r)
            }))
        }));
    var Fi = zi;

    function Wi(e) {
        return e.substring(2).toLowerCase()
    }

    function Hi(e) {
        const {
            children: t,
            disableReactTree: n = !1,
            mouseEvent: r = "onClick",
            onClickAway: o,
            touchEvent: i = "onTouchEnd"
        } = e, a = Q(!1), s = Q(null), c = Q(!1), l = Q(!1);
        Y((() => (setTimeout((() => {
            c.current = !0
        }), 0), () => {
            c.current = !1
        })), []);
        const u = qt(t.ref, s),
            d = Ut((e => {
                const t = l.current;
                l.current = !1;
                const r = Dt(s.current);
                if (!c.current || !s.current || "clientX" in e && function(e, t) {
                        return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
                    }(e, r)) return;
                if (a.current) return void(a.current = !1);
                let i;
                i = e.composedPath ? e.composedPath().indexOf(s.current) > -1 : !r.documentElement.contains(e.target) || s.current.contains(e.target), i || !n && t || o(e)
            })),
            p = e => n => {
                l.current = !0;
                const r = t.props[e];
                r && r(n)
            },
            f = {
                ref: u
            };
        return !1 !== i && (f[i] = p(i)), Y((() => {
            if (!1 !== i) {
                const e = Wi(i),
                    t = Dt(s.current),
                    n = () => {
                        a.current = !0
                    };
                return t.addEventListener(e, d), t.addEventListener("touchmove", n), () => {
                    t.removeEventListener(e, d), t.removeEventListener("touchmove", n)
                }
            }
        }), [d, i]), !1 !== r && (f[r] = p(r)), Y((() => {
            if (!1 !== r) {
                const e = Wi(r),
                    t = Dt(s.current);
                return t.addEventListener(e, d), () => {
                    t.removeEventListener(e, d)
                }
            }
        }), [d, r]), qr(h, {
            children: We(t, f)
        })
    }
    var Ui = ve((function(e, t) {
        const {
            children: n,
            container: r,
            disablePortal: o = !1
        } = e, [i, a] = K(null), s = qt(Fe(n) ? n.ref : null, t);
        return zt((() => {
            o || a(function(e) {
                return "function" == typeof e ? e() : e
            }(r) || document.body)
        }), [r, o]), zt((() => {
            if (i && !o) return Bt(t, i), () => {
                Bt(t, null)
            }
        }), [t, i, o]), o ? Fe(n) ? We(n, {
            ref: s
        }) : n : i ? Oe(n, i) : i
    }));

    function qi(e, t) {
        t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
    }

    function Vi(e) {
        return parseInt($t(e).getComputedStyle(e).paddingRight, 10) || 0
    }

    function Gi(e, t, n, r = [], o) {
        const i = [t, n, ...r],
            a = ["TEMPLATE", "SCRIPT", "STYLE"];
        [].forEach.call(e.children, (e => {
            -1 === i.indexOf(e) && -1 === a.indexOf(e.tagName) && qi(e, o)
        }))
    }

    function Ki(e, t) {
        let n = -1;
        return e.some(((e, r) => !!t(e) && (n = r, !0))), n
    }

    function Xi(e, t) {
        const n = [],
            r = e.container;
        if (!t.disableScrollLock) {
            if (function(e) {
                    const t = Dt(e);
                    return t.body === e ? $t(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
                }(r)) {
                const e = function(e) {
                    const t = e.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - t)
                }(Dt(r));
                n.push({
                    value: r.style.paddingRight,
                    property: "padding-right",
                    el: r
                }), r.style.paddingRight = `${Vi(r)+e}px`;
                const t = Dt(r).querySelectorAll(".mui-fixed");
                [].forEach.call(t, (t => {
                    n.push({
                        value: t.style.paddingRight,
                        property: "padding-right",
                        el: t
                    }), t.style.paddingRight = `${Vi(t)+e}px`
                }))
            }
            const e = r.parentElement,
                t = $t(r),
                o = "HTML" === (null == e ? void 0 : e.nodeName) && "scroll" === t.getComputedStyle(e).overflowY ? e : r;
            n.push({
                value: o.style.overflow,
                property: "overflow",
                el: o
            }, {
                value: o.style.overflowX,
                property: "overflow-x",
                el: o
            }, {
                value: o.style.overflowY,
                property: "overflow-y",
                el: o
            }), o.style.overflow = "hidden"
        }
        return () => {
            n.forEach((({
                value: e,
                el: t,
                property: n
            }) => {
                e ? t.style.setProperty(n, e) : t.style.removeProperty(n)
            }))
        }
    }
    const Yi = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

    function Ji(e) {
        const t = [],
            n = [];
        return Array.from(e.querySelectorAll(Yi)).forEach(((e, r) => {
            const o = function(e) {
                const t = parseInt(e.getAttribute("tabindex"), 10);
                return Number.isNaN(t) ? "true" === e.contentEditable || ("AUDIO" === e.nodeName || "VIDEO" === e.nodeName || "DETAILS" === e.nodeName) && null === e.getAttribute("tabindex") ? 0 : e.tabIndex : t
            }(e); - 1 !== o && function(e) {
                return !(e.disabled || "INPUT" === e.tagName && "hidden" === e.type || function(e) {
                    if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                    if (!e.name) return !1;
                    const t = t => e.ownerDocument.querySelector(`input[type="radio"]${t}`);
                    let n = t(`[name="${e.name}"]:checked`);
                    return n || (n = t(`[name="${e.name}"]`)), n !== e
                }(e))
            }(e) && (0 === o ? t.push(e) : n.push({
                documentOrder: r,
                tabIndex: o,
                node: e
            }))
        })), n.sort(((e, t) => e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex)).map((e => e.node)).concat(t)
    }

    function Qi() {
        return !0
    }

    function Zi(e) {
        const {
            children: t,
            disableAutoFocus: n = !1,
            disableEnforceFocus: r = !1,
            disableRestoreFocus: o = !1,
            getTabbable: i = Ji,
            isEnabled: a = Qi,
            open: s
        } = e, c = Q(), l = Q(null), u = Q(null), d = Q(null), p = Q(null), f = Q(!1), m = Q(null), v = qt(t.ref, m), g = Q(null);
        Y((() => {
            s && m.current && (f.current = !n)
        }), [n, s]), Y((() => {
            if (!s || !m.current) return;
            const e = Dt(m.current);
            return m.current.contains(e.activeElement) || (m.current.hasAttribute("tabIndex") || m.current.setAttribute("tabIndex", -1), f.current && m.current.focus()), () => {
                o || (d.current && d.current.focus && (c.current = !0, d.current.focus()), d.current = null)
            }
        }), [s]), Y((() => {
            if (!s || !m.current) return;
            const e = Dt(m.current),
                t = t => {
                    const {
                        current: n
                    } = m;
                    if (null !== n)
                        if (e.hasFocus() && !r && a() && !c.current) {
                            if (!n.contains(e.activeElement)) {
                                if (t && p.current !== t.target || e.activeElement !== p.current) p.current = null;
                                else if (null !== p.current) return;
                                if (!f.current) return;
                                let r = [];
                                if (e.activeElement !== l.current && e.activeElement !== u.current || (r = i(m.current)), r.length > 0) {
                                    var o, s;
                                    const e = Boolean((null == (o = g.current) ? void 0 : o.shiftKey) && "Tab" === (null == (s = g.current) ? void 0 : s.key)),
                                        t = r[0],
                                        n = r[r.length - 1];
                                    e ? n.focus() : t.focus()
                                } else n.focus()
                            }
                        } else c.current = !1
                },
                n = t => {
                    g.current = t, !r && a() && "Tab" === t.key && e.activeElement === m.current && t.shiftKey && (c.current = !0, u.current.focus())
                };
            e.addEventListener("focusin", t), e.addEventListener("keydown", n, !0);
            const o = setInterval((() => {
                "BODY" === e.activeElement.tagName && t()
            }), 50);
            return () => {
                clearInterval(o), e.removeEventListener("focusin", t), e.removeEventListener("keydown", n, !0)
            }
        }), [n, r, o, a, s, i]);
        const _ = e => {
            null === d.current && (d.current = e.relatedTarget), f.current = !0
        };
        return qr(h, {
            children: [qr("div", {
                tabIndex: 0,
                onFocus: _,
                ref: l,
                "data-test": "sentinelStart"
            }), We(t, {
                ref: v,
                onFocus: e => {
                    null === d.current && (d.current = e.relatedTarget), f.current = !0, p.current = e.target;
                    const n = t.props.onFocus;
                    n && n(e)
                }
            }), qr("div", {
                tabIndex: 0,
                onFocus: _,
                ref: u,
                "data-test": "sentinelEnd"
            })]
        })
    }

    function ea(e) {
        return ji("MuiModal", e)
    }
    Di("MuiModal", ["root", "hidden"]);
    const ta = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];
    const na = new class {
            constructor() {
                this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
            }
            add(e, t) {
                let n = this.modals.indexOf(e);
                if (-1 !== n) return n;
                n = this.modals.length, this.modals.push(e), e.modalRef && qi(e.modalRef, !1);
                const r = function(e) {
                    const t = [];
                    return [].forEach.call(e.children, (e => {
                        "true" === e.getAttribute("aria-hidden") && t.push(e)
                    })), t
                }(t);
                Gi(t, e.mount, e.modalRef, r, !0);
                const o = Ki(this.containers, (e => e.container === t));
                return -1 !== o ? (this.containers[o].modals.push(e), n) : (this.containers.push({
                    modals: [e],
                    container: t,
                    restore: null,
                    hiddenSiblings: r
                }), n)
            }
            mount(e, t) {
                const n = Ki(this.containers, (t => -1 !== t.modals.indexOf(e))),
                    r = this.containers[n];
                r.restore || (r.restore = Xi(r, t))
            }
            remove(e) {
                const t = this.modals.indexOf(e);
                if (-1 === t) return t;
                const n = Ki(this.containers, (t => -1 !== t.modals.indexOf(e))),
                    r = this.containers[n];
                if (r.modals.splice(r.modals.indexOf(e), 1), this.modals.splice(t, 1), 0 === r.modals.length) r.restore && r.restore(), e.modalRef && qi(e.modalRef, !0), Gi(r.container, e.mount, e.modalRef, r.hiddenSiblings, !1), this.containers.splice(n, 1);
                else {
                    const e = r.modals[r.modals.length - 1];
                    e.modalRef && qi(e.modalRef, !1)
                }
                return t
            }
            isTopModal(e) {
                return this.modals.length > 0 && this.modals[this.modals.length - 1] === e
            }
        },
        ra = ve((function(e, t) {
            const {
                BackdropComponent: n,
                BackdropProps: r,
                children: o,
                classes: i,
                className: a,
                closeAfterTransition: s = !1,
                component: c = "div",
                components: l = {},
                componentsProps: u = {},
                container: d,
                disableAutoFocus: p = !1,
                disableEnforceFocus: f = !1,
                disableEscapeKeyDown: h = !1,
                disablePortal: m = !1,
                disableRestoreFocus: v = !1,
                disableScrollLock: g = !1,
                hideBackdrop: _ = !1,
                keepMounted: y = !1,
                manager: b = na,
                onBackdropClick: x,
                onClose: w,
                onKeyDown: S,
                open: k,
                theme: E,
                onTransitionEnter: C,
                onTransitionExited: O
            } = e, T = tt(e, ta), [R, P] = K(!0), M = Q({}), A = Q(null), I = Q(null), N = qt(I, t), L = function(e) {
                return !!e.children && e.children.props.hasOwnProperty("in")
            }(e), j = () => (M.current.modalRef = I.current, M.current.mountNode = A.current, M.current), D = () => {
                b.mount(j(), {
                    disableScrollLock: g
                }), I.current.scrollTop = 0
            }, $ = Ut((() => {
                const e = function(e) {
                    return "function" == typeof e ? e() : e
                }(d) || Dt(A.current).body;
                b.add(j(), e), I.current && D()
            })), B = te((() => b.isTopModal(j())), [b]), z = Ut((e => {
                A.current = e, e && (k && B() ? D() : qi(I.current, !0))
            })), F = te((() => {
                b.remove(j())
            }), [b]);
            Y((() => () => {
                F()
            }), [F]), Y((() => {
                k ? $() : L && s || F()
            }), [k, F, L, s, $]);
            const W = et({}, e, {
                    classes: i,
                    closeAfterTransition: s,
                    disableAutoFocus: p,
                    disableEnforceFocus: f,
                    disableEscapeKeyDown: h,
                    disablePortal: m,
                    disableRestoreFocus: v,
                    disableScrollLock: g,
                    exited: R,
                    hideBackdrop: _,
                    keepMounted: y
                }),
                H = (e => {
                    const {
                        open: t,
                        exited: n,
                        classes: r
                    } = e;
                    return Mi({
                        root: ["root", !t && n && "hidden"]
                    }, ea, r)
                })(W);
            if (!y && !k && (!L || R)) return null;
            const U = () => {
                    P(!1), C && C()
                },
                q = () => {
                    P(!0), O && O(), s && F()
                },
                V = {};
            void 0 === o.props.tabIndex && (V.tabIndex = "-1"), L && (V.onEnter = Nt(U, o.props.onEnter), V.onExited = Nt(q, o.props.onExited));
            const G = l.Root || c,
                X = u.root || {};
            return qr(Ui, {
                ref: z,
                container: d,
                disablePortal: m,
                children: qr(G, et({
                    role: "presentation"
                }, X, !Pi(G) && {
                    as: c,
                    ownerState: et({}, W, X.ownerState),
                    theme: E
                }, T, {
                    ref: N,
                    onKeyDown: e => {
                        S && S(e), "Escape" === e.key && B() && (h || (e.stopPropagation(), w && w(e, "escapeKeyDown")))
                    },
                    className: dt(H.root, X.className, a),
                    children: [!_ && n ? qr(n, et({
                        open: k,
                        onClick: e => {
                            e.target === e.currentTarget && (x && x(e), w && w(e, "backdropClick"))
                        }
                    }, r)) : null, qr(Zi, {
                        disableEnforceFocus: f,
                        disableAutoFocus: p,
                        disableRestoreFocus: v,
                        isEnabled: B,
                        open: k,
                        children: We(o, V)
                    })]
                }))
            })
        }));
    var oa = ra;
    var ia = {
        black: "#000",
        white: "#fff"
    };
    var aa = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161"
    };
    var sa = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff"
    };
    var ca = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000"
    };
    var la = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00"
    };
    var ua = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff"
    };
    var da = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea"
    };
    var pa = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853"
    };
    const fa = ["mode", "contrastThreshold", "tonalOffset"],
        ha = {
            text: {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgba(0, 0, 0, 0.6)",
                disabled: "rgba(0, 0, 0, 0.38)"
            },
            divider: "rgba(0, 0, 0, 0.12)",
            background: {
                paper: ia.white,
                default: ia.white
            },
            action: {
                active: "rgba(0, 0, 0, 0.54)",
                hover: "rgba(0, 0, 0, 0.04)",
                hoverOpacity: .04,
                selected: "rgba(0, 0, 0, 0.08)",
                selectedOpacity: .08,
                disabled: "rgba(0, 0, 0, 0.26)",
                disabledBackground: "rgba(0, 0, 0, 0.12)",
                disabledOpacity: .38,
                focus: "rgba(0, 0, 0, 0.12)",
                focusOpacity: .12,
                activatedOpacity: .12
            }
        },
        ma = {
            text: {
                primary: ia.white,
                secondary: "rgba(255, 255, 255, 0.7)",
                disabled: "rgba(255, 255, 255, 0.5)",
                icon: "rgba(255, 255, 255, 0.5)"
            },
            divider: "rgba(255, 255, 255, 0.12)",
            background: {
                paper: "#121212",
                default: "#121212"
            },
            action: {
                active: ia.white,
                hover: "rgba(255, 255, 255, 0.08)",
                hoverOpacity: .08,
                selected: "rgba(255, 255, 255, 0.16)",
                selectedOpacity: .16,
                disabled: "rgba(255, 255, 255, 0.3)",
                disabledBackground: "rgba(255, 255, 255, 0.12)",
                disabledOpacity: .38,
                focus: "rgba(255, 255, 255, 0.12)",
                focusOpacity: .12,
                activatedOpacity: .24
            }
        };

    function va(e, t, n, r) {
        const o = r.light || r,
            i = r.dark || 1.5 * r;
        e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : "light" === t ? e.light = Ri(e.main, o) : "dark" === t && (e.dark = Ti(e.main, i)))
    }

    function ga(e) {
        const {
            mode: t = "light",
            contrastThreshold: n = 3,
            tonalOffset: r = .2
        } = e, o = tt(e, fa), i = e.primary || function(e = "light") {
            return "dark" === e ? {
                main: ua[200],
                light: ua[50],
                dark: ua[400]
            } : {
                main: ua[700],
                light: ua[400],
                dark: ua[800]
            }
        }(t), a = e.secondary || function(e = "light") {
            return "dark" === e ? {
                main: sa[200],
                light: sa[50],
                dark: sa[400]
            } : {
                main: sa[500],
                light: sa[300],
                dark: sa[700]
            }
        }(t), s = e.error || function(e = "light") {
            return "dark" === e ? {
                main: ca[500],
                light: ca[300],
                dark: ca[700]
            } : {
                main: ca[700],
                light: ca[400],
                dark: ca[800]
            }
        }(t), c = e.info || function(e = "light") {
            return "dark" === e ? {
                main: da[400],
                light: da[300],
                dark: da[700]
            } : {
                main: da[700],
                light: da[500],
                dark: da[900]
            }
        }(t), l = e.success || function(e = "light") {
            return "dark" === e ? {
                main: pa[400],
                light: pa[300],
                dark: pa[700]
            } : {
                main: pa[800],
                light: pa[500],
                dark: pa[900]
            }
        }(t), u = e.warning || function(e = "light") {
            return "dark" === e ? {
                main: la[400],
                light: la[300],
                dark: la[700]
            } : {
                main: "#ed6c02",
                light: la[500],
                dark: la[900]
            }
        }(t);

        function d(e) {
            const t = function(e, t) {
                const n = Ci(e),
                    r = Ci(t);
                return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
            }(e, ma.text.primary) >= n ? ma.text.primary : ha.text.primary;
            return t
        }
        const p = ({
                color: e,
                name: t,
                mainShade: n = 500,
                lightShade: o = 300,
                darkShade: i = 700
            }) => {
                if (!(e = et({}, e)).main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw new Error(At(11, t ? ` (${t})` : "", n));
                if ("string" != typeof e.main) throw new Error(At(12, t ? ` (${t})` : "", JSON.stringify(e.main)));
                return va(e, "light", o, r), va(e, "dark", i, r), e.contrastText || (e.contrastText = d(e.main)), e
            },
            f = {
                dark: ma,
                light: ha
            };
        return Mt(et({
            common: ia,
            mode: t,
            primary: p({
                color: i,
                name: "primary"
            }),
            secondary: p({
                color: a,
                name: "secondary",
                mainShade: "A400",
                lightShade: "A200",
                darkShade: "A700"
            }),
            error: p({
                color: s,
                name: "error"
            }),
            warning: p({
                color: u,
                name: "warning"
            }),
            info: p({
                color: c,
                name: "info"
            }),
            success: p({
                color: l,
                name: "success"
            }),
            grey: aa,
            contrastThreshold: n,
            getContrastText: d,
            augmentColor: p,
            tonalOffset: r
        }, f[t]), o)
    }
    const _a = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
    const ya = {
            textTransform: "uppercase"
        },
        ba = '"Roboto", "Helvetica", "Arial", sans-serif';

    function xa(e, t) {
        const n = "function" == typeof t ? t(e) : t,
            {
                fontFamily: r = ba,
                fontSize: o = 14,
                fontWeightLight: i = 300,
                fontWeightRegular: a = 400,
                fontWeightMedium: s = 500,
                fontWeightBold: c = 700,
                htmlFontSize: l = 16,
                allVariants: u,
                pxToRem: d
            } = n,
            p = tt(n, _a),
            f = o / 14,
            h = d || (e => e / l * f + "rem"),
            m = (e, t, n, o, i) => {
                return et({
                    fontFamily: r,
                    fontWeight: e,
                    fontSize: h(t),
                    lineHeight: n
                }, r === ba ? {
                    letterSpacing: (a = o / t, Math.round(1e5 * a) / 1e5) + "em"
                } : {}, i, u);
                var a
            },
            v = {
                h1: m(i, 96, 1.167, -1.5),
                h2: m(i, 60, 1.2, -.5),
                h3: m(a, 48, 1.167, 0),
                h4: m(a, 34, 1.235, .25),
                h5: m(a, 24, 1.334, 0),
                h6: m(s, 20, 1.6, .15),
                subtitle1: m(a, 16, 1.75, .15),
                subtitle2: m(s, 14, 1.57, .1),
                body1: m(a, 16, 1.5, .15),
                body2: m(a, 14, 1.43, .15),
                button: m(s, 14, 1.75, .4, ya),
                caption: m(a, 12, 1.66, .4),
                overline: m(a, 12, 2.66, 1, ya)
            };
        return Mt(et({
            htmlFontSize: l,
            pxToRem: h,
            fontFamily: r,
            fontSize: o,
            fontWeightLight: i,
            fontWeightRegular: a,
            fontWeightMedium: s,
            fontWeightBold: c
        }, v), p, {
            clone: !1
        })
    }

    function wa(...e) {
        return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")
    }
    var Sa = ["none", wa(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), wa(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), wa(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), wa(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), wa(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), wa(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), wa(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), wa(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), wa(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), wa(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), wa(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), wa(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), wa(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), wa(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), wa(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), wa(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), wa(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), wa(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), wa(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), wa(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), wa(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), wa(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), wa(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), wa(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
    const ka = ["duration", "easing", "delay"],
        Ea = {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        Ca = {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195
        };

    function Oa(e) {
        return `${Math.round(e)}ms`
    }

    function Ta(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** .25 + t / 5))
    }

    function Ra(e) {
        const t = et({}, Ea, e.easing),
            n = et({}, Ca, e.duration);
        return et({
            getAutoHeightDuration: Ta,
            create: (e = ["all"], r = {}) => {
                const {
                    duration: o = n.standard,
                    easing: i = t.easeInOut,
                    delay: a = 0
                } = r;
                return tt(r, ka), (Array.isArray(e) ? e : [e]).map((e => `${e} ${"string"==typeof o?o:Oa(o)} ${i} ${"string"==typeof a?a:Oa(a)}`)).join(",")
            }
        }, e, {
            easing: t,
            duration: n
        })
    }
    var Pa = {
        mobileStepper: 1e3,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    };
    const Ma = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

    function Aa(e = {}, ...t) {
        const {
            mixins: n = {},
            palette: r = {},
            transitions: o = {},
            typography: i = {}
        } = e, a = tt(e, Ma), s = ga(r), c = si(e);
        let l = Mt(c, {
            mixins: (u = c.breakpoints, c.spacing, d = n, et({
                toolbar: {
                    minHeight: 56,
                    [`${u.up("xs")} and (orientation: landscape)`]: {
                        minHeight: 48
                    },
                    [u.up("sm")]: {
                        minHeight: 64
                    }
                }
            }, d)),
            palette: s,
            shadows: Sa.slice(),
            typography: xa(s, i),
            transitions: Ra(o),
            zIndex: et({}, Pa)
        });
        var u, d;
        return l = Mt(l, a), l = t.reduce(((e, t) => Mt(e, t)), l), l
    }
    var Ia = Aa();

    function Na() {
        return di(Ia)
    }

    function La(e, t) {
        var n, r;
        const {
            timeout: o,
            easing: i,
            style: a = {}
        } = e;
        return {
            duration: null != (n = a.transitionDuration) ? n : "number" == typeof o ? o : o[t.mode] || 0,
            easing: null != (r = a.transitionTimingFunction) ? r : "object" == typeof i ? i[t.mode] : i,
            delay: a.transitionDelay
        }
    }

    function ja({
        props: e,
        name: t
    }) {
        return wi({
            props: e,
            name: t,
            defaultTheme: Ia
        })
    }
    const Da = e => bi(e) && "classes" !== e,
        $a = function(e = {}) {
            const {
                defaultTheme: t = xi,
                rootShouldForwardProp: n = bi,
                slotShouldForwardProp: r = bi
            } = e;
            return (e, o = {}) => {
                const {
                    name: i,
                    slot: a,
                    skipVariantsResolver: s,
                    skipSx: c,
                    overridesResolver: l
                } = o, u = tt(o, vi), d = void 0 !== s ? s : a && "Root" !== a || !1, p = c || !1;
                let f = bi;
                "Root" === a ? f = n : a && (f = r);
                const h = Gr(e, et({
                    shouldForwardProp: f,
                    label: undefined
                }, u));
                return (e, ...n) => {
                    const r = n ? n.map((e => "function" == typeof e && e.__emotion_real !== e ? n => {
                        let {
                            theme: r
                        } = n, o = tt(n, gi);
                        return e(et({
                            theme: yi(r) ? t : r
                        }, o))
                    } : e)) : [];
                    let o = e;
                    i && l && r.push((e => {
                        const n = yi(e.theme) ? t : e.theme,
                            r = ((e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null)(i, n);
                        return r ? l(e, r) : null
                    })), i && !d && r.push((e => {
                        const n = yi(e.theme) ? t : e.theme;
                        return ((e, t, n, r) => {
                            var o, i;
                            const {
                                ownerState: a = {}
                            } = e, s = [], c = null == n || null == (o = n.components) || null == (i = o[r]) ? void 0 : i.variants;
                            return c && c.forEach((n => {
                                let r = !0;
                                Object.keys(n.props).forEach((t => {
                                    a[t] !== n.props[t] && e[t] !== n.props[t] && (r = !1)
                                })), r && s.push(t[mi(n.props)])
                            })), s
                        })(e, ((e, t) => {
                            let n = [];
                            t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants);
                            const r = {};
                            return n.forEach((e => {
                                const t = mi(e.props);
                                r[t] = e.style
                            })), r
                        })(i, n), n, i)
                    })), p || r.push((e => ti(et({}, e, {
                        theme: yi(e.theme) ? t : e.theme
                    }))));
                    const a = r.length - n.length;
                    if (Array.isArray(e) && a > 0) {
                        const t = new Array(a).fill("");
                        o = [...e, ...t], o.raw = [...e.raw, ...t]
                    } else "function" == typeof e && (o = n => {
                        let {
                            theme: r
                        } = n, o = tt(n, _i);
                        return e(et({
                            theme: yi(r) ? t : r
                        }, o))
                    });
                    return h(o, ...r)
                }
            }
        }({
            defaultTheme: Ia,
            rootShouldForwardProp: Da
        });
    var Ba = $a;

    function za(e) {
        return ji("MuiSvgIcon", e)
    }
    Di("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    const Fa = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
        Wa = Ba("svg", {
            name: "MuiSvgIcon",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, "inherit" !== n.color && t[`color${It(n.color)}`], t[`fontSize${It(n.fontSize)}`]]
            }
        })((({
            theme: e,
            ownerState: t
        }) => {
            var n, r;
            return {
                userSelect: "none",
                width: "1em",
                height: "1em",
                display: "inline-block",
                fill: "currentColor",
                flexShrink: 0,
                transition: e.transitions.create("fill", {
                    duration: e.transitions.duration.shorter
                }),
                fontSize: {
                    inherit: "inherit",
                    small: e.typography.pxToRem(20),
                    medium: e.typography.pxToRem(24),
                    large: e.typography.pxToRem(35)
                } [t.fontSize],
                color: null != (n = null == (r = e.palette[t.color]) ? void 0 : r.main) ? n : {
                    action: e.palette.action.active,
                    disabled: e.palette.action.disabled,
                    inherit: void 0
                } [t.color]
            }
        })),
        Ha = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiSvgIcon"
                }),
                {
                    children: r,
                    className: o,
                    color: i = "inherit",
                    component: a = "svg",
                    fontSize: s = "medium",
                    htmlColor: c,
                    inheritViewBox: l = !1,
                    titleAccess: u,
                    viewBox: d = "0 0 24 24"
                } = n,
                p = tt(n, Fa),
                f = et({}, n, {
                    color: i,
                    component: a,
                    fontSize: s,
                    inheritViewBox: l,
                    viewBox: d
                }),
                h = {};
            l || (h.viewBox = d);
            const m = (e => {
                const {
                    color: t,
                    fontSize: n,
                    classes: r
                } = e;
                return Mi({
                    root: ["root", "inherit" !== t && `color${It(t)}`, `fontSize${It(n)}`]
                }, za, r)
            })(f);
            return qr(Wa, et({
                as: a,
                className: dt(m.root, o),
                ownerState: f,
                focusable: "false",
                color: c,
                "aria-hidden": !u || void 0,
                role: u ? "img" : void 0,
                ref: t
            }, h, p, {
                children: [r, u ? qr("title", {
                    children: u
                }) : null]
            }))
        }));
    Ha.muiName = "SvgIcon";
    var Ua = Ha;

    function qa(e, t) {
        const n = (n, r) => qr(Ua, et({
            "data-testid": `${t}Icon`,
            ref: r
        }, n, {
            children: e
        }));
        return n.muiName = Ua.muiName, fe(ve(n))
    }
    var Va = Object.freeze({
        __proto__: null,
        capitalize: It,
        createChainedFunction: Nt,
        createSvgIcon: qa,
        debounce: Lt,
        deprecatedPropType: function(e, t) {
            return () => null
        },
        isMuiElement: jt,
        ownerDocument: Dt,
        ownerWindow: $t,
        requirePropFactory: function(e, t) {
            return () => null
        },
        setRef: Bt,
        unstable_useEnhancedEffect: zt,
        unstable_useId: Wt,
        unsupportedProp: function(e, t, n, r, o) {
            return null
        },
        useControlled: Ht,
        useEventCallback: Ut,
        useForkRef: qt,
        useIsFocusVisible: en,
        unstable_ClassNameGenerator: Ni
    });
    const Ga = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

    function Ka(e, t, n) {
        var r;
        const o = function(e, t, n) {
            const r = t.getBoundingClientRect(),
                o = n && n.getBoundingClientRect(),
                i = $t(t);
            let a;
            if (t.fakeTransform) a = t.fakeTransform;
            else {
                const e = i.getComputedStyle(t);
                a = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform")
            }
            let s = 0,
                c = 0;
            if (a && "none" !== a && "string" == typeof a) {
                const e = a.split("(")[1].split(")")[0].split(",");
                s = parseInt(e[4], 10), c = parseInt(e[5], 10)
            }
            return "left" === e ? o ? `translateX(${o.right+s-r.left}px)` : `translateX(${i.innerWidth+s-r.left}px)` : "right" === e ? o ? `translateX(-${r.right-o.left-s}px)` : `translateX(-${r.left+r.width-s}px)` : "up" === e ? o ? `translateY(${o.bottom+c-r.top}px)` : `translateY(${i.innerHeight+c-r.top}px)` : o ? `translateY(-${r.top-o.top+r.height-c}px)` : `translateY(-${r.top+r.height-c}px)`
        }(e, t, "function" == typeof(r = n) ? r() : r);
        o && (t.style.webkitTransform = o, t.style.transform = o)
    }
    const Xa = {
            enter: Ea.easeOut,
            exit: Ea.sharp
        },
        Ya = {
            enter: Ca.enteringScreen,
            exit: Ca.leavingScreen
        },
        Ja = ve((function(e, t) {
            const {
                addEndListener: n,
                appear: r = !0,
                children: o,
                container: i,
                direction: a = "down",
                easing: s = Xa,
                in: c,
                onEnter: l,
                onEntered: u,
                onEntering: d,
                onExit: p,
                onExited: f,
                onExiting: h,
                style: m,
                timeout: v = Ya,
                TransitionComponent: g = St
            } = e, _ = tt(e, Ga), y = Na(), b = Q(null), x = qt(o.ref, b), w = qt(x, t), S = e => t => {
                e && (void 0 === t ? e(b.current) : e(b.current, t))
            }, k = S(((e, t) => {
                Ka(a, e, i), l && l(e, t)
            })), E = S(((e, t) => {
                const n = La({
                    timeout: v,
                    style: m,
                    easing: s
                }, {
                    mode: "enter"
                });
                e.style.webkitTransition = y.transitions.create("-webkit-transform", et({}, n)), e.style.transition = y.transitions.create("transform", et({}, n)), e.style.webkitTransform = "none", e.style.transform = "none", d && d(e, t)
            })), C = S(u), O = S(h), T = S((e => {
                const t = La({
                    timeout: v,
                    style: m,
                    easing: s
                }, {
                    mode: "exit"
                });
                e.style.webkitTransition = y.transitions.create("-webkit-transform", t), e.style.transition = y.transitions.create("transform", t), Ka(a, e, i), p && p(e)
            })), R = S((e => {
                e.style.webkitTransition = "", e.style.transition = "", f && f(e)
            })), P = te((() => {
                b.current && Ka(a, b.current, i)
            }), [a, i]);
            return Y((() => {
                if (c || "down" === a || "right" === a) return;
                const e = Lt((() => {
                        b.current && Ka(a, b.current, i)
                    })),
                    t = $t(b.current);
                return t.addEventListener("resize", e), () => {
                    e.clear(), t.removeEventListener("resize", e)
                }
            }), [a, c, i]), Y((() => {
                c || P()
            }), [c, P]), qr(g, et({
                nodeRef: b,
                onEnter: k,
                onEntered: C,
                onEntering: E,
                onExit: T,
                onExited: R,
                onExiting: O,
                addEndListener: e => {
                    n && n(b.current, e)
                },
                appear: r,
                in: c,
                timeout: v
            }, _, {
                children: (e, t) => We(o, et({
                    ref: w,
                    style: et({
                        visibility: "exited" !== e || c ? void 0 : "hidden"
                    }, m, o.props.style)
                }, t))
            }))
        }));
    var Qa = Ja;

    function Za(e) {
        return ji("MuiCollapse", e)
    }
    Di("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
    const es = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"],
        ts = Ba("div", {
            name: "MuiCollapse",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, t[n.orientation], "entered" === n.state && t.entered, "exited" === n.state && !n.in && "0px" === n.collapsedSize && t.hidden]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            height: 0,
            overflow: "hidden",
            transition: e.transitions.create("height")
        }, "horizontal" === t.orientation && {
            height: "auto",
            width: 0,
            transition: e.transitions.create("width")
        }, "entered" === t.state && et({
            height: "auto",
            overflow: "visible"
        }, "horizontal" === t.orientation && {
            width: "auto"
        }), "exited" === t.state && !t.in && "0px" === t.collapsedSize && {
            visibility: "hidden"
        }))),
        ns = Ba("div", {
            name: "MuiCollapse",
            slot: "Wrapper",
            overridesResolver: (e, t) => t.wrapper
        })((({
            ownerState: e
        }) => et({
            display: "flex",
            width: "100%"
        }, "horizontal" === e.orientation && {
            width: "auto",
            height: "100%"
        }))),
        rs = Ba("div", {
            name: "MuiCollapse",
            slot: "WrapperInner",
            overridesResolver: (e, t) => t.wrapperInner
        })((({
            ownerState: e
        }) => et({
            width: "100%"
        }, "horizontal" === e.orientation && {
            width: "auto",
            height: "100%"
        }))),
        os = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiCollapse"
                }),
                {
                    addEndListener: r,
                    children: o,
                    className: i,
                    collapsedSize: a = "0px",
                    component: s,
                    easing: c,
                    in: l,
                    onEnter: u,
                    onEntered: d,
                    onEntering: p,
                    onExit: f,
                    onExited: h,
                    onExiting: m,
                    orientation: v = "vertical",
                    style: g,
                    timeout: _ = Ca.standard,
                    TransitionComponent: y = St
                } = n,
                b = tt(n, es),
                x = et({}, n, {
                    orientation: v,
                    collapsedSize: a
                }),
                w = (e => {
                    const {
                        orientation: t,
                        classes: n
                    } = e;
                    return Mi({
                        root: ["root", `${t}`],
                        entered: ["entered"],
                        hidden: ["hidden"],
                        wrapper: ["wrapper", `${t}`],
                        wrapperInner: ["wrapperInner", `${t}`]
                    }, Za, n)
			                })(x),
                S = Na(),
                k = Q(),
                E = Q(null),
                C = Q(),
                O = "number" == typeof a ? `${a}px` : a,
                T = "horizontal" === v,
                R = T ? "width" : "height";
            Y((() => () => {
                clearTimeout(k.current)
            }), []);
            const P = Q(null),
                M = qt(t, P),
                A = e => t => {
                    if (e) {
                        const n = P.current;
                        void 0 === t ? e(n) : e(n, t)
                    }
                },
                I = () => E.current ? E.current[T ? "clientWidth" : "clientHeight"] : 0,
                N = A(((e, t) => {
                    E.current && T && (E.current.style.position = "absolute"), e.style[R] = O, u && u(e, t)
                })),
                L = A(((e, t) => {
                    const n = I();
                    E.current && T && (E.current.style.position = "");
                    const {
                        duration: r,
                        easing: o
                    } = La({
                        style: g,
                        timeout: _,
                        easing: c
                    }, {
                        mode: "enter"
                    });
                    if ("auto" === _) {
                        const t = S.transitions.getAutoHeightDuration(n);
                        e.style.transitionDuration = `${t}ms`, C.current = t
                    } else e.style.transitionDuration = "string" == typeof r ? r : `${r}ms`;
                    e.style[R] = `${n}px`, e.style.transitionTimingFunction = o, p && p(e, t)
                })),
                j = A(((e, t) => {
                    e.style[R] = "auto", d && d(e, t)
                })),
                D = A((e => {
                    e.style[R] = `${I()}px`, f && f(e)
                })),
                $ = A(h),
                B = A((e => {
                    const t = I(),
                        {
                            duration: n,
                            easing: r
                        } = La({
                            style: g,
                            timeout: _,
                            easing: c
                        }, {
                            mode: "exit"
                        });
                    if ("auto" === _) {
                        const n = S.transitions.getAutoHeightDuration(t);
                        e.style.transitionDuration = `${n}ms`, C.current = n
                    } else e.style.transitionDuration = "string" == typeof n ? n : `${n}ms`;
                    e.style[R] = O, e.style.transitionTimingFunction = r, m && m(e)
                }));
            return qr(y, et({
                in: l,
                onEnter: N,
                onEntered: j,
                onEntering: L,
                onExit: D,
                onExited: $,
                onExiting: B,
                addEndListener: e => {
                    "auto" === _ && (k.current = setTimeout(e, C.current || 0)), r && r(P.current, e)
                },
                nodeRef: P,
                timeout: "auto" === _ ? null : _
            }, b, {
                children: (e, t) => qr(ts, et({
                    as: s,
                    className: dt(w.root, i, {
                        entered: w.entered,
                        exited: !l && "0px" === O && w.hidden
                    } [e]),
                    style: et({
                        [T ? "minWidth" : "minHeight"]: O
                    }, g),
                    ownerState: et({}, x, {
                        state: e
                    }),
                    ref: M
                }, t, {
                    children: qr(ns, {
                        ownerState: et({}, x, {
                            state: e
                        }),
                        className: w.wrapper,
                        ref: E,
                        children: qr(rs, {
                            ownerState: et({}, x, {
                                state: e
                            }),
                            className: w.wrapperInner,
                            children: o
                        })
                    })
                }))
            }))
        }));
    os.muiSupportAuto = !0;
    var is = os;

    function as(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ss() {
        return ss = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, ss.apply(this, arguments)
    }

    function cs(e, t) {
        if (null == e) return {};
        var n, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
    }

    function ls(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var us = Ue.createContext(),
        ds = {
            containerRoot: {},
            containerAnchorOriginTopCenter: {},
            containerAnchorOriginBottomCenter: {},
            containerAnchorOriginTopRight: {},
            containerAnchorOriginBottomRight: {},
            containerAnchorOriginTopLeft: {},
            containerAnchorOriginBottomLeft: {}
        },
        ps = {
            default: 20,
            dense: 4
        },
        fs = {
            default: 6,
            dense: 2
        },
        hs = {
            maxSnack: 3,
            dense: !1,
            hideIconVariant: !1,
            variant: "default",
            autoHideDuration: 5e3,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
            },
            TransitionComponent: Qa,
            transitionDuration: {
                enter: 225,
                exit: 195
            }
        },
        ms = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        vs = function(e) {
            return Object.keys(e).filter((function(e) {
                return !ds[e]
            })).reduce((function(t, n) {
                var r;
                return ss({}, t, ((r = {})[n] = e[n], r))
            }), {})
        },
        gs = {
            TIMEOUT: "timeout",
            CLICKAWAY: "clickaway",
            MAXSNACK: "maxsnack",
            INSTRUCTED: "instructed"
        },
        _s = function(e) {
            return "containerAnchorOrigin" + e
        },
        ys = function(e) {
            var t = e.vertical,
                n = e.horizontal;
            return "anchorOrigin" + ms(t) + ms(n)
        },
        bs = function(e) {
            return "variant" + ms(e)
        },
        xs = function(e) {
            return !!e || 0 === e
        },
        ws = function(e) {
            return "number" == typeof e || null === e
        };

    function Ss(e, t, n) {
        return void 0 === e && (e = {}), void 0 === t && (t = {}), void 0 === n && (n = {}), ss({}, n, {}, t, {}, e)
    }
    var ks = {
            root: "SnackbarContent-root"
        },
        Es = Ba("div")((function(e) {
            var t, n, r = e.theme;
            return (n = {})["&." + ks.root] = ((t = {
                display: "flex",
                flexWrap: "wrap",
                flexGrow: 1
            })[r.breakpoints.up("sm")] = {
                flexGrow: "initial",
                minWidth: 288
            }, t), n
        })),
        Cs = ve((function(e, t) {
            var n = e.className,
                r = cs(e, ["className"]);
            return Ue.createElement(Es, Object.assign({
                ref: t,
                className: dt(ks.root, n)
            }, r))
        })),
        Os = {
            right: "left",
            left: "right",
            bottom: "up",
            top: "down"
        },
        Ts = function(e) {
            return "center" !== e.horizontal ? Os[e.horizontal] : Os[e.vertical]
        },
        Rs = function(e) {
            return Ue.createElement(Ua, Object.assign({}, e), Ue.createElement("path", {
                d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
            }))
        },
        Ps = function(e) {
            return Ue.createElement(Ua, Object.assign({}, e), Ue.createElement("path", {
                d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
            }))
        },
        Ms = function(e) {
            return Ue.createElement(Ua, Object.assign({}, e), Ue.createElement("path", {
                d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
            }))
        },
        As = function(e) {
            return Ue.createElement(Ua, Object.assign({}, e), Ue.createElement("path", {
                d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
            }))
        },
        Is = {
            fontSize: 20,
            marginInlineEnd: 8
        },
        Ns = {
            default: void 0,
            success: Ue.createElement(Rs, {
                style: Is
            }),
            warning: Ue.createElement(Ps, {
                style: Is
            }),
            error: Ue.createElement(Ms, {
                style: Is
            }),
            info: Ue.createElement(As, {
                style: Is
            })
        };

    function Ls(e, t) {
        return e.reduce((function(e, n) {
            return null == n ? e : function() {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                var a = [].concat(o);
                t && -1 === a.indexOf(t) && a.push(t), e.apply(this, a), n.apply(this, a)
            }
        }), (function() {}))
    }
    var js = "undefined" != typeof window ? J : Y;

    function Ds(e) {
        var t = Q(e);
        return js((function() {
            t.current = e
        })), te((function() {
            return t.current.apply(void 0, arguments)
        }), [])
    }
    var $s = ve((function(e, t) {
            var n = e.children,
                r = e.autoHideDuration,
                o = e.ClickAwayListenerProps,
                i = e.disableWindowBlurListener,
                a = void 0 !== i && i,
                s = e.onClose,
                c = e.onMouseEnter,
                l = e.onMouseLeave,
                u = e.open,
                d = e.resumeHideDuration,
                f = cs(e, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]),
                h = Q(),
                m = Ds((function() {
                    s && s.apply(void 0, arguments)
                })),
                v = Ds((function(e) {
                    s && null != e && (clearTimeout(h.current), h.current = setTimeout((function() {
                        m(null, gs.TIMEOUT)
                    }), e))
                }));
            Y((function() {
                return u && v(r),
                    function() {
                        clearTimeout(h.current)
                    }
            }), [u, r, v]);
            var g = function() {
                    clearTimeout(h.current)
                },
                _ = te((function() {
                    null != r && v(null != d ? d : .5 * r)
                }), [r, d, v]);
            return Y((function() {
                if (!a && u) return window.addEventListener("focus", _), window.addEventListener("blur", g),
                    function() {
                        window.removeEventListener("focus", _), window.removeEventListener("blur", g)
                    }
            }), [a, _, u]), p(Hi, ss({
                onClickAway: function(e) {
                    s && s(e, gs.CLICKAWAY)
                }
            }, o), p("div", ss({
                onMouseEnter: function(e) {
                    c && c(e), g()
                },
                onMouseLeave: function(e) {
                    l && l(e), _()
                },
                ref: t
            }, f), n))
        })),
        Bs = {
            contentRoot: "SnackbarItem-contentRoot",
            lessPadding: "SnackbarItem-lessPadding",
            variantSuccess: "SnackbarItem-variantSuccess",
            variantError: "SnackbarItem-variantError",
            variantInfo: "SnackbarItem-variantInfo",
            variantWarning: "SnackbarItem-variantWarning",
            message: "SnackbarItem-message",
            action: "SnackbarItem-action",
            wrappedRoot: "SnackbarItem-wrappedRoot"
        },
        zs = Ba($s)((function(e) {
            var t, n = e.theme,
                r = n.palette.mode || n.palette.type,
                o = function(e, t = .15) {
                    return Ci(e) > .5 ? Ti(e, t) : Ri(e, t)
                }(n.palette.background.default, "light" === r ? .8 : .98);
            return (t = {})["&." + Bs.wrappedRoot] = {
                position: "relative",
                transform: "translateX(0)",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, t["." + Bs.contentRoot] = ss({}, n.typography.body2, {
                backgroundColor: o,
                color: n.palette.getContrastText(o),
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: "4px",
                boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
            }), t["." + Bs.lessPadding] = {
                paddingLeft: 20
            }, t["." + Bs.variantSuccess] = {
                backgroundColor: "#43a047",
                color: "#fff"
            }, t["." + Bs.variantError] = {
                backgroundColor: "#d32f2f",
                color: "#fff"
            }, t["." + Bs.variantInfo] = {
                backgroundColor: "#2196f3",
                color: "#fff"
            }, t["." + Bs.variantWarning] = {
                backgroundColor: "#ff9800",
                color: "#fff"
            }, t["." + Bs.message] = {
                display: "flex",
                alignItems: "center",
                padding: "8px 0"
            }, t["." + Bs.action] = {
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                paddingLeft: 16,
                marginRight: -8
            }, t
        })),
        Fs = function(e) {
            var t = e.classes,
                n = cs(e, ["classes"]),
                r = Q(),
                o = K(!0),
                i = o[0],
                a = o[1];
            Y((function() {
                return function() {
                    r.current && clearTimeout(r.current)
                }
            }), []);
            var s = Ls([n.snack.onClose, n.onClose], n.snack.key),
                c = n.style,
                l = n.ariaAttributes,
                u = n.className,
                d = n.hideIconVariant,
                p = n.iconVariant,
                f = n.snack,
                h = n.action,
                m = n.content,
                v = n.TransitionComponent,
                g = n.TransitionProps,
                _ = n.transitionDuration,
                y = cs(n, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]),
                b = f.key,
                x = f.open,
                w = f.className,
                S = f.variant,
                k = f.content,
                E = f.action,
                C = f.ariaAttributes,
                O = f.anchorOrigin,
                T = f.message,
                R = f.TransitionComponent,
                P = f.TransitionProps,
                M = f.transitionDuration,
                A = cs(f, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]),
                I = ss({}, Ns, {}, p)[S],
                N = ss({
                    "aria-describedby": "notistack-snackbar"
                }, Ss(C, l)),
                L = R || v || hs.TransitionComponent,
                j = Ss(M, _, hs.transitionDuration),
                D = ss({
                    direction: Ts(O)
                }, Ss(P, g)),
                $ = E || h;
            "function" == typeof $ && ($ = $(b));
            var B = k || m;
            "function" == typeof B && (B = B(b, f.message));
            var z = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"].reduce((function(e, t) {
                var r;
                return ss({}, e, ((r = {})[t] = Ls([n.snack[t], n[t]], n.snack.key), r))
            }), {});
            return Ue.createElement(is, {
                unmountOnExit: !0,
                timeout: 175,
                in: i,
                onExited: z.onExited
            }, Ue.createElement(zs, Object.assign({}, y, A, {
                open: x,
                className: dt(t.root, Bs.wrappedRoot, t[ys(O)]),
                onClose: s
            }), Ue.createElement(L, Object.assign({
                appear: !0,
                in: x,
                timeout: j
            }, D, {
                onExit: z.onExit,
                onExiting: z.onExiting,
                onExited: function() {
                    r.current = setTimeout((function() {
                        a(!i)
                    }), 125)
                },
                onEnter: z.onEnter,
                onEntering: z.onEntering,
                onEntered: Ls([z.onEntered, function() {
                    n.snack.requestClose && s(null, gs.INSTRCUTED)
                }])
            }), B || Ue.createElement(Cs, Object.assign({}, N, {
                role: "alert",
                style: c,
                className: dt(Bs.contentRoot, Bs[bs(S)], t[bs(S)], u, w, !d && I && Bs.lessPadding)
            }), Ue.createElement("div", {
                id: N["aria-describedby"],
                className: Bs.message
            }, d ? null : I, T), $ && Ue.createElement("div", {
                className: Bs.action
            }, $)))))
        },
        Ws = "& > .MuiCollapse-container, & > .MuiCollapse-root",
        Hs = "& > .MuiCollapse-container > .MuiCollapse-wrapper, & > .MuiCollapse-root > .MuiCollapse-wrapper",
        Us = "SnackbarContainer",
        qs = {
            root: Us + "-root",
            rootDense: Us + "-rootDense",
            top: Us + "-top",
            bottom: Us + "-bottom",
            left: Us + "-left",
            right: Us + "-right",
            center: Us + "-center"
        },
        Vs = Ba("div")((function(e) {
            var t, n, r, o, i, a, s = e.theme;
            return (a = {})["&." + qs.root] = ((t = {
                boxSizing: "border-box",
                display: "flex",
                maxHeight: "100%",
                position: "fixed",
                zIndex: s.zIndex.snackbar,
                height: "auto",
                width: "auto",
                transition: "top 300ms ease 0ms, right 300ms ease 0ms, bottom 300ms ease 0ms, left 300ms ease 0ms, margin 300ms ease 0ms, max-width 300ms ease 0ms",
                pointerEvents: "none"
            })[Ws] = {
                pointerEvents: "all"
            }, t[Hs] = {
                padding: fs.default+"px 0px",
                transition: "padding 300ms ease 0ms"
            }, t.maxWidth = "calc(100% - " + 2 * ps.default+"px)", t[s.breakpoints.down("sm")] = {
                width: "100%",
                maxWidth: "calc(100% - 32px)"
            }, t), a["&." + qs.rootDense] = ((n = {})[Hs] = {
                padding: fs.dense + "px 0px"
            }, n), a["&." + qs.top] = {
                top: ps.default-fs.default,
                flexDirection: "column"
            }, a["&." + qs.bottom] = {
                bottom: ps.default-fs.default,
                flexDirection: "column-reverse"
            }, a["&." + qs.left] = ((r = {
                left: ps.default
            })[s.breakpoints.up("sm")] = {
                alignItems: "flex-start"
            }, r[s.breakpoints.down("sm")] = {
                left: "16px"
            }, r), a["&." + qs.right] = ((o = {
                right: ps.default
            })[s.breakpoints.up("sm")] = {
                alignItems: "flex-end"
            }, o[s.breakpoints.down("sm")] = {
                right: "16px"
            }, o), a["&." + qs.center] = ((i = {
                left: "50%",
                transform: "translateX(-50%)"
            })[s.breakpoints.up("sm")] = {
                alignItems: "center"
            }, i), a
        })),
        Gs = function(e) {
            var t = e.className,
                n = e.anchorOrigin,
                r = e.dense,
                o = cs(e, ["className", "anchorOrigin", "dense"]),
                i = dt(qs[n.vertical], qs[n.horizontal], qs.root, t, r && qs.rootDense);
            return Ue.createElement(Vs, Object.assign({
                className: i
            }, o))
        },
        Ks = Ue.memo(Gs),
        Xs = function(e) {
            var t, n, r, o, i;

            function a(t) {
                var n;
                return (n = e.call(this, t) || this).enqueueSnackbar = function(e, t) {
                    void 0 === t && (t = {});
                    var r = t,
                        o = r.key,
                        i = r.preventDuplicate,
                        a = cs(r, ["key", "preventDuplicate"]),
                        s = xs(o),
                        c = s ? o : (new Date).getTime() + Math.random(),
                        l = function(e, t, n) {
                            return function(r) {
                                return "autoHideDuration" === r ? ws(e.autoHideDuration) ? e.autoHideDuration : ws(t.autoHideDuration) ? t.autoHideDuration : hs.autoHideDuration : e[r] || t[r] || n[r]
                            }
                        }(a, n.props, hs),
                        u = ss({
                            key: c
                        }, a, {
                            message: e,
                            open: !0,
                            entered: !1,
                            requestClose: !1,
                            variant: l("variant"),
                            anchorOrigin: l("anchorOrigin"),
                            autoHideDuration: l("autoHideDuration")
                        });
                    return a.persist && (u.autoHideDuration = void 0), n.setState((function(t) {
                        if (void 0 === i && n.props.preventDuplicate || i) {
                            var r = function(t) {
                                    return s ? t.key === o : t.message === e
                                },
                                a = t.queue.findIndex(r) > -1,
                                c = t.snacks.findIndex(r) > -1;
                            if (a || c) return t
                        }
                        return n.handleDisplaySnack(ss({}, t, {
                            queue: [].concat(t.queue, [u])
                        }))
                    })), c
                }, n.handleDisplaySnack = function(e) {
                    return e.snacks.length >= n.maxSnack ? n.handleDismissOldest(e) : n.processQueue(e)
                }, n.processQueue = function(e) {
                    var t = e.queue,
                        n = e.snacks;
                    return t.length > 0 ? ss({}, e, {
                        snacks: [].concat(n, [t[0]]),
                        queue: t.slice(1, t.length)
                    }) : e
                }, n.handleDismissOldest = function(e) {
                    if (e.snacks.some((function(e) {
                            return !e.open || e.requestClose
                        }))) return e;
                    var t = !1,
                        r = !1;
                    e.snacks.reduce((function(e, t) {
                        return e + (t.open && t.persist ? 1 : 0)
                    }), 0) === n.maxSnack && (r = !0);
                    var o = e.snacks.map((function(e) {
                        return t || e.persist && !r ? ss({}, e) : (t = !0, e.entered ? (e.onClose && e.onClose(null, gs.MAXSNACK, e.key), n.props.onClose && n.props.onClose(null, gs.MAXSNACK, e.key), ss({}, e, {
                            open: !1
                        })) : ss({}, e, {
                            requestClose: !0
                        }))
                    }));
                    return ss({}, e, {
                        snacks: o
                    })
                }, n.handleEnteredSnack = function(e, t, r) {
                    if (!xs(r)) throw new Error("handleEnteredSnack Cannot be called with undefined key");
                    n.setState((function(e) {
                        return {
                            snacks: e.snacks.map((function(e) {
                                return e.key === r ? ss({}, e, {
                                    entered: !0
                                }) : ss({}, e)
                            }))
                        }
                    }))
                }, n.handleCloseSnack = function(e, t, r) {
                    if (n.props.onClose && n.props.onClose(e, t, r), t !== gs.CLICKAWAY) {
                        var o = void 0 === r;
                        n.setState((function(e) {
                            var t = e.snacks,
                                n = e.queue;
                            return {
                                snacks: t.map((function(e) {
                                    return o || e.key === r ? e.entered ? ss({}, e, {
                                        open: !1
                                    }) : ss({}, e, {
                                        requestClose: !0
                                    }) : ss({}, e)
                                })),
                                queue: n.filter((function(e) {
                                    return e.key !== r
                                }))
                            }
                        }))
                    }
                }, n.closeSnackbar = function(e) {
                    var t = n.state.snacks.find((function(t) {
                        return t.key === e
                    }));
                    xs(e) && t && t.onClose && t.onClose(null, gs.INSTRUCTED, e), n.handleCloseSnack(null, gs.INSTRUCTED, e)
                }, n.handleExitedSnack = function(e, t, r) {
                    var o = t || r;
                    if (!xs(o)) throw new Error("handleExitedSnack Cannot be called with undefined key");
                    n.setState((function(e) {
                        var t = n.processQueue(ss({}, e, {
                            snacks: e.snacks.filter((function(e) {
                                return e.key !== o
                            }))
                        }));
                        return 0 === t.queue.length ? t : n.handleDismissOldest(t)
                    }))
                }, n.state = {
                    snacks: [],
                    queue: [],
                    contextValue: {
                        enqueueSnackbar: n.enqueueSnackbar.bind(ls(n)),
                        closeSnackbar: n.closeSnackbar.bind(ls(n))
                    }
                }, n
            }
            return n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.prototype.render = function() {
                var e = this,
                    t = this.state.contextValue,
                    n = this.props,
                    r = n.iconVariant,
                    o = n.dense,
                    i = void 0 === o ? hs.dense : o,
                    a = n.hideIconVariant,
                    s = void 0 === a ? hs.hideIconVariant : a,
                    c = n.domRoot,
                    l = n.children,
                    u = n.classes,
                    d = void 0 === u ? {} : u,
                    p = cs(n, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]),
                    f = this.state.snacks.reduce((function(e, t) {
                        var n, r, o = (r = t.anchorOrigin, "" + ms(r.vertical) + ms(r.horizontal)),
                            i = e[o] || [];
                        return ss({}, e, ((n = {})[o] = [].concat(i, [t]), n))
                    }), {}),
                    h = Object.keys(f).map((function(t) {
                        var n = f[t];
                        return Ue.createElement(Ks, {
                            key: t,
                            dense: i,
                            anchorOrigin: n[0].anchorOrigin,
                            className: dt(d.containerRoot, d[_s(t)])
                        }, n.map((function(t) {
                            return Ue.createElement(Fs, Object.assign({}, p, {
                                key: t.key,
                                snack: t,
                                dense: i,
                                iconVariant: r,
                                hideIconVariant: s,
                                classes: vs(d),
                                onClose: e.handleCloseSnack,
                                onExited: Ls([e.handleExitedSnack, e.props.onExited]),
                                onEntered: Ls([e.handleEnteredSnack, e.props.onEntered])
                            }))
                        })))
                    }));
                return Ue.createElement(us.Provider, {
                    value: t
                }, l, c ? Oe(h, c) : h)
            }, r = a, (o = [{
                key: "maxSnack",
                get: function() {
                    return this.props.maxSnack || hs.maxSnack
                }
            }]) && as(r.prototype, o), i && as(r, i), a
        }(m);

    function Ys(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
    }
    var Js = "function" == typeof Symbol && Symbol.observable || "@@observable",
        Qs = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        Zs = {
            INIT: "@@redux/INIT" + Qs(),
            REPLACE: "@@redux/REPLACE" + Qs(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + Qs()
            }
        };

    function ec(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }
    const tc = "ENQUEUE_SNACKBAR",
        nc = "REMOVE_SNACKBAR",
        rc = {
            notifications: []
        };
    const oc = "OPEN_DIALOG",
        ic = "CLOSE_DIALOG",
        ac = {
            open: !1
        };
    var sc = function e(t, n, r) {
        var o;
        if ("function" == typeof n && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3]) throw new Error(Ys(0));
        if ("function" == typeof n && void 0 === r && (r = n, n = void 0), void 0 !== r) {
            if ("function" != typeof r) throw new Error(Ys(1));
            return r(e)(t, n)
        }
        if ("function" != typeof t) throw new Error(Ys(2));
        var i = t,
            a = n,
            s = [],
            c = s,
            l = !1;

        function u() {
            c === s && (c = s.slice())
        }

        function d() {
            if (l) throw new Error(Ys(3));
            return a
        }

        function p(e) {
            if ("function" != typeof e) throw new Error(Ys(4));
            if (l) throw new Error(Ys(5));
            var t = !0;
            return u(), c.push(e),
                function() {
                    if (t) {
                        if (l) throw new Error(Ys(6));
                        t = !1, u();
                        var n = c.indexOf(e);
                        c.splice(n, 1), s = null
                    }
                }
        }

        function f(e) {
            if (!ec(e)) throw new Error(Ys(7));
            if (void 0 === e.type) throw new Error(Ys(8));
            if (l) throw new Error(Ys(9));
            try {
                l = !0, a = i(a, e)
            } finally {
                l = !1
            }
            for (var t = s = c, n = 0; n < t.length; n++) {
                (0, t[n])()
            }
            return e
        }

        function h(e) {
            if ("function" != typeof e) throw new Error(Ys(10));
            i = e, f({
                type: Zs.REPLACE
            })
        }

        function m() {
            var e, t = p;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw new Error(Ys(11));

                    function n() {
                        e.next && e.next(d())
                    }
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            })[Js] = function() {
                return this
            }, e
        }
        return f({
            type: Zs.INIT
        }), (o = {
            dispatch: f,
            subscribe: p,
            getState: d,
            replaceReducer: h
        })[Js] = m, o
    }(function(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            "function" == typeof e[o] && (n[o] = e[o])
        }
        var i, a = Object.keys(n);
        try {
            ! function(e) {
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    if (void 0 === n(void 0, {
                            type: Zs.INIT
                        })) throw new Error(Ys(12));
                    if (void 0 === n(void 0, {
                            type: Zs.PROBE_UNKNOWN_ACTION()
                        })) throw new Error(Ys(13))
                }))
            }(n)
        } catch (e) {
            i = e
        }
        return function(e, t) {
            if (void 0 === e && (e = {}), i) throw i;
            for (var r = !1, o = {}, s = 0; s < a.length; s++) {
                var c = a[s],
                    l = n[c],
                    u = e[c],
                    d = l(u, t);
                if (void 0 === d) throw new Error(Ys(14));
                o[c] = d, r = r || d !== u
            }
            return (r = r || a.length !== Object.keys(e).length) ? o : e
        }
    }({
        snackbar: (e = rc, t) => {
            switch (t.type) {
                case tc:
                    return {
                        ...e, notifications: [...e.notifications, {
                            key: t.key,
                            ...t.notification
                        }]
                    };
                case "CLOSE_SNACKBAR":
                    return {
                        ...e, notifications: e.notifications.map((e => t.dismissAll || e.key === t.key ? {
                            ...e,
                            dismissed: !0
                        } : {
                            ...e
                        }))
                    };
                case nc:
                    return {
                        ...e, notifications: e.notifications.filter((e => e.key !== t.key))
                    };
                default:
                    return e
            }
        },
        dialog: (e = ac, t) => {
            switch (t.type) {
                case oc:
                    return {
                        ...t.options, open: !0
                    };
                case ic:
                    return ac;
                default:
                    return e
            }
        }
    }));
    const cc = "QuillBot Premium Crack: \r",
        lc = {
            content: "Everything is ready except login.\rDo you want to log in now?",
            yes: "Go to login now!",
            no: "Later"
        },
        uc = {
            content: "Session expired, you need to log in again\rDo you want to log in again now?",
            yes: "Go to login again now!",
            no: "Later"
        },
        dc = {
            logOut: "Automatic log out failed, please click right top nav to log out manually"
        },
        pc = {
            success: "Premium Hooked!",
            disabled: "Premium Hook is disabled, click setting icon (Right Top Nav) to enable it (Refresh to see the effect)"
        },
        fc = {
            title: "QuillBot Premium Crack",
            setting: {
                title: "Setting"
            },
            about: {
                title: "About"
            },
            close: "OK!"
        },
        hc = "Give a ";

    function mc() {
        const e = Ba("span")({
                fontSize: "large",
                marginRight: "12px"
            }),
            t = Ba("iframe")({
                border: "none",
                overflow: "hidden",
                width: "130px",
                height: "30px"
            });
        return p(h, null, p(e, null, hc), p(t, {
        }))
    }
    const vc = {};
    var gc = {
        get(e, t) {
            var n, r;
            try {
                return null !== (n = vc[e]) && void 0 !== n ? n : "undefined" === (r = localStorage.getItem(e)) ? void 0 : JSON.parse(null != r ? r : "")
            } catch (e) {
                return t
            }
        },
        set(e, t) {
            try {
                return localStorage.setItem(e, JSON.stringify(t)), vc[e] = void 0, !0
            } catch (n) {
                return vc[e] = t, !1
            }
        },
        remove(e) {
            vc[e] = void 0, localStorage.removeItem(e)
        }
    };
    const _c = [{
            id: "hook-premium",
            enabled: !0,
            label: "Hook Premium",
            description: "Hook Premium"
        }, {
            id: "full-editor",
            enabled: !0,
            label: "Full Editor",
            description: "Full Editor"
        }],
        yc = function(e, t) {
            const n = [],
                r = [];
            return function() {
                const [o, i, {
                    isPersistent: a,
                    removeItem: s
                }] = function(e, t) {
                    const n = ee((() => (e => "function" == typeof e)(t) ? t() : t), [e]),
                        r = ee((() => ({
                            value: gc.get(e, n),
                            isPersistent: (() => {
                                if ("undefined" == typeof window) return !0;
                                try {
                                    return localStorage.setItem("__ulss", "#"), localStorage.removeItem("__ulss"), !0
                                } catch (e) {
                                    return !1
                                }
                            })()
                        })), [e, n]),
                        [{
                            value: o,
                            isPersistent: i
                        }, a] = K(r),
                        s = ee((() => t => {
                            (e => "function" == typeof e)(t) ? a((n => ({
                                value: t(n.value),
                                isPersistent: gc.set(e, t(n.value))
                            }))): a({
                                value: t,
                                isPersistent: gc.set(e, t)
                            })
                        }), [e]);
                    Y((() => {
                        const t = t => {
                            t.storageArea === localStorage && t.key === e && a({
                                value: gc.get(e, n),
                                isPersistent: !0
                            })
                        };
                        return window.addEventListener("storage", t), () => window.removeEventListener("storage", t)
                    }), [e, n]);
                    const c = Q(!0);
                    return Y((() => {
                        c.current && void 0 === r.value || (null === localStorage.getItem(e) && gc.set(e, r.value), c.current ? c.current = !1 : a(r))
                    }), [e, r]), ee((() => [o, s, {
                        isPersistent: i,
                        removeItem() {
                            gc.remove(e), a((e => ({
                                value: n,
                                isPersistent: e.isPersistent
                            })))
                        }
                    }]), [o, s, i, e, n])
                }(e, t), c = te((e => {
                    He((() => {
                        for (const t of n) t(e)
                    }))
                }), []);
                return Y((() => (n.push(i), r.push(s), () => {
                    n.splice(n.indexOf(i), 1), r.splice(r.indexOf(s), 1)
                })), [i, s]), ee((() => [o, c, {
                    isPersistent: a,
                    removeItem() {
                        for (const e of r) e()
                    }
                }]), [o, c, a])
            }
        }("QBC-config", _c);
    var bc = Di("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
    const xc = ["center", "classes", "className"];
    let wc, Sc, kc, Ec, Cc = e => e;
    const Oc = jr(wc || (wc = Cc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
        Tc = jr(Sc || (Sc = Cc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
        Rc = jr(kc || (kc = Cc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
        Pc = Ba("span", {
            name: "MuiTouchRipple",
            slot: "Root",
            skipSx: !0
        })({
            overflow: "hidden",
            pointerEvents: "none",
            position: "absolute",
            zIndex: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: "inherit"
        }),
        Mc = Ba((function(e) {
            const {
                className: t,
                classes: n,
                pulsate: r = !1,
                rippleX: o,
                rippleY: i,
                rippleSize: a,
                in: s,
                onExited: c,
                timeout: l
            } = e, [u, d] = K(!1), p = dt(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), f = {
                width: a,
                height: a,
                top: -a / 2 + i,
                left: -a / 2 + o
            }, h = dt(n.child, u && n.childLeaving, r && n.childPulsate);
            return s || u || d(!0), Y((() => {
                if (!s && null != c) {
                    const e = setTimeout(c, l);
                    return () => {
                        clearTimeout(e)
                    }
                }
            }), [c, s, l]), qr("span", {
                className: p,
                style: f,
                children: qr("span", {
                    className: h
                })
            })
        }), {
            name: "MuiTouchRipple",
            slot: "Ripple"
        })(Ec || (Ec = Cc`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), bc.rippleVisible, Oc, 550, (({
            theme: e
        }) => e.transitions.easing.easeInOut), bc.ripplePulsate, (({
            theme: e
        }) => e.transitions.duration.shorter), bc.child, bc.childLeaving, Tc, 550, (({
            theme: e
        }) => e.transitions.easing.easeInOut), bc.childPulsate, Rc, (({
            theme: e
        }) => e.transitions.easing.easeInOut)),
        Ac = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTouchRipple"
                }),
                {
                    center: r = !1,
                    classes: o = {},
                    className: i
                } = n,
                a = tt(n, xc),
                [s, c] = K([]),
                l = Q(0),
                u = Q(null);
            Y((() => {
                u.current && (u.current(), u.current = null)
            }), [s]);
            const d = Q(!1),
                p = Q(null),
                f = Q(null),
                h = Q(null);
            Y((() => () => {
                clearTimeout(p.current)
            }), []);
            const m = te((e => {
                    const {
                        pulsate: t,
                        rippleX: n,
                        rippleY: r,
                        rippleSize: i,
                        cb: a
                    } = e;
                    c((e => [...e, qr(Mc, {
                        classes: {
                            ripple: dt(o.ripple, bc.ripple),
                            rippleVisible: dt(o.rippleVisible, bc.rippleVisible),
                            ripplePulsate: dt(o.ripplePulsate, bc.ripplePulsate),
                            child: dt(o.child, bc.child),
                            childLeaving: dt(o.childLeaving, bc.childLeaving),
                            childPulsate: dt(o.childPulsate, bc.childPulsate)
                        },
                        timeout: 550,
                        pulsate: t,
                        rippleX: n,
                        rippleY: r,
                        rippleSize: i
                    }, l.current)])), l.current += 1, u.current = a
                }), [o]),
                v = te(((e = {}, t = {}, n) => {
                    const {
                        pulsate: o = !1,
                        center: i = r || t.pulsate,
                        fakeElement: a = !1
                    } = t;
                    if ("mousedown" === e.type && d.current) return void(d.current = !1);
                    "touchstart" === e.type && (d.current = !0);
                    const s = a ? null : h.current,
                        c = s ? s.getBoundingClientRect() : {
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        };
                    let l, u, v;
                    if (i || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) l = Math.round(c.width / 2), u = Math.round(c.height / 2);
                    else {
                        const {
                            clientX: t,
                            clientY: n
                        } = e.touches ? e.touches[0] : e;
                        l = Math.round(t - c.left), u = Math.round(n - c.top)
                    }
                    if (i) v = Math.sqrt((2 * c.width ** 2 + c.height ** 2) / 3), v % 2 == 0 && (v += 1);
                    else {
                        const e = 2 * Math.max(Math.abs((s ? s.clientWidth : 0) - l), l) + 2,
                            t = 2 * Math.max(Math.abs((s ? s.clientHeight : 0) - u), u) + 2;
                        v = Math.sqrt(e ** 2 + t ** 2)
                    }
                    e.touches ? null === f.current && (f.current = () => {
                        m({
                            pulsate: o,
                            rippleX: l,
                            rippleY: u,
                            rippleSize: v,
                            cb: n
                        })
                    }, p.current = setTimeout((() => {
                        f.current && (f.current(), f.current = null)
                    }), 80)) : m({
                        pulsate: o,
                        rippleX: l,
                        rippleY: u,
                        rippleSize: v,
                        cb: n
                    })
                }), [r, m]),
                g = te((() => {
                    v({}, {
                        pulsate: !0
                    })
                }), [v]),
                _ = te(((e, t) => {
                    if (clearTimeout(p.current), "touchend" === e.type && f.current) return f.current(), f.current = null, void(p.current = setTimeout((() => {
                        _(e, t)
                    })));
                    f.current = null, c((e => e.length > 0 ? e.slice(1) : e)), u.current = t
                }), []);
            return Z(t, (() => ({
                pulsate: g,
                start: v,
                stop: _
            })), [g, v, _]), qr(Pc, et({
                className: dt(o.root, bc.root, i),
                ref: h
            }, a, {
                children: qr(Rt, {
                    component: null,
                    exit: !0,
                    children: s
                })
            }))
        }));
    var Ic = Ac;

    function Nc(e) {
        return ji("MuiButtonBase", e)
    }
    var Lc = Di("MuiButtonBase", ["root", "disabled", "focusVisible"]);
    const jc = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"],
        Dc = Ba("button", {
            name: "MuiButtonBase",
            slot: "Root",
            overridesResolver: (e, t) => t.root
        })({
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxSizing: "border-box",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            MozAppearance: "none",
            WebkitAppearance: "none",
            textDecoration: "none",
            color: "inherit",
            "&::-moz-focus-inner": {
                borderStyle: "none"
            },
            [`&.${Lc.disabled}`]: {
                pointerEvents: "none",
                cursor: "default"
            },
            "@media print": {
                colorAdjust: "exact"
            }
        }),
        $c = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiButtonBase"
                }),
                {
                    action: r,
                    centerRipple: o = !1,
                    children: i,
                    className: a,
                    component: s = "button",
                    disabled: c = !1,
                    disableRipple: l = !1,
                    disableTouchRipple: u = !1,
                    focusRipple: d = !1,
                    LinkComponent: p = "a",
                    onBlur: f,
                    onClick: h,
                    onContextMenu: m,
                    onDragLeave: v,
                    onFocus: g,
                    onFocusVisible: _,
                    onKeyDown: y,
                    onKeyUp: b,
                    onMouseDown: x,
                    onMouseLeave: w,
                    onMouseUp: S,
                    onTouchEnd: k,
                    onTouchMove: E,
                    onTouchStart: C,
                    tabIndex: O = 0,
                    TouchRippleProps: T,
                    type: R
                } = n,
                P = tt(n, jc),
                M = Q(null),
                A = Q(null),
                {
                    isFocusVisibleRef: I,
                    onFocus: N,
                    onBlur: L,
                    ref: j
                } = en(),
                [D, $] = K(!1);

            function B(e, t, n = u) {
                return Ut((r => {
                    t && t(r);
                    return !n && A.current && A.current[e](r), !0
                }))
            }
            c && D && $(!1), Z(r, (() => ({
                focusVisible: () => {
                    $(!0), M.current.focus()
                }
            })), []), Y((() => {
                D && d && !l && A.current.pulsate()
            }), [l, d, D]);
            const z = B("start", x),
                F = B("stop", m),
                W = B("stop", v),
                H = B("stop", S),
                U = B("stop", (e => {
                    D && e.preventDefault(), w && w(e)
                })),
                q = B("start", C),
                V = B("stop", k),
                G = B("stop", E),
                X = B("stop", (e => {
                    L(e), !1 === I.current && $(!1), f && f(e)
                }), !1),
                J = Ut((e => {
                    M.current || (M.current = e.currentTarget), N(e), !0 === I.current && ($(!0), _ && _(e)), g && g(e)
                })),
                ee = () => {
                    const e = M.current;
                    return s && "button" !== s && !("A" === e.tagName && e.href)
                },
                te = Q(!1),
                ne = Ut((e => {
                    d && !te.current && D && A.current && " " === e.key && (te.current = !0, A.current.stop(e, (() => {
                        A.current.start(e)
                    }))), e.target === e.currentTarget && ee() && " " === e.key && e.preventDefault(), y && y(e), e.target === e.currentTarget && ee() && "Enter" === e.key && !c && (e.preventDefault(), h && h(e))
                })),
                re = Ut((e => {
                    d && " " === e.key && A.current && D && !e.defaultPrevented && (te.current = !1, A.current.stop(e, (() => {
                        A.current.pulsate(e)
                    }))), b && b(e), h && e.target === e.currentTarget && ee() && " " === e.key && !e.defaultPrevented && h(e)
                }));
            let oe = s;
            "button" === oe && (P.href || P.to) && (oe = p);
            const ie = {};
            "button" === oe ? (ie.type = void 0 === R ? "button" : R, ie.disabled = c) : (P.href || P.to || (ie.role = "button"), c && (ie["aria-disabled"] = c));
            const ae = qt(j, M),
                se = qt(t, ae),
                [ce, le] = K(!1);
            Y((() => {
                le(!0)
            }), []);
            const ue = ce && !l && !c,
                de = et({}, n, {
                    centerRipple: o,
                    component: s,
                    disabled: c,
                    disableRipple: l,
                    disableTouchRipple: u,
                    focusRipple: d,
                    tabIndex: O,
                    focusVisible: D
                }),
                pe = (e => {
                    const {
                        disabled: t,
                        focusVisible: n,
                        focusVisibleClassName: r,
                        classes: o
                    } = e, i = Mi({
                        root: ["root", t && "disabled", n && "focusVisible"]
                    }, Nc, o);
                    return n && r && (i.root += ` ${r}`), i
                })(de);
            return qr(Dc, et({
                as: oe,
                className: dt(pe.root, a),
                ownerState: de,
                onBlur: X,
                onClick: h,
                onContextMenu: F,
                onFocus: J,
                onKeyDown: ne,
                onKeyUp: re,
                onMouseDown: z,
                onMouseLeave: U,
                onMouseUp: H,
                onDragLeave: W,
                onTouchEnd: V,
                onTouchMove: G,
                onTouchStart: q,
                ref: se,
                tabIndex: c ? -1 : O,
                type: R
            }, ie, P, {
                children: [i, ue ? qr(Ic, et({
                    ref: A,
                    center: o
                }, T)) : null]
            }))
        }));
	    var Bc = $c;

    function zc(e) {
        return ji("MuiIconButton", e)
    }
    var Fc = Di("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
    const Wc = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"],
        Hc = Ba(Bc, {
            name: "MuiIconButton",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, "default" !== n.color && t[`color${It(n.color)}`], n.edge && t[`edge${It(n.edge)}`], t[`size${It(n.size)}`]]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            textAlign: "center",
            flex: "0 0 auto",
            fontSize: e.typography.pxToRem(24),
            padding: 8,
            borderRadius: "50%",
            overflow: "visible",
            color: e.palette.action.active,
            transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest
            })
        }, !t.disableRipple && {
            "&:hover": {
                backgroundColor: Oi(e.palette.action.active, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }
        }, "start" === t.edge && {
            marginLeft: "small" === t.size ? -3 : -12
        }, "end" === t.edge && {
            marginRight: "small" === t.size ? -3 : -12
        })), (({
            theme: e,
            ownerState: t
        }) => et({}, "inherit" === t.color && {
            color: "inherit"
        }, "inherit" !== t.color && "default" !== t.color && et({
            color: e.palette[t.color].main
        }, !t.disableRipple && {
            "&:hover": {
                backgroundColor: Oi(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }
        }), "small" === t.size && {
            padding: 5,
            fontSize: e.typography.pxToRem(18)
        }, "large" === t.size && {
            padding: 12,
            fontSize: e.typography.pxToRem(28)
        }, {
            [`&.${Fc.disabled}`]: {
                backgroundColor: "transparent",
                color: e.palette.action.disabled
            }
        }))),
        Uc = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiIconButton"
                }),
                {
                    edge: r = !1,
                    children: o,
                    className: i,
                    color: a = "default",
                    disabled: s = !1,
                    disableFocusRipple: c = !1,
                    size: l = "medium"
                } = n,
                u = tt(n, Wc),
                d = et({}, n, {
                    edge: r,
                    color: a,
                    disabled: s,
                    disableFocusRipple: c,
                    size: l
                }),
                p = (e => {
                    const {
                        classes: t,
                        disabled: n,
                        color: r,
                        edge: o,
                        size: i
                    } = e;
                    return Mi({
                        root: ["root", n && "disabled", "default" !== r && `color${It(r)}`, o && `edge${It(o)}`, `size${It(i)}`]
                    }, zc, t)
                })(d);
            return qr(Hc, et({
                className: dt(p.root, i),
                centerRipple: !0,
                focusRipple: !c,
                disabled: s,
                ref: t,
                ownerState: d
            }, u, {
                children: o
            }))
        }));
    var qc = Uc;

    function Vc(e) {
        return ji("MuiButton", e)
    }
    var Gc = Di("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "contained", "containedInherit", "containedPrimary", "containedSecondary", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
    var Kc = j({});
    const Xc = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
        Yc = e => et({}, "small" === e.size && {
            "& > *:nth-of-type(1)": {
                fontSize: 18
            }
        }, "medium" === e.size && {
            "& > *:nth-of-type(1)": {
                fontSize: 20
            }
        }, "large" === e.size && {
            "& > *:nth-of-type(1)": {
                fontSize: 22
            }
        }),
        Jc = Ba(Bc, {
            shouldForwardProp: e => Da(e) || "classes" === e,
            name: "MuiButton",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, t[n.variant], t[`${n.variant}${It(n.color)}`], t[`size${It(n.size)}`], t[`${n.variant}Size${It(n.size)}`], "inherit" === n.color && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({}, e.typography.button, {
            minWidth: 64,
            padding: "6px 16px",
            borderRadius: e.shape.borderRadius,
            transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
                duration: e.transitions.duration.short
            }),
            "&:hover": et({
                textDecoration: "none",
                backgroundColor: Oi(e.palette.text.primary, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, "text" === t.variant && "inherit" !== t.color && {
                backgroundColor: Oi(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, "outlined" === t.variant && "inherit" !== t.color && {
                border: `1px solid ${e.palette[t.color].main}`,
                backgroundColor: Oi(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }, "contained" === t.variant && {
                backgroundColor: e.palette.grey.A100,
                boxShadow: e.shadows[4],
                "@media (hover: none)": {
                    boxShadow: e.shadows[2],
                    backgroundColor: e.palette.grey[300]
                }
            }, "contained" === t.variant && "inherit" !== t.color && {
                backgroundColor: e.palette[t.color].dark,
                "@media (hover: none)": {
                    backgroundColor: e.palette[t.color].main
                }
            }),
            "&:active": et({}, "contained" === t.variant && {
                boxShadow: e.shadows[8]
            }),
            [`&.${Gc.focusVisible}`]: et({}, "contained" === t.variant && {
                boxShadow: e.shadows[6]
            }),
            [`&.${Gc.disabled}`]: et({
                color: e.palette.action.disabled
            }, "outlined" === t.variant && {
                border: `1px solid ${e.palette.action.disabledBackground}`
            }, "outlined" === t.variant && "secondary" === t.color && {
                border: `1px solid ${e.palette.action.disabled}`
            }, "contained" === t.variant && {
                color: e.palette.action.disabled,
                boxShadow: e.shadows[0],
                backgroundColor: e.palette.action.disabledBackground
            })
        }, "text" === t.variant && {
            padding: "6px 8px"
        }, "text" === t.variant && "inherit" !== t.color && {
            color: e.palette[t.color].main
        }, "outlined" === t.variant && {
            padding: "5px 15px",
            border: "1px solid " + ("light" === e.palette.mode ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)")
        }, "outlined" === t.variant && "inherit" !== t.color && {
            color: e.palette[t.color].main,
            border: `1px solid ${Oi(e.palette[t.color].main,.5)}`
        }, "contained" === t.variant && {
            color: e.palette.getContrastText(e.palette.grey[300]),
            backgroundColor: e.palette.grey[300],
            boxShadow: e.shadows[2]
        }, "contained" === t.variant && "inherit" !== t.color && {
            color: e.palette[t.color].contrastText,
            backgroundColor: e.palette[t.color].main
        }, "inherit" === t.color && {
            color: "inherit",
            borderColor: "currentColor"
        }, "small" === t.size && "text" === t.variant && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "text" === t.variant && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15)
        }, "small" === t.size && "outlined" === t.variant && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "outlined" === t.variant && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15)
        }, "small" === t.size && "contained" === t.variant && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13)
        }, "large" === t.size && "contained" === t.variant && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15)
        }, t.fullWidth && {
            width: "100%"
        })), (({
            ownerState: e
        }) => e.disableElevation && {
            boxShadow: "none",
            "&:hover": {
                boxShadow: "none"
            },
            [`&.${Gc.focusVisible}`]: {
                boxShadow: "none"
            },
            "&:active": {
                boxShadow: "none"
            },
            [`&.${Gc.disabled}`]: {
                boxShadow: "none"
            }
        })),
        Qc = Ba("span", {
            name: "MuiButton",
            slot: "StartIcon",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.startIcon, t[`iconSize${It(n.size)}`]]
            }
        })((({
            ownerState: e
        }) => et({
            display: "inherit",
            marginRight: 8,
            marginLeft: -4
        }, "small" === e.size && {
            marginLeft: -2
        }, Yc(e)))),
        Zc = Ba("span", {
            name: "MuiButton",
            slot: "EndIcon",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.endIcon, t[`iconSize${It(n.size)}`]]
            }
        })((({
            ownerState: e
        }) => et({
            display: "inherit",
            marginRight: -4,
            marginLeft: 8
        }, "small" === e.size && {
            marginRight: -2
        }, Yc(e)))),
        el = ve((function(e, t) {
            const n = ne(Kc),
                r = ja({
                    props: on(n, e),
                    name: "MuiButton"
                }),
                {
                    children: o,
                    color: i = "primary",
                    component: a = "button",
                    className: s,
                    disabled: c = !1,
                    disableElevation: l = !1,
                    disableFocusRipple: u = !1,
                    endIcon: d,
                    focusVisibleClassName: p,
                    fullWidth: f = !1,
                    size: h = "medium",
                    startIcon: m,
                    type: v,
                    variant: g = "text"
                } = r,
                _ = tt(r, Xc),
                y = et({}, r, {
                    color: i,
                    component: a,
                    disabled: c,
                    disableElevation: l,
                    disableFocusRipple: u,
                    fullWidth: f,
                    size: h,
                    type: v,
                    variant: g
                }),
                b = (e => {
                    const {
                        color: t,
                        disableElevation: n,
                        fullWidth: r,
                        size: o,
                        variant: i,
                        classes: a
                    } = e;
                    return et({}, a, Mi({
                        root: ["root", i, `${i}${It(t)}`, `size${It(o)}`, `${i}Size${It(o)}`, "inherit" === t && "colorInherit", n && "disableElevation", r && "fullWidth"],
                        label: ["label"],
                        startIcon: ["startIcon", `iconSize${It(o)}`],
                        endIcon: ["endIcon", `iconSize${It(o)}`]
                    }, Vc, a))
                })(y),
                x = m && qr(Qc, {
                    className: b.startIcon,
                    ownerState: y,
                    children: m
                }),
                w = d && qr(Zc, {
                    className: b.endIcon,
                    ownerState: y,
                    children: d
                });
            return qr(Jc, et({
                ownerState: y,
                className: dt(s, n.className),
                component: a,
                disabled: c,
                focusRipple: !u,
                focusVisibleClassName: dt(b.focusVisible, p),
                ref: t,
                type: v
            }, _, {
                classes: b,
                children: [x, o, w]
            }))
        }));
    var tl = el;
    const nl = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
        rl = {
            entering: {
                opacity: 1
            },
            entered: {
                opacity: 1
            }
        },
        ol = {
            enter: Ca.enteringScreen,
            exit: Ca.leavingScreen
        },
        il = ve((function(e, t) {
            const {
                addEndListener: n,
                appear: r = !0,
                children: o,
                easing: i,
                in: a,
                onEnter: s,
                onEntered: c,
                onEntering: l,
                onExit: u,
                onExited: d,
                onExiting: p,
                style: f,
                timeout: h = ol,
                TransitionComponent: m = St
            } = e, v = tt(e, nl), g = Na(), _ = Q(null), y = qt(o.ref, t), b = qt(_, y), x = e => t => {
                if (e) {
                    const n = _.current;
                    void 0 === t ? e(n) : e(n, t)
                }
            }, w = x(l), S = x(((e, t) => {
                (e => {
                    e.scrollTop
                })(e);
                const n = La({
                    style: f,
                    timeout: h,
                    easing: i
                }, {
                    mode: "enter"
                });
                e.style.webkitTransition = g.transitions.create("opacity", n), e.style.transition = g.transitions.create("opacity", n), s && s(e, t)
            })), k = x(c), E = x(p), C = x((e => {
                const t = La({
                    style: f,
                    timeout: h,
                    easing: i
                }, {
                    mode: "exit"
                });
                e.style.webkitTransition = g.transitions.create("opacity", t), e.style.transition = g.transitions.create("opacity", t), u && u(e)
            })), O = x(d);
            return qr(m, et({
                appear: r,
                in: a,
                nodeRef: _,
                onEnter: S,
                onEntered: k,
                onEntering: w,
                onExit: C,
                onExited: O,
                onExiting: E,
                addEndListener: e => {
                    n && n(_.current, e)
                },
                timeout: h
            }, v, {
                children: (e, t) => We(o, et({
                    style: et({
                        opacity: 0,
                        visibility: "exited" !== e || a ? void 0 : "hidden"
                    }, rl[e], f, o.props.style),
                    ref: b
                }, t))
            }))
        }));
    var al = il;
    const sl = ["children", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"],
        cl = Ba("div", {
            name: "MuiBackdrop",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.invisible && t.invisible]
            }
        })((({
            ownerState: e
        }) => et({
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent"
        }, e.invisible && {
            backgroundColor: "transparent"
        }))),
        ll = ve((function(e, t) {
            var n;
            const r = ja({
                    props: e,
                    name: "MuiBackdrop"
                }),
                {
                    children: o,
                    components: i = {},
                    componentsProps: a = {},
                    className: s,
                    invisible: c = !1,
                    open: l,
                    transitionDuration: u,
                    TransitionComponent: d = al
                } = r,
                p = tt(r, sl),
                f = (e => {
                    const {
                        classes: t
                    } = e;
                    return t
                })(et({}, r, {
                    invisible: c
                }));
            return qr(d, et({
                in: l,
                timeout: u
            }, p, {
                children: qr(Fi, {
                    className: s,
                    invisible: c,
                    components: et({
                        Root: cl
                    }, i),
                    componentsProps: {
                        root: et({}, a.root, (!i.Root || !Pi(i.Root)) && {
                            ownerState: et({}, null == (n = a.root) ? void 0 : n.ownerState)
                        })
                    },
                    classes: f,
                    ref: t,
                    children: o
                })
            }))
        }));
    var ul = ll;
    const dl = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"],
        pl = Ba("div", {
            name: "MuiModal",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, !n.open && n.exited && t.hidden]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            position: "fixed",
            zIndex: e.zIndex.modal,
            right: 0,
            bottom: 0,
            top: 0,
            left: 0
        }, !t.open && t.exited && {
            visibility: "hidden"
        }))),
        fl = Ba(ul, {
            name: "MuiModal",
            slot: "Backdrop",
            overridesResolver: (e, t) => t.backdrop
        })({
            zIndex: -1
        }),
        hl = ve((function(e, t) {
            var n;
            const r = ja({
                    name: "MuiModal",
                    props: e
                }),
                {
                    BackdropComponent: o = fl,
                    closeAfterTransition: i = !1,
                    children: a,
                    components: s = {},
                    componentsProps: c = {},
                    disableAutoFocus: l = !1,
                    disableEnforceFocus: u = !1,
                    disableEscapeKeyDown: d = !1,
                    disablePortal: p = !1,
                    disableRestoreFocus: f = !1,
                    disableScrollLock: h = !1,
                    hideBackdrop: m = !1,
                    keepMounted: v = !1
                } = r,
                g = tt(r, dl),
                [_, y] = K(!0),
                b = {
                    closeAfterTransition: i,
                    disableAutoFocus: l,
                    disableEnforceFocus: u,
                    disableEscapeKeyDown: d,
                    disablePortal: p,
                    disableRestoreFocus: f,
                    disableScrollLock: h,
                    hideBackdrop: m,
                    keepMounted: v
                },
                x = (e => e.classes)(et({}, r, b, {
                    exited: _
                }));
            return qr(oa, et({
                components: et({
                    Root: pl
                }, s),
                componentsProps: {
                    root: et({}, c.root, (!s.Root || !Pi(s.Root)) && {
                        ownerState: et({}, null == (n = c.root) ? void 0 : n.ownerState)
                    })
                },
                BackdropComponent: o,
                onTransitionEnter: () => y(!1),
                onTransitionExited: () => y(!0),
                ref: t
            }, g, {
                classes: x
            }, b, {
                children: a
            }))
        }));
    var ml = hl;

    function vl(e) {
        return ji("MuiPaper", e)
    }
    Di("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
    const gl = ["className", "component", "elevation", "square", "variant"],
        _l = e => {
            let t;
            return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
        },
        yl = Ba("div", {
            name: "MuiPaper",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, t[n.variant], !n.square && t.rounded, "elevation" === n.variant && t[`elevation${n.elevation}`]]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            backgroundColor: e.palette.background.paper,
            color: e.palette.text.primary,
            transition: e.transitions.create("box-shadow")
        }, !t.square && {
            borderRadius: e.shape.borderRadius
        }, "outlined" === t.variant && {
            border: `1px solid ${e.palette.divider}`
        }, "elevation" === t.variant && et({
            boxShadow: e.shadows[t.elevation]
        }, "dark" === e.palette.mode && {
            backgroundImage: `linear-gradient(${Oi("#fff",_l(t.elevation))}, ${Oi("#fff",_l(t.elevation))})`
        })))),
        bl = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiPaper"
                }),
                {
                    className: r,
                    component: o = "div",
                    elevation: i = 1,
                    square: a = !1,
                    variant: s = "elevation"
                } = n,
                c = tt(n, gl),
                l = et({}, n, {
                    component: o,
                    elevation: i,
                    square: a,
                    variant: s
                }),
                u = (e => {
                    const {
                        square: t,
                        elevation: n,
                        variant: r,
                        classes: o
                    } = e;
                    return Mi({
                        root: ["root", r, !t && "rounded", "elevation" === r && `elevation${n}`]
                    }, vl, o)
                })(l);
            return qr(yl, et({
                as: o,
                ownerState: l,
                className: dt(u.root, r),
                ref: t
            }, c))
        }));
    var xl = bl;

    function wl(e) {
        return ji("MuiDialog", e)
    }
    var Sl = Di("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
    var kl = j({});
    const El = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"],
        Cl = Ba(ul, {
            name: "MuiDialog",
            slot: "Backdrop",
            overrides: (e, t) => t.backdrop
        })({
            zIndex: -1
        }),
        Ol = Ba(ml, {
            name: "MuiDialog",
            slot: "Root",
            overridesResolver: (e, t) => t.root
        })({
            "@media print": {
                position: "absolute !important"
            }
        }),
        Tl = Ba("div", {
            name: "MuiDialog",
            slot: "Container",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.container, t[`scroll${It(n.scroll)}`]]
            }
        })((({
            ownerState: e
        }) => et({
            height: "100%",
            "@media print": {
                height: "auto"
            },
            outline: 0
        }, "paper" === e.scroll && {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }, "body" === e.scroll && {
            overflowY: "auto",
            overflowX: "hidden",
            textAlign: "center",
            "&:after": {
                content: '""',
                display: "inline-block",
                verticalAlign: "middle",
                height: "100%",
                width: "0"
            }
        }))),
        Rl = Ba(xl, {
            name: "MuiDialog",
            slot: "Paper",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.paper, t[`scrollPaper${It(n.scroll)}`], t[`paperWidth${It(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            margin: 32,
            position: "relative",
            overflowY: "auto",
            "@media print": {
                overflowY: "visible",
                boxShadow: "none"
            }
        }, "paper" === t.scroll && {
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100% - 64px)"
        }, "body" === t.scroll && {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "left"
        }, !t.maxWidth && {
            maxWidth: "calc(100% - 64px)"
        }, "xs" === t.maxWidth && {
            maxWidth: "px" === e.breakpoints.unit ? Math.max(e.breakpoints.values.xs, 444) : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
            [`&.${Sl.paperScrollBody}`]: {
                [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
                    maxWidth: "calc(100% - 64px)"
                }
            }
        }, "xs" !== t.maxWidth && {
            maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
            [`&.${Sl.paperScrollBody}`]: {
                [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 64)]: {
                    maxWidth: "calc(100% - 64px)"
                }
            }
        }, t.fullWidth && {
            width: "calc(100% - 64px)"
        }, t.fullScreen && {
            margin: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "none",
            borderRadius: 0,
            [`&.${Sl.paperScrollBody}`]: {
                margin: 0,
                maxWidth: "100%"
            }
        }))),
        Pl = {
            enter: Ca.enteringScreen,
            exit: Ca.leavingScreen
        },
        Ml = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiDialog"
                }),
                {
                    "aria-describedby": r,
                    "aria-labelledby": o,
                    BackdropComponent: i,
                    BackdropProps: a,
                    children: s,
                    className: c,
                    disableEscapeKeyDown: l = !1,
                    fullScreen: u = !1,
                    fullWidth: d = !1,
                    maxWidth: p = "sm",
                    onBackdropClick: f,
                    onClose: h,
                    open: m,
                    PaperComponent: v = xl,
                    PaperProps: g = {},
                    scroll: _ = "paper",
                    TransitionComponent: y = al,
                    transitionDuration: b = Pl,
                    TransitionProps: x
                } = n,
                w = tt(n, El),
                S = et({}, n, {
                    disableEscapeKeyDown: l,
                    fullScreen: u,
                    fullWidth: d,
                    maxWidth: p,
                    scroll: _
                }),
                k = (e => {
                    const {
                        classes: t,
                        scroll: n,
                        maxWidth: r,
                        fullWidth: o,
                        fullScreen: i
                    } = e;
                    return Mi({
                        root: ["root"],
                        container: ["container", `scroll${It(n)}`],
                        paper: ["paper", `paperScroll${It(n)}`, `paperWidth${It(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
                    }, wl, t)
                })(S),
                E = Q(),
                C = Wt(o),
                O = ee((() => ({
                    titleId: C
                })), [C]);
            return qr(Ol, et({
                className: dt(k.root, c),
                BackdropProps: et({
                    transitionDuration: b,
                    as: i
                }, a),
                closeAfterTransition: !0,
                BackdropComponent: Cl,
                disableEscapeKeyDown: l,
                onClose: h,
                open: m,
                ref: t,
                onClick: e => {
                    E.current && (E.current = null, f && f(e), h && h(e, "backdropClick"))
                },
                ownerState: S
            }, w, {
                children: qr(y, et({
                    appear: !0,
                    in: m,
                    timeout: b,
                    role: "presentation"
                }, x, {
                    children: qr(Tl, {
                        className: dt(k.container),
                        onMouseDown: e => {
                            E.current = e.target === e.currentTarget
                        },
                        ownerState: S,
                        children: qr(Rl, et({
                            as: v,
                            elevation: 24,
                            role: "dialog",
                            "aria-describedby": r,
                            "aria-labelledby": C
                        }, g, {
                            className: dt(k.paper, g.className),
                            ownerState: S,
                            children: qr(kl.Provider, {
                                value: O,
                                children: s
                            })
                        }))
                    })
                }))
            }))
        }));
    var Al = Ml;

    function Il(e) {
        return ji("MuiDialogActions", e)
    }
    Di("MuiDialogActions", ["root", "spacing"]);
    const Nl = ["className", "disableSpacing"],
        Ll = Ba("div", {
            name: "MuiDialogActions",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, !n.disableSpacing && t.spacing]
            }
        })((({
            ownerState: e
        }) => et({
            display: "flex",
            alignItems: "center",
            padding: 8,
            justifyContent: "flex-end",
            flex: "0 0 auto"
        }, !e.disableSpacing && {
            "& > :not(:first-of-type)": {
                marginLeft: 8
            }
        }))),
        jl = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiDialogActions"
                }),
                {
                    className: r,
                    disableSpacing: o = !1
                } = n,
                i = tt(n, Nl),
                a = et({}, n, {
                    disableSpacing: o
                }),
                s = (e => {
                    const {
                        classes: t,
                        disableSpacing: n
                    } = e;
                    return Mi({
                        root: ["root", !n && "spacing"]
                    }, Il, t)
                })(a);
            return qr(Ll, et({
                className: dt(s.root, r),
                ownerState: a,
                ref: t
            }, i))
        }));
    var Dl = jl;

    function $l(e) {
        return ji("MuiTypography", e)
    }
    Di("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
    const Bl = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
        zl = Ba("span", {
            name: "MuiTypography",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.variant && t[n.variant], "inherit" !== n.align && t[`align${It(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            margin: 0
        }, t.variant && e.typography[t.variant], "inherit" !== t.align && {
            textAlign: t.align
        }, t.noWrap && {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }, t.gutterBottom && {
            marginBottom: "0.35em"
        }, t.paragraph && {
            marginBottom: 16
        }))),
        Fl = {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h6",
            subtitle2: "h6",
            body1: "p",
            body2: "p",
            inherit: "p"
        },
        Wl = {
            primary: "primary.main",
            textPrimary: "text.primary",
            secondary: "secondary.main",
            textSecondary: "text.secondary",
            error: "error.main"
        },
        Hl = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTypography"
                }),
                r = (e => Wl[e] || e)(n.color),
                o = ri(et({}, n, {
                    color: r
                })),
                {
                    align: i = "inherit",
                    className: a,
                    component: s,
                    gutterBottom: c = !1,
                    noWrap: l = !1,
                    paragraph: u = !1,
                    variant: d = "body1",
                    variantMapping: p = Fl
                } = o,
                f = tt(o, Bl),
                h = et({}, o, {
                    align: i,
                    color: r,
                    className: a,
                    component: s,
                    gutterBottom: c,
                    noWrap: l,
                    paragraph: u,
                    variant: d,
                    variantMapping: p
                }),
                m = s || (u ? "p" : p[d] || Fl[d]) || "span",
                v = (e => {
                    const {
                        align: t,
                        gutterBottom: n,
                        noWrap: r,
                        paragraph: o,
                        variant: i,
                        classes: a
                    } = e;
                    return Mi({
                        root: ["root", i, "inherit" !== e.align && `align${It(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
                    }, $l, a)
                })(h);
            return qr(zl, et({
                as: m,
                ref: t,
                ownerState: h,
                className: dt(v.root, a)
            }, f))
        }));
    var Ul = Hl;

    function ql(e) {
        return ji("MuiDialogTitle", e)
    }
    var Vl = Di("MuiDialogTitle", ["root"]);
    const Gl = ["className", "id"],
        Kl = Ba(Ul, {
            name: "MuiDialogTitle",
            slot: "Root",
            overridesResolver: (e, t) => t.root
        })({
            padding: "16px 24px",
            flex: "0 0 auto"
        }),
        Xl = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiDialogTitle"
                }),
                {
                    className: r,
                    id: o
                } = n,
                i = tt(n, Gl),
                a = n,
                s = (e => {
                    const {
                        classes: t
                    } = e;
                    return Mi({
                        root: ["root"]
                    }, ql, t)
                })(a),
                {
                    titleId: c = o
                } = ne(kl);
            return qr(Kl, et({
                component: "h2",
                className: dt(s.root, r),
                ownerState: a,
                ref: t,
                variant: "h6",
                id: c
            }, i))
        }));
    var Yl = Xl;
    var Jl = j({});

    function Ql(e) {
        return ji("MuiList", e)
    }
    Di("MuiList", ["root", "padding", "dense", "subheader"]);
    const Zl = ["children", "className", "component", "dense", "disablePadding", "subheader"],
        eu = Ba("ul", {
            name: "MuiList",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
            }
        })((({
            ownerState: e
        }) => et({
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "relative"
        }, !e.disablePadding && {
            paddingTop: 8,
            paddingBottom: 8
        }, e.subheader && {
            paddingTop: 0
        }))),
        tu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiList"
                }),
                {
                    children: r,
                    className: o,
                    component: i = "ul",
                    dense: a = !1,
                    disablePadding: s = !1,
                    subheader: c
                } = n,
                l = tt(n, Zl),
                u = ee((() => ({
                    dense: a
                })), [a]),
                d = et({}, n, {
                    component: i,
                    dense: a,
                    disablePadding: s
                }),
                p = (e => {
                    const {
                        classes: t,
                        disablePadding: n,
                        dense: r,
                        subheader: o
                    } = e;
                    return Mi({
                        root: ["root", !n && "padding", r && "dense", o && "subheader"]
                    }, Ql, t)
                })(d);
            return qr(Jl.Provider, {
                value: u,
                children: qr(eu, et({
                    as: i,
                    className: dt(p.root, o),
                    ref: t,
                    ownerState: d
                }, l, {
                    children: [c, r]
                }))
            })
        }));
    var nu = tu;

    function ru(e) {
        return ji("MuiListItemButton", e)
    }
    var ou = Di("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
    const iu = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected"],
        au = Ba(Bc, {
            shouldForwardProp: e => Da(e) || "classes" === e,
            name: "MuiListItemButton",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.dense && t.dense, "flex-start" === n.alignItems && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            textDecoration: "none",
            boxSizing: "border-box",
            textAlign: "left",
            paddingTop: 8,
            paddingBottom: 8,
            transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest
            }),
            "&:hover": {
                textDecoration: "none",
                backgroundColor: e.palette.action.hover,
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            },
            [`&.${ou.selected}`]: {
                backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity),
                [`&.${ou.focusVisible}`]: {
                    backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                }
            },
            [`&.${ou.selected}:hover`]: {
                backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity)
                }
            },
            [`&.${ou.focusVisible}`]: {
                backgroundColor: e.palette.action.focus
            },
            [`&.${ou.disabled}`]: {
                opacity: e.palette.action.disabledOpacity
            }
        }, t.divider && {
            borderBottom: `1px solid ${e.palette.divider}`,
            backgroundClip: "padding-box"
        }, "flex-start" === t.alignItems && {
            alignItems: "flex-start"
        }, !t.disableGutters && {
            paddingLeft: 16,
            paddingRight: 16
        }, t.dense && {
            paddingTop: 4,
            paddingBottom: 4
        }))),
        su = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiListItemButton"
                }),
                {
                    alignItems: r = "center",
                    autoFocus: o = !1,
                    component: i = "div",
                    children: a,
                    dense: s = !1,
                    disableGutters: c = !1,
                    divider: l = !1,
                    focusVisibleClassName: u,
                    selected: d = !1
                } = n,
                p = tt(n, iu),
                f = ne(Jl),
                h = {
                    dense: s || f.dense || !1,
                    alignItems: r,
                    disableGutters: c
                },
                m = Q(null);
            zt((() => {
                o && m.current && m.current.focus()
            }), [o]);
            const v = et({}, n, {
                    alignItems: r,
                    dense: h.dense,
                    disableGutters: c,
                    divider: l,
                    selected: d
                }),
                g = (e => {
                    const {
                        alignItems: t,
                        classes: n,
                        dense: r,
                        disabled: o,
                        disableGutters: i,
                        divider: a,
                        selected: s
                    } = e;
                    return et({}, n, Mi({
                        root: ["root", r && "dense", !i && "gutters", a && "divider", o && "disabled", "flex-start" === t && "alignItemsFlexStart", s && "selected"]
                    }, ru, n))
                })(v),
                _ = qt(m, t);
            return qr(Jl.Provider, {
                value: h,
                children: qr(au, et({
                    ref: _,
                    component: i,
                    focusVisibleClassName: dt(g.focusVisible, u),
                    ownerState: v
                }, p, {
                    classes: g,
                    children: a
                }))
            })
        }));
    var cu = su;

    function lu(e) {
        return ji("MuiListItem", e)
    }
    var uu = Di("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]);

    function du(e) {
        return ji("MuiListItemSecondaryAction", e)
    }
    Di("MuiListItemSecondaryAction", ["root", "disableGutters"]);
    const pu = ["className"],
        fu = Ba("div", {
            name: "MuiListItemSecondaryAction",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.disableGutters && t.disableGutters]
            }
        })((({
            ownerState: e
        }) => et({
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)"
        }, e.disableGutters && {
            right: 0
        }))),
        hu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiListItemSecondaryAction"
                }),
                {
                    className: r
                } = n,
                o = tt(n, pu),
                i = et({}, n, {
                    disableGutters: ne(Jl).disableGutters
                }),
                a = (e => {
                    const {
                        disableGutters: t,
                        classes: n
                    } = e;
                    return Mi({
                        root: ["root", t && "disableGutters"]
                    }, du, n)
                })(i);
            return qr(fu, et({
                className: dt(a.root, r),
                ownerState: i,
                ref: t
            }, o))
        }));
    hu.muiName = "ListItemSecondaryAction";
    var mu = hu;
    const vu = ["className"],
        gu = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected"],
        _u = Ba("div", {
            name: "MuiListItem",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.dense && t.dense, "flex-start" === n.alignItems && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            textDecoration: "none",
            width: "100%",
            boxSizing: "border-box",
            textAlign: "left"
        }, !t.disablePadding && et({
            paddingTop: 8,
            paddingBottom: 8
        }, t.dense && {
            paddingTop: 4,
            paddingBottom: 4
        }, !t.disableGutters && {
            paddingLeft: 16,
            paddingRight: 16
        }, !!t.secondaryAction && {
            paddingRight: 48
        }), !!t.secondaryAction && {
            [`& > .${ou.root}`]: {
                paddingRight: 48
            }
        }, {
            [`&.${uu.focusVisible}`]: {
                backgroundColor: e.palette.action.focus
            },
            [`&.${uu.selected}`]: {
                backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity),
                [`&.${uu.focusVisible}`]: {
                    backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
                }
            },
            [`&.${uu.disabled}`]: {
                opacity: e.palette.action.disabledOpacity
            }
        }, "flex-start" === t.alignItems && {
            alignItems: "flex-start"
        }, t.divider && {
            borderBottom: `1px solid ${e.palette.divider}`,
            backgroundClip: "padding-box"
        }, t.button && {
            transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest
            }),
            "&:hover": {
                textDecoration: "none",
                backgroundColor: e.palette.action.hover,
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            },
            [`&.${uu.selected}:hover`]: {
                backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: Oi(e.palette.primary.main, e.palette.action.selectedOpacity)
                }
            }
        }, t.hasSecondaryAction && {
            paddingRight: 48
        }))),
        yu = Ba("li", {
            name: "MuiListItem",
            slot: "Container",
            overridesResolver: (e, t) => t.container
        })({
            position: "relative"
        }),
        bu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiListItem"
                }),
                {
                    alignItems: r = "center",
                    autoFocus: o = !1,
                    button: i = !1,
                    children: a,
                    className: s,
                    component: c,
                    components: l = {},
                    componentsProps: u = {},
                    ContainerComponent: d = "li",
                    ContainerProps: {
                        className: p
                    } = {},
                    dense: f = !1,
                    disabled: h = !1,
                    disableGutters: m = !1,
                    disablePadding: v = !1,
                    divider: g = !1,
                    focusVisibleClassName: _,
                    secondaryAction: y,
                    selected: b = !1
                } = n,
                x = tt(n.ContainerProps, vu),
                w = tt(n, gu),
                S = ne(Jl),
                k = {
                    dense: f || S.dense || !1,
                    alignItems: r,
                    disableGutters: m
                },
                E = Q(null);
            zt((() => {
                o && E.current && E.current.focus()
            }), [o]);
            const C = _e.toArray(a),
                O = C.length && jt(C[C.length - 1], ["ListItemSecondaryAction"]),
                T = et({}, n, {
                    alignItems: r,
                    autoFocus: o,
                    button: i,
                    dense: k.dense,
                    disabled: h,
                    disableGutters: m,
                    disablePadding: v,
                    divider: g,
                    hasSecondaryAction: O,
                    selected: b
                }),
                R = (e => {
                    const {
                        alignItems: t,
                        button: n,
                        classes: r,
                        dense: o,
                        disabled: i,
                        disableGutters: a,
                        disablePadding: s,
                        divider: c,
                        hasSecondaryAction: l,
                        selected: u
                    } = e;
			                    return Mi({
                        root: ["root", o && "dense", !a && "gutters", !s && "padding", c && "divider", i && "disabled", n && "button", "flex-start" === t && "alignItemsFlexStart", l && "secondaryAction", u && "selected"],
                        container: ["container"]
                    }, lu, r)
                })(T),
                P = qt(E, t),
                M = l.Root || _u,
                A = u.root || {},
                I = et({
                    className: dt(R.root, A.className, s),
                    disabled: h
                }, w);
            let N = c || "li";
            return i && (I.component = c || "div", I.focusVisibleClassName = dt(uu.focusVisible, _), N = Bc), O ? (N = I.component || c ? N : "div", "li" === d && ("li" === N ? N = "div" : "li" === I.component && (I.component = "div")), qr(Jl.Provider, {
                value: k,
                children: qr(yu, et({
                    as: d,
                    className: dt(R.container, p),
                    ref: P,
                    ownerState: T
                }, x, {
                    children: [qr(M, et({}, A, !Pi(M) && {
                        as: N,
                        ownerState: et({}, T, A.ownerState)
                    }, I, {
                        children: C
                    })), C.pop()]
                }))
            })) : qr(Jl.Provider, {
                value: k,
                children: qr(M, et({}, A, {
                    as: N,
                    ref: P,
                    ownerState: T
                }, !Pi(M) && {
                    ownerState: et({}, T, A.ownerState)
                }, I, {
                    children: [C, y && qr(mu, {
                        children: y
                    })]
                }))
            })
        }));
    var xu = bu;

    function wu(e) {
        return ji("MuiListItemText", e)
    }
    var Su = Di("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
    const ku = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"],
        Eu = Ba("div", {
            name: "MuiListItemText",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [{
                    [`& .${Su.primary}`]: t.primary
                }, {
                    [`& .${Su.secondary}`]: t.secondary
                }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense]
            }
        })((({
            ownerState: e
        }) => et({
            flex: "1 1 auto",
            minWidth: 0,
            marginTop: 4,
            marginBottom: 4
        }, e.primary && e.secondary && {
            marginTop: 6,
            marginBottom: 6
        }, e.inset && {
            paddingLeft: 56
        }))),
        Cu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiListItemText"
                }),
                {
                    children: r,
                    className: o,
                    disableTypography: i = !1,
                    inset: a = !1,
                    primary: s,
                    primaryTypographyProps: c,
                    secondary: l,
                    secondaryTypographyProps: u
                } = n,
                d = tt(n, ku),
                {
                    dense: p
                } = ne(Jl);
            let f = null != s ? s : r,
                h = l;
            const m = et({}, n, {
                    disableTypography: i,
                    inset: a,
                    primary: !!f,
                    secondary: !!h,
                    dense: p
                }),
                v = (e => {
                    const {
                        classes: t,
                        inset: n,
                        primary: r,
                        secondary: o,
                        dense: i
                    } = e;
                    return Mi({
                        root: ["root", n && "inset", i && "dense", r && o && "multiline"],
                        primary: ["primary"],
                        secondary: ["secondary"]
                    }, wu, t)
                })(m);
            return null == f || f.type === Ul || i || (f = qr(Ul, et({
                variant: p ? "body2" : "body1",
                className: v.primary,
                component: "span",
                display: "block"
            }, c, {
                children: f
            }))), null == h || h.type === Ul || i || (h = qr(Ul, et({
                variant: "body2",
                className: v.secondary,
                color: "text.secondary",
                display: "block"
            }, u, {
                children: h
            }))), qr(Eu, et({
                className: dt(v.root, o),
                ownerState: m,
                ref: t
            }, d, {
                children: [f, h]
            }))
        }));
    var Ou = Cu;
    var Tu = j();

    function Ru(e) {
        return ji("PrivateSwitchBase", e)
    }
    Di("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
    const Pu = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"],
        Mu = Ba(Bc, {
            skipSx: !0
        })((({
            ownerState: e
        }) => et({
            padding: 9,
            borderRadius: "50%"
        }, "start" === e.edge && {
            marginLeft: "small" === e.size ? -3 : -12
        }, "end" === e.edge && {
            marginRight: "small" === e.size ? -3 : -12
        }))),
        Au = Ba("input", {
            skipSx: !0
        })({
            cursor: "inherit",
            position: "absolute",
            opacity: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            zIndex: 1
        }),
        Iu = ve((function(e, t) {
            const {
                autoFocus: n,
                checked: r,
                checkedIcon: o,
                className: i,
                defaultChecked: a,
                disabled: s,
                disableFocusRipple: c = !1,
                edge: l = !1,
                icon: u,
                id: d,
                inputProps: p,
                inputRef: f,
                name: h,
                onBlur: m,
                onChange: v,
                onFocus: g,
                readOnly: _,
                required: y,
                tabIndex: b,
                type: x,
                value: w
            } = e, S = tt(e, Pu), [k, E] = Ht({
                controlled: r,
                default: Boolean(a),
                name: "SwitchBase",
                state: "checked"
            }), C = ne(Tu);
            let O = s;
            C && void 0 === O && (O = C.disabled);
            const T = "checkbox" === x || "radio" === x,
                R = et({}, e, {
                    checked: k,
                    disabled: O,
                    disableFocusRipple: c,
                    edge: l
                }),
                P = (e => {
                    const {
                        classes: t,
                        checked: n,
                        disabled: r,
                        edge: o
                    } = e;
                    return Mi({
                        root: ["root", n && "checked", r && "disabled", o && `edge${It(o)}`],
                        input: ["input"]
                    }, Ru, t)
                })(R);
            return qr(Mu, et({
                component: "span",
                className: dt(P.root, i),
                centerRipple: !0,
                focusRipple: !c,
                disabled: O,
                tabIndex: null,
                role: void 0,
                onFocus: e => {
                    g && g(e), C && C.onFocus && C.onFocus(e)
                },
                onBlur: e => {
                    m && m(e), C && C.onBlur && C.onBlur(e)
                },
                ownerState: R,
                ref: t
            }, S, {
                children: [qr(Au, et({
                    autoFocus: n,
                    checked: r,
                    defaultChecked: a,
                    className: P.input,
                    disabled: O,
                    id: T && d,
                    name: h,
                    onChange: e => {
                        if (e.nativeEvent.defaultPrevented) return;
                        const t = e.target.checked;
                        E(t), v && v(e, t)
                    },
                    readOnly: _,
                    ref: f,
                    required: y,
                    ownerState: R,
                    tabIndex: b,
                    type: x
                }, "checkbox" === x && void 0 === w ? {} : {
                    value: w
                }, p)), k ? o : u]
            }))
        }));
    var Nu = Iu;

    function Lu(e) {
        return ji("MuiSwitch", e)
    }
    var ju = Di("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]);
    const Du = ["className", "color", "edge", "size", "sx"],
        $u = Ba("span", {
            name: "MuiSwitch",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.edge && t[`edge${It(n.edge)}`], t[`size${It(n.size)}`]]
            }
        })((({
            ownerState: e
        }) => et({
            display: "inline-flex",
            width: 58,
            height: 38,
            overflow: "hidden",
            padding: 12,
            boxSizing: "border-box",
            position: "relative",
            flexShrink: 0,
            zIndex: 0,
            verticalAlign: "middle",
            "@media print": {
                colorAdjust: "exact"
            }
        }, "start" === e.edge && {
            marginLeft: -8
        }, "end" === e.edge && {
            marginRight: -8
        }, "small" === e.size && {
            width: 40,
            height: 24,
            padding: 7,
            [`& .${ju.thumb}`]: {
                width: 16,
                height: 16
            },
            [`& .${ju.switchBase}`]: {
                padding: 4,
                [`&.${ju.checked}`]: {
                    transform: "translateX(16px)"
                }
            }
        }))),
        Bu = Ba(Nu, {
            name: "MuiSwitch",
            slot: "SwitchBase",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.switchBase, {
                    [`& .${ju.input}`]: t.input
                }, "default" !== n.color && t[`color${It(n.color)}`]]
            }
        })((({
            theme: e
        }) => ({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            color: "light" === e.palette.mode ? e.palette.common.white : e.palette.grey[300],
            transition: e.transitions.create(["left", "transform"], {
                duration: e.transitions.duration.shortest
            }),
            [`&.${ju.checked}`]: {
                transform: "translateX(20px)"
            },
            [`&.${ju.disabled}`]: {
                color: "light" === e.palette.mode ? e.palette.grey[100] : e.palette.grey[600]
            },
            [`&.${ju.checked} + .${ju.track}`]: {
                opacity: .5
            },
            [`&.${ju.disabled} + .${ju.track}`]: {
                opacity: "light" === e.palette.mode ? .12 : .2
            },
            [`& .${ju.input}`]: {
                left: "-100%",
                width: "300%"
            }
        })), (({
            theme: e,
            ownerState: t
        }) => et({
            "&:hover": {
                backgroundColor: Oi(e.palette.action.active, e.palette.action.hoverOpacity),
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }
        }, "default" !== t.color && {
            [`&.${ju.checked}`]: {
                color: e.palette[t.color].main,
                "&:hover": {
                    backgroundColor: Oi(e.palette[t.color].main, e.palette.action.hoverOpacity),
                    "@media (hover: none)": {
                        backgroundColor: "transparent"
                    }
                },
                [`&.${ju.disabled}`]: {
                    color: "light" === e.palette.mode ? Ri(e.palette[t.color].main, .62) : Ti(e.palette[t.color].main, .55)
                }
            },
            [`&.${ju.checked} + .${ju.track}`]: {
                backgroundColor: e.palette[t.color].main
            }
        }))),
        zu = Ba("span", {
            name: "MuiSwitch",
            slot: "Track",
            overridesResolver: (e, t) => t.track
        })((({
            theme: e
        }) => ({
            height: "100%",
            width: "100%",
            borderRadius: 7,
            zIndex: -1,
            transition: e.transitions.create(["opacity", "background-color"], {
                duration: e.transitions.duration.shortest
            }),
            backgroundColor: "light" === e.palette.mode ? e.palette.common.black : e.palette.common.white,
            opacity: "light" === e.palette.mode ? .38 : .3
        }))),
        Fu = Ba("span", {
            name: "MuiSwitch",
            slot: "Thumb",
            overridesResolver: (e, t) => t.thumb
        })((({
            theme: e
        }) => ({
            boxShadow: e.shadows[1],
            backgroundColor: "currentColor",
            width: 20,
            height: 20,
            borderRadius: "50%"
        }))),
        Wu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiSwitch"
                }),
                {
                    className: r,
                    color: o = "primary",
                    edge: i = !1,
                    size: a = "medium",
                    sx: s
                } = n,
                c = tt(n, Du),
                l = et({}, n, {
                    color: o,
                    edge: i,
                    size: a
                }),
                u = (e => {
                    const {
                        classes: t,
                        edge: n,
                        size: r,
                        color: o,
                        checked: i,
                        disabled: a
                    } = e;
                    return et({}, t, Mi({
                        root: ["root", n && `edge${It(n)}`, `size${It(r)}`],
                        switchBase: ["switchBase", `color${It(o)}`, i && "checked", a && "disabled"],
                        thumb: ["thumb"],
                        track: ["track"],
                        input: ["input"]
                    }, Lu, t))
                })(l),
                d = qr(Fu, {
                    className: u.thumb,
                    ownerState: l
                });
            return qr($u, {
                className: dt(u.root, r),
                sx: s,
                ownerState: l,
                children: [qr(Bu, et({
                    type: "checkbox",
                    icon: d,
                    checkedIcon: d,
                    ref: t,
                    ownerState: l
                }, c, {
                    classes: et({}, u, {
                        root: u.switchBase
                    })
                })), qr(zu, {
                    className: u.track,
                    ownerState: l
                })]
            })
        }));
    var Hu = Wu;
    const Uu = function(e = {}) {
        const {
            defaultTheme: t,
            defaultClassName: n = "MuiBox-root",
            generateClassName: r
        } = e, o = Gr("div")(ti);
        return ve((function(e, i) {
            const a = di(t),
                s = ri(e),
                {
                    className: c,
                    component: l = "div"
                } = s,
                u = tt(s, pi);
            return qr(o, et({
                as: l,
                ref: i,
                className: dt(c, r ? r(n) : n),
                theme: a
            }, u))
        }))
    }({
        defaultTheme: Aa(),
        defaultClassName: "MuiBox-root",
        generateClassName: Ni.generate
    });
    var qu = Uu;

    function Vu(e) {
        return ji("MuiTab", e)
    }
    var Gu = Di("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper"]);
    const Ku = ["className", "disabled", "disableFocusRipple", "fullWidth", "icon", "iconPosition", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"],
        Xu = Ba(Bc, {
            name: "MuiTab",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${It(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({}, e.typography.button, {
            maxWidth: 360,
            minWidth: 90,
            position: "relative",
            minHeight: 48,
            flexShrink: 0,
            padding: "12px 16px",
            overflow: "hidden",
            whiteSpace: "normal",
            textAlign: "center"
        }, t.label && {
            flexDirection: "top" === t.iconPosition || "bottom" === t.iconPosition ? "column" : "row"
        }, {
            lineHeight: 1.25
        }, t.icon && t.label && {
            minHeight: 72,
            paddingTop: 9,
            paddingBottom: 9,
            [`& > .${Gu.iconWrapper}`]: et({}, "top" === t.iconPosition && {
                marginBottom: 6
            }, "bottom" === t.iconPosition && {
                marginTop: 6
            }, "start" === t.iconPosition && {
                marginRight: e.spacing(1)
            }, "end" === t.iconPosition && {
                marginLeft: e.spacing(1)
            })
        }, "inherit" === t.textColor && {
            color: "inherit",
            opacity: .6,
            [`&.${Gu.selected}`]: {
                opacity: 1
            },
            [`&.${Gu.disabled}`]: {
                opacity: e.palette.action.disabledOpacity
            }
        }, "primary" === t.textColor && {
            color: e.palette.text.secondary,
            [`&.${Gu.selected}`]: {
                color: e.palette.primary.main
            },
            [`&.${Gu.disabled}`]: {
                color: e.palette.text.disabled
            }
        }, "secondary" === t.textColor && {
            color: e.palette.text.secondary,
            [`&.${Gu.selected}`]: {
                color: e.palette.secondary.main
            },
            [`&.${Gu.disabled}`]: {
                color: e.palette.text.disabled
            }
        }, t.fullWidth && {
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 0,
            maxWidth: "none"
        }, t.wrapped && {
            fontSize: e.typography.pxToRem(12)
        }))),
        Yu = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTab"
                }),
                {
                    className: r,
                    disabled: o = !1,
                    disableFocusRipple: i = !1,
                    fullWidth: a,
                    icon: s,
                    iconPosition: c = "top",
                    indicator: l,
                    label: u,
                    onChange: d,
                    onClick: p,
                    onFocus: f,
                    selected: m,
                    selectionFollowsFocus: v,
                    textColor: g = "inherit",
                    value: _,
                    wrapped: y = !1
                } = n,
                b = tt(n, Ku),
                x = et({}, n, {
                    disabled: o,
                    disableFocusRipple: i,
                    selected: m,
                    icon: !!s,
                    iconPosition: c,
                    label: !!u,
                    fullWidth: a,
                    textColor: g,
                    wrapped: y
                }),
                w = (e => {
                    const {
                        classes: t,
                        textColor: n,
                        fullWidth: r,
                        wrapped: o,
                        icon: i,
                        label: a,
                        selected: s,
                        disabled: c
                    } = e;
                    return Mi({
                        root: ["root", i && a && "labelIcon", `textColor${It(n)}`, r && "fullWidth", o && "wrapped", s && "selected", c && "disabled"],
                        iconWrapper: ["iconWrapper"]
                    }, Vu, t)
                })(x),
                S = s && u && Fe(s) ? We(s, {
                    className: dt(w.iconWrapper, s.props.className)
                }) : s;
            return qr(Xu, et({
                focusRipple: !i,
                className: dt(w.root, r),
                ref: t,
                role: "tab",
                "aria-selected": m,
                disabled: o,
                onClick: e => {
                    !m && d && d(e, _), p && p(e)
                },
                onFocus: e => {
                    v && !m && d && d(e, _), f && f(e)
                },
                ownerState: x,
                tabIndex: m ? 0 : -1
            }, b, {
                children: [qr(h, "top" === c || "start" === c ? {
                    children: [S, u]
                } : {
                    children: [u, S]
                }), l]
            }))
        }));
    var Ju = Yu;
    const Qu = j(null);

    function Zu(e) {
        const {
            children: t,
            value: n
        } = e, r = function() {
            const [e, t] = K(null);
            return Y((() => {
                t(`mui-p-${Math.round(1e5*Math.random())}`)
            }), []), e
        }(), o = ee((() => ({
            idPrefix: r,
            value: n
        })), [r, n]);
        return qr(Qu.Provider, {
            value: o,
            children: t
        })
    }

    function ed() {
        return ne(Qu)
    }

    function td(e, t) {
        const {
            idPrefix: n
        } = e;
        return null === n ? null : `${e.idPrefix}-P-${t}`
    }

    function nd(e, t) {
        const {
            idPrefix: n
        } = e;
        return null === n ? null : `${e.idPrefix}-T-${t}`
    }

    function rd(e) {
        return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
    }
    const od = ["onChange"],
        id = {
            width: 99,
            height: 99,
            position: "absolute",
            top: -9999,
            overflow: "scroll"
        };
    var ad = qa(qr("path", {
            d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
        }), "KeyboardArrowLeft"),
        sd = qa(qr("path", {
            d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
        }), "KeyboardArrowRight");

    function cd(e) {
        return ji("MuiTabScrollButton", e)
    }
    var ld, ud, dd = Di("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
    const pd = ["className", "direction", "orientation", "disabled"],
        fd = Ba(Bc, {
            name: "MuiTabScrollButton",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.orientation && t[n.orientation]]
            }
        })((({
            ownerState: e
        }) => et({
            width: 40,
            flexShrink: 0,
            opacity: .8,
            [`&.${dd.disabled}`]: {
                opacity: 0
            }
        }, "vertical" === e.orientation && {
            width: "100%",
            height: 40,
            "& svg": {
                transform: `rotate(${e.isRtl?-90:90}deg)`
            }
        }))),
        hd = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTabScrollButton"
                }),
                {
                    className: r,
                    direction: o
                } = n,
                i = tt(n, pd),
                a = et({
                    isRtl: "rtl" === Na().direction
                }, n),
                s = (e => {
                    const {
                        classes: t,
                        orientation: n,
                        disabled: r
                    } = e;
                    return Mi({
                        root: ["root", n, r && "disabled"]
                    }, cd, t)
                })(a);
            return qr(fd, et({
                component: "div",
                className: dt(s.root, r),
                ref: t,
                role: null,
                ownerState: a,
                tabIndex: null
            }, i, {
                children: "left" === o ? ld || (ld = qr(ad, {
                    fontSize: "small"
                })) : ud || (ud = qr(sd, {
                    fontSize: "small"
                }))
            }))
        }));
    var md = hd;

    function vd(e) {
        return ji("MuiTabs", e)
    }
    var gd = Di("MuiTabs", ["root", "vertical", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
    const _d = ["aria-label", "aria-labelledby", "action", "centered", "children", "className", "component", "allowScrollButtonsMobile", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant", "visibleScrollbar"],
        yd = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild,
        bd = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild,
        xd = (e, t, n) => {
            let r = !1,
                o = n(e, t);
            for (; o;) {
                if (o === e.firstChild) {
                    if (r) return;
                    r = !0
                }
                const t = o.disabled || "true" === o.getAttribute("aria-disabled");
                if (o.hasAttribute("tabindex") && !t) return void o.focus();
                o = n(e, o)
            }
        },
        wd = Ba("div", {
            name: "MuiTabs",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [{
                    [`& .${gd.scrollButtons}`]: t.scrollButtons
                }, {
                    [`& .${gd.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
                }, t.root, n.vertical && t.vertical]
            }
        })((({
            ownerState: e,
            theme: t
        }) => et({
            overflow: "hidden",
            minHeight: 48,
            WebkitOverflowScrolling: "touch",
            display: "flex"
        }, e.vertical && {
            flexDirection: "column"
        }, e.scrollButtonsHideMobile && {
            [`& .${gd.scrollButtons}`]: {
                [t.breakpoints.down("sm")]: {
                    display: "none"
                }
            }
        }))),
        Sd = Ba("div", {
            name: "MuiTabs",
            slot: "Scroller",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.scroller, n.fixed && t.fixed, n.hideScrollbar && t.hideScrollbar, n.scrollableX && t.scrollableX, n.scrollableY && t.scrollableY]
            }
        })((({
            ownerState: e
        }) => et({
            position: "relative",
            display: "inline-block",
            flex: "1 1 auto",
            whiteSpace: "nowrap"
        }, e.fixed && {
            overflowX: "hidden",
            width: "100%"
        }, e.hideScrollbar && {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none"
            }
        }, e.scrollableX && {
            overflowX: "auto",
            overflowY: "hidden"
        }, e.scrollableY && {
            overflowY: "auto",
            overflowX: "hidden"
        }))),
        kd = Ba("div", {
            name: "MuiTabs",
            slot: "FlexContainer",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.flexContainer, n.vertical && t.flexContainerVertical, n.centered && t.centered]
            }
        })((({
            ownerState: e
        }) => et({
            display: "flex"
        }, e.vertical && {
            flexDirection: "column"
        }, e.centered && {
            justifyContent: "center"
        }))),
        Ed = Ba("span", {
            name: "MuiTabs",
            slot: "Indicator",
            overridesResolver: (e, t) => t.indicator
        })((({
            ownerState: e,
            theme: t
        }) => et({
            position: "absolute",
            height: 2,
            bottom: 0,
            width: "100%",
            transition: t.transitions.create()
        }, "primary" === e.indicatorColor && {
            backgroundColor: t.palette.primary.main
        }, "secondary" === e.indicatorColor && {
            backgroundColor: t.palette.secondary.main
        }, e.vertical && {
            height: "100%",
            width: 2,
            right: 0
        }))),
        Cd = Ba((function(e) {
            const {
                onChange: t
            } = e, n = tt(e, od), r = Q(), o = Q(null), i = () => {
                r.current = o.current.offsetHeight - o.current.clientHeight
            };
            return Y((() => {
                const e = Lt((() => {
                        const e = r.current;
                        i(), e !== r.current && t(r.current)
                    })),
                    n = $t(o.current);
                return n.addEventListener("resize", e), () => {
                    e.clear(), n.removeEventListener("resize", e)
                }
            }), [t]), Y((() => {
                i(), t(r.current)
            }), [t]), qr("div", et({
                style: id,
                ref: o
            }, n))
        }), {
            name: "MuiTabs",
            slot: "ScrollbarSize"
        })({
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
                display: "none"
            }
        }),
        Od = {},
        Td = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTabs"
                }),
                r = Na(),
                o = "rtl" === r.direction,
                {
                    "aria-label": i,
                    "aria-labelledby": a,
                    action: s,
                    centered: c = !1,
                    children: l,
                    className: u,
                    component: d = "div",
                    allowScrollButtonsMobile: p = !1,
                    indicatorColor: f = "primary",
                    onChange: h,
                    orientation: m = "horizontal",
                    ScrollButtonComponent: v = md,
                    scrollButtons: g = "auto",
                    selectionFollowsFocus: _,
                    TabIndicatorProps: y = {},
                    TabScrollButtonProps: b = {},
                    textColor: x = "primary",
                    value: w,
                    variant: S = "standard",
                    visibleScrollbar: k = !1
                } = n,
                E = tt(n, _d),
                C = "scrollable" === S,
                O = "vertical" === m,
                T = O ? "scrollTop" : "scrollLeft",
                R = O ? "top" : "left",
                P = O ? "bottom" : "right",
                M = O ? "clientHeight" : "clientWidth",
                A = O ? "height" : "width",
                I = et({}, n, {
                    component: d,
                    allowScrollButtonsMobile: p,
                    indicatorColor: f,
                    orientation: m,
                    vertical: O,
                    scrollButtons: g,
                    textColor: x,
                    variant: S,
                    visibleScrollbar: k,
                    fixed: !C,
                    hideScrollbar: C && !k,
                    scrollableX: C && !O,
                    scrollableY: C && O,
                    centered: c && !C,
                    scrollButtonsHideMobile: !p
                }),
                N = (e => {
                    const {
                        vertical: t,
                        fixed: n,
                        hideScrollbar: r,
                        scrollableX: o,
                        scrollableY: i,
                        centered: a,
                        scrollButtonsHideMobile: s,
                        classes: c
                    } = e;
                    return Mi({
                        root: ["root", t && "vertical"],
                        scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
                        flexContainer: ["flexContainer", t && "flexContainerVertical", a && "centered"],
                        indicator: ["indicator"],
                        scrollButtons: ["scrollButtons", s && "scrollButtonsHideMobile"],
                        scrollableX: [o && "scrollableX"],
                        hideScrollbar: [r && "hideScrollbar"]
                    }, vd, c)
                })(I),
                [L, j] = K(!1),
                [D, $] = K(Od),
                [B, z] = K({
                    start: !1,
                    end: !1
                }),
                [F, W] = K({
                    overflow: "hidden",
                    scrollbarWidth: 0
                }),
                H = new Map,
                U = Q(null),
                q = Q(null),
                V = () => {
                    const e = U.current;
                    let t, n;
                    if (e) {
                        const n = e.getBoundingClientRect();
                        t = {
                            clientWidth: e.clientWidth,
                            scrollLeft: e.scrollLeft,
                            scrollTop: e.scrollTop,
                            scrollLeftNormalized: rn(e, r.direction),
                            scrollWidth: e.scrollWidth,
                            top: n.top,
                            bottom: n.bottom,
                            left: n.left,
                            right: n.right
                        }
                    }
                    if (e && !1 !== w) {
                        const e = q.current.children;
                        if (e.length > 0) {
                            const t = e[H.get(w)];
                            n = t ? t.getBoundingClientRect() : null
                        }
                    }
                    return {
                        tabsMeta: t,
                        tabMeta: n
                    }
                },
                G = Ut((() => {
                    const {
                        tabsMeta: e,
                        tabMeta: t
                    } = V();
                    let n, r = 0;
                    if (O) n = "top", t && e && (r = t.top - e.top + e.scrollTop);
                    else if (n = o ? "right" : "left", t && e) {
                        const i = o ? e.scrollLeftNormalized + e.clientWidth - e.scrollWidth : e.scrollLeft;
                        r = (o ? -1 : 1) * (t[n] - e[n] + i)
                    }
                    const i = {
                        [n]: r,
                        [A]: t ? t[A] : 0
                    };
                    if (isNaN(D[n]) || isNaN(D[A])) $(i);
                    else {
                        const e = Math.abs(D[n] - i[n]),
                            t = Math.abs(D[A] - i[A]);
                        (e >= 1 || t >= 1) && $(i)
                    }
                })),
                X = (e, {
                    animation: t = !0
                } = {}) => {
                    t ? function(e, t, n, r = {}, o = (() => {})) {
                        const {
                            ease: i = rd,
                            duration: a = 300
                        } = r;
                        let s = null;
                        const c = t[e];
                        let l = !1;
                        const u = () => {
                                l = !0
                            },
                            d = r => {
                                if (l) return void o(new Error("Animation cancelled"));
                                null === s && (s = r);
                                const u = Math.min(1, (r - s) / a);
                                t[e] = i(u) * (n - c) + c, u >= 1 ? requestAnimationFrame((() => {
                                    o(null)
                                })) : requestAnimationFrame(d)
                            };
                        c === n ? o(new Error("Element already at target position")) : requestAnimationFrame(d)
                    }(T, U.current, e, {
                        duration: r.transitions.duration.standard
                    }) : U.current[T] = e
                },
                J = e => {
                    let t = U.current[T];
                    O ? t += e : (t += e * (o ? -1 : 1), t *= o && "reverse" === nn() ? -1 : 1), X(t)
                },
                ne = () => {
                    const e = U.current[M];
                    let t = 0;
                    const n = Array.from(q.current.children);
                    for (let r = 0; r < n.length; r += 1) {
                        const o = n[r];
                        if (t + o[M] > e) break;
                        t += o[M]
                    }
                    return t
                },
                re = () => {
                    J(-1 * ne())
                },
                oe = () => {
                    J(ne())
                },
                ie = te((e => {
                    W({
                        overflow: null,
                        scrollbarWidth: e
                    })
                }), []),
                ae = Ut((e => {
                    const {
                        tabsMeta: t,
                        tabMeta: n
                    } = V();
                    if (n && t)
                        if (n[R] < t[R]) {
                            const r = t[T] + (n[R] - t[R]);
                            X(r, {
                                animation: e
                            })
                        } else if (n[P] > t[P]) {
                        const r = t[T] + (n[P] - t[P]);
                        X(r, {
                            animation: e
                        })
                    }
                })),
                se = Ut((() => {
                    if (C && !1 !== g) {
                        const {
                            scrollTop: e,
                            scrollHeight: t,
                            clientHeight: n,
                            scrollWidth: i,
                            clientWidth: a
                        } = U.current;
                        let s, c;
                        if (O) s = e > 1, c = e < t - n - 1;
                        else {
                            const e = rn(U.current, r.direction);
                            s = o ? e < i - a - 1 : e > 1, c = o ? e > 1 : e < i - a - 1
                        }
                        s === B.start && c === B.end || z({
                            start: s,
                            end: c
                        })
                    }
                }));
            Y((() => {
                const e = Lt((() => {
                        G(), se()
                    })),
                    t = $t(U.current);
                let n;
                return t.addEventListener("resize", e), "undefined" != typeof ResizeObserver && (n = new ResizeObserver(e), Array.from(q.current.children).forEach((e => {
                    n.observe(e)
                }))), () => {
                    e.clear(), t.removeEventListener("resize", e), n && n.disconnect()
                }
            }), [G, se]);
            const ce = ee((() => Lt((() => {
                se()
            }))), [se]);
            Y((() => () => {
                ce.clear()
            }), [ce]), Y((() => {
                j(!0)
            }), []), Y((() => {
                G(), se()
            })), Y((() => {
                ae(Od !== D)
            }), [ae, D]), Z(s, (() => ({
                updateIndicator: G,
                updateScrollButtons: se
            })), [G, se]);
            const le = qr(Ed, et({}, y, {
                className: dt(N.indicator, y.className),
                ownerState: I,
                style: et({}, D, y.style)
            }));
            let ue = 0;
            const de = _e.map(l, (e => {
                    if (!Fe(e)) return null;
                    const t = void 0 === e.props.value ? ue : e.props.value;
                    H.set(t, ue);
                    const n = t === w;
                    return ue += 1, We(e, et({
                        fullWidth: "fullWidth" === S,
                        indicator: n && !L && le,
                        selected: n,
                        selectionFollowsFocus: _,
                        onChange: h,
                        textColor: x,
                        value: t
                    }, 1 !== ue || !1 !== w || e.props.tabIndex ? {} : {
                        tabIndex: 0
                    }))
                })),
                pe = (() => {
                    const e = {};
                    e.scrollbarSizeListener = C ? qr(Cd, {
                        onChange: ie,
                        className: dt(N.scrollableX, N.hideScrollbar)
                    }) : null;
                    const t = B.start || B.end,
                        n = C && ("auto" === g && t || !0 === g);
                    return e.scrollButtonStart = n ? qr(v, et({
                        orientation: m,
                        direction: o ? "right" : "left",
                        onClick: re,
                        disabled: !B.start
                    }, b, {
                        className: dt(N.scrollButtons, b.className)
                    })) : null, e.scrollButtonEnd = n ? qr(v, et({
                        orientation: m,
                        direction: o ? "left" : "right",
                        onClick: oe,
                        disabled: !B.end
                    }, b, {
                        className: dt(N.scrollButtons, b.className)
                    })) : null, e
                })();
            return qr(wd, et({
                className: dt(N.root, u),
                ownerState: I,
                ref: t,
                as: d
            }, E, {
                children: [pe.scrollButtonStart, pe.scrollbarSizeListener, qr(Sd, {
                    className: N.scroller,
                    ownerState: I,
                    style: {
                        overflow: F.overflow,
                        [O ? "margin" + (o ? "Left" : "Right") : "marginBottom"]: k ? void 0 : -F.scrollbarWidth
                    },
                    ref: U,
                    onScroll: ce,
                    children: [qr(kd, {
                        "aria-label": i,
                        "aria-labelledby": a,
                        "aria-orientation": "vertical" === m ? "vertical" : null,
                        className: N.flexContainer,
                        ownerState: I,
                        onKeyDown: e => {
                            const t = q.current,
                                n = Dt(t).activeElement;
                            if ("tab" !== n.getAttribute("role")) return;
                            let r = "horizontal" === m ? "ArrowLeft" : "ArrowUp",
                                i = "horizontal" === m ? "ArrowRight" : "ArrowDown";
                            switch ("horizontal" === m && o && (r = "ArrowRight", i = "ArrowLeft"), e.key) {
                                case r:
                                    e.preventDefault(), xd(t, n, bd);
                                    break;
                                case i:
                                    e.preventDefault(), xd(t, n, yd);
                                    break;
                                case "Home":
                                    e.preventDefault(), xd(t, null, yd);
                                    break;
                                case "End":
                                    e.preventDefault(), xd(t, null, bd)
                            }
                        },
                        ref: q,
                        role: "tablist",
                        children: de
                    }), L && le]
                }), pe.scrollButtonEnd]
            }))
        }));
    var Rd = Td;
    const Pd = ["children"];
    var Md = ve((function(e, t) {
        const {
            children: n
        } = e, r = tt(e, Pd), o = ed();
        if (null === o) throw new TypeError("No TabContext provided");
        const i = _e.map(n, (e => Fe(e) ? We(e, {
            "aria-controls": td(o, e.props.value),
            id: nd(o, e.props.value)
        }) : null));
        return qr(Rd, et({}, r, {
            ref: t,
            value: o.value,
            children: i
        }))
    }));
    const Ad = e => e,
        Id = (() => {
            let e = Ad;
            return {
                configure(t) {
                    e = t
                },
                generate: t => e(t),
                reset() {
                    e = Ad
                }
            }
        })();
    var Nd = Id;
    const Ld = {
        active: "Mui-active",
        checked: "Mui-checked",
        completed: "Mui-completed",
        disabled: "Mui-disabled",
        error: "Mui-error",
        expanded: "Mui-expanded",
        focused: "Mui-focused",
        focusVisible: "Mui-focusVisible",
        required: "Mui-required",
        selected: "Mui-selected"
    };

    function jd(e, t) {
        return Ld[t] || `${Nd.generate(e)}-${t}`
    }

    function Dd(e) {
        return jd("MuiTabPanel", e)
    }! function(e, t) {
        const n = {};
        t.forEach((t => {
            n[t] = jd(e, t)
        }))
    }("MuiTabPanel", ["root"]);
    const $d = ["children", "className", "value"],
        Bd = e => {
            const {
                classes: t
            } = e;
            return function(e, t, n) {
                const r = {};
                return Object.keys(e).forEach((o => {
                    r[o] = e[o].reduce(((e, r) => (r && (n && n[r] && e.push(n[r]), e.push(t(r))), e)), []).join(" ")
                })), r
            }({
                root: ["root"]
            }, Dd, t)
        },
        zd = Ba("div", {
            name: "MuiTabPanel",
            slot: "Root",
            overridesResolver: (e, t) => t.root
        })((({
            theme: e
        }) => ({
            padding: e.spacing(3)
        }))),
        Fd = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiTabPanel"
                }),
                {
                    children: r,
                    className: o,
                    value: i
                } = n,
                a = tt(n, $d),
                s = et({}, n),
                c = Bd(s),
                l = ed();
            if (null === l) throw new TypeError("No TabContext provided");
            const u = td(l, i),
                d = nd(l, i);
            return qr(zd, et({
                "aria-labelledby": d,
                className: dt(c.root, o),
                hidden: i !== l.value,
                id: u,
                ref: t,
                role: "tabpanel",
                ownerState: s
            }, a, {
                children: i === l.value && r
            }))
        }));
    var Wd = Fd,
        Hd = {},
        Ud = {
            exports: {}
        };
    ! function(e) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    }(Ud);
    var qd = {},
        Vd = Ve(Va);
    ! function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return t.createSvgIcon
            }
        });
        var t = Vd
    }(qd);
    var Gd, Kd, Xd, Yd, Jd, Qd, Zd, ep, tp = {},
        np = {},
        rp = {},
        op = [],
        ip = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function ap(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function sp(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function cp(e, t, n) {
        var r, o, i, a = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
        if (arguments.length > 2 && (a.children = arguments.length > 3 ? Gd.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
        return lp(e, a, r, o, null)
    }

    function lp(e, t, n, r, o) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++Xd : o
        };
        return null == o && null != Kd.vnode && Kd.vnode(i), i
    }

    function up(e) {
        return e.children
    }

    function dp(e, t) {
        this.props = e, this.context = t
    }

    function pp(e, t) {
        if (null == t) return e.__ ? pp(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? pp(e) : null
    }

    function fp(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return fp(e)
        }
    }

    function hp(e) {
        (!e.__d && (e.__d = !0) && Jd.push(e) && !mp.__r++ || Zd !== Kd.debounceRendering) && ((Zd = Kd.debounceRendering) || Qd)(mp)
    }

    function mp() {
        for (var e; mp.__r = Jd.length;) e = Jd.sort((function(e, t) {
            return e.__v.__b - t.__v.__b
        })), Jd = [], e.some((function(e) {
            var t, n, r, o, i, a;
            e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = ap({}, o)).__v = o.__v + 1, Sp(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? pp(o) : i, o.__h), kp(n, o), o.__e != i && fp(o)))
        }))
    }

    function vp(e, t, n, r, o, i, a, s, c, l) {
        var u, d, p, f, h, m, v, g = r && r.__k || op,
            _ = g.length;
        for (n.__k = [], u = 0; u < t.length; u++)
            if (null != (f = n.__k[u] = null == (f = t[u]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? lp(null, f, null, null, f) : Array.isArray(f) ? lp(up, {
                    children: f
                }, null, null, null) : f.__b > 0 ? lp(f.type, f.props, f.key, null, f.__v) : f)) {
                if (f.__ = n, f.__b = n.__b + 1, null === (p = g[u]) || p && f.key == p.key && f.type === p.type) g[u] = void 0;
                else
                    for (d = 0; d < _; d++) {
                        if ((p = g[d]) && f.key == p.key && f.type === p.type) {
                            g[d] = void 0;
                            break
                        }
                        p = null
                    }
                Sp(e, f, p = p || rp, o, i, a, s, c, l), h = f.__e, (d = f.ref) && p.ref != d && (v || (v = []), p.ref && v.push(p.ref, null, f), v.push(d, f.__c || h, f)), null != h ? (null == m && (m = h), "function" == typeof f.type && f.__k === p.__k ? f.__d = c = gp(f, c, e) : c = _p(e, f, p, g, h, c), "function" == typeof n.type && (n.__d = c)) : c && p.__e == c && c.parentNode != e && (c = pp(p))
            } for (n.__e = m, u = _; u--;) null != g[u] && ("function" == typeof n.type && null != g[u].__e && g[u].__e == n.__d && (n.__d = pp(r, u + 1)), Op(g[u], g[u]));
        if (v)
            for (u = 0; u < v.length; u++) Cp(v[u], v[++u], v[++u])
    }

    function gp(e, t, n) {
        for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? gp(r, t, n) : _p(n, r, r, o, r.__e, t));
        return t
    }

    function _p(e, t, n, r, o, i) {
        var a, s, c;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
            else {
                for (s = i, c = 0;
                    (s = s.nextSibling) && c < r.length; c += 2)
                    if (s == o) break e;
                e.insertBefore(o, i), a = i
            } return void 0 !== a ? a : o.nextSibling
    }

    function yp(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || ip.test(t) ? n : n + "px"
    }

    function bp(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""), r)
                    for (t in r) n && t in n || yp(e.style, t, "");
                if (n)
                    for (t in n) r && n[t] === r[t] || yp(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? wp : xp, i) : e.removeEventListener(t, i ? wp : xp, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function xp(e) {
        this.l[e.type + !1](Kd.event ? Kd.event(e) : e)
    }

    function wp(e) {
        this.l[e.type + !0](Kd.event ? Kd.event(e) : e)
    }

    function Sp(e, t, n, r, o, i, a, s, c) {
        var l, u, d, p, f, h, m, v, g, _, y, b = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (c = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (l = Kd.__b) && l(t);
        try {
            e: if ("function" == typeof b) {
                if (v = t.props, g = (l = b.contextType) && r[l.__c], _ = l ? g ? g.props.value : l.__ : r, n.__c ? m = (u = t.__c = n.__c).__ = u.__E : ("prototype" in b && b.prototype.render ? t.__c = u = new b(v, _) : (t.__c = u = new dp(v, _), u.constructor = b, u.render = Tp), g && g.sub(u), u.props = v, u.state || (u.state = {}), u.context = _, u.__n = r, d = u.__d = !0, u.__h = []), null == u.__s && (u.__s = u.state), null != b.getDerivedStateFromProps && (u.__s == u.state && (u.__s = ap({}, u.__s)), ap(u.__s, b.getDerivedStateFromProps(v, u.__s))), p = u.props, f = u.state, d) null == b.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
                else {
                    if (null == b.getDerivedStateFromProps && v !== p && null != u.componentWillReceiveProps && u.componentWillReceiveProps(v, _), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(v, u.__s, _) || t.__v === n.__v) {
                        u.props = v, u.state = u.__s, t.__v !== n.__v && (u.__d = !1), u.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                            e && (e.__ = t)
                        })), u.__h.length && a.push(u);
                        break e
                    }
                    null != u.componentWillUpdate && u.componentWillUpdate(v, u.__s, _), null != u.componentDidUpdate && u.__h.push((function() {
                        u.componentDidUpdate(p, f, h)
                    }))
                }
                u.context = _, u.props = v, u.state = u.__s, (l = Kd.__r) && l(t), u.__d = !1, u.__v = t, u.__P = e, l = u.render(u.props, u.state, u.context), u.state = u.__s, null != u.getChildContext && (r = ap(ap({}, r), u.getChildContext())), d || null == u.getSnapshotBeforeUpdate || (h = u.getSnapshotBeforeUpdate(p, f)), y = null != l && l.type === up && null == l.key ? l.props.children : l, vp(e, Array.isArray(y) ? y : [y], t, n, r, o, i, a, s, c), u.base = t.__e, t.__h = null, u.__h.length && a.push(u), m && (u.__E = u.__ = null), u.__e = !1
            } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ep(n.__e, t, n, r, o, i, a, c);
            (l = Kd.diffed) && l(t)
        }
        catch (e) {
            t.__v = null, (c || null != i) && (t.__e = s, t.__h = !!c, i[i.indexOf(s)] = null), Kd.__e(e, t, n)
        }
    }

    function kp(e, t) {
        Kd.__c && Kd.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
                    e.call(t)
                }))
            } catch (e) {
                Kd.__e(e, t.__v)
            }
        }))
    }

    function Ep(e, t, n, r, o, i, a, s) {
        var c, l, u, d = n.props,
            p = t.props,
            f = t.type,
            h = 0;
        if ("svg" === f && (o = !0), null != i)
            for (; h < i.length; h++)
                if ((c = i[h]) && "setAttribute" in c == !!f && (f ? c.localName === f : 3 === c.nodeType)) {
                    e = c, i[h] = null;
                    break
                } if (null == e) {
            if (null === f) return document.createTextNode(p);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p), i = null, s = !1
        }
        if (null === f) d === p || s && e.data === p || (e.data = p);
        else {
            if (i = i && Gd.call(e.childNodes), l = (d = n.props || rp).dangerouslySetInnerHTML, u = p.dangerouslySetInnerHTML, !s) {
                if (null != i)
                    for (d = {}, h = 0; h < e.attributes.length; h++) d[e.attributes[h].name] = e.attributes[h].value;
                (u || l) && (u && (l && u.__html == l.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
            }
            if (function(e, t, n, r, o) {
                    var i;
                    for (i in n) "children" === i || "key" === i || i in t || bp(e, i, null, n[i], r);
                    for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || bp(e, i, t[i], n[i], r)
                }(e, p, d, o, s), u) t.__k = [];
            else if (h = t.props.children, vp(e, Array.isArray(h) ? h : [h], t, n, r, o && "foreignObject" !== f, i, a, i ? i[0] : n.__k && pp(n, 0), s), null != i)
                for (h = i.length; h--;) null != i[h] && sp(i[h]);
            s || ("value" in p && void 0 !== (h = p.value) && (h !== d.value || h !== e.value || "progress" === f && !h) && bp(e, "value", h, d.value, !1), "checked" in p && void 0 !== (h = p.checked) && h !== e.checked && bp(e, "checked", h, d.checked, !1))
        }
        return e
    }

    function Cp(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            Kd.__e(e, n)
        }
    }

    function Op(e, t, n) {
        var r, o;
        if (Kd.unmount && Kd.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Cp(r, null, t)), null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                Kd.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (o = 0; o < r.length; o++) r[o] && Op(r[o], t, "function" != typeof e.type);
        n || null == e.__e || sp(e.__e), e.__e = e.__d = void 0
    }

    function Tp(e, t, n) {
        return this.constructor(e, n)
    }

    function Rp(e, t, n) {
        var r, o, i;
        Kd.__ && Kd.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], Sp(t, e = (!r && n || t).__k = cp(up, null, [e]), o || rp, rp, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? Gd.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), kp(i, e)
    }
    Gd = op.slice, Kd = {
        __e: function(e, t) {
            for (var n, r, o; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, Xd = 0, Yd = function(e) {
        return null != e && void 0 === e.constructor
    }, dp.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = ap({}, this.state), "function" == typeof e && (e = e(ap({}, n), this.props)), e && ap(n, e), null != e && this.__v && (t && this.__h.push(t), hp(this))
    }, dp.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), hp(this))
    }, dp.prototype.render = up, Jd = [], Qd = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, mp.__r = 0, ep = 0, np.render = Rp, np.hydrate = function e(t, n) {
        Rp(t, n, e)
    }, np.createElement = cp, np.h = cp, np.Fragment = up, np.createRef = function() {
        return {
            current: null
        }
    }, np.isValidElement = Yd, np.Component = dp, np.cloneElement = function(e, t, n) {
        var r, o, i, a = ap({}, e.props);
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
        return arguments.length > 2 && (a.children = arguments.length > 3 ? Gd.call(arguments, 2) : n), lp(e.type, a, r || e.key, o || e.ref, null)
    }, np.createContext = function(e, t) {
        var n = {
            __c: t = "__cC" + ep++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                var n, r;
                return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                    return r
                }, this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.some(hp)
                }, this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1), t && t.call(e)
                    }
                }), e.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }, np.toChildArray = function e(t, n) {
        return n = n || [], null == t || "boolean" == typeof t || (Array.isArray(t) ? t.some((function(t) {
            e(t, n)
        })) : n.push(t)), n
    }, np.options = Kd;
    var Pp = np,
        Mp = 0;

    function Ap(e, t, n, r, o) {
        var i, a, s = {};
        for (a in t) "ref" == a ? i = t[a] : s[a] = t[a];
        var c = {
            type: e,
            props: s,
            key: n,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: --Mp,
            __source: r,
            __self: o
        };
        if ("function" == typeof e && (i = e.defaultProps))
            for (a in i) void 0 === s[a] && (s[a] = i[a]);
        return Pp.options.vnode && Pp.options.vnode(c), c
    }
    tp.Fragment = Pp.Fragment, tp.jsx = Ap, tp.jsxs = Ap, tp.jsxDEV = Ap;
    var Ip = tp,
        Np = Ud.exports;
    Object.defineProperty(Hd, "__esModule", {
        value: !0
    });
    var Lp = Hd.default = void 0,
        jp = Ip,
        Dp = (0, Np(qd).default)((0, jp.jsx)("path", {
            d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
        }), "Settings");
    Lp = Hd.default = Dp;
    var $p = {},
        Bp = Ud.exports;
    Object.defineProperty($p, "__esModule", {
        value: !0
    });
    var zp = $p.default = void 0,
        Fp = Ip,
        Wp = (0, Bp(qd).default)((0, Fp.jsx)("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        }), "Info");

    function Hp() {
        const [e, t] = K(!1), [n, r] = yc(), o = () => {
            t(!1)
        }, [i, a] = K("setting"), s = Ba(Hu)((({
            theme: e
        }) => ({
            padding: 8,
            "& .MuiSwitch-track": {
                borderRadius: 11,
                "&:before, &:after": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 16,
                    height: 16
                },
                "&:before": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(e.palette.getContrastText(e.palette.primary.main))}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                    left: 12
                },
                "&:after": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(e.palette.getContrastText(e.palette.primary.main))}" d="M19,13H5V11H19V13Z" /></svg>')`,
                    right: 12
                }
            },
            "& .MuiSwitch-thumb": {
                boxShadow: "none",
                width: 16,
                height: 16,
                margin: 2
            }
        })));
        return p(h, null, p(qc, {
            onClick: () => {
                t(!0)
            }
        }, p(Lp, null)), p(Al, {
            open: e,
            onClose: o
        }, p(Yl, null, fc.title), p(Zu, {
            value: i
        }, p(qu, {
            sx: {
                borderBottom: 1,
                borderColor: "divider"
            }
        }, p(Md, {
            onChange: (e, t) => {
                a(t)
            },
            variant: "fullWidth"
        }, p(Ju, {
            icon: p(Lp, null),
            label: fc.setting.title,
            value: "setting"
        }), p(Ju, {
            icon: p(zp, null),
            label: fc.about.title,
            value: "about"
        }))), p(Wd, {
            value: "setting",
            sx: {
                padding: 0
            }
        }, p(nu, null, n.map((({
            id: e,
            enabled: t,
            label: o,
            description: i
        }) => p(xu, null, p(cu, {
            onClick: () => (e => {
                const t = n.map((t => (t.id === e && (t.enabled = !t.enabled), t)));
                r(t)
            })(e)
        }, p(Ou, {
            primary: o,
            secondary: i
        }), p(s, {
            edge: "end",
            checked: t
        }))))))), p(Wd, {
            value: "about"
        })), p(Dl, null, p(tl, {
            onClick: o
        }, fc.close))))
    }

    function Up() {
        return p(Ba("div")({
            position: "absolute",
            display: "flex",
            top: "0",
            height: "52px",
            justifyContent: "space-between",
            alignItems: "center",
            right: "60px"
        }), {
            className: "mui-fixed"
        }, p(mc, null), p(Hp, null))
    }

    function qp(e) {
        return ji("MuiDialogContent", e)
    }
    zp = $p.default = Wp, Di("MuiDialogContent", ["root", "dividers"]);
    const Vp = ["className", "dividers"],
        Gp = Ba("div", {
            name: "MuiDialogContent",
            slot: "Root",
            overridesResolver: (e, t) => {
                const {
                    ownerState: n
                } = e;
                return [t.root, n.dividers && t.dividers]
            }
        })((({
            theme: e,
            ownerState: t
        }) => et({
            flex: "1 1 auto",
            WebkitOverflowScrolling: "touch",
            overflowY: "auto",
            padding: "20px 24px"
        }, t.dividers ? {
            padding: "16px 24px",
            borderTop: `1px solid ${e.palette.divider}`,
            borderBottom: `1px solid ${e.palette.divider}`
        } : {
            [`.${Vl.root} + &`]: {
                paddingTop: 0
            }
        }))),
        Kp = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiDialogContent"
                }),
                {
                    className: r,
                    dividers: o = !1
                } = n,
                i = tt(n, Vp),
                a = et({}, n, {
                    dividers: o
                }),
                s = (e => {
                    const {
                        classes: t,
                        dividers: n
                    } = e;
                    return Mi({
                        root: ["root", n && "dividers"]
                    }, qp, t)
                })(a);
            return qr(Gp, et({
                className: dt(s.root, r),
                ownerState: a,
                ref: t
            }, i))
        }));
    var Xp = Kp;

    function Yp(e) {
        return ji("MuiDialogContentText", e)
    }
    Di("MuiDialogContentText", ["root"]);
    const Jp = ["children"],
        Qp = Ba(Ul, {
            shouldForwardProp: e => Da(e) || "classes" === e,
            name: "MuiDialogContentText",
            slot: "Root",
            overridesResolver: (e, t) => t.root
        })({}),
        Zp = ve((function(e, t) {
            const n = ja({
                    props: e,
                    name: "MuiDialogContentText"
                }),
                r = tt(n, Jp),
                o = (e => {
                    const {
                        classes: t
                    } = e;
                    return et({}, t, Mi({
                        root: ["root"]
                    }, Yp, t))
                })(r);
            return qr(Qp, et({
                component: "p",
                variant: "body1",
                color: "text.secondary",
                ref: t,
                ownerState: r
            }, n, {
                classes: o
            }))
        }));
    var ef = Zp;

    function tf() {
        const e = at(),
            t = lt((e => e.dialog || {})),
            n = () => e({
                type: ic
            });
        return p(Al, {
            open: t.open,
            onClose: n
        }, p(Yl, null, t.title || ""), p(Xp, null, p(ef, null, t.content || "")), p(Dl, null, t.actions && t.actions.map((e => p(tl, {
            onClick: () => {
                e.onClick(), n()
            },
            key: e.label
        }, e.label)))))
    }
    let nf = [];

    function rf() {
        const e = at(),
            t = lt((e => e.snackbar.notifications || [])),
            {
                enqueueSnackbar: n,
                closeSnackbar: r
            } = ne(us);
        return Y((() => {
            t.forEach((({
                key: t,
                message: o,
                options: i = {},
                dismissed: a = !1
            }) => {
                var s;
                a ? r(t) : nf.includes(t) || (n(o, {
                    key: t,
                    ...i,
                    onClose: (e, t, n) => {
                        i.onClose && i.onClose(e, t, n)
                    },
                    onExited: (t, n) => {
                        var r;
                        e((e => ({
                            type: nc,
                            key: e
                        }))(n)), r = n, nf = [...nf.filter((e => r !== e))]
                    }
                }), s = t, nf = [...nf, s])
            }))
        }), [t, r, n, e]), null
    }

    function of (e) {
        return qr(Vr, et({}, e, {
            defaultTheme: Ia
        }))
    }

    function af() {
        const [e] = yc(), t = {
            "full-editor": {
                ".mid-container": {
                    maxWidth: "95% !important"
                },
                ".SplitPane": {
                    minHeight: "calc(80vh)"
                },
                "#grammar-checker": {
                    minHeight: "calc(75vh)"
                },
                "#inputGridContainerRef": {
                    minHeight: "calc(75vh)"
                },
                "#cgr-container": {
                    minHeight: "calc(85vh)"
                }
            }
        };
        return p(h, null, Object.keys(t).filter((t => e.find((e => e.id === t && e.enabled)))).map((e => p( of , {
            styles: t[e]
        }))))
    }
    var sf = function(e, t) {
        return sf = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, sf(e, t)
    };

    function cf(e, t) {
        function n() {
            this.constructor = e
        }
        sf(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var lf, uf, df, pf, ff, hf = function() {
        return hf = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, hf.apply(this, arguments)
    };

    function mf(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function vf(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function gf() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(vf(arguments[t]));
        return e
    }

    function _f() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }! function(e) {
        e.Ok = "ok", e.Exited = "exited", e.Crashed = "crashed", e.Abnormal = "abnormal"
    }(lf || (lf = {})),
    function(e) {
        e.Ok = "ok", e.Errored = "errored", e.Crashed = "crashed"
    }(uf || (uf = {})),
    function(e) {
        e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
    }(df || (df = {})),
    function(e) {
        e.fromString = function(t) {
            switch (t) {
                case "debug":
                    return e.Debug;
                case "info":
                    return e.Info;
                case "warn":
                case "warning":
                    return e.Warning;
                case "error":
                    return e.Error;
                case "fatal":
                    return e.Fatal;
                case "critical":
                    return e.Critical;
                default:
                    return e.Log
            }
        }
    }(df || (df = {})),
    function(e) {
        e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
    }(pf || (pf = {})),
    function(e) {
        e.fromHttpCode = function(t) {
            return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
        }
    }(pf || (pf = {})),
    function(e) {
        e.BeforeSend = "before_send", e.EventProcessor = "event_processor", e.NetworkError = "network_error", e.QueueOverflow = "queue_overflow", e.RateLimitBackoff = "ratelimit_backoff", e.SampleRate = "sample_rate"
    }(ff || (ff = {}));
    var yf = {};

    function bf() {
        return _f() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : yf
    }

    function xf(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return Pf(e, Error)
        }
    }

    function wf(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }

    function Sf(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }

    function kf(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }

    function Ef(e) {
        return null === e || "object" != typeof e && "function" != typeof e
    }

    function Cf(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function Of(e) {
        return "undefined" != typeof Event && Pf(e, Event)
    }

    function Tf(e) {
        return "undefined" != typeof Element && Pf(e, Element)
    }

    function Rf(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }

    function Pf(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }

    function Mf(e, t) {
        try {
            for (var n = e, r = [], o = 0, i = 0, a = " > ".length, s = void 0; n && o++ < 5 && !("html" === (s = Af(n, t)) || o > 1 && i + r.length * a + s.length >= 80);) r.push(s), i += s.length, n = n.parentNode;
            return r.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }

    function Af(e, t) {
        var n, r, o, i, a, s, c, l = e,
            u = [];
        if (!l || !l.tagName) return "";
        u.push(l.tagName.toLowerCase());
        var d = (null === (n = t) || void 0 === n ? void 0 : n.length) ? t.filter((function(e) {
            return l.getAttribute(e)
        })).map((function(e) {
            return [e, l.getAttribute(e)]
        })) : null;
        if (null === (r = d) || void 0 === r ? void 0 : r.length) d.forEach((function(e) {
            u.push("[" + e[0] + '="' + e[1] + '"]')
        }));
        else if (l.id && u.push("#" + l.id), (o = l.className) && kf(o))
            for (i = o.split(/\s+/), c = 0; c < i.length; c++) u.push("." + i[c]);
        var p = ["type", "name", "title", "alt"];
        for (c = 0; c < p.length; c++) a = p[c], (s = l.getAttribute(a)) && u.push("[" + a + '="' + s + '"]');
        return u.join("")
    }
    var If = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array ? function(e, t) {
            return e.__proto__ = t, e
        } : function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
            return e
        });
    var Nf = function(e) {
            function t(t) {
                var n = this.constructor,
                    r = e.call(this, t) || this;
                return r.message = t, r.name = n.prototype.constructor.name, If(r, n.prototype), r
            }
            return cf(t, e), t
        }(Error),
        Lf = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
        jf = "Invalid Dsn",
        Df = function() {
            function e(e) {
                "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
            }
            return e.prototype.toString = function(e) {
                void 0 === e && (e = !1);
                var t = this,
                    n = t.host,
                    r = t.path,
                    o = t.pass,
                    i = t.port,
                    a = t.projectId;
                return t.protocol + "://" + t.publicKey + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
            }, e.prototype._fromString = function(e) {
                var t = Lf.exec(e);
                if (!t) throw new Nf(jf);
                var n = vf(t.slice(1), 6),
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    a = void 0 === i ? "" : i,
                    s = n[3],
                    c = n[4],
                    l = void 0 === c ? "" : c,
                    u = "",
                    d = n[5],
                    p = d.split("/");
                if (p.length > 1 && (u = p.slice(0, -1).join("/"), d = p.pop()), d) {
                    var f = d.match(/^\d+/);
                    f && (d = f[0])
                }
                this._fromComponents({
                    host: s,
                    pass: a,
                    path: u,
                    projectId: d,
                    port: l,
                    protocol: r,
                    publicKey: o
                })
            }, e.prototype._fromComponents = function(e) {
                "user" in e && !("publicKey" in e) && (e.publicKey = e.user), this.user = e.publicKey || "", this.protocol = e.protocol, this.publicKey = e.publicKey || "", this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
            }, e.prototype._validate = function() {
                var e = this;
                if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
                        if (!e[t]) throw new Nf("Invalid Dsn: " + t + " missing")
                    })), !this.projectId.match(/^\d+$/)) throw new Nf("Invalid Dsn: Invalid projectId " + this.projectId);
                if ("http" !== this.protocol && "https" !== this.protocol) throw new Nf("Invalid Dsn: Invalid protocol " + this.protocol);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new Nf("Invalid Dsn: Invalid port " + this.port)
            }, e
        }(),
        $f = bf(),
        Bf = "Sentry Logger ";

    function zf(e) {
        var t = bf();
        if (!("console" in t)) return e();
        var n = t.console,
            r = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
            e in t.console && n[e].__sentry_original__ && (r[e] = n[e], n[e] = n[e].__sentry_original__)
        }));
        var o = e();
        return Object.keys(r).forEach((function(e) {
            n[e] = r[e]
        })), o
    }
    var Ff = function() {
        function e() {
            this._enabled = !1
        }
        return e.prototype.disable = function() {
            this._enabled = !1
        }, e.prototype.enable = function() {
            this._enabled = !0
        }, e.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled && zf((function() {
                $f.console.log(Bf + "[Log]: " + e.join(" "))
            }))
        }, e.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled && zf((function() {
                $f.console.warn(Bf + "[Warn]: " + e.join(" "))
            }))
        }, e.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this._enabled && zf((function() {
                $f.console.error(Bf + "[Error]: " + e.join(" "))
            }))
        }, e
    }();
    $f.__SENTRY__ = $f.__SENTRY__ || {};
    var Wf = $f.__SENTRY__.logger || ($f.__SENTRY__.logger = new Ff),
        Hf = function() {
            function e() {
                this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
            }
            return e.prototype.memoize = function(e) {
                if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
                for (var t = 0; t < this._inner.length; t++) {
                    if (this._inner[t] === e) return !0
                }
                return this._inner.push(e), !1
            }, e.prototype.unmemoize = function(e) {
                if (this._hasWeakSet) this._inner.delete(e);
                else
                    for (var t = 0; t < this._inner.length; t++)
                        if (this._inner[t] === e) {
                            this._inner.splice(t, 1);
                            break
                        }
            }, e
        }(),
        Uf = "<anonymous>";

    function qf(e) {
        try {
            return e && "function" == typeof e && e.name || Uf
        } catch (e) {
            return Uf
        }
    }

    function Vf(e, t) {
        return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }

    function Gf(e, t) {
        if (!Array.isArray(e)) return "";
        for (var n = [], r = 0; r < e.length; r++) {
            var o = e[r];
            try {
                n.push(String(o))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }

    function Kf(e, t) {
        return !!kf(e) && (n = t, "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
        var n
    }

    function Xf(e, t, n) {
        if (t in e) {
            var r = e[t],
                o = n(r);
            if ("function" == typeof o) try {
                o.prototype = o.prototype || {}, Object.defineProperties(o, {
                    __sentry_original__: {
                        enumerable: !1,
                        value: r
                    }
                })
            } catch (e) {}
            e[t] = o
        }
    }

    function Yf(e) {
        if (xf(e)) {
            var t = e,
                n = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            return n
        }
        if (Of(e)) {
            var o = e,
                i = {};
            i.type = o.type;
            try {
                i.target = Tf(o.target) ? Mf(o.target) : Object.prototype.toString.call(o.target)
            } catch (e) {
                i.target = "<unknown>"
            }
            try {
                i.currentTarget = Tf(o.currentTarget) ? Mf(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
            } catch (e) {
                i.currentTarget = "<unknown>"
            }
            for (var a in "undefined" != typeof CustomEvent && Pf(e, CustomEvent) && (i.detail = o.detail), o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
            return i
        }
        return e
    }

    function Jf(e) {
        return function(e) {
            return ~-encodeURI(e).split(/%..|./).length
        }(JSON.stringify(e))
    }

    function Qf(e, t, n) {
        void 0 === t && (t = 3), void 0 === n && (n = 102400);
        var r = th(e, t);
        return Jf(r) > n ? Qf(e, t - 1, n) : r
    }

    function Zf(e, t) {
        return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && e === global ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : Cf(n = e) && "nativeEvent" in n && "preventDefault" in n && "stopPropagation" in n ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + qf(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e;
        var n
    }

    function eh(e, t, n, r) {
        if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new Hf), 0 === n) return function(e) {
            var t = Object.prototype.toString.call(e);
            if ("string" == typeof e) return e;
            if ("[object Object]" === t) return "[Object]";
            if ("[object Array]" === t) return "[Array]";
            var n = Zf(e);
            return Ef(n) ? n : t
        }(t);
        if (null != t && "function" == typeof t.toJSON) return t.toJSON();
        var o = Zf(t, e);
        if (Ef(o)) return o;
        var i = Yf(t),
            a = Array.isArray(t) ? [] : {};
        if (r.memoize(t)) return "[Circular ~]";
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = eh(s, i[s], n - 1, r));
        return r.unmemoize(t), a
    }

    function th(e, t) {
        try {
            return JSON.parse(JSON.stringify(e, (function(e, n) {
                return eh(e, n, t)
            })))
        } catch (e) {
            return "**non-serializable**"
        }
    }

    function nh(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(Yf(e));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= t) return Vf(n[0], t);
        for (var r = n.length; r > 0; r--) {
            var o = n.slice(0, r).join(", ");
            if (!(o.length > t)) return r === n.length ? o : Vf(o, t)
        }
        return ""
    }

    function rh(e) {
        var t, n;
        if (Cf(e)) {
            var r = e,
                o = {};
            try {
                for (var i = mf(Object.keys(r)), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value;
                    void 0 !== r[s] && (o[s] = rh(r[s]))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (n = i.return) && n.call(i)
                } finally {
                    if (t) throw t.error
                }
            }
            return o
        }
        return Array.isArray(e) ? e.map(rh) : e
    }

    function oh() {
        if (!("fetch" in bf())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (e) {
            return !1
        }
    }

    function ih(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }

    function ah() {
        if (!oh()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (e) {
            return !1
        }
    }
    var sh, ch = bf(),
        lh = {},
        uh = {};

    function dh(e) {
        if (!uh[e]) switch (uh[e] = !0, e) {
            case "console":
                ! function() {
                    if (!("console" in ch)) return;
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(e) {
                        e in ch.console && Xf(ch.console, e, (function(t) {
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                fh("console", {
                                    args: n,
                                    level: e
                                }), t && Function.prototype.apply.call(t, ch.console, n)
                            }
                        }))
                    }))
                }();
                break;
            case "dom":
                ! function() {
                    if (!("document" in ch)) return;
                    var e = fh.bind(null, "dom"),
                        t = _h(e, !0);
                    ch.document.addEventListener("click", t, !1), ch.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((function(t) {
                        var n = ch[t] && ch[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Xf(n, "addEventListener", (function(t) {
                            return function(n, r, o) {
                                if ("click" === n || "keypress" == n) try {
                                    var i = this,
                                        a = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
                                        s = a[n] = a[n] || {
                                            refCount: 0
                                        };
                                    if (!s.handler) {
                                        var c = _h(e);
                                        s.handler = c, t.call(this, n, c, o)
                                    }
                                    s.refCount += 1
                                } catch (e) {}
                                return t.call(this, n, r, o)
                            }
                        })), Xf(n, "removeEventListener", (function(e) {
                            return function(t, n, r) {
                                if ("click" === t || "keypress" == t) try {
                                    var o = this,
                                        i = o.__sentry_instrumentation_handlers__ || {},
                                        a = i[t];
                                    a && (a.refCount -= 1, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete o.__sentry_instrumentation_handlers__)
                                } catch (e) {}
                                return e.call(this, t, n, r)
                            }
                        })))
                    }))
                }();
                break;
            case "xhr":
                ! function() {
                    if (!("XMLHttpRequest" in ch)) return;
                    var e = [],
                        t = [],
                        n = XMLHttpRequest.prototype;
                    Xf(n, "open", (function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            var i = this,
                                a = r[1];
                            i.__sentry_xhr__ = {
                                method: kf(r[0]) ? r[0].toUpperCase() : r[0],
                                url: r[1]
                            }, kf(a) && "POST" === i.__sentry_xhr__.method && a.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                            var s = function() {
                                if (4 === i.readyState) {
                                    try {
                                        i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                    } catch (e) {}
                                    try {
                                        var n = e.indexOf(i);
                                        if (-1 !== n) {
                                            e.splice(n);
                                            var o = t.splice(n)[0];
                                            i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0])
                                        }
                                    } catch (e) {}
                                    fh("xhr", {
                                        args: r,
                                        endTimestamp: Date.now(),
                                        startTimestamp: Date.now(),
                                        xhr: i
                                    })
                                }
                            };
                            return "onreadystatechange" in i && "function" == typeof i.onreadystatechange ? Xf(i, "onreadystatechange", (function(e) {
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    return s(), e.apply(i, t)
                                }
                            })) : i.addEventListener("readystatechange", s), n.apply(i, r)
                        }
                    })), Xf(n, "send", (function(n) {
                        return function() {
                            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                            return e.push(this), t.push(r), fh("xhr", {
                                args: r,
                                startTimestamp: Date.now(),
                                xhr: this
                            }), n.apply(this, r)
                        }
                    }))
                }();
                break;
            case "fetch":
                ! function() {
                    if (! function() {
                            if (!oh()) return !1;
                            var e = bf();
                            if (ih(e.fetch)) return !0;
                            var t = !1,
                                n = e.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = ih(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (e) {
                                Wf.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                            return t
                        }()) return;
                    Xf(ch, "fetch", (function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = {
                                args: t,
                                fetchData: {
                                    method: hh(t),
                                    url: mh(t)
                                },
                                startTimestamp: Date.now()
                            };
                            return fh("fetch", hf({}, r)), e.apply(ch, t).then((function(e) {
                                return fh("fetch", hf(hf({}, r), {
                                    endTimestamp: Date.now(),
                                    response: e
                                })), e
                            }), (function(e) {
                                throw fh("fetch", hf(hf({}, r), {
                                    endTimestamp: Date.now(),
                                    error: e
                                })), e
                            }))
                        }
                    }))
                }();
                break;
            case "history":
                ! function() {
                    if (! function() {
                            var e = bf(),
                                t = e.chrome,
                                n = t && t.app && t.app.runtime,
                                r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                            return !n && r
                        }()) return;
                    var e = ch.onpopstate;

                    function t(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t.length > 2 ? t[2] : void 0;
                            if (r) {
                                var o = sh,
                                    i = String(r);
                                sh = i, fh("history", {
                                    from: o,
                                    to: i
                                })
                            }
                            return e.apply(this, t)
                        }
                    }
                    ch.onpopstate = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = ch.location.href,
                            o = sh;
                        if (sh = r, fh("history", {
                                from: o,
                                to: r
                            }), e) try {
                            return e.apply(this, t)
                        } catch (e) {}
                    }, Xf(ch.history, "pushState", t), Xf(ch.history, "replaceState", t)
                }();
                break;
            case "error":
		                yh = ch.onerror, ch.onerror = function(e, t, n, r, o) {
                    return fh("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: e,
                        url: t
                    }), !!yh && yh.apply(this, arguments)
                };
                break;
            case "unhandledrejection":
                bh = ch.onunhandledrejection, ch.onunhandledrejection = function(e) {
                    return fh("unhandledrejection", e), !bh || bh.apply(this, arguments)
                };
                break;
            default:
                Wf.warn("unknown instrumentation type:", e)
        }
    }

    function ph(e) {
        e && "string" == typeof e.type && "function" == typeof e.callback && (lh[e.type] = lh[e.type] || [], lh[e.type].push(e.callback), dh(e.type))
    }

    function fh(e, t) {
        var n, r;
        if (e && lh[e]) try {
            for (var o = mf(lh[e] || []), i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                try {
                    a(t)
                } catch (t) {
                    Wf.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + qf(a) + "\nError: " + t)
                }
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
    }

    function hh(e) {
        return void 0 === e && (e = []), "Request" in ch && Pf(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
    }

    function mh(e) {
        return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in ch && Pf(e[0], Request) ? e[0].url : String(e[0])
    }
    var vh, gh;

    function _h(e, t) {
        return void 0 === t && (t = !1),
            function(n) {
                if (n && gh !== n && ! function(e) {
                        if ("keypress" !== e.type) return !1;
                        try {
                            var t = e.target;
                            if (!t || !t.tagName) return !0;
                            if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1
                        } catch (e) {}
                        return !0
                    }(n)) {
                    var r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === vh || function(e, t) {
                        if (!e) return !0;
                        if (e.type !== t.type) return !0;
                        try {
                            if (e.target !== t.target) return !0
                        } catch (e) {}
                        return !1
                    }(gh, n)) && (e({
                        event: n,
                        name: r,
                        global: t
                    }), gh = n), clearTimeout(vh), vh = ch.setTimeout((function() {
                        vh = void 0
                    }), 1e3)
                }
            }
    }
    var yh = null;
    var bh = null;

    function xh() {
        var e = bf(),
            t = e.crypto || e.msCrypto;
        if (void 0 !== t && t.getRandomValues) {
            var n = new Uint16Array(8);
            t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
            var r = function(e) {
                for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                return t
            };
            return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        }))
    }

    function wh(e) {
        if (!e) return {};
        var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!t) return {};
        var n = t[6] || "",
            r = t[8] || "";
        return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + n + r
        }
    }

    function Sh(e) {
        if (e.message) return e.message;
        if (e.exception && e.exception.values && e.exception.values[0]) {
            var t = e.exception.values[0];
            return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
        }
        return e.event_id || "<unknown>"
    }

    function kh(e, t, n) {
        e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
    }

    function Eh(e, t) {
        var n;
        if (e.exception && e.exception.values) {
            var r = e.exception.values[0],
                o = r.mechanism;
            if (r.mechanism = hf(hf(hf({}, {
                    type: "generic",
                    handled: !0
                }), o), t), t && "data" in t) {
                var i = hf(hf({}, null === (n = o) || void 0 === n ? void 0 : n.data), t.data);
                r.mechanism.data = i
            }
        }
    }

    function Ch(e) {
        var t;
        if (null === (t = e) || void 0 === t ? void 0 : t.__sentry_captured__) return !0;
        try {
            Object.defineProperty(e, "__sentry_captured__", {
                value: !0
            })
        } catch (e) {}
        return !1
    }
    var Oh = function() {
            function e(e) {
                var t = this;
                this._state = "PENDING", this._handlers = [], this._resolve = function(e) {
                    t._setResult("RESOLVED", e)
                }, this._reject = function(e) {
                    t._setResult("REJECTED", e)
                }, this._setResult = function(e, n) {
                    "PENDING" === t._state && (Rf(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                }, this._attachHandler = function(e) {
                    t._handlers = t._handlers.concat(e), t._executeHandlers()
                }, this._executeHandlers = function() {
                    if ("PENDING" !== t._state) {
                        var e = t._handlers.slice();
                        t._handlers = [], e.forEach((function(e) {
                            e.done || ("RESOLVED" === t._state && e.onfulfilled && e.onfulfilled(t._value), "REJECTED" === t._state && e.onrejected && e.onrejected(t._value), e.done = !0)
                        }))
                    }
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            return e.resolve = function(t) {
                return new e((function(e) {
                    e(t)
                }))
            }, e.reject = function(t) {
                return new e((function(e, n) {
                    n(t)
                }))
            }, e.all = function(t) {
                return new e((function(n, r) {
                    if (Array.isArray(t))
                        if (0 !== t.length) {
                            var o = t.length,
                                i = [];
                            t.forEach((function(t, a) {
                                e.resolve(t).then((function(e) {
                                    i[a] = e, 0 === (o -= 1) && n(i)
                                })).then(null, r)
                            }))
                        } else n([]);
                    else r(new TypeError("Promise.all requires an array as input."))
                }))
            }, e.prototype.then = function(t, n) {
                var r = this;
                return new e((function(e, o) {
                    r._attachHandler({
                        done: !1,
                        onfulfilled: function(n) {
                            if (t) try {
                                return void e(t(n))
                            } catch (e) {
                                return void o(e)
                            } else e(n)
                        },
                        onrejected: function(t) {
                            if (n) try {
                                return void e(n(t))
                            } catch (e) {
                                return void o(e)
                            } else o(t)
                        }
                    })
                }))
            }, e.prototype.catch = function(e) {
                return this.then((function(e) {
                    return e
                }), e)
            }, e.prototype.finally = function(t) {
                var n = this;
                return new e((function(e, r) {
                    var o, i;
                    return n.then((function(e) {
                        i = !1, o = e, t && t()
                    }), (function(e) {
                        i = !0, o = e, t && t()
                    })).then((function() {
                        i ? r(o) : e(o)
                    }))
                }))
            }, e.prototype.toString = function() {
                return "[object SyncPromise]"
            }, e
        }(),
        Th = function() {
            function e(e) {
                this._limit = e, this._buffer = []
            }
            return e.prototype.isReady = function() {
                return void 0 === this._limit || this.length() < this._limit
            }, e.prototype.add = function(e) {
                var t = this;
                if (!this.isReady()) return Oh.reject(new Nf("Not adding Promise due to buffer limit reached."));
                var n = e();
                return -1 === this._buffer.indexOf(n) && this._buffer.push(n), n.then((function() {
                    return t.remove(n)
                })).then(null, (function() {
                    return t.remove(n).then(null, (function() {}))
                })), n
            }, e.prototype.remove = function(e) {
                return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
            }, e.prototype.length = function() {
                return this._buffer.length
            }, e.prototype.drain = function(e) {
                var t = this;
                return new Oh((function(n) {
                    var r = setTimeout((function() {
                        e && e > 0 && n(!1)
                    }), e);
                    Oh.all(t._buffer).then((function() {
                        clearTimeout(r), n(!0)
                    })).then(null, (function() {
                        n(!0)
                    }))
                }))
            }, e
        }(),
        Rh = {
            nowSeconds: function() {
                return Date.now() / 1e3
            }
        };
    var Ph = _f() ? function() {
            try {
                return (e = module, t = "perf_hooks", e.require(t)).performance
            } catch (e) {
                return
            }
            var e, t
        }() : function() {
            var e = bf().performance;
            if (e && e.now) return {
                now: function() {
                    return e.now()
                },
                timeOrigin: Date.now() - e.now()
            }
        }(),
        Mh = void 0 === Ph ? Rh : {
            nowSeconds: function() {
                return (Ph.timeOrigin + Ph.now()) / 1e3
            }
        },
        Ah = Rh.nowSeconds.bind(Rh),
        Ih = Mh.nowSeconds.bind(Mh);
    ! function() {
        var e = bf().performance;
        if (e && e.now) {
            var t = 36e5,
                n = e.now(),
                r = Date.now(),
                o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
                i = o < t,
                a = e.timing && e.timing.navigationStart,
                s = "number" == typeof a ? Math.abs(a + n - r) : t;
            (i || s < t) && (o <= s && e.timeOrigin)
        }
    }();
    var Nh = function() {
        function e() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
        }
        return e.clone = function(t) {
            var n = new e;
            return t && (n._breadcrumbs = gf(t._breadcrumbs), n._tags = hf({}, t._tags), n._extra = hf({}, t._extra), n._contexts = hf({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = gf(t._eventProcessors), n._requestSession = t._requestSession), n
        }, e.prototype.addScopeListener = function(e) {
            this._scopeListeners.push(e)
        }, e.prototype.addEventProcessor = function(e) {
            return this._eventProcessors.push(e), this
        }, e.prototype.setUser = function(e) {
            return this._user = e || {}, this._session && this._session.update({
                user: e
            }), this._notifyScopeListeners(), this
        }, e.prototype.getUser = function() {
            return this._user
        }, e.prototype.getRequestSession = function() {
            return this._requestSession
        }, e.prototype.setRequestSession = function(e) {
            return this._requestSession = e, this
        }, e.prototype.setTags = function(e) {
            return this._tags = hf(hf({}, this._tags), e), this._notifyScopeListeners(), this
        }, e.prototype.setTag = function(e, t) {
            var n;
            return this._tags = hf(hf({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setExtras = function(e) {
            return this._extra = hf(hf({}, this._extra), e), this._notifyScopeListeners(), this
        }, e.prototype.setExtra = function(e, t) {
            var n;
            return this._extra = hf(hf({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setFingerprint = function(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }, e.prototype.setLevel = function(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }, e.prototype.setTransactionName = function(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }, e.prototype.setTransaction = function(e) {
            return this.setTransactionName(e)
        }, e.prototype.setContext = function(e, t) {
            var n;
            return null === t ? delete this._contexts[e] : this._contexts = hf(hf({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
        }, e.prototype.setSpan = function(e) {
            return this._span = e, this._notifyScopeListeners(), this
        }, e.prototype.getSpan = function() {
            return this._span
        }, e.prototype.getTransaction = function() {
            var e, t, n, r, o = this.getSpan();
            return (null === (e = o) || void 0 === e ? void 0 : e.transaction) ? null === (t = o) || void 0 === t ? void 0 : t.transaction : (null === (r = null === (n = o) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? o.spanRecorder.spans[0] : void 0
        }, e.prototype.setSession = function(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }, e.prototype.getSession = function() {
            return this._session
        }, e.prototype.update = function(t) {
            if (!t) return this;
            if ("function" == typeof t) {
                var n = t(this);
                return n instanceof e ? n : this
            }
            return t instanceof e ? (this._tags = hf(hf({}, this._tags), t._tags), this._extra = hf(hf({}, this._extra), t._extra), this._contexts = hf(hf({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : Cf(t) && (t = t, this._tags = hf(hf({}, this._tags), t.tags), this._extra = hf(hf({}, this._extra), t.extra), this._contexts = hf(hf({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
        }, e.prototype.clear = function() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
        }, e.prototype.addBreadcrumb = function(e, t) {
            var n = "number" == typeof t ? Math.min(t, 100) : 100;
            if (n <= 0) return this;
            var r = hf({
                timestamp: Ah()
            }, e);
            return this._breadcrumbs = gf(this._breadcrumbs, [r]).slice(-n), this._notifyScopeListeners(), this
        }, e.prototype.clearBreadcrumbs = function() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }, e.prototype.applyToEvent = function(e, t) {
            var n;
            if (this._extra && Object.keys(this._extra).length && (e.extra = hf(hf({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = hf(hf({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = hf(hf({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = hf(hf({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                e.contexts = hf({
                    trace: this._span.getTraceContext()
                }, e.contexts);
                var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                r && (e.tags = hf({
                    transaction: r
                }, e.tags))
            }
            return this._applyFingerprint(e), e.breadcrumbs = gf(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, this._notifyEventProcessors(gf(Lh(), this._eventProcessors), e, t)
        }, e.prototype._notifyEventProcessors = function(e, t, n, r) {
            var o = this;
            return void 0 === r && (r = 0), new Oh((function(i, a) {
                var s = e[r];
                if (null === t || "function" != typeof s) i(t);
                else {
                    var c = s(hf({}, t), n);
                    Rf(c) ? c.then((function(t) {
                        return o._notifyEventProcessors(e, t, n, r + 1).then(i)
                    })).then(null, a) : o._notifyEventProcessors(e, c, n, r + 1).then(i).then(null, a)
                }
            }))
        }, e.prototype._notifyScopeListeners = function() {
            var e = this;
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(t) {
                t(e)
            })), this._notifyingListeners = !1)
        }, e.prototype._applyFingerprint = function(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }, e
    }();

    function Lh() {
        var e = bf();
        return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
    }

    function jh(e) {
        Lh().push(e)
    }
    var Dh = function() {
            function e(e) {
                this.errors = 0, this.sid = xh(), this.duration = 0, this.status = lf.Ok, this.init = !0, this.ignoreDuration = !1;
                var t = Ih();
                this.timestamp = t, this.started = t, e && this.update(e)
            }
            return e.prototype.update = function(e) {
                if (void 0 === e && (e = {}), e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address), this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || Ih(), e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration), e.sid && (this.sid = 32 === e.sid.length ? e.sid : xh()), void 0 !== e.init && (this.init = e.init), !this.did && e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), this.ignoreDuration) this.duration = void 0;
                else if ("number" == typeof e.duration) this.duration = e.duration;
                else {
                    var t = this.timestamp - this.started;
                    this.duration = t >= 0 ? t : 0
                }
                e.release && (this.release = e.release), e.environment && (this.environment = e.environment), !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress), !this.userAgent && e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
            }, e.prototype.close = function(e) {
                e ? this.update({
                    status: e
                }) : this.status === lf.Ok ? this.update({
                    status: lf.Exited
                }) : this.update()
            }, e.prototype.toJSON = function() {
                return rh({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: rh({
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    })
                })
            }, e
        }(),
        $h = function() {
            function e(e, t, n) {
                void 0 === t && (t = new Nh), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = t, e && this.bindClient(e)
            }
            return e.prototype.isOlderThan = function(e) {
                return this._version < e
            }, e.prototype.bindClient = function(e) {
                this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
            }, e.prototype.pushScope = function() {
                var e = Nh.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }), e
            }, e.prototype.popScope = function() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }, e.prototype.withScope = function(e) {
                var t = this.pushScope();
                try {
                    e(t)
                } finally {
                    this.popScope()
                }
            }, e.prototype.getClient = function() {
                return this.getStackTop().client
            }, e.prototype.getScope = function() {
                return this.getStackTop().scope
            }, e.prototype.getStack = function() {
                return this._stack
            }, e.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1]
            }, e.prototype.captureException = function(e, t) {
                var n = this._lastEventId = xh(),
                    r = t;
                if (!t) {
                    var o = void 0;
                    try {
                        throw new Error("Sentry syntheticException")
                    } catch (e) {
                        o = e
                    }
                    r = {
                        originalException: e,
                        syntheticException: o
                    }
                }
                return this._invokeClient("captureException", e, hf(hf({}, r), {
                    event_id: n
                })), n
            }, e.prototype.captureMessage = function(e, t, n) {
                var r = this._lastEventId = xh(),
                    o = n;
                if (!n) {
                    var i = void 0;
                    try {
                        throw new Error(e)
                    } catch (e) {
                        i = e
                    }
                    o = {
                        originalException: e,
                        syntheticException: i
                    }
                }
                return this._invokeClient("captureMessage", e, t, hf(hf({}, o), {
                    event_id: r
                })), r
            }, e.prototype.captureEvent = function(e, t) {
                var n = xh();
                return "transaction" !== e.type && (this._lastEventId = n), this._invokeClient("captureEvent", e, hf(hf({}, t), {
                    event_id: n
                })), n
            }, e.prototype.lastEventId = function() {
                return this._lastEventId
            }, e.prototype.addBreadcrumb = function(e, t) {
                var n = this.getStackTop(),
                    r = n.scope,
                    o = n.client;
                if (r && o) {
                    var i = o.getOptions && o.getOptions() || {},
                        a = i.beforeBreadcrumb,
                        s = void 0 === a ? null : a,
                        c = i.maxBreadcrumbs,
                        l = void 0 === c ? 100 : c;
                    if (!(l <= 0)) {
                        var u = Ah(),
                            d = hf({
                                timestamp: u
                            }, e),
                            p = s ? zf((function() {
                                return s(d, t)
                            })) : d;
                        null !== p && r.addBreadcrumb(p, l)
                    }
                }
            }, e.prototype.setUser = function(e) {
                var t = this.getScope();
                t && t.setUser(e)
            }, e.prototype.setTags = function(e) {
                var t = this.getScope();
                t && t.setTags(e)
            }, e.prototype.setExtras = function(e) {
                var t = this.getScope();
                t && t.setExtras(e)
            }, e.prototype.setTag = function(e, t) {
                var n = this.getScope();
                n && n.setTag(e, t)
            }, e.prototype.setExtra = function(e, t) {
                var n = this.getScope();
                n && n.setExtra(e, t)
            }, e.prototype.setContext = function(e, t) {
                var n = this.getScope();
                n && n.setContext(e, t)
            }, e.prototype.configureScope = function(e) {
                var t = this.getStackTop(),
                    n = t.scope,
                    r = t.client;
                n && r && e(n)
            }, e.prototype.run = function(e) {
                var t = zh(this);
                try {
                    e(this)
                } finally {
                    zh(t)
                }
            }, e.prototype.getIntegration = function(e) {
                var t = this.getClient();
                if (!t) return null;
                try {
                    return t.getIntegration(e)
                } catch (t) {
                    return Wf.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
                }
            }, e.prototype.startSpan = function(e) {
                return this._callExtensionMethod("startSpan", e)
            }, e.prototype.startTransaction = function(e, t) {
                return this._callExtensionMethod("startTransaction", e, t)
            }, e.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders")
            }, e.prototype.captureSession = function(e) {
                if (void 0 === e && (e = !1), e) return this.endSession();
                this._sendSessionUpdate()
            }, e.prototype.endSession = function() {
                var e, t, n, r, o;
                null === (n = null === (t = null === (e = this.getStackTop()) || void 0 === e ? void 0 : e.scope) || void 0 === t ? void 0 : t.getSession()) || void 0 === n || n.close(), this._sendSessionUpdate(), null === (o = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === o || o.setSession()
            }, e.prototype.startSession = function(e) {
                var t = this.getStackTop(),
                    n = t.scope,
                    r = t.client,
                    o = r && r.getOptions() || {},
                    i = o.release,
                    a = o.environment,
                    s = (bf().navigator || {}).userAgent,
                    c = new Dh(hf(hf(hf({
                        release: i,
                        environment: a
                    }, n && {
                        user: n.getUser()
                    }), s && {
                        userAgent: s
                    }), e));
                if (n) {
                    var l = n.getSession && n.getSession();
                    l && l.status === lf.Ok && l.update({
                        status: lf.Exited
                    }), this.endSession(), n.setSession(c)
                }
                return c
            }, e.prototype._sendSessionUpdate = function() {
                var e = this.getStackTop(),
                    t = e.scope,
                    n = e.client;
                if (t) {
                    var r = t.getSession && t.getSession();
                    r && n && n.captureSession && n.captureSession(r)
                }
            }, e.prototype._invokeClient = function(e) {
                for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var o = this.getStackTop(),
                    i = o.scope,
                    a = o.client;
                a && a[e] && (t = a)[e].apply(t, gf(n, [i]))
            }, e.prototype._callExtensionMethod = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = Bh(),
                    o = r.__SENTRY__;
                if (o && o.extensions && "function" == typeof o.extensions[e]) return o.extensions[e].apply(this, t);
                Wf.warn("Extension method " + e + " couldn't be found, doing nothing.")
            }, e
        }();

    function Bh() {
        var e = bf();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, e
    }

    function zh(e) {
        var t = Bh(),
            n = Hh(t);
        return Uh(t, e), n
    }

    function Fh() {
        var e = Bh();
        return Wh(e) && !Hh(e).isOlderThan(4) || Uh(e, new $h), _f() ? function(e) {
            var t, n, r;
            try {
                var o = null === (r = null === (n = null === (t = Bh().__SENTRY__) || void 0 === t ? void 0 : t.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
                if (!o) return Hh(e);
                if (!Wh(o) || Hh(o).isOlderThan(4)) {
                    var i = Hh(e).getStackTop();
                    Uh(o, new $h(i.client, Nh.clone(i.scope)))
                }
                return Hh(o)
            } catch (t) {
                return Hh(e)
            }
        }(e) : Hh(e)
    }

    function Wh(e) {
        return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
    }

    function Hh(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new $h), e.__SENTRY__.hub
    }

    function Uh(e, t) {
        return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
    }

    function qh(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = Fh();
        if (r && r[e]) return r[e].apply(r, gf(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }

    function Vh(e, t) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (e) {
            n = e
        }
        return qh("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: n
        })
    }

    function Gh(e) {
        qh("withScope", e)
    }
    var Kh = function() {
            function e(e, t, n) {
                void 0 === t && (t = {}), this.dsn = e, this._dsnObject = new Df(e), this.metadata = t, this._tunnel = n
            }
            return e.prototype.getDsn = function() {
                return this._dsnObject
            }, e.prototype.forceEnvelope = function() {
                return !!this._tunnel
            }, e.prototype.getBaseApiEndpoint = function() {
                var e = this.getDsn(),
                    t = e.protocol ? e.protocol + ":" : "",
                    n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
            }, e.prototype.getStoreEndpoint = function() {
                return this._getIngestEndpoint("store")
            }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return this.getStoreEndpoint() + "?" + this._encodedAuth()
            }, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
            }, e.prototype.getStoreEndpointPath = function() {
                var e = this.getDsn();
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            }, e.prototype.getRequestHeaders = function(e, t) {
                var n = this.getDsn(),
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.publicKey), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, e.prototype.getReportDialogEndpoint = function(e) {
                void 0 === e && (e = {});
                var t = this.getDsn(),
                    n = this.getBaseApiEndpoint() + "embed/error-page/",
                    r = [];
                for (var o in r.push("dsn=" + t.toString()), e)
                    if ("dsn" !== o)
                        if ("user" === o) {
                            if (!e.user) continue;
                            e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                        } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                return r.length ? n + "?" + r.join("&") : n
            }, e.prototype._getEnvelopeEndpoint = function() {
                return this._getIngestEndpoint("envelope")
            }, e.prototype._getIngestEndpoint = function(e) {
                return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
            }, e.prototype._encodedAuth = function() {
                var e, t = {
                    sentry_key: this.getDsn().publicKey,
                    sentry_version: "7"
                };
                return e = t, Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&")
            }, e
        }(),
        Xh = [];

    function Yh(e) {
        return e.reduce((function(e, t) {
            return e.every((function(e) {
                return t.name !== e.name
            })) && e.push(t), e
        }), [])
    }

    function Jh(e) {
        var t = {};
        return function(e) {
            var t = e.defaultIntegrations && gf(e.defaultIntegrations) || [],
                n = e.integrations,
                r = gf(Yh(t));
            Array.isArray(n) ? r = gf(r.filter((function(e) {
                return n.every((function(t) {
                    return t.name !== e.name
                }))
            })), Yh(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
            var o = r.map((function(e) {
                    return e.name
                })),
                i = "Debug";
            return -1 !== o.indexOf(i) && r.push.apply(r, gf(r.splice(o.indexOf(i), 1))), r
        }(e).forEach((function(e) {
            t[e.name] = e,
                function(e) {
                    -1 === Xh.indexOf(e.name) && (e.setupOnce(jh, Fh), Xh.push(e.name), Wf.log("Integration installed: " + e.name))
                }(e)
        })), Object.defineProperty(t, "initialized", {
            value: !0
        }), t
    }
    var Qh = "Not capturing exception because it's already been captured.",
        Zh = function() {
            function e(e, t) {
                this._integrations = {}, this._numProcessing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new Df(t.dsn))
            }
            return e.prototype.captureException = function(e, t, n) {
                var r = this;
                if (!Ch(e)) {
                    var o = t && t.event_id;
                    return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
                        return r._captureEvent(e, t, n)
                    })).then((function(e) {
                        o = e
                    }))), o
                }
                Wf.log(Qh)
            }, e.prototype.captureMessage = function(e, t, n, r) {
                var o = this,
                    i = n && n.event_id,
                    a = Ef(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                return this._process(a.then((function(e) {
                    return o._captureEvent(e, n, r)
                })).then((function(e) {
                    i = e
                }))), i
            }, e.prototype.captureEvent = function(e, t, n) {
                var r;
                if (!(null === (r = t) || void 0 === r ? void 0 : r.originalException) || !Ch(t.originalException)) {
                    var o = t && t.event_id;
                    return this._process(this._captureEvent(e, t, n).then((function(e) {
                        o = e
                    }))), o
                }
                Wf.log(Qh)
            }, e.prototype.captureSession = function(e) {
                this._isEnabled() ? "string" != typeof e.release ? Wf.warn("Discarded session because of missing or non-string release") : (this._sendSession(e), e.update({
                    init: !1
                })) : Wf.warn("SDK not enabled, will not capture session.")
            }, e.prototype.getDsn = function() {
                return this._dsn
            }, e.prototype.getOptions = function() {
                return this._options
            }, e.prototype.getTransport = function() {
                return this._getBackend().getTransport()
            }, e.prototype.flush = function(e) {
                var t = this;
                return this._isClientDoneProcessing(e).then((function(n) {
                    return t.getTransport().close(e).then((function(e) {
                        return n && e
                    }))
                }))
            }, e.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then((function(e) {
                    return t.getOptions().enabled = !1, e
                }))
            }, e.prototype.setupIntegrations = function() {
                this._isEnabled() && !this._integrations.initialized && (this._integrations = Jh(this._options))
            }, e.prototype.getIntegration = function(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return Wf.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                }
            }, e.prototype._updateSessionFromEvent = function(e, t) {
                var n, r, o = !1,
                    i = !1,
                    a = t.exception && t.exception.values;
                if (a) {
                    i = !0;
                    try {
                        for (var s = mf(a), c = s.next(); !c.done; c = s.next()) {
                            var l = c.value.mechanism;
                            if (l && !1 === l.handled) {
                                o = !0;
                                break
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                var u = e.status === lf.Ok;
                (u && 0 === e.errors || u && o) && (e.update(hf(hf({}, o && {
                    status: lf.Crashed
                }), {
                    errors: e.errors || Number(i || o)
                })), this.captureSession(e))
            }, e.prototype._sendSession = function(e) {
                this._getBackend().sendSession(e)
            }, e.prototype._isClientDoneProcessing = function(e) {
                var t = this;
                return new Oh((function(n) {
                    var r = 0,
                        o = setInterval((function() {
                            0 == t._numProcessing ? (clearInterval(o), n(!0)) : (r += 1, e && r >= e && (clearInterval(o), n(!1)))
                        }), 1)
                }))
            }, e.prototype._getBackend = function() {
                return this._backend
            }, e.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, e.prototype._prepareEvent = function(e, t, n) {
                var r = this,
                    o = this.getOptions().normalizeDepth,
                    i = void 0 === o ? 3 : o,
                    a = hf(hf({}, e), {
                        event_id: e.event_id || (n && n.event_id ? n.event_id : xh()),
                        timestamp: e.timestamp || Ah()
                    });
                this._applyClientOptions(a), this._applyIntegrationsMetadata(a);
                var s = t;
                n && n.captureContext && (s = Nh.clone(s).update(n.captureContext));
                var c = Oh.resolve(a);
                return s && (c = s.applyToEvent(a, n)), c.then((function(e) {
                    return "number" == typeof i && i > 0 ? r._normalizeEvent(e, i) : e
                }))
            }, e.prototype._normalizeEvent = function(e, t) {
                if (!e) return null;
                var n = hf(hf(hf(hf(hf({}, e), e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((function(e) {
                        return hf(hf({}, e), e.data && {
                            data: th(e.data, t)
                        })
                    }))
                }), e.user && {
                    user: th(e.user, t)
                }), e.contexts && {
                    contexts: th(e.contexts, t)
                }), e.extra && {
                    extra: th(e.extra, t)
                });
                e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace);
                var r = this.getOptions()._experiments;
                return (void 0 === r ? {} : r).ensureNoCircularStructures ? th(n) : n
            }, e.prototype._applyClientOptions = function(e) {
                var t = this.getOptions(),
                    n = t.environment,
                    r = t.release,
                    o = t.dist,
                    i = t.maxValueLength,
                    a = void 0 === i ? 250 : i;
                "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== o && (e.dist = o), e.message && (e.message = Vf(e.message, a));
                var s = e.exception && e.exception.values && e.exception.values[0];
                s && s.value && (s.value = Vf(s.value, a));
                var c = e.request;
                c && c.url && (c.url = Vf(c.url, a))
            }, e.prototype._applyIntegrationsMetadata = function(e) {
                var t = Object.keys(this._integrations);
                t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = gf(e.sdk.integrations || [], t))
            }, e.prototype._sendEvent = function(e) {
                this._getBackend().sendEvent(e)
            }, e.prototype._captureEvent = function(e, t, n) {
                return this._processEvent(e, t, n).then((function(e) {
                    return e.event_id
                }), (function(e) {
                    Wf.error(e)
                }))
            }, e.prototype._processEvent = function(e, t, n) {
                var r, o, i = this,
                    a = this.getOptions(),
                    s = a.beforeSend,
                    c = a.sampleRate,
                    l = this.getTransport();
                if (!this._isEnabled()) return Oh.reject(new Nf("SDK not enabled, will not capture event."));
                var u = "transaction" === e.type;
                return !u && "number" == typeof c && Math.random() > c ? (null === (o = (r = l).recordLostEvent) || void 0 === o || o.call(r, ff.SampleRate, "event"), Oh.reject(new Nf("Discarding event because it's not included in the random sample (sampling rate = " + c + ")"))) : this._prepareEvent(e, n, t).then((function(n) {
                    var r, o;
                    if (null === n) throw null === (o = (r = l).recordLostEvent) || void 0 === o || o.call(r, ff.EventProcessor, e.type || "event"), new Nf("An event processor returned null, will not send event.");
                    if (t && t.data && !0 === t.data.__sentry__ || u || !s) return n;
                    var a = s(n, t);
                    return i._ensureBeforeSendRv(a)
                })).then((function(t) {
                    var r, o;
                    if (null === t) throw null === (o = (r = l).recordLostEvent) || void 0 === o || o.call(r, ff.BeforeSend, e.type || "event"), new Nf("`beforeSend` returned `null`, will not send event.");
                    var a = n && n.getSession && n.getSession();
                    return !u && a && i._updateSessionFromEvent(a, t), i._sendEvent(t), t
                })).then(null, (function(e) {
                    if (e instanceof Nf) throw e;
                    throw i.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }), new Nf("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                }))
            }, e.prototype._process = function(e) {
                var t = this;
                this._numProcessing += 1, e.then((function(e) {
                    return t._numProcessing -= 1, e
                }), (function(e) {
                    return t._numProcessing -= 1, e
                }))
            }, e.prototype._ensureBeforeSendRv = function(e) {
                var t = "`beforeSend` method has to return `null` or a valid event.";
                if (Rf(e)) return e.then((function(e) {
                    if (!Cf(e) && null !== e) throw new Nf(t);
                    return e
                }), (function(e) {
                    throw new Nf("beforeSend rejected with " + e)
                }));
                if (!Cf(e) && null !== e) throw new Nf(t);
                return e
            }, e
        }(),
        em = function() {
            function e() {}
            return e.prototype.sendEvent = function(e) {
                return Oh.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: pf.Skipped
                })
            }, e.prototype.close = function(e) {
                return Oh.resolve(!0)
            }, e
        }(),
        tm = function() {
            function e(e) {
                this._options = e, this._options.dsn || Wf.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
            }
            return e.prototype.eventFromException = function(e, t) {
                throw new Nf("Backend has to implement `eventFromException` method")
            }, e.prototype.eventFromMessage = function(e, t, n) {
                throw new Nf("Backend has to implement `eventFromMessage` method")
            }, e.prototype.sendEvent = function(e) {
                this._transport.sendEvent(e).then(null, (function(e) {
                    Wf.error("Error while sending event: " + e)
                }))
            }, e.prototype.sendSession = function(e) {
                this._transport.sendSession ? this._transport.sendSession(e).then(null, (function(e) {
                    Wf.error("Error while sending session: " + e)
                })) : Wf.warn("Dropping session because custom transport doesn't implement sendSession")
            }, e.prototype.getTransport = function() {
                return this._transport
            }, e.prototype._setupTransport = function() {
                return new em
            }, e
        }();

    function nm(e) {
        if (e.metadata && e.metadata.sdk) {
            var t = e.metadata.sdk;
            return {
                name: t.name,
                version: t.version
            }
        }
    }

    function rm(e, t) {
        return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = gf(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = gf(e.sdk.packages || [], t.packages || []), e) : e
    }

    function om(e, t) {
        var n = nm(t),
            r = "aggregates" in e ? "sessions" : "session";
        return {
            body: JSON.stringify(hf(hf({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), t.forceEnvelope() && {
                dsn: t.getDsn().toString()
            })) + "\n" + JSON.stringify({
                type: r
            }) + "\n" + JSON.stringify(e),
            type: r,
            url: t.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }

    function im(e, t) {
        var n = nm(t),
            r = e.type || "event",
            o = "transaction" === r || t.forceEnvelope(),
            i = e.debug_meta || {},
            a = i.transactionSampling,
            s = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }(i, ["transactionSampling"]),
            c = a || {},
            l = c.method,
            u = c.rate;
        0 === Object.keys(s).length ? delete e.debug_meta : e.debug_meta = s;
        var d = {
            body: JSON.stringify(n ? rm(e, t.metadata.sdk) : e),
            type: r,
            url: o ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
        };
        if (o) {
            var p = JSON.stringify(hf(hf({
                event_id: e.event_id,
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), t.forceEnvelope() && {
                dsn: t.getDsn().toString()
            })) + "\n" + JSON.stringify({
                type: r,
                sample_rates: [{
                    id: l,
                    rate: u
                }]
            }) + "\n" + d.body;
            d.body = p
        }
        return d
    }
    var am, sm = "6.16.1",
        cm = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                am = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry_original__ || this;
                    return am.apply(n, e)
                }
            }, e.id = "FunctionToString", e
        }(),
        lm = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        um = function() {
            function e(t) {
                void 0 === t && (t = {}), this._options = t, this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                jh((function(t) {
                    var n = Fh();
                    if (!n) return t;
                    var r = n.getIntegration(e);
                    if (r) {
                        var o = n.getClient(),
                            i = o ? o.getOptions() : {},
                            a = "function" == typeof r._mergeOptions ? r._mergeOptions(i) : {};
                        return "function" != typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, a) ? null : t
                    }
                    return t
                }))
            }, e.prototype._shouldDropEvent = function(e, t) {
                return this._isSentryError(e, t) ? (Wf.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Sh(e)), !0) : this._isIgnoredError(e, t) ? (Wf.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Sh(e)), !0) : this._isDeniedUrl(e, t) ? (Wf.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Sh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (Wf.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Sh(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
            }, e.prototype._isSentryError = function(e, t) {
                if (!t.ignoreInternal) return !1;
                try {
                    return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
                } catch (e) {
                    return !1
                }
            }, e.prototype._isIgnoredError = function(e, t) {
                return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function(e) {
                    return t.ignoreErrors.some((function(t) {
                        return Kf(e, t)
                    }))
                }))
            }, e.prototype._isDeniedUrl = function(e, t) {
                if (!t.denyUrls || !t.denyUrls.length) return !1;
                var n = this._getEventFilterUrl(e);
                return !!n && t.denyUrls.some((function(e) {
                    return Kf(n, e)
                }))
            }, e.prototype._isAllowedUrl = function(e, t) {
                if (!t.allowUrls || !t.allowUrls.length) return !0;
                var n = this._getEventFilterUrl(e);
                return !n || t.allowUrls.some((function(e) {
                    return Kf(n, e)
                }))
            }, e.prototype._mergeOptions = function(e) {
                return void 0 === e && (e = {}), {
                    allowUrls: gf(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                    denyUrls: gf(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                    ignoreErrors: gf(this._options.ignoreErrors || [], e.ignoreErrors || [], lm),
                    ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                }
            }, e.prototype._getPossibleEventMessages = function(e) {
                if (e.message) return [e.message];
                if (e.exception) try {
                    var t = e.exception.values && e.exception.values[0] || {},
                        n = t.type,
                        r = void 0 === n ? "" : n,
                        o = t.value,
                        i = void 0 === o ? "" : o;
                    return ["" + i, r + ": " + i]
                } catch (t) {
                    return Wf.error("Cannot extract message for event " + Sh(e)), []
                }
                return []
            }, e.prototype._getLastValidUrl = function(e) {
                var t, n;
                void 0 === e && (e = []);
                for (var r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    if ("<anonymous>" !== (null === (t = o) || void 0 === t ? void 0 : t.filename) && "[native code]" !== (null === (n = o) || void 0 === n ? void 0 : n.filename)) return o.filename || null
                }
                return null
            }, e.prototype._getEventFilterUrl = function(e) {
                try {
                    if (e.stacktrace) {
                        var t = e.stacktrace.frames;
                        return this._getLastValidUrl(t)
                    }
                    if (e.exception) {
                        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                        return this._getLastValidUrl(n)
                    }
                    return null
                } catch (t) {
                    return Wf.error("Cannot extract url for event " + Sh(e)), null
                }
            }, e.id = "InboundFilters", e
        }(),
        dm = "?",
        pm = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        fm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        hm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        mm = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        vm = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        gm = /Minified React error #\d+;/i;

    function _m(e) {
        var t = null,
            n = 0;
        e && ("number" == typeof e.framesToPop ? n = e.framesToPop : gm.test(e.message) && (n = 1));
        try {
            if (t = function(e) {
                    if (!e || !e.stacktrace) return null;
                    for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                        var c = null;
                        (t = r.exec(i[s])) ? c = {
                            url: t[2],
                            func: t[3],
                            args: [],
                            line: +t[1],
                            column: null
                        }: (t = o.exec(i[s])) && (c = {
                            url: t[6],
                            func: t[3] || t[4],
                            args: t[5] ? t[5].split(",") : [],
                            line: +t[1],
                            column: +t[2]
                        }), c && (!c.func && c.line && (c.func = dm), a.push(c))
                    }
                    if (!a.length) return null;
                    return {
                        message: xm(e),
                        name: e.name,
                        stack: a
                    }
                }(e), t) return bm(t, n)
        } catch (e) {}
        try {
            if (t = function(e) {
                    var t, n;
                    if (!e || !e.stack) return null;
                    for (var r, o, i, a = [], s = e.stack.split("\n"), c = 0; c < s.length; ++c) {
                        if (o = pm.exec(s[c])) {
                            var l = o[2] && 0 === o[2].indexOf("native");
                            o[2] && 0 === o[2].indexOf("eval") && (r = vm.exec(o[2])) && (o[2] = r[1], o[3] = r[2], o[4] = r[3]);
                            var u = o[2] && 0 === o[2].indexOf("address at ") ? o[2].substr("address at ".length) : o[2],
                                d = o[1] || dm;
                            d = (t = vf(ym(d, u), 2))[0], i = {
                                url: u = t[1],
                                func: d,
                                args: l ? [o[2]] : [],
                                line: o[3] ? +o[3] : null,
                                column: o[4] ? +o[4] : null
                            }
                        } else if (o = hm.exec(s[c])) i = {
                            url: o[2],
                            func: o[1] || dm,
                            args: [],
                            line: +o[3],
                            column: o[4] ? +o[4] : null
                        };
                        else {
                            if (!(o = fm.exec(s[c]))) continue;
                            o[3] && o[3].indexOf(" > eval") > -1 && (r = mm.exec(o[3])) ? (o[1] = o[1] || "eval", o[3] = r[1], o[4] = r[2], o[5] = "") : 0 !== c || o[5] || void 0 === e.columnNumber || (a[0].column = e.columnNumber + 1);
                            u = o[3], d = o[1] || dm;
                            d = (n = vf(ym(d, u), 2))[0], i = {
                                url: u = n[1],
                                func: d,
                                args: o[2] ? o[2].split(",") : [],
                                line: o[4] ? +o[4] : null,
                                column: o[5] ? +o[5] : null
                            }
                        }!i.func && i.line && (i.func = dm), a.push(i)
                    }
                    if (!a.length) return null;
                    return {
                        message: xm(e),
                        name: e.name,
                        stack: a
                    }
                }(e), t) return bm(t, n)
        } catch (e) {}
        return {
            message: xm(e),
            name: e && e.name,
            stack: [],
            failed: !0
        }
    }
    var ym = function(e, t) {
        var n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : dm, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
    };

    function bm(e, t) {
        try {
            return hf(hf({}, e), {
                stack: e.stack.slice(t)
            })
        } catch (t) {
            return e
        }
    }

    function xm(e) {
        var t = e && e.message;
        return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
    }

    function wm(e) {
        var t = km(e.stack),
            n = {
                type: e.name,
                value: e.message
            };
        return t && t.length && (n.stacktrace = {
            frames: t
        }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
    }

    function Sm(e) {
        return {
            exception: {
                values: [wm(e)]
            }
        }
    }

    function km(e) {
        if (!e || !e.length) return [];
        var t = e,
            n = t[0].func || "",
            r = t[t.length - 1].func || "";
        return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
            return {
                colno: null === e.column ? void 0 : e.column,
                filename: e.url || t[0].url,
                function: e.func || "?",
                in_app: !0,
                lineno: null === e.line ? void 0 : e.line
            }
        })).reverse()
    }

    function Em(e, t, n) {
        var r, o;
        if (void 0 === n && (n = {}), wf(e) && e.error) return r = Sm(_m(e = e.error));
        if (Sf(e) || (o = e, "[object DOMException]" === Object.prototype.toString.call(o))) {
            var i = e;
            if ("stack" in e) r = Sm(_m(e));
            else {
                var a = i.name || (Sf(i) ? "DOMError" : "DOMException"),
                    s = i.message ? a + ": " + i.message : a;
                kh(r = Cm(s, t, n), s)
            }
            return "code" in i && (r.tags = hf(hf({}, r.tags), {
                "DOMException.code": "" + i.code
            })), r
        }
        return xf(e) ? r = Sm(_m(e)) : Cf(e) || Of(e) ? (r = function(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: Of(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + nh(e)
                    }]
                },
                extra: {
                    __serialized__: Qf(e)
                }
            };
            if (t) {
                var o = km(_m(t).stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }(e, t, n.rejection), Eh(r, {
            synthetic: !0
        }), r) : (kh(r = Cm(e, t, n), "" + e, void 0), Eh(r, {
            synthetic: !0
        }), r)
    }

    function Cm(e, t, n) {
        void 0 === n && (n = {});
        var r = {
            message: e
        };
        if (n.attachStacktrace && t) {
            var o = km(_m(t).stack);
            r.stacktrace = {
                frames: o
            }
        }
        return r
    }
    var Om, Tm = bf();

    function Rm() {
        var e, t;
        if (Om) return Om;
        if (ih(Tm.fetch)) return Om = Tm.fetch.bind(Tm);
        var n = Tm.document,
            r = Tm.fetch;
        if ("function" == typeof(null === (e = n) || void 0 === e ? void 0 : e.createElement)) try {
            var o = n.createElement("iframe");
            o.hidden = !0, n.head.appendChild(o), (null === (t = o.contentWindow) || void 0 === t ? void 0 : t.fetch) && (r = o.contentWindow.fetch), n.head.removeChild(o)
        } catch (e) {
            Wf.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
        }
        return Om = r.bind(Tm)
    }

    function Pm(e, t) {
        if ("[object Navigator]" === Object.prototype.toString.call(Tm && Tm.navigator) && "function" == typeof Tm.navigator.sendBeacon) return Tm.navigator.sendBeacon.bind(Tm.navigator)(e, t);
        if (oh()) {
            var n = Rm();
            n(e, {
                body: t,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            }).then(null, (function(e) {
                console.error(e)
            }))
        } else;
    }
    var Mm = {
            event: "error",
            transaction: "transaction",
            session: "session",
            attachment: "attachment"
        },
        Am = bf(),
        Im = function() {
            function e(e) {
                var t = this;
                this.options = e, this._buffer = new Th(30), this._rateLimits = {}, this._outcomes = {}, this._api = new Kh(e.dsn, e._metadata, e.tunnel), this.url = this._api.getStoreEndpointWithUrlEncodedAuth(), this.options.sendClientReports && Am.document && Am.document.addEventListener("visibilitychange", (function() {
                    "hidden" === Am.document.visibilityState && t._flushOutcomes()
                }))
            }
            return e.prototype.sendEvent = function(e) {
                throw new Nf("Transport Class has to implement `sendEvent` method")
            }, e.prototype.close = function(e) {
                return this._buffer.drain(e)
            }, e.prototype.recordLostEvent = function(e, t) {
                var n;
                if (this.options.sendClientReports) {
                    var r = Mm[t] + ":" + e;
                    Wf.log("Adding outcome: " + r), this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1
                }
            }, e.prototype._flushOutcomes = function() {
                if (this.options.sendClientReports) {
                    var e = this._outcomes;
                    if (this._outcomes = {}, Object.keys(e).length) {
                        Wf.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                        var t = this._api.getEnvelopeEndpointWithUrlEncodedAuth(),
                            n = JSON.stringify(hf({}, this.options.tunnel && {
                                dsn: this._api.getDsn().toString()
                            })) + "\n" + JSON.stringify({
                                type: "client_report"
                            }) + "\n" + JSON.stringify({
                                timestamp: Ah(),
                                discarded_events: Object.keys(e).map((function(t) {
                                    var n = vf(t.split(":"), 2),
                                        r = n[0];
                                    return {
                                        reason: n[1],
                                        category: r,
                                        quantity: e[t]
                                    }
                                }))
                            });
                        try {
                            Pm(t, n)
                        } catch (e) {
                            Wf.error(e)
                        }
                    } else Wf.log("No outcomes to flush")
                }
            }, e.prototype._handleResponse = function(e) {
                var t = e.requestType,
                    n = e.response,
                    r = e.headers,
                    o = e.resolve,
                    i = e.reject,
                    a = pf.fromHttpCode(n.status);
                this._handleRateLimit(r) && Wf.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), a !== pf.Success ? i(n) : o({
                    status: a
                })
            }, e.prototype._disabledUntil = function(e) {
                var t = Mm[e];
                return this._rateLimits[t] || this._rateLimits.all
            }, e.prototype._isRateLimited = function(e) {
                return this._disabledUntil(e) > new Date(Date.now())
            }, e.prototype._handleRateLimit = function(e) {
                var t, n, r, o, i = Date.now(),
                    a = e["x-sentry-rate-limits"],
                    s = e["retry-after"];
                if (a) {
                    try {
                        for (var c = mf(a.trim().split(",")), l = c.next(); !l.done; l = c.next()) {
                            var u = l.value.split(":", 2),
                                d = parseInt(u[0], 10),
                                p = 1e3 * (isNaN(d) ? 60 : d);
                            try {
                                for (var f = (r = void 0, mf(u[1].split(";"))), h = f.next(); !h.done; h = f.next()) {
                                    var m = h.value;
                                    this._rateLimits[m || "all"] = new Date(i + p)
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    h && !h.done && (o = f.return) && o.call(f)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (n = c.return) && n.call(c)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }
                return !!s && (this._rateLimits.all = new Date(i + function(e, t) {
                    if (!t) return 6e4;
                    var n = parseInt("" + t, 10);
                    if (!isNaN(n)) return 1e3 * n;
                    var r = Date.parse("" + t);
                    return isNaN(r) ? 6e4 : r - e
                }(i, s)), !0)
            }, e
        }(),
        Nm = function(e) {
            function t(t, n) {
                void 0 === n && (n = Rm());
                var r = e.call(this, t) || this;
                return r._fetch = n, r
            }
            return cf(t, e), t.prototype.sendEvent = function(e) {
                return this._sendRequest(im(e, this._api), e)
            }, t.prototype.sendSession = function(e) {
                return this._sendRequest(om(e, this._api), e)
            }, t.prototype._sendRequest = function(e, t) {
                var n = this;
                if (this._isRateLimited(e.type)) return this.recordLostEvent(ff.RateLimitBackoff, e.type), Promise.reject({
                    event: t,
                    type: e.type,
                    reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                    status: 429
                });
                var r = {
                    body: e.body,
                    method: "POST",
                    referrerPolicy: ah() ? "origin" : ""
                };
                return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
                    return new Oh((function(t, o) {
                        n._fetch(e.url, r).then((function(r) {
                            var i = {
                                "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": r.headers.get("Retry-After")
                            };
                            n._handleResponse({
                                requestType: e.type,
                                response: r,
                                headers: i,
                                resolve: t,
                                reject: o
                            })
                        })).catch(o)
                    }))
                })).then(void 0, (function(t) {
                    throw t instanceof Nf ? n.recordLostEvent(ff.QueueOverflow, e.type) : n.recordLostEvent(ff.NetworkError, e.type), t
                }))
            }, t
        }(Im),
        Lm = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return cf(t, e), t.prototype.sendEvent = function(e) {
                return this._sendRequest(im(e, this._api), e)
            }, t.prototype.sendSession = function(e) {
                return this._sendRequest(om(e, this._api), e)
            }, t.prototype._sendRequest = function(e, t) {
                var n = this;
                return this._isRateLimited(e.type) ? (this.recordLostEvent(ff.RateLimitBackoff, e.type), Promise.reject({
                    event: t,
                    type: e.type,
                    reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                    status: 429
                })) : this._buffer.add((function() {
                    return new Oh((function(t, r) {
                        var o = new XMLHttpRequest;
                        for (var i in o.onreadystatechange = function() {
                                if (4 === o.readyState) {
                                    var i = {
                                        "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": o.getResponseHeader("Retry-After")
                                    };
                                    n._handleResponse({
                                        requestType: e.type,
                                        response: o,
                                        headers: i,
                                        resolve: t,
                                        reject: r
                                    })
                                }
                            }, o.open("POST", e.url), n.options.headers) Object.prototype.hasOwnProperty.call(n.options.headers, i) && o.setRequestHeader(i, n.options.headers[i]);
                        o.send(e.body)
                    }))
                })).then(void 0, (function(t) {
                    throw t instanceof Nf ? n.recordLostEvent(ff.QueueOverflow, e.type) : n.recordLostEvent(ff.NetworkError, e.type), t
                }))
            }, t
        }(Im),
        jm = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return cf(t, e), t.prototype.eventFromException = function(e, t) {
                return function(e, t, n) {
                    var r = Em(t, n && n.syntheticException || void 0, {
                        attachStacktrace: e.attachStacktrace
                    });
                    return Eh(r), r.level = df.Error, n && n.event_id && (r.event_id = n.event_id), Oh.resolve(r)
                }(this._options, e, t)
            }, t.prototype.eventFromMessage = function(e, t, n) {
                return void 0 === t && (t = df.Info),
                    function(e, t, n, r) {
                        void 0 === n && (n = df.Info);
                        var o = Cm(t, r && r.syntheticException || void 0, {
                            attachStacktrace: e.attachStacktrace
                        });
                        return o.level = n, r && r.event_id && (o.event_id = r.event_id), Oh.resolve(o)
                    }(this._options, e, t, n)
            }, t.prototype._setupTransport = function() {
                if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                var t = hf(hf({}, this._options.transportOptions), {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata
                });
                return this._options.transport ? new this._options.transport(t) : oh() ? new Nm(t) : new Lm(t)
            }, t
        }(tm),
        Dm = bf(),
        $m = 0;

    function Bm() {
        return $m > 0
    }

    function zm() {
        $m += 1, setTimeout((function() {
            $m -= 1
        }))
    }

    function Fm(e, t, n) {
        if (void 0 === t && (t = {}), "function" != typeof e) return e;
        try {
            if (e.__sentry__) return e;
            if (e.__sentry_wrapped__) return e.__sentry_wrapped__
        } catch (t) {
            return e
        }
        var r = function() {
            var r = Array.prototype.slice.call(arguments);
            try {
                n && "function" == typeof n && n.apply(this, arguments);
                var o = r.map((function(e) {
                    return Fm(e, t)
                }));
                return e.handleEvent ? e.handleEvent.apply(this, o) : e.apply(this, o)
            } catch (e) {
                throw zm(), Gh((function(n) {
                    n.addEventProcessor((function(e) {
                        var n = hf({}, e);
                        return t.mechanism && (kh(n, void 0, void 0), Eh(n, t.mechanism)), n.extra = hf(hf({}, n.extra), {
                            arguments: r
                        }), n
                    })), Vh(e)
                })), e
            }
        };
        try {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
        } catch (e) {}
        e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
            enumerable: !1,
            value: r
        }), Object.defineProperties(r, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: e
            }
        });
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return r
    }
    var Wm = function() {
            function e(t) {
                this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = hf({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50, this._options.onerror && (Wf.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (Wf.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
            }, e.prototype._installGlobalOnErrorHandler = function() {
                var t = this;
                this._onErrorHandlerInstalled || (ph({
                    callback: function(n) {
                        var r = n.error,
                            o = Fh(),
                            i = o.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (i && !Bm() && !a) {
                            var s = o.getClient(),
                                c = void 0 === r && kf(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(Em(r || n.msg, void 0, {
                                    attachStacktrace: s && s.getOptions().attachStacktrace,
                                    rejection: !1
                                }), n.url, n.line, n.column);
                            Eh(c, {
                                handled: !1,
                                type: "onerror"
                            }), o.captureEvent(c, {
                                originalException: r
                            })
                        }
                    },
                    type: "error"
                }), this._onErrorHandlerInstalled = !0)
            }, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                var t = this;
                this._onUnhandledRejectionHandlerInstalled || (ph({
                    callback: function(n) {
                        var r = n;
                        try {
                            "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                        } catch (e) {}
                        var o = Fh(),
                            i = o.getIntegration(e),
                            a = r && !0 === r.__sentry_own_request__;
                        if (!i || Bm() || a) return !0;
                        var s = o.getClient(),
                            c = Ef(r) ? t._eventFromRejectionWithPrimitive(r) : Em(r, void 0, {
                                attachStacktrace: s && s.getOptions().attachStacktrace,
                                rejection: !0
                            });
                        c.level = df.Error, Eh(c, {
                            handled: !1,
                            type: "onunhandledrejection"
                        }), o.captureEvent(c, {
                            originalException: r
                        })
                    },
                    type: "unhandledrejection"
                }), this._onUnhandledRejectionHandlerInstalled = !0)
            }, e.prototype._eventFromIncompleteOnError = function(e, t, n, r) {
                var o, i = wf(e) ? e.message : e,
                    a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                a && (o = a[1], i = a[2]);
                var s = {
                    exception: {
                        values: [{
                            type: o || "Error",
                            value: i
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(s, t, n, r)
            }, e.prototype._eventFromRejectionWithPrimitive = function(e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + String(e)
                        }]
                    }
                }
            }, e.prototype._enhanceEventWithInitialFrame = function(e, t, n, r) {
                e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                    i = isNaN(parseInt(n, 10)) ? void 0 : n,
                    a = kf(t) && t.length > 0 ? t : function() {
                        var e = bf();
                        try {
                            return e.document.location.href
                        } catch (e) {
                            return ""
                        }
                    }();
                return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                    colno: o,
                    filename: a,
                    function: "?",
                    in_app: !0,
                    lineno: i
                }), e
            }, e.id = "GlobalHandlers", e
        }(),
        Hm = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Um = function() {
            function e(t) {
                this.name = e.id, this._options = hf({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                var e = bf();
                (this._options.setTimeout && Xf(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Xf(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Xf(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && Xf(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Hm).forEach(this._wrapEventTarget.bind(this))
            }, e.prototype._wrapTimeFunction = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t[0];
                    return t[0] = Fm(r, {
                        mechanism: {
                            data: {
                                function: qf(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }, e.prototype._wrapRAF = function(e) {
                return function(t) {
                    return e.call(this, Fm(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: qf(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, e.prototype._wrapEventTarget = function(e) {
                var t = bf(),
                    n = t[e] && t[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Xf(n, "addEventListener", (function(t) {
                    return function(n, r, o) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = Fm(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: qf(r),
                                        target: e
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) {}
                        return t.call(this, n, Fm(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: qf(r),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), o)
                    }
                })), Xf(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        var o, i = n;
                        try {
                            var a = null === (o = i) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                            a && e.call(this, t, a, r)
                        } catch (e) {}
                        return e.call(this, t, i, r)
                    }
                })))
            }, e.prototype._wrapXHR = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = this,
                        o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return o.forEach((function(e) {
                        e in r && "function" == typeof r[e] && Xf(r, e, (function(t) {
                            var n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: qf(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            };
                            return t.__sentry_original__ && (n.mechanism.data.handler = qf(t.__sentry_original__)), Fm(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }, e.id = "TryCatch", e
        }(),
        qm = function() {
            function e(t) {
                this.name = e.id, this._options = hf({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return e.prototype.addSentryBreadcrumb = function(e) {
                this._options.sentry && Fh().addBreadcrumb({
                    category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                    event_id: e.event_id,
                    level: e.level,
                    message: Sh(e)
                }, {
                    event: e
                })
            }, e.prototype.setupOnce = function() {
                var e = this;
                this._options.console && ph({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._consoleBreadcrumb.apply(e, gf(t))
                    },
                    type: "console"
                }), this._options.dom && ph({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._domBreadcrumb.apply(e, gf(t))
                    },
                    type: "dom"
                }), this._options.xhr && ph({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._xhrBreadcrumb.apply(e, gf(t))
                    },
                    type: "xhr"
                }), this._options.fetch && ph({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._fetchBreadcrumb.apply(e, gf(t))
                    },
                    type: "fetch"
                }), this._options.history && ph({
                    callback: function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._historyBreadcrumb.apply(e, gf(t))
                    },
                    type: "history"
                })
            }, e.prototype._consoleBreadcrumb = function(e) {
                var t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: df.fromString(e.level),
                    message: Gf(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (!1 !== e.args[0]) return;
                    t.message = "Assertion failed: " + (Gf(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                }
                Fh().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            }, e.prototype._domBreadcrumb = function(e) {
                var t, n = "object" == typeof this._options.dom ? this._options.dom.serializeAttribute : void 0;
                "string" == typeof n && (n = [n]);
                try {
                    t = e.event.target ? Mf(e.event.target, n) : Mf(e.event, n)
                } catch (e) {
                    t = "<unknown>"
                }
                0 !== t.length && Fh().addBreadcrumb({
                    category: "ui." + e.name,
                    message: t
                }, {
                    event: e.event,
                    name: e.name,
                    global: e.global
                })
            }, e.prototype._xhrBreadcrumb = function(e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    var t = e.xhr.__sentry_xhr__ || {},
                        n = t.method,
                        r = t.url,
                        o = t.status_code,
                        i = t.body;
                    Fh().addBreadcrumb({
                        category: "xhr",
                        data: {
                            method: n,
                            url: r,
                            status_code: o
                        },
                        type: "http"
                    }, {
                        xhr: e.xhr,
                        input: i
                    })
                } else;
            }, e.prototype._fetchBreadcrumb = function(e) {
                e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Fh().addBreadcrumb({
                    category: "fetch",
                    data: e.fetchData,
                    level: df.Error,
                    type: "http"
                }, {
                    data: e.error,
                    input: e.args
                }) : Fh().addBreadcrumb({
                    category: "fetch",
                    data: hf(hf({}, e.fetchData), {
                        status_code: e.response.status
                    }),
                    type: "http"
                }, {
                    input: e.args,
                    response: e.response
                })))
            }, e.prototype._historyBreadcrumb = function(e) {
                var t = bf(),
                    n = e.from,
                    r = e.to,
                    o = wh(t.location.href),
                    i = wh(n),
                    a = wh(r);
                i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), Fh().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            }, e.id = "Breadcrumbs", e
        }(),
        Vm = function() {
            function e(t) {
                void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
            }
            return e.prototype.setupOnce = function() {
                jh((function(t, n) {
                    var r = Fh().getIntegration(e);
                    if (r) {
                        var o = r._handler && r._handler.bind(r);
                        return "function" == typeof o ? o(t, n) : t
                    }
                    return t
                }))
            }, e.prototype._handler = function(e, t) {
                if (!(e.exception && e.exception.values && t && Pf(t.originalException, Error))) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                return e.exception.values = gf(n, e.exception.values), e
            }, e.prototype._walkErrorTree = function(e, t, n) {
                if (void 0 === n && (n = []), !Pf(e[t], Error) || n.length + 1 >= this._limit) return n;
                var r = wm(_m(e[t]));
                return this._walkErrorTree(e[t], t, gf([r], n))
            }, e.id = "LinkedErrors", e
        }(),
        Gm = bf(),
        Km = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function() {
                jh((function(t) {
                    var n, r, o;
                    if (Fh().getIntegration(e)) {
                        if (!Gm.navigator && !Gm.location && !Gm.document) return t;
                        var i = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (r = Gm.location) || void 0 === r ? void 0 : r.href),
                            a = (Gm.document || {}).referrer,
                            s = (Gm.navigator || {}).userAgent,
                            c = hf(hf(hf({}, null === (o = t.request) || void 0 === o ? void 0 : o.headers), a && {
                                Referer: a
                            }), s && {
                                "User-Agent": s
                            }),
                            l = hf(hf({}, i && {
                                url: i
                            }), {
                                headers: c
                            });
                        return hf(hf({}, t), {
                            request: l
                        })
                    }
                    return t
                }))
            }, e.id = "UserAgent", e
        }(),
        Xm = function() {
            function e() {
                this.name = e.id
            }
            return e.prototype.setupOnce = function(t, n) {
                t((function(t) {
                    var r = n().getIntegration(e);
                    if (r) {
                        try {
                            if (r._shouldDropEvent(t, r._previousEvent)) return Wf.warn("Event dropped due to being a duplicate of previously captured event."), null
                        } catch (e) {
                            return r._previousEvent = t
                        }
                        return r._previousEvent = t
                    }
                    return t
                }))
            }, e.prototype._shouldDropEvent = function(e, t) {
                return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
            }, e.prototype._isSameMessageEvent = function(e, t) {
                var n = e.message,
                    r = t.message;
                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t))))
            }, e.prototype._getFramesFromEvent = function(e) {
                var t = e.exception;
                if (t) try {
                    return t.values[0].stacktrace.frames
                } catch (e) {
                    return
                } else if (e.stacktrace) return e.stacktrace.frames
            }, e.prototype._isSameStacktrace = function(e, t) {
                var n = this._getFramesFromEvent(e),
                    r = this._getFramesFromEvent(t);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                        a = n[o];
                    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                }
                return !0
            }, e.prototype._getExceptionFromEvent = function(e) {
                return e.exception && e.exception.values && e.exception.values[0]
            }, e.prototype._isSameExceptionEvent = function(e, t) {
                var n = this._getExceptionFromEvent(t),
                    r = this._getExceptionFromEvent(e);
                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)))
            }, e.prototype._isSameFingerprint = function(e, t) {
                var n = e.fingerprint,
                    r = t.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (e) {
                    return !1
                }
            }, e.id = "Dedupe", e
        }(),
        Ym = function(e) {
            function t(t) {
                void 0 === t && (t = {});
                return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: "npm:@sentry/browser",
                        version: sm
                    }],
                    version: sm
                }, e.call(this, jm, t) || this
            }
            return cf(t, e), t.prototype.showReportDialog = function(e) {
                void 0 === e && (e = {}), bf().document && (this._isEnabled() ? function(e) {
                    if (void 0 === e && (e = {}), Dm.document)
                        if (e.eventId)
                            if (e.dsn) {
                                var t = Dm.document.createElement("script");
                                t.async = !0, t.src = new Kh(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad);
                                var n = Dm.document.head || Dm.document.body;
                                n && n.appendChild(t)
                            } else Wf.error("Missing dsn option in showReportDialog call");
                    else Wf.error("Missing eventId option in showReportDialog call")
                }(hf(hf({}, e), {
                    dsn: e.dsn || this.getDsn()
                })) : Wf.error("Trying to call showReportDialog with Sentry Client disabled"))
            }, t.prototype._prepareEvent = function(t, n, r) {
                return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
            }, t.prototype._sendEvent = function(t) {
                var n = this.getIntegration(qm);
                n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
            }, t
        }(Zh),
        Jm = [new um, new cm, new Um, new qm, new Wm, new Vm, new Xm, new Km];

    function Qm(e) {
        if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = Jm), void 0 === e.release) {
            var t = bf();
            t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
        }
        void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0),
            function(e, t) {
                var n;
                !0 === t.debug && Wf.enable();
                var r = Fh();
                null === (n = r.getScope()) || void 0 === n || n.update(t.initialScope);
                var o = new e(t);
                r.bindClient(o)
            }(Ym, e), e.autoSessionTracking && function() {
                if (void 0 === bf().document) return void Wf.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                var e = Fh();
                if ("function" != typeof e.startSession || "function" != typeof e.captureSession) return;
                e.startSession({
                    ignoreDuration: !0
                }), e.captureSession(), ph({
                    callback: function(t) {
                        var n = t.from,
                            r = t.to;
                        void 0 !== n && n !== r && (e.startSession({
                            ignoreDuration: !0
                        }), e.captureSession())
                    },
                    type: "history"
                })
            }()
    }
    var Zm = {
        dsn: "https://85e360c77e454ef4b90fc2ee8a6e5fc7@o1050901.ingest.sentry.io/6066382",
        tracesSampleRate: 0,
        beforeSend: e => (e.user = window.__NEXT_REDUX_WRAPPER_STORE__ ? window.__NEXT_REDUX_WRAPPER_STORE__.getState().user : "Don't know", e)
    };
    async function ev() {
        var e;
        (e = Zm)._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
            name: "sentry.javascript.react",
            packages: [{
                name: "npm:@sentry/react",
                version: sm
            }],
            version: sm
        }, Qm(e)
    }
    async function tv(e, t) {
        ! function(e, t) {
            var n;
            try {
                throw new Error(e)
            } catch (e) {
                n = e
            }
            qh("captureMessage", e, "string" == typeof t ? t : void 0, hf({
                originalException: e,
                syntheticException: n
            }, "string" != typeof t ? {
                captureContext: t
            } : void 0))
        }(e, {
            contexts: {
                body: {
                    ...t instanceof Object ? t : JSON.parse(t)
                }
            },
            level: df.Info
        })
    }

    function nv(e = "", t = "info") {
        sc.dispatch((e => {
            const t = e.options && e.options.key;
            return {
                type: tc,
                notification: {
                    ...e,
                    key: t || (new Date).getTime() + Math.random()
                }
            }
        })({
            message: e,
            options: {
                variant: t
            }
        }))
    }

    function rv({
        title: e = cc,
        content: t = "",
        actions: n = [{
            label: "NO",
            onClick: () => {}
        }, {
            label: "YES",
            onClick: () => {}
        }]
    }) {
        sc.dispatch({
            type: oc,
            options: {
                title: e,
                content: t,
                actions: n
            }
        })
    }
    const ov = [{
            match: /rest.quillbot.com\/api/,
            overrideFunc: e => (e.withCredentials = !0, e)
        }, {
            match: /api\/utils\/sentence-spiltter/,
            async captureFunc(e) {
                tv("paraphrase", e.body)
            }
        }, {
            match: /api\/utils\/grammar-check/,
            async captureFunc(e) {
                tv("grammar-check", e.body)
            }
        }, {
            match: /api\/summarizer\/summarize-para\/abs/,
            async captureFunc(e) {
                tv("summarize-paragraph", e.body)
            }
        }, {
            match: /api\/summarizer\/summarize-para\/ext/,
            async captureFunc(e) {
                tv("summarize-key-sentences", e.body)
            }
        }, {
            match: /api\/utils\/bib-search/,
            async captureFunc(e) {
                tv("bib-search", e.body)
            }
        }, {
            match: /api\/write-assist\/create-project/,
            async captureFunc(e) {
                tv("create-project", e.body)
            }
        }],
        iv = [{
            match: /get-account-details/,
            overrideFunc(e) {
                e = JSON.parse(e);
                const t = (localStorage.getItem("QBC-config") ? JSON.parse(localStorage.getItem("QBC-config")) : _c).find((({
                    id: e
                }) => "hook-premium" === e)).enabled;
                return e.data.profile.premium || nv(t ? pc.success : pc.disabled, t ? "success" : "warning"), t && (e.data.profile.premium = !0), JSON.stringify(e)
            }
        }, {
            match: /api\/(utils\/(sentence-spiltter|grammar-check|bib-search)|summarizer\/summarize-para\/(abs|ext)|paraphraser\/(single-(paraphrase|flip)|segment)|write-assist\/list-projects)/,
            async captureFunc(e) {
                "SESSION_FAILED" === JSON.parse(e).code && rv({
                    content: uc.content,
                    actions: [{
                        label: uc.no,
                        onClick: () => {}
                    }, {
                        label: uc.yes,
                        onClick: () => {
                            indexedDB.databases().then((e => e.filter((e => e.name.startsWith("firebase"))).forEach((e => indexedDB.deleteDatabase(e.name))))).then((() => window.location.href = `/login?returnUrl=${window.location.pathname}`)).catch((() => nv(dc.logOut)), "error")
                        }
                    }]
                })
            }
        }, {
            match: /api\/write-assist\/list-projects/,
            async captureFunc(e) {
                const t = JSON.parse(e);
                "COM_OK" === t.code && tv("list-projects", {
                    ...t.data
                })
            }
        }, {
            match: /api\/write-assist\/restore-project/,
            async captureFunc(e) {
                const t = JSON.parse(e);
                "COM_OK" === t.code && tv("restore-projects", t.data)
            }
        }];

    function av(e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        return n.target = n.currentTarget = t, n
    }
    var sv, cv = ["load", "loadend", "timeout", "error", "readystatechange", "abort"],
        lv = cv[0],
        uv = cv[1],
        dv = cv[2],
        pv = cv[3],
        fv = cv[4],
        hv = cv[5];

    function mv() {
        sv = null, window._rxhr && (XMLHttpRequest = window._rxhr), window._rxhr = void 0
    }

    function vv(e) {
        return e.watcher || (e.watcher = document.createElement("a"))
    }

    function gv(e, t) {
        var n, r = e.getProxy(),
            o = "on" + t + "_",
            i = av({
                type: t
            }, r);
        r[o] && r[o](i), "function" == typeof Event ? n = new Event(t, {
            bubbles: !1
        }) : (n = document.createEvent("Event")).initEvent(t, !1, !0), vv(e).dispatchEvent(n)
    }

    function _v(e) {
        this.xhr = e, this.xhrProxy = e.getProxy()
    }

    function yv(e) {
        function t(e) {
            _v.call(this, e)
        }
        return t.prototype = Object.create(_v.prototype), t.prototype.next = e, t
    }
    _v.prototype = Object.create({
        resolve: function(e) {
            var t = this.xhrProxy,
                n = this.xhr;
            t.readyState = 4, n.resHeader = e.headers, t.response = t.responseText = e.response, t.statusText = e.statusText, t.status = e.status, gv(n, fv), gv(n, lv), gv(n, uv)
        },
        reject: function(e) {
            this.xhrProxy.status = 0, gv(this.xhr, e.type), gv(this.xhr, uv)
        }
    });
    var bv = yv((function(e) {
            var t = this.xhr;
            for (var n in e = e || t.config, t.withCredentials = e.withCredentials, t.open(e.method, e.url, !1 !== e.async, e.user, e.password), e.headers) t.setRequestHeader(n, e.headers[n]);
            t.send(e.body)
        })),
        xv = yv((function(e) {
            this.resolve(e)
        })),
        wv = yv((function(e) {
            this.reject(e)
        }));

    function Sv(e) {
        var t = e.onRequest,
            n = e.onResponse,
            r = e.onError;

        function o(e, t, n) {
            var o = new wv(e),
                i = {
                    config: e.config,
                    error: n
                };
            r ? r(i, o) : o.next(i)
        }

        function i() {
            return !0
        }

        function a(e, t) {
            return o(e, 0, t), !0
        }

        function s(e, t) {
            return 4 === e.readyState && 0 !== e.status ? function(e, t) {
                var r = new xv(e);
                if (!n) return r.resolve();
                var o = {
                    response: t.response,
                    status: t.status,
                    statusText: t.statusText,
                    config: e.config,
                    headers: e.resHeader || e.getAllResponseHeaders().split("\r\n").reduce((function(e, t) {
                        if ("" === t) return e;
                        var n = t.split(":");
                        return e[n.shift()] = function(e) {
                            return e.replace(/^\s+|\s+$/g, "")
                        }(n.join(":")), e
                    }), {})
                };
                n(o, r)
            }(e, t) : 4 !== e.readyState && gv(e, fv), !0
        }
        return function(e) {
            function t(t) {
                return function() {
                    var n = this.hasOwnProperty(t + "_") ? this[t + "_"] : this.xhr[t],
                        r = (e[t] || {}).getter;
                    return r && r(n, this) || n
                }
            }

            function n(t) {
                return function(n) {
                    var r = this.xhr,
                        o = this,
                        i = e[t];
                    if ("on" === t.substring(0, 2)) o[t + "_"] = n, r[t] = function(i) {
                        i = av(i, o), e[t] && e[t].call(o, r, i) || n.call(o, i)
                    };
                    else {
                        var a = (i || {}).setter;
                        n = a && a(n, o) || n, this[t + "_"] = n;
                        try {
                            r[t] = n
                        } catch (e) {}
                    }
                }
            }

            function r(t) {
                return function() {
                    var n = [].slice.call(arguments);
                    if (e[t]) {
                        var r = e[t].call(this, n, this.xhr);
                        if (r) return r
                    }
                    return this.xhr[t].apply(this.xhr, n)
                }
            }
            return window._rxhr = window._rxhr || XMLHttpRequest, XMLHttpRequest = function() {
                var e = new window._rxhr;
                for (var o in e) {
                    var i = "";
                    try {
                        i = typeof e[o]
                    } catch (e) {}
                    "function" === i ? this[o] = r(o) : Object.defineProperty(this, o, {
                        get: t(o),
                        set: n(o),
                        enumerable: !0
                    })
                }
                var a = this;
                e.getProxy = function() {
                    return a
                }, this.xhr = e
            }, window._rxhr
        }({
            onload: i,
            onloadend: i,
            onerror: a,
            ontimeout: a,
            onabort: a,
            onreadystatechange: function(e) {
                return s(e, this)
            },
            open: function(e, n) {
                var r = this,
                    i = n.config = {
                        headers: {}
                    };
                i.method = e[0], i.url = e[1], i.async = e[2], i.user = e[3], i.password = e[4], i.xhr = n;
                var a = "on" + fv;
                n[a] || (n[a] = function() {
                    return s(n, r)
                });
                var c = function(e) {
                    o(n, 0, av(e, r))
                };
                if ([pv, dv, hv].forEach((function(e) {
                        var t = "on" + e;
                        n[t] || (n[t] = c)
                    })), t) return !0
            },
            send: function(e, n) {
                var r = n.config;
                if (r.withCredentials = n.withCredentials, r.body = e[0], t) {
                    var o = function() {
                        t(r, new bv(n))
                    };
                    return !1 === r.async ? o() : setTimeout(o), !0
                }
            },
            setRequestHeader: function(e, t) {
                return t.config.headers[e[0].toLowerCase()] = e[1], !0
            },
            addEventListener: function(e, t) {
                var n = this;
                if (-1 !== cv.indexOf(e[0])) {
                    var r = e[1];
                    return vv(t).addEventListener(e[0], (function(t) {
                        var o = av(t, n);
                        o.type = e[0], o.isTrusted = !0, r.call(n, o)
                    })), !0
                }
            },
            getAllResponseHeaders: function(e, t) {
                var n = t.resHeader;
                if (n) {
                    var r = "";
                    for (var o in n) r += o + ": " + n[o] + "\r\n";
                    return r
                }
            },
            getResponseHeader: function(e, t) {
                var n = t.resHeader;
                if (n) return n[(e[0] || "").toLowerCase()]
            }
        })
    }

    function kv() {
        ! function(e) {
            if (sv) throw "Proxy already exists";
            sv = new Sv(e)
        }({
            onRequest: (e, t) => {
                const n = ov.filter((({
                    match: t
                }) => t.test(e.url)));
                n && n.forEach((t => {
                    t.overrideFunc && (e = t.overrideFunc(e)), t.captureFunc && t.captureFunc(e)
                })), t.next(e)
            },
            onResponse: (e, t) => {
                const n = iv.filter((({
                    match: t
                }) => t.test(e.config.url)));
                n && n.forEach((t => {
                    t.overrideFunc && (e.response = t.overrideFunc(e.response)), t.captureFunc && t.captureFunc(e.response)
                })), t.next(e)
            }
        })
    }
    async function Ev() {
        !async function() {
            const e = JSON.parse(document.getElementById("__NEXT_DATA__").innerText).props.initialState.user.isAuthenticated,
                t = "/login" === window.location.pathname;
            e || t || rv({
                content: lc.content,
                actions: [{
                    label: lc.no,
                    onClick: () => {}
                }, {
                    label: lc.yes,
                    onClick: () => window.location.href = `/login?returnUrl=${window.location.pathname}`
                }]
            })
        }()
    }
    var Cv = {},
        Ov = {},
        Tv = {};
    ! function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r;
            "undefined" != typeof window && (void 0 === window.gtag && (window.dataLayer = window.dataLayer || [], window.gtag = function() {
                window.dataLayer.push(arguments)
            }), (r = window).gtag.apply(r, t))
        };
        e.default = t
    }(Tv);
    var Rv = {};
    ! function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = e || "";
            t && (i = n(e));
            o && (i = r(i));
            return i
        };
        var t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

        function n(e) {
            return e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (function(e, n, r) {
                return n > 0 && n + e.length !== r.length && e.search(t) > -1 && ":" !== r.charAt(n - 2) && ("-" !== r.charAt(n + e.length) || "-" === r.charAt(n - 1)) && r.charAt(n - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
            }))
        }

        function r(e) {
            return function(e) {
                return "string" == typeof e && -1 !== e.indexOf("@")
            }(e) ? (console.warn("This arg looks like an email address, redacting."), "REDACTED (Potential Email Address)") : e
        }
    }(Rv),
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.GA4 = void 0;
        var t = s(Tv),
            n = s(Rv),
            r = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"],
            o = ["title", "location"],
            i = ["page", "hitType"],
            a = ["action", "category", "label", "value", "nonInteraction", "transport"];

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c(e, t) {
            if (null == e) return {};
            var n, r, o = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function l(e) {
            return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, l(e)
        }

        function u(e) {
            return function(e) {
                if (Array.isArray(e)) return m(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || h(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    g(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function f(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, o, i = [],
                    a = !0,
                    s = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    s = !0, o = e
                } finally {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
                return i
            }(e, t) || h(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function h(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(e, t) : void 0
            }
        }

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function v(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var _ = function() {
            function e() {
                var s = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), g(this, "reset", (function() {
                    s.isInitialized = !1, s._testMode = !1, s._hasLoadedGA = !1, s._isQueuing = !1, s._queueGtag = []
                })), g(this, "_gtag", (function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    s._testMode || s._isQueuing ? s._queueGtag.push(n) : t.default.apply(void 0, n)
                })), g(this, "_loadGA", (function(e, t) {
                    if ("undefined" != typeof window && "undefined" != typeof document && !s._hasLoadedGA) {
                        var n = document.createElement("script");
                        n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(e), t && n.setAttribute("nonce", t), document.body.appendChild(n), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                            window.dataLayer.push(arguments)
                        }, s._hasLoadedGA = !0
                    }
                })), g(this, "_toGtagOptions", (function(e) {
                    if (e) {
                        var t = {
                                cookieUpdate: "cookie_update",
                                cookieExpires: "cookie_expires",
                                cookieDomain: "cookie_domain",
                                cookieFlags: "cookie_flags",
                                userId: "user_id",
                                clientId: "client_id",
                                anonymizeIp: "anonymize_ip",
                                contentGroup1: "content_group1",
                                contentGroup2: "content_group2",
                                contentGroup3: "content_group3",
                                contentGroup4: "content_group4",
                                contentGroup5: "content_group5",
                                allowAdFeatures: "allow_google_signals",
                                allowAdPersonalizationSignals: "allow_ad_personalization_signals",
                                nonInteraction: "non_interaction",
                                page: "page_path",
                                hitCallback: "event_callback"
                            },
                            n = Object.entries(e).reduce((function(e, n) {
                                var r = f(n, 2),
                                    o = r[0],
                                    i = r[1];
                                return t[o] ? e[t[o]] = i : e[o] = i, e
                            }), {});
                        return n
                    }
                })), g(this, "initialize", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e) throw new Error("Require GA_MEASUREMENT_ID");
                    var n = "string" == typeof e ? [{
                        trackingId: e
                    }] : e;
                    s._currentMeasurementId = n[0].trackingId;
                    var r = t.gaOptions,
                        o = t.gtagOptions,
                        i = t.legacyDimensionMetric,
                        a = void 0 === i || i,
                        c = t.nonce,
                        l = t.testMode,
                        d = void 0 !== l && l;
                    if (s._testMode = d, d || s._loadGA(s._currentMeasurementId, c), s.isInitialized || (s._gtag("js", new Date), n.forEach((function(e) {
                            var t = s._appendCustomMap(p(p(p({
                                send_page_view: !1
                            }, s._toGtagOptions(p(p({}, r), e.gaOptions))), o), e.gtagOptions), a);
                            s._gtag("config", e.trackingId, t)
                        }))), s.isInitialized = !0, !d) {
                        var f = u(s._queueGtag);
                        for (s._queueGtag = [], s._isQueuing = !1; f.length;) {
                            var h = f.shift();
                            s._gtag.apply(s, u(h)), "get" === h[0] && (s._isQueuing = !0)
                        }
                    }
                })), g(this, "set", (function(e) {
                    e ? "object" === l(e) ? (0 === Object.keys(e).length && console.warn("empty `fieldsObject` given to .set()"), s._gaCommand("set", e)) : console.warn("Expected `fieldsObject` arg to be an Object") : console.warn("`fieldsObject` is required in .set()")
                })), g(this, "_gaCommandSendEvent", (function(e, t, n, r, o) {
                    s._gtag("event", t, p(p({
                        event_category: e,
                        event_label: n,
                        value: r
                    }, o && {
                        non_interaction: o.nonInteraction
                    }), s._toGtagOptions(o)))
                })), g(this, "_gaCommandSendEventParameters", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ("string" == typeof t[0]) s._gaCommandSendEvent.apply(s, u(t.slice(1)));
                    else {
                        var o = t[0],
                            i = o.eventCategory,
                            a = o.eventAction,
                            l = o.eventLabel,
                            d = o.eventValue,
                            p = c(o, r);
                        s._gaCommandSendEvent(i, a, l, d, p)
                    }
                })), g(this, "_gaCommandSendTiming", (function(e, t, n, r) {
                    s._gtag("event", "timing_complete", {
                        name: t,
                        value: n,
                        event_category: e,
                        event_label: r
                    })
                })), g(this, "_gaCommandSendPageview", (function(e, t) {
                    if (t && Object.keys(t).length) {
                        var n = s._toGtagOptions(t),
                            r = n.title,
                            i = n.location,
                            a = c(n, o);
                        s._gtag("event", "page_view", p(p(p(p({}, e && {
                            page_path: e
                        }), r && {
                            page_title: r
                        }), i && {
                            page_location: i
                        }), a))
                    } else e ? s._gtag("event", "page_view", {
                        page_path: e
                    }) : s._gtag("event", "page_view")
                })), g(this, "_gaCommandSendPageviewParameters", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ("string" == typeof t[0]) s._gaCommandSendPageview.apply(s, u(t.slice(1)));
                    else {
                        var r = t[0],
                            o = r.page,
                            a = c(r, i);
                        s._gaCommandSendPageview(o, a)
                    }
                })), g(this, "_gaCommandSend", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = "string" == typeof t[0] ? t[0] : t[0].hitType;
                    switch (r) {
                        case "event":
                            s._gaCommandSendEventParameters.apply(s, t);
                            break;
                        case "pageview":
                            s._gaCommandSendPageviewParameters.apply(s, t);
                            break;
                        case "timing":
                            s._gaCommandSendTiming.apply(s, u(t.slice(1)));
                            break;
                        case "screenview":
                        case "transaction":
                        case "item":
                        case "social":
                        case "exception":
                            console.warn("Unsupported send command: ".concat(r));
                            break;
                        default:
                            console.warn("Send command doesn't exist: ".concat(r))
                    }
                })), g(this, "_gaCommandSet", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    "string" == typeof t[0] && (t[0] = g({}, t[0], t[1])), s._gtag("set", s._toGtagOptions(t[0]))
                })), g(this, "_gaCommand", (function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    switch (e) {
                        case "send":
                            s._gaCommandSend.apply(s, n);
                            break;
                        case "set":
                            s._gaCommandSet.apply(s, n);
                            break;
                        default:
                            console.warn("Command doesn't exist: ".concat(e))
                    }
                })), g(this, "ga", (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ("string" == typeof t[0]) s._gaCommand.apply(s, t);
                    else {
                        var r = t[0];
                        s._gtag("get", s._currentMeasurementId, "client_id", (function(e) {
                            s._isQueuing = !1;
                            var t = s._queueGtag;
                            for (r({
                                    get: function(t) {
                                        return "clientId" === t ? e : "trackingId" === t ? s._currentMeasurementId : "apiVersion" === t ? "1" : void 0
                                    }
                                }); t.length;) {
                                var n = t.shift();
                                s._gtag.apply(s, u(n))
                            }
                        })), s._isQueuing = !0
                    }
                    return s.ga
                })), g(this, "event", (function(e, t) {
                    if ("string" == typeof e) s._gtag("event", e, s._toGtagOptions(t));
                    else {
                        var r = e.action,
                            o = e.category,
                            i = e.label,
                            l = e.value,
                            u = e.nonInteraction,
                            d = e.transport,
                            p = c(e, a);
                        if (!o || !r) return void console.warn("args.category AND args.action are required in event()");
                        var f = {
                            hitType: "event",
                            eventCategory: (0, n.default)(o),
                            eventAction: (0, n.default)(r)
                        };
                        i && (f.eventLabel = (0, n.default)(i)), void 0 !== l && ("number" != typeof l ? console.warn("Expected `args.value` arg to be a Number.") : f.eventValue = l), void 0 !== u && ("boolean" != typeof u ? console.warn("`args.nonInteraction` must be a boolean.") : f.nonInteraction = u), void 0 !== d && ("string" != typeof d ? console.warn("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(d) && console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), f.transport = d)), Object.keys(p).filter((function(e) {
                            return "dimension" === e.substr(0, "dimension".length)
                        })).forEach((function(e) {
                            f[e] = p[e]
                        })), Object.keys(p).filter((function(e) {
                            return "metric" === e.substr(0, "metric".length)
                        })).forEach((function(e) {
                            f[e] = p[e]
                        })), s._gaCommand("send", f)
                    }
                })), g(this, "send", (function(e) {
                    s._gaCommand("send", e)
                })), g(this, "pageview", (function(e, t, n) {
                    var r = null == e ? void 0 : e.trim();
                    "" !== r ? s._gaCommand("send", "pageview", r, {
                        title: n
                    }) : console.warn("path cannot be an empty string in .pageview()")
                })), this.reset()
            }
            var s, d, h;
            return s = e, d = [{
                key: "gtag",
                value: function() {
                    this._gtag.apply(this, arguments)
                }
            }, {
                key: "_appendCustomMap",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (!t) return e;
                    e.custom_map || (e.custom_map = {});
                    for (var n = 1; n <= 200; n++) e.custom_map["dimension".concat(n)] || (e.custom_map["dimension".concat(n)] = "dimension".concat(n)), e.custom_map["metric".concat(n)] || (e.custom_map["metric".concat(n)] = "metric".concat(n));
                    return e
                }
            }, {
                key: "outboundLink",
                value: function(e, t) {
                    var r = e.label;
                    if ("function" == typeof t)
                        if (r) {
                            var o = {
                                    hitType: "event",
                                    eventCategory: "Outbound",
                                    eventAction: "Click",
                                    eventLabel: (0, n.default)(r)
                                },
                                i = !1,
                                a = setTimeout((function() {
                                    i = !0, t()
                                }), 250);
                            o.hitCallback = function() {
                                clearTimeout(a), i || t()
                            }, this._gaCommand("send", o)
                        } else console.warn("args.label is required in outboundLink()");
                    else console.warn("hitCallback function is required")
                }
            }], d && v(s.prototype, d), h && v(s, h), e
        }();
        e.GA4 = _;
        var y = new _;
        e.default = y
    }(Ov),
    function(e) {
        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.ReactGAImplementation = void 0;
        var n = function(e, n) {
            if (!n && e && e.__esModule) return e;
            if (null === e || "object" !== t(e) && "function" != typeof e) return {
                default: e
            };
            var o = r(n);
            if (o && o.has(e)) return o.get(e);
            var i = {},
                a = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e)
                if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                    var c = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                    c && (c.get || c.set) ? Object.defineProperty(i, s, c) : i[s] = e[s]
                } i.default = e, o && o.set(e, i);
            return i
        }(Ov);

        function r(e) {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap,
                n = new WeakMap;
            return (r = function(e) {
                return e ? n : t
            })(e)
        }
        var o = n.GA4;
        e.ReactGAImplementation = o;
        var i = n.default;
        e.default = i
    }(Cv);
    var Pv = qe(Cv);
    async function Mv() {
        !async function() {
            Pv.initialize("G-H635ES4QGW"), Pv.send("pageview")
        }(), ev()
    }
    const Av = document.createElement("div");
    I(p((function() {
        return Y((() => (Ev(), Mv(), kv(), () => {
            mv()
        })), []), p(Ze, {
            store: sc
        }, p(Up, null), p(tf, null), p(Xs, null, p(rf, null)), p(af, null))
    }), null), Av), document.body ? document.body.appendChild(Av) : window.addEventListener("DOMContentLoaded", (() => document.body.appendChild(Av)))
}();
