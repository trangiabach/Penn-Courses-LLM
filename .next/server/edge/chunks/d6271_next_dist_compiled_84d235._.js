(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/d6271_next_dist_compiled_84d235._.js", {

"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/process/browser.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/cookie/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/buffer/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/lru-cache/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    var t = {
        806: (t, e, i)=>{
            const s = i(190);
            const n = Symbol("max");
            const l = Symbol("length");
            const r = Symbol("lengthCalculator");
            const h = Symbol("allowStale");
            const a = Symbol("maxAge");
            const o = Symbol("dispose");
            const u = Symbol("noDisposeOnSet");
            const f = Symbol("lruList");
            const p = Symbol("cache");
            const v = Symbol("updateAgeOnGet");
            const naiveLength = ()=>1;
            class LRUCache {
                constructor(t){
                    if (typeof t === "number") t = {
                        max: t
                    };
                    if (!t) t = {};
                    if (t.max && (typeof t.max !== "number" || t.max < 0)) throw new TypeError("max must be a non-negative number");
                    const e = this[n] = t.max || Infinity;
                    const i = t.length || naiveLength;
                    this[r] = typeof i !== "function" ? naiveLength : i;
                    this[h] = t.stale || false;
                    if (t.maxAge && typeof t.maxAge !== "number") throw new TypeError("maxAge must be a number");
                    this[a] = t.maxAge || 0;
                    this[o] = t.dispose;
                    this[u] = t.noDisposeOnSet || false;
                    this[v] = t.updateAgeOnGet || false;
                    this.reset();
                }
                set max(t) {
                    if (typeof t !== "number" || t < 0) throw new TypeError("max must be a non-negative number");
                    this[n] = t || Infinity;
                    trim(this);
                }
                get max() {
                    return this[n];
                }
                set allowStale(t) {
                    this[h] = !!t;
                }
                get allowStale() {
                    return this[h];
                }
                set maxAge(t) {
                    if (typeof t !== "number") throw new TypeError("maxAge must be a non-negative number");
                    this[a] = t;
                    trim(this);
                }
                get maxAge() {
                    return this[a];
                }
                set lengthCalculator(t) {
                    if (typeof t !== "function") t = naiveLength;
                    if (t !== this[r]) {
                        this[r] = t;
                        this[l] = 0;
                        this[f].forEach((t)=>{
                            t.length = this[r](t.value, t.key);
                            this[l] += t.length;
                        });
                    }
                    trim(this);
                }
                get lengthCalculator() {
                    return this[r];
                }
                get length() {
                    return this[l];
                }
                get itemCount() {
                    return this[f].length;
                }
                rforEach(t, e) {
                    e = e || this;
                    for(let i = this[f].tail; i !== null;){
                        const s = i.prev;
                        forEachStep(this, t, i, e);
                        i = s;
                    }
                }
                forEach(t, e) {
                    e = e || this;
                    for(let i = this[f].head; i !== null;){
                        const s = i.next;
                        forEachStep(this, t, i, e);
                        i = s;
                    }
                }
                keys() {
                    return this[f].toArray().map((t)=>t.key);
                }
                values() {
                    return this[f].toArray().map((t)=>t.value);
                }
                reset() {
                    if (this[o] && this[f] && this[f].length) {
                        this[f].forEach((t)=>this[o](t.key, t.value));
                    }
                    this[p] = new Map;
                    this[f] = new s;
                    this[l] = 0;
                }
                dump() {
                    return this[f].map((t)=>isStale(this, t) ? false : {
                            k: t.key,
                            v: t.value,
                            e: t.now + (t.maxAge || 0)
                        }).toArray().filter((t)=>t);
                }
                dumpLru() {
                    return this[f];
                }
                set(t, e, i) {
                    i = i || this[a];
                    if (i && typeof i !== "number") throw new TypeError("maxAge must be a number");
                    const s = i ? Date.now() : 0;
                    const h = this[r](e, t);
                    if (this[p].has(t)) {
                        if (h > this[n]) {
                            del(this, this[p].get(t));
                            return false;
                        }
                        const r = this[p].get(t);
                        const a = r.value;
                        if (this[o]) {
                            if (!this[u]) this[o](t, a.value);
                        }
                        a.now = s;
                        a.maxAge = i;
                        a.value = e;
                        this[l] += h - a.length;
                        a.length = h;
                        this.get(t);
                        trim(this);
                        return true;
                    }
                    const v = new Entry(t, e, h, s, i);
                    if (v.length > this[n]) {
                        if (this[o]) this[o](t, e);
                        return false;
                    }
                    this[l] += v.length;
                    this[f].unshift(v);
                    this[p].set(t, this[f].head);
                    trim(this);
                    return true;
                }
                has(t) {
                    if (!this[p].has(t)) return false;
                    const e = this[p].get(t).value;
                    return !isStale(this, e);
                }
                get(t) {
                    return get(this, t, true);
                }
                peek(t) {
                    return get(this, t, false);
                }
                pop() {
                    const t = this[f].tail;
                    if (!t) return null;
                    del(this, t);
                    return t.value;
                }
                del(t) {
                    del(this, this[p].get(t));
                }
                load(t) {
                    this.reset();
                    const e = Date.now();
                    for(let i = t.length - 1; i >= 0; i--){
                        const s = t[i];
                        const n = s.e || 0;
                        if (n === 0) this.set(s.k, s.v);
                        else {
                            const t = n - e;
                            if (t > 0) {
                                this.set(s.k, s.v, t);
                            }
                        }
                    }
                }
                prune() {
                    this[p].forEach((t, e)=>get(this, e, false));
                }
            }
            const get = (t, e, i)=>{
                const s = t[p].get(e);
                if (s) {
                    const e = s.value;
                    if (isStale(t, e)) {
                        del(t, s);
                        if (!t[h]) return undefined;
                    } else {
                        if (i) {
                            if (t[v]) s.value.now = Date.now();
                            t[f].unshiftNode(s);
                        }
                    }
                    return e.value;
                }
            };
            const isStale = (t, e)=>{
                if (!e || !e.maxAge && !t[a]) return false;
                const i = Date.now() - e.now;
                return e.maxAge ? i > e.maxAge : t[a] && i > t[a];
            };
            const trim = (t)=>{
                if (t[l] > t[n]) {
                    for(let e = t[f].tail; t[l] > t[n] && e !== null;){
                        const i = e.prev;
                        del(t, e);
                        e = i;
                    }
                }
            };
            const del = (t, e)=>{
                if (e) {
                    const i = e.value;
                    if (t[o]) t[o](i.key, i.value);
                    t[l] -= i.length;
                    t[p].delete(i.key);
                    t[f].removeNode(e);
                }
            };
            class Entry {
                constructor(t, e, i, s, n){
                    this.key = t;
                    this.value = e;
                    this.length = i;
                    this.now = s;
                    this.maxAge = n || 0;
                }
            }
            const forEachStep = (t, e, i, s)=>{
                let n = i.value;
                if (isStale(t, n)) {
                    del(t, i);
                    if (!t[h]) n = undefined;
                }
                if (n) e.call(s, n.value, n.key, t);
            };
            t.exports = LRUCache;
        },
        76: (t)=>{
            t.exports = function(t) {
                t.prototype[Symbol.iterator] = function*() {
                    for(let t = this.head; t; t = t.next){
                        yield t.value;
                    }
                };
            };
        },
        190: (t, e, i)=>{
            t.exports = Yallist;
            Yallist.Node = Node;
            Yallist.create = Yallist;
            function Yallist(t) {
                var e = this;
                if (!(e instanceof Yallist)) {
                    e = new Yallist;
                }
                e.tail = null;
                e.head = null;
                e.length = 0;
                if (t && typeof t.forEach === "function") {
                    t.forEach(function(t) {
                        e.push(t);
                    });
                } else if (arguments.length > 0) {
                    for(var i = 0, s = arguments.length; i < s; i++){
                        e.push(arguments[i]);
                    }
                }
                return e;
            }
            Yallist.prototype.removeNode = function(t) {
                if (t.list !== this) {
                    throw new Error("removing node which does not belong to this list");
                }
                var e = t.next;
                var i = t.prev;
                if (e) {
                    e.prev = i;
                }
                if (i) {
                    i.next = e;
                }
                if (t === this.head) {
                    this.head = e;
                }
                if (t === this.tail) {
                    this.tail = i;
                }
                t.list.length--;
                t.next = null;
                t.prev = null;
                t.list = null;
                return e;
            };
            Yallist.prototype.unshiftNode = function(t) {
                if (t === this.head) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.head;
                t.list = this;
                t.next = e;
                if (e) {
                    e.prev = t;
                }
                this.head = t;
                if (!this.tail) {
                    this.tail = t;
                }
                this.length++;
            };
            Yallist.prototype.pushNode = function(t) {
                if (t === this.tail) {
                    return;
                }
                if (t.list) {
                    t.list.removeNode(t);
                }
                var e = this.tail;
                t.list = this;
                t.prev = e;
                if (e) {
                    e.next = t;
                }
                this.tail = t;
                if (!this.head) {
                    this.head = t;
                }
                this.length++;
            };
            Yallist.prototype.push = function() {
                for(var t = 0, e = arguments.length; t < e; t++){
                    push(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.unshift = function() {
                for(var t = 0, e = arguments.length; t < e; t++){
                    unshift(this, arguments[t]);
                }
                return this.length;
            };
            Yallist.prototype.pop = function() {
                if (!this.tail) {
                    return undefined;
                }
                var t = this.tail.value;
                this.tail = this.tail.prev;
                if (this.tail) {
                    this.tail.next = null;
                } else {
                    this.head = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.shift = function() {
                if (!this.head) {
                    return undefined;
                }
                var t = this.head.value;
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null;
                }
                this.length--;
                return t;
            };
            Yallist.prototype.forEach = function(t, e) {
                e = e || this;
                for(var i = this.head, s = 0; i !== null; s++){
                    t.call(e, i.value, s, this);
                    i = i.next;
                }
            };
            Yallist.prototype.forEachReverse = function(t, e) {
                e = e || this;
                for(var i = this.tail, s = this.length - 1; i !== null; s--){
                    t.call(e, i.value, s, this);
                    i = i.prev;
                }
            };
            Yallist.prototype.get = function(t) {
                for(var e = 0, i = this.head; i !== null && e < t; e++){
                    i = i.next;
                }
                if (e === t && i !== null) {
                    return i.value;
                }
            };
            Yallist.prototype.getReverse = function(t) {
                for(var e = 0, i = this.tail; i !== null && e < t; e++){
                    i = i.prev;
                }
                if (e === t && i !== null) {
                    return i.value;
                }
            };
            Yallist.prototype.map = function(t, e) {
                e = e || this;
                var i = new Yallist;
                for(var s = this.head; s !== null;){
                    i.push(t.call(e, s.value, this));
                    s = s.next;
                }
                return i;
            };
            Yallist.prototype.mapReverse = function(t, e) {
                e = e || this;
                var i = new Yallist;
                for(var s = this.tail; s !== null;){
                    i.push(t.call(e, s.value, this));
                    s = s.prev;
                }
                return i;
            };
            Yallist.prototype.reduce = function(t, e) {
                var i;
                var s = this.head;
                if (arguments.length > 1) {
                    i = e;
                } else if (this.head) {
                    s = this.head.next;
                    i = this.head.value;
                } else {
                    throw new TypeError("Reduce of empty list with no initial value");
                }
                for(var n = 0; s !== null; n++){
                    i = t(i, s.value, n);
                    s = s.next;
                }
                return i;
            };
            Yallist.prototype.reduceReverse = function(t, e) {
                var i;
                var s = this.tail;
                if (arguments.length > 1) {
                    i = e;
                } else if (this.tail) {
                    s = this.tail.prev;
                    i = this.tail.value;
                } else {
                    throw new TypeError("Reduce of empty list with no initial value");
                }
                for(var n = this.length - 1; s !== null; n--){
                    i = t(i, s.value, n);
                    s = s.prev;
                }
                return i;
            };
            Yallist.prototype.toArray = function() {
                var t = new Array(this.length);
                for(var e = 0, i = this.head; i !== null; e++){
                    t[e] = i.value;
                    i = i.next;
                }
                return t;
            };
            Yallist.prototype.toArrayReverse = function() {
                var t = new Array(this.length);
                for(var e = 0, i = this.tail; i !== null; e++){
                    t[e] = i.value;
                    i = i.prev;
                }
                return t;
            };
            Yallist.prototype.slice = function(t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var i = new Yallist;
                if (e < t || e < 0) {
                    return i;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for(var s = 0, n = this.head; n !== null && s < t; s++){
                    n = n.next;
                }
                for(; n !== null && s < e; s++, n = n.next){
                    i.push(n.value);
                }
                return i;
            };
            Yallist.prototype.sliceReverse = function(t, e) {
                e = e || this.length;
                if (e < 0) {
                    e += this.length;
                }
                t = t || 0;
                if (t < 0) {
                    t += this.length;
                }
                var i = new Yallist;
                if (e < t || e < 0) {
                    return i;
                }
                if (t < 0) {
                    t = 0;
                }
                if (e > this.length) {
                    e = this.length;
                }
                for(var s = this.length, n = this.tail; n !== null && s > e; s--){
                    n = n.prev;
                }
                for(; n !== null && s > t; s--, n = n.prev){
                    i.push(n.value);
                }
                return i;
            };
            Yallist.prototype.splice = function(t, e) {
                if (t > this.length) {
                    t = this.length - 1;
                }
                if (t < 0) {
                    t = this.length + t;
                }
                for(var i = 0, s = this.head; s !== null && i < t; i++){
                    s = s.next;
                }
                var n = [];
                for(var i = 0; s && i < e; i++){
                    n.push(s.value);
                    s = this.removeNode(s);
                }
                if (s === null) {
                    s = this.tail;
                }
                if (s !== this.head && s !== this.tail) {
                    s = s.prev;
                }
                for(var i = 2; i < arguments.length; i++){
                    s = insert(this, s, arguments[i]);
                }
                return n;
            };
            Yallist.prototype.reverse = function() {
                var t = this.head;
                var e = this.tail;
                for(var i = t; i !== null; i = i.prev){
                    var s = i.prev;
                    i.prev = i.next;
                    i.next = s;
                }
                this.head = e;
                this.tail = t;
                return this;
            };
            function insert(t, e, i) {
                var s = e === t.head ? new Node(i, null, e, t) : new Node(i, e, e.next, t);
                if (s.next === null) {
                    t.tail = s;
                }
                if (s.prev === null) {
                    t.head = s;
                }
                t.length++;
                return s;
            }
            function push(t, e) {
                t.tail = new Node(e, t.tail, null, t);
                if (!t.head) {
                    t.head = t.tail;
                }
                t.length++;
            }
            function unshift(t, e) {
                t.head = new Node(e, null, t.head, t);
                if (!t.tail) {
                    t.tail = t.head;
                }
                t.length++;
            }
            function Node(t, e, i, s) {
                if (!(this instanceof Node)) {
                    return new Node(t, e, i, s);
                }
                this.list = s;
                this.value = t;
                if (e) {
                    e.next = this;
                    this.prev = e;
                } else {
                    this.prev = null;
                }
                if (i) {
                    i.prev = this;
                    this.next = i;
                } else {
                    this.next = null;
                }
            }
            try {
                i(76)(Yallist);
            } catch (t) {}
        }
    };
    var e = {};
    function __nccwpck_require__(i) {
        var s = e[i];
        if (s !== undefined) {
            return s.exports;
        }
        var n = e[i] = {
            exports: {}
        };
        var l = true;
        try {
            t[i](n, n.exports, __nccwpck_require__);
            l = false;
        } finally{
            if (l) delete e[i];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var i = __nccwpck_require__(806);
    module.exports = i;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/path-browserify/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        114: function(e) {
            function assertPath(e) {
                if (typeof e !== "string") {
                    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
                }
            }
            function normalizeStringPosix(e, r) {
                var t = "";
                var i = 0;
                var n = -1;
                var a = 0;
                var f;
                for(var l = 0; l <= e.length; ++l){
                    if (l < e.length) f = e.charCodeAt(l);
                    else if (f === 47) break;
                    else f = 47;
                    if (f === 47) {
                        if (n === l - 1 || a === 1) {} else if (n !== l - 1 && a === 2) {
                            if (t.length < 2 || i !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                                if (t.length > 2) {
                                    var s = t.lastIndexOf("/");
                                    if (s !== t.length - 1) {
                                        if (s === -1) {
                                            t = "";
                                            i = 0;
                                        } else {
                                            t = t.slice(0, s);
                                            i = t.length - 1 - t.lastIndexOf("/");
                                        }
                                        n = l;
                                        a = 0;
                                        continue;
                                    }
                                } else if (t.length === 2 || t.length === 1) {
                                    t = "";
                                    i = 0;
                                    n = l;
                                    a = 0;
                                    continue;
                                }
                            }
                            if (r) {
                                if (t.length > 0) t += "/..";
                                else t = "..";
                                i = 2;
                            }
                        } else {
                            if (t.length > 0) t += "/" + e.slice(n + 1, l);
                            else t = e.slice(n + 1, l);
                            i = l - n - 1;
                        }
                        n = l;
                        a = 0;
                    } else if (f === 46 && a !== -1) {
                        ++a;
                    } else {
                        a = -1;
                    }
                }
                return t;
            }
            function _format(e, r) {
                var t = r.dir || r.root;
                var i = r.base || (r.name || "") + (r.ext || "");
                if (!t) {
                    return i;
                }
                if (t === r.root) {
                    return t + i;
                }
                return t + e + i;
            }
            var r = {
                resolve: function resolve() {
                    var e = "";
                    var r = false;
                    var t;
                    for(var i = arguments.length - 1; i >= -1 && !r; i--){
                        var n;
                        if (i >= 0) n = arguments[i];
                        else {
                            if (t === undefined) t = "";
                            n = t;
                        }
                        assertPath(n);
                        if (n.length === 0) {
                            continue;
                        }
                        e = n + "/" + e;
                        r = n.charCodeAt(0) === 47;
                    }
                    e = normalizeStringPosix(e, !r);
                    if (r) {
                        if (e.length > 0) return "/" + e;
                        else return "/";
                    } else if (e.length > 0) {
                        return e;
                    } else {
                        return ".";
                    }
                },
                normalize: function normalize(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0) === 47;
                    var t = e.charCodeAt(e.length - 1) === 47;
                    e = normalizeStringPosix(e, !r);
                    if (e.length === 0 && !r) e = ".";
                    if (e.length > 0 && t) e += "/";
                    if (r) return "/" + e;
                    return e;
                },
                isAbsolute: function isAbsolute(e) {
                    assertPath(e);
                    return e.length > 0 && e.charCodeAt(0) === 47;
                },
                join: function join() {
                    if (arguments.length === 0) return ".";
                    var e;
                    for(var t = 0; t < arguments.length; ++t){
                        var i = arguments[t];
                        assertPath(i);
                        if (i.length > 0) {
                            if (e === undefined) e = i;
                            else e += "/" + i;
                        }
                    }
                    if (e === undefined) return ".";
                    return r.normalize(e);
                },
                relative: function relative(e, t) {
                    assertPath(e);
                    assertPath(t);
                    if (e === t) return "";
                    e = r.resolve(e);
                    t = r.resolve(t);
                    if (e === t) return "";
                    var i = 1;
                    for(; i < e.length; ++i){
                        if (e.charCodeAt(i) !== 47) break;
                    }
                    var n = e.length;
                    var a = n - i;
                    var f = 1;
                    for(; f < t.length; ++f){
                        if (t.charCodeAt(f) !== 47) break;
                    }
                    var l = t.length;
                    var s = l - f;
                    var o = a < s ? a : s;
                    var u = -1;
                    var h = 0;
                    for(; h <= o; ++h){
                        if (h === o) {
                            if (s > o) {
                                if (t.charCodeAt(f + h) === 47) {
                                    return t.slice(f + h + 1);
                                } else if (h === 0) {
                                    return t.slice(f + h);
                                }
                            } else if (a > o) {
                                if (e.charCodeAt(i + h) === 47) {
                                    u = h;
                                } else if (h === 0) {
                                    u = 0;
                                }
                            }
                            break;
                        }
                        var c = e.charCodeAt(i + h);
                        var v = t.charCodeAt(f + h);
                        if (c !== v) break;
                        else if (c === 47) u = h;
                    }
                    var g = "";
                    for(h = i + u + 1; h <= n; ++h){
                        if (h === n || e.charCodeAt(h) === 47) {
                            if (g.length === 0) g += "..";
                            else g += "/..";
                        }
                    }
                    if (g.length > 0) return g + t.slice(f + u);
                    else {
                        f += u;
                        if (t.charCodeAt(f) === 47) ++f;
                        return t.slice(f);
                    }
                },
                _makeLong: function _makeLong(e) {
                    return e;
                },
                dirname: function dirname(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0);
                    var t = r === 47;
                    var i = -1;
                    var n = true;
                    for(var a = e.length - 1; a >= 1; --a){
                        r = e.charCodeAt(a);
                        if (r === 47) {
                            if (!n) {
                                i = a;
                                break;
                            }
                        } else {
                            n = false;
                        }
                    }
                    if (i === -1) return t ? "/" : ".";
                    if (t && i === 1) return "//";
                    return e.slice(0, i);
                },
                basename: function basename(e, r) {
                    if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
                    assertPath(e);
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a;
                    if (r !== undefined && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var f = r.length - 1;
                        var l = -1;
                        for(a = e.length - 1; a >= 0; --a){
                            var s = e.charCodeAt(a);
                            if (s === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else {
                                if (l === -1) {
                                    n = false;
                                    l = a + 1;
                                }
                                if (f >= 0) {
                                    if (s === r.charCodeAt(f)) {
                                        if (--f === -1) {
                                            i = a;
                                        }
                                    } else {
                                        f = -1;
                                        i = l;
                                    }
                                }
                            }
                        }
                        if (t === i) i = l;
                        else if (i === -1) i = e.length;
                        return e.slice(t, i);
                    } else {
                        for(a = e.length - 1; a >= 0; --a){
                            if (e.charCodeAt(a) === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else if (i === -1) {
                                n = false;
                                i = a + 1;
                            }
                        }
                        if (i === -1) return "";
                        return e.slice(t, i);
                    }
                },
                extname: function extname(e) {
                    assertPath(e);
                    var r = -1;
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a = 0;
                    for(var f = e.length - 1; f >= 0; --f){
                        var l = e.charCodeAt(f);
                        if (l === 47) {
                            if (!n) {
                                t = f + 1;
                                break;
                            }
                            continue;
                        }
                        if (i === -1) {
                            n = false;
                            i = f + 1;
                        }
                        if (l === 46) {
                            if (r === -1) r = f;
                            else if (a !== 1) a = 1;
                        } else if (r !== -1) {
                            a = -1;
                        }
                    }
                    if (r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === t + 1) {
                        return "";
                    }
                    return e.slice(r, i);
                },
                format: function format(e) {
                    if (e === null || typeof e !== "object") {
                        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    }
                    return _format("/", e);
                },
                parse: function parse(e) {
                    assertPath(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (e.length === 0) return r;
                    var t = e.charCodeAt(0);
                    var i = t === 47;
                    var n;
                    if (i) {
                        r.root = "/";
                        n = 1;
                    } else {
                        n = 0;
                    }
                    var a = -1;
                    var f = 0;
                    var l = -1;
                    var s = true;
                    var o = e.length - 1;
                    var u = 0;
                    for(; o >= n; --o){
                        t = e.charCodeAt(o);
                        if (t === 47) {
                            if (!s) {
                                f = o + 1;
                                break;
                            }
                            continue;
                        }
                        if (l === -1) {
                            s = false;
                            l = o + 1;
                        }
                        if (t === 46) {
                            if (a === -1) a = o;
                            else if (u !== 1) u = 1;
                        } else if (a !== -1) {
                            u = -1;
                        }
                    }
                    if (a === -1 || l === -1 || u === 0 || u === 1 && a === l - 1 && a === f + 1) {
                        if (l !== -1) {
                            if (f === 0 && i) r.base = r.name = e.slice(1, l);
                            else r.base = r.name = e.slice(f, l);
                        }
                    } else {
                        if (f === 0 && i) {
                            r.name = e.slice(1, a);
                            r.base = e.slice(1, l);
                        } else {
                            r.name = e.slice(f, a);
                            r.base = e.slice(f, l);
                        }
                        r.ext = e.slice(a, l);
                    }
                    if (f > 0) r.dir = e.slice(0, f - 1);
                    else if (i) r.dir = "/";
                    return r;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            r.posix = r;
            e.exports = r;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var i = r[t];
        if (i !== undefined) {
            return i.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var a = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(114);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/querystring-es3/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        815: function(e) {
            function hasOwnProperty(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }
            e.exports = function(e, n, t, o) {
                n = n || "&";
                t = t || "=";
                var a = {};
                if (typeof e !== "string" || e.length === 0) {
                    return a;
                }
                var i = /\+/g;
                e = e.split(n);
                var u = 1e3;
                if (o && typeof o.maxKeys === "number") {
                    u = o.maxKeys;
                }
                var c = e.length;
                if (u > 0 && c > u) {
                    c = u;
                }
                for(var p = 0; p < c; ++p){
                    var f = e[p].replace(i, "%20"), s = f.indexOf(t), _, l, y, d;
                    if (s >= 0) {
                        _ = f.substr(0, s);
                        l = f.substr(s + 1);
                    } else {
                        _ = f;
                        l = "";
                    }
                    y = decodeURIComponent(_);
                    d = decodeURIComponent(l);
                    if (!hasOwnProperty(a, y)) {
                        a[y] = d;
                    } else if (r(a[y])) {
                        a[y].push(d);
                    } else {
                        a[y] = [
                            a[y],
                            d
                        ];
                    }
                }
                return a;
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
        },
        577: function(e) {
            var stringifyPrimitive = function(e) {
                switch(typeof e){
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return "";
                }
            };
            e.exports = function(e, t, o, a) {
                t = t || "&";
                o = o || "=";
                if (e === null) {
                    e = undefined;
                }
                if (typeof e === "object") {
                    return map(n(e), function(n) {
                        var a = encodeURIComponent(stringifyPrimitive(n)) + o;
                        if (r(e[n])) {
                            return map(e[n], function(e) {
                                return a + encodeURIComponent(stringifyPrimitive(e));
                            }).join(t);
                        } else {
                            return a + encodeURIComponent(stringifyPrimitive(e[n]));
                        }
                    }).join(t);
                }
                if (!a) return "";
                return encodeURIComponent(stringifyPrimitive(a)) + o + encodeURIComponent(stringifyPrimitive(e));
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
            function map(e, r) {
                if (e.map) return e.map(r);
                var n = [];
                for(var t = 0; t < e.length; t++){
                    n.push(r(e[t], t));
                }
                return n;
            }
            var n = Object.keys || function(e) {
                var r = [];
                for(var n in e){
                    if (Object.prototype.hasOwnProperty.call(e, n)) r.push(n);
                }
                return r;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(n) {
        var t = r[n];
        if (t !== undefined) {
            return t.exports;
        }
        var o = r[n] = {
            exports: {}
        };
        var a = true;
        try {
            e[n](o, o.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[n];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    !function() {
        var e = n;
        e.decode = e.parse = __nccwpck_require__(815);
        e.encode = e.stringify = __nccwpck_require__(577);
    }();
    module.exports = n;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/native-url/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        452: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/querystring-es3/index.js [app-edge-rsc] (ecmascript)");
        }
    };
    var t = {};
    function __nccwpck_require__(o) {
        var a = t[o];
        if (a !== undefined) {
            return a.exports;
        }
        var s = t[o] = {
            exports: {}
        };
        var n = true;
        try {
            e[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = {};
    !function() {
        var e = o;
        var t, a = (t = __nccwpck_require__(452)) && "object" == typeof t && "default" in t ? t.default : t, s = /https?|ftp|gopher|file/;
        function r(e) {
            "string" == typeof e && (e = d(e));
            var t = function(e, t, o) {
                var a = e.auth, s = e.hostname, n = e.protocol || "", p = e.pathname || "", c = e.hash || "", i = e.query || "", u = !1;
                a = a ? encodeURIComponent(a).replace(/%3A/i, ":") + "@" : "", e.host ? u = a + e.host : s && (u = a + (~s.indexOf(":") ? "[" + s + "]" : s), e.port && (u += ":" + e.port)), i && "object" == typeof i && (i = t.encode(i));
                var f = e.search || i && "?" + i || "";
                return n && ":" !== n.substr(-1) && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), p && "/" !== p[0] && (p = "/" + p)) : u || (u = ""), c && "#" !== c[0] && (c = "#" + c), f && "?" !== f[0] && (f = "?" + f), {
                    protocol: n,
                    host: u,
                    pathname: p = p.replace(/[?#]/g, encodeURIComponent),
                    search: f = f.replace("#", "%23"),
                    hash: c
                };
            }(e, a, s);
            return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
        }
        var n = "http://", p = "w.w", c = n + p, i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i, u = /https?|ftp|gopher|file/;
        function h(e, t) {
            var o = "string" == typeof e ? d(e) : e;
            e = "object" == typeof e ? r(e) : e;
            var a = d(t), s = "";
            o.protocol && !o.slashes && (s = o.protocol, e = e.replace(o.protocol, ""), s += "/" === t[0] || "/" === e[0] ? "/" : ""), s && a.protocol && (s = "", a.slashes || (s = a.protocol, t = t.replace(a.protocol, "")));
            var p = e.match(i);
            p && !a.protocol && (e = e.substr((s = p[1] + (p[2] || "")).length), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
            var f = new URL(e, c + "/"), m = new URL(t, f).toString().replace(c, ""), v = a.protocol || o.protocol;
            return v += o.slashes || a.slashes ? "//" : "", !s && v ? m = m.replace(n, v) : s && (m = m.replace(n, "")), u.test(m) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== m.slice(-1) || (m = m.slice(0, -1)), s && (m = s + ("/" === m[0] ? m.substr(1) : m)), m;
        }
        function l() {}
        l.prototype.parse = d, l.prototype.format = r, l.prototype.resolve = h, l.prototype.resolveObject = h;
        var f = /^https?|ftp|gopher|file/, m = /^(.*?)([#?].*)/, v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i, _ = /^([a-z0-9.+-]*:)?\/\/\/*/i, b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
        function d(e, t, o) {
            if (void 0 === t && (t = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof l) return e;
            var s = (e = e.trim()).match(m);
            e = s ? s[1].replace(/\\/g, "/") + s[2] : e.replace(/\\/g, "/"), b.test(e) && "/" !== e.slice(-1) && (e += "/");
            var n = !/(^javascript)/.test(e) && e.match(v), i = _.test(e), u = "";
            n && (f.test(n[1]) || (u = n[1].toLowerCase(), e = "" + n[2] + n[3]), n[2] || (i = !1, f.test(n[1]) ? (u = n[1], e = "" + n[3]) : e = "//" + n[3]), 3 !== n[2].length && 1 !== n[2].length || (u = n[1], e = "/" + n[3]));
            var g, y = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/), w = y && y[1], x = new l, C = "", U = "";
            try {
                g = new URL(e);
            } catch (t) {
                C = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (U = "/", e = e.substr(1));
                try {
                    g = new URL(e, c);
                } catch (e) {
                    return x.protocol = u, x.href = u, x;
                }
            }
            x.slashes = i && !U, x.host = g.host === p ? "" : g.host, x.hostname = g.hostname === p ? "" : g.hostname.replace(/(\[|\])/g, ""), x.protocol = C ? u || null : g.protocol, x.search = g.search.replace(/\\/g, "%5C"), x.hash = g.hash.replace(/\\/g, "%5C");
            var j = e.split("#");
            !x.search && ~j[0].indexOf("?") && (x.search = "?"), x.hash || "" !== j[1] || (x.hash = "#"), x.query = t ? a.decode(g.search.substr(1)) : x.search.substr(1), x.pathname = U + (n ? function(e) {
                return e.replace(/['^|`]/g, function(e) {
                    return "%" + e.charCodeAt().toString(16).toUpperCase();
                }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                    try {
                        return decodeURIComponent(t).split("").map(function(e) {
                            var t = e.charCodeAt();
                            return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase();
                        }).join("");
                    } catch (e) {
                        return t;
                    }
                });
            }(g.pathname) : g.pathname), "about:" === x.protocol && "blank" === x.pathname && (x.protocol = "", x.pathname = ""), C && "/" !== e[0] && (x.pathname = x.pathname.substr(1)), u && !f.test(u) && "/" !== e.slice(-1) && "/" === x.pathname && (x.pathname = ""), x.path = x.pathname + x.search, x.auth = [
                g.username,
                g.password
            ].map(decodeURIComponent).filter(Boolean).join(":"), x.port = g.port, w && !x.host.endsWith(w) && (x.host += w, x.port = w.slice(1)), x.href = U ? "" + x.pathname + x.search + x.hash : r(x);
            var q = /^(file)/.test(x.href) ? [
                "host",
                "hostname"
            ] : [];
            return Object.keys(x).forEach(function(e) {
                ~q.indexOf(e) || (x[e] = x[e] || null);
            }), x;
        }
        e.parse = d, e.format = r, e.resolve = h, e.resolveObject = function(e, t) {
            return d(h(e, t));
        }, e.Url = l;
    }();
    module.exports = o;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/path-to-regexp/index.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for(var i = 0; i < groups.length; i++){
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                } else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp; //# sourceMappingURL=index.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/cjs/react.shared-subset.development.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react.shared-subset.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher$1 = {
            current: null
        };
        /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
            /**
   * @internal
   * @type {ReactComponent}
   */ current: null
        };
        var ReactDebugCurrentFrame$1 = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
            {
                currentExtraStackFrame = stack;
            }
        }
        {
            ReactDebugCurrentFrame$1.setExtraStackFrame = function(stack) {
                {
                    currentExtraStackFrame = stack;
                }
            }; // Stack implementation injected by the current renderer.
            ReactDebugCurrentFrame$1.getCurrentStack = null;
            ReactDebugCurrentFrame$1.getStackAddendum = function() {
                var stack = ''; // Add an extra top frame while an element is being validated
                if (currentExtraStackFrame) {
                    stack += currentExtraStackFrame;
                } // Delegate to the injected renderer-specific implementation
                var impl = ReactDebugCurrentFrame$1.getCurrentStack;
                if (impl) {
                    stack += impl() || '';
                }
                return stack;
            };
        }
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
        var ReactSharedInternals = {
            ReactCurrentDispatcher: ReactCurrentDispatcher$1,
            ReactCurrentOwner: ReactCurrentOwner
        };
        {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame$1;
        }
        // by calls to these methods by a Babel plugin.
        //
        // In PROD (or in packages without access to React internals),
        // they are left as they are instead.
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var assign = Object.assign;
        /**
 * Keeps track of the current Cache dispatcher.
 */ var ReactCurrentCache = {
            current: null
        };
        function createFetchCache() {
            return new Map();
        }
        var simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]'; // generateCacheKey(new Request('https://blank'));
        function generateCacheKey(request) {
            // We pick the fields that goes into the key used to dedupe requests.
            // We don't include the `cache` field, because we end up using whatever
            // caching resulted from the first request.
            // Notably we currently don't consider non-standard (or future) options.
            // This might not be safe. TODO: warn for non-standard extensions differing.
            // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
            return JSON.stringify([
                request.method,
                Array.from(request.headers.entries()),
                request.mode,
                request.redirect,
                request.credentials,
                request.referrer,
                request.referrerPolicy,
                request.integrity
            ]);
        }
        {
            if (typeof fetch === 'function') {
                var originalFetch = fetch;
                var cachedFetch = function fetch1(resource, options) {
                    var dispatcher = ReactCurrentCache.current;
                    if (!dispatcher) {
                        // We're outside a cached scope.
                        return originalFetch(resource, options);
                    }
                    if (options && options.signal && options.signal !== dispatcher.getCacheSignal()) {
                        // If we're passed a signal that is not ours, then we assume that
                        // someone else controls the lifetime of this object and opts out of
                        // caching. It's effectively the opt-out mechanism.
                        // Ideally we should be able to check this on the Request but
                        // it always gets initialized with its own signal so we don't
                        // know if it's supposed to override - unless we also override the
                        // Request constructor.
                        return originalFetch(resource, options);
                    } // Normalize the Request
                    var url;
                    var cacheKey;
                    if (typeof resource === 'string' && !options) {
                        // Fast path.
                        cacheKey = simpleCacheKey;
                        url = resource;
                    } else {
                        // Normalize the request.
                        // if resource is not a string or a URL (its an instance of Request)
                        // then do not instantiate a new Request but instead
                        // reuse the request as to not disturb the body in the event it's a ReadableStream.
                        var request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
                        if (request.method !== 'GET' && request.method !== 'HEAD' || // $FlowFixMe[prop-missing]: keepalive is real
                        request.keepalive) {
                            // We currently don't dedupe requests that might have side-effects. Those
                            // have to be explicitly cached. We assume that the request doesn't have a
                            // body if it's GET or HEAD.
                            // keepalive gets treated the same as if you passed a custom cache signal.
                            return originalFetch(resource, options);
                        }
                        cacheKey = generateCacheKey(request);
                        url = request.url;
                    }
                    var cache = dispatcher.getCacheForType(createFetchCache);
                    var cacheEntries = cache.get(url);
                    var match;
                    if (cacheEntries === undefined) {
                        // We pass the original arguments here in case normalizing the Request
                        // doesn't include all the options in this environment.
                        match = originalFetch(resource, options);
                        cache.set(url, [
                            cacheKey,
                            match
                        ]);
                    } else {
                        // We use an array as the inner data structure since it's lighter and
                        // we typically only expect to see one or two entries here.
                        for(var i = 0, l = cacheEntries.length; i < l; i += 2){
                            var key = cacheEntries[i];
                            var value = cacheEntries[i + 1];
                            if (key === cacheKey) {
                                match = value; // I would've preferred a labelled break but lint says no.
                                return match.then(function(response) {
                                    return response.clone();
                                });
                            }
                        }
                        match = originalFetch(resource, options);
                        cacheEntries.push(cacheKey, match);
                    } // We clone the response so that each time you call this you get a new read
                    // of the body so that it can be read multiple times.
                    return match.then(function(response) {
                        return response.clone();
                    });
                }; // We don't expect to see any extra properties on fetch but if there are any,
                // copy them over. Useful for extended fetch environments or mocks.
                assign(cachedFetch, originalFetch);
                try {
                    // eslint-disable-next-line no-native-reassign
                    fetch = cachedFetch;
                } catch (error1) {
                    try {
                        // In case assigning it globally fails, try globalThis instead just in case it exists.
                        globalThis.fetch = cachedFetch;
                    } catch (error2) {
                        // Log even in production just to make sure this is seen if only prod is frozen.
                        // eslint-disable-next-line react-internal/no-production-logging
                        warn('React was unable to patch the fetch() function in this environment. ' + 'Suspensey APIs might not work correctly as a result.');
                    }
                }
            }
        }
        var ReactServerSharedInternals = {
            ReactCurrentCache: ReactCurrentCache
        };
        var ReactVersion = '18.3.0-canary-0cdfef19b-20231211';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
                var warningKey = componentName + "." + callerName;
                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                    return;
                }
                error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
        }
        /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
            /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
                return false;
            },
            /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
                warnNoop(publicInstance, 'forceUpdate');
            },
            /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                warnNoop(publicInstance, 'replaceState');
            },
            /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                warnNoop(publicInstance, 'setState');
            }
        };
        var emptyObject = {};
        {
            Object.freeze(emptyObject);
        }
        /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.
            this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
            // renderer.
            this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
                throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
            }
            this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */ {
            var deprecatedAPIs = {
                isMounted: [
                    'isMounted',
                    'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'
                ],
                replaceState: [
                    'replaceState',
                    'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'
                ]
            };
            var defineDeprecationWarning = function(methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                    get: function() {
                        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                        return undefined;
                    }
                });
            };
            for(var fnName in deprecatedAPIs){
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                    defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
            }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        // an immutable object with a single mutable value
        function createRef() {
            var refObject = {
                current: null
            };
            {
                Object.seal(refObject);
            }
            return refObject;
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
        function isArray(a) {
            return isArrayImpl(a);
        }
        /*
 * The `'' + value` pattern (used in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function typeName(value) {
            {
                // toStringTag is needed for namespaced types like Temporal.Instant
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object'; // $FlowFixMe[incompatible-return]
                return type;
            }
        } // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            // If you ended up here by following an exception call stack, here's what's
            // happened: you supplied an object or symbol value to React (as a prop, key,
            // DOM attribute, CSS property, string ref, etc.) and when React tried to
            // coerce it to a string using `'' + value`, an exception was thrown.
            //
            // The most common types that will cause this exception are `Symbol` instances
            // and Temporal objects like `Temporal.Instant`. But any object that has a
            // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
            // exception. (Library authors do this to prevent users from using built-in
            // numeric operators like `+` or comparison operators like `>=` because custom
            // methods are needed to perform accurate arithmetic or comparison.)
            //
            // To fix the problem, coerce this object or symbol value to a string before
            // passing it to React. The most reliable way is usually `String(value)`.
            //
            // To find which value is throwing, check the browser or debugger console.
            // Before this exception was thrown, there should be `console.error` output
            // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
            // problem and how that type was used: key, atrribute, input value prop, etc.
            // In most cases, this console output also shows the component and its
            // ancestor components where the exception happened.
            //
            // eslint-disable-next-line react-internal/safe-string-coercion
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber
        function getContextName(type) {
            return type.displayName || 'Context';
        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
        function getComponentNameFromType(type) {
            if (type == null) {
                // Host root, text node or just invalid type.
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        // $FlowFixMe[method-unbinding]
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
                {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
                get: warnAboutAccessingKey,
                configurable: true
            });
        }
        function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
                {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
                get: warnAboutAccessingRef,
                configurable: true
            });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ function ReactElement(type, key, ref, self, source, owner, props) {
            var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner
            };
            {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                }); // self and source are DEV only properties.
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement$1(type, config, children) {
            var propName; // Reserved names are extracted
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    {
                        warnIfStringRefCannotBeAutoConverted(config);
                    }
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                {
                    if (Object.freeze) {
                        Object.freeze(childArray);
                    }
                }
                props.children = childArray;
            } // Resolve default props
            if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for(propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
            }
            {
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
        }
        /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement$1(element, config, children) {
            if (element === null || element === undefined) {
                throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName; // Original props are copied
            var props = assign({}, element.props); // Reserved names are extracted
            var key = element.key;
            var ref = element.ref; // Self is preserved since the owner is preserved.
            var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
            // transpiler, and the original source is probably a better indicator of the
            // true owner.
            var source = element._source; // Owner will be preserved, unless ref is overridden
            var owner = element._owner;
            if (config != null) {
                if (hasValidRef(config)) {
                    // Silently steal the ref from the parent.
                    ref = config.ref;
                    owner = ReactCurrentOwner.current;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                } // Remaining properties override existing props
                var defaultProps;
                if (element.type && element.type.defaultProps) {
                    defaultProps = element.type.defaultProps;
                }
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        if (config[propName] === undefined && defaultProps !== undefined) {
                            // Resolve default props
                            props[propName] = defaultProps[propName];
                        } else {
                            props[propName] = config[propName];
                        }
                    }
                }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
                '=': '=0',
                ':': '=2'
            };
            var escapedString = key.replace(escapeRegex, function(match) {
                return escaperLookup[match];
            });
            return '$' + escapedString;
        }
        /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
            // Do some typechecking here since we call this blindly. We want to ensure
            // that we don't block potential future ES APIs.
            if (typeof element === 'object' && element !== null && element.key != null) {
                // Explicit key
                {
                    checkKeyStringCoercion(element.key);
                }
                return escape('' + element.key);
            } // Implicit key determined by the index in the set
            return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === 'undefined' || type === 'boolean') {
                // All of the above are perceived as null.
                children = null;
            }
            var invokeCallback = false;
            if (children === null) {
                invokeCallback = true;
            } else {
                switch(type){
                    case 'string':
                    case 'number':
                        invokeCallback = true;
                        break;
                    case 'object':
                        switch(children.$$typeof){
                            case REACT_ELEMENT_TYPE:
                            case REACT_PORTAL_TYPE:
                                invokeCallback = true;
                        }
                }
            }
            if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows:
                var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                if (isArray(mappedChild)) {
                    var escapedChildKey = '';
                    if (childKey != null) {
                        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                    }
                    mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                        return c;
                    });
                } else if (mappedChild != null) {
                    if (isValidElement(mappedChild)) {
                        {
                            // The `if` statement here prevents auto-disabling of the safe
                            // coercion ESLint rule, so we must manually disable it below.
                            // $FlowFixMe[incompatible-type] Flow incorrectly thinks React.Portal doesn't have a key
                            if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                checkKeyStringCoercion(mappedChild.key);
                            }
                        }
                        mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                        escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey('' + mappedChild.key // eslint-disable-line react-internal/safe-string-coercion
                        ) + '/' : '') + childKey);
                    }
                    array.push(mappedChild);
                }
                return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0; // Count of children found in the current subtree.
            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
                for(var i = 0; i < children.length; i++){
                    child = children[i];
                    nextName = nextNamePrefix + getElementKey(child, i);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else {
                var iteratorFn = getIteratorFn(children);
                if (typeof iteratorFn === 'function') {
                    var iterableChildren = children;
                    {
                        // Warn about using Maps as children
                        if (iteratorFn === iterableChildren.entries) {
                            if (!didWarnAboutMaps) {
                                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                            }
                            didWarnAboutMaps = true;
                        }
                    }
                    var iterator = iteratorFn.call(iterableChildren);
                    var step;
                    var ii = 0; // $FlowFixMe[incompatible-use] `iteratorFn` might return null according to typing.
                    while(!(step = iterator.next()).done){
                        child = step.value;
                        nextName = nextNamePrefix + getElementKey(child, ii++);
                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                    }
                } else if (type === 'object') {
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    var childrenString = String(children);
                    throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
                }
            }
            return subtreeCount;
        }
        /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
            if (children == null) {
                // $FlowFixMe limitation refining abstract types in Flow
                return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function(child) {
                return func.call(context, child, count++);
            });
            return result;
        }
        /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
                n++; // Don't return anything
            });
            return n;
        }
        /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments); // Don't return anything.
            }, forEachContext);
        }
        /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        }
        /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
            if (!isValidElement(children)) {
                throw new Error('React.Children.only expected to receive a single React element child.');
            }
            return children;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor(); // Transition to the next state.
                // This might throw either because it's missing or throws. If so, we treat it
                // as still uninitialized and try again next time. Which is the same as what
                // happens if the ctor or any wrappers processing the ctor throws. This might
                // end up fixing it if the resolution was a concurrency bug.
                thenable.then(function(moduleObject) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        // Transition to the next state.
                        var resolved = payload;
                        resolved._status = Resolved;
                        resolved._result = moduleObject;
                    }
                }, function(error) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        // Transition to the next state.
                        var rejected = payload;
                        rejected._status = Rejected;
                        rejected._result = error;
                    }
                });
                if (payload._status === Uninitialized) {
                    // In case, we're still uninitialized, then we're waiting for the thenable
                    // to resolve. Set it as pending in the meantime.
                    var pending = payload;
                    pending._status = Pending;
                    pending._result = thenable;
                }
            }
            if (payload._status === Resolved) {
                var moduleObject = payload._result;
                {
                    if (moduleObject === undefined) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
                    }
                }
                {
                    if (!('default' in moduleObject)) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                    }
                }
                return moduleObject.default;
            } else {
                throw payload._result;
            }
        }
        function lazy(ctor) {
            var payload = {
                // We use these fields to store the result.
                _status: Uninitialized,
                _result: ctor
            };
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer
            };
            {
                // In production, this would just set it on the object.
                var defaultProps;
                var propTypes; // $FlowFixMe[prop-missing]
                Object.defineProperties(lazyType, {
                    defaultProps: {
                        configurable: true,
                        get: function() {
                            return defaultProps;
                        },
                        // $FlowFixMe[missing-local-annot]
                        set: function(newDefaultProps) {
                            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            defaultProps = newDefaultProps; // Match production behavior more closely:
                            // $FlowFixMe[prop-missing]
                            Object.defineProperty(lazyType, 'defaultProps', {
                                enumerable: true
                            });
                        }
                    },
                    propTypes: {
                        configurable: true,
                        get: function() {
                            return propTypes;
                        },
                        // $FlowFixMe[missing-local-annot]
                        set: function(newPropTypes) {
                            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            propTypes = newPropTypes; // Match production behavior more closely:
                            // $FlowFixMe[prop-missing]
                            Object.defineProperty(lazyType, 'propTypes', {
                                enumerable: true
                            });
                        }
                    }
                });
            }
            return lazyType;
        }
        function forwardRef(render) {
            {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                    error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
                } else if (typeof render !== 'function') {
                    error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
                } else {
                    if (render.length !== 0 && render.length !== 2) {
                        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
                    }
                }
                if (render != null) {
                    if (render.defaultProps != null || render.propTypes != null) {
                        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
                    }
                }
            }
            var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name; // The inner component shouldn't inherit this display name in most cases,
                        // because the component may be used elsewhere.
                        // But it's nice for anonymous functions to inherit the name,
                        // so that our component-stack generation logic will display their frames.
                        // An anonymous function generally suggests a pattern like:
                        //   React.forwardRef((props, ref) => {...});
                        // This kind of inner function is not used elsewhere so the side effect is okay.
                        if (!render.name && !render.displayName) {
                            render.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function memo(type, compare) {
            {
                if (!isValidElementType(type)) {
                    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
                }
            }
            var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name; // The inner component shouldn't inherit this display name in most cases,
                        // because the component may be used elsewhere.
                        // But it's nice for anonymous functions to inherit the name,
                        // so that our component-stack generation logic will display their frames.
                        // An anonymous function generally suggests a pattern like:
                        //   React.memo((props) => {...});
                        // This kind of inner function is not used elsewhere so the side effect is okay.
                        if (!type.name && !type.displayName) {
                            type.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var UNTERMINATED = 0;
        var TERMINATED = 1;
        var ERRORED = 2;
        function createCacheRoot() {
            return new WeakMap();
        }
        function createCacheNode() {
            return {
                s: UNTERMINATED,
                // status, represents whether the cached computation returned a value or threw an error
                v: undefined,
                // value, either the cached result or an error, depending on s
                o: null,
                // object cache, a WeakMap where non-primitive arguments are stored
                p: null // primitive cache, a regular Map where primitive arguments are stored.
            };
        }
        function cache(fn) {
            return function() {
                var dispatcher = ReactCurrentCache.current;
                if (!dispatcher) {
                    // If there is no dispatcher, then we treat this as not being cached.
                    // $FlowFixMe[incompatible-call]: We don't want to use rest arguments since we transpile the code.
                    return fn.apply(null, arguments);
                }
                var fnMap = dispatcher.getCacheForType(createCacheRoot);
                var fnNode = fnMap.get(fn);
                var cacheNode;
                if (fnNode === undefined) {
                    cacheNode = createCacheNode();
                    fnMap.set(fn, cacheNode);
                } else {
                    cacheNode = fnNode;
                }
                for(var i = 0, l = arguments.length; i < l; i++){
                    var arg = arguments[i];
                    if (typeof arg === 'function' || typeof arg === 'object' && arg !== null) {
                        // Objects go into a WeakMap
                        var objectCache = cacheNode.o;
                        if (objectCache === null) {
                            cacheNode.o = objectCache = new WeakMap();
                        }
                        var objectNode = objectCache.get(arg);
                        if (objectNode === undefined) {
                            cacheNode = createCacheNode();
                            objectCache.set(arg, cacheNode);
                        } else {
                            cacheNode = objectNode;
                        }
                    } else {
                        // Primitives go into a regular Map
                        var primitiveCache = cacheNode.p;
                        if (primitiveCache === null) {
                            cacheNode.p = primitiveCache = new Map();
                        }
                        var primitiveNode = primitiveCache.get(arg);
                        if (primitiveNode === undefined) {
                            cacheNode = createCacheNode();
                            primitiveCache.set(arg, cacheNode);
                        } else {
                            cacheNode = primitiveNode;
                        }
                    }
                }
                if (cacheNode.s === TERMINATED) {
                    return cacheNode.v;
                }
                if (cacheNode.s === ERRORED) {
                    throw cacheNode.v;
                }
                try {
                    // $FlowFixMe[incompatible-call]: We don't want to use rest arguments since we transpile the code.
                    var result = fn.apply(null, arguments);
                    var terminatedNode = cacheNode;
                    terminatedNode.s = TERMINATED;
                    terminatedNode.v = result;
                    return result;
                } catch (error) {
                    // We store the first error that's thrown and rethrow it.
                    var erroredNode = cacheNode;
                    erroredNode.s = ERRORED;
                    erroredNode.v = error;
                    throw error;
                }
            };
        }
        function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher$1.current;
            {
                if (dispatcher === null) {
                    error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
                }
            }
            // intentionally don't throw our own error because this is in a hot path.
            // Also helps ensure this is inlined.
            return dispatcher;
        }
        function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
                // TODO: add a more generic warning for invalid values.
                if (Context._context !== undefined) {
                    var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                    // and nobody should be using this in existing code.
                    if (realContext.Consumer === Context) {
                        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
                    } else if (realContext.Provider === Context) {
                        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
                    }
                }
            }
            return dispatcher.useContext(Context);
        }
        function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
        }
        function useDebugValue(value, formatterFn) {
            {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
            }
        }
        function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
        }
        function use(usable) {
            var dispatcher = resolveDispatcher();
            return dispatcher.use(usable);
        }
        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    // Extract the VM specific prefix used by each line.
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                } // We use the prefix to ensure our stacks line up with native stack frames.
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        /**
 * Leverages native browser/VM stack frames to get proper details (e.g.
 * filename, line + col number) for a single component in a component stack. We
 * do this by:
 *   (1) throwing and catching an error in the function - this will be our
 *       control error.
 *   (2) calling the component which will eventually throw an error that we'll
 *       catch - this will be our sample error.
 *   (3) diffing the control and sample error stacks to find the stack frame
 *       which represents our component.
 */ function describeNativeComponentFrame(fn, construct) {
            // If something asked for a stack inside a fake render, it should get ignored.
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe[incompatible-type] It does accept undefined.
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            /**
   * Finding a common stack frame between sample and control errors can be
   * tricky given the different types and levels of stack trace truncation from
   * different JS VMs. So instead we'll attempt to control what that common
   * frame should be through this object method:
   * Having both the sample and control errors be in the function under the
   * `DescribeNativeComponentFrameRoot` property, + setting the `name` and
   * `displayName` properties of the function ensures that a stack
   * frame exists that has the method name `DescribeNativeComponentFrameRoot` in
   * it for both control and sample stacks.
   */ var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    var control;
                    try {
                        // This should throw.
                        if (construct) {
                            // Something should be setting the props in the constructor.
                            var Fake = function() {
                                throw Error();
                            }; // $FlowFixMe[prop-missing]
                            Object.defineProperty(Fake.prototype, 'props', {
                                set: function() {
                                    // We use a throwing setter instead of frozen or non-writable props
                                    // because that won't throw in a non-strict mode function.
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === 'object' && Reflect.construct) {
                                // We construct a different control for this case to include any extra
                                // frames added by the construct call.
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                } // $FlowFixMe[prop-missing] found when upgrading Flow
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            } // TODO(luna): This will currently only throw if the function component
                            // tries to access React/ReactDOM/props. We should probably make this throw
                            // in simple components too
                            var maybePromise = fn(); // If the function component returns a promise, it's likely an async
                            // component, which we don't yet support. Attach a noop catch handler to
                            // silence the error.
                            // TODO: Implement component stacks for async client components?
                            if (maybePromise && typeof maybePromise.catch === 'function') {
                                maybePromise.catch(function() {});
                            }
                        }
                    } catch (sample) {
                        // This is inlined manually because closure doesn't do it for us.
                        if (sample && control && typeof sample.stack === 'string') {
                            return [
                                sample.stack,
                                control.stack
                            ];
                        }
                    }
                    return [
                        null,
                        null
                    ];
                }
            }; // $FlowFixMe[prop-missing]
            RunInRootFrame.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, 'name'); // Before ES6, the `name` property was not configurable.
            if (namePropDescriptor && namePropDescriptor.configurable) {
                // V8 utilizes a function's `name` property when generating a stack trace.
                Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, // is set to `false`.
                // $FlowFixMe[cannot-write]
                'name', {
                    value: 'DetermineComponentFrameRoot'
                });
            }
            try {
                var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
                if (sampleStack && controlStack) {
                    // This extracts the first frame from the sample that isn't also in the control.
                    // Skipping one frame that we assume is the frame that calls the two.
                    var sampleLines = sampleStack.split('\n');
                    var controlLines = controlStack.split('\n');
                    var s = 0;
                    var c = 0;
                    while(s < sampleLines.length && !sampleLines[s].includes('DetermineComponentFrameRoot')){
                        s++;
                    }
                    while(c < controlLines.length && !controlLines[c].includes('DetermineComponentFrameRoot')){
                        c++;
                    } // We couldn't find our intentionally injected common root frame, attempt
                    // to find another common root frame by search from the bottom of the
                    // control stack...
                    if (s === sampleLines.length || c === controlLines.length) {
                        s = sampleLines.length - 1;
                        c = controlLines.length - 1;
                        while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                            // We expect at least one stack frame to be shared.
                            // Typically this will be the root most one. However, stack frames may be
                            // cut off due to maximum stack limits. In this case, one maybe cut off
                            // earlier than the other. We assume that the sample is longer or the same
                            // and there for cut off earlier. So we should find the root most frame in
                            // the sample somewhere in the control.
                            c--;
                        }
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        // Next we find the first one that isn't the same which should be the
                        // frame that called our sample function and the control.
                        if (sampleLines[s] !== controlLines[c]) {
                            // In V8, the first line is describing the message but other VMs don't.
                            // If we're about to return the first line, and the control is also on the same
                            // line, that's a pretty good indicator that our sample threw at same line as
                            // the control. I.e. before we entered the sample frame. So we ignore this result.
                            // This can happen if you passed a class to function component, or non-function.
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--; // We may still have similar intermediate frames from the construct call.
                                    // The next one that isn't the same should be our match though.
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                                        // but we have a user-provided "displayName"
                                        // splice it in to make the stack more readable.
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        if ("TURBOPACK compile-time truthy", 1) {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        } // Return the line we found.
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            } // Fallback to just using the name if we couldn't make it throw.
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        // Memo may contain any component type so we recursively resolve it.
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                // Lazy may contain any component type so we recursively resolve it.
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                // $FlowFixMe[incompatible-use] This is okay but Flow doesn't know it.
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                        // fail the render phase where it didn't fail before. So we log it.
                        // After these have been cleaned up, we'll let them throw.
                        try {
                            // This is intentionally an invariant that gets caught. It's the same
                            // behavior as without this statement except with a better message.
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                // eslint-disable-next-line react-internal/prod-error-codes
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement$1(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement$1(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            // Only monitor this failure once because there tends to be a lot of the
                            // same error.
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement$1(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
            }
        }
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    setExtraStackFrame(stack);
                } else {
                    setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
                var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (name) {
                    return '\n\nCheck the render method of `' + name + '`.';
                }
            }
            return '';
        }
        function getSourceInfoErrorAddendum(source) {
            if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                var lineNumber = source.lineNumber;
                return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }
            return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return '';
        }
        /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                    info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
            }
            return info;
        }
        /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
                return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
            // property, it may be the creator of the child that's responsible for
            // assigning it a key.
            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                // Give the component that originally created this child.
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
            if (typeof node !== 'object' || !node) {
                return;
            }
            if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
            else if (isArray(node)) {
                for(var i = 0; i < node.length; i++){
                    var child = node[i];
                    if (isValidElement(child)) {
                        validateExplicitKey(child, parentType);
                    }
                }
            } else if (isValidElement(node)) {
                // This element was passed in a valid location.
                if (node._store) {
                    node._store.validated = true;
                }
            } else {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === 'function') {
                    // Entry iterators used to provide implicit keys,
                    // but now we print a separate warning for them later.
                    if (iteratorFn !== node.entries) {
                        var iterator = iteratorFn.call(node);
                        var step;
                        while(!(step = iterator.next()).done){
                            if (isValidElement(step.value)) {
                                validateExplicitKey(step.value, parentType);
                            }
                        }
                    }
                }
            }
        }
        /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                if (type.$$typeof === REACT_CLIENT_REFERENCE) {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                } else {
                    return;
                }
                if (propTypes) {
                    // Intentionally inside to avoid triggering lazy initializers:
                    var name = getComponentNameFromType(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
                    var _name = getComponentNameFromType(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.
            if (!validType) {
                var info = '';
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                if (sourceInfo) {
                    info += sourceInfo;
                } else {
                    info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                    typeString = 'null';
                } else if (isArray(type)) {
                    typeString = 'array';
                } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                    typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                    info = ' Did you accidentally export a JSX literal instead of a component?';
                } else {
                    typeString = typeof type;
                }
                {
                    error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
            }
            var element = createElement$1.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.
            if (element == null) {
                return element;
            } // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)
            if (validType) {
                for(var i = 2; i < arguments.length; i++){
                    validateChildKeys(arguments[i], type);
                }
            }
            if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
            } else {
                validatePropTypes(element);
            }
            return element;
        }
        function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement$1.apply(this, arguments);
            for(var i = 2; i < arguments.length; i++){
                validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
        }
        function createServerContext(globalName, defaultValue) {
            {
                throw new Error('Not implemented.');
            }
        }
        /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
            transition: null
        };
        function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
                ReactCurrentBatchConfig.transition._updatedFibers = new Set();
            }
            try {
                scope();
            } finally{
                ReactCurrentBatchConfig.transition = prevTransition;
                {
                    if (prevTransition === null && currentTransition._updatedFibers) {
                        var updatedFibersCount = currentTransition._updatedFibers.size;
                        currentTransition._updatedFibers.clear();
                        if (updatedFibersCount > 10) {
                            warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
                        }
                    }
                }
            }
        }
        var createElement = createElementWithValidation;
        var cloneElement = cloneElementWithValidation;
        var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
        };
        exports.Children = Children;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactServerSharedInternals;
        exports.cache = cache;
        exports.cloneElement = cloneElement;
        exports.createElement = createElement;
        exports.createRef = createRef;
        exports.createServerContext = createServerContext;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.use = use;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useId = useId;
        exports.useMemo = useMemo;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/cjs/react.shared-subset.development.js [app-edge-rsc] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-dom-server-rendering-stub.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js [app-edge-rsc] (ecmascript)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var ReactVersion = '18.3.0-canary-0cdfef19b-20231211';
        var Internals = {
            usingClientEntryPoint: false,
            Events: null,
            Dispatcher: {
                current: null
            }
        };
        function getCrossOriginString(input) {
            if (typeof input === 'string') {
                return input === 'use-credentials' ? input : '';
            }
            return undefined;
        }
        function getCrossOriginStringAs(as, input) {
            if (as === 'font') {
                return '';
            }
            if (typeof input === 'string') {
                return input === 'use-credentials' ? input : '';
            }
            return undefined;
        }
        var Dispatcher = Internals.Dispatcher;
        function prefetchDNS(href) {
            {
                if (typeof href !== 'string' || !href) {
                    error('ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.', getValueDescriptorExpectingObjectForWarning(href));
                } else if (arguments.length > 1) {
                    var options = arguments[1];
                    if (typeof options === 'object' && options.hasOwnProperty('crossOrigin')) {
                        error('ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.', getValueDescriptorExpectingEnumForWarning(options));
                    } else {
                        error('ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.', getValueDescriptorExpectingEnumForWarning(options));
                    }
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string') {
                dispatcher.prefetchDNS(href);
            } // We don't error because preconnect needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function preconnect(href, options) {
            {
                if (typeof href !== 'string' || !href) {
                    error('ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.', getValueDescriptorExpectingObjectForWarning(href));
                } else if (options != null && typeof options !== 'object') {
                    error('ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.', getValueDescriptorExpectingEnumForWarning(options));
                } else if (options != null && typeof options.crossOrigin !== 'string') {
                    error('ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.', getValueDescriptorExpectingObjectForWarning(options.crossOrigin));
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string') {
                var crossOrigin = options ? getCrossOriginString(options.crossOrigin) : null;
                dispatcher.preconnect(href, crossOrigin);
            } // We don't error because preconnect needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function preload(href, options) {
            {
                var encountered = '';
                if (typeof href !== 'string' || !href) {
                    encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".";
                }
                if (options == null || typeof options !== 'object') {
                    encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + ".";
                } else if (typeof options.as !== 'string' || !options.as) {
                    encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".";
                }
                if (encountered) {
                    error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string' && // We check existence because we cannot enforce this function is actually called with the stated type
            typeof options === 'object' && options !== null && typeof options.as === 'string') {
                var as = options.as;
                var crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
                dispatcher.preload(href, as, {
                    crossOrigin: crossOrigin,
                    integrity: typeof options.integrity === 'string' ? options.integrity : undefined,
                    nonce: typeof options.nonce === 'string' ? options.nonce : undefined,
                    type: typeof options.type === 'string' ? options.type : undefined,
                    fetchPriority: typeof options.fetchPriority === 'string' ? options.fetchPriority : undefined,
                    referrerPolicy: typeof options.referrerPolicy === 'string' ? options.referrerPolicy : undefined,
                    imageSrcSet: typeof options.imageSrcSet === 'string' ? options.imageSrcSet : undefined,
                    imageSizes: typeof options.imageSizes === 'string' ? options.imageSizes : undefined
                });
            } // We don't error because preload needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function preloadModule(href, options) {
            {
                var encountered = '';
                if (typeof href !== 'string' || !href) {
                    encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".";
                }
                if (options !== undefined && typeof options !== 'object') {
                    encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + ".";
                } else if (options && 'as' in options && typeof options.as !== 'string') {
                    encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".";
                }
                if (encountered) {
                    error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string') {
                if (options) {
                    var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
                    dispatcher.preloadModule(href, {
                        as: typeof options.as === 'string' && options.as !== 'script' ? options.as : undefined,
                        crossOrigin: crossOrigin,
                        integrity: typeof options.integrity === 'string' ? options.integrity : undefined
                    });
                } else {
                    dispatcher.preloadModule(href);
                }
            } // We don't error because preload needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function preinit(href, options) {
            {
                if (typeof href !== 'string' || !href) {
                    error('ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.', getValueDescriptorExpectingObjectForWarning(href));
                } else if (options == null || typeof options !== 'object') {
                    error('ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.', getValueDescriptorExpectingEnumForWarning(options));
                } else if (options.as !== 'style' && options.as !== 'script') {
                    error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as));
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string' && options && typeof options.as === 'string') {
                var as = options.as;
                var crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
                var integrity = typeof options.integrity === 'string' ? options.integrity : undefined;
                var fetchPriority = typeof options.fetchPriority === 'string' ? options.fetchPriority : undefined;
                if (as === 'style') {
                    dispatcher.preinitStyle(href, typeof options.precedence === 'string' ? options.precedence : undefined, {
                        crossOrigin: crossOrigin,
                        integrity: integrity,
                        fetchPriority: fetchPriority
                    });
                } else if (as === 'script') {
                    dispatcher.preinitScript(href, {
                        crossOrigin: crossOrigin,
                        integrity: integrity,
                        fetchPriority: fetchPriority,
                        nonce: typeof options.nonce === 'string' ? options.nonce : undefined
                    });
                }
            } // We don't error because preinit needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function preinitModule(href, options) {
            {
                var encountered = '';
                if (typeof href !== 'string' || !href) {
                    encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".";
                }
                if (options !== undefined && typeof options !== 'object') {
                    encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + ".";
                } else if (options && 'as' in options && options.as !== 'script') {
                    encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".";
                }
                if (encountered) {
                    error('ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s', encountered);
                } else {
                    var as = options && typeof options.as === 'string' ? options.as : 'script';
                    switch(as){
                        case 'script':
                            {
                                break;
                            }
                        // We have an invalid as type and need to warn
                        default:
                            {
                                var typeOfAs = getValueDescriptorExpectingEnumForWarning(as);
                                error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script"' + ' but received "%s" instead. This warning was generated for `href` "%s". In the future other' + ' module types will be supported, aligning with the import-attributes proposal. Learn more here:' + ' (https://github.com/tc39/proposal-import-attributes)', typeOfAs, href);
                            }
                    }
                }
            }
            var dispatcher = Dispatcher.current;
            if (dispatcher && typeof href === 'string') {
                if (typeof options === 'object' && options !== null) {
                    if (options.as == null || options.as === 'script') {
                        var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
                        dispatcher.preinitModuleScript(href, {
                            crossOrigin: crossOrigin,
                            integrity: typeof options.integrity === 'string' ? options.integrity : undefined,
                            nonce: typeof options.nonce === 'string' ? options.nonce : undefined
                        });
                    }
                } else if (options == null) {
                    dispatcher.preinitModuleScript(href);
                }
            } // We don't error because preinit needs to be resilient to being called in a variety of scopes
        // and the runtime may not be capable of responding. The function is optimistic and not critical
        // so we favor silent bailout over warning or erroring.
        }
        function getValueDescriptorExpectingObjectForWarning(thing) {
            return thing === null ? '`null`' : thing === undefined ? '`undefined`' : thing === '' ? 'an empty string' : "something with type \"" + typeof thing + "\"";
        }
        function getValueDescriptorExpectingEnumForWarning(thing) {
            return thing === null ? '`null`' : thing === undefined ? '`undefined`' : thing === '' ? 'an empty string' : typeof thing === 'string' ? JSON.stringify(thing) : typeof thing === 'number' ? '`' + thing + '`' : "something with type \"" + typeof thing + "\"";
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher; // Since the "not pending" value is always the same, we can reuse the
        function resolveDispatcher() {
            // Copied from react/src/ReactHooks.js. It's the same thing but in a
            // different package.
            var dispatcher = ReactCurrentDispatcher.current;
            {
                if (dispatcher === null) {
                    error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
                }
            }
            // intentionally don't throw our own error because this is in a hot path.
            // Also helps ensure this is inlined.
            return dispatcher;
        }
        function useFormStatus() {
            {
                var dispatcher = resolveDispatcher(); // $FlowFixMe[not-a-function] We know this exists because of the feature check above.
                return dispatcher.useHostTransitionStatus();
            }
        }
        function useFormState(action, initialState, permalink) {
            {
                var dispatcher = resolveDispatcher(); // $FlowFixMe[not-a-function] This is unstable, thus optional
                return dispatcher.useFormState(action, initialState, permalink);
            }
        }
        function createPortal() {
            throw new Error('createPortal was called on the server. Portals are not currently' + ' supported on the server. Update your program to conditionally call' + ' createPortal on the client only.');
        }
        function flushSync() {
            throw new Error('flushSync was called on the server. This is likely caused by a' + ' function being called during render or in module scope that was' + ' intended to be called from an effect or event handler. Update your' + ' to not call flushSync no the server.');
        } // on the server we just call the callback because there is
        // not update mechanism. Really this should not be called on the
        // server but since the semantics are generally clear enough we
        // can provide this trivial implementation.
        function batchedUpdates(fn, a) {
            return fn(a);
        }
        function experimental_useFormStatus() {
            {
                error('useFormStatus is now in canary. Remove the experimental_ prefix. ' + 'The prefixed alias will be removed in an upcoming release.');
            }
            return useFormStatus();
        }
        function experimental_useFormState(action, initialState, permalink) {
            {
                error('useFormState is now in canary. Remove the experimental_ prefix. ' + 'The prefixed alias will be removed in an upcoming release.');
            }
            return useFormState(action, initialState, permalink);
        }
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
        exports.createPortal = createPortal;
        exports.experimental_useFormState = experimental_useFormState;
        exports.experimental_useFormStatus = experimental_useFormStatus;
        exports.flushSync = flushSync;
        exports.preconnect = preconnect;
        exports.prefetchDNS = prefetchDNS;
        exports.preinit = preinit;
        exports.preinitModule = preinitModule;
        exports.preload = preload;
        exports.preloadModule = preloadModule;
        exports.unstable_batchedUpdates = batchedUpdates;
        exports.useFormState = useFormState;
        exports.useFormStatus = useFormStatus;
        exports.version = ReactVersion;
    })();
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-rendering-stub.development.js [app-edge-rsc] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-server.edge.development.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-server-dom-turbopack-server.edge.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js [app-edge-rsc] (ecmascript)");
        var ReactDOM = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-dom/server-rendering-stub.js [app-edge-rsc] (ecmascript)");
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        // -----------------------------------------------------------------------------
        var enablePostpone = false;
        function scheduleWork(callback) {
            setTimeout(callback, 0);
        }
        var VIEW_SIZE = 512;
        var currentView = null;
        var writtenBytes = 0;
        function beginWriting(destination) {
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
        }
        function writeChunk(destination, chunk) {
            if (chunk.byteLength === 0) {
                return;
            }
            if (chunk.byteLength > VIEW_SIZE) {
                {
                    if (precomputedChunkSet.has(chunk)) {
                        error('A large precomputed chunk was passed to writeChunk without being copied.' + ' Large chunks get enqueued directly and are not copied. This is incompatible with precomputed chunks because you cannot enqueue the same precomputed chunk twice.' + ' Use "cloneChunk" to make a copy of this large precomputed chunk before writing it. This is a bug in React.');
                    }
                }
                // one that is cached by the streaming renderer. We will enqueu
                // it directly and expect it is not re-used
                if (writtenBytes > 0) {
                    destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                    currentView = new Uint8Array(VIEW_SIZE);
                    writtenBytes = 0;
                }
                destination.enqueue(chunk);
                return;
            }
            var bytesToWrite = chunk;
            var allowableBytes = currentView.length - writtenBytes;
            if (allowableBytes < bytesToWrite.byteLength) {
                // this chunk would overflow the current view. We enqueue a full view
                // and start a new view with the remaining chunk
                if (allowableBytes === 0) {
                    // the current view is already full, send it
                    destination.enqueue(currentView);
                } else {
                    // fill up the current view and apply the remaining chunk bytes
                    // to a new view.
                    currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes); // writtenBytes += allowableBytes; // this can be skipped because we are going to immediately reset the view
                    destination.enqueue(currentView);
                    bytesToWrite = bytesToWrite.subarray(allowableBytes);
                }
                currentView = new Uint8Array(VIEW_SIZE);
                writtenBytes = 0;
            }
            currentView.set(bytesToWrite, writtenBytes);
            writtenBytes += bytesToWrite.byteLength;
        }
        function writeChunkAndReturn(destination, chunk) {
            writeChunk(destination, chunk); // in web streams there is no backpressure so we can alwas write more
            return true;
        }
        function completeWriting(destination) {
            if (currentView && writtenBytes > 0) {
                destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
                currentView = null;
                writtenBytes = 0;
            }
        }
        function close$1(destination) {
            destination.close();
        }
        var textEncoder = new TextEncoder();
        function stringToChunk(content) {
            return textEncoder.encode(content);
        }
        var precomputedChunkSet = new Set();
        function byteLengthOfChunk(chunk) {
            return chunk.byteLength;
        }
        function closeWithError(destination, error) {
            // $FlowFixMe[method-unbinding]
            if (typeof destination.error === 'function') {
                // $FlowFixMe[incompatible-call]: This is an Error object or the destination accepts other types.
                destination.error(error);
            } else {
                // Earlier implementations doesn't support this method. In that environment you're
                // supposed to throw from a promise returned but we don't return a promise in our
                // approach. We could fork this implementation but this is environment is an edge
                // case to begin with. It's even less common to run this in an older environment.
                // Even then, this is not where errors are supposed to happen and they get reported
                // to a global callback in addition to this anyway. So it's fine just to close this.
                destination.close();
            }
        }
        // eslint-disable-next-line no-unused-vars
        var CLIENT_REFERENCE_TAG = Symbol.for('react.client.reference');
        var SERVER_REFERENCE_TAG = Symbol.for('react.server.reference');
        function isClientReference(reference) {
            return reference.$$typeof === CLIENT_REFERENCE_TAG;
        }
        function isServerReference(reference) {
            return reference.$$typeof === SERVER_REFERENCE_TAG;
        }
        function registerClientReference(proxyImplementation, id, exportName) {
            return registerClientReferenceImpl(proxyImplementation, id + '#' + exportName, false);
        }
        function registerClientReferenceImpl(proxyImplementation, id, async) {
            return Object.defineProperties(proxyImplementation, {
                $$typeof: {
                    value: CLIENT_REFERENCE_TAG
                },
                $$id: {
                    value: id
                },
                $$async: {
                    value: async
                }
            });
        } // $FlowFixMe[method-unbinding]
        var FunctionBind = Function.prototype.bind; // $FlowFixMe[method-unbinding]
        var ArraySlice = Array.prototype.slice;
        function bind() {
            // $FlowFixMe[unsupported-syntax]
            var newFn = FunctionBind.apply(this, arguments);
            if (this.$$typeof === SERVER_REFERENCE_TAG) {
                var args = ArraySlice.call(arguments, 1);
                return Object.defineProperties(newFn, {
                    $$typeof: {
                        value: SERVER_REFERENCE_TAG
                    },
                    $$id: {
                        value: this.$$id
                    },
                    $$bound: {
                        value: this.$$bound ? this.$$bound.concat(args) : args
                    },
                    bind: {
                        value: bind
                    }
                });
            }
            return newFn;
        }
        function registerServerReference(reference, id, exportName) {
            return Object.defineProperties(reference, {
                $$typeof: {
                    value: SERVER_REFERENCE_TAG
                },
                $$id: {
                    value: exportName === null ? id : id + '#' + exportName
                },
                $$bound: {
                    value: null
                },
                bind: {
                    value: bind
                }
            });
        }
        var PROMISE_PROTOTYPE = Promise.prototype;
        var deepProxyHandlers = {
            get: function(target, name, receiver) {
                switch(name){
                    // These names are read by the Flight runtime if you end up using the exports object.
                    case '$$typeof':
                        // These names are a little too common. We should probably have a way to
                        // have the Flight runtime extract the inner target instead.
                        return target.$$typeof;
                    case '$$id':
                        return target.$$id;
                    case '$$async':
                        return target.$$async;
                    case 'name':
                        return target.name;
                    case 'displayName':
                        return undefined;
                    // We need to special case this because createElement reads it if we pass this
                    // reference.
                    case 'defaultProps':
                        return undefined;
                    // Avoid this attempting to be serialized.
                    case 'toJSON':
                        return undefined;
                    case Symbol.toPrimitive:
                        // $FlowFixMe[prop-missing]
                        return Object.prototype[Symbol.toPrimitive];
                    case 'Provider':
                        throw new Error("Cannot render a Client Context Provider on the Server. " + "Instead, you can export a Client Component wrapper " + "that itself renders a Client Context Provider.");
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var expression = String(target.name) + '.' + String(name);
                throw new Error("Cannot access " + expression + " on the server. " + 'You cannot dot into a client module from a server component. ' + 'You can only pass the imported name through.');
            },
            set: function() {
                throw new Error('Cannot assign to a client module from a server module.');
            }
        };
        var proxyHandlers = {
            get: function(target, name, receiver) {
                switch(name){
                    // These names are read by the Flight runtime if you end up using the exports object.
                    case '$$typeof':
                        return target.$$typeof;
                    case '$$id':
                        return target.$$id;
                    case '$$async':
                        return target.$$async;
                    case 'name':
                        return target.name;
                    // We need to special case this because createElement reads it if we pass this
                    // reference.
                    case 'defaultProps':
                        return undefined;
                    // Avoid this attempting to be serialized.
                    case 'toJSON':
                        return undefined;
                    case Symbol.toPrimitive:
                        // $FlowFixMe[prop-missing]
                        return Object.prototype[Symbol.toPrimitive];
                    case '__esModule':
                        // Something is conditionally checking which export to use. We'll pretend to be
                        // an ESM compat module but then we'll check again on the client.
                        var moduleId = target.$$id;
                        target.default = registerClientReferenceImpl(function() {
                            throw new Error("Attempted to call the default export of " + moduleId + " from the server " + "but it's on the client. It's not possible to invoke a client function from " + "the server, it can only be rendered as a Component or passed to props of a " + "Client Component.");
                        }, target.$$id + '#', target.$$async);
                        return true;
                    case 'then':
                        if (target.then) {
                            // Use a cached value
                            return target.then;
                        }
                        if (!target.$$async) {
                            // If this module is expected to return a Promise (such as an AsyncModule) then
                            // we should resolve that with a client reference that unwraps the Promise on
                            // the client.
                            var clientReference = registerClientReferenceImpl({}, target.$$id, true);
                            var proxy = new Proxy(clientReference, proxyHandlers); // Treat this as a resolved Promise for React's use()
                            target.status = 'fulfilled';
                            target.value = proxy;
                            var then = target.then = registerClientReferenceImpl(function then(resolve, reject) {
                                // Expose to React.
                                return Promise.resolve(resolve(proxy));
                            }, // export then we should treat it as a reference to that name.
                            target.$$id + '#then', false);
                            return then;
                        } else {
                            // Since typeof .then === 'function' is a feature test we'd continue recursing
                            // indefinitely if we return a function. Instead, we return an object reference
                            // if we check further.
                            return undefined;
                        }
                }
                var cachedReference = target[name];
                if (!cachedReference) {
                    var reference = registerClientReferenceImpl(function() {
                        throw new Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. " + "It's not possible to invoke a client function from the server, it can " + "only be rendered as a Component or passed to props of a Client Component.");
                    }, target.$$id + '#' + name, target.$$async);
                    Object.defineProperty(reference, 'name', {
                        value: name
                    });
                    cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
                }
                return cachedReference;
            },
            getPrototypeOf: function(target) {
                // Pretend to be a Promise in case anyone asks.
                return PROMISE_PROTOTYPE;
            },
            set: function() {
                throw new Error('Cannot assign to a client module from a server module.');
            }
        };
        function createClientModuleProxy(moduleId) {
            var clientReference = registerClientReferenceImpl({}, moduleId, false);
            return new Proxy(clientReference, proxyHandlers);
        }
        function getClientReferenceKey(reference) {
            return reference.$$async ? reference.$$id + '#async' : reference.$$id;
        }
        function resolveClientReferenceMetadata(config, clientReference) {
            var modulePath = clientReference.$$id;
            var name = '';
            var resolvedModuleData = config[modulePath];
            if (resolvedModuleData) {
                // The potentially aliased name.
                name = resolvedModuleData.name;
            } else {
                // We didn't find this specific export name but we might have the * export
                // which contains this name as well.
                // TODO: It's unfortunate that we now have to parse this string. We should
                // probably go back to encoding path and name separately on the client reference.
                var idx = modulePath.lastIndexOf('#');
                if (idx !== -1) {
                    name = modulePath.slice(idx + 1);
                    resolvedModuleData = config[modulePath.slice(0, idx)];
                }
                if (!resolvedModuleData) {
                    throw new Error('Could not find the module "' + modulePath + '" in the React Client Manifest. ' + 'This is probably a bug in the React Server Components bundler.');
                }
            }
            if (clientReference.$$async === true) {
                return [
                    resolvedModuleData.id,
                    resolvedModuleData.chunks,
                    name,
                    1
                ];
            } else {
                return [
                    resolvedModuleData.id,
                    resolvedModuleData.chunks,
                    name
                ];
            }
        }
        function getServerReferenceId(config, serverReference) {
            return serverReference.$$id;
        }
        function getServerReferenceBoundArguments(config, serverReference) {
            return serverReference.$$bound;
        }
        var ReactDOMSharedInternals = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        var ReactDOMFlightServerDispatcher = {
            prefetchDNS: prefetchDNS,
            preconnect: preconnect,
            preload: preload,
            preloadModule: preloadModule$1,
            preinitStyle: preinitStyle,
            preinitScript: preinitScript,
            preinitModuleScript: preinitModuleScript
        };
        function prefetchDNS(href) {
            {
                if (typeof href === 'string' && href) {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'D|' + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        emitHint(request, 'D', href);
                    }
                }
            }
        }
        function preconnect(href, crossOrigin) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = "C|" + (crossOrigin == null ? 'null' : crossOrigin) + "|" + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        if (typeof crossOrigin === 'string') {
                            emitHint(request, 'C', [
                                href,
                                crossOrigin
                            ]);
                        } else {
                            emitHint(request, 'C', href);
                        }
                    }
                }
            }
        }
        function preload(href, as, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'L';
                        if (as === 'image' && options) {
                            key += getImagePreloadKey(href, options.imageSrcSet, options.imageSizes);
                        } else {
                            key += "[" + as + "]" + href;
                        }
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        var trimmed = trimOptions(options);
                        if (trimmed) {
                            emitHint(request, 'L', [
                                href,
                                as,
                                trimmed
                            ]);
                        } else {
                            emitHint(request, 'L', [
                                href,
                                as
                            ]);
                        }
                    }
                }
            }
        }
        function preloadModule$1(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'm|' + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        var trimmed = trimOptions(options);
                        if (trimmed) {
                            return emitHint(request, 'm', [
                                href,
                                trimmed
                            ]);
                        } else {
                            return emitHint(request, 'm', href);
                        }
                    }
                }
            }
        }
        function preinitStyle(href, precedence, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'S|' + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        var trimmed = trimOptions(options);
                        if (trimmed) {
                            return emitHint(request, 'S', [
                                href,
                                typeof precedence === 'string' ? precedence : 0,
                                trimmed
                            ]);
                        } else if (typeof precedence === 'string') {
                            return emitHint(request, 'S', [
                                href,
                                precedence
                            ]);
                        } else {
                            return emitHint(request, 'S', href);
                        }
                    }
                }
            }
        }
        function preinitScript(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'X|' + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        var trimmed = trimOptions(options);
                        if (trimmed) {
                            return emitHint(request, 'X', [
                                href,
                                trimmed
                            ]);
                        } else {
                            return emitHint(request, 'X', href);
                        }
                    }
                }
            }
        }
        function preinitModuleScript(href, options) {
            {
                if (typeof href === 'string') {
                    var request = resolveRequest();
                    if (request) {
                        var hints = getHints(request);
                        var key = 'M|' + href;
                        if (hints.has(key)) {
                            // duplicate hint
                            return;
                        }
                        hints.add(key);
                        var trimmed = trimOptions(options);
                        if (trimmed) {
                            return emitHint(request, 'M', [
                                href,
                                trimmed
                            ]);
                        } else {
                            return emitHint(request, 'M', href);
                        }
                    }
                }
            }
        } // Flight normally encodes undefined as a special character however for directive option
        // arguments we don't want to send unnecessary keys and bloat the payload so we create a
        // trimmed object which omits any keys with null or undefined values.
        // This is only typesafe because these option objects have entirely optional fields where
        // null and undefined represent the same thing as no property.
        function trimOptions(options) {
            if (options == null) return null;
            var hasProperties = false;
            var trimmed = {};
            for(var key in options){
                if (options[key] != null) {
                    hasProperties = true;
                    trimmed[key] = options[key];
                }
            }
            return hasProperties ? trimmed : null;
        }
        function getImagePreloadKey(href, imageSrcSet, imageSizes) {
            var uniquePart = '';
            if (typeof imageSrcSet === 'string' && imageSrcSet !== '') {
                uniquePart += '[' + imageSrcSet + ']';
                if (typeof imageSizes === 'string') {
                    uniquePart += '[' + imageSizes + ']';
                }
            } else {
                uniquePart += '[][]' + href;
            }
            return "[image]" + uniquePart;
        }
        var ReactDOMCurrentDispatcher = ReactDOMSharedInternals.Dispatcher;
        function prepareHostDispatcher() {
            ReactDOMCurrentDispatcher.current = ReactDOMFlightServerDispatcher;
        } // Used to distinguish these contexts from ones used in other renderers.
        // small, smaller than how we encode undefined, and is unambiguous. We could use
        // a different tuple structure to encode this instead but this makes the runtime
        // cost cheaper by eliminating a type checks in more positions.
        // prettier-ignore
        function createHints() {
            return new Set();
        }
        var supportsRequestStorage = typeof AsyncLocalStorage === 'function';
        var requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null;
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_MEMO_CACHE_SENTINEL = Symbol.for('react.memo_cache_sentinel');
        var REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        // Forming a reverse tree.
        // The structure of a context snapshot is an implementation of this file.
        // Currently, it's implemented as tracking the current active node.
        var rootContextSnapshot = null; // We assume that this runtime owns the "current" field on all ReactContext instances.
        // This global (actually thread local) state represents what state all those "current",
        // fields are currently in.
        var currentActiveSnapshot = null;
        function popNode(prev) {
            {
                prev.context._currentValue = prev.parentValue;
            }
        }
        function pushNode(next) {
            {
                next.context._currentValue = next.value;
            }
        }
        function popToNearestCommonAncestor(prev, next) {
            if (prev === next) ;
            else {
                popNode(prev);
                var parentPrev = prev.parent;
                var parentNext = next.parent;
                if (parentPrev === null) {
                    if (parentNext !== null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                } else {
                    if (parentNext === null) {
                        throw new Error('The stacks must reach the root at the same time. This is a bug in React.');
                    }
                    popToNearestCommonAncestor(parentPrev, parentNext); // On the way back, we push the new ones that weren't common.
                    pushNode(next);
                }
            }
        }
        function popAllPrevious(prev) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev !== null) {
                popAllPrevious(parentPrev);
            }
        }
        function pushAllNext(next) {
            var parentNext = next.parent;
            if (parentNext !== null) {
                pushAllNext(parentNext);
            }
            pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
            popNode(prev);
            var parentPrev = prev.parent;
            if (parentPrev === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (parentPrev.depth === next.depth) {
                // We found the same level. Now we just need to find a shared ancestor.
                popToNearestCommonAncestor(parentPrev, next);
            } else {
                // We must still be deeper.
                popPreviousToCommonLevel(parentPrev, next);
            }
        }
        function popNextToCommonLevel(prev, next) {
            var parentNext = next.parent;
            if (parentNext === null) {
                throw new Error('The depth must equal at least at zero before reaching the root. This is a bug in React.');
            }
            if (prev.depth === parentNext.depth) {
                // We found the same level. Now we just need to find a shared ancestor.
                popToNearestCommonAncestor(prev, parentNext);
            } else {
                // We must still be deeper.
                popNextToCommonLevel(prev, parentNext);
            }
            pushNode(next);
        } // Perform context switching to the new snapshot.
        // To make it cheap to read many contexts, while not suspending, we make the switch eagerly by
        // updating all the context's current values. That way reads, always just read the current value.
        // At the cost of updating contexts even if they're never read by this subtree.
        function switchContext(newSnapshot) {
            // The basic algorithm we need to do is to pop back any contexts that are no longer on the stack.
            // We also need to update any new contexts that are now on the stack with the deepest value.
            // The easiest way to update new contexts is to just reapply them in reverse order from the
            // perspective of the backpointers. To avoid allocating a lot when switching, we use the stack
            // for that. Therefore this algorithm is recursive.
            // 1) First we pop which ever snapshot tree was deepest. Popping old contexts as we go.
            // 2) Then we find the nearest common ancestor from there. Popping old contexts as we go.
            // 3) Then we reapply new contexts on the way back up the stack.
            var prev = currentActiveSnapshot;
            var next = newSnapshot;
            if (prev !== next) {
                if (prev === null) {
                    // $FlowFixMe[incompatible-call]: This has to be non-null since it's not equal to prev.
                    pushAllNext(next);
                } else if (next === null) {
                    popAllPrevious(prev);
                } else if (prev.depth === next.depth) {
                    popToNearestCommonAncestor(prev, next);
                } else if (prev.depth > next.depth) {
                    popPreviousToCommonLevel(prev, next);
                } else {
                    popNextToCommonLevel(prev, next);
                }
                currentActiveSnapshot = next;
            }
        }
        function getActiveContext() {
            return currentActiveSnapshot;
        }
        function readContext$1(context) {
            var value = context._currentValue;
            return value;
        }
        // Corresponds to ReactFiberWakeable and ReactFizzWakeable modules. Generally,
        // changes to one module should be reflected in the others.
        // TODO: Rename this module and the corresponding Fiber one to "Thenable"
        // instead of "Wakeable". Or some other more appropriate name.
        // An error that is thrown (e.g. by `use`) to trigger Suspense. If we
        // detect this is caught by userspace, we'll log a warning in development.
        var SuspenseException = new Error("Suspense Exception: This is not a real error! It's an implementation " + 'detail of `use` to interrupt the current render. You must either ' + 'rethrow it immediately, or move the `use` call outside of the ' + '`try/catch` block. Capturing without rethrowing will lead to ' + 'unexpected behavior.\n\n' + 'To handle async errors, wrap your component in an error boundary, or ' + "call the promise's `.catch` method and pass the result to `use`");
        function createThenableState() {
            // The ThenableState is created the first time a component suspends. If it
            // suspends again, we'll reuse the same state.
            return [];
        }
        function noop() {}
        function trackUsedThenable(thenableState, thenable, index) {
            var previous = thenableState[index];
            if (previous === undefined) {
                thenableState.push(thenable);
            } else {
                if (previous !== thenable) {
                    // Reuse the previous thenable, and drop the new one. We can assume
                    // they represent the same value, because components are idempotent.
                    // Avoid an unhandled rejection errors for the Promises that we'll
                    // intentionally ignore.
                    thenable.then(noop, noop);
                    thenable = previous;
                }
            } // We use an expando to track the status and result of a thenable so that we
            // can synchronously unwrap the value. Think of this as an extension of the
            // Promise API, or a custom interface that is a superset of Thenable.
            //
            // If the thenable doesn't have a status, set it to "pending" and attach
            // a listener that will update its status and result when it resolves.
            switch(thenable.status){
                case 'fulfilled':
                    {
                        var fulfilledValue = thenable.value;
                        return fulfilledValue;
                    }
                case 'rejected':
                    {
                        var rejectedError = thenable.reason;
                        throw rejectedError;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') ;
                        else {
                            var pendingThenable = thenable;
                            pendingThenable.status = 'pending';
                            pendingThenable.then(function(fulfilledValue) {
                                if (thenable.status === 'pending') {
                                    var fulfilledThenable = thenable;
                                    fulfilledThenable.status = 'fulfilled';
                                    fulfilledThenable.value = fulfilledValue;
                                }
                            }, function(error) {
                                if (thenable.status === 'pending') {
                                    var rejectedThenable = thenable;
                                    rejectedThenable.status = 'rejected';
                                    rejectedThenable.reason = error;
                                }
                            }); // Check one more time in case the thenable resolved synchronously
                            switch(thenable.status){
                                case 'fulfilled':
                                    {
                                        var fulfilledThenable = thenable;
                                        return fulfilledThenable.value;
                                    }
                                case 'rejected':
                                    {
                                        var rejectedThenable = thenable;
                                        throw rejectedThenable.reason;
                                    }
                            }
                        } // Suspend.
                        //
                        // Throwing here is an implementation detail that allows us to unwind the
                        // call stack. But we shouldn't allow it to leak into userspace. Throw an
                        // opaque placeholder value instead of the actual thenable. If it doesn't
                        // get captured by the work loop, log a warning, because that means
                        // something in userspace must have caught it.
                        suspendedThenable = thenable;
                        throw SuspenseException;
                    }
            }
        } // This is used to track the actual thenable that suspended so it can be
        // passed to the rest of the Suspense implementation — which, for historical
        // reasons, expects to receive a thenable.
        var suspendedThenable = null;
        function getSuspendedThenable() {
            // This is called right after `use` suspends by throwing an exception. `use`
            // throws an opaque value instead of the thenable itself so that it can't be
            // caught in userspace. Then the work loop accesses the actual thenable using
            // this function.
            if (suspendedThenable === null) {
                throw new Error('Expected a suspended thenable. This is a bug in React. Please file ' + 'an issue.');
            }
            var thenable = suspendedThenable;
            suspendedThenable = null;
            return thenable;
        }
        var currentRequest$1 = null;
        var thenableIndexCounter = 0;
        var thenableState = null;
        function prepareToUseHooksForRequest(request) {
            currentRequest$1 = request;
        }
        function resetHooksForRequest() {
            currentRequest$1 = null;
        }
        function prepareToUseHooksForComponent(prevThenableState) {
            thenableIndexCounter = 0;
            thenableState = prevThenableState;
        }
        function getThenableStateAfterSuspending() {
            var state = thenableState;
            thenableState = null;
            return state;
        }
        function readContext(context) {
            {
                if (context.$$typeof !== REACT_SERVER_CONTEXT_TYPE) {
                    if (isClientReference(context)) {
                        error('Cannot read a Client Context from a Server Component.');
                    } else {
                        error('Only createServerContext is supported in Server Components.');
                    }
                }
                if (currentRequest$1 === null) {
                    error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
                }
            }
            return readContext$1(context);
        }
        var HooksDispatcher = {
            useMemo: function(nextCreate) {
                return nextCreate();
            },
            useCallback: function(callback) {
                return callback;
            },
            useDebugValue: function() {},
            useDeferredValue: unsupportedHook,
            useTransition: unsupportedHook,
            readContext: readContext,
            useContext: readContext,
            useReducer: unsupportedHook,
            useRef: unsupportedHook,
            useState: unsupportedHook,
            useInsertionEffect: unsupportedHook,
            useLayoutEffect: unsupportedHook,
            useImperativeHandle: unsupportedHook,
            useEffect: unsupportedHook,
            useId: useId,
            useSyncExternalStore: unsupportedHook,
            useCacheRefresh: function() {
                return unsupportedRefresh;
            },
            useMemoCache: function(size) {
                var data = new Array(size);
                for(var i = 0; i < size; i++){
                    data[i] = REACT_MEMO_CACHE_SENTINEL;
                }
                return data;
            },
            use: use
        };
        function unsupportedHook() {
            throw new Error('This Hook is not supported in Server Components.');
        }
        function unsupportedRefresh() {
            throw new Error('Refreshing the cache is not supported in Server Components.');
        }
        function useId() {
            if (currentRequest$1 === null) {
                throw new Error('useId can only be used while React is rendering');
            }
            var id = currentRequest$1.identifierCount++; // use 'S' for Flight components to distinguish from 'R' and 'r' in Fizz/Client
            return ':' + currentRequest$1.identifierPrefix + 'S' + id.toString(32) + ':';
        }
        function use(usable) {
            if (usable !== null && typeof usable === 'object' || typeof usable === 'function') {
                // $FlowFixMe[method-unbinding]
                if (typeof usable.then === 'function') {
                    // This is a thenable.
                    var thenable = usable; // Track the position of the thenable within this fiber.
                    var index = thenableIndexCounter;
                    thenableIndexCounter += 1;
                    if (thenableState === null) {
                        thenableState = createThenableState();
                    }
                    return trackUsedThenable(thenableState, thenable, index);
                } else if (usable.$$typeof === REACT_SERVER_CONTEXT_TYPE) {
                    var context = usable;
                    return readContext(context);
                }
            }
            {
                if (isClientReference(usable)) {
                    error('Cannot use() an already resolved Client Reference.');
                }
            }
            throw new Error('An unsupported type was passed to use(): ' + String(usable));
        }
        function createSignal() {
            return new AbortController().signal;
        }
        function resolveCache() {
            var request = resolveRequest();
            if (request) {
                return getCache(request);
            }
            return new Map();
        }
        var DefaultCacheDispatcher = {
            getCacheSignal: function() {
                var cache = resolveCache();
                var entry = cache.get(createSignal);
                if (entry === undefined) {
                    entry = createSignal();
                    cache.set(createSignal, entry);
                }
                return entry;
            },
            getCacheForType: function(resourceType) {
                var cache = resolveCache();
                var entry = cache.get(resourceType);
                if (entry === undefined) {
                    entry = resourceType(); // TODO: Warn if undefined?
                    cache.set(resourceType, entry);
                }
                return entry;
            }
        };
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
        function isArray(a) {
            return isArrayImpl(a);
        }
        var getPrototypeOf = Object.getPrototypeOf;
        // in case they error.
        var jsxPropsParents = new WeakMap();
        var jsxChildrenParents = new WeakMap();
        function isObjectPrototype(object) {
            if (!object) {
                return false;
            }
            var ObjectPrototype = Object.prototype;
            if (object === ObjectPrototype) {
                return true;
            } // It might be an object from a different Realm which is
            // still just a plain simple object.
            if (getPrototypeOf(object)) {
                return false;
            }
            var names = Object.getOwnPropertyNames(object);
            for(var i = 0; i < names.length; i++){
                if (!(names[i] in ObjectPrototype)) {
                    return false;
                }
            }
            return true;
        }
        function isSimpleObject(object) {
            if (!isObjectPrototype(getPrototypeOf(object))) {
                return false;
            }
            var names = Object.getOwnPropertyNames(object);
            for(var i = 0; i < names.length; i++){
                var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
                if (!descriptor) {
                    return false;
                }
                if (!descriptor.enumerable) {
                    if ((names[i] === 'key' || names[i] === 'ref') && typeof descriptor.get === 'function') {
                        continue;
                    }
                    return false;
                }
            }
            return true;
        }
        function objectName(object) {
            // $FlowFixMe[method-unbinding]
            var name = Object.prototype.toString.call(object);
            return name.replace(/^\[object (.*)\]$/, function(m, p0) {
                return p0;
            });
        }
        function describeKeyForErrorMessage(key) {
            var encodedKey = JSON.stringify(key);
            return '"' + key + '"' === encodedKey ? key : encodedKey;
        }
        function describeValueForErrorMessage(value) {
            switch(typeof value){
                case 'string':
                    {
                        return JSON.stringify(value.length <= 10 ? value : value.slice(0, 10) + '...');
                    }
                case 'object':
                    {
                        if (isArray(value)) {
                            return '[...]';
                        }
                        var name = objectName(value);
                        if (name === 'Object') {
                            return '{...}';
                        }
                        return name;
                    }
                case 'function':
                    return 'function';
                default:
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    return String(value);
            }
        }
        function describeElementType(type) {
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeElementType(type.render);
                    case REACT_MEMO_TYPE:
                        return describeElementType(type.type);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                // Lazy may contain any component type so we recursively resolve it.
                                return describeElementType(init(payload));
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        function describeObjectForErrorMessage(objectOrArray, expandedName) {
            var objKind = objectName(objectOrArray);
            if (objKind !== 'Object' && objKind !== 'Array') {
                return objKind;
            }
            var str = '';
            var start = -1;
            var length = 0;
            if (isArray(objectOrArray)) {
                if (jsxChildrenParents.has(objectOrArray)) {
                    // Print JSX Children
                    var type = jsxChildrenParents.get(objectOrArray);
                    str = '<' + describeElementType(type) + '>';
                    var array = objectOrArray;
                    for(var i = 0; i < array.length; i++){
                        var value = array[i];
                        var substr = void 0;
                        if (typeof value === 'string') {
                            substr = value;
                        } else if (typeof value === 'object' && value !== null) {
                            substr = '{' + describeObjectForErrorMessage(value) + '}';
                        } else {
                            substr = '{' + describeValueForErrorMessage(value) + '}';
                        }
                        if ('' + i === expandedName) {
                            start = str.length;
                            length = substr.length;
                            str += substr;
                        } else if (substr.length < 15 && str.length + substr.length < 40) {
                            str += substr;
                        } else {
                            str += '{...}';
                        }
                    }
                    str += '</' + describeElementType(type) + '>';
                } else {
                    // Print Array
                    str = '[';
                    var _array = objectOrArray;
                    for(var _i = 0; _i < _array.length; _i++){
                        if (_i > 0) {
                            str += ', ';
                        }
                        var _value = _array[_i];
                        var _substr = void 0;
                        if (typeof _value === 'object' && _value !== null) {
                            _substr = describeObjectForErrorMessage(_value);
                        } else {
                            _substr = describeValueForErrorMessage(_value);
                        }
                        if ('' + _i === expandedName) {
                            start = str.length;
                            length = _substr.length;
                            str += _substr;
                        } else if (_substr.length < 10 && str.length + _substr.length < 40) {
                            str += _substr;
                        } else {
                            str += '...';
                        }
                    }
                    str += ']';
                }
            } else {
                if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) {
                    str = '<' + describeElementType(objectOrArray.type) + '/>';
                } else if (jsxPropsParents.has(objectOrArray)) {
                    // Print JSX
                    var _type = jsxPropsParents.get(objectOrArray);
                    str = '<' + (describeElementType(_type) || '...');
                    var object = objectOrArray;
                    var names = Object.keys(object);
                    for(var _i2 = 0; _i2 < names.length; _i2++){
                        str += ' ';
                        var name = names[_i2];
                        str += describeKeyForErrorMessage(name) + '=';
                        var _value2 = object[name];
                        var _substr2 = void 0;
                        if (name === expandedName && typeof _value2 === 'object' && _value2 !== null) {
                            _substr2 = describeObjectForErrorMessage(_value2);
                        } else {
                            _substr2 = describeValueForErrorMessage(_value2);
                        }
                        if (typeof _value2 !== 'string') {
                            _substr2 = '{' + _substr2 + '}';
                        }
                        if (name === expandedName) {
                            start = str.length;
                            length = _substr2.length;
                            str += _substr2;
                        } else if (_substr2.length < 10 && str.length + _substr2.length < 40) {
                            str += _substr2;
                        } else {
                            str += '...';
                        }
                    }
                    str += '>';
                } else {
                    // Print Object
                    str = '{';
                    var _object = objectOrArray;
                    var _names = Object.keys(_object);
                    for(var _i3 = 0; _i3 < _names.length; _i3++){
                        if (_i3 > 0) {
                            str += ', ';
                        }
                        var _name = _names[_i3];
                        str += describeKeyForErrorMessage(_name) + ': ';
                        var _value3 = _object[_name];
                        var _substr3 = void 0;
                        if (typeof _value3 === 'object' && _value3 !== null) {
                            _substr3 = describeObjectForErrorMessage(_value3);
                        } else {
                            _substr3 = describeValueForErrorMessage(_value3);
                        }
                        if (_name === expandedName) {
                            start = str.length;
                            length = _substr3.length;
                            str += _substr3;
                        } else if (_substr3.length < 10 && str.length + _substr3.length < 40) {
                            str += _substr3;
                        } else {
                            str += '...';
                        }
                    }
                    str += '}';
                }
            }
            if (expandedName === undefined) {
                return str;
            }
            if (start > -1 && length > 0) {
                var highlight = ' '.repeat(start) + '^'.repeat(length);
                return '\n  ' + str + '\n  ' + highlight;
            }
            return '\n  ' + str;
        }
        var ReactSharedServerInternals = React.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        if (!ReactSharedServerInternals) {
            throw new Error('The "react" package in this environment is not configured correctly. ' + 'The "react-server" condition must be enabled in any environment that ' + 'runs React Server Components.');
        }
        var ObjectPrototype = Object.prototype;
        var stringify = JSON.stringify; // Serializable values
        // Thenable<ReactClientValue>
        var PENDING$1 = 0;
        var COMPLETED = 1;
        var ABORTED = 3;
        var ERRORED$1 = 4;
        var ReactCurrentCache = ReactSharedServerInternals.ReactCurrentCache;
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        function defaultErrorHandler(error) {
            console['error'](error); // Don't transform to our wrapper
        }
        function defaultPostponeHandler(reason) {}
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        function createRequest(model, bundlerConfig, onError, context, identifierPrefix, onPostpone) {
            if (ReactCurrentCache.current !== null && ReactCurrentCache.current !== DefaultCacheDispatcher) {
                throw new Error('Currently React only supports one RSC renderer at a time.');
            }
            prepareHostDispatcher();
            ReactCurrentCache.current = DefaultCacheDispatcher;
            var abortSet = new Set();
            var pingedTasks = [];
            var cleanupQueue = [];
            var hints = createHints();
            var request = {
                status: OPEN,
                flushScheduled: false,
                fatalError: null,
                destination: null,
                bundlerConfig: bundlerConfig,
                cache: new Map(),
                nextChunkId: 0,
                pendingChunks: 0,
                hints: hints,
                abortableTasks: abortSet,
                pingedTasks: pingedTasks,
                completedImportChunks: [],
                completedHintChunks: [],
                completedRegularChunks: [],
                completedErrorChunks: [],
                writtenSymbols: new Map(),
                writtenClientReferences: new Map(),
                writtenServerReferences: new Map(),
                writtenProviders: new Map(),
                writtenObjects: new WeakMap(),
                identifierPrefix: identifierPrefix || '',
                identifierCount: 1,
                taintCleanupQueue: cleanupQueue,
                onError: onError === undefined ? defaultErrorHandler : onError,
                onPostpone: onPostpone === undefined ? defaultPostponeHandler : onPostpone,
                // $FlowFixMe[missing-this-annot]
                toJSON: function(key, value) {
                    return resolveModelToJSON(request, this, key, value);
                }
            };
            request.pendingChunks++;
            var rootContext = createRootContext();
            var rootTask = createTask(request, model, rootContext, abortSet);
            pingedTasks.push(rootTask);
            return request;
        }
        var currentRequest = null;
        function resolveRequest() {
            if (currentRequest) return currentRequest;
            if (supportsRequestStorage) {
                var store = requestStorage.getStore();
                if (store) return store;
            }
            return null;
        }
        function createRootContext(reqContext) {
            return importServerContexts();
        }
        function serializeThenable(request, thenable) {
            request.pendingChunks++;
            var newTask = createTask(request, null, getActiveContext(), request.abortableTasks);
            switch(thenable.status){
                case 'fulfilled':
                    {
                        // We have the resolved value, we can go ahead and schedule it for serialization.
                        newTask.model = thenable.value;
                        pingTask(request, newTask);
                        return newTask.id;
                    }
                case 'rejected':
                    {
                        var x = thenable.reason;
                        {
                            var digest = logRecoverableError(request, x);
                            emitErrorChunk(request, newTask.id, digest, x);
                        }
                        return newTask.id;
                    }
                default:
                    {
                        if (typeof thenable.status === 'string') {
                            break;
                        }
                        var pendingThenable = thenable;
                        pendingThenable.status = 'pending';
                        pendingThenable.then(function(fulfilledValue) {
                            if (thenable.status === 'pending') {
                                var fulfilledThenable = thenable;
                                fulfilledThenable.status = 'fulfilled';
                                fulfilledThenable.value = fulfilledValue;
                            }
                        }, function(error) {
                            if (thenable.status === 'pending') {
                                var rejectedThenable = thenable;
                                rejectedThenable.status = 'rejected';
                                rejectedThenable.reason = error;
                            }
                        });
                        break;
                    }
            }
            thenable.then(function(value) {
                newTask.model = value;
                pingTask(request, newTask);
            }, function(reason) {
                {
                    newTask.status = ERRORED$1;
                    var _digest = logRecoverableError(request, reason);
                    emitErrorChunk(request, newTask.id, _digest, reason);
                }
                request.abortableTasks.delete(newTask);
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            });
            return newTask.id;
        }
        function emitHint(request, code, model) {
            emitHintChunk(request, code, model);
            enqueueFlush(request);
        }
        function getHints(request) {
            return request.hints;
        }
        function getCache(request) {
            return request.cache;
        }
        function readThenable(thenable) {
            if (thenable.status === 'fulfilled') {
                return thenable.value;
            } else if (thenable.status === 'rejected') {
                throw thenable.reason;
            }
            throw thenable;
        }
        function createLazyWrapperAroundWakeable(wakeable) {
            // This is a temporary fork of the `use` implementation until we accept
            // promises everywhere.
            var thenable = wakeable;
            switch(thenable.status){
                case 'fulfilled':
                case 'rejected':
                    break;
                default:
                    {
                        if (typeof thenable.status === 'string') {
                            break;
                        }
                        var pendingThenable = thenable;
                        pendingThenable.status = 'pending';
                        pendingThenable.then(function(fulfilledValue) {
                            if (thenable.status === 'pending') {
                                var fulfilledThenable = thenable;
                                fulfilledThenable.status = 'fulfilled';
                                fulfilledThenable.value = fulfilledValue;
                            }
                        }, function(error) {
                            if (thenable.status === 'pending') {
                                var rejectedThenable = thenable;
                                rejectedThenable.status = 'rejected';
                                rejectedThenable.reason = error;
                            }
                        });
                        break;
                    }
            }
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: thenable,
                _init: readThenable
            };
            return lazyType;
        }
        function attemptResolveElement(request, type, key, ref, props, prevThenableState) {
            if (ref !== null && ref !== undefined) {
                // When the ref moves to the regular props object this will implicitly
                // throw for functions. We could probably relax it to a DEV warning for other
                // cases.
                throw new Error('Refs cannot be used in Server Components, nor passed to Client Components.');
            }
            {
                jsxPropsParents.set(props, type);
                if (typeof props.children === 'object' && props.children !== null) {
                    jsxChildrenParents.set(props.children, type);
                }
            }
            if (typeof type === 'function') {
                if (isClientReference(type)) {
                    // This is a reference to a Client Component.
                    return [
                        REACT_ELEMENT_TYPE,
                        type,
                        key,
                        props
                    ];
                } // This is a server-side component.
                prepareToUseHooksForComponent(prevThenableState);
                var result = type(props);
                if (typeof result === 'object' && result !== null && typeof result.then === 'function') {
                    // When the return value is in children position we can resolve it immediately,
                    // to its value without a wrapper if it's synchronously available.
                    var thenable = result;
                    if (thenable.status === 'fulfilled') {
                        return thenable.value;
                    } // TODO: Once we accept Promises as children on the client, we can just return
                    // the thenable here.
                    return createLazyWrapperAroundWakeable(result);
                }
                return result;
            } else if (typeof type === 'string') {
                // This is a host element. E.g. HTML.
                return [
                    REACT_ELEMENT_TYPE,
                    type,
                    key,
                    props
                ];
            } else if (typeof type === 'symbol') {
                if (type === REACT_FRAGMENT_TYPE) {
                    // For key-less fragments, we add a small optimization to avoid serializing
                    // it as a wrapper.
                    // TODO: If a key is specified, we should propagate its key to any children.
                    // Same as if a Server Component has a key.
                    return props.children;
                } // This might be a built-in React component. We'll let the client decide.
                // Any built-in works as long as its props are serializable.
                return [
                    REACT_ELEMENT_TYPE,
                    type,
                    key,
                    props
                ];
            } else if (type != null && typeof type === 'object') {
                if (isClientReference(type)) {
                    // This is a reference to a Client Component.
                    return [
                        REACT_ELEMENT_TYPE,
                        type,
                        key,
                        props
                    ];
                }
                switch(type.$$typeof){
                    case REACT_LAZY_TYPE:
                        {
                            var payload = type._payload;
                            var init = type._init;
                            var wrappedType = init(payload);
                            return attemptResolveElement(request, wrappedType, key, ref, props, prevThenableState);
                        }
                    case REACT_FORWARD_REF_TYPE:
                        {
                            var render = type.render;
                            prepareToUseHooksForComponent(prevThenableState);
                            return render(props, undefined);
                        }
                    case REACT_MEMO_TYPE:
                        {
                            return attemptResolveElement(request, type.type, key, ref, props, prevThenableState);
                        }
                }
            }
            throw new Error("Unsupported Server Component type: " + describeValueForErrorMessage(type));
        }
        function pingTask(request, task) {
            var pingedTasks = request.pingedTasks;
            pingedTasks.push(task);
            if (pingedTasks.length === 1) {
                request.flushScheduled = request.destination !== null;
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function createTask(request, model, context, abortSet) {
            var id = request.nextChunkId++;
            var task = {
                id: id,
                status: PENDING$1,
                model: model,
                context: context,
                ping: function() {
                    return pingTask(request, task);
                },
                thenableState: null
            };
            abortSet.add(task);
            return task;
        }
        function serializeByValueID(id) {
            return '$' + id.toString(16);
        }
        function serializeLazyID(id) {
            return '$L' + id.toString(16);
        }
        function serializePromiseID(id) {
            return '$@' + id.toString(16);
        }
        function serializeServerReferenceID(id) {
            return '$F' + id.toString(16);
        }
        function serializeSymbolReference(name) {
            return '$S' + name;
        }
        function serializeNumber(number) {
            if (Number.isFinite(number)) {
                if (number === 0 && 1 / number === -Infinity) {
                    return '$-0';
                } else {
                    return number;
                }
            } else {
                if (number === Infinity) {
                    return '$Infinity';
                } else if (number === -Infinity) {
                    return '$-Infinity';
                } else {
                    return '$NaN';
                }
            }
        }
        function serializeUndefined() {
            return '$undefined';
        }
        function serializeDateFromDateJSON(dateJSON) {
            // JSON.stringify automatically calls Date.prototype.toJSON which calls toISOString.
            // We need only tack on a $D prefix.
            return '$D' + dateJSON;
        }
        function serializeBigInt(n) {
            return '$n' + n.toString(10);
        }
        function serializeRowHeader(tag, id) {
            return id.toString(16) + ':' + tag;
        }
        function encodeReferenceChunk(request, id, reference) {
            var json = stringify(reference);
            var row = id.toString(16) + ':' + json + '\n';
            return stringToChunk(row);
        }
        function serializeClientReference(request, parent, key, clientReference) {
            var clientReferenceKey = getClientReferenceKey(clientReference);
            var writtenClientReferences = request.writtenClientReferences;
            var existingId = writtenClientReferences.get(clientReferenceKey);
            if (existingId !== undefined) {
                if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                    // If we're encoding the "type" of an element, we can refer
                    // to that by a lazy reference instead of directly since React
                    // knows how to deal with lazy values. This lets us suspend
                    // on this component rather than its parent until the code has
                    // loaded.
                    return serializeLazyID(existingId);
                }
                return serializeByValueID(existingId);
            }
            try {
                var clientReferenceMetadata = resolveClientReferenceMetadata(request.bundlerConfig, clientReference);
                request.pendingChunks++;
                var importId = request.nextChunkId++;
                emitImportChunk(request, importId, clientReferenceMetadata);
                writtenClientReferences.set(clientReferenceKey, importId);
                if (parent[0] === REACT_ELEMENT_TYPE && key === '1') {
                    // If we're encoding the "type" of an element, we can refer
                    // to that by a lazy reference instead of directly since React
                    // knows how to deal with lazy values. This lets us suspend
                    // on this component rather than its parent until the code has
                    // loaded.
                    return serializeLazyID(importId);
                }
                return serializeByValueID(importId);
            } catch (x) {
                request.pendingChunks++;
                var errorId = request.nextChunkId++;
                var digest = logRecoverableError(request, x);
                emitErrorChunk(request, errorId, digest, x);
                return serializeByValueID(errorId);
            }
        }
        function outlineModel(request, value) {
            request.pendingChunks++;
            var newTask = createTask(request, value, getActiveContext(), request.abortableTasks);
            retryTask(request, newTask);
            return newTask.id;
        }
        function serializeServerReference(request, parent, key, serverReference) {
            var writtenServerReferences = request.writtenServerReferences;
            var existingId = writtenServerReferences.get(serverReference);
            if (existingId !== undefined) {
                return serializeServerReferenceID(existingId);
            }
            var bound = getServerReferenceBoundArguments(request.bundlerConfig, serverReference);
            var serverReferenceMetadata = {
                id: getServerReferenceId(request.bundlerConfig, serverReference),
                bound: bound ? Promise.resolve(bound) : null
            };
            var metadataId = outlineModel(request, serverReferenceMetadata);
            writtenServerReferences.set(serverReference, metadataId);
            return serializeServerReferenceID(metadataId);
        }
        function serializeLargeTextString(request, text) {
            request.pendingChunks += 2;
            var textId = request.nextChunkId++;
            var textChunk = stringToChunk(text);
            var binaryLength = byteLengthOfChunk(textChunk);
            var row = textId.toString(16) + ':T' + binaryLength.toString(16) + ',';
            var headerChunk = stringToChunk(row);
            request.completedRegularChunks.push(headerChunk, textChunk);
            return serializeByValueID(textId);
        }
        function serializeMap(request, map) {
            var entries = Array.from(map);
            for(var i = 0; i < entries.length; i++){
                var key = entries[i][0];
                if (typeof key === 'object' && key !== null) {
                    var writtenObjects = request.writtenObjects;
                    var existingId = writtenObjects.get(key);
                    if (existingId === undefined) {
                        // Mark all object keys as seen so that they're always outlined.
                        writtenObjects.set(key, -1);
                    }
                }
            }
            var id = outlineModel(request, entries);
            return '$Q' + id.toString(16);
        }
        function serializeSet(request, set) {
            var entries = Array.from(set);
            for(var i = 0; i < entries.length; i++){
                var key = entries[i];
                if (typeof key === 'object' && key !== null) {
                    var writtenObjects = request.writtenObjects;
                    var existingId = writtenObjects.get(key);
                    if (existingId === undefined) {
                        // Mark all object keys as seen so that they're always outlined.
                        writtenObjects.set(key, -1);
                    }
                }
            }
            var id = outlineModel(request, entries);
            return '$W' + id.toString(16);
        }
        function escapeStringValue(value) {
            if (value[0] === '$') {
                // We need to escape $ prefixed strings since we use those to encode
                // references to IDs and as special symbol values.
                return '$' + value;
            } else {
                return value;
            }
        }
        var modelRoot = false;
        function resolveModelToJSON(request, parent, key, value) {
            // Make sure that `parent[key]` wasn't JSONified before `value` was passed to us
            {
                // $FlowFixMe[incompatible-use]
                var originalValue = parent[key];
                if (typeof originalValue === 'object' && originalValue !== value && !(originalValue instanceof Date)) {
                    if (objectName(originalValue) !== 'Object') {
                        var jsxParentType = jsxChildrenParents.get(parent);
                        if (typeof jsxParentType === 'string') {
                            error('%s objects cannot be rendered as text children. Try formatting it using toString().%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                        } else {
                            error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(originalValue), describeObjectForErrorMessage(parent, key));
                        }
                    } else {
                        error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with toJSON methods are not supported. Convert it manually ' + 'to a simple value before passing it to props.%s', describeObjectForErrorMessage(parent, key));
                    }
                }
            }
            switch(value){
                case REACT_ELEMENT_TYPE:
                    return '$';
            }
            while(typeof value === 'object' && value !== null && (value.$$typeof === REACT_ELEMENT_TYPE || value.$$typeof === REACT_LAZY_TYPE)){
                try {
                    switch(value.$$typeof){
                        case REACT_ELEMENT_TYPE:
                            {
                                var writtenObjects = request.writtenObjects;
                                var existingId = writtenObjects.get(value);
                                if (existingId !== undefined) {
                                    if (existingId === -1) {
                                        // Seen but not yet outlined.
                                        var newId = outlineModel(request, value);
                                        return serializeByValueID(newId);
                                    } else if (modelRoot === value) {
                                        // This is the ID we're currently emitting so we need to write it
                                        // once but if we discover it again, we refer to it by id.
                                        modelRoot = null;
                                    } else {
                                        // We've already emitted this as an outlined object, so we can
                                        // just refer to that by its existing ID.
                                        return serializeByValueID(existingId);
                                    }
                                } else {
                                    // This is the first time we've seen this object. We may never see it again
                                    // so we'll inline it. Mark it as seen. If we see it again, we'll outline.
                                    writtenObjects.set(value, -1);
                                } // TODO: Concatenate keys of parents onto children.
                                var element = value; // Attempt to render the Server Component.
                                value = attemptResolveElement(request, element.type, element.key, element.ref, element.props, null);
                                break;
                            }
                        case REACT_LAZY_TYPE:
                            {
                                var payload = value._payload;
                                var init = value._init;
                                value = init(payload);
                                break;
                            }
                    }
                } catch (thrownValue) {
                    var x = thrownValue === SuspenseException ? // reasons, the rest of the Suspense implementation expects the thrown
                    // value to be a thenable, because before `use` existed that was the
                    // (unstable) API for suspending. This implementation detail can change
                    // later, once we deprecate the old API in favor of `use`.
                    getSuspendedThenable() : thrownValue;
                    if (typeof x === 'object' && x !== null) {
                        // $FlowFixMe[method-unbinding]
                        if (typeof x.then === 'function') {
                            // Something suspended, we'll need to create a new task and resolve it later.
                            request.pendingChunks++;
                            var newTask = createTask(request, value, getActiveContext(), request.abortableTasks);
                            var ping = newTask.ping;
                            x.then(ping, ping);
                            newTask.thenableState = getThenableStateAfterSuspending();
                            return serializeLazyID(newTask.id);
                        }
                    } // Something errored. We'll still send everything we have up until this point.
                    // We'll replace this element with a lazy reference that throws on the client
                    // once it gets rendered.
                    request.pendingChunks++;
                    var errorId = request.nextChunkId++;
                    var digest = logRecoverableError(request, x);
                    emitErrorChunk(request, errorId, digest, x);
                    return serializeLazyID(errorId);
                }
            }
            if (value === null) {
                return null;
            }
            if (typeof value === 'object') {
                if (isClientReference(value)) {
                    return serializeClientReference(request, parent, key, value);
                }
                var _writtenObjects = request.writtenObjects;
                var _existingId = _writtenObjects.get(value); // $FlowFixMe[method-unbinding]
                if (typeof value.then === 'function') {
                    if (_existingId !== undefined) {
                        if (modelRoot === value) {
                            // This is the ID we're currently emitting so we need to write it
                            // once but if we discover it again, we refer to it by id.
                            modelRoot = null;
                        } else {
                            // We've seen this promise before, so we can just refer to the same result.
                            return serializePromiseID(_existingId);
                        }
                    } // We assume that any object with a .then property is a "Thenable" type,
                    // or a Promise type. Either of which can be represented by a Promise.
                    var promiseId = serializeThenable(request, value);
                    _writtenObjects.set(value, promiseId);
                    return serializePromiseID(promiseId);
                }
                if (_existingId !== undefined) {
                    if (_existingId === -1) {
                        // Seen but not yet outlined.
                        var _newId = outlineModel(request, value);
                        return serializeByValueID(_newId);
                    } else if (modelRoot === value) {
                        // This is the ID we're currently emitting so we need to write it
                        // once but if we discover it again, we refer to it by id.
                        modelRoot = null;
                    } else {
                        // We've already emitted this as an outlined object, so we can
                        // just refer to that by its existing ID.
                        return serializeByValueID(_existingId);
                    }
                } else {
                    // This is the first time we've seen this object. We may never see it again
                    // so we'll inline it. Mark it as seen. If we see it again, we'll outline.
                    _writtenObjects.set(value, -1);
                }
                if (isArray(value)) {
                    // $FlowFixMe[incompatible-return]
                    return value;
                }
                if (value instanceof Map) {
                    return serializeMap(request, value);
                }
                if (value instanceof Set) {
                    return serializeSet(request, value);
                }
                var iteratorFn = getIteratorFn(value);
                if (iteratorFn) {
                    return Array.from(value);
                } // Verify that this is a simple plain object.
                var proto = getPrototypeOf(value);
                if (proto !== ObjectPrototype && (proto === null || getPrototypeOf(proto) !== null)) {
                    throw new Error('Only plain objects, and a few built-ins, can be passed to Client Components ' + 'from Server Components. Classes or null prototypes are not supported.');
                }
                {
                    if (objectName(value) !== 'Object') {
                        error('Only plain objects can be passed to Client Components from Server Components. ' + '%s objects are not supported.%s', objectName(value), describeObjectForErrorMessage(parent, key));
                    } else if (!isSimpleObject(value)) {
                        error('Only plain objects can be passed to Client Components from Server Components. ' + 'Classes or other objects with methods are not supported.%s', describeObjectForErrorMessage(parent, key));
                    } else if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(value);
                        if (symbols.length > 0) {
                            error('Only plain objects can be passed to Client Components from Server Components. ' + 'Objects with symbol properties like %s are not supported.%s', symbols[0].description, describeObjectForErrorMessage(parent, key));
                        }
                    }
                }
                return value;
            }
            if (typeof value === 'string') {
                if (value[value.length - 1] === 'Z') {
                    // Possibly a Date, whose toJSON automatically calls toISOString
                    // $FlowFixMe[incompatible-use]
                    var _originalValue = parent[key];
                    if (_originalValue instanceof Date) {
                        return serializeDateFromDateJSON(value);
                    }
                }
                if (value.length >= 1024) {
                    // For large strings, we encode them outside the JSON payload so that we
                    // don't have to double encode and double parse the strings. This can also
                    // be more compact in case the string has a lot of escaped characters.
                    return serializeLargeTextString(request, value);
                }
                return escapeStringValue(value);
            }
            if (typeof value === 'boolean') {
                return value;
            }
            if (typeof value === 'number') {
                return serializeNumber(value);
            }
            if (typeof value === 'undefined') {
                return serializeUndefined();
            }
            if (typeof value === 'function') {
                if (isClientReference(value)) {
                    return serializeClientReference(request, parent, key, value);
                }
                if (isServerReference(value)) {
                    return serializeServerReference(request, parent, key, value);
                }
                if (/^on[A-Z]/.test(key)) {
                    throw new Error('Event handlers cannot be passed to Client Component props.' + describeObjectForErrorMessage(parent, key) + '\nIf you need interactivity, consider converting part of this to a Client Component.');
                } else {
                    throw new Error('Functions cannot be passed directly to Client Components ' + 'unless you explicitly expose it by marking it with "use server".' + describeObjectForErrorMessage(parent, key));
                }
            }
            if (typeof value === 'symbol') {
                var writtenSymbols = request.writtenSymbols;
                var _existingId2 = writtenSymbols.get(value);
                if (_existingId2 !== undefined) {
                    return serializeByValueID(_existingId2);
                } // $FlowFixMe[incompatible-type] `description` might be undefined
                var name = value.description;
                if (Symbol.for(name) !== value) {
                    throw new Error('Only global symbols received from Symbol.for(...) can be passed to Client Components. ' + ("The symbol Symbol.for(" + // $FlowFixMe[incompatible-type] `description` might be undefined
                    value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, key));
                }
                request.pendingChunks++;
                var symbolId = request.nextChunkId++;
                emitSymbolChunk(request, symbolId, name);
                writtenSymbols.set(value, symbolId);
                return serializeByValueID(symbolId);
            }
            if (typeof value === 'bigint') {
                return serializeBigInt(value);
            }
            throw new Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, key));
        }
        function logPostpone(request, reason) {
            var onPostpone = request.onPostpone;
            onPostpone(reason);
        }
        function logRecoverableError(request, error) {
            var onError = request.onError;
            var errorDigest = onError(error);
            if (errorDigest != null && typeof errorDigest !== 'string') {
                // eslint-disable-next-line react-internal/prod-error-codes
                throw new Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
            }
            return errorDigest || '';
        }
        function fatalError(request, error) {
            if (request.destination !== null) {
                request.status = CLOSED;
                closeWithError(request.destination, error);
            } else {
                request.status = CLOSING;
                request.fatalError = error;
            }
        }
        function emitPostponeChunk(request, id, postponeInstance) {
            var row;
            {
                var reason = '';
                var stack = '';
                try {
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    reason = String(postponeInstance.message); // eslint-disable-next-line react-internal/safe-string-coercion
                    stack = String(postponeInstance.stack);
                } catch (x) {}
                row = serializeRowHeader('P', id) + stringify({
                    reason: reason,
                    stack: stack
                }) + '\n';
            }
            var processedChunk = stringToChunk(row);
            request.completedErrorChunks.push(processedChunk);
        }
        function emitErrorChunk(request, id, digest, error) {
            var errorInfo;
            {
                var message;
                var stack = '';
                try {
                    if (error instanceof Error) {
                        // eslint-disable-next-line react-internal/safe-string-coercion
                        message = String(error.message); // eslint-disable-next-line react-internal/safe-string-coercion
                        stack = String(error.stack);
                    } else {
                        message = 'Error: ' + error;
                    }
                } catch (x) {
                    message = 'An error occurred but serializing the error message failed.';
                }
                errorInfo = {
                    digest: digest,
                    message: message,
                    stack: stack
                };
            }
            var row = serializeRowHeader('E', id) + stringify(errorInfo) + '\n';
            var processedChunk = stringToChunk(row);
            request.completedErrorChunks.push(processedChunk);
        }
        function emitImportChunk(request, id, clientReferenceMetadata) {
            // $FlowFixMe[incompatible-type] stringify can return null
            var json = stringify(clientReferenceMetadata);
            var row = serializeRowHeader('I', id) + json + '\n';
            var processedChunk = stringToChunk(row);
            request.completedImportChunks.push(processedChunk);
        }
        function emitHintChunk(request, code, model) {
            var json = stringify(model);
            var id = request.nextChunkId++;
            var row = serializeRowHeader('H' + code, id) + json + '\n';
            var processedChunk = stringToChunk(row);
            request.completedHintChunks.push(processedChunk);
        }
        function emitSymbolChunk(request, id, name) {
            var symbolReference = serializeSymbolReference(name);
            var processedChunk = encodeReferenceChunk(request, id, symbolReference);
            request.completedImportChunks.push(processedChunk);
        }
        function emitModelChunk(request, id, model) {
            // Track the root so we know that we have to emit this object even though it
            // already has an ID. This is needed because we might see this object twice
            // in the same toJSON if it is cyclic.
            modelRoot = model; // $FlowFixMe[incompatible-type] stringify can return null
            var json = stringify(model, request.toJSON);
            var row = id.toString(16) + ':' + json + '\n';
            var processedChunk = stringToChunk(row);
            request.completedRegularChunks.push(processedChunk);
        }
        function retryTask(request, task) {
            if (task.status !== PENDING$1) {
                // We completed this by other means before we had a chance to retry it.
                return;
            }
            switchContext(task.context);
            try {
                var value = task.model;
                if (typeof value === 'object' && value !== null && value.$$typeof === REACT_ELEMENT_TYPE) {
                    request.writtenObjects.set(value, task.id); // TODO: Concatenate keys of parents onto children.
                    var element = value; // When retrying a component, reuse the thenableState from the
                    // previous attempt.
                    var prevThenableState = task.thenableState; // Attempt to render the Server Component.
                    // Doing this here lets us reuse this same task if the next component
                    // also suspends.
                    task.model = value;
                    value = attemptResolveElement(request, element.type, element.key, element.ref, element.props, prevThenableState); // Successfully finished this component. We're going to keep rendering
                    // using the same task, but we reset its thenable state before continuing.
                    task.thenableState = null; // Keep rendering and reuse the same task. This inner loop is separate
                    // from the render above because we don't need to reset the thenable state
                    // until the next time something suspends and retries.
                    while(typeof value === 'object' && value !== null && value.$$typeof === REACT_ELEMENT_TYPE){
                        request.writtenObjects.set(value, task.id); // TODO: Concatenate keys of parents onto children.
                        var nextElement = value;
                        task.model = value;
                        value = attemptResolveElement(request, nextElement.type, nextElement.key, nextElement.ref, nextElement.props, null);
                    }
                } // Track that this object is outlined and has an id.
                if (typeof value === 'object' && value !== null) {
                    request.writtenObjects.set(value, task.id);
                }
                emitModelChunk(request, task.id, value);
                request.abortableTasks.delete(task);
                task.status = COMPLETED;
            } catch (thrownValue) {
                var x = thrownValue === SuspenseException ? // reasons, the rest of the Suspense implementation expects the thrown
                // value to be a thenable, because before `use` existed that was the
                // (unstable) API for suspending. This implementation detail can change
                // later, once we deprecate the old API in favor of `use`.
                getSuspendedThenable() : thrownValue;
                if (typeof x === 'object' && x !== null) {
                    // $FlowFixMe[method-unbinding]
                    if (typeof x.then === 'function') {
                        // Something suspended again, let's pick it back up later.
                        var ping = task.ping;
                        x.then(ping, ping);
                        task.thenableState = getThenableStateAfterSuspending();
                        return;
                    }
                }
                request.abortableTasks.delete(task);
                task.status = ERRORED$1;
                var digest = logRecoverableError(request, x);
                emitErrorChunk(request, task.id, digest, x);
            }
        }
        function performWork(request) {
            var prevDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = HooksDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request;
            prepareToUseHooksForRequest(request);
            try {
                var pingedTasks = request.pingedTasks;
                request.pingedTasks = [];
                for(var i = 0; i < pingedTasks.length; i++){
                    var task = pingedTasks[i];
                    retryTask(request, task);
                }
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            } finally{
                ReactCurrentDispatcher.current = prevDispatcher;
                resetHooksForRequest();
                currentRequest = prevRequest;
            }
        }
        function abortTask(task, request, errorId) {
            task.status = ABORTED; // Instead of emitting an error per task.id, we emit a model that only
            // has a single value referencing the error.
            var ref = serializeByValueID(errorId);
            var processedChunk = encodeReferenceChunk(request, task.id, ref);
            request.completedErrorChunks.push(processedChunk);
        }
        function flushCompletedChunks(request, destination) {
            beginWriting();
            try {
                // We emit module chunks first in the stream so that
                // they can be preloaded as early as possible.
                var importsChunks = request.completedImportChunks;
                var i = 0;
                for(; i < importsChunks.length; i++){
                    request.pendingChunks--;
                    var chunk = importsChunks[i];
                    var keepWriting = writeChunkAndReturn(destination, chunk);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                importsChunks.splice(0, i); // Next comes hints.
                var hintChunks = request.completedHintChunks;
                i = 0;
                for(; i < hintChunks.length; i++){
                    var _chunk = hintChunks[i];
                    var _keepWriting = writeChunkAndReturn(destination, _chunk);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                hintChunks.splice(0, i); // Next comes model data.
                var regularChunks = request.completedRegularChunks;
                i = 0;
                for(; i < regularChunks.length; i++){
                    request.pendingChunks--;
                    var _chunk2 = regularChunks[i];
                    var _keepWriting2 = writeChunkAndReturn(destination, _chunk2);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                regularChunks.splice(0, i); // Finally, errors are sent. The idea is that it's ok to delay
                // any error messages and prioritize display of other parts of
                // the page.
                var errorChunks = request.completedErrorChunks;
                i = 0;
                for(; i < errorChunks.length; i++){
                    request.pendingChunks--;
                    var _chunk3 = errorChunks[i];
                    var _keepWriting3 = writeChunkAndReturn(destination, _chunk3);
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    }
                }
                errorChunks.splice(0, i);
            } finally{
                request.flushScheduled = false;
                completeWriting(destination);
            }
            if (request.pendingChunks === 0) {
                close$1(destination);
            }
        }
        function startWork(request) {
            request.flushScheduled = request.destination !== null;
            if (supportsRequestStorage) {
                scheduleWork(function() {
                    return requestStorage.run(request, performWork, request);
                });
            } else {
                scheduleWork(function() {
                    return performWork(request);
                });
            }
        }
        function enqueueFlush(request) {
            if (request.flushScheduled === false && // If there are pinged tasks we are going to flush anyway after work completes
            request.pingedTasks.length === 0 && // If there is no destination there is nothing we can flush to. A flush will
            // happen when we start flowing again
            request.destination !== null) {
                var destination = request.destination;
                request.flushScheduled = true;
                scheduleWork(function() {
                    return flushCompletedChunks(request, destination);
                });
            }
        }
        function startFlowing(request, destination) {
            if (request.status === CLOSING) {
                request.status = CLOSED;
                closeWithError(destination, request.fatalError);
                return;
            }
            if (request.status === CLOSED) {
                return;
            }
            if (request.destination !== null) {
                // We're already flowing.
                return;
            }
            request.destination = destination;
            try {
                flushCompletedChunks(request, destination);
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function abort(request, reason) {
            try {
                var abortableTasks = request.abortableTasks;
                if (abortableTasks.size > 0) {
                    // We have tasks to abort. We'll emit one error row and then emit a reference
                    // to that row from every row that's still remaining.
                    request.pendingChunks++;
                    var errorId = request.nextChunkId++;
                    var postponeInstance;
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    } else {
                        var error = reason === undefined ? new Error('The render was aborted by the server without a reason.') : reason;
                        var digest = logRecoverableError(request, error);
                        emitErrorChunk(request, errorId, digest, error);
                    }
                    abortableTasks.forEach(function(task) {
                        return abortTask(task, request, errorId);
                    });
                    abortableTasks.clear();
                }
                if (request.destination !== null) {
                    flushCompletedChunks(request, request.destination);
                }
            } catch (error) {
                logRecoverableError(request, error);
                fatalError(request, error);
            }
        }
        function importServerContexts(contexts) {
            return rootContextSnapshot;
        }
        // This is the parsed shape of the wire format which is why it is
        // condensed to only the essentialy information
        var ID = 0;
        var CHUNKS = 1;
        var NAME = 2; // export const ASYNC = 3;
        // This logic is correct because currently only include the 4th tuple member
        // when the module is async. If that changes we will need to actually assert
        // the value is true. We don't index into the 4th slot because flow does not
        // like the potential out of bounds access
        function isAsyncImport(metadata) {
            return metadata.length === 4;
        }
        function resolveServerReference(bundlerConfig, id) {
            var name = '';
            var resolvedModuleData = bundlerConfig[id];
            if (resolvedModuleData) {
                // The potentially aliased name.
                name = resolvedModuleData.name;
            } else {
                // We didn't find this specific export name but we might have the * export
                // which contains this name as well.
                // TODO: It's unfortunate that we now have to parse this string. We should
                // probably go back to encoding path and name separately on the client reference.
                var idx = id.lastIndexOf('#');
                if (idx !== -1) {
                    name = id.slice(idx + 1);
                    resolvedModuleData = bundlerConfig[id.slice(0, idx)];
                }
                if (!resolvedModuleData) {
                    throw new Error('Could not find the module "' + id + '" in the React Server Manifest. ' + 'This is probably a bug in the React Server Components bundler.');
                }
            } // TODO: This needs to return async: true if it's an async module.
            return [
                resolvedModuleData.id,
                resolvedModuleData.chunks,
                name
            ];
        } // The chunk cache contains all the chunks we've preloaded so far.
        // If they're still pending they're a thenable. This map also exists
        // in Turbopack but unfortunately it's not exposed so we have to
        // replicate it in user space. null means that it has already loaded.
        var chunkCache = new Map();
        function requireAsyncModule(id) {
            // We've already loaded all the chunks. We can require the module.
            var promise = globalThis.__next_require__(id);
            if (typeof promise.then !== 'function') {
                // This wasn't a promise after all.
                return null;
            } else if (promise.status === 'fulfilled') {
                // This module was already resolved earlier.
                return null;
            } else {
                // Instrument the Promise to stash the result.
                promise.then(function(value) {
                    var fulfilledThenable = promise;
                    fulfilledThenable.status = 'fulfilled';
                    fulfilledThenable.value = value;
                }, function(reason) {
                    var rejectedThenable = promise;
                    rejectedThenable.status = 'rejected';
                    rejectedThenable.reason = reason;
                });
                return promise;
            }
        }
        function ignoreReject() {} // Start preloading the modules since we might need them soon.
        // This function doesn't suspend.
        function preloadModule(metadata) {
            var chunks = metadata[CHUNKS];
            var promises = [];
            for(var i = 0; i < chunks.length; i++){
                var chunkFilename = chunks[i];
                var entry = chunkCache.get(chunkFilename);
                if (entry === undefined) {
                    var thenable = loadChunk(chunkFilename);
                    promises.push(thenable); // $FlowFixMe[method-unbinding]
                    var resolve = chunkCache.set.bind(chunkCache, chunkFilename, null);
                    thenable.then(resolve, ignoreReject);
                    chunkCache.set(chunkFilename, thenable);
                } else if (entry !== null) {
                    promises.push(entry);
                }
            }
            if (isAsyncImport(metadata)) {
                if (promises.length === 0) {
                    return requireAsyncModule(metadata[ID]);
                } else {
                    return Promise.all(promises).then(function() {
                        return requireAsyncModule(metadata[ID]);
                    });
                }
            } else if (promises.length > 0) {
                return Promise.all(promises);
            } else {
                return null;
            }
        } // Actually require the module or suspend if it's not yet ready.
        // Increase priority if necessary.
        function requireModule(metadata) {
            var moduleExports = globalThis.__next_require__(metadata[ID]);
            if (isAsyncImport(metadata)) {
                if (typeof moduleExports.then !== 'function') ;
                else if (moduleExports.status === 'fulfilled') {
                    // This Promise should've been instrumented by preloadModule.
                    moduleExports = moduleExports.value;
                } else {
                    throw moduleExports.reason;
                }
            }
            if (metadata[NAME] === '*') {
                // This is a placeholder value that represents that the caller imported this
                // as a CommonJS module as is.
                return moduleExports;
            }
            if (metadata[NAME] === '') {
                // This is a placeholder value that represents that the caller accessed the
                // default property of this if it was an ESM interop module.
                return moduleExports.__esModule ? moduleExports.default : moduleExports;
            }
            return moduleExports[metadata[NAME]];
        }
        function loadChunk(filename) {
            return globalThis.__next_chunk_load__(filename);
        }
        // The server acts as a Client of itself when resolving Server References.
        var PENDING = 'pending';
        var BLOCKED = 'blocked';
        var RESOLVED_MODEL = 'resolved_model';
        var INITIALIZED = 'fulfilled';
        var ERRORED = 'rejected'; // $FlowFixMe[missing-this-annot]
        function Chunk(status, value, reason, response) {
            this.status = status;
            this.value = value;
            this.reason = reason;
            this._response = response;
        } // We subclass Promise.prototype so that we get other methods like .catch
        Chunk.prototype = Object.create(Promise.prototype); // TODO: This doesn't return a new Promise chain unlike the real .then
        Chunk.prototype.then = function(resolve, reject) {
            var chunk = this; // If we have resolved content, we try to initialize it first which
            // might put us back into one of the other states.
            switch(chunk.status){
                case RESOLVED_MODEL:
                    initializeModelChunk(chunk);
                    break;
            } // The status might have changed after initialization.
            switch(chunk.status){
                case INITIALIZED:
                    resolve(chunk.value);
                    break;
                case PENDING:
                case BLOCKED:
                    if (resolve) {
                        if (chunk.value === null) {
                            chunk.value = [];
                        }
                        chunk.value.push(resolve);
                    }
                    if (reject) {
                        if (chunk.reason === null) {
                            chunk.reason = [];
                        }
                        chunk.reason.push(reject);
                    }
                    break;
                default:
                    reject(chunk.reason);
                    break;
            }
        };
        function getRoot(response) {
            var chunk = getChunk(response, 0);
            return chunk;
        }
        function createPendingChunk(response) {
            // $FlowFixMe[invalid-constructor] Flow doesn't support functions as constructors
            return new Chunk(PENDING, null, null, response);
        }
        function wakeChunk(listeners, value) {
            for(var i = 0; i < listeners.length; i++){
                var listener = listeners[i];
                listener(value);
            }
        }
        function triggerErrorOnChunk(chunk, error) {
            if (chunk.status !== PENDING && chunk.status !== BLOCKED) {
                // We already resolved. We didn't expect to see this.
                return;
            }
            var listeners = chunk.reason;
            var erroredChunk = chunk;
            erroredChunk.status = ERRORED;
            erroredChunk.reason = error;
            if (listeners !== null) {
                wakeChunk(listeners, error);
            }
        }
        function createResolvedModelChunk(response, value) {
            // $FlowFixMe[invalid-constructor] Flow doesn't support functions as constructors
            return new Chunk(RESOLVED_MODEL, value, null, response);
        }
        function bindArgs$1(fn, args) {
            return fn.bind.apply(fn, [
                null
            ].concat(args));
        }
        function loadServerReference$1(response, id, bound, parentChunk, parentObject, key) {
            var serverReference = resolveServerReference(response._bundlerConfig, id); // We expect most servers to not really need this because you'd just have all
            // the relevant modules already loaded but it allows for lazy loading of code
            // if needed.
            var preloadPromise = preloadModule(serverReference);
            var promise;
            if (bound) {
                promise = Promise.all([
                    bound,
                    preloadPromise
                ]).then(function(_ref) {
                    var args = _ref[0];
                    return bindArgs$1(requireModule(serverReference), args);
                });
            } else {
                if (preloadPromise) {
                    promise = Promise.resolve(preloadPromise).then(function() {
                        return requireModule(serverReference);
                    });
                } else {
                    // Synchronously available
                    return requireModule(serverReference);
                }
            }
            promise.then(createModelResolver(parentChunk, parentObject, key), createModelReject(parentChunk)); // We need a placeholder value that will be replaced later.
            return null;
        }
        var initializingChunk = null;
        var initializingChunkBlockedModel = null;
        function initializeModelChunk(chunk) {
            var prevChunk = initializingChunk;
            var prevBlocked = initializingChunkBlockedModel;
            initializingChunk = chunk;
            initializingChunkBlockedModel = null;
            try {
                var value = JSON.parse(chunk.value, chunk._response._fromJSON);
                if (initializingChunkBlockedModel !== null && initializingChunkBlockedModel.deps > 0) {
                    initializingChunkBlockedModel.value = value; // We discovered new dependencies on modules that are not yet resolved.
                    // We have to go the BLOCKED state until they're resolved.
                    var blockedChunk = chunk;
                    blockedChunk.status = BLOCKED;
                    blockedChunk.value = null;
                    blockedChunk.reason = null;
                } else {
                    var initializedChunk = chunk;
                    initializedChunk.status = INITIALIZED;
                    initializedChunk.value = value;
                }
            } catch (error) {
                var erroredChunk = chunk;
                erroredChunk.status = ERRORED;
                erroredChunk.reason = error;
            } finally{
                initializingChunk = prevChunk;
                initializingChunkBlockedModel = prevBlocked;
            }
        } // Report that any missing chunks in the model is now going to throw this
        // error upon read. Also notify any pending promises.
        function reportGlobalError(response, error) {
            response._chunks.forEach(function(chunk) {
                // If this chunk was already resolved or errored, it won't
                // trigger an error but if it wasn't then we need to
                // because we won't be getting any new data to resolve it.
                if (chunk.status === PENDING) {
                    triggerErrorOnChunk(chunk, error);
                }
            });
        }
        function getChunk(response, id) {
            var chunks = response._chunks;
            var chunk = chunks.get(id);
            if (!chunk) {
                var prefix = response._prefix;
                var key = prefix + id; // Check if we have this field in the backing store already.
                var backingEntry = response._formData.get(key);
                if (backingEntry != null) {
                    // We assume that this is a string entry for now.
                    chunk = createResolvedModelChunk(response, backingEntry);
                } else {
                    // We're still waiting on this entry to stream in.
                    chunk = createPendingChunk(response);
                }
                chunks.set(id, chunk);
            }
            return chunk;
        }
        function createModelResolver(chunk, parentObject, key) {
            var blocked;
            if (initializingChunkBlockedModel) {
                blocked = initializingChunkBlockedModel;
                blocked.deps++;
            } else {
                blocked = initializingChunkBlockedModel = {
                    deps: 1,
                    value: null
                };
            }
            return function(value) {
                parentObject[key] = value;
                blocked.deps--;
                if (blocked.deps === 0) {
                    if (chunk.status !== BLOCKED) {
                        return;
                    }
                    var resolveListeners = chunk.value;
                    var initializedChunk = chunk;
                    initializedChunk.status = INITIALIZED;
                    initializedChunk.value = blocked.value;
                    if (resolveListeners !== null) {
                        wakeChunk(resolveListeners, blocked.value);
                    }
                }
            };
        }
        function createModelReject(chunk) {
            return function(error) {
                return triggerErrorOnChunk(chunk, error);
            };
        }
        function getOutlinedModel(response, id) {
            var chunk = getChunk(response, id);
            if (chunk.status === RESOLVED_MODEL) {
                initializeModelChunk(chunk);
            }
            if (chunk.status !== INITIALIZED) {
                // We know that this is emitted earlier so otherwise it's an error.
                throw chunk.reason;
            }
            return chunk.value;
        }
        function parseModelString(response, parentObject, key, value) {
            if (value[0] === '$') {
                switch(value[1]){
                    case '$':
                        {
                            // This was an escaped string value.
                            return value.slice(1);
                        }
                    case '@':
                        {
                            // Promise
                            var id = parseInt(value.slice(2), 16);
                            var chunk = getChunk(response, id);
                            return chunk;
                        }
                    case 'S':
                        {
                            // Symbol
                            return Symbol.for(value.slice(2));
                        }
                    case 'F':
                        {
                            // Server Reference
                            var _id = parseInt(value.slice(2), 16); // TODO: Just encode this in the reference inline instead of as a model.
                            var metaData = getOutlinedModel(response, _id);
                            return loadServerReference$1(response, metaData.id, metaData.bound, initializingChunk, parentObject, key);
                        }
                    case 'Q':
                        {
                            // Map
                            var _id2 = parseInt(value.slice(2), 16);
                            var data = getOutlinedModel(response, _id2);
                            return new Map(data);
                        }
                    case 'W':
                        {
                            // Set
                            var _id3 = parseInt(value.slice(2), 16);
                            var _data = getOutlinedModel(response, _id3);
                            return new Set(_data);
                        }
                    case 'K':
                        {
                            // FormData
                            var stringId = value.slice(2);
                            var formPrefix = response._prefix + stringId + '_';
                            var _data2 = new FormData();
                            var backingFormData = response._formData; // We assume that the reference to FormData always comes after each
                            // entry that it references so we can assume they all exist in the
                            // backing store already.
                            // $FlowFixMe[prop-missing] FormData has forEach on it.
                            backingFormData.forEach(function(entry, entryKey) {
                                if (entryKey.startsWith(formPrefix)) {
                                    _data2.append(entryKey.slice(formPrefix.length), entry);
                                }
                            });
                            return _data2;
                        }
                    case 'I':
                        {
                            // $Infinity
                            return Infinity;
                        }
                    case '-':
                        {
                            // $-0 or $-Infinity
                            if (value === '$-0') {
                                return -0;
                            } else {
                                return -Infinity;
                            }
                        }
                    case 'N':
                        {
                            // $NaN
                            return NaN;
                        }
                    case 'u':
                        {
                            // matches "$undefined"
                            // Special encoding for `undefined` which can't be serialized as JSON otherwise.
                            return undefined;
                        }
                    case 'D':
                        {
                            // Date
                            return new Date(Date.parse(value.slice(2)));
                        }
                    case 'n':
                        {
                            // BigInt
                            return BigInt(value.slice(2));
                        }
                    default:
                        {
                            // We assume that anything else is a reference ID.
                            var _id4 = parseInt(value.slice(1), 16);
                            var _chunk = getChunk(response, _id4);
                            switch(_chunk.status){
                                case RESOLVED_MODEL:
                                    initializeModelChunk(_chunk);
                                    break;
                            } // The status might have changed after initialization.
                            switch(_chunk.status){
                                case INITIALIZED:
                                    return _chunk.value;
                                case PENDING:
                                case BLOCKED:
                                    var parentChunk = initializingChunk;
                                    _chunk.then(createModelResolver(parentChunk, parentObject, key), createModelReject(parentChunk));
                                    return null;
                                default:
                                    throw _chunk.reason;
                            }
                        }
                }
            }
            return value;
        }
        function createResponse(bundlerConfig, formFieldPrefix) {
            var backingFormData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new FormData();
            var chunks = new Map();
            var response = {
                _bundlerConfig: bundlerConfig,
                _prefix: formFieldPrefix,
                _formData: backingFormData,
                _chunks: chunks,
                _fromJSON: function(key, value) {
                    if (typeof value === 'string') {
                        // We can't use .bind here because we need the "this" value.
                        return parseModelString(response, this, key, value);
                    }
                    return value;
                }
            };
            return response;
        }
        function close(response) {
            // In case there are any remaining unresolved chunks, they won't
            // be resolved now. So we need to issue an error to those.
            // Ideally we should be able to early bail out if we kept a
            // ref count of pending chunks.
            reportGlobalError(response, new Error('Connection closed.'));
        }
        function bindArgs(fn, args) {
            return fn.bind.apply(fn, [
                null
            ].concat(args));
        }
        function loadServerReference(bundlerConfig, id, bound) {
            var serverReference = resolveServerReference(bundlerConfig, id); // We expect most servers to not really need this because you'd just have all
            // the relevant modules already loaded but it allows for lazy loading of code
            // if needed.
            var preloadPromise = preloadModule(serverReference);
            if (bound) {
                return Promise.all([
                    bound,
                    preloadPromise
                ]).then(function(_ref) {
                    var args = _ref[0];
                    return bindArgs(requireModule(serverReference), args);
                });
            } else if (preloadPromise) {
                return Promise.resolve(preloadPromise).then(function() {
                    return requireModule(serverReference);
                });
            } else {
                // Synchronously available
                return Promise.resolve(requireModule(serverReference));
            }
        }
        function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix) {
            // The data for this reference is encoded in multiple fields under this prefix.
            var actionResponse = createResponse(serverManifest, formFieldPrefix, body);
            close(actionResponse);
            var refPromise = getRoot(actionResponse); // Force it to initialize
            // $FlowFixMe
            refPromise.then(function() {});
            if (refPromise.status !== 'fulfilled') {
                // $FlowFixMe
                throw refPromise.reason;
            }
            return refPromise.value;
        }
        function decodeAction(body, serverManifest) {
            // We're going to create a new formData object that holds all the fields except
            // the implementation details of the action data.
            var formData = new FormData();
            var action = null; // $FlowFixMe[prop-missing]
            body.forEach(function(value, key) {
                if (!key.startsWith('$ACTION_')) {
                    formData.append(key, value);
                    return;
                } // Later actions may override earlier actions if a button is used to override the default
                // form action.
                if (key.startsWith('$ACTION_REF_')) {
                    var formFieldPrefix = '$ACTION_' + key.slice(12) + ':';
                    var metaData = decodeBoundActionMetaData(body, serverManifest, formFieldPrefix);
                    action = loadServerReference(serverManifest, metaData.id, metaData.bound);
                    return;
                }
                if (key.startsWith('$ACTION_ID_')) {
                    var id = key.slice(11);
                    action = loadServerReference(serverManifest, id, null);
                    return;
                }
            });
            if (action === null) {
                return null;
            } // Return the action with the remaining FormData bound to the first argument.
            return action.then(function(fn) {
                return fn.bind(null, formData);
            });
        }
        function renderToReadableStream(model, turbopackMap, options) {
            var request = createRequest(model, turbopackMap, options ? options.onError : undefined, options ? options.context : undefined, options ? options.identifierPrefix : undefined, options ? options.onPostpone : undefined);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) {
                    abort(request, signal.reason);
                } else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener('abort', listener);
                    };
                    signal.addEventListener('abort', listener);
                }
            }
            var stream = new ReadableStream({
                type: 'bytes',
                start: function(controller) {
                    startWork(request);
                },
                pull: function(controller) {
                    startFlowing(request, controller);
                },
                cancel: function(reason) {}
            }, {
                highWaterMark: 0
            });
            return stream;
        }
        function decodeReply(body, turbopackMap) {
            if (typeof body === 'string') {
                var form = new FormData();
                form.append('0', body);
                body = form;
            }
            var response = createResponse(turbopackMap, '', body);
            var root = getRoot(response);
            close(response);
            return root;
        }
        exports.createClientModuleProxy = createClientModuleProxy;
        exports.decodeAction = decodeAction;
        exports.decodeReply = decodeReply;
        exports.registerClientReference = registerClientReference;
        exports.registerServerReference = registerServerReference;
        exports.renderToReadableStream = renderToReadableStream;
    })();
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-server-dom-turbopack/server.edge.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react-server-dom-turbopack/cjs/react-server-dom-turbopack-server.edge.development.js [app-edge-rsc] (ecmascript)");
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
                            return UAParser;
                        }(__turbopack_require__, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(typeof window === "object" ? window : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();

}.call(this) }),
}]);

//# sourceMappingURL=d6271_next_dist_compiled_84d235._.js.map