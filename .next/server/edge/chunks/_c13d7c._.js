(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/_c13d7c._.js", {

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
        authorized () {
            return true;
        }
    },
    pages: {
        signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
    }
});

})()),
"[project]/lib/utils.ts [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn,
    "fetcher": ()=>fetcher,
    "formatDate": ()=>formatDate,
    "nanoid": ()=>nanoid
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/nanoid/index.browser.js [app-edge-rsc] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["clsx"](inputs));
}
const nanoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__["customAlphabet"]('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 7) // 7-character random string
;
async function fetcher(input, init) {
    const res = await fetch(input, init);
    if (!res.ok) {
        const json = await res.json();
        if (json.error) {
            const error = new Error(json.error);
            error.status = res.status;
            throw error;
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
    return res.json();
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

})()),
"[project]/consts/user.ts [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "anonymousUserId": ()=>anonymousUserId
});
const anonymousUserId = 'anonymous';

})()),
"[project]/app/api/chat/route.ts [app-edge-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "POST": ()=>POST,
    "runtime": ()=>runtime
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@vercel/kv/dist/index.js [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ai/dist/index.mjs [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/openai/index.mjs [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$consts$2f$user$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/consts/user.ts [app-edge-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/build/polyfills/process.js [app-edge-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const runtime = 'edge';
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["default"].env.OPENAI_API_KEY
});
async function POST(req) {
    const json = await req.json();
    const { messages, previewToken } = json;
    const userId = (await __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["auth"]())?.user.id || __TURBOPACK__imported__module__$5b$project$5d2f$consts$2f$user$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["anonymousUserId"];
    if (previewToken) {
        openai.apiKey = previewToken;
    }
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        stream: true
    });
    const stream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["OpenAIStream"](res, {
        async onCompletion (completion) {
            const title = json.messages[0].content.substring(0, 100);
            const id = json.id ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["nanoid"]();
            const createdAt = Date.now();
            const path = `/chat/${id}`;
            const payload = {
                id,
                title,
                userId,
                createdAt,
                path,
                messages: [
                    ...messages,
                    {
                        content: completion,
                        role: 'assistant'
                    }
                ]
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["kv"].hmset(`chat:${id}`, payload);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$kv$2f$dist$2f$index$2e$js__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["kv"].zadd(`user:chat:${userId}`, {
                score: createdAt,
                member: `chat:${id}`
            });
        }
    });
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$edge$2d$rsc$5d$__$28$ecmascript$29$__["StreamingTextResponse"](stream);
}

})()),
"[project]/.next-internal/server/app/api/chat/route/actions.js (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),
}]);

//# sourceMappingURL=_c13d7c._.js.map