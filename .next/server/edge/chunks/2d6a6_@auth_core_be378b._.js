(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/2d6a6_@auth_core_be378b._.js", {

"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
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
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Base error class for all Auth.js errors.
 * It's optimized to be printed in the server logs in a nicely formatted way
 * via the [`logger.error`](https://authjs.dev/reference/core#logger) option.
 */ __turbopack_esm__({
    "AdapterError": ()=>AdapterError,
    "AuthError": ()=>AuthError,
    "AuthorizedCallbackError": ()=>AuthorizedCallbackError,
    "CallbackRouteError": ()=>CallbackRouteError,
    "CredentialsSignin": ()=>CredentialsSignin,
    "EmailSignInError": ()=>EmailSignInError,
    "ErrorPageLoop": ()=>ErrorPageLoop,
    "EventError": ()=>EventError,
    "InvalidCallbackUrl": ()=>InvalidCallbackUrl,
    "InvalidCheck": ()=>InvalidCheck,
    "InvalidEndpoints": ()=>InvalidEndpoints,
    "InvalidProvider": ()=>InvalidProvider,
    "JWTSessionError": ()=>JWTSessionError,
    "MissingAdapter": ()=>MissingAdapter,
    "MissingAdapterMethods": ()=>MissingAdapterMethods,
    "MissingAuthorize": ()=>MissingAuthorize,
    "MissingCSRF": ()=>MissingCSRF,
    "MissingSecret": ()=>MissingSecret,
    "OAuthAccountNotLinked": ()=>OAuthAccountNotLinked,
    "OAuthCallbackError": ()=>OAuthCallbackError,
    "OAuthProfileParseError": ()=>OAuthProfileParseError,
    "OAuthSignInError": ()=>OAuthSignInError,
    "SessionTokenError": ()=>SessionTokenError,
    "SignInError": ()=>SignInError,
    "SignOutError": ()=>SignOutError,
    "UnknownAction": ()=>UnknownAction,
    "UnsupportedStrategy": ()=>UnsupportedStrategy,
    "UntrustedHost": ()=>UntrustedHost,
    "Verification": ()=>Verification
});
class AuthError extends Error {
    constructor(message, errorOptions){
        if (message instanceof Error) {
            super(undefined, {
                cause: {
                    err: message,
                    ...message.cause,
                    ...errorOptions
                }
            });
        } else if (typeof message === "string") {
            if (errorOptions instanceof Error) {
                errorOptions = {
                    err: errorOptions,
                    ...errorOptions.cause
                };
            }
            super(message, errorOptions);
        } else {
            super(undefined, message);
        }
        this.name = this.constructor.name;
        // @ts-expect-error https://github.com/microsoft/TypeScript/issues/3841
        this.type = this.constructor.type ?? "AuthError";
        // @ts-expect-error https://github.com/microsoft/TypeScript/issues/3841
        this.kind = this.constructor.kind ?? "error";
        Error.captureStackTrace?.(this, this.constructor);
        const url = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? " ." : ""}Read more at ${url}`;
    }
}
class SignInError extends AuthError {
}
SignInError.kind = "signIn";
class AdapterError extends AuthError {
}
AdapterError.type = "AdapterError";
class AuthorizedCallbackError extends AuthError {
}
AuthorizedCallbackError.type = "AuthorizedCallbackError";
class CallbackRouteError extends AuthError {
}
CallbackRouteError.type = "CallbackRouteError";
class ErrorPageLoop extends AuthError {
}
ErrorPageLoop.type = "ErrorPageLoop";
class EventError extends AuthError {
}
EventError.type = "EventError";
class InvalidCallbackUrl extends AuthError {
}
InvalidCallbackUrl.type = "InvalidCallbackUrl";
class CredentialsSignin extends SignInError {
}
CredentialsSignin.type = "CredentialsSignin";
class InvalidEndpoints extends AuthError {
}
InvalidEndpoints.type = "InvalidEndpoints";
class InvalidCheck extends AuthError {
}
InvalidCheck.type = "InvalidCheck";
class JWTSessionError extends AuthError {
}
JWTSessionError.type = "JWTSessionError";
class MissingAdapter extends AuthError {
}
MissingAdapter.type = "MissingAdapter";
class MissingAdapterMethods extends AuthError {
}
MissingAdapterMethods.type = "MissingAdapterMethods";
class MissingAuthorize extends AuthError {
}
MissingAuthorize.type = "MissingAuthorize";
class MissingSecret extends AuthError {
}
MissingSecret.type = "MissingSecret";
class OAuthAccountNotLinked extends SignInError {
}
OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
class OAuthCallbackError extends SignInError {
}
OAuthCallbackError.type = "OAuthCallbackError";
class OAuthProfileParseError extends AuthError {
}
OAuthProfileParseError.type = "OAuthProfileParseError";
class SessionTokenError extends AuthError {
}
SessionTokenError.type = "SessionTokenError";
class OAuthSignInError extends SignInError {
}
OAuthSignInError.type = "OAuthSignInError";
class EmailSignInError extends SignInError {
}
EmailSignInError.type = "EmailSignInError";
class SignOutError extends AuthError {
}
SignOutError.type = "SignOutError";
class UnknownAction extends AuthError {
}
UnknownAction.type = "UnknownAction";
class UnsupportedStrategy extends AuthError {
}
UnsupportedStrategy.type = "UnsupportedStrategy";
class InvalidProvider extends AuthError {
}
InvalidProvider.type = "InvalidProvider";
class UntrustedHost extends AuthError {
}
UntrustedHost.type = "UntrustedHost";
class Verification extends AuthError {
}
Verification.type = "Verification";
class MissingCSRF extends SignInError {
}
MissingCSRF.type = "MissingCSRF";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "assertConfig": ()=>assertConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
let warned = false;
function isValidHttpUrl(url, baseUrl) {
    try {
        return /^https?:/.test(new URL(url, url.startsWith("/") ? baseUrl : undefined).protocol);
    } catch  {
        return false;
    }
}
let hasCredentials = false;
let hasEmail = false;
const emailMethods = [
    "createVerificationToken",
    "useVerificationToken",
    "getUserByEmail"
];
const sessionMethods = [
    "createUser",
    "getUser",
    "getUserByEmail",
    "getUserByAccount",
    "updateUser",
    "linkAccount",
    "createSession",
    "getSessionAndUser",
    "updateSession",
    "deleteSession"
];
function assertConfig(request, options) {
    const { url } = request;
    const warnings = [];
    if (!warned && options.debug) warnings.push("debug-enabled");
    if (!options.trustHost) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["UntrustedHost"](`Host must be trusted. URL was: ${request.url}`);
    }
    if (!options.secret) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingSecret"]("Please define a `secret`.");
    }
    const callbackUrlParam = request.query?.callbackUrl;
    if (callbackUrlParam && !isValidHttpUrl(callbackUrlParam, url.origin)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCallbackUrl"](`Invalid callback URL. Received: ${callbackUrlParam}`);
    }
    const { callbackUrl: defaultCallbackUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["defaultCookies"](options.useSecureCookies ?? url.protocol === "https:");
    const callbackUrlCookie = request.cookies?.[options.cookies?.callbackUrl?.name ?? defaultCallbackUrl.name];
    if (callbackUrlCookie && !isValidHttpUrl(callbackUrlCookie, url.origin)) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCallbackUrl"](`Invalid callback URL. Received: ${callbackUrlCookie}`);
    }
    for (const p of options.providers){
        const provider = typeof p === "function" ? p() : p;
        if ((provider.type === "oauth" || provider.type === "oidc") && !(provider.issuer ?? provider.options?.issuer)) {
            const { authorization: a, token: t, userinfo: u } = provider;
            let key;
            if (typeof a !== "string" && !a?.url) key = "authorization";
            else if (typeof t !== "string" && !t?.url) key = "token";
            else if (typeof u !== "string" && !u?.url) key = "userinfo";
            if (key) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidEndpoints"](`Provider "${provider.id}" is missing both \`issuer\` and \`${key}\` endpoint config. At least one of them is required.`);
            }
        }
        if (provider.type === "credentials") hasCredentials = true;
        else if (provider.type === "email") hasEmail = true;
    }
    if (hasCredentials) {
        const dbStrategy = options.session?.strategy === "database";
        const onlyCredentials = !options.providers.some((p)=>(typeof p === "function" ? p() : p).type !== "credentials");
        if (dbStrategy && onlyCredentials) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["UnsupportedStrategy"]("Signing in with credentials only supported if JWT strategy is enabled");
        }
        const credentialsNoAuthorize = options.providers.some((p)=>{
            const provider = typeof p === "function" ? p() : p;
            return provider.type === "credentials" && !provider.authorize;
        });
        if (credentialsNoAuthorize) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingAuthorize"]("Must define an authorize() handler to use credentials authentication provider");
        }
    }
    const { adapter, session } = options;
    if (hasEmail || session?.strategy === "database" || !session?.strategy && adapter) {
        let methods;
        if (hasEmail) {
            if (!adapter) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingAdapter"]("Email login requires an adapter.");
            methods = emailMethods;
        } else {
            if (!adapter) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingAdapter"]("Database session requires an adapter.");
            methods = sessionMethods;
        }
        const missing = methods.filter((m)=>!adapter[m]);
        if (missing.length) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingAdapterMethods"](`Required adapter methods were missing: ${missing.join(", ")}`);
        }
    }
    if (!warned) warned = true;
    return warnings;
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 *
 *
 * This module contains functions and types
 * to encode and decode {@link https://authjs.dev/concepts/session-strategies#jwt JWT}s
 * issued and used by Auth.js.
 *
 * The JWT issued by Auth.js is _encrypted by default_, using the _A256GCM_ algorithm ({@link https://www.rfc-editor.org/rfc/rfc7516 JWE}).
 * It uses the `AUTH_SECRET` environment variable to derive a sufficient encryption key.
 *
 * :::info Note
 * Auth.js JWTs are meant to be used by the same app that issued them.
 * If you need JWT authentication for your third-party API, you should rely on your Identity Provider instead.
 * :::
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/core
 * ```
 *
 * You can then import this submodule from `@auth/core/jwt`.
 *
 * ## Usage
 *
 * :::warning Warning
 * This module *will* be refactored/changed. We do not recommend relying on it right now.
 * :::
 *
 *
 * ## Resources
 *
 * - [What is a JWT session strategy](https://authjs.dev/concepts/session-strategies#jwt)
 * - [RFC7519 - JSON Web Token (JWT)](https://www.rfc-editor.org/rfc/rfc7519)
 *
 * @module jwt
 */ __turbopack_esm__({
    "decode": ()=>decode,
    "encode": ()=>encode,
    "getToken": ()=>getToken
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$panva$2b$hkdf$40$1$2e$1$2e$1$2f$node_modules$2f40$panva$2f$hkdf$2f$dist$2f$web$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@panva+hkdf@1.1.1/node_modules/@panva/hkdf/dist/web/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/browser/index.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/browser/jwt/encrypt.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/browser/jwt/decrypt.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$6$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60; // 30 days
const now = ()=>Date.now() / 1000 | 0;
async function encode(params) {
    const { token = {}, secret, maxAge = DEFAULT_MAX_AGE, salt } = params;
    const encryptionSecret = await getDerivedEncryptionKey(secret, salt);
    // @ts-expect-error `jose` allows any object as payload.
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["EncryptJWT"](token).setProtectedHeader({
        alg: "dir",
        enc: "A256GCM"
    }).setIssuedAt().setExpirationTime(now() + maxAge).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
async function decode(params) {
    const { token, secret, salt } = params;
    if (!token) return null;
    const encryptionSecret = await getDerivedEncryptionKey(secret, salt);
    const { payload } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["jwtDecrypt"](token, encryptionSecret, {
        clockTolerance: 15
    });
    return payload;
}
async function getToken(params) {
    const { secureCookie, cookieName = secureCookie ? "__Secure-auth.session-token" : "auth.session-token", decode: _decode = decode, salt = cookieName, secret, logger = console, raw, req } = params;
    if (!req) throw new Error("Must pass `req` to JWT getToken()");
    if (!secret) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingSecret"]("Must pass `secret` if not set to JWT getToken()");
    const headers = req.headers instanceof Headers ? req.headers : new Headers(req.headers);
    const sessionStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["SessionStore"]({
        name: cookieName,
        options: {
            secure: secureCookie
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$6$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["parse"](headers.get("cookie") ?? ""), logger);
    let token = sessionStore.value;
    const authorizationHeader = headers.get("authorization");
    if (!token && authorizationHeader?.split(" ")[0] === "Bearer") {
        const urlEncodedToken = authorizationHeader.split(" ")[1];
        token = decodeURIComponent(urlEncodedToken);
    }
    if (!token) return null;
    if (raw) return token;
    try {
        return await _decode({
            token,
            secret,
            salt
        });
    } catch  {
        return null;
    }
}
async function getDerivedEncryptionKey(keyMaterial, salt) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$panva$2b$hkdf$40$1$2e$1$2e$1$2f$node_modules$2f40$panva$2f$hkdf$2f$dist$2f$web$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["hkdf"]("sha256", keyMaterial, salt, `Auth.js Generated Encryption Key (${salt})`, 32);
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/callback-url.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Get callback URL based on query param / cookie + validation,
 * and add it to `req.options.callbackUrl`.
 */ __turbopack_esm__({
    "createCallbackUrl": ()=>createCallbackUrl
});
async function createCallbackUrl({ options, paramValue, cookieValue }) {
    const { url, callbacks } = options;
    let callbackUrl = url.origin;
    if (paramValue) {
        // If callbackUrl form field or query parameter is passed try to use it if allowed
        callbackUrl = await callbacks.redirect({
            url: paramValue,
            baseUrl: url.origin
        });
    } else if (cookieValue) {
        // If no callbackUrl specified, try using the value from the cookie if allowed
        callbackUrl = await callbacks.redirect({
            url: cookieValue,
            baseUrl: url.origin
        });
    }
    return {
        callbackUrl,
        // Save callback URL in a cookie so that it can be used for subsequent requests in signin/signout/callback flow
        callbackUrlCookie: callbackUrl !== cookieValue ? callbackUrl : undefined
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createHash": ()=>createHash,
    "randomString": ()=>randomString,
    "toInternalRequest": ()=>toInternalRequest,
    "toRequest": ()=>toRequest,
    "toResponse": ()=>toResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$6$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function getBody(req) {
    if (!("body" in req) || !req.body || req.method !== "POST") return;
    const contentType = req.headers.get("content-type");
    if (contentType?.includes("application/json")) {
        return await req.json();
    } else if (contentType?.includes("application/x-www-form-urlencoded")) {
        const params = new URLSearchParams(await req.text());
        return Object.fromEntries(params);
    }
}
const actions = [
    "providers",
    "session",
    "csrf",
    "signin",
    "signout",
    "callback",
    "verify-request",
    "error"
];
async function toInternalRequest(req) {
    try {
        let originalUrl = new URL(req.url.replace(/\/$/, ""));
        let url = new URL(originalUrl);
        const pathname = url.pathname.replace(/\/$/, "");
        const action = actions.find((a)=>pathname.includes(a));
        if (!action) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["UnknownAction"](`Cannot detect action in pathname (${pathname}).`);
        }
        // Remove anything after the basepath
        const re = new RegExp(`/${action}.*`);
        url = new URL(url.href.replace(re, ""));
        if (req.method !== "GET" && req.method !== "POST") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["UnknownAction"]("Only GET and POST requests are supported.");
        }
        const providerIdOrAction = pathname.split("/").pop();
        let providerId;
        if (providerIdOrAction && !action.includes(providerIdOrAction) && [
            "signin",
            "callback"
        ].includes(action)) {
            providerId = providerIdOrAction;
        }
        return {
            url,
            action,
            providerId,
            method: req.method,
            headers: Object.fromEntries(req.headers),
            body: req.body ? await getBody(req) : undefined,
            cookies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$6$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["parse"](req.headers.get("cookie") ?? "") ?? {},
            error: originalUrl.searchParams.get("error") ?? undefined,
            query: Object.fromEntries(originalUrl.searchParams)
        };
    } catch (e) {
        return e;
    }
}
function toRequest(request) {
    return new Request(request.url, {
        headers: request.headers,
        method: request.method,
        body: request.method === "POST" ? JSON.stringify(request.body ?? {}) : undefined
    });
}
function toResponse(res) {
    const headers = new Headers(res.headers);
    res.cookies?.forEach((cookie)=>{
        const { name, value, options } = cookie;
        const cookieHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cookie$40$0$2e$6$2e$0$2f$node_modules$2f$cookie$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["serialize"](name, value, options);
        if (headers.has("Set-Cookie")) headers.append("Set-Cookie", cookieHeader);
        else headers.set("Set-Cookie", cookieHeader);
    });
    let body = res.body;
    if (headers.get("content-type") === "application/json") body = JSON.stringify(res.body);
    else if (headers.get("content-type") === "application/x-www-form-urlencoded") body = new URLSearchParams(res.body).toString();
    const status = res.redirect ? 302 : res.status ?? 200;
    const response = new Response(body, {
        headers,
        status
    });
    if (res.redirect) response.headers.set("Location", res.redirect);
    return response;
}
async function createHash(message) {
    const data = new TextEncoder().encode(message);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash)).map((b)=>b.toString(16).padStart(2, "0")).join("").toString();
}
function randomString(size) {
    const i2hex = (i)=>("0" + i.toString(16)).slice(-2);
    const r = (a, i)=>a + i2hex(i);
    const bytes = crypto.getRandomValues(new Uint8Array(size));
    return Array.from(bytes).reduce(r, "");
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createCSRFToken": ()=>createCSRFToken,
    "validateCSRF": ()=>validateCSRF
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function createCSRFToken({ options, cookieValue, isPost, bodyValue }) {
    if (cookieValue) {
        const [csrfToken, csrfTokenHash] = cookieValue.split("|");
        const expectedCsrfTokenHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createHash"](`${csrfToken}${options.secret}`);
        if (csrfTokenHash === expectedCsrfTokenHash) {
            // If hash matches then we trust the CSRF token value
            // If this is a POST request and the CSRF Token in the POST request matches
            // the cookie we have already verified is the one we have set, then the token is verified!
            const csrfTokenVerified = isPost && csrfToken === bodyValue;
            return {
                csrfTokenVerified,
                csrfToken
            };
        }
    }
    // New CSRF token
    const csrfToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["randomString"](32);
    const csrfTokenHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createHash"](`${csrfToken}${options.secret}`);
    const cookie = `${csrfToken}|${csrfTokenHash}`;
    return {
        cookie,
        csrfToken
    };
}
function validateCSRF(action, verified) {
    if (verified) return;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["MissingCSRF"](`CSRF token was missing during an action ${action}.`);
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/merge.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Source: https://stackoverflow.com/a/34749873/5364135
/** Simple object check */ __turbopack_esm__({
    "merge": ()=>merge
});
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
function merge(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for(const key in source){
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, {
                    [key]: {}
                });
                merge(target[key], source[key]);
            } else {
                Object.assign(target, {
                    [key]: source[key]
                });
            }
        }
    }
    return merge(target, ...sources);
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/providers.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>parseProviders
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$merge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/merge.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function parseProviders(params) {
    const { url, providerId, options } = params;
    const providers = params.providers.map((p)=>{
        const provider = typeof p === "function" ? p() : p;
        const { options: userOptions, ...defaults } = provider;
        const id = userOptions?.id ?? defaults.id;
        const merged = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$merge$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["merge"](defaults, userOptions, {
            signinUrl: `${url}/signin/${id}`,
            callbackUrl: `${url}/callback/${id}`
        });
        if (provider.type === "oauth" || provider.type === "oidc") {
            merged.redirectProxyUrl ?? (merged.redirectProxyUrl = options.redirectProxyUrl);
            return normalizeOAuth(merged);
        }
        return merged;
    });
    return {
        providers,
        provider: providers.find(({ id })=>id === providerId)
    };
}
// TODO: Also add discovery here, if some endpoints/config are missing.
// We should return both a client and authorization server config.
function normalizeOAuth(c) {
    if (c.issuer) c.wellKnown ?? (c.wellKnown = `${c.issuer}/.well-known/openid-configuration`);
    const authorization = normalizeEndpoint(c.authorization, c.issuer);
    if (authorization && !authorization.url?.searchParams.has("scope")) {
        authorization.url.searchParams.set("scope", "openid profile email");
    }
    const token = normalizeEndpoint(c.token, c.issuer);
    const userinfo = normalizeEndpoint(c.userinfo, c.issuer);
    const checks = c.checks ?? [
        "pkce"
    ];
    if (c.redirectProxyUrl) {
        if (!checks.includes("state")) checks.push("state");
        c.redirectProxyUrl = `${c.redirectProxyUrl}/callback/${c.id}`;
    }
    return {
        ...c,
        authorization,
        token,
        checks,
        userinfo,
        profile: c.profile ?? defaultProfile,
        account: c.account ?? defaultAccount
    };
}
/**
 * Returns basic user profile from the userinfo response/`id_token` claims.
 * @see https://authjs.dev/reference/core/adapters#user
 * @see https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * @see https://openid.net/specs/openid-connect-core-1_0.html#UserInfo
 */ const defaultProfile = (profile)=>{
    const id = profile.sub ?? profile.id;
    if (!id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProfileParseError"]("Missing user id");
    return stripUndefined({
        id: id.toString(),
        name: profile.name ?? profile.nickname ?? profile.preferred_username,
        email: profile.email,
        image: profile.picture
    });
};
/**
 * Returns basic OAuth/OIDC values from the token response.
 * @see https://www.ietf.org/rfc/rfc6749.html#section-5.1
 * @see https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse
 * @see https://authjs.dev/reference/core/adapters#account
 */ const defaultAccount = (account)=>{
    return stripUndefined({
        access_token: account.access_token,
        id_token: account.id_token,
        refresh_token: account.refresh_token,
        expires_at: account.expires_at,
        scope: account.scope,
        token_type: account.token_type,
        session_state: account.session_state
    });
};
function stripUndefined(o) {
    const result = {};
    for (let [k, v] of Object.entries(o))v !== undefined && (result[k] = v);
    return result;
}
function normalizeEndpoint(e, issuer) {
    if (!e && issuer) return;
    if (typeof e === "string") {
        return {
            url: new URL(e)
        };
    }
    // If e.url is undefined, it's because the provider config
    // assumes that we will use the issuer endpoint.
    // The existence of either e.url or provider.issuer is checked in
    // assert.ts. We fallback to "https://authjs.dev" to be able to pass around
    // a valid URL even if the user only provided params.
    // NOTE: This need to be checked when constructing the URL
    // for the authorization, token and userinfo endpoints.
    const url = new URL(e?.url ?? "https://authjs.dev");
    if (e?.params != null) {
        for (let [key, value] of Object.entries(e.params)){
            if (key === "claims") value = JSON.stringify(value);
            url.searchParams.set(key, String(value));
        }
    }
    return {
        url,
        request: e?.request,
        conform: e?.conform
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "logger": ()=>logger,
    "setLogger": ()=>setLogger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const grey = "\x1b[90m";
const reset = "\x1b[0m";
const logger = {
    error (error) {
        const name = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"] ? error.type : error.name;
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
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/init.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "defaultCallbacks": ()=>defaultCallbacks,
    "init": ()=>init
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$callback$2d$url$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/callback-url.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$providers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/providers.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-edge-rsc] (ecmascript)");
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
    const { providers, provider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$providers$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.defaultCookies(authOptions.useSecureCookies ?? url.protocol === "https:"),
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
            encode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.encode,
            decode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.decode,
            ...authOptions.jwt
        },
        // Event messages
        events: eventsErrorHandler(authOptions.events ?? {}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"]),
        adapter: adapterErrorHandler(authOptions.adapter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"]),
        // Callback functions
        callbacks: {
            ...defaultCallbacks,
            ...authOptions.callbacks
        },
        logger: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"],
        callbackUrl: url.origin,
        isOnRedirectProxy
    };
    // Init cookies
    const cookies = [];
    if (csrfDisabled) {
        options.csrfTokenVerified = true;
    } else {
        const { csrfToken, cookie: csrfCookie, csrfTokenVerified } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createCSRFToken"]({
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
    const { callbackUrl, callbackUrlCookie } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$callback$2d$url$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createCallbackUrl"]({
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
                logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["EventError"](e));
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
                const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AdapterError"](e);
                logger.error(error);
                throw error;
            }
        };
        return acc;
    }, {});
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/error.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ErrorPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsx}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsxs}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function ErrorPage(props) {
    const { url, error = "default", theme } = props;
    const signinPageUrl = `${url}/signin`;
    const errors = {
        default: {
            status: 200,
            heading: "Error",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("a", {
                    className: "site",
                    href: url?.origin,
                    children: url?.host
                })
            })
        },
        Configuration: {
            status: 500,
            heading: "Server error",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "There is a problem with the server configuration."
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "Check the server logs for more information."
                    })
                ]
            })
        },
        AccessDenied: {
            status: 403,
            heading: "Access Denied",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "You do not have permission to sign in."
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("a", {
                            className: "button",
                            href: signinPageUrl,
                            children: "Sign in"
                        })
                    })
                ]
            })
        },
        Verification: {
            status: 403,
            heading: "Unable to sign in",
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "The sign in link is no longer valid."
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "It may have been used already or it may have expired."
                    })
                ]
            }),
            signin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("a", {
                className: "button",
                href: signinPageUrl,
                children: "Sign in"
            })
        }
    };
    const { status, heading, message, signin } = errors[error] ?? errors.default;
    return {
        status,
        html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
            className: "error",
            children: [
                theme?.brandColor && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
        :root {
          --brand-color: ${theme?.brandColor}
        }
      `
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                    className: "card",
                    children: [
                        theme?.logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                            src: theme?.logo,
                            alt: "Logo",
                            className: "logo"
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("h1", {
                            children: heading
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("div", {
                            className: "message",
                            children: message
                        }),
                        signin
                    ]
                })
            ]
        })
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signin.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SigninPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsx}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsxs}");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
        className: "signin",
        children: [
            theme?.brandColor && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `:root {--brand-color: ${theme.brandColor}}`
                }
            }),
            theme?.buttonText && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                className: "card",
                children: [
                    error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("div", {
                        className: "error",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                            children: error
                        })
                    }),
                    theme?.logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
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
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                            className: "provider",
                            children: [
                                provider.type === "oauth" || provider.type === "oidc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.signinUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        callbackUrl && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "callbackUrl",
                                            value: callbackUrl
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
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
                                                logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                                                    loading: "lazy",
                                                    height: 24,
                                                    width: 24,
                                                    id: "provider-logo",
                                                    src: logo
                                                }),
                                                logoDark && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                                                    loading: "lazy",
                                                    height: 24,
                                                    width: 24,
                                                    id: "provider-logo-dark",
                                                    src: logoDark
                                                }),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("span", {
                                                    children: [
                                                        "Sign in with ",
                                                        provider.name
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }) : null,
                                (provider.type === "email" || provider.type === "credentials") && i > 0 && providers[i - 1].type !== "email" && providers[i - 1].type !== "credentials" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("hr", {}),
                                provider.type === "email" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.signinUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("label", {
                                            className: "section-header",
                                            htmlFor: `input-email-for-${provider.id}-provider`,
                                            children: "Email"
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            id: `input-email-for-${provider.id}-provider`,
                                            autoFocus: true,
                                            type: "email",
                                            name: "email",
                                            value: email,
                                            placeholder: "email@example.com",
                                            required: true
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
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
                                provider.type === "credentials" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                                    action: provider.callbackUrl,
                                    method: "POST",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                            type: "hidden",
                                            name: "csrfToken",
                                            value: csrfToken
                                        }),
                                        Object.keys(provider.credentials).map((credential)=>{
                                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("label", {
                                                        className: "section-header",
                                                        htmlFor: `input-${credential}-for-${provider.id}-provider`,
                                                        children: provider.credentials[credential].label ?? credential
                                                    }),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                                        name: credential,
                                                        id: `input-${credential}-for-${provider.id}-provider`,
                                                        type: provider.credentials[credential].type ?? "text",
                                                        placeholder: provider.credentials[credential].placeholder ?? "",
                                                        ...provider.credentials[credential]
                                                    })
                                                ]
                                            }, `input-group-${provider.id}`);
                                        }),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("button", {
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
                                (provider.type === "email" || provider.type === "credentials") && i + 1 < providers.length && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("hr", {})
                            ]
                        }, provider.id);
                    })
                ]
            })
        ]
    });
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signout.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SignoutPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsx}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsxs}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function SignoutPage(props) {
    const { url, csrfToken, theme } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
        className: "signout",
        children: [
            theme?.brandColor && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
                }
            }),
            theme?.buttonText && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                className: "card",
                children: [
                    theme?.logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                        src: theme.logo,
                        alt: "Logo",
                        className: "logo"
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("h1", {
                        children: "Signout"
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "Are you sure you want to sign out?"
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("form", {
                        action: `${url}/signout`,
                        method: "POST",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("input", {
                                type: "hidden",
                                name: "csrfToken",
                                value: csrfToken
                            }),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("button", {
                                id: "submitButton",
                                type: "submit",
                                children: "Sign out"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/styles.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Generated by `pnpm css`
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-hover: #0f6ddb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-hover: rgba(236, 236, 236, 0.8);
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-hover: rgba(22, 27, 34, 0.8);
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-hover: rgba(22, 27, 34, 0.8);
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }

  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary));
    background-color: var(--provider-dark-bg, var(--color-background));
  }
    button:hover, a.button:hover {
      background-color: var(--provider-dark-bg-hover, var(--color-background-hover)) !important;
    }
  #provider-logo {
    display: none !important;
  }
  #provider-logo-dark {
    width: 25px;
    display: block !important;
  }
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

h1 {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  color: var(--color-text);
}

p {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

input[type]:focus {
    box-shadow: none;
  }

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button span {
  flex-grow: 1;
}

button,
a.button {
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg);
  font-size: 1.1rem;
  min-height: 62px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  transition: all 0.1s ease-in-out;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover, a.button:hover {
    background-color: var(--provider-bg-hover, var(--color-background-hover));
    cursor: pointer;
  }

button:active, a.button:active {
    cursor: pointer;
  }

button #provider-logo, a.button #provider-logo {
    width: 25px;
    display: block;
  }

button #provider-logo-dark, a.button #provider-logo-dark {
    display: none;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

#submitButton:hover {
    background-color: var(--button-hover-bg, var(--color-info-hover)) !important;
  }

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page > div {
    text-align: center;
  }

.error a.button {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin .provider + .provider {
    margin-top: 1rem;
  }

.logo {
  display: inline-block;
  max-width: 150px;
  margin: 1.25rem 0;
  max-height: 70px;
}

.card {
  background-color: var(--color-background-card);
  border-radius: 2rem;
  padding: 1.25rem 2rem;
}

.card .header {
    color: var(--color-primary);
  }

.section-header {
  color: var(--color-text);
}

@media screen and (min-width: 450px) {
  .card {
    margin: 2rem 0;
    width: 368px;
  }
}
@media screen and (max-width: 450px) {
  .card {
    margin: 1rem 0;
    width: 343px;
  }
}
`;

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/verify-request.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>VerifyRequestPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsx}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js [app-edge-rsc] (ecmascript) {export o as jsxs}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function VerifyRequestPage(props) {
    const { url, theme } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
        className: "verify-request",
        children: [
            theme.brandColor && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsxs$7d$__["jsxs"]("div", {
                className: "card",
                children: [
                    theme.logo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("img", {
                        src: theme.logo,
                        alt: "Logo",
                        className: "logo"
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("h1", {
                        children: "Check your email"
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: "A sign in link has been sent to your email address."
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("p", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2f$jsx$2d$runtime$2f$dist$2f$jsxRuntime$2e$module$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__o__as__jsx$7d$__["jsx"]("a", {
                            className: "site",
                            href: url.origin,
                            children: url.host
                        })
                    })
                ]
            })
        ]
    });
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>renderPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$2d$render$2d$to$2d$string$40$5$2e$2$2e$3_preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2d$render$2d$to$2d$string$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.11.3/node_modules/preact-render-to-string/dist/index.mjs [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/error.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signin$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signin.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/signout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$styles$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/styles.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$verify$2d$request$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/verify-request.js [app-edge-rsc] (ecmascript)");
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
        body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$styles$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]}</style><title>${title}</title></head><body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}"><div class="page">${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$preact$2d$render$2d$to$2d$string$40$5$2e$2$2e$3_preact$40$10$2e$11$2e$3$2f$node_modules$2f$preact$2d$render$2d$to$2d$string$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["renderToString"](html)}</div></body></html>`
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
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signin$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
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
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$signout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
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
                html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$verify$2d$request$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
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
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$error$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
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
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/date.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
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
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/handle-login.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "handleLoginOrRegister": ()=>handleLoginOrRegister
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/date.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function handleLoginOrRegister(sessionToken, _profile, _account, options) {
    // Input validation
    if (!_account?.providerAccountId || !_account.type) throw new Error("Missing or invalid provider account");
    if (![
        "email",
        "oauth",
        "oidc"
    ].includes(_account.type)) throw new Error("Provider not supported");
    const { adapter, jwt, events, session: { strategy: sessionStrategy, generateSessionToken } } = options;
    // If no adapter is configured then we don't have a database and cannot
    // persist data; in this mode we just return a dummy session object.
    if (!adapter) {
        return {
            user: _profile,
            account: _account
        };
    }
    const profile = _profile;
    let account = _account;
    const { createUser, updateUser, getUser, getUserByAccount, getUserByEmail, linkAccount, createSession, getSessionAndUser, deleteSession } = adapter;
    let session = null;
    let user = null;
    let isNewUser = false;
    const useJwtSession = sessionStrategy === "jwt";
    if (sessionToken) {
        if (useJwtSession) {
            try {
                const salt = options.cookies.sessionToken.name;
                session = await jwt.decode({
                    ...jwt,
                    token: sessionToken,
                    salt
                });
                if (session && "sub" in session && session.sub) {
                    user = await getUser(session.sub);
                }
            } catch  {
            // If session can't be verified, treat as no session
            }
        } else {
            const userAndSession = await getSessionAndUser(sessionToken);
            if (userAndSession) {
                session = userAndSession.session;
                user = userAndSession.user;
            }
        }
    }
    if (account.type === "email") {
        // If signing in with an email, check if an account with the same email address exists already
        const userByEmail = await getUserByEmail(profile.email);
        if (userByEmail) {
            // If they are not already signed in as the same user, this flow will
            // sign them out of the current session and sign them in as the new user
            if (user?.id !== userByEmail.id && !useJwtSession && sessionToken) {
                // Delete existing session if they are currently signed in as another user.
                // This will switch user accounts for the session in cases where the user was
                // already logged in with a different account.
                await deleteSession(sessionToken);
            }
            // Update emailVerified property on the user object
            user = await updateUser({
                id: userByEmail.id,
                emailVerified: new Date()
            });
            await events.updateUser?.({
                user
            });
        } else {
            const { id: _, ...newUser } = {
                ...profile,
                emailVerified: new Date()
            };
            // Create user account if there isn't one for the email address already
            user = await createUser(newUser);
            await events.createUser?.({
                user
            });
            isNewUser = true;
        }
        // Create new session
        session = useJwtSession ? {} : await createSession({
            sessionToken: generateSessionToken(),
            userId: user.id,
            expires: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](options.session.maxAge)
        });
        return {
            session,
            user,
            isNewUser
        };
    }
    // If signing in with OAuth account, check to see if the account exists already
    const userByAccount = await getUserByAccount({
        providerAccountId: account.providerAccountId,
        provider: account.provider
    });
    if (userByAccount) {
        if (user) {
            // If the user is already signed in with this account, we don't need to do anything
            if (userByAccount.id === user.id) {
                return {
                    session,
                    user,
                    isNewUser
                };
            }
            // If the user is currently signed in, but the new account they are signing in
            // with is already associated with another user, then we cannot link them
            // and need to return an error.
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OAuthAccountNotLinked"]("The account is already associated with another user", {
                provider: account.provider
            });
        }
        // If there is no active session, but the account being signed in with is already
        // associated with a valid user then create session to sign the user in.
        session = useJwtSession ? {} : await createSession({
            sessionToken: generateSessionToken(),
            userId: userByAccount.id,
            expires: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](options.session.maxAge)
        });
        return {
            session,
            user: userByAccount,
            isNewUser
        };
    } else {
        const { provider: p } = options;
        const { type, provider, providerAccountId, userId, ...tokenSet } = account;
        const defaults = {
            providerAccountId,
            provider,
            type,
            userId
        };
        account = Object.assign(p.account(tokenSet) ?? {}, defaults);
        if (user) {
            // If the user is already signed in and the OAuth account isn't already associated
            // with another user account then we can go ahead and link the accounts safely.
            await linkAccount({
                ...account,
                userId: user.id
            });
            await events.linkAccount?.({
                user,
                account,
                profile
            });
            // As they are already signed in, we don't need to do anything after linking them
            return {
                session,
                user,
                isNewUser
            };
        }
        // If the user is not signed in and it looks like a new OAuth account then we
        // check there also isn't an user account already associated with the same
        // email address as the one in the OAuth profile.
        //
        // This step is often overlooked in OAuth implementations, but covers the following cases:
        //
        // 1. It makes it harder for someone to accidentally create two accounts.
        //    e.g. by signin in with email, then again with an oauth account connected to the same email.
        // 2. It makes it harder to hijack a user account using a 3rd party OAuth account.
        //    e.g. by creating an oauth account then changing the email address associated with it.
        //
        // It's quite common for services to automatically link accounts in this case, but it's
        // better practice to require the user to sign in *then* link accounts to be sure
        // someone is not exploiting a problem with a third party OAuth service.
        //
        // OAuth providers should require email address verification to prevent this, but in
        // practice that is not always the case; this helps protect against that.
        const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
        if (userByEmail) {
            const provider = options.provider;
            if (provider?.allowDangerousEmailAccountLinking) {
                // If you trust the oauth provider to correctly verify email addresses, you can opt-in to
                // account linking even when the user is not signed-in.
                user = userByEmail;
            } else {
                // We end up here when we don't have an account with the same [provider].id *BUT*
                // we do already have an account with the same email address as the one in the
                // OAuth profile the user has just tried to sign in with.
                //
                // We don't want to have two accounts with the same email address, and we don't
                // want to link them in case it's not safe to do so, so instead we prompt the user
                // to sign in via email to verify their identity and then link the accounts.
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OAuthAccountNotLinked"]("Another account already exists with the same e-mail address", {
                    provider: account.provider
                });
            }
        } else {
            // If the current user is not logged in and the profile isn't linked to any user
            // accounts (by email or provider account id)...
            //
            // If no account matching the same [provider].id or .email exists, we can
            // create a new account for the user, link it to the OAuth account and
            // create a new session for them so they are signed in with it.
            const { id: _, ...newUser } = {
                ...profile,
                emailVerified: null
            };
            user = await createUser(newUser);
        }
        await events.createUser?.({
            user
        });
        await linkAccount({
            ...account,
            userId: user.id
        });
        await events.linkAccount?.({
            user,
            account,
            profile
        });
        session = useJwtSession ? {} : await createSession({
            sessionToken: generateSessionToken(),
            userId: user.id,
            expires: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](options.session.maxAge)
        });
        return {
            session,
            user,
            isNewUser: true
        };
    }
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "decodeState": ()=>decodeState,
    "handleState": ()=>handleState,
    "nonce": ()=>nonce,
    "pkce": ()=>pkce,
    "signCookie": ()=>signCookie,
    "state": ()=>state
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/browser/index.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/browser/index.js [app-edge-rsc] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/oauth4webapi@2.4.1/node_modules/oauth4webapi/build/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/jwt.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function signCookie(type, value, maxAge, options, data) {
    const { cookies, logger } = options;
    logger.debug(`CREATE_${type.toUpperCase()}`, {
        value,
        maxAge
    });
    const expires = new Date();
    expires.setTime(expires.getTime() + maxAge * 1000);
    const token = {
        value
    };
    if (type === "state" && data) token.data = data;
    const name = cookies[type].name;
    return {
        name,
        value: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["encode"]({
            ...options.jwt,
            maxAge,
            token,
            salt: name
        }),
        options: {
            ...cookies[type].options,
            expires
        }
    };
}
const PKCE_MAX_AGE = 60 * 15; // 15 minutes in seconds
const pkce = {
    async create (options) {
        const code_verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.generateRandomCodeVerifier();
        const value = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.calculatePKCECodeChallenge(code_verifier);
        const maxAge = PKCE_MAX_AGE;
        const cookie = await signCookie("pkceCodeVerifier", code_verifier, maxAge, options);
        return {
            cookie,
            value
        };
    },
    /**
     * Returns code_verifier if the provider is configured to use PKCE,
     * and clears the container cookie afterwards.
     * An error is thrown if the code_verifier is missing or invalid.
     * @see https://www.rfc-editor.org/rfc/rfc7636
     * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#pkce
     */ async use (cookies, resCookies, options) {
        const { provider } = options;
        if (!provider?.checks?.includes("pkce")) return;
        const codeVerifier = cookies?.[options.cookies.pkceCodeVerifier.name];
        if (!codeVerifier) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("PKCE code_verifier cookie was missing.");
        const value = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["decode"]({
            ...options.jwt,
            token: codeVerifier,
            salt: options.cookies.pkceCodeVerifier.name
        });
        if (!value?.value) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("PKCE code_verifier value could not be parsed.");
        // Clear the pkce code verifier cookie after use
        resCookies.push({
            name: options.cookies.pkceCodeVerifier.name,
            value: "",
            options: {
                ...options.cookies.pkceCodeVerifier.options,
                maxAge: 0
            }
        });
        return value.value;
    }
};
const STATE_MAX_AGE = 60 * 15; // 15 minutes in seconds
function decodeState(value) {
    try {
        const decoder = new TextDecoder();
        return JSON.parse(decoder.decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.base64url.decode(value)));
    } catch  {}
}
const state = {
    async create (options, data) {
        const { provider } = options;
        if (!provider.checks.includes("state")) {
            if (data) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("State data was provided but the provider is not configured to use state.");
            }
            return;
        }
        const encodedState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.base64url.encode(JSON.stringify({
            ...data,
            random: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.generateRandomState()
        }));
        const maxAge = STATE_MAX_AGE;
        const cookie = await signCookie("state", encodedState, maxAge, options, data);
        return {
            cookie,
            value: encodedState
        };
    },
    /**
     * Returns state if the provider is configured to use state,
     * and clears the container cookie afterwards.
     * An error is thrown if the state is missing or invalid.
     * @see https://www.rfc-editor.org/rfc/rfc6749#section-10.12
     * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.1
     */ async use (cookies, resCookies, options, paramRandom) {
        const { provider } = options;
        if (!provider.checks.includes("state")) return;
        const state = cookies?.[options.cookies.state.name];
        if (!state) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("State cookie was missing.");
        // IDEA: Let the user do something with the returned state
        const encodedState = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["decode"]({
            ...options.jwt,
            token: state,
            salt: options.cookies.state.name
        });
        if (!encodedState?.value) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("State (cookie) value could not be parsed.");
        const decodedState = decodeState(encodedState.value);
        if (!decodedState) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("State (encoded) value could not be parsed.");
        if (decodedState.random !== paramRandom) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"](`Random state values did not match. Expected: ${decodedState.random}. Got: ${paramRandom}`);
        // Clear the state cookie after use
        resCookies.push({
            name: options.cookies.state.name,
            value: "",
            options: {
                ...options.cookies.state.options,
                maxAge: 0
            }
        });
        return encodedState.value;
    }
};
const NONCE_MAX_AGE = 60 * 15; // 15 minutes in seconds
const nonce = {
    async create (options) {
        if (!options.provider.checks.includes("nonce")) return;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.generateRandomNonce();
        const maxAge = NONCE_MAX_AGE;
        const cookie = await signCookie("nonce", value, maxAge, options);
        return {
            cookie,
            value
        };
    },
    /**
     * Returns nonce if the provider is configured to use nonce,
     * and clears the container cookie afterwards.
     * An error is thrown if the nonce is missing or invalid.
     * @see https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
     * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#nonce
     */ async use (cookies, resCookies, options) {
        const { provider } = options;
        if (!provider?.checks?.includes("nonce")) return;
        const nonce = cookies?.[options.cookies.nonce.name];
        if (!nonce) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("Nonce cookie was missing.");
        const value = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["decode"]({
            ...options.jwt,
            token: nonce,
            salt: options.cookies.nonce.name
        });
        if (!value?.value) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("Nonce value could not be parsed.");
        // Clear the nonce cookie after use
        resCookies.push({
            name: options.cookies.nonce.name,
            value: "",
            options: {
                ...options.cookies.nonce.options,
                maxAge: 0
            }
        });
        return value.value;
    }
};
function handleState(query, provider, isOnRedirectProxy) {
    let randomState;
    let proxyRedirect;
    if (provider.redirectProxyUrl && !query?.state) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidCheck"]("Missing state in query, but required for redirect proxy");
    }
    const state = decodeState(query?.state);
    randomState = state?.random;
    if (isOnRedirectProxy) {
        if (!state?.origin) return {
            randomState
        };
        proxyRedirect = `${state.origin}?${new URLSearchParams(query)}`;
    }
    return {
        randomState,
        proxyRedirect
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/callback.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "handleOAuth": ()=>handleOAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/oauth4webapi@2.4.1/node_modules/oauth4webapi/build/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
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
        const discoveryResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.discoveryRequest(issuer);
        const discoveredAs = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.processDiscoveryResponse(issuer, discoveryResponse);
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
    const state = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.state.use(cookies, resCookies, options, randomState);
    const codeGrantParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.validateAuthResponse(as, client, new URLSearchParams(query), provider.checks.includes("state") ? state : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.skipStateCheck);
    /** https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2.1 */ if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(codeGrantParams)) {
        const cause = {
            providerId: provider.id,
            ...codeGrantParams
        };
        logger.debug("OAuthCallbackError", cause);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OAuthCallbackError"]("OAuth Provider returned an error", cause);
    }
    const codeVerifier = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.pkce.use(cookies, resCookies, options);
    let redirect_uri = provider.callbackUrl;
    if (!options.isOnRedirectProxy && provider.redirectProxyUrl) {
        redirect_uri = provider.redirectProxyUrl;
    }
    let codeGrantResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.authorizationCodeGrantRequest(as, client, codeGrantParams, redirect_uri, codeVerifier ?? "auth" // TODO: review fallback code verifier
    );
    if (provider.token?.conform) {
        codeGrantResponse = await provider.token.conform(codeGrantResponse.clone()) ?? codeGrantResponse;
    }
    let challenges;
    if (challenges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.parseWwwAuthenticateChallenges(codeGrantResponse)) {
        for (const challenge of challenges){
            console.log("challenge", challenge);
        }
        throw new Error("TODO: Handle www-authenticate challenges as needed");
    }
    let profile = {};
    let tokens;
    if (provider.type === "oidc") {
        const nonce = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.nonce.use(cookies, resCookies, options);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.processAuthorizationCodeOpenIDResponse(as, client, codeGrantResponse, nonce ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.expectNoNonce);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(result)) {
            console.log("error", result);
            throw new Error("TODO: Handle OIDC response body error");
        }
        profile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.getValidatedIdTokenClaims(result);
        tokens = result;
    } else {
        tokens = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.processAuthorizationCodeOAuth2Response(as, client, codeGrantResponse);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.isOAuth2Error(tokens)) {
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
            const userinfoResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.userInfoRequest(as, client, tokens.access_token);
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
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProfileParseError"](e, {
            provider: provider.id
        }));
    }
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// TODO: Make this file smaller
__turbopack_esm__({
    "callback": ()=>callback
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$handle$2d$login$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/handle-login.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$callback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/callback.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
async function callback(request, options, sessionStore, cookies) {
    if (!options.provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidProvider"]("Callback route called without provider");
    const { query, body, method, headers } = request;
    const { provider, adapter, url, callbackUrl, pages, jwt, events, callbacks, session: { strategy: sessionStrategy, maxAge: sessionMaxAge }, logger } = options;
    const useJwtSession = sessionStrategy === "jwt";
    try {
        if (provider.type === "oauth" || provider.type === "oidc") {
            const { proxyRedirect, randomState } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["handleState"](query, provider, options.isOnRedirectProxy);
            if (proxyRedirect) {
                logger.debug("proxy redirect", {
                    proxyRedirect,
                    randomState
                });
                return {
                    redirect: proxyRedirect
                };
            }
            const authorizationResult = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$callback$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["handleOAuth"](query, request.cookies, options, randomState);
            if (authorizationResult.cookies.length) {
                cookies.push(...authorizationResult.cookies);
            }
            logger.debug("authorization result", authorizationResult);
            const { user: userFromProvider, account, profile: OAuthProfile } = authorizationResult;
            // If we don't have a profile object then either something went wrong
            // or the user cancelled signing in. We don't know which, so we just
            // direct the user to the signin page for now. We could do something
            // else in future.
            // TODO: Handle user cancelling signin
            if (!userFromProvider || !account || !OAuthProfile) {
                return {
                    redirect: `${url}/signin`,
                    cookies
                };
            }
            // Check if user is allowed to sign in
            // Attempt to get Profile from OAuth provider details before invoking
            // signIn callback - but if no user object is returned, that is fine
            // (that just means it's a new user signing in for the first time).
            let userByAccount;
            if (adapter) {
                const { getUserByAccount } = adapter;
                userByAccount = await getUserByAccount({
                    providerAccountId: account.providerAccountId,
                    provider: provider.id
                });
            }
            await handleAuthorized({
                user: userByAccount ?? userFromProvider,
                account,
                profile: OAuthProfile
            }, options.callbacks.signIn);
            const { user, session, isNewUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$handle$2d$login$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["handleLoginOrRegister"](sessionStore.value, userFromProvider, account, options);
            if (useJwtSession) {
                const defaultToken = {
                    name: user.name,
                    email: user.email,
                    picture: user.image,
                    sub: user.id?.toString()
                };
                const token = await callbacks.jwt({
                    token: defaultToken,
                    user,
                    account,
                    profile: OAuthProfile,
                    isNewUser,
                    trigger: isNewUser ? "signUp" : "signIn"
                });
                // Clear cookies if token is null
                if (token === null) {
                    cookies.push(...sessionStore.clean());
                } else {
                    const salt = options.cookies.sessionToken.name;
                    // Encode token
                    const newToken = await jwt.encode({
                        ...jwt,
                        token,
                        salt
                    });
                    // Set cookie expiry date
                    const cookieExpires = new Date();
                    cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
                    const sessionCookies = sessionStore.chunk(newToken, {
                        expires: cookieExpires
                    });
                    cookies.push(...sessionCookies);
                }
            } else {
                // Save Session Token in cookie
                cookies.push({
                    name: options.cookies.sessionToken.name,
                    value: session.sessionToken,
                    options: {
                        ...options.cookies.sessionToken.options,
                        expires: session.expires
                    }
                });
            }
            await events.signIn?.({
                user,
                account,
                profile: OAuthProfile,
                isNewUser
            });
            // Handle first logins on new accounts
            // e.g. option to send users to a new account landing page on initial login
            // Note that the callback URL is preserved, so the journey can still be resumed
            if (isNewUser && pages.newUser) {
                return {
                    redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({
                        callbackUrl
                    })}`,
                    cookies
                };
            }
            return {
                redirect: callbackUrl,
                cookies
            };
        } else if (provider.type === "email") {
            const token = query?.token;
            const identifier = query?.email;
            if (!token || !identifier) {
                const e = new TypeError("Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.", {
                    cause: {
                        hasToken: !!token,
                        hasEmail: !!identifier
                    }
                });
                e.name = "Configuration";
                throw e;
            }
            const secret = provider.secret ?? options.secret;
            // @ts-expect-error -- Verified in `assertConfig`.
            const invite = await adapter.useVerificationToken({
                identifier,
                token: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createHash"](`${token}${secret}`)
            });
            const hasInvite = !!invite;
            const expired = invite ? invite.expires.valueOf() < Date.now() : undefined;
            const invalidInvite = !hasInvite || expired;
            if (invalidInvite) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["Verification"]({
                hasInvite,
                expired
            });
            const user = await adapter.getUserByEmail(identifier) ?? {
                id: identifier,
                email: identifier,
                emailVerified: null
            };
            const account = {
                providerAccountId: user.email,
                userId: user.id,
                type: "email",
                provider: provider.id
            };
            await handleAuthorized({
                user,
                account
            }, options.callbacks.signIn);
            // Sign user in
            const { user: loggedInUser, session, isNewUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$handle$2d$login$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["handleLoginOrRegister"](sessionStore.value, user, account, options);
            if (useJwtSession) {
                const defaultToken = {
                    name: loggedInUser.name,
                    email: loggedInUser.email,
                    picture: loggedInUser.image,
                    sub: loggedInUser.id?.toString()
                };
                const token = await callbacks.jwt({
                    token: defaultToken,
                    user: loggedInUser,
                    account,
                    isNewUser,
                    trigger: isNewUser ? "signUp" : "signIn"
                });
                // Clear cookies if token is null
                if (token === null) {
                    cookies.push(...sessionStore.clean());
                } else {
                    const salt = options.cookies.sessionToken.name;
                    // Encode token
                    const newToken = await jwt.encode({
                        ...jwt,
                        token,
                        salt
                    });
                    // Set cookie expiry date
                    const cookieExpires = new Date();
                    cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
                    const sessionCookies = sessionStore.chunk(newToken, {
                        expires: cookieExpires
                    });
                    cookies.push(...sessionCookies);
                }
            } else {
                // Save Session Token in cookie
                cookies.push({
                    name: options.cookies.sessionToken.name,
                    value: session.sessionToken,
                    options: {
                        ...options.cookies.sessionToken.options,
                        expires: session.expires
                    }
                });
            }
            await events.signIn?.({
                user: loggedInUser,
                account,
                isNewUser
            });
            // Handle first logins on new accounts
            // e.g. option to send users to a new account landing page on initial login
            // Note that the callback URL is preserved, so the journey can still be resumed
            if (isNewUser && pages.newUser) {
                return {
                    redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({
                        callbackUrl
                    })}`,
                    cookies
                };
            }
            // Callback URL is already verified at this point, so safe to use if specified
            return {
                redirect: callbackUrl,
                cookies
            };
        } else if (provider.type === "credentials" && method === "POST") {
            const credentials = body ?? {};
            // TODO: Forward the original request as is, instead of reconstructing it
            Object.entries(query ?? {}).forEach(([k, v])=>url.searchParams.set(k, v));
            const user = await provider.authorize(credentials, // prettier-ignore
            new Request(url, {
                headers,
                method,
                body: JSON.stringify(body)
            }));
            if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"]();
            const account = {
                providerAccountId: user.id,
                type: "credentials",
                provider: provider.id
            };
            await handleAuthorized({
                user,
                account,
                credentials
            }, options.callbacks.signIn);
            const defaultToken = {
                name: user.name,
                email: user.email,
                picture: user.image,
                sub: user.id?.toString()
            };
            const token = await callbacks.jwt({
                token: defaultToken,
                user,
                account,
                isNewUser: false,
                trigger: "signIn"
            });
            // Clear cookies if token is null
            if (token === null) {
                cookies.push(...sessionStore.clean());
            } else {
                const salt = options.cookies.sessionToken.name;
                // Encode token
                const newToken = await jwt.encode({
                    ...jwt,
                    token,
                    salt
                });
                // Set cookie expiry date
                const cookieExpires = new Date();
                cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
                const sessionCookies = sessionStore.chunk(newToken, {
                    expires: cookieExpires
                });
                cookies.push(...sessionCookies);
            }
            await events.signIn?.({
                user,
                account
            });
            return {
                redirect: callbackUrl,
                cookies
            };
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["InvalidProvider"](`Callback for provider type (${provider.type}) is not supported`);
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) throw e;
        const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["CallbackRouteError"](e, {
            provider: provider.id
        });
        logger.debug("callback route error details", {
            method,
            query,
            body
        });
        throw error;
    }
}
async function handleAuthorized(params, signIn) {
    try {
        const authorized = await signIn(params);
        if (!authorized) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthorizedCallbackError"]("AccessDenied");
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) throw e;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthorizedCallbackError"](e);
    }
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/session.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "session": ()=>session
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/date.js [app-edge-rsc] (ecmascript)");
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
            const newExpires = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](sessionMaxAge);
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
            logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["JWTSessionError"](e));
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
            const newExpires = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$date$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["fromDate"](sessionMaxAge);
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
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["SessionTokenError"](e));
    }
    return response;
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/authorization-url.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getAuthorizationUrl": ()=>getAuthorizationUrl
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/checks.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/oauth4webapi@2.4.1/node_modules/oauth4webapi/build/index.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function getAuthorizationUrl(query, options) {
    const { logger, provider } = options;
    let url = provider.authorization?.url;
    let as;
    // Falls back to authjs.dev if the user only passed params
    if (!url || url.host === "authjs.dev") {
        // If url is undefined, we assume that issuer is always defined
        // We check this in assert.ts
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const issuer = new URL(provider.issuer);
        const discoveryResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.discoveryRequest(issuer);
        const as = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$oauth4webapi$40$2$2e$4$2e$1$2f$node_modules$2f$oauth4webapi$2f$build$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.processDiscoveryResponse(issuer, discoveryResponse);
        if (!as.authorization_endpoint) {
            throw new TypeError("Authorization server did not provide an authorization endpoint.");
        }
        url = new URL(as.authorization_endpoint);
    }
    const authParams = url.searchParams;
    let redirect_uri = provider.callbackUrl;
    let data;
    if (!options.isOnRedirectProxy && provider.redirectProxyUrl) {
        redirect_uri = provider.redirectProxyUrl;
        data = {
            origin: provider.callbackUrl
        };
        logger.debug("using redirect proxy", {
            redirect_uri,
            data
        });
    }
    const params = Object.assign({
        response_type: "code",
        // clientId can technically be undefined, should we check this in assert.ts or rely on the Authorization Server to do it?
        client_id: provider.clientId,
        redirect_uri,
        // @ts-expect-error TODO:
        ...provider.authorization?.params
    }, Object.fromEntries(provider.authorization?.url.searchParams ?? []), query);
    for(const k in params)authParams.set(k, params[k]);
    const cookies = [];
    const state = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.state.create(options, data);
    if (state) {
        authParams.set("state", state.value);
        cookies.push(state.cookie);
    }
    if (provider.checks?.includes("pkce")) {
        if (as && !as.code_challenge_methods_supported?.includes("S256")) {
            // We assume S256 PKCE support, if the server does not advertise that,
            // a random `nonce` must be used for CSRF protection.
            if (provider.type === "oidc") provider.checks = [
                "nonce"
            ];
        } else {
            const { value, cookie } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.pkce.create(options);
            authParams.set("code_challenge", value);
            authParams.set("code_challenge_method", "S256");
            cookies.push(cookie);
        }
    }
    const nonce = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$checks$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__.nonce.create(options);
    if (nonce) {
        authParams.set("nonce", nonce.value);
        cookies.push(nonce.cookie);
    }
    // TODO: This does not work in normalizeOAuth because authorization endpoint can come from discovery
    // Need to make normalizeOAuth async
    if (provider.type === "oidc" && !url.searchParams.has("scope")) {
        url.searchParams.set("scope", "openid profile email");
    }
    logger.debug("authorization url is ready", {
        url,
        cookies,
        provider
    });
    return {
        redirect: url.toString(),
        cookies
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/send-token.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "sendToken": ()=>sendToken
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function sendToken(request, options) {
    const { body } = request;
    const { provider, url, callbacks, adapter } = options;
    const normalizer = provider.normalizeIdentifier ?? defaultNormalizer;
    const email = normalizer(body?.email);
    const defaultUser = {
        id: email,
        email,
        emailVerified: null
    };
    const user = await adapter.getUserByEmail(email) ?? defaultUser;
    const account = {
        providerAccountId: email,
        userId: user.id,
        type: "email",
        provider: provider.id
    };
    let authorized;
    try {
        const params = {
            user,
            account,
            email: {
                verificationRequest: true
            }
        };
        authorized = await callbacks.signIn(params);
    } catch (e) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthorizedCallbackError"](e);
    }
    if (!authorized) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthorizedCallbackError"]("AccessDenied");
    const { callbackUrl, theme } = options;
    const token = await provider.generateVerificationToken?.() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["randomString"](32);
    const ONE_DAY_IN_SECONDS = 86400;
    const expires = new Date(Date.now() + (provider.maxAge ?? ONE_DAY_IN_SECONDS) * 1000);
    const secret = provider.secret ?? options.secret;
    const sendRequest = provider.sendVerificationRequest({
        identifier: email,
        token,
        expires,
        url: `${url}/callback/${provider.id}?${new URLSearchParams({
            callbackUrl,
            token,
            email
        })}`,
        provider,
        theme,
        request: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["toRequest"](request)
    });
    const createToken = adapter.createVerificationToken?.({
        identifier: email,
        token: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createHash"](`${token}${secret}`),
        expires
    });
    await Promise.all([
        sendRequest,
        createToken
    ]);
    return {
        redirect: `${url}/verify-request?${new URLSearchParams({
            provider: provider.id,
            type: provider.type
        })}`
    };
}
function defaultNormalizer(email) {
    if (!email) throw new Error("Missing email from request body.");
    // Get the first two elements only,
    // separated by `@` from user input.
    let [local, domain] = email.toLowerCase().trim().split("@");
    // The part before "@" can contain a ","
    // but we remove it on the domain part
    domain = domain.split(",")[0];
    return `${local}@${domain}`;
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "signIn": ()=>signIn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$authorization$2d$url$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/authorization-url.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$send$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/send-token.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function signIn(request, cookies, options) {
    const signInUrl = `${options.url}/signin`;
    if (!options.provider) return {
        redirect: signInUrl,
        cookies
    };
    switch(options.provider.type){
        case "oauth":
        case "oidc":
            {
                const { redirect, cookies: authCookies } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$authorization$2d$url$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["getAuthorizationUrl"](request.query, options);
                if (authCookies) cookies.push(...authCookies);
                return {
                    redirect,
                    cookies
                };
            }
        case "email":
            {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$send$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["sendToken"](request, options);
            }
        default:
            return {
                redirect: signInUrl,
                cookies
            };
    }
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signout.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "signOut": ()=>signOut
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
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
        logger.error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["SignOutError"](e));
    }
    cookies.push(...sessionStore.clean());
    return {
        redirect,
        cookies
    };
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;
;
;

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$session$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/session.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "callback": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["callback"],
    "session": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$session$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["session"],
    "signIn": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "signOut": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["signOut"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$session$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/session.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signin$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signin/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$signout$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/signout.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {facade}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "callback": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["callback"],
    "session": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["session"],
    "signIn": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["signIn"],
    "signOut": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["signOut"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/index.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AuthInternal": ()=>AuthInternal,
    "raw": ()=>raw,
    "skipCSRFCheck": ()=>skipCSRFCheck
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/cookie.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$init$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/init.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/index.js [app-edge-rsc] (ecmascript) {facade}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js [app-edge-rsc] (ecmascript)");
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
    const { options, cookies } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$init$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["init"]({
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
    const sessionStore = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$cookie$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["SessionStore"](options.cookies.sessionToken, request.cookies, options.logger);
    if (method === "GET") {
        const render = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            ...options,
            query: request.query,
            cookies
        });
        switch(action){
            case "callback":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.callback(request, options, sessionStore, cookies);
            case "csrf":
                return render.csrf(csrfDisabled, options, cookies);
            case "error":
                return render.error(error);
            case "providers":
                return render.providers(options.providers);
            case "session":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.session(options, sessionStore, cookies);
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.callback(request, options, sessionStore, cookies);
            case "session":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.session(options, sessionStore, cookies, true, request.body?.data);
            case "signin":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.signIn(request, cookies, options);
            case "signout":
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$callback$2f$oauth$2f$csrf$2d$token$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["validateCSRF"](action, csrfTokenVerified);
                return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$actions$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$facade$7d$__.signOut(cookies, sessionStore, options);
            default:
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["UnknownAction"](`Cannot handle action: ${action}`);
}
const skipCSRFCheck = Symbol("skip-csrf-check");
const raw = Symbol("return-type-raw");

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-edge-rsc] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 *
 * :::warning Experimental
 * `@auth/core` is under active development.
 * :::
 *
 * This is the main entry point to the Auth.js library.
 *
 * Based on the {@link https://developer.mozilla.org/en-US/docs/Web/API/Request Request}
 * and {@link https://developer.mozilla.org/en-US/docs/Web/API/Response Response} Web standard APIs.
 * Primarily used to implement [framework](https://authjs.dev/concepts/frameworks)-specific packages,
 * but it can also be used directly.
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/core
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Auth } from "@auth/core"
 *
 * const request = new Request("https://example.com")
 * const response = await Auth(request, {...})
 *
 * console.log(response instanceof Response) // true
 * ```
 *
 * ## Resources
 *
 * - [Getting started](https://authjs.dev/getting-started/introduction)
 * - [Most common use case guides](https://authjs.dev/guides)
 *
 * @module @auth/core
 */ __turbopack_esm__({
    "Auth": ()=>Auth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$assert$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/index.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
async function Auth(request, config) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["setLogger"](config.logger, config.debug);
    const internalRequest = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["toInternalRequest"](request);
    if (internalRequest instanceof Error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(internalRequest);
        return Response.json(`Error: This action with HTTP ${request.method} is not supported.`, {
            status: 400
        });
    }
    const assertionResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$assert$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["assertConfig"](internalRequest, config);
    if (Array.isArray(assertionResult)) {
        assertionResult.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"].warn);
    } else if (assertionResult instanceof Error) {
        // Bail out early if there's an error in the user config
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(assertionResult);
        const htmlPages = [
            "signin",
            "signout",
            "error",
            "verify-request"
        ];
        if (!htmlPages.includes(internalRequest.action) || internalRequest.method !== "GET") {
            return new Response(JSON.stringify({
                message: "There was a problem with the server configuration. Check the server logs for more information.",
                code: assertionResult.name
            }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
        const { pages, theme } = config;
        const authOnErrorPage = pages?.error && internalRequest.url.searchParams.get("callbackUrl")?.startsWith(pages.error);
        if (!pages?.error || authOnErrorPage) {
            if (authOnErrorPage) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["ErrorPageLoop"](`The error page ${pages?.error} should not require authentication`));
            }
            const render = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
                theme
            });
            const page = render.error("Configuration");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["toResponse"](page);
        }
        return Response.redirect(`${pages.error}?error=Configuration`);
    }
    const isRedirect = request.headers?.has("X-Auth-Return-Redirect");
    const isRaw = config.raw === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["raw"];
    let response;
    try {
        const rawResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthInternal"](internalRequest, config);
        if (isRaw) return rawResponse;
        response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["toResponse"](rawResponse);
    } catch (e) {
        const error = e;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["logger"].error(error);
        const isAuthError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"];
        if (isAuthError && isRaw && !isRedirect) throw error;
        // If the CSRF check failed for POST/session, return a 400 status code.
        // We should not redirect to a page as this is an API route
        if (request.method === "POST" && internalRequest.action === "session") return Response.json(null, {
            status: 400
        });
        const type = isAuthError ? error.type : "Configuration";
        const page = isAuthError && error.kind || "error";
        const params = new URLSearchParams({
            error: type
        });
        const path = config.pages?.[page] ?? `${internalRequest.url.pathname}/${page.toLowerCase()}`;
        const url = `${internalRequest.url.origin}${path}?${params}`;
        if (isRedirect) return Response.json({
            url
        });
        return Response.redirect(url);
    }
    const redirect = response.headers.get("Location");
    if (!isRedirect || !redirect) return response;
    return Response.json({
        url: redirect
    }, {
        headers: response.headers
    });
}

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-edge-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$assert$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/assert.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/errors.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$pages$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/pages/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$logger$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/logger.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$lib$2f$utils$2f$web$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/lib/utils/web.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$18$2e$4$2f$node_modules$2f40$auth$2f$core$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/index.js [app-edge-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/@auth+core@0.18.4/node_modules/@auth/core/providers/github.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * <div style={{backgroundColor: "#24292f", display: "flex", justifyContent: "space-between", color: "#fff", padding: 16}}>
 * <span>Built-in <b>GitHub</b> integration.</span>
 * <a href="https://github.com">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/providers/github.svg" height="48" width="48"/>
 * </a>
 * </div>
 *
 * @module providers/github
 */ /**
 * Add GitHub login to your page and make requests to [GitHub APIs](https://docs.github.com/en/rest).
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/auth/callback/github
 * ```
 *
 * #### Configuration
 * ```ts
 * import { Auth } from "@auth/core"
 * import GitHub from "@auth/core/providers/github"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
 * })
 * ```
 *
 * ### Resources
 *
 * - [GitHub - Creating an OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
 * - [GitHub - Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
 * - [GitHub - Configure your GitHub OAuth Apps](https://github.com/settings/developers)
 * - [Learn more about OAuth](https://authjs.dev/concepts/oauth)
 * - [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts)
 *
 * ### Notes
 *
 * By default, Auth.js assumes that the GitHub provider is
 * based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.
 *
 * :::tip
 *
 * The GitHub provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */ __turbopack_esm__({
    "default": ()=>GitHub
});
function GitHub(config) {
    return {
        id: "github",
        name: "GitHub",
        type: "oauth",
        authorization: {
            url: "https://github.com/login/oauth/authorize",
            params: {
                scope: "read:user user:email"
            }
        },
        token: "https://github.com/login/oauth/access_token",
        userinfo: {
            url: "https://api.github.com/user",
            async request ({ tokens, provider }) {
                const profile = await fetch(provider.userinfo?.url, {
                    headers: {
                        Authorization: `Bearer ${tokens.access_token}`,
                        "User-Agent": "authjs"
                    }
                }).then(async (res)=>await res.json());
                if (!profile.email) {
                    // If the user does not have a public email, get another via the GitHub API
                    // See https://docs.github.com/en/rest/users/emails#list-public-email-addresses-for-the-authenticated-user
                    const res = await fetch("https://api.github.com/user/emails", {
                        headers: {
                            Authorization: `Bearer ${tokens.access_token}`,
                            "User-Agent": "authjs"
                        }
                    });
                    if (res.ok) {
                        const emails = await res.json();
                        profile.email = (emails.find((e)=>e.primary) ?? emails[0]).email;
                    }
                }
                return profile;
            }
        },
        profile (profile) {
            return {
                id: profile.id.toString(),
                name: profile.name ?? profile.login,
                email: profile.email,
                image: profile.avatar_url
            };
        },
        style: {
            logo: "/github.svg",
            bg: "#24292f",
            text: "#fff"
        },
        options: config
    };
}

})()),
}]);

//# sourceMappingURL=2d6a6_@auth_core_be378b._.js.map