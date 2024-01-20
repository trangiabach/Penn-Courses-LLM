module.exports = {

"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SessionStore": ()=>SessionStore,
    "defaultCookies": ()=>defaultCookies
});
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SessionStore_instances, _SessionStore_chunks, _SessionStore_option, _SessionStore_logger, _SessionStore_chunk, _SessionStore_clean;
// Uncomment to recalculate the estimated size
// of an empty session cookie
// import { serialize } from "cookie"
// console.log(
//   "Cookie estimated to be ",
//   serialize(`__Secure.authjs.session-token.0`, "", {
//     expires: new Date(),
//     httpOnly: true,
//     maxAge: Number.MAX_SAFE_INTEGER,
//     path: "/",
//     sameSite: "strict",
//     secure: true,
//     domain: "example.com",
//   }).length,
//   " bytes"
// )
const ALLOWED_COOKIE_SIZE = 4096;
// Based on commented out section above
const ESTIMATED_EMPTY_COOKIE_SIZE = 160;
const CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
function defaultCookies(useSecureCookies) {
    const cookiePrefix = useSecureCookies ? "__Secure-" : "";
    return {
        // default cookie options
        sessionToken: {
            name: `${cookiePrefix}authjs.session-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies
            }
        },
        callbackUrl: {
            name: `${cookiePrefix}authjs.callback-url`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies
            }
        },
        csrfToken: {
            // Default to __Host- for CSRF token for additional protection if using useSecureCookies
            // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
            name: `${useSecureCookies ? "__Host-" : ""}authjs.csrf-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies
            }
        },
        pkceCodeVerifier: {
            name: `${cookiePrefix}authjs.pkce.code_verifier`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies,
                maxAge: 60 * 15
            }
        },
        state: {
            name: `${cookiePrefix}authjs.state`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies,
                maxAge: 60 * 15
            }
        },
        nonce: {
            name: `${cookiePrefix}authjs.nonce`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                path: "/",
                secure: useSecureCookies
            }
        }
    };
}
class SessionStore {
    constructor(option, cookies, logger){
        _SessionStore_instances.add(this);
        _SessionStore_chunks.set(this, {});
        _SessionStore_option.set(this, void 0);
        _SessionStore_logger.set(this, void 0);
        __classPrivateFieldSet(this, _SessionStore_logger, logger, "f");
        __classPrivateFieldSet(this, _SessionStore_option, option, "f");
        if (!cookies) return;
        const { name: sessionCookiePrefix } = option;
        for (const [name, value] of Object.entries(cookies)){
            if (!name.startsWith(sessionCookiePrefix) || !value) continue;
            __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
        }
    }
    /**
     * The JWT Session or database Session ID
     * constructed from the cookie chunks.
     */ get value() {
        // Sort the chunks by their keys before joining
        const sortedKeys = Object.keys(__classPrivateFieldGet(this, _SessionStore_chunks, "f")).sort((a, b)=>{
            const aSuffix = parseInt(a.split(".").pop() || "0");
            const bSuffix = parseInt(b.split(".").pop() || "0");
            return aSuffix - bSuffix;
        });
        // Use the sorted keys to join the chunks in the correct order
        return sortedKeys.map((key)=>__classPrivateFieldGet(this, _SessionStore_chunks, "f")[key]).join("");
    }
    /**
     * Given a cookie value, return new cookies, chunked, to fit the allowed cookie size.
     * If the cookie has changed from chunked to unchunked or vice versa,
     * it deletes the old cookies as well.
     */ chunk(value, options) {
        // Assume all cookies should be cleaned by default
        const cookies = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this);
        // Calculate new chunks
        const chunked = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_chunk).call(this, {
            name: __classPrivateFieldGet(this, _SessionStore_option, "f").name,
            value,
            options: {
                ...__classPrivateFieldGet(this, _SessionStore_option, "f").options,
                ...options
            }
        });
        // Update stored chunks / cookies
        for (const chunk of chunked){
            cookies[chunk.name] = chunk;
        }
        return Object.values(cookies);
    }
    /** Returns a list of cookies that should be cleaned. */ clean() {
        return Object.values(__classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this));
    }
}
_SessionStore_chunks = new WeakMap(), _SessionStore_option = new WeakMap(), _SessionStore_logger = new WeakMap(), _SessionStore_instances = new WeakSet(), _SessionStore_chunk = function _SessionStore_chunk(cookie) {
    const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
    if (chunkCount === 1) {
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[cookie.name] = cookie.value;
        return [
            cookie
        ];
    }
    const cookies = [];
    for(let i = 0; i < chunkCount; i++){
        const name = `${cookie.name}.${i}`;
        const value = cookie.value.substr(i * CHUNK_SIZE, CHUNK_SIZE);
        cookies.push({
            ...cookie,
            name,
            value
        });
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
    }
    __classPrivateFieldGet(this, _SessionStore_logger, "f").debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunks: cookies.map((c)=>c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
    });
    return cookies;
}, _SessionStore_clean = function _SessionStore_clean() {
    const cleanedChunks = {};
    for(const name in __classPrivateFieldGet(this, _SessionStore_chunks, "f")){
        delete __classPrivateFieldGet(this, _SessionStore_chunks, "f")?.[name];
        cleanedChunks[name] = {
            name,
            value: "",
            options: {
                ...__classPrivateFieldGet(this, _SessionStore_option, "f").options,
                maxAge: 0
            }
        };
    }
    return cleanedChunks;
};

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/callback-url.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/callback-url.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/merge.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/merge.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/providers.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/providers.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "logger": ()=>logger,
    "setLogger": ()=>setLogger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const grey = "\x1b[90m";
const reset = "\x1b[0m";
const logger = {
    error (error) {
        const name = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"] ? error.type : error.name;
        console.error(`${red}[auth][error]${reset} ${name}: ${error.message}`);
        if (error.cause && typeof error.cause === "object" && "err" in error.cause && error.cause.err instanceof Error) {
            const { err, ...data } = error.cause;
            console.error(`${red}[auth][cause]${reset}:`, err.stack);
            if (data) console.error(`${red}[auth][details]${reset}:`, JSON.stringify(data, null, 2));
        } else if (error.stack) {
            console.error(error.stack.replace(/.*/, "").substring(1));
        }
    },
    warn (code) {
        const url = `https://warnings.authjs.dev#${code}`;
        console.warn(`${yellow}[auth][warn][${code}]${reset}`, `Read more: ${url}`);
    },
    debug (message, metadata) {
        console.log(`${grey}[auth][debug]:${reset} ${message}`, JSON.stringify(metadata, null, 2));
    }
};
function setLogger(newLogger = {}, debug) {
    // Turn off debug logging if `debug` isn't set to `true`
    if (!debug) logger.debug = ()=>{};
    if (newLogger.error) logger.error = newLogger.error;
    if (newLogger.warn) logger.warn = newLogger.warn;
    if (newLogger.debug) logger.debug = newLogger.debug;
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/init.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "defaultCallbacks": ()=>defaultCallbacks,
    "init": ()=>init
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$callback$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/callback-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$providers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/providers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
const defaultCallbacks = {
    signIn () {
        return true;
    },
    redirect ({ url, baseUrl }) {
        if (url.startsWith("/")) return `${baseUrl}${url}`;
        else if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
    },
    session ({ session }) {
        return session;
    },
    jwt ({ token }) {
        return token;
    }
};
async function init({ authOptions, providerId, action, url, cookies: reqCookies, callbackUrl: reqCallbackUrl, csrfToken: reqCsrfToken, csrfDisabled, isPost }) {
    const { providers, provider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$providers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
        providers: authOptions.providers,
        url,
        providerId,
        options: authOptions
    });
    const maxAge = 30 * 24 * 60 * 60; // Sessions expire after 30 days of being idle by default
    let isOnRedirectProxy = false;
    if ((provider?.type === "oauth" || provider?.type === "oidc") && provider.redirectProxyUrl) {
        try {
            isOnRedirectProxy = new URL(provider.redirectProxyUrl).origin === url.origin;
        } catch  {
            throw new TypeError(`redirectProxyUrl must be a valid URL. Received: ${provider.redirectProxyUrl}`);
        }
    }
    // User provided options are overridden by other options,
    // except for the options with special handling above
    const options = {
        debug: false,
        pages: {},
        theme: {
            colorScheme: "auto",
            logo: "",
            brandColor: "",
            buttonText: ""
        },
        // Custom options override defaults
        ...authOptions,
        // These computed settings can have values in userOptions but we override them
        // and are request-specific.
        url,
        action,
        // @ts-expect-errors
        provider,
        cookies: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.defaultCookies(authOptions.useSecureCookies ?? url.protocol === "https:"),
            // Allow user cookie options to override any cookie settings above
            ...authOptions.cookies
        },
        providers,
        // Session options
        session: {
            // If no adapter specified, force use of JSON Web Tokens (stateless)
            strategy: authOptions.adapter ? "database" : "jwt",
            maxAge,
            updateAge: 24 * 60 * 60,
            generateSessionToken: ()=>crypto.randomUUID(),
            ...authOptions.session
        },
        // JWT options
        jwt: {
            // Asserted in assert.ts
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            secret: authOptions.secret,
            maxAge: authOptions.session?.maxAge ?? maxAge,
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.encode,
            decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.decode,
            ...authOptions.jwt
        },
        // Event messages
        events: eventsErrorHandler(authOptions.events ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"]),
        adapter: adapterErrorHandler(authOptions.adapter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"]),
        // Callback functions
        callbacks: {
            ...defaultCallbacks,
            ...authOptions.callbacks
        },
        logger: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logger"],
        callbackUrl: url.origin,
        isOnRedirectProxy
    };
    // Init cookies
    const cookies = [];
    if (csrfDisabled) {
        options.csrfTokenVerified = true;
    } else {
        const { csrfToken, cookie: csrfCookie, csrfTokenVerified } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCSRFToken"]({
            options,
            cookieValue: reqCookies?.[options.cookies.csrfToken.name],
            isPost,
            bodyValue: reqCsrfToken
        });
        options.csrfToken = csrfToken;
        options.csrfTokenVerified = csrfTokenVerified;
        if (csrfCookie) {
            cookies.push({
                name: options.cookies.csrfToken.name,
                value: csrfCookie,
                options: options.cookies.csrfToken.options
            });
        }
    }
    const { callbackUrl, callbackUrlCookie } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$callback$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCallbackUrl"]({
        options,
        cookieValue: reqCookies?.[options.cookies.callbackUrl.name],
        paramValue: reqCallbackUrl
    });
    options.callbackUrl = callbackUrl;
    if (callbackUrlCookie) {
        cookies.push({
            name: options.cookies.callbackUrl.name,
            value: callbackUrlCookie,
            options: options.cookies.callbackUrl.options
        });
    }
    return {
        options,
        cookies
    };
}
/** Wraps an object of methods and adds error handling. */ function eventsErrorHandler(methods, logger) {
    return Object.keys(methods).reduce((acc, name)=>{
        acc[name] = async (...args)=>{
            try {
                const method = methods[name];
                return await method(...args);
            } catch (e) {
                logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventError"](e));
            }
        };
        return acc;
    }, {});
}
/** Handles adapter induced errors. */ function adapterErrorHandler(adapter, logger) {
    if (!adapter) return;
    return Object.keys(adapter).reduce((acc, name)=>{
        acc[name] = async (...args)=>{
            try {
                logger.debug(`adapter_${name}`, {
                    args
                });
                const method = adapter[name];
                return await method(...args);
            } catch (e) {
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdapterError"](e);
                logger.error(error);
                throw error;
            }
        };
        return acc;
    }, {});
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/error.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/error.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signin.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SigninPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs [app-rsc] (ecmascript) {export o as jsx}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs [app-rsc] (ecmascript) {export o as jsxs}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const signinErrors = {
    default: "Unable to sign in.",
    Signin: "Try signing in with a different account.",
    OAuthSignin: "Try signing in with a different account.",
    OAuthCallbackError: "Try signing in with a different account.",
    OAuthCreateAccount: "Try signing in with a different account.",
    EmailCreateAccount: "Try signing in with a different account.",
    Callback: "Try signing in with a different account.",
    OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
    EmailSignin: "The e-mail could not be sent.",
    CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
    SessionRequired: "Please sign in to access this page."
};
function hexToRgba(hex, alpha = 1) {
    if (!hex) {
        return;
    }
    // Remove the "#" character if it's included
    hex = hex.replace(/^#/, "");
    // Expand 3-digit hex codes to their 6-digit equivalents
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    // Parse the hex value to separate R, G, and B components
    const bigint = parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    // Ensure the alpha value is within the valid range [0, 1]
    alpha = Math.min(Math.max(alpha, 0), 1);
    // Construct the RGBA string
    const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return rgba;
}
function SigninPage(props) {
    const { csrfToken, providers = [], callbackUrl, theme, email, error: errorType } = props;
    if (typeof document !== "undefined" && theme?.brandColor) {
        document.documentElement.style.setProperty("--brand-color", theme.brandColor);
    }
    if (typeof document !== "undefined" && theme?.buttonText) {
        document.documentElement.style.setProperty("--button-text-color", theme.buttonText);
    }
    const error = errorType && (signinErrors[errorType] ?? signinErrors.default);
    const providerLogoPath = "https://authjs.dev/img/providers";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
        className: "signin",
        children: [
            theme?.brandColor && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `:root {--brand-color: ${theme.brandColor}}`
                }
            }),
            theme?.buttonText && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                className: "card",
                children: [
                    error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("div", {
                        className: "error",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                            children: error
                        })
                    }),
                    theme?.logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                        src: theme.logo,
                        alt: "Logo",
                        className: "logo"
                    }),
                    providers.map((provider, i)=>{
                        let bg, text, logo, logoDark, bgDark, textDark;
                        if (provider.type === "oauth" || provider.type === "oidc") {
                            ;
                            ({ bg = "", text = "", logo = "", bgDark = bg, textDark = text, logoDark = "" } = provider.style ?? {});
                            logo = logo.startsWith("/") ? providerLogoPath + logo : logo;
                            logoDark = logoDark.startsWith("/") ? providerLogoPath + logoDark : logoDark || logo;
                            logoDark || (logoDark = logo);
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                            className: "provider",
                            children: [
                                provider.type === "oauth" || provider.type === "oidc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.signinUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        callbackUrl && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "callbackUrl",
                                            value: callbackUrl
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
                                            type: "submit",
                                            className: "button",
                                            style: {
                                                "--provider-bg": bg,
                                                "--provider-dark-bg": bgDark,
                                                "--provider-color": text,
                                                "--provider-dark-color": textDark,
                                                "--provider-bg-hover": hexToRgba(bg, 0.8),
                                                "--provider-dark-bg-hover": hexToRgba(bgDark, 0.8)
                                            },
                                            tabIndex: 0,
                                            children: [
                                                logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                                                    loading: "lazy",
                                                    height: 24,
                                                    width: 24,
                                                    id: "provider-logo",
                                                    src: logo
                                                }),
                                                logoDark && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                                                    loading: "lazy",
                                                    height: 24,
                                                    width: 24,
                                                    id: "provider-logo-dark",
                                                    src: logoDark
                                                }),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("span", {
                                                    children: [
                                                        "Sign in with ",
                                                        provider.name
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }) : null,
                                (provider.type === "email" || provider.type === "credentials") && i > 0 && providers[i - 1].type !== "email" && providers[i - 1].type !== "credentials" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("hr", {}),
                                provider.type === "email" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.signinUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("label", {
                                            className: "section-header",
                                            htmlFor: `input-email-for-${provider.id}-provider`,
                                            children: "Email"
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            id: `input-email-for-${provider.id}-provider`,
                                            autoFocus: true,
                                            type: "email",
                                            name: "email",
                                            value: email,
                                            placeholder: "email@example.com",
                                            required: true
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
                                            id: "submitButton",
                                            type: "submit",
                                            tabIndex: 0,
                                            children: [
                                                "Sign in with ",
                                                provider.name
                                            ]
                                        })
                                    ]
                                }),
                                provider.type === "credentials" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.callbackUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        Object.keys(provider.credentials).map((credential)=>{
                                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("label", {
                                                        className: "section-header",
                                                        htmlFor: `input-${credential}-for-${provider.id}-provider`,
                                                        children: provider.credentials[credential].label ?? credential
                                                    }),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                                        name: credential,
                                                        id: `input-${credential}-for-${provider.id}-provider`,
                                                        type: provider.credentials[credential].type ?? "text",
                                                        placeholder: provider.credentials[credential].placeholder ?? "",
                                                        ...provider.credentials[credential]
                                                    })
                                                ]
                                            }, `input-group-${provider.id}`);
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
                                            id: "submitButton",
                                            type: "submit",
                                            tabIndex: 0,
                                            children: [
                                                "Sign in with ",
                                                provider.name
                                            ]
                                        })
                                    ]
                                }),
                                (provider.type === "email" || provider.type === "credentials") && i + 1 < providers.length && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("hr", {})
                            ]
                        }, provider.id);
                    })
                ]
            })
        ]
    });
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signout.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signout.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/styles.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/styles.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/verify-request.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/verify-request.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>renderPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$2d$render$2d$to$2d$string$40$5$2e$2$2e$3_preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2d$render$2d$to$2d$string$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.11.3/node_modules/preact-render-to-string/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/styles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$verify$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/verify-request.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function send({ html, title, status, cookies, theme }) {
    return {
        cookies,
        status,
        headers: {
            "Content-Type": "text/html"
        },
        body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}</style><title>${title}</title></head><body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}"><div class="page">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$2d$render$2d$to$2d$string$40$5$2e$2$2e$3_preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2d$render$2d$to$2d$string$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToString"](html)}</div></body></html>`
    };
}
function renderPage(params) {
    const { url, theme, query, cookies, pages } = params;
    return {
        csrf (skip, options, cookies) {
            if (!skip) {
                return {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        csrfToken: options.csrfToken
                    },
                    cookies
                };
            }
            options.logger.warn("csrf-disabled");
            cookies.push({
                name: options.cookies.csrfToken.name,
                value: "",
                options: {
                    ...options.cookies.csrfToken.options,
                    maxAge: 0
                }
            });
            return {
                status: 404,
                cookies
            };
        },
        providers (providers) {
            return {
                headers: {
                    "Content-Type": "application/json"
                },
                body: providers.reduce((acc, { id, name, type, signinUrl, callbackUrl })=>{
                    acc[id] = {
                        id,
                        name,
                        type,
                        signinUrl,
                        callbackUrl
                    };
                    return acc;
                }, {})
            };
        },
        signin (error) {
            if (pages?.signIn) {
                let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}${new URLSearchParams({
                    callbackUrl: params.callbackUrl ?? "/"
                })}`;
                if (error) signinUrl = `${signinUrl}&${new URLSearchParams({
                    error
                })}`;
                return {
                    redirect: signinUrl,
                    cookies
                };
            }
            return send({
                cookies,
                theme,
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
                    csrfToken: params.csrfToken,
                    // We only want to render providers
                    providers: params.providers?.filter((provider)=>// Always render oauth and email type providers
                        [
                            "email",
                            "oauth",
                            "oidc"
                        ].includes(provider.type) || provider.type === "credentials" && provider.credentials || // Don't render other provider types
                        false),
                    callbackUrl: params.callbackUrl,
                    theme: params.theme,
                    error,
                    ...query
                }),
                title: "Sign In"
            });
        },
        signout () {
            if (pages?.signOut) return {
                redirect: pages.signOut,
                cookies
            };
            return send({
                cookies,
                theme,
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
                    csrfToken: params.csrfToken,
                    url,
                    theme
                }),
                title: "Sign Out"
            });
        },
        verifyRequest (props) {
            if (pages?.verifyRequest) return {
                redirect: pages.verifyRequest,
                cookies
            };
            return send({
                cookies,
                theme,
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$verify$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
                    url,
                    theme,
                    ...props
                }),
                title: "Verify Request"
            });
        },
        error (error) {
            if (pages?.error) {
                return {
                    redirect: `${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error}`,
                    cookies
                };
            }
            return send({
                cookies,
                theme,
                // @ts-expect-error fix error type
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
                    url,
                    theme,
                    error
                }),
                title: "Error"
            });
        }
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/date.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Takes a number in seconds and returns the date in the future.
 * Optionally takes a second date parameter. In that case
 * the date in the future will be calculated from that date instead of now.
 */ __turbopack_esm__({
    "fromDate": ()=>fromDate
});
function fromDate(time, date = Date.now()) {
    return new Date(date + time * 1000);
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/handle-login.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/handle-login.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/callback.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "handleOAuth": ()=>handleOAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/oauth4webapi@2.4.1/node_modules/oauth4webapi/build/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function handleOAuth(query, cookies, options, randomState) {
    const { logger, provider } = options;
    let as;
    const { token, userinfo } = provider;
    // Falls back to authjs.dev if the user only passed params
    if ((!token?.url || token.url.host === "authjs.dev") && (!userinfo?.url || userinfo.url.host === "authjs.dev")) {
        // We assume that issuer is always defined as this has been asserted earlier
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const issuer = new URL(provider.issuer);
        const discoveryResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.discoveryRequest(issuer);
        const discoveredAs = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.processDiscoveryResponse(issuer, discoveryResponse);
        if (!discoveredAs.token_endpoint) throw new TypeError("TODO: Authorization server did not provide a token endpoint.");
        if (!discoveredAs.userinfo_endpoint) throw new TypeError("TODO: Authorization server did not provide a userinfo endpoint.");
        as = discoveredAs;
    } else {
        as = {
            issuer: provider.issuer ?? "https://authjs.dev",
            token_endpoint: token?.url.toString(),
            userinfo_endpoint: userinfo?.url.toString()
        };
    }
    const client = {
        client_id: provider.clientId,
        client_secret: provider.clientSecret,
        ...provider.client
    };
    const resCookies = [];
    const state = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.state.use(cookies, resCookies, options, randomState);
    const codeGrantParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.validateAuthResponse(as, client, new URLSearchParams(query), provider.checks.includes("state") ? state : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.skipStateCheck);
    /** https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2.1 */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(codeGrantParams)) {
        const cause = {
            providerId: provider.id,
            ...codeGrantParams
        };
        logger.debug("OAuthCallbackError", cause);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthCallbackError"]("OAuth Provider returned an error", cause);
    }
    const codeVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.pkce.use(cookies, resCookies, options);
    let redirect_uri = provider.callbackUrl;
    if (!options.isOnRedirectProxy && provider.redirectProxyUrl) {
        redirect_uri = provider.redirectProxyUrl;
    }
    let codeGrantResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.authorizationCodeGrantRequest(as, client, codeGrantParams, redirect_uri, codeVerifier ?? "auth" // TODO: review fallback code verifier
    );
    if (provider.token?.conform) {
        codeGrantResponse = await provider.token.conform(codeGrantResponse.clone()) ?? codeGrantResponse;
    }
    let challenges;
    if (challenges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parseWwwAuthenticateChallenges(codeGrantResponse)) {
        for (const challenge of challenges){
            console.log("challenge", challenge);
        }
        throw new Error("TODO: Handle www-authenticate challenges as needed");
    }
    let profile = {};
    let tokens;
    if (provider.type === "oidc") {
        const nonce = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.nonce.use(cookies, resCookies, options);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.processAuthorizationCodeOpenIDResponse(as, client, codeGrantResponse, nonce ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.expectNoNonce);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(result)) {
            console.log("error", result);
            throw new Error("TODO: Handle OIDC response body error");
        }
        profile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.getValidatedIdTokenClaims(result);
        tokens = result;
    } else {
        tokens = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.processAuthorizationCodeOAuth2Response(as, client, codeGrantResponse);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(tokens)) {
            console.log("error", tokens);
            throw new Error("TODO: Handle OAuth 2.0 response body error");
        }
        if (userinfo?.request) {
            const _profile = await userinfo.request({
                tokens,
                provider
            });
            if (_profile instanceof Object) profile = _profile;
        } else if (userinfo?.url) {
            const userinfoResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.userInfoRequest(as, client, tokens.access_token);
            profile = await userinfoResponse.json();
        } else {
            throw new TypeError("No userinfo endpoint configured");
        }
    }
    if (tokens.expires_in) {
        tokens.expires_at = Math.floor(Date.now() / 1000) + Number(tokens.expires_in);
    }
    const profileResult = await getUserAndAccount(profile, provider, tokens, logger);
    return {
        ...profileResult,
        profile,
        cookies: resCookies
    };
}
/** Returns the user and account that is going to be created in the database. */ async function getUserAndAccount(OAuthProfile, provider, tokens, logger) {
    try {
        const user = await provider.profile(OAuthProfile, tokens);
        user.email = user.email?.toLowerCase();
        if (!user.id) {
            throw new TypeError(`User id is missing in ${provider.name} OAuth profile response`);
        }
        return {
            user,
            account: {
                ...tokens,
                provider: provider.id,
                type: provider.type,
                providerAccountId: user.id.toString()
            }
        };
    } catch (e) {
        // If we didn't get a response either there was a problem with the provider
        // response *or* the user cancelled the action with the provider.
        //
        // Unfortunately, we can't tell which - at least not in a way that works for
        // all providers, so we return an empty object; the user should then be
        // redirected back to the sign up page. We log the error to help developers
        // who might be trying to debug this when configuring a new provider.
        logger.debug("getProfile error details", OAuthProfile);
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProfileParseError"](e, {
            provider: provider.id
        }));
    }
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/session.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "session": ()=>session
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/date.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function session(options, sessionStore, cookies, isUpdate, newSession) {
    const { adapter, jwt, events, callbacks, logger, session: { strategy: sessionStrategy, maxAge: sessionMaxAge } } = options;
    const response = {
        body: null,
        headers: {
            "Content-Type": "application/json"
        },
        cookies
    };
    const sessionToken = sessionStore.value;
    if (!sessionToken) return response;
    if (sessionStrategy === "jwt") {
        try {
            const salt = options.cookies.sessionToken.name;
            const payload = await jwt.decode({
                ...jwt,
                token: sessionToken,
                salt
            });
            if (!payload) throw new Error("Invalid JWT");
            // @ts-expect-error
            const token = await callbacks.jwt({
                token: payload,
                ...isUpdate && {
                    trigger: "update"
                },
                session: newSession
            });
            const newExpires = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](sessionMaxAge);
            if (token !== null) {
                // By default, only exposes a limited subset of information to the client
                // as needed for presentation purposes (e.g. "you are logged in as...").
                const session = {
                    user: {
                        name: token.name,
                        email: token.email,
                        image: token.picture
                    },
                    expires: newExpires.toISOString()
                };
                // @ts-expect-error
                const newSession = await callbacks.session({
                    session,
                    token
                });
                // Return session payload as response
                response.body = newSession;
                // Refresh JWT expiry by re-signing it, with an updated expiry date
                const newToken = await jwt.encode({
                    ...jwt,
                    token,
                    salt
                });
                // Set cookie, to also update expiry date on cookie
                const sessionCookies = sessionStore.chunk(newToken, {
                    expires: newExpires
                });
                response.cookies?.push(...sessionCookies);
                await events.session?.({
                    session: newSession,
                    token
                });
            } else {
                response.cookies?.push(...sessionStore.clean());
            }
        } catch (e) {
            logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTSessionError"](e));
            // If the JWT is not verifiable remove the broken session cookie(s).
            response.cookies?.push(...sessionStore.clean());
        }
        return response;
    }
    // Retrieve session from database
    try {
        const { getSessionAndUser, deleteSession, updateSession } = adapter;
        let userAndSession = await getSessionAndUser(sessionToken);
        // If session has expired, clean up the database
        if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
            await deleteSession(sessionToken);
            userAndSession = null;
        }
        if (userAndSession) {
            const { user, session } = userAndSession;
            const sessionUpdateAge = options.session.updateAge;
            // Calculate last updated date to throttle write updates to database
            // Formula: ({expiry date} - sessionMaxAge) + sessionUpdateAge
            //     e.g. ({expiry date} - 30 days) + 1 hour
            const sessionIsDueToBeUpdatedDate = session.expires.valueOf() - sessionMaxAge * 1000 + sessionUpdateAge * 1000;
            const newExpires = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](sessionMaxAge);
            // Trigger update of session expiry date and write to database, only
            // if the session was last updated more than {sessionUpdateAge} ago
            if (sessionIsDueToBeUpdatedDate <= Date.now()) {
                await updateSession({
                    sessionToken: sessionToken,
                    expires: newExpires
                });
            }
            // Pass Session through to the session callback
            const sessionPayload = await callbacks.session({
                // By default, only exposes a limited subset of information to the client
                // as needed for presentation purposes (e.g. "you are logged in as...").
                session: {
                    // @ts-expect-error missing `id`.
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image
                    },
                    expires: session.expires.toISOString()
                },
                user,
                newSession,
                ...isUpdate ? {
                    trigger: "update"
                } : {}
            });
            // Return session payload as response
            response.body = sessionPayload;
            // Set cookie again to update expiry
            response.cookies?.push({
                name: options.cookies.sessionToken.name,
                value: sessionToken,
                options: {
                    ...options.cookies.sessionToken.options,
                    expires: newExpires
                }
            });
            // @ts-expect-error
            await events.session?.({
                session: sessionPayload
            });
        } else if (sessionToken) {
            // If `sessionToken` was found set but it's not valid for a session then
            // remove the sessionToken cookie from browser.
            response.cookies?.push(...sessionStore.clean());
        }
    } catch (e) {
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionTokenError"](e));
    }
    return response;
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/authorization-url.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/authorization-url.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/send-token.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/send-token.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signout.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "signOut": ()=>signOut
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
async function signOut(cookies, sessionStore, options) {
    const { jwt, events, callbackUrl: redirect, logger, session } = options;
    const sessionToken = sessionStore.value;
    if (!sessionToken) return {
        redirect,
        cookies
    };
    try {
        if (session.strategy === "jwt") {
            const salt = options.cookies.sessionToken.name;
            const token = await jwt.decode({
                ...jwt,
                token: sessionToken,
                salt
            });
            await events.signOut?.({
                token
            });
        } else {
            const session = await options.adapter?.deleteSession(sessionToken);
            await events.signOut?.({
                session
            });
        }
    } catch (e) {
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignOutError"](e));
    }
    cookies.push(...sessionStore.clean());
    return {
        redirect,
        cookies
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {locals}": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
(()=>{
    const e = new Error("Cannot find module './callback/index.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './session.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './signin/index.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './signout.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "callback": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callback"],
    "session": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["session"],
    "signIn": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "signOut": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$session$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/session.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {facade}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "callback": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["callback"],
    "session": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["session"],
    "signIn": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["signIn"],
    "signOut": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["signOut"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/index.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AuthInternal": ()=>AuthInternal,
    "raw": ()=>raw,
    "skipCSRFCheck": ()=>skipCSRFCheck
});
(()=>{
    const e = new Error("Cannot find module '../errors.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/init.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-rsc] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
async function AuthInternal(request, authOptions) {
    const { action, providerId, error, method } = request;
    const csrfDisabled = authOptions.skipCSRFCheck === skipCSRFCheck;
    const { options, cookies } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["init"]({
        authOptions,
        action,
        providerId,
        url: request.url,
        callbackUrl: request.body?.callbackUrl ?? request.query?.callbackUrl,
        csrfToken: request.body?.csrfToken,
        cookies: request.cookies,
        isPost: method === "POST",
        csrfDisabled
    });
    const sessionStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SessionStore"](options.cookies.sessionToken, request.cookies, options.logger);
    if (method === "GET") {
        const render = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            ...options,
            query: request.query,
            cookies
        });
        switch(action){
            case "callback":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.callback(request, options, sessionStore, cookies);
            case "csrf":
                return render.csrf(csrfDisabled, options, cookies);
            case "error":
                return render.error(error);
            case "providers":
                return render.providers(options.providers);
            case "session":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.session(options, sessionStore, cookies);
            case "signin":
                return render.signin(error);
            case "signout":
                return render.signout();
            case "verify-request":
                return render.verifyRequest();
            default:
        }
    } else {
        const { csrfTokenVerified } = options;
        switch(action){
            case "callback":
                if (options.provider.type === "credentials") // Verified CSRF Token required for credentials providers only
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.callback(request, options, sessionStore, cookies);
            case "session":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.session(options, sessionStore, cookies, true, request.body?.data);
            case "signin":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.signIn(request, cookies, options);
            case "signout":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.signOut(cookies, sessionStore, options);
            default:
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UnknownAction"](`Cannot handle action: ${action}`);
}
const skipCSRFCheck = Symbol("skip-csrf-check");
const raw = Symbol("return-type-raw");

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-rsc] (ecmascript) {locals}": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$assert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/providers/github.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/providers/github.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),

};

//# sourceMappingURL=2d6a6_@auth_core_3bbf10._.js.map