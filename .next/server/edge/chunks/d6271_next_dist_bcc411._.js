(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/d6271_next_dist_bcc411._.js", {

"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/context.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    withRequest: null,
    getTestReqInfo: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    withRequest: function() {
        return withRequest;
    },
    getTestReqInfo: function() {
        return getTestReqInfo;
    }
});
const _nodeasync_hooks = __turbopack_external_require__("node:async_hooks");
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, "next-test-proxy-port");
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, "next-test-data") || "";
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/fetch.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/buffer/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/buffer/index.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    reader: null,
    handleFetch: null,
    interceptFetch: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    reader: function() {
        return reader;
    },
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    }
});
const _context = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/context.js [app-edge-rsc] (ecmascript)");
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? "").split("\n");
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes("/next/dist/"));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace("webpack-internal:///(rsc)/", "").trim());
    return stack.join("    ");
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: "fetch",
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    "next-test-stack",
                    getTestStack()
                ]
            ],
            body: body ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["Buffer"].from(await request.arrayBuffer()).toString("base64") : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["Buffer"].from(body, "base64") : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        throw new Error(`No test info for ${request.method} ${request.url}`);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: "POST",
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case "continue":
            return originalFetch(request);
        case "abort":
        case "unhandled":
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    global.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        global.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/server-edge.js [app-edge-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    interceptTestApis: null,
    wrapRequestHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/context.js [app-edge-rsc] (ecmascript)");
const _fetch = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/experimental/testmode/fetch.js [app-edge-rsc] (ecmascript)");
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(global.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/module-proxy.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$router$2d$context$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$router$2d$context$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__["default"]);

})()),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/module-proxy.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$hooks$2d$client$2d$context$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$hooks$2d$client$2d$context$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__["default"]);

})()),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js (client proxy)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "$$typeof": ()=>$$typeof,
    "__esModule": ()=>__esModule,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/webpack/loaders/next-flight-loader/module-proxy.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const proxy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$module$2d$proxy$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["createProxy"]("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js");
// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
;
const __TURBOPACK__default__export__ = proxy;

})()),
"[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$server$2d$inserted$2d$html$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.5-canary.38_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$5$2d$canary$2e$38_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$server$2d$inserted$2d$html$2e$shared$2d$runtime$2e$js__$28$client__proxy$29$__["default"]);

})()),
}]);

//# sourceMappingURL=d6271_next_dist_bcc411._.js.map