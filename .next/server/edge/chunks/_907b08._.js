(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_907b08._.js", {

"[project]/auth.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET,
    "POST": ()=>POST,
    "auth": ()=>auth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [middleware] (ecmascript) {export NextAuth as default}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/google.js [middleware] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/google.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const { handlers: { GET, POST }, auth } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$7b$export__NextAuth__as__default$7d$__["default"]({
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]
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
            if (session?.user && token?.sub) {
                session.user.id = String(token.sub);
            }
            return session;
        },
        authorized () {
            return true;
        }
    },
    pages: {
        signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
    }
});

})()),
"[project]/middleware.ts [middleware] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config
});
;
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};

})()),
"[project]/middleware.ts [middleware] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/middleware.ts [middleware] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$locals$7d$__["config"],
    "middleware": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["auth"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/middleware.ts [middleware] (ecmascript) {facade}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$exports$7d$__["config"],
    "middleware": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$exports$7d$__["middleware"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/middleware.ts [middleware] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=_907b08._.js.map