(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_f50061._.js", {

"[project]/auth.ts [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET,
    "POST": ()=>POST,
    "auth": ()=>auth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-edge-rsc] (ecmascript) {export NextAuth as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/github.js [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/github.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const { handlers: { GET, POST }, auth } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__["default"]({
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    ],
    callbacks: {
        jwt ({ token, profile }) {
            if (profile) {
                token.id = profile.id;
                token.image = profile.avatar_url || profile.picture;
            }
            return token;
        },
        session: ({ session, token })=>{
            if (session?.user && token?.id) {
                session.user.id = String(token.id);
            }
            return session;
        },
        authorized ({ auth }) {
            return !!auth?.user // this ensures there is a logged in user for -every- request
            ;
        }
    },
    pages: {
        signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
    }
});

})()),
"[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "runtime": ()=>runtime
});
;
const runtime = 'edge';

})()),
"[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["GET"],
    "POST": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["POST"],
    "runtime": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__["runtime"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {facade}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["GET"],
    "POST": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["POST"],
    "runtime": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["runtime"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2f$route$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/app/api/auth/[...nextauth]/route.ts [app-edge-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/.next-internal/server/app/api/auth/[...nextauth]/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),
}]);

//# sourceMappingURL=_f50061._.js.map