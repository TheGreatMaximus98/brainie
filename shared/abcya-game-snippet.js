!function() {
    "use strict";
    var e = {
        log: "log",
        debug: "debug",
        info: "info",
        warn: "warn",
        error: "error"
    }
      , t = function(n) {
        for (var r = [], o = 1; o < arguments.length; o++)
            r[o - 1] = arguments[o];
        Object.prototype.hasOwnProperty.call(e, n) || (n = e.log),
        t[n].apply(t, r)
    };
    function n(e, n) {
        return function() {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            try {
                return e.apply(void 0, r)
            } catch (e) {
                t.error(n, e)
            }
        }
    }
    t.debug = console.debug.bind(console),
    t.log = console.log.bind(console),
    t.info = console.info.bind(console),
    t.warn = console.warn.bind(console),
    t.error = console.error.bind(console);
    var r, o = function(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
    }, i = !1;
    function s(e) {
        i = e
    }
    function a(e, t, n) {
        var o = n.value;
        n.value = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = r ? u(o) : o;
            return n.apply(this, e)
        }
    }
    function u(e) {
        return function() {
            return c(e, this, arguments)
        }
    }
    function c(t, n, o) {
        try {
            return t.apply(n, o)
        } catch (t) {
            if (f(e.error, t),
            r)
                try {
                    r(t)
                } catch (t) {
                    f(e.error, t)
                }
        }
    }
    function f(e) {
        for (var n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
        i && t.apply(void 0, o([e, "[MONITOR]"], n, !1))
    }
    var l = 1e3
      , d = 6e4;
    function v(e, t, n) {
        var r, o, i = !n || void 0 === n.leading || n.leading, s = !n || void 0 === n.trailing || n.trailing, a = !1;
        return {
            throttled: function() {
                for (var n = [], u = 0; u < arguments.length; u++)
                    n[u] = arguments[u];
                a ? r = n : (i ? e.apply(void 0, n) : r = n,
                a = !0,
                o = setTimeout((function() {
                    s && r && e.apply(void 0, r),
                    a = !1,
                    r = void 0
                }
                ), t))
            },
            cancel: function() {
                clearTimeout(o),
                a = !1,
                r = void 0
            }
        }
    }
    function p(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        return t.forEach((function(t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )),
        e
    }
    function g(e) {
        return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, g)
    }
    function h(e) {
        return 0 !== e && 100 * Math.random() <= e
    }
    function y() {}
    function m(e, t, n) {
        if ("object" != typeof e || null === e)
            return JSON.stringify(e);
        var r = b(Object.prototype)
          , o = b(Array.prototype)
          , i = b(Object.getPrototypeOf(e))
          , s = b(e);
        try {
            return JSON.stringify(e, t, n)
        } catch (e) {
            return "<error: unable to serialize object>"
        } finally {
            r(),
            o(),
            i(),
            s()
        }
    }
    function b(e) {
        var t = e
          , n = t.toJSON;
        return n ? (delete t.toJSON,
        function() {
            t.toJSON = n
        }
        ) : y
    }
    function w(e, t) {
        return -1 !== e.indexOf(t)
    }
    function C(e) {
        if (Array.from)
            return Array.from(e);
        var t = [];
        if (e instanceof Set)
            e.forEach((function(e) {
                return t.push(e)
            }
            ));
        else
            for (var n = 0; n < e.length; n++)
                t.push(e[n]);
        return t
    }
    function k(e) {
        return function(e) {
            return "number" == typeof e
        }(e) && e >= 0 && e <= 100
    }
    function x(e) {
        return Object.keys(e).map((function(t) {
            return e[t]
        }
        ))
    }
    function S(e) {
        return 0 === Object.keys(e).length
    }
    function E(e, t) {
        return e.slice(0, t.length) === t
    }
    function R() {
        if ("object" == typeof globalThis)
            return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
            get: function() {
                return this
            },
            configurable: !0
        });
        var e = _dd_temp_;
        return delete Object.prototype._dd_temp_,
        "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}),
        e
    }
    function T(e, t, n) {
        void 0 === n && (n = "");
        var r = e.charCodeAt(t - 1)
          , o = r >= 55296 && r <= 56319 ? t + 1 : t;
        return e.length <= o ? e : "".concat(e.slice(0, o)).concat(n)
    }
    function _(e) {
        return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
    }
    function L(e, t, n) {
        if (void 0 === n && (n = function() {
            if ("undefined" != typeof WeakSet) {
                var e = new WeakSet;
                return {
                    hasAlreadyBeenSeen: function(t) {
                        var n = e.has(t);
                        return n || e.add(t),
                        n
                    }
                }
            }
            var t = [];
            return {
                hasAlreadyBeenSeen: function(e) {
                    var n = t.indexOf(e) >= 0;
                    return n || t.push(e),
                    n
                }
            }
        }()),
        void 0 === t)
            return e;
        if ("object" != typeof t || null === t)
            return t;
        if (t instanceof Date)
            return new Date(t.getTime());
        if (t instanceof RegExp) {
            var r = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
            return new RegExp(t.source,r)
        }
        if (!n.hasAlreadyBeenSeen(t)) {
            if (Array.isArray(t)) {
                for (var o = Array.isArray(e) ? e : [], i = 0; i < t.length; ++i)
                    o[i] = L(o[i], t[i], n);
                return o
            }
            var s = "object" === _(e) ? e : {};
            for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (s[a] = L(s[a], t[a], n));
            return s
        }
    }
    function O(e) {
        return L(void 0, e)
    }
    function B() {
        for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
        for (var r = 0, o = t; r < o.length; r++) {
            var i = o[r];
            null != i && (e = L(e, i))
        }
        return e
    }
    var M = /[^\u0000-\u007F]/;
    function A(e) {
        return M.test(e) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(e).length : new Blob([e]).size : e.length
    }
    function P(e) {
        void 0 === e && (e = A);
        var t, n = {};
        return {
            getBytesCount: function() {
                return void 0 === t && (t = e(m(n))),
                t
            },
            get: function() {
                return n
            },
            add: function(e, r) {
                n[e] = r,
                t = void 0
            },
            remove: function(e) {
                delete n[e],
                t = void 0
            },
            set: function(e) {
                n = e,
                t = void 0
            },
            getContext: function() {
                return O(n)
            },
            setContext: function(e) {
                n = O(e),
                t = void 0
            },
            setContextProperty: function(e, r) {
                n[e] = O(r),
                t = void 0
            },
            removeContextProperty: function(e) {
                delete n[e],
                t = void 0
            },
            clearContext: function() {
                n = {},
                t = void 0
            }
        }
    }
    var q, I = function() {
        function e() {
            this.buffer = []
        }
        return e.prototype.add = function(e) {
            this.buffer.push(e) > 500 && this.buffer.splice(0, 1)
        }
        ,
        e.prototype.drain = function() {
            this.buffer.forEach((function(e) {
                return e()
            }
            )),
            this.buffer.length = 0
        }
        ,
        e
    }();
    function j() {
        return (new Date).getTime()
    }
    function U() {
        return j()
    }
    function D() {
        return performance.now()
    }
    function F() {
        return {
            relative: D(),
            timeStamp: U()
        }
    }
    function N() {
        return void 0 === q && (q = performance.timing.navigationStart),
        q
    }
    function H() {
        var e = R().DatadogEventBridge;
        if (e)
            return {
                getAllowedWebViewHosts: function() {
                    return JSON.parse(e.getAllowedWebViewHosts())
                },
                send: function(t, n) {
                    e.send(JSON.stringify({
                        eventType: t,
                        event: n
                    }))
                }
            }
    }
    function $(e) {
        var t;
        void 0 === e && (e = null === (t = R().location) || void 0 === t ? void 0 : t.hostname);
        var n = H();
        return !!n && n.getAllowedWebViewHosts().some((function(t) {
            return e === t || (n = e,
            r = ".".concat(t),
            n.slice(-r.length) === r);
            var n, r
        }
        ))
    }
    function G(e) {
        var t = p({}, e);
        return ["id", "name", "email"].forEach((function(e) {
            e in t && (t[e] = String(t[e]))
        }
        )),
        t
    }
    var z, V, J;
    function W(e, t, n, r) {
        var o = new Date;
        o.setTime(o.getTime() + n);
        var i = "expires=".concat(o.toUTCString())
          , s = r && r.crossSite ? "none" : "strict"
          , a = r && r.domain ? ";domain=".concat(r.domain) : ""
          , u = r && r.secure ? ";secure" : "";
        document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(s).concat(a).concat(u)
    }
    function X(e) {
        return function(e, t) {
            var n = new RegExp("(?:^|;)\\s*".concat(t, "\\s*=\\s*([^;]+)")).exec(e);
            return n ? n[1] : void 0
        }(document.cookie, e)
    }
    function Y(e, t) {
        W(e, "", 0, t)
    }
    function Z() {
        return V || new Set
    }
    function K(e) {
        return Q(e, function(e) {
            if (e.origin)
                return e.origin;
            var t = e.host.replace(/(:80|:443)$/, "");
            return "".concat(e.protocol, "//").concat(t)
        }(window.location)).href
    }
    function Q(e, t) {
        if (function() {
            if (void 0 !== J)
                return J;
            try {
                var e = new URL("http://test/path");
                return J = "http://test/path" === e.href
            } catch (e) {
                J = !1
            }
            return J
        }())
            return void 0 !== t ? new URL(e,t) : new URL(e);
        if (void 0 === t && !/:/.test(e))
            throw new Error("Invalid URL: '".concat(e, "'"));
        var n = document
          , r = n.createElement("a");
        if (void 0 !== t) {
            var o = (n = document.implementation.createHTMLDocument("")).createElement("base");
            o.href = t,
            n.head.appendChild(o),
            n.body.appendChild(r)
        }
        return r.href = e,
        r
    }
    var ee = "datadoghq.com"
      , te = {
        logs: "logs",
        rum: "rum",
        sessionReplay: "session-replay"
    }
      , ne = {
        logs: "logs",
        rum: "rum",
        sessionReplay: "replay"
    };
    function re(e, t, n) {
        var r = e.clientToken
          , o = function(e, t) {
            var n = e.site
              , r = void 0 === n ? ee : n
              , o = e.internalAnalyticsSubdomain;
            if (o && r === ee)
                return "".concat(o, ".").concat(ee);
            var i = r.split(".")
              , s = i.pop();
            return "".concat(te[t], ".browser-intake-").concat(i.join("-"), ".").concat(s)
        }(e, t)
          , i = "https://".concat(o, "/api/v2/").concat(ne[t])
          , s = e.proxyUrl && K(e.proxyUrl);
        return {
            build: function(o, a) {
                var u = ["sdk_version:".concat("4.31.0"), "api:".concat(o)].concat(n);
                a && u.push("retry_count:".concat(a.count), "retry_after:".concat(a.lastFailureStatus));
                var c = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(u.join(","))), "dd-api-key=".concat(r), "dd-evp-origin-version=".concat(encodeURIComponent("4.31.0")), "dd-evp-origin=browser", "dd-request-id=".concat(g())];
                "rum" === t && c.push("batch_time=".concat(U())),
                e.internalAnalyticsSubdomain && c.reverse();
                var f = "".concat(i, "?").concat(c.join("&"));
                return s ? "".concat(s, "?ddforward=").concat(encodeURIComponent(f)) : f
            },
            buildIntakeUrl: function() {
                return s ? "".concat(s, "?ddforward") : i
            },
            endpointType: t
        }
    }
    var oe = /[^a-z0-9_:./-]/;
    function ie(e, n) {
        var r = 200 - e.length - 1;
        (n.length > r || oe.test(n)) && t.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized"));
        var o = n.replace(/,/g, "_");
        return "".concat(e, ":").concat(o)
    }
    function se(e) {
        var t = function(e) {
            var t = e.env
              , n = e.service
              , r = e.version
              , o = e.datacenter
              , i = [];
            return t && i.push(ie("env", t)),
            n && i.push(ie("service", n)),
            r && i.push(ie("version", r)),
            o && i.push(ie("datacenter", o)),
            i
        }(e)
          , n = function(e, t) {
            return {
                logsEndpointBuilder: re(e, "logs", t),
                rumEndpointBuilder: re(e, "rum", t),
                sessionReplayEndpointBuilder: re(e, "sessionReplay", t)
            }
        }(e, t)
          , r = x(n).map((function(e) {
            return e.buildIntakeUrl()
        }
        ))
          , o = function(e, t, n) {
            if (!e.replica)
                return;
            var r = p({}, e, {
                site: ee,
                clientToken: e.replica.clientToken
            })
              , o = {
                logsEndpointBuilder: re(r, "logs", n),
                rumEndpointBuilder: re(r, "rum", n)
            };
            return t.push.apply(t, x(o).map((function(e) {
                return e.buildIntakeUrl()
            }
            ))),
            p({
                applicationId: e.replica.applicationId
            }, o)
        }(e, r, t);
        return p({
            isIntakeUrl: function(e) {
                return r.some((function(t) {
                    return 0 === e.indexOf(t)
                }
                ))
            },
            replica: o,
            site: e.site || ee
        }, n)
    }
    function ae(e) {
        var r, o, i;
        if (e && e.clientToken) {
            var s = null !== (r = e.sessionSampleRate) && void 0 !== r ? r : e.sampleRate;
            if (void 0 === s || k(s))
                if (void 0 === e.telemetrySampleRate || k(e.telemetrySampleRate)) {
                    var a;
                    if (void 0 === e.telemetryConfigurationSampleRate || k(e.telemetryConfigurationSampleRate))
                        return a = e.enableExperimentalFeatures,
                        Array.isArray(a) && (V || (V = new Set(a)),
                        a.filter((function(e) {
                            return "string" == typeof e
                        }
                        )).forEach((function(e) {
                            w(e, "-") && t.warn("please use snake case for '".concat(e, "'")),
                            V.add(e)
                        }
                        ))),
                        p({
                            beforeSend: e.beforeSend && n(e.beforeSend, "beforeSend threw an error:"),
                            cookieOptions: ue(e),
                            sessionSampleRate: null != s ? s : 100,
                            telemetrySampleRate: null !== (o = e.telemetrySampleRate) && void 0 !== o ? o : 20,
                            telemetryConfigurationSampleRate: null !== (i = e.telemetryConfigurationSampleRate) && void 0 !== i ? i : 5,
                            service: e.service,
                            silentMultipleInit: !!e.silentMultipleInit,
                            batchBytesLimit: 16384,
                            eventRateLimiterThreshold: 3e3,
                            maxTelemetryEventsPerPage: 15,
                            flushTimeout: 3e4,
                            batchMessagesLimit: 50,
                            messageBytesLimit: 262144
                        }, se(e));
                    t.error("Telemetry Configuration Sample Rate should be a number between 0 and 100")
                } else
                    t.error("Telemetry Sample Rate should be a number between 0 and 100");
            else
                t.error("Session Sample Rate should be a number between 0 and 100")
        } else
            t.error("Client Token is not configured, we will not send any data.")
    }
    function ue(e) {
        var t = {};
        return t.secure = function(e) {
            return !!e.useSecureSessionCookie || !!e.useCrossSiteSessionCookie
        }(e),
        t.crossSite = !!e.useCrossSiteSessionCookie,
        e.trackSessionAcrossSubdomains && (t.domain = function() {
            if (void 0 === z) {
                for (var e = "dd_site_test_".concat(g()), t = window.location.hostname.split("."), n = t.pop(); t.length && !X(e); )
                    n = "".concat(t.pop(), ".").concat(n),
                    W(e, "test", l, {
                        domain: n
                    });
                Y(e, {
                    domain: n
                }),
                z = n
            }
            return z
        }()),
        t
    }
    var ce = "?";
    function fe(e) {
        var t = []
          , n = be(e, "stack")
          , r = String(e);
        return n && E(n, r) && (n = n.slice(r.length)),
        n && n.split("\n").forEach((function(e) {
            var n = function(e) {
                var t = ve.exec(e);
                if (!t)
                    return;
                var n = t[2] && 0 === t[2].indexOf("native")
                  , r = t[2] && 0 === t[2].indexOf("eval")
                  , o = pe.exec(t[2]);
                r && o && (t[2] = o[1],
                t[3] = o[2],
                t[4] = o[3]);
                return {
                    args: n ? [t[2]] : [],
                    column: t[4] ? +t[4] : void 0,
                    func: t[1] || ce,
                    line: t[3] ? +t[3] : void 0,
                    url: n ? void 0 : t[2]
                }
            }(e) || function(e) {
                var t = ge.exec(e);
                if (!t)
                    return;
                return {
                    args: [],
                    column: t[3] ? +t[3] : void 0,
                    func: ce,
                    line: t[2] ? +t[2] : void 0,
                    url: t[1]
                }
            }(e) || function(e) {
                var t = he.exec(e);
                if (!t)
                    return;
                return {
                    args: [],
                    column: t[4] ? +t[4] : void 0,
                    func: t[1] || ce,
                    line: +t[3],
                    url: t[2]
                }
            }(e) || function(e) {
                var t = ye.exec(e);
                if (!t)
                    return;
                var n = t[3] && t[3].indexOf(" > eval") > -1
                  , r = me.exec(t[3]);
                n && r && (t[3] = r[1],
                t[4] = r[2],
                t[5] = void 0);
                return {
                    args: t[2] ? t[2].split(",") : [],
                    column: t[5] ? +t[5] : void 0,
                    func: t[1] || ce,
                    line: t[4] ? +t[4] : void 0,
                    url: t[3]
                }
            }(e);
            n && (!n.func && n.line && (n.func = ce),
            t.push(n))
        }
        )),
        {
            message: be(e, "message"),
            name: be(e, "name"),
            stack: t
        }
    }
    var le = "((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)"
      , de = "(?::(\\d+))"
      , ve = new RegExp("^\\s*at (.*?) ?\\(".concat(le).concat(de, "?").concat(de, "?\\)?\\s*$"),"i")
      , pe = new RegExp("\\((\\S*)".concat(de).concat(de, "\\)"));
    var ge = new RegExp("^\\s*at ?".concat(le).concat(de, "?").concat(de, "??\\s*$"),"i");
    var he = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    var ye = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i
      , me = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function be(e, t) {
        if ("object" == typeof e && e && t in e) {
            var n = e[t];
            return "string" == typeof n ? n : void 0
        }
    }
    var we = "agent"
      , Ce = "console"
      , ke = "logger"
      , xe = "network"
      , Se = "source"
      , Ee = "report";
    function Re(e) {
        var t = Te(e);
        return e.stack.forEach((function(e) {
            var n = "?" === e.func ? "<anonymous>" : e.func
              , r = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : ""
              , o = e.line ? ":".concat(e.line) : ""
              , i = e.line && e.column ? ":".concat(e.column) : "";
            t += "\n  at ".concat(n).concat(r, " @ ").concat(e.url).concat(o).concat(i)
        }
        )),
        t
    }
    function Te(e) {
        return "".concat(e.name || "Error", ": ").concat(e.message)
    }
    function _e() {
        var e, t = new Error;
        if (!t.stack)
            try {
                throw t
            } catch (e) {}
        return c((function() {
            var n = fe(t);
            n.stack = n.stack.slice(2),
            e = Re(n)
        }
        )),
        e
    }
    function Le(e, t) {
        for (var n = e, r = []; (null == n ? void 0 : n.cause)instanceof Error && r.length < 10; ) {
            var o = fe(n.cause);
            r.push({
                message: n.cause.message,
                source: t,
                type: null == o ? void 0 : o.name,
                stack: o && Re(o)
            }),
            n = n.cause
        }
        return r.length ? r : void 0
    }
    var Oe = function() {
        function e(e) {
            this.onFirstSubscribe = e,
            this.observers = []
        }
        return e.prototype.subscribe = function(e) {
            var t = this;
            return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0),
            this.observers.push(e),
            {
                unsubscribe: function() {
                    t.observers = t.observers.filter((function(t) {
                        return e !== t
                    }
                    )),
                    !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe()
                }
            }
        }
        ,
        e.prototype.notify = function(e) {
            this.observers.forEach((function(t) {
                return t(e)
            }
            ))
        }
        ,
        e
    }();
    function Be() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = new Oe((function() {
            var t = e.map((function(e) {
                return e.subscribe((function(e) {
                    return n.notify(e)
                }
                ))
            }
            ));
            return function() {
                return t.forEach((function(e) {
                    return e.unsubscribe()
                }
                ))
            }
        }
        ));
        return n
    }
    function Me(e, t) {
        var n, r = window;
        return r.Zone && "function" == typeof r.Zone.__symbol__ && (n = e[r.Zone.__symbol__(t)]),
        n || (n = e[t]),
        n
    }
    function Ae(e, t, n, r) {
        return Pe(e, [t], n, r)
    }
    function Pe(e, t, n, r) {
        var o = void 0 === r ? {} : r
          , i = o.once
          , s = o.capture
          , a = o.passive
          , c = u(i ? function(e) {
            d(),
            n(e)
        }
        : n)
          , f = a ? {
            capture: s,
            passive: a
        } : s
          , l = Me(e, "addEventListener");
        function d() {
            var n = Me(e, "removeEventListener");
            t.forEach((function(t) {
                return n.call(e, t, c, f)
            }
            ))
        }
        return t.forEach((function(t) {
            return l.call(e, t, c, f)
        }
        )),
        {
            stop: d
        }
    }
    var qe = {
        intervention: "intervention",
        deprecation: "deprecation",
        cspViolation: "csp_violation"
    };
    function Ie(e) {
        var t, n = [];
        w(e, qe.cspViolation) && n.push(t = new Oe((function() {
            var e = u((function(e) {
                t.notify(function(e) {
                    var t = qe.cspViolation
                      , n = "'".concat(e.blockedURI, "' blocked by '").concat(e.effectiveDirective, "' directive");
                    return {
                        type: qe.cspViolation,
                        subtype: e.effectiveDirective,
                        message: "".concat(t, ": ").concat(n),
                        stack: je(e.effectiveDirective, e.originalPolicy ? "".concat(n, ' of the policy "').concat(T(e.originalPolicy, 100, "..."), '"') : "no policy", e.sourceFile, e.lineNumber, e.columnNumber)
                    }
                }(e))
            }
            ));
            return Ae(document, "securitypolicyviolation", e).stop
        }
        )));
        var r = e.filter((function(e) {
            return e !== qe.cspViolation
        }
        ));
        return r.length && n.push(function(e) {
            var t = new Oe((function() {
                if (window.ReportingObserver) {
                    var n = u((function(e) {
                        return e.forEach((function(e) {
                            t.notify(function(e) {
                                var t = e.type
                                  , n = e.body;
                                return {
                                    type: t,
                                    subtype: n.id,
                                    message: "".concat(t, ": ").concat(n.message),
                                    stack: je(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                }
                            }(e))
                        }
                        ))
                    }
                    ))
                      , r = new window.ReportingObserver(n,{
                        types: e,
                        buffered: !0
                    });
                    return r.observe(),
                    function() {
                        r.disconnect()
                    }
                }
            }
            ));
            return t
        }(r)),
        Be.apply(void 0, n)
    }
    function je(e, t, n, r, o) {
        return n && Re({
            name: e,
            message: t,
            stack: [{
                func: "?",
                url: n,
                line: r,
                column: o
            }]
        })
    }
    function Ue(e, n, r) {
        return void 0 === e ? [] : "all" === e || Array.isArray(e) && e.every((function(e) {
            return w(n, e)
        }
        )) ? "all" === e ? n : (o = e,
        i = new Set,
        o.forEach((function(e) {
            return i.add(e)
        }
        )),
        C(i)) : void t.error("".concat(r, ' should be "all" or an array with allowed values "').concat(n.join('", "'), '"'));
        var o, i
    }
    var De = function(e, t, n, r) {
        var o, i = arguments.length, s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            s = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)
                (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s),
        s
    }
      , Fe = {
        debug: "debug",
        error: "error",
        info: "info",
        warn: "warn"
    }
      , Ne = "console"
      , He = "http"
      , $e = Object.keys(Fe)
      , Ge = function() {
        function e(e, t, n, r, o) {
            void 0 === n && (n = He),
            void 0 === r && (r = Fe.debug),
            void 0 === o && (o = {}),
            this.handleLogStrategy = e,
            this.handlerType = n,
            this.level = r,
            this.contextManager = P(),
            this.contextManager.set(p({}, o, t ? {
                logger: {
                    name: t
                }
            } : void 0))
        }
        return e.prototype.log = function(e, t, n) {
            void 0 === n && (n = Fe.info),
            this.handleLogStrategy({
                message: e,
                context: O(t),
                status: n
            }, this)
        }
        ,
        e.prototype.debug = function(e, t) {
            this.log(e, t, Fe.debug)
        }
        ,
        e.prototype.info = function(e, t) {
            this.log(e, t, Fe.info)
        }
        ,
        e.prototype.warn = function(e, t) {
            this.log(e, t, Fe.warn)
        }
        ,
        e.prototype.error = function(e, t) {
            var n = {
                error: {
                    origin: ke
                }
            };
            this.log(e, B(n, t), Fe.error)
        }
        ,
        e.prototype.setContext = function(e) {
            this.contextManager.set(e)
        }
        ,
        e.prototype.getContext = function() {
            return this.contextManager.get()
        }
        ,
        e.prototype.addContext = function(e, t) {
            this.contextManager.add(e, t)
        }
        ,
        e.prototype.removeContext = function(e) {
            this.contextManager.remove(e)
        }
        ,
        e.prototype.setHandler = function(e) {
            this.handlerType = e
        }
        ,
        e.prototype.getHandler = function() {
            return this.handlerType
        }
        ,
        e.prototype.setLevel = function(e) {
            this.level = e
        }
        ,
        e.prototype.getLevel = function() {
            return this.level
        }
        ,
        De([a], e.prototype, "log", null),
        e
    }();
    function ze(e, t) {
        var n = window.__ddBrowserSdkExtensionCallback;
        n && n({
            type: e,
            payload: t
        })
    }
    function Ve() {
        return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || X("datadog-synthetics-injects-rum"))
    }
    function Je() {
        var e = window._DATADOG_SYNTHETICS_RESULT_ID || X("datadog-synthetics-result-id");
        return "string" == typeof e ? e : void 0
    }
    var We, Xe = "log", Ye = "configuration", Ze = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "http://localhost", "<anonymous>"], Ke = ["ddog-gov.com"], Qe = {
        maxEventsPerPage: 0,
        sentEventCount: 0,
        telemetryEnabled: !1,
        telemetryConfigurationEnabled: !1
    };
    function et(e, t) {
        var n, o = new Oe;
        return Qe.telemetryEnabled = !w(Ke, t.site) && h(t.telemetrySampleRate),
        Qe.telemetryConfigurationEnabled = Qe.telemetryEnabled && h(t.telemetryConfigurationSampleRate),
        We = function(t) {
            if (Qe.telemetryEnabled) {
                var r = function(e, t) {
                    return B({
                        type: "telemetry",
                        date: U(),
                        service: e,
                        version: "4.31.0",
                        source: "browser",
                        _dd: {
                            format_version: 2
                        },
                        telemetry: t,
                        experimental_features: C(Z())
                    }, void 0 !== n ? n() : {})
                }(e, t);
                o.notify(r),
                ze("telemetry", r)
            }
        }
        ,
        r = tt,
        p(Qe, {
            maxEventsPerPage: t.maxTelemetryEventsPerPage,
            sentEventCount: 0
        }),
        {
            setContextProvider: function(e) {
                n = e
            },
            observable: o,
            enabled: Qe.telemetryEnabled
        }
    }
    function tt(e) {
        nt(p({
            type: Xe,
            status: "error"
        }, function(e) {
            if (e instanceof Error) {
                var t = fe(e);
                return {
                    error: {
                        kind: t.name,
                        stack: Re(rt(t))
                    },
                    message: t.message
                }
            }
            return {
                error: {
                    stack: "Not an instance of error"
                },
                message: "Uncaught ".concat(m(e))
            }
        }(e)))
    }
    function nt(e) {
        We && Qe.sentEventCount < Qe.maxEventsPerPage && (Qe.sentEventCount += 1,
        We(e))
    }
    function rt(e) {
        return e.stack = e.stack.filter((function(e) {
            return !e.url || Ze.some((function(t) {
                return E(e.url, t)
            }
            ))
        }
        )),
        e
    }
    var ot = function() {
        function e(e, t, n, r, o, i) {
            var s = this;
            this.request = e,
            this.batchMessagesLimit = t,
            this.batchBytesLimit = n,
            this.messageBytesLimit = r,
            this.flushTimeout = o,
            this.pageExitObservable = i,
            this.flushObservable = new Oe,
            this.pushOnlyBuffer = [],
            this.upsertBuffer = {},
            this.bufferBytesCount = 0,
            this.bufferMessagesCount = 0,
            i.subscribe((function() {
                return s.flush(s.request.sendOnExit)
            }
            )),
            this.flushPeriodically()
        }
        return e.prototype.add = function(e) {
            this.addOrUpdate(e)
        }
        ,
        e.prototype.upsert = function(e, t) {
            this.addOrUpdate(e, t)
        }
        ,
        e.prototype.flush = function(e) {
            if (void 0 === e && (e = this.request.send),
            0 !== this.bufferMessagesCount) {
                var t = this.pushOnlyBuffer.concat(x(this.upsertBuffer))
                  , n = this.bufferBytesCount;
                this.flushObservable.notify({
                    bufferBytesCount: this.bufferBytesCount,
                    bufferMessagesCount: this.bufferMessagesCount
                }),
                this.pushOnlyBuffer = [],
                this.upsertBuffer = {},
                this.bufferBytesCount = 0,
                this.bufferMessagesCount = 0,
                e({
                    data: t.join("\n"),
                    bytesCount: n
                })
            }
        }
        ,
        e.prototype.addOrUpdate = function(e, n) {
            var r = this.process(e)
              , o = r.processedMessage
              , i = r.messageBytesCount;
            i >= this.messageBytesLimit ? t.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(n) && this.remove(n),
            this.willReachedBytesLimitWith(i) && this.flush(),
            this.push(o, i, n),
            this.isFull() && this.flush())
        }
        ,
        e.prototype.process = function(e) {
            var t = m(e);
            return {
                processedMessage: t,
                messageBytesCount: A(t)
            }
        }
        ,
        e.prototype.push = function(e, t, n) {
            this.bufferMessagesCount > 0 && (this.bufferBytesCount += 1),
            void 0 !== n ? this.upsertBuffer[n] = e : this.pushOnlyBuffer.push(e),
            this.bufferBytesCount += t,
            this.bufferMessagesCount += 1
        }
        ,
        e.prototype.remove = function(e) {
            var t = this.upsertBuffer[e];
            delete this.upsertBuffer[e];
            var n = A(t);
            this.bufferBytesCount -= n,
            this.bufferMessagesCount -= 1,
            this.bufferMessagesCount > 0 && (this.bufferBytesCount -= 1)
        }
        ,
        e.prototype.hasMessageFor = function(e) {
            return void 0 !== e && void 0 !== this.upsertBuffer[e]
        }
        ,
        e.prototype.willReachedBytesLimitWith = function(e) {
            return this.bufferBytesCount + e + 1 >= this.batchBytesLimit
        }
        ,
        e.prototype.isFull = function() {
            return this.bufferMessagesCount === this.batchMessagesLimit || this.bufferBytesCount >= this.batchBytesLimit
        }
        ,
        e.prototype.flushPeriodically = function() {
            var e = this;
            setTimeout(u((function() {
                e.flush(),
                e.flushPeriodically()
            }
            )), this.flushTimeout)
        }
        ,
        e
    }()
      , it = 3145728;
    function st(e, t, n, r, o) {
        0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e) ? ut(e, t, n, {
            onSuccess: function() {
                return ct(0, t, n, r, o)
            },
            onFailure: function() {
                t.queuedPayloads.enqueue(e),
                at(t, n, r, o)
            }
        }) : t.queuedPayloads.enqueue(e)
    }
    function at(e, t, n, r) {
        2 === e.transportStatus && setTimeout(u((function() {
            ut(e.queuedPayloads.first(), e, t, {
                onSuccess: function() {
                    e.queuedPayloads.dequeue(),
                    e.currentBackoffTime = 1e3,
                    ct(1, e, t, n, r)
                },
                onFailure: function() {
                    e.currentBackoffTime = Math.min(6e4, 2 * e.currentBackoffTime),
                    at(e, t, n, r)
                }
            })
        }
        )), e.currentBackoffTime)
    }
    function ut(e, t, n, r) {
        var o = r.onSuccess
          , i = r.onFailure;
        t.bandwidthMonitor.add(e),
        n(e, (function(n) {
            t.bandwidthMonitor.remove(e),
            !function(e) {
                return "opaque" !== e.type && (0 === e.status && !navigator.onLine || 408 === e.status || 429 === e.status || e.status >= 500)
            }(n) ? (t.transportStatus = 0,
            o()) : (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2,
            e.retry = {
                count: e.retry ? e.retry.count + 1 : 1,
                lastFailureStatus: n.status
            },
            i())
        }
        ))
    }
    function ct(e, t, n, r, o) {
        0 === e && t.queuedPayloads.isFull() && !t.queueFullReported && (o({
            message: "Reached max ".concat(r, " events size queued for upload: ").concat(3, "MiB"),
            source: we,
            startClocks: F()
        }),
        t.queueFullReported = !0);
        var i = t.queuedPayloads;
        for (t.queuedPayloads = ft(); i.size() > 0; )
            st(i.dequeue(), t, n, r, o)
    }
    function ft() {
        var e = [];
        return {
            bytesCount: 0,
            enqueue: function(t) {
                this.isFull() || (e.push(t),
                this.bytesCount += t.bytesCount)
            },
            first: function() {
                return e[0]
            },
            dequeue: function() {
                var t = e.shift();
                return t && (this.bytesCount -= t.bytesCount),
                t
            },
            size: function() {
                return e.length
            },
            isFull: function() {
                return this.bytesCount >= it
            }
        }
    }
    function lt(e, t, n) {
        var r = {
            transportStatus: 0,
            currentBackoffTime: 1e3,
            bandwidthMonitor: {
                ongoingRequestCount: 0,
                ongoingByteCount: 0,
                canHandle: function(e) {
                    return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= 81920 && this.ongoingRequestCount < 32
                },
                add: function(e) {
                    this.ongoingRequestCount += 1,
                    this.ongoingByteCount += e.bytesCount
                },
                remove: function(e) {
                    this.ongoingRequestCount -= 1,
                    this.ongoingByteCount -= e.bytesCount
                }
            },
            queuedPayloads: ft(),
            queueFullReported: !1
        }
          , o = function(n, r) {
            return function(e, t, n, r) {
                var o = n.data
                  , i = n.bytesCount
                  , s = n.retry;
                if (function() {
                    try {
                        return window.Request && "keepalive"in new Request("http://a")
                    } catch (e) {
                        return !1
                    }
                }() && i < t) {
                    var a = e.build("fetch", s);
                    fetch(a, {
                        method: "POST",
                        body: o,
                        keepalive: !0,
                        mode: "cors"
                    }).then(u((function(e) {
                        return null == r ? void 0 : r({
                            status: e.status,
                            type: e.type
                        })
                    }
                    )), u((function() {
                        vt(e.build("xhr", s), o, r)
                    }
                    )))
                } else {
                    vt(e.build("xhr", s), o, r)
                }
            }(e, t, n, r)
        };
        return {
            send: function(t) {
                st(t, r, o, e.endpointType, n)
            },
            sendOnExit: function(n) {
                !function(e, t, n) {
                    var r = n.data
                      , o = n.bytesCount;
                    if (navigator.sendBeacon && o < t)
                        try {
                            var i = e.build("beacon");
                            if (navigator.sendBeacon(i, r))
                                return
                        } catch (e) {
                            !function(e) {
                                dt || (dt = !0,
                                tt(e))
                            }(e)
                        }
                    vt(e.build("xhr"), r)
                }(e, t, n)
            }
        }
    }
    var dt = !1;
    function vt(e, t, n) {
        var r = new XMLHttpRequest
          , o = u((function() {
            r.removeEventListener("loadend", o),
            null == n || n({
                status: r.status
            })
        }
        ));
        r.open("POST", e, !0),
        r.addEventListener("loadend", o),
        r.send(t)
    }
    function pt(e, t, n, r, o) {
        var i, s = a(t);
        function a(t) {
            return new ot(lt(t, e.batchBytesLimit, n),e.batchMessagesLimit,e.batchBytesLimit,e.messageBytesLimit,e.flushTimeout,r)
        }
        return o && (i = a(o)),
        {
            add: function(e, t) {
                void 0 === t && (t = !0),
                s.add(e),
                i && t && i.add(e)
            }
        }
    }
    var gt = 1 / 0
      , ht = function() {
        function e(e) {
            var t = this;
            this.expireDelay = e,
            this.entries = [],
            this.clearOldContextsInterval = setInterval((function() {
                return t.clearOldContexts()
            }
            ), 6e4)
        }
        return e.prototype.add = function(e, t) {
            var n = this
              , r = {
                context: e,
                startTime: t,
                endTime: gt,
                remove: function() {
                    var e = n.entries.indexOf(r);
                    e >= 0 && n.entries.splice(e, 1)
                },
                close: function(e) {
                    r.endTime = e
                }
            };
            return this.entries.unshift(r),
            r
        }
        ,
        e.prototype.find = function(e) {
            void 0 === e && (e = gt);
            for (var t = 0, n = this.entries; t < n.length; t++) {
                var r = n[t];
                if (r.startTime <= e) {
                    if (e <= r.endTime)
                        return r.context;
                    break
                }
            }
        }
        ,
        e.prototype.closeActive = function(e) {
            var t = this.entries[0];
            t && t.endTime === gt && t.close(e)
        }
        ,
        e.prototype.findAll = function(e) {
            return void 0 === e && (e = gt),
            this.entries.filter((function(t) {
                return t.startTime <= e && e <= t.endTime
            }
            )).map((function(e) {
                return e.context
            }
            ))
        }
        ,
        e.prototype.reset = function() {
            this.entries = []
        }
        ,
        e.prototype.stop = function() {
            clearInterval(this.clearOldContextsInterval)
        }
        ,
        e.prototype.clearOldContexts = function() {
            for (var e = D() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < e; )
                this.entries.pop()
        }
        ,
        e
    }();
    var yt, mt = 144e5, bt = 9e5, wt = /^([a-z]+)=([a-z0-9-]+)$/, Ct = "&", kt = "_dd_s", xt = [];
    function St(e, t) {
        var n;
        if (void 0 === t && (t = 0),
        yt || (yt = e),
        e === yt)
            if (t >= 100)
                Tt();
            else {
                var r, o = Ot();
                if (Et()) {
                    if (o.lock)
                        return void Rt(e, t);
                    if (r = g(),
                    o.lock = r,
                    Lt(o, e.options),
                    (o = Ot()).lock !== r)
                        return void Rt(e, t)
                }
                var i = e.process(o);
                if (Et() && (o = Ot()).lock !== r)
                    Rt(e, t);
                else {
                    if (i && _t(i, e.options),
                    Et() && (!i || !Bt(i))) {
                        if ((o = Ot()).lock !== r)
                            return void Rt(e, t);
                        delete o.lock,
                        Lt(o, e.options),
                        i = o
                    }
                    null === (n = e.after) || void 0 === n || n.call(e, i || o),
                    Tt()
                }
            }
        else
            xt.push(e)
    }
    function Et() {
        return !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent)
    }
    function Rt(e, t) {
        setTimeout(u((function() {
            St(e, t + 1)
        }
        )), 10)
    }
    function Tt() {
        yt = void 0;
        var e = xt.shift();
        e && St(e)
    }
    function _t(e, t) {
        Bt(e) ? function(e) {
            W(kt, "", 0, e)
        }(t) : (e.expire = String(j() + bt),
        Lt(e, t))
    }
    function Lt(e, t) {
        W(kt, function(e) {
            return (t = e,
            Object.keys(t).map((function(e) {
                return [e, t[e]]
            }
            ))).map((function(e) {
                var t = e[0]
                  , n = e[1];
                return "".concat(t, "=").concat(n)
            }
            )).join(Ct);
            var t
        }(e), bt, t)
    }
    function Ot() {
        var e = X(kt)
          , t = {};
        return function(e) {
            return void 0 !== e && (-1 !== e.indexOf(Ct) || wt.test(e))
        }(e) && e.split(Ct).forEach((function(e) {
            var n = wt.exec(e);
            if (null !== n) {
                var r = n[1]
                  , o = n[2];
                t[r] = o
            }
        }
        )),
        t
    }
    function Bt(e) {
        return S(e)
    }
    function Mt(e, t, n) {
        var r = new Oe
          , o = new Oe
          , i = setInterval(u((function() {
            St({
                options: e,
                process: function(e) {
                    return f(e) ? void 0 : {}
                },
                after: a
            })
        }
        )), 1e3)
          , s = function() {
            var e = Ot();
            if (f(e))
                return e;
            return {}
        }();
        function a(e) {
            return f(e) || (e = {}),
            c() && (!function(e) {
                return s.id !== e.id || s[t] !== e[t]
            }(e) ? s = e : (s = {},
            o.notify())),
            e
        }
        function c() {
            return void 0 !== s[t]
        }
        function f(e) {
            return (void 0 === e.created || j() - Number(e.created) < mt) && (void 0 === e.expire || j() < Number(e.expire))
        }
        return {
            expandOrRenewSession: v(u((function() {
                var o;
                St({
                    options: e,
                    process: function(e) {
                        var r = a(e);
                        return o = function(e) {
                            var r = n(e[t])
                              , o = r.trackingType
                              , i = r.isTracked;
                            e[t] = o,
                            i && !e.id && (e.id = g(),
                            e.created = String(j()));
                            return i
                        }(r),
                        r
                    },
                    after: function(e) {
                        o && !c() && function(e) {
                            s = e,
                            r.notify()
                        }(e),
                        s = e
                    }
                })
            }
            )), 1e3).throttled,
            expandSession: function() {
                St({
                    options: e,
                    process: function(e) {
                        return c() ? a(e) : void 0
                    }
                })
            },
            getSession: function() {
                return s
            },
            renewObservable: r,
            expireObservable: o,
            stop: function() {
                clearInterval(i)
            }
        }
    }
    var At = [];
    function Pt(e, t, n) {
        !function(e) {
            var t = X(kt)
              , n = X("_dd")
              , r = X("_dd_r")
              , o = X("_dd_l");
            if (!t) {
                var i = {};
                n && (i.id = n),
                o && /^[01]$/.test(o) && (i.logs = o),
                r && /^[012]$/.test(r) && (i.rum = r),
                _t(i, e)
            }
        }(e);
        var r = Mt(e, t, n);
        At.push((function() {
            return r.stop()
        }
        ));
        var o, i = new ht(144e5);
        function s() {
            return {
                id: r.getSession().id,
                trackingType: r.getSession()[t]
            }
        }
        return At.push((function() {
            return i.stop()
        }
        )),
        r.renewObservable.subscribe((function() {
            i.add(s(), D())
        }
        )),
        r.expireObservable.subscribe((function() {
            i.closeActive(D())
        }
        )),
        r.expandOrRenewSession(),
        i.add(s(), [0, N()][0]),
        o = Pe(window, ["click", "touchstart", "keydown", "scroll"], (function() {
            return r.expandOrRenewSession()
        }
        ), {
            capture: !0,
            passive: !0
        }).stop,
        At.push(o),
        function(e) {
            var t = u((function() {
                "visible" === document.visibilityState && e()
            }
            ))
              , n = Ae(document, "visibilitychange", t).stop;
            At.push(n);
            var r = setInterval(t, 6e4);
            At.push((function() {
                clearInterval(r)
            }
            ))
        }((function() {
            return r.expandSession()
        }
        )),
        {
            findActiveSession: function(e) {
                return i.find(e)
            },
            renewObservable: r.renewObservable,
            expireObservable: r.expireObservable
        }
    }
    var qt;
    function It(e) {
        var t = Pt(e.cookieOptions, "logs", (function(t) {
            return function(e, t) {
                var n = function(e) {
                    return "0" === e || "1" === e
                }(t) ? t : jt(e);
                return {
                    trackingType: n,
                    isTracked: "1" === n
                }
            }(e, t)
        }
        ));
        return {
            findTrackedSession: function(e) {
                var n = t.findActiveSession(e);
                return n && "1" === n.trackingType ? {
                    id: n.id
                } : void 0
            }
        }
    }
    function jt(e) {
        return h(e.sessionSampleRate) ? "1" : "0"
    }
    var Ut = ((qt = {})[Fe.debug] = 0,
    qt[Fe.info] = 1,
    qt[Fe.warn] = 2,
    qt[Fe.error] = 3,
    qt);
    function Dt(e, t, n) {
        var r = n.getHandler()
          , o = Array.isArray(r) ? r : [r];
        return Ut[e] >= Ut[n.getLevel()] && w(o, t)
    }
    function Ft(e, t, n, r, o, i) {
        var s = $e.concat(["custom"])
          , a = {};
        s.forEach((function(e) {
            var n, r, o, s, u;
            a[e] = (n = e,
            r = t.eventRateLimiterThreshold,
            o = i,
            s = 0,
            u = !1,
            {
                isLimitReached: function() {
                    if (0 === s && setTimeout((function() {
                        s = 0
                    }
                    ), d),
                    (s += 1) <= r || u)
                        return u = !1,
                        !1;
                    if (s === r + 1) {
                        u = !0;
                        try {
                            o({
                                message: "Reached max number of ".concat(n, "s by minute: ").concat(r),
                                source: we,
                                startClocks: F()
                            })
                        } finally {
                            u = !1
                        }
                    }
                    return !0
                }
            })
        }
        )),
        n.subscribe(0, (function(i) {
            var s, u, c, f = i.rawLogsEvent, l = i.messageContext, d = void 0 === l ? void 0 : l, v = i.savedCommonContext, p = void 0 === v ? void 0 : v, g = i.logger, h = void 0 === g ? o : g, y = f.date - N(), m = e.findTrackedSession(y);
            if (m) {
                var b = p || r()
                  , w = B({
                    service: t.service,
                    session_id: m.id,
                    usr: S(b.user) ? void 0 : b.user,
                    view: b.view
                }, b.context, Ht(y), f, h.getContext(), d);
                !Dt(f.status, He, h) || !1 === (null === (s = t.beforeSend) || void 0 === s ? void 0 : s.call(t, w)) || (null === (u = w.error) || void 0 === u ? void 0 : u.origin) !== we && (null !== (c = a[w.status]) && void 0 !== c ? c : a.custom).isLimitReached() || n.notify(1, w)
            }
        }
        ))
    }
    var Nt = !1;
    function Ht(t) {
        var n, r = window;
        if (Ve()) {
            var o = i(r.DD_RUM_SYNTHETICS);
            return o || Nt || (Nt = !0,
            function(t, n) {
                f(e.debug, t, n),
                nt(p({
                    type: Xe,
                    message: t,
                    status: "debug"
                }, n))
            }("Logs sent before RUM is injected by the synthetics worker", {
                testId: (n = window._DATADOG_SYNTHETICS_PUBLIC_ID || X("datadog-synthetics-public-id"),
                "string" == typeof n ? n : void 0),
                resultId: Je()
            })),
            o
        }
        return i(r.DD_RUM);
        function i(e) {
            if (e && e.getInternalContext)
                return e.getInternalContext(t)
        }
    }
    var $t, Gt = {};
    function zt(e) {
        var t = e.map((function(e) {
            return Gt[e] || (Gt[e] = function(e) {
                var t = new Oe((function() {
                    var n = console[e];
                    return console[e] = function() {
                        for (var r = [], o = 0; o < arguments.length; o++)
                            r[o] = arguments[o];
                        n.apply(console, r);
                        var i = _e();
                        c((function() {
                            t.notify(Vt(r, e, i))
                        }
                        ))
                    }
                    ,
                    function() {
                        console[e] = n
                    }
                }
                ));
                return t
            }(e)),
            Gt[e]
        }
        ));
        return Be.apply(void 0, t)
    }
    function Vt(t, n, r) {
        var o, i = t.map((function(e) {
            return function(e) {
                if ("string" == typeof e)
                    return e;
                if (e instanceof Error)
                    return Te(fe(e));
                return m(e, void 0, 2)
            }(e)
        }
        )).join(" ");
        if (n === e.error) {
            var s = function(e, t) {
                for (var n = 0; n < e.length; n += 1) {
                    var r = e[n];
                    if (t(r, n))
                        return r
                }
            }(t, (function(e) {
                return e instanceof Error
            }
            ));
            o = s ? Re(fe(s)) : void 0,
            i = "console error: ".concat(i)
        }
        return {
            api: n,
            message: i,
            stack: o,
            handlingStack: r
        }
    }
    var Jt, Wt = (($t = {})[e.log] = Fe.info,
    $t[e.debug] = Fe.debug,
    $t[e.info] = Fe.info,
    $t[e.warn] = Fe.warn,
    $t[e.error] = Fe.error,
    $t);
    var Xt, Yt = ((Jt = {})[qe.cspViolation] = Fe.error,
    Jt[qe.intervention] = Fe.error,
    Jt[qe.deprecation] = Fe.warn,
    Jt);
    function Zt(e, t, n) {
        var r = e[t]
          , o = n(r)
          , i = function() {
            if ("function" == typeof o)
                return o.apply(this, arguments)
        };
        return e[t] = i,
        {
            stop: function() {
                e[t] === i ? e[t] = r : o = r
            }
        }
    }
    function Kt(e, t, n) {
        var r = n.before
          , o = n.after;
        return Zt(e, t, (function(e) {
            return function() {
                var t, n = arguments;
                return r && c(r, this, n),
                "function" == typeof e && (t = e.apply(this, n)),
                o && c(o, this, n),
                t
            }
        }
        ))
    }
    var Qt, en = new WeakMap;
    function tn() {
        var e;
        return Xt || (e = new Oe((function() {
            var t = Kt(XMLHttpRequest.prototype, "open", {
                before: nn
            }).stop
              , n = Kt(XMLHttpRequest.prototype, "send", {
                before: function() {
                    rn.call(this, e)
                }
            }).stop
              , r = Kt(XMLHttpRequest.prototype, "abort", {
                before: on
            }).stop;
            return function() {
                t(),
                n(),
                r()
            }
        }
        )),
        Xt = e),
        Xt
    }
    function nn(e, t) {
        en.set(this, {
            state: "open",
            method: e,
            url: K(String(t))
        })
    }
    function rn(e) {
        var t = this
          , n = en.get(this);
        if (n) {
            var r = n;
            r.state = "start",
            r.startTime = D(),
            r.startClocks = F(),
            r.isAborted = !1,
            r.xhr = this;
            var o = !1
              , i = Kt(this, "onreadystatechange", {
                before: function() {
                    this.readyState === XMLHttpRequest.DONE && s()
                }
            }).stop
              , s = u((function() {
                if (t.removeEventListener("loadend", s),
                i(),
                !o) {
                    o = !0;
                    var a, u = n;
                    u.state = "complete",
                    u.duration = (a = r.startClocks.timeStamp,
                    U() - a),
                    u.status = t.status,
                    e.notify(p({}, u))
                }
            }
            ));
            this.addEventListener("loadend", s),
            e.notify(r)
        }
    }
    function on() {
        var e = en.get(this);
        e && (e.isAborted = !0)
    }
    function sn() {
        var e;
        return Qt || (e = new Oe((function() {
            if (window.fetch)
                return Zt(window, "fetch", (function(t) {
                    return function(n, r) {
                        var o, i = c(an, null, [e, n, r]);
                        return i ? (o = t.call(this, i.input, i.init),
                        c(un, null, [e, o, i])) : o = t.call(this, n, r),
                        o
                    }
                }
                )).stop
        }
        )),
        Qt = e),
        Qt
    }
    function an(e, t, n) {
        var r = n && n.method || "object" == typeof t && t.method || "GET"
          , o = K("object" == typeof t && t.url || t)
          , i = {
            state: "start",
            init: n,
            input: t,
            method: r,
            startClocks: F(),
            url: o
        };
        return e.notify(i),
        i
    }
    function un(e, t, n) {
        var r = function(t) {
            var r = n;
            r.state = "resolve",
            "stack"in t || t instanceof Error ? (r.status = 0,
            r.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR,
            r.error = t) : "status"in t && (r.response = t,
            r.responseType = t.type,
            r.status = t.status,
            r.isAborted = !1),
            e.notify(r)
        };
        t.then(u(r), u(r))
    }
    function cn(e, t) {
        if (!e.forwardErrorsToLogs)
            return {
                stop: y
            };
        var n = tn().subscribe((function(e) {
            "complete" === e.state && o("xhr", e)
        }
        ))
          , r = sn().subscribe((function(e) {
            "resolve" === e.state && o("fetch", e)
        }
        ));
        function o(n, r) {
            function o(e) {
                t.notify(0, {
                    rawLogsEvent: {
                        message: "".concat(ln(n), " error ").concat(r.method, " ").concat(r.url),
                        date: r.startClocks.timeStamp,
                        error: {
                            origin: xe,
                            stack: e || "Failed to load"
                        },
                        http: {
                            method: r.method,
                            status_code: r.status,
                            url: r.url
                        },
                        status: Fe.error,
                        origin: xe
                    }
                })
            }
            e.isIntakeUrl(r.url) || !function(e) {
                return 0 === e.status && "opaque" !== e.responseType
            }(r) && !function(e) {
                return e.status >= 500
            }(r) || ("xhr"in r ? function(e, t, n) {
                "string" == typeof e.response ? n(fn(e.response, t)) : n(e.response)
            }(r.xhr, e, o) : r.response ? function(e, t, n) {
                !e.body || e.bodyUsed ? n() : window.TextDecoder ? function(e, t, n) {
                    !function(e, t, n) {
                        var r = e.getReader()
                          , o = []
                          , i = 0;
                        function s() {
                            var e, s;
                            if (r.cancel().catch(y),
                            n.collectStreamBody) {
                                var a;
                                if (1 === o.length)
                                    a = o[0];
                                else {
                                    a = new Uint8Array(i);
                                    var u = 0;
                                    o.forEach((function(e) {
                                        a.set(e, u),
                                        u += e.length
                                    }
                                    ))
                                }
                                e = a.slice(0, n.bytesLimit),
                                s = a.length > n.bytesLimit
                            }
                            t(void 0, e, s)
                        }
                        !function e() {
                            r.read().then(u((function(t) {
                                t.done ? s() : (n.collectStreamBody && o.push(t.value),
                                (i += t.value.length) > n.bytesLimit ? s() : e())
                            }
                            )), u((function(e) {
                                return t(e)
                            }
                            )))
                        }()
                    }(e, (function(e, t, r) {
                        if (e)
                            n(e);
                        else {
                            var o = (new TextDecoder).decode(t);
                            r && (o += "..."),
                            n(void 0, o)
                        }
                    }
                    ), {
                        bytesLimit: t,
                        collectStreamBody: !0
                    })
                }(e.clone().body, t.requestErrorResponseLengthLimit, (function(e, t) {
                    n(e ? "Unable to retrieve response: ".concat(e) : t)
                }
                )) : e.clone().text().then(u((function(e) {
                    return n(fn(e, t))
                }
                )), u((function(e) {
                    return n("Unable to retrieve response: ".concat(e))
                }
                )))
            }(r.response, e, o) : r.error && function(e, t, n) {
                n(fn(Re(fe(e)), t))
            }(r.error, e, o))
        }
        return {
            stop: function() {
                n.unsubscribe(),
                r.unsubscribe()
            }
        }
    }
    function fn(e, t) {
        return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e
    }
    function ln(e) {
        return "xhr" === e ? "XHR" : "Fetch"
    }
    var dn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
    function vn(e) {
        var t = function(e) {
            return Kt(window, "onerror", {
                before: function(t, n, r, o, i) {
                    var s;
                    if (i)
                        s = fe(i),
                        e(s, i);
                    else {
                        var a, u = {
                            url: n,
                            column: o,
                            line: r
                        }, c = t;
                        if ("[object String]" === {}.toString.call(t)) {
                            var f = dn.exec(c);
                            f && (a = f[1],
                            c = f[2])
                        }
                        e(s = {
                            name: a,
                            message: "string" == typeof c ? c : void 0,
                            stack: [u]
                        }, t)
                    }
                }
            })
        }(e).stop
          , n = function(e) {
            return Kt(window, "onunhandledrejection", {
                before: function(t) {
                    var n = t.reason || "Empty reason"
                      , r = fe(n);
                    e(r, n)
                }
            })
        }(e).stop;
        return {
            stop: function() {
                t(),
                n()
            }
        }
    }
    function pn(e) {
        return vn((function(t, n) {
            e.notify(function(e) {
                var t = e.stackTrace
                  , n = e.originalError
                  , r = e.handlingStack
                  , o = e.startClocks
                  , i = e.nonErrorPrefix
                  , s = e.source
                  , a = e.handling;
                return t && (void 0 !== t.message || n instanceof Error) ? {
                    startClocks: o,
                    source: s,
                    handling: a,
                    originalError: n,
                    message: t.message || "Empty message",
                    stack: Re(t),
                    handlingStack: r,
                    type: t.name,
                    causes: Le(n, s)
                } : {
                    startClocks: o,
                    source: s,
                    handling: a,
                    originalError: n,
                    message: "".concat(i, " ").concat(m(n)),
                    stack: "No stack, consider using an instance of Error",
                    handlingStack: r,
                    type: t && t.name
                }
            }({
                stackTrace: t,
                originalError: n,
                startClocks: F(),
                nonErrorPrefix: "Uncaught",
                source: Se,
                handling: "unhandled"
            }))
        }
        ))
    }
    var gn = function() {
        function e() {
            this.callbacks = {}
        }
        return e.prototype.notify = function(e, t) {
            var n = this.callbacks[e];
            n && n.forEach((function(e) {
                return e(t)
            }
            ))
        }
        ,
        e.prototype.subscribe = function(e, t) {
            var n = this;
            return this.callbacks[e] || (this.callbacks[e] = []),
            this.callbacks[e].push(t),
            {
                unsubscribe: function() {
                    n.callbacks[e] = n.callbacks[e].filter((function(e) {
                        return t !== e
                    }
                    ))
                }
            }
        }
        ,
        e
    }();
    var hn, yn, mn, bn, wn = function(n) {
        var r, o, i = !1, a = P(), c = P(), f = {}, l = function() {}, d = new I, v = function(e, t, n, r) {
            void 0 === n && (n = O(y())),
            void 0 === r && (r = U()),
            d.add((function() {
                return v(e, t, n, r)
            }
            ))
        }, g = function() {}, h = new Ge((function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return v.apply(void 0, e)
        }
        ));
        function y() {
            return {
                view: {
                    referrer: document.referrer,
                    url: window.location.href
                },
                context: a.getContext(),
                user: c.getContext()
            }
        }
        return r = {
            logger: h,
            init: u((function(r) {
                var o;
                if (g = function() {
                    return O(r)
                }
                ,
                $() && (r = function(e) {
                    return p({}, e, {
                        clientToken: "empty"
                    })
                }(r)),
                function(e) {
                    return !i || (e.silentMultipleInit || t.error("DD_LOGS is already initialized."),
                    !1)
                }(r)) {
                    var s = function(t) {
                        var n = ae(t)
                          , r = Ue(t.forwardConsoleLogs, x(e), "Forward Console Logs")
                          , o = Ue(t.forwardReports, x(qe), "Forward Reports");
                        if (n && r && o)
                            return t.forwardErrorsToLogs && !w(r, e.error) && r.push(e.error),
                            p({
                                forwardErrorsToLogs: !1 !== t.forwardErrorsToLogs,
                                forwardConsoleLogs: r,
                                forwardReports: o,
                                requestErrorResponseLengthLimit: 32768
                            }, n)
                    }(r);
                    s && (o = n(r, s, y, h),
                    v = o.handleLog,
                    l = o.getInternalContext,
                    d.drain(),
                    i = !0)
                }
            }
            )),
            getLoggerGlobalContext: u(a.get),
            getGlobalContext: u(a.getContext),
            setLoggerGlobalContext: u(a.set),
            setGlobalContext: u(a.setContext),
            addLoggerGlobalContext: u(a.add),
            setGlobalContextProperty: u(a.setContextProperty),
            removeLoggerGlobalContext: u(a.remove),
            removeGlobalContextProperty: u(a.removeContextProperty),
            clearGlobalContext: u(a.clearContext),
            createLogger: u((function(e, t) {
                return void 0 === t && (t = {}),
                f[e] = new Ge((function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return v.apply(void 0, e)
                }
                ),e,t.handler,t.level,t.context),
                f[e]
            }
            )),
            getLogger: u((function(e) {
                return f[e]
            }
            )),
            getInitConfiguration: u((function() {
                return g()
            }
            )),
            getInternalContext: u((function(e) {
                return l(e)
            }
            )),
            setUser: u((function(e) {
                (function(e) {
                    var n = "object" === _(e);
                    return n || t.error("Unsupported user:", e),
                    n
                }
                )(e) && c.setContext(G(e))
            }
            )),
            getUser: u(c.getContext),
            setUserProperty: u((function(e, t) {
                var n, r = G((n = {},
                n[e] = t,
                n))[e];
                c.setContextProperty(e, r)
            }
            )),
            removeUserProperty: u(c.removeContextProperty),
            clearUser: u(c.clearContext)
        },
        o = p({
            version: "4.31.0",
            onReady: function(e) {
                e()
            }
        }, r),
        Object.defineProperty(o, "_setDebug", {
            get: function() {
                return s
            },
            enumerable: !1
        }),
        o
    }((function(n, r, o, i) {
        var s = new gn;
        s.subscribe(1, (function(e) {
            return ze("logs", e)
        }
        ));
        var a, u = function(e) {
            return s.notify(0, {
                rawLogsEvent: {
                    message: e.message,
                    date: e.startClocks.timeStamp,
                    error: {
                        origin: we
                    },
                    origin: we,
                    status: Fe.error
                }
            })
        }, c = a = new Oe((function() {
            var e = Ae(document, "visibilitychange", (function() {
                "hidden" === document.visibilityState && a.notify({
                    reason: "visibility_hidden"
                })
            }
            ), {
                capture: !0
            }).stop
              , t = Ae(window, "beforeunload", (function() {
                a.notify({
                    reason: "before_unload"
                })
            }
            )).stop;
            return function() {
                e(),
                t()
            }
        }
        )), f = function(e, t, n) {
            var r, o = et("browser-logs-sdk", e);
            if ($()) {
                var i = H();
                o.observable.subscribe((function(e) {
                    return i.send("internal_telemetry", e)
                }
                ))
            } else {
                var s = pt(e, e.rumEndpointBuilder, t, n, null === (r = e.replica) || void 0 === r ? void 0 : r.rumEndpointBuilder);
                o.observable.subscribe((function(t) {
                    return s.add(t, function(e) {
                        return "datad0g.com" === e.site
                    }(e))
                }
                ))
            }
            return o
        }(r, u, c);
        f.setContextProvider((function() {
            var e, t, n, r, o, i;
            return {
                application: {
                    id: null === (e = Ht()) || void 0 === e ? void 0 : e.application_id
                },
                session: {
                    id: null === (t = h.findTrackedSession()) || void 0 === t ? void 0 : t.id
                },
                view: {
                    id: null === (r = null === (n = Ht()) || void 0 === n ? void 0 : n.view) || void 0 === r ? void 0 : r.id
                },
                action: {
                    id: null === (i = null === (o = Ht()) || void 0 === o ? void 0 : o.user_action) || void 0 === i ? void 0 : i.id
                }
            }
        }
        )),
        cn(r, s),
        function(e, t) {
            if (!e.forwardErrorsToLogs)
                return {
                    stop: y
                };
            var n = new Oe
              , r = pn(n).stop
              , o = n.subscribe((function(e) {
                t.notify(0, {
                    rawLogsEvent: {
                        message: e.message,
                        date: e.startClocks.timeStamp,
                        error: {
                            kind: e.type,
                            origin: Se,
                            stack: e.stack
                        },
                        origin: Se,
                        status: Fe.error
                    }
                })
            }
            ))
        }(r, s),
        function(t, n) {
            var r = zt(t.forwardConsoleLogs).subscribe((function(t) {
                n.notify(0, {
                    rawLogsEvent: {
                        date: U(),
                        message: t.message,
                        origin: Ce,
                        error: t.api === e.error ? {
                            origin: Ce,
                            stack: t.stack
                        } : void 0,
                        status: Wt[t.api]
                    }
                })
            }
            ))
        }(r, s),
        function(e, t) {
            var n = Ie(e.forwardReports).subscribe((function(e) {
                var n, r = e.message, o = Yt[e.type];
                o === Fe.error ? n = {
                    kind: e.subtype,
                    origin: Ee,
                    stack: e.stack
                } : e.stack && (r += " Found in ".concat(function(e) {
                    var t;
                    return null === (t = /@ (.+)/.exec(e)) || void 0 === t ? void 0 : t[1]
                }(e.stack))),
                t.notify(0, {
                    rawLogsEvent: {
                        date: U(),
                        message: r,
                        origin: Ee,
                        error: n,
                        status: o
                    }
                })
            }
            ))
        }(r, s);
        var l, v = function(e) {
            return {
                handleLog: function(n, r, o, i) {
                    var s = n.context;
                    Dt(n.status, Ne, r) && t(n.status, n.message, B(r.getContext(), s)),
                    e.notify(0, {
                        rawLogsEvent: {
                            date: i || U(),
                            message: n.message,
                            status: n.status,
                            origin: ke
                        },
                        messageContext: s,
                        savedCommonContext: o,
                        logger: r
                    })
                }
            }
        }(s).handleLog, h = !function(e) {
            if (void 0 === document.cookie || null === document.cookie)
                return !1;
            try {
                var n = "dd_cookie_test_".concat(g())
                  , r = "test";
                W(n, r, d, e);
                var o = X(n) === r;
                return Y(n, e),
                o
            } catch (e) {
                return t.error(e),
                !1
            }
        }(r.cookieOptions) || $() || Ve() ? function(e) {
            var t = "1" === jt(e) ? {} : void 0;
            return {
                findTrackedSession: function() {
                    return t
                }
            }
        }(r) : It(r);
        return Ft(h, r, s, o, i, u),
        $() ? function(e) {
            var t = H();
            e.subscribe(1, (function(e) {
                t.send("log", e)
            }
            ))
        }(s) : function(e, t, n, r) {
            var o, i = pt(e, e.logsEndpointBuilder, n, r, null === (o = e.replica) || void 0 === o ? void 0 : o.logsEndpointBuilder);
            t.subscribe(1, (function(e) {
                i.add(e)
            }
            ))
        }(r, s, u, c),
        function(e) {
            Qe.telemetryConfigurationEnabled && nt({
                type: Ye,
                configuration: e
            })
        }(function(e) {
            var t = function(e) {
                var t;
                return {
                    session_sample_rate: null !== (t = e.sessionSampleRate) && void 0 !== t ? t : e.sampleRate,
                    telemetry_sample_rate: e.telemetrySampleRate,
                    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                    use_before_send: !!e.beforeSend,
                    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                    use_secure_session_cookie: e.useSecureSessionCookie,
                    use_proxy: void 0 !== e.proxyUrl ? !!e.proxyUrl : void 0,
                    silent_multiple_init: e.silentMultipleInit,
                    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                    track_resources: e.trackResources,
                    track_long_task: e.trackLongTasks
                }
            }(e);
            return p({
                forward_errors_to_logs: e.forwardErrorsToLogs,
                forward_console_logs: e.forwardConsoleLogs,
                forward_reports: e.forwardReports
            }, t)
        }(n)),
        {
            handleLog: v,
            getInternalContext: (l = h,
            {
                get: function(e) {
                    var t = l.findTrackedSession(e);
                    if (t)
                        return {
                            session_id: t.id
                        }
                }
            }).get
        }
    }
    ));
    hn = R(),
    mn = wn,
    bn = hn[yn = "DD_LOGS"],
    hn[yn] = mn,
    bn && bn.q && bn.q.forEach((function(e) {
        return n(e, "onReady callback threw an error:")()
    }
    ));
    const Cn = {
        token: "puba72873a87fe0e826394ed87d5793eb65",
        sessionSampleRate: 10,
        blacklist: ["ten_basket", "abcya_paint"]
    };
    function kn() {
        let e = 0
          , t = null;
        return n=>(null == n ? void 0 : n.message) !== t && (t = null == n ? void 0 : n.message,
        e++,
        e <= 50)
    }
    (async function() {
        const e = {
            "media.abcya.com": "prod",
            "content-staging.abcya.com": "staging"
        };
        let t = "unknown"
          , n = "unknown";
        try {
            const i = new URL(document.URL)
              , s = e[i.hostname.toLowerCase()];
            if (!s)
                return;
            let a = "staging" === s ? 100 : Cn.sessionSampleRate;
            const u = await fetch("assets/json/gameInfo.json");
            if (u.ok) {
                var r;
                const e = await u.json();
                var o;
                if (n = (null == e ? void 0 : e.gameVersion) || n,
                t = (null == e ? void 0 : e.gameShortName) || t,
                void 0 !== (null == e || null === (r = e.analytics) || void 0 === r ? void 0 : r.logSampleRate))
                    a = null == e || null === (o = e.analytics) || void 0 === o ? void 0 : o.logSampleRate
            } else {
                const e = i.pathname.split("/");
                t = e.length > 2 ? e[2] : t
            }
            if (0 === a || Cn.blacklist.includes(t))
                return void console.log("ABCya DD disabled");
            wn.init({
                clientToken: Cn.token,
                site: "datadoghq.com",
                forwardErrorsToLogs: !0,
                sessionSampleRate: a,
                service: "game",
                version: `${t}:${n}`,
                env: s,
                beforeSend: kn()
            }),
            console.log(`ABCya DD initialized: ${t}:${n} (sample rate: ${a}%)`)
        } catch (e) {
            console.log(`ABCya DD init error: ${t}:${n}`, e)
        }
    }
    )();
    if (window.parent.location !== window.location) {
        const e = 5e3
          , t = 30
          , n = 500
          , r = 1e3;
        let o = 0
          , i = 0
          , s = 1;
        const a = e=>{
            window.focus(),
            o++
        }
          , u = ()=>{
            document.hasFocus() && (i += r)
        }
          , c = e=>{
            document.hasFocus() && o++
        }
          , f = ()=>{
            const t = {
                id: 0,
                source: "game",
                type: "analytics",
                payload: {
                    interactionTotalCount: o,
                    hasFocus: document.hasFocus(),
                    focusTime: i,
                    intervalTime: e,
                    origin: window.location.origin,
                    pathname: window.location.pathname
                }
            };
            window.parent.postMessage(t, "*")
        }
        ;
        let l;
        const d = ()=>{
            l = document.getElementsByTagName("canvas")[0],
            !l && s <= 1e3 * t / n ? setTimeout((()=>{
                s++,
                d()
            }
            ), n) : l ? (l.addEventListener("touchend", a),
            l.addEventListener("click", a),
            document.addEventListener("keyup", c),
            f(),
            setInterval(f, e),
            setInterval(u, r)) : console.warn(`Failed to get game canvas and exceeded retry limit of: ${t} seconds`)
        }
        ;
        d()
    }
}();
