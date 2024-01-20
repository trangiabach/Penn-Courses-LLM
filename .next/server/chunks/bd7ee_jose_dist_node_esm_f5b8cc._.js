module.exports = {

"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/digest.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/digest.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/buffer_utils.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "JOSEAlgNotAllowed": ()=>JOSEAlgNotAllowed,
    "JOSEError": ()=>JOSEError,
    "JOSENotSupported": ()=>JOSENotSupported,
    "JWEDecryptionFailed": ()=>JWEDecryptionFailed,
    "JWEInvalid": ()=>JWEInvalid,
    "JWKInvalid": ()=>JWKInvalid,
    "JWKSInvalid": ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys": ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey": ()=>JWKSNoMatchingKey,
    "JWKSTimeout": ()=>JWKSTimeout,
    "JWSInvalid": ()=>JWSInvalid,
    "JWSSignatureVerificationFailed": ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed": ()=>JWTClaimValidationFailed,
    "JWTExpired": ()=>JWTExpired,
    "JWTInvalid": ()=>JWTInvalid
});
class JOSEError extends Error {
    static get code() {
        return 'ERR_JOSE_GENERIC';
    }
    code = 'ERR_JOSE_GENERIC';
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static get code() {
        return 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    }
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    constructor(message, claim = 'unspecified', reason = 'unspecified'){
        super(message);
        this.claim = claim;
        this.reason = reason;
    }
}
class JWTExpired extends JOSEError {
    static get code() {
        return 'ERR_JWT_EXPIRED';
    }
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    constructor(message, claim = 'unspecified', reason = 'unspecified'){
        super(message);
        this.claim = claim;
        this.reason = reason;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static get code() {
        return 'ERR_JOSE_ALG_NOT_ALLOWED';
    }
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static get code() {
        return 'ERR_JOSE_NOT_SUPPORTED';
    }
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWEDecryptionFailed extends JOSEError {
    static get code() {
        return 'ERR_JWE_DECRYPTION_FAILED';
    }
    code = 'ERR_JWE_DECRYPTION_FAILED';
    message = 'decryption operation failed';
}
class JWEInvalid extends JOSEError {
    static get code() {
        return 'ERR_JWE_INVALID';
    }
    code = 'ERR_JWE_INVALID';
}
class JWSInvalid extends JOSEError {
    static get code() {
        return 'ERR_JWS_INVALID';
    }
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static get code() {
        return 'ERR_JWT_INVALID';
    }
    code = 'ERR_JWT_INVALID';
}
class JWKInvalid extends JOSEError {
    static get code() {
        return 'ERR_JWK_INVALID';
    }
    code = 'ERR_JWK_INVALID';
}
class JWKSInvalid extends JOSEError {
    static get code() {
        return 'ERR_JWKS_INVALID';
    }
    code = 'ERR_JWKS_INVALID';
}
class JWKSNoMatchingKey extends JOSEError {
    static get code() {
        return 'ERR_JWKS_NO_MATCHING_KEY';
    }
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    message = 'no applicable key found in the JSON Web Key Set';
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static get code() {
        return 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    }
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    message = 'multiple matching keys found in the JSON Web Key Set';
}
class JWKSTimeout extends JOSEError {
    static get code() {
        return 'ERR_JWKS_TIMEOUT';
    }
    code = 'ERR_JWKS_TIMEOUT';
    message = 'request timed out';
}
class JWSSignatureVerificationFailed extends JOSEError {
    static get code() {
        return 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    }
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    message = 'signature verification failed';
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {locals}": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__external__node$3a$crypto__ = __turbopack_external_require__("node:crypto", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__external__node$3a$crypto__["randomFillSync"]
});
var __TURBOPACK__external__node$3a$crypto__ = __turbopack_external_require__("node:crypto", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/iv.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "bitLength": ()=>bitLength,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function bitLength(alg) {
    switch(alg){
        case 'A128GCM':
        case 'A128GCMKW':
        case 'A192GCM':
        case 'A192GCMKW':
        case 'A256GCM':
        case 'A256GCMKW':
            return 96;
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return 128;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Unsupported JWE Algorithm: ${alg}`);
    }
}
const __TURBOPACK__default__export__ = (alg)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["default"](new Uint8Array(bitLength(alg) >> 3));

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_iv_length.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_iv_length.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/is_key_object.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/check_cek_length.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/check_cek_length.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/timing_safe_equal.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/timing_safe_equal.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/cbc_tag.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/cbc_tag.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/webcrypto.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/crypto_key.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/crypto_key.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/invalid_key_input.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/ciphers.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/ciphers.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "types": ()=>types
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/webcrypto.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/is_key_object.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const __TURBOPACK__default__export__ = (key)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](key) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCryptoKey"](key);
const types = [
    'KeyObject'
];
if (globalThis.CryptoKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$webcrypto$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]?.CryptoKey) {
    types.push('CryptoKey');
}
;

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/decrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/decrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_disjoint.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_object.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_object.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/aeskw.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/aeskw.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/get_named_curve.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/get_named_curve.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/ecdhes.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/ecdhes.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_p2s.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_p2s.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/pbes2kw.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/pbes2kw.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/check_key_length.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/check_key_length.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/rsaes.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/rsaes.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/cek.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "bitLength": ()=>bitLength,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/random.js [app-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function bitLength(alg) {
    switch(alg){
        case 'A128GCM':
            return 128;
        case 'A192GCM':
            return 192;
        case 'A256GCM':
        case 'A128CBC-HS256':
            return 256;
        case 'A192CBC-HS384':
            return 384;
        case 'A256CBC-HS512':
            return 512;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Unsupported JWE Algorithm: ${alg}`);
    }
}
const __TURBOPACK__default__export__ = (alg)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$random$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["default"](new Uint8Array(bitLength(alg) >> 3));

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/asn1.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/asn1.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/jwk_to_key.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/jwk_to_key.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/import.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/import.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/invalid_key_input.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/is_key_like.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const symmetricTypeCheck = (alg, key)=>{
    if (key instanceof Uint8Array) return;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](key)) {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAlg"](alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"], 'Uint8Array'));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage)=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](key)) {
        throw new TypeError(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAlg"](alg, key, ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"]));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$is_key_like$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["types"].join(' or ')} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
const checkKeyType = (alg, key, usage)=>{
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key);
    } else {
        asymmetricTypeCheck(alg, key, usage);
    }
};
const __TURBOPACK__default__export__ = checkKeyType;

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/encrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/encrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/aesgcmkw.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/aesgcmkw.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/decrypt_key_management.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/decrypt_key_management.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_crit.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_algorithms.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const validateAlgorithms = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
const __TURBOPACK__default__export__ = validateAlgorithms;

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/decrypt.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "flattenedDecrypt": ()=>flattenedDecrypt
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/is_disjoint.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/is_object.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../lib/decrypt_key_management.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../lib/buffer_utils.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/cek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_algorithms.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
async function flattenedDecrypt(jwe, key, options) {
    if (!isObject(jwe)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Flattened JWE must be an object');
    }
    if (jwe.protected === undefined && jwe.header === undefined && jwe.unprotected === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JOSE Header missing');
    }
    if (typeof jwe.iv !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Initialization Vector missing or incorrect type');
    }
    if (typeof jwe.ciphertext !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Ciphertext missing or incorrect type');
    }
    if (typeof jwe.tag !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Authentication Tag missing or incorrect type');
    }
    if (jwe.protected !== undefined && typeof jwe.protected !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Protected Header incorrect type');
    }
    if (jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Encrypted Key incorrect type');
    }
    if (jwe.aad !== undefined && typeof jwe.aad !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE AAD incorrect type');
    }
    if (jwe.header !== undefined && !isObject(jwe.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Shared Unprotected Header incorrect type');
    }
    if (jwe.unprotected !== undefined && !isObject(jwe.unprotected)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Per-Recipient Unprotected Header incorrect type');
    }
    let parsedProt;
    if (jwe.protected) {
        try {
            const protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.protected);
            parsedProt = JSON.parse(decoder.decode(protectedHeader));
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Protected Header is invalid');
        }
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](parsedProt, jwe.header, jwe.unprotected)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"], new Map(), options?.crit, parsedProt, joseHeader);
    if (joseHeader.zip !== undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
    }
    const { alg, enc } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('missing JWE Algorithm (alg) in JWE Header');
    }
    if (typeof enc !== 'string' || !enc) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('missing JWE Encryption Algorithm (enc) in JWE Header');
    }
    const keyManagementAlgorithms = options && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]('keyManagementAlgorithms', options.keyManagementAlgorithms);
    const contentEncryptionAlgorithms = options && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]('contentEncryptionAlgorithms', options.contentEncryptionAlgorithms);
    if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg) || !keyManagementAlgorithms && alg.startsWith('PBES2')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"enc" (Encryption Algorithm) Header Parameter value not allowed');
    }
    let encryptedKey;
    if (jwe.encrypted_key !== undefined) {
        try {
            encryptedKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.encrypted_key);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Failed to base64url decode the encrypted_key');
        }
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
    }
    let cek;
    try {
        cek = await decryptKeyManagement(alg, key, encryptedKey, joseHeader, options);
    } catch (err) {
        if (err instanceof TypeError || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"] || err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]) {
            throw err;
        }
        cek = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
    }
    let iv;
    let tag;
    try {
        iv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.iv);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Failed to base64url decode the iv');
    }
    try {
        tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.tag);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Failed to base64url decode the tag');
    }
    const protectedHeader = encoder.encode(jwe.protected ?? '');
    let additionalData;
    if (jwe.aad !== undefined) {
        additionalData = concat(protectedHeader, encoder.encode('.'), encoder.encode(jwe.aad));
    } else {
        additionalData = protectedHeader;
    }
    let ciphertext;
    try {
        ciphertext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.ciphertext);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Failed to base64url decode the ciphertext');
    }
    let plaintext = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc, cek, ciphertext, iv, tag, additionalData);
    const result = {
        plaintext
    };
    if (jwe.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jwe.aad !== undefined) {
        try {
            result.additionalAuthenticatedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decode"](jwe.aad);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('Failed to base64url decode the aad');
        }
    }
    if (jwe.unprotected !== undefined) {
        result.sharedUnprotectedHeader = jwe.unprotected;
    }
    if (jwe.header !== undefined) {
        result.unprotectedHeader = jwe.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key
        };
    }
    return result;
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/compact/decrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/compact/decrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/decrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/decrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/key_to_jwk.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/key_to_jwk.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/export.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "exportJWK": ()=>exportJWK,
    "exportPKCS8": ()=>exportPKCS8,
    "exportSPKI": ()=>exportSPKI
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/asn1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$key_to_jwk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/key_to_jwk.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function exportSPKI(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toSPKI"](key);
}
async function exportPKCS8(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$asn1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPKCS8"](key);
}
async function exportJWK(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$key_to_jwk$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](key);
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/encrypt_key_management.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$aeskw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/aeskw.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$ecdhes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/ecdhes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$pbes2kw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/pbes2kw.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$rsaes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/rsaes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/cek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$export$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/export.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$aesgcmkw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/aesgcmkw.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](alg, key, 'encrypt');
    switch(alg){
        case 'dir':
            {
                cek = key;
                break;
            }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$ecdhes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ecdhAllowed(key)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]('ECDH with the provided key is not allowed or not supported by your javascript runtime');
                }
                const { apu, apv } = providedParameters;
                let { epk: ephemeralKey } = providedParameters;
                ephemeralKey ||= (await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$ecdhes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.generateEpk(key)).privateKey;
                const { x, y, crv, kty } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$export$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exportJWK"](ephemeralKey);
                const sharedSecret = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$ecdhes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.deriveKey(key, ephemeralKey, alg === 'ECDH-ES' ? enc : alg, alg === 'ECDH-ES' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bitLength"](enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
                parameters = {
                    epk: {
                        x,
                        crv,
                        kty
                    }
                };
                if (kty === 'EC') parameters.epk.y = y;
                if (apu) parameters.apu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](apu);
                if (apv) parameters.apv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](apv);
                if (alg === 'ECDH-ES') {
                    cek = sharedSecret;
                    break;
                }
                cek = providedCek || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
                const kwAlg = alg.slice(-6);
                encryptedKey = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$aeskw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrap"](kwAlg, sharedSecret, cek);
                break;
            }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                cek = providedCek || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
                encryptedKey = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$rsaes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encrypt"](alg, key, cek);
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            {
                cek = providedCek || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
                const { p2c, p2s } = providedParameters;
                ({ encryptedKey, ...parameters } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$pbes2kw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encrypt"](alg, key, cek, p2c, p2s));
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                cek = providedCek || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
                encryptedKey = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$aeskw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrap"](alg, key, cek);
                break;
            }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
            {
                cek = providedCek || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$cek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
                const { iv } = providedParameters;
                ({ encryptedKey, ...parameters } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$aesgcmkw$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["wrap"](alg, key, cek, iv));
                break;
            }
        default:
            {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported "alg" (JWE Algorithm) header value');
            }
    }
    return {
        cek,
        encryptedKey,
        parameters
    };
}
const __TURBOPACK__default__export__ = encryptKeyManagement;

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/encrypt.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FlattenedEncrypt": ()=>FlattenedEncrypt,
    "unprotected": ()=>unprotected
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../runtime/encrypt.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$iv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/iv.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$encrypt_key_management$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/encrypt_key_management.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const unprotected = Symbol();
class FlattenedEncrypt {
    _plaintext;
    _protectedHeader;
    _sharedUnprotectedHeader;
    _unprotectedHeader;
    _aad;
    _cek;
    _iv;
    _keyManagementParameters;
    constructor(plaintext){
        if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError('plaintext must be an instance of Uint8Array');
        }
        this._plaintext = plaintext;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()');
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"], new Map(), options?.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== undefined) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== 'string' || !enc) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWEInvalid"]('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (alg === 'dir') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Encryption');
            }
        } else if (alg === 'ECDH-ES') {
            if (this._cek) {
                throw new TypeError('setContentEncryptionKey cannot be called when using Direct Key Agreement');
            }
        }
        let cek;
        {
            let parameters;
            ({ cek, encryptedKey, parameters } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$encrypt_key_management$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](alg, enc, key, this._cek, this._keyManagementParameters));
            if (parameters) {
                if (options && unprotected in options) {
                    if (!this._unprotectedHeader) {
                        this.setUnprotectedHeader(parameters);
                    } else {
                        this._unprotectedHeader = {
                            ...this._unprotectedHeader,
                            ...parameters
                        };
                    }
                } else {
                    if (!this._protectedHeader) {
                        this.setProtectedHeader(parameters);
                    } else {
                        this._protectedHeader = {
                            ...this._protectedHeader,
                            ...parameters
                        };
                    }
                }
            }
        }
        this._iv ||= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$iv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](enc);
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode('');
        }
        if (this._aad) {
            aadMember = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](this._aad);
            additionalData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"](protectedHeader, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode('.'), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode(aadMember));
        } else {
            additionalData = protectedHeader;
        }
        const { ciphertext, tag } = await encrypt(enc, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
            ciphertext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](ciphertext),
            iv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](this._iv),
            tag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](tag)
        };
        if (encryptedKey) {
            jwe.encrypted_key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](encryptedKey);
        }
        if (aadMember) {
            jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
            jwe.protected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
            jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
            jwe.header = this._unprotectedHeader;
        }
        return jwe;
    }
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/encrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/encrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/dsa_digest.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/dsa_digest.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/node_key.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/node_key.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/hmac_digest.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/hmac_digest.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/get_sign_verify_key.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/sign.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/sign.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/verify.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/verify.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/verify.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/verify.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/verify.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/general/verify.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "generalVerify": ()=>generalVerify
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_object.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function generalVerify(jws, key, options) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](jws)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('General JWS must be an object');
    }
    if (!Array.isArray(jws.signatures) || !jws.signatures.every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Signatures missing or incorrect type');
    }
    for (const signature of jws.signatures){
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenedVerify"]({
                header: signature.header,
                payload: jws.payload,
                protected: signature.protected,
                signature: signature.signature
            }, key, options);
        } catch  {}
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/epoch.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/epoch.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/secs.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/secs.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/jwt_claims_set.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/epoch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/secs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_object.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const normalizeTyp = (value)=>value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
const __TURBOPACK__default__export__ = (protectedHeader, encodedPayload, options = {})=>{
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', 'typ', 'check_failed');
    }
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decoder"].decode(encodedPayload));
    } catch  {}
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](payload)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "iss" claim value', 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "sub" claim value', 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "aud" claim value', 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$epoch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim must be a number', 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim must be a number', 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"exp" claim must be a number', 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$secs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](maxTokenAge);
        if (age - tolerance > max) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', 'iat', 'check_failed');
        }
    }
    return payload;
};

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/verify.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/verify.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/decrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/decrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/compact/encrypt.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CompactEncrypt": ()=>CompactEncrypt
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class CompactEncrypt {
    _flattened;
    constructor(plaintext){
        this._flattened = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlattenedEncrypt"](plaintext);
    }
    setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
    }
    setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
    }
    async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [
            jwe.protected,
            jwe.encrypted_key,
            jwe.iv,
            jwe.ciphertext,
            jwe.tag
        ].join('.');
    }
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FlattenedSign": ()=>FlattenedSign
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/base64url.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../runtime/sign.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_disjoint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/buffer_utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/check_key_type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/validate_crit.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
class FlattenedSign {
    _payload;
    _protectedHeader;
    _unprotectedHeader;
    constructor(payload){
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this._protectedHeader, this._unprotectedHeader)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader
        };
        const extensions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
            [
                'b64',
                true
            ]
        ]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](JSON.stringify(this._protectedHeader)));
        } else {
            protectedHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode('');
        }
        const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"](protectedHeader, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encoder"].encode('.'), payload);
        const signature = await sign(alg, key, data);
        const jws = {
            signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$runtime$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"](signature),
            payload: ''
        };
        if (b64) {
            jws.payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decoder"].decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader);
        }
        return jws;
    }
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/sign.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/general/sign.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/general/sign.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/produce.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/produce.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/sign.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/sign.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/encrypt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/encrypt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/thumbprint.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/thumbprint.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/embedded.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/embedded.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/local.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LocalJWKSet": ()=>LocalJWKSet,
    "createLocalJWKSet": ()=>createLocalJWKSet,
    "isJWKSLike": ()=>isJWKSLike
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/import.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/lib/is_object.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function getKtyFromAlg(alg) {
    switch(typeof alg === 'string' && alg.slice(0, 2)){
        case 'RS':
        case 'PS':
            return 'RSA';
        case 'ES':
            return 'EC';
        case 'Ed':
            return 'OKP';
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported "alg" value for a JSON Web Key Set');
    }
}
function isJWKSLike(jwks) {
    return jwks && typeof jwks === 'object' && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$lib$2f$is_object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](key);
}
function clone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj);
    }
    return JSON.parse(JSON.stringify(obj));
}
class LocalJWKSet {
    _jwks;
    _cached = new WeakMap();
    constructor(jwks){
        if (!isJWKSLike(jwks)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWKSInvalid"]('JSON Web Key Set malformed');
        }
        this._jwks = clone(jwks);
    }
    async getKey(protectedHeader, token) {
        const { alg, kid } = {
            ...protectedHeader,
            ...token?.header
        };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk)=>{
            let candidate = kty === jwk.kty;
            if (candidate && typeof kid === 'string') {
                candidate = kid === jwk.kid;
            }
            if (candidate && typeof jwk.alg === 'string') {
                candidate = alg === jwk.alg;
            }
            if (candidate && typeof jwk.use === 'string') {
                candidate = jwk.use === 'sig';
            }
            if (candidate && Array.isArray(jwk.key_ops)) {
                candidate = jwk.key_ops.includes('verify');
            }
            if (candidate && alg === 'EdDSA') {
                candidate = jwk.crv === 'Ed25519' || jwk.crv === 'Ed448';
            }
            if (candidate) {
                switch(alg){
                    case 'ES256':
                        candidate = jwk.crv === 'P-256';
                        break;
                    case 'ES256K':
                        candidate = jwk.crv === 'secp256k1';
                        break;
                    case 'ES384':
                        candidate = jwk.crv === 'P-384';
                        break;
                    case 'ES512':
                        candidate = jwk.crv === 'P-521';
                        break;
                }
            }
            return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWKSNoMatchingKey"]();
        } else if (length !== 1) {
            const error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWKSMultipleMatchingKeys"]();
            const { _cached } = this;
            error[Symbol.asyncIterator] = async function*() {
                for (const jwk of candidates){
                    try {
                        yield await importWithAlgCache(_cached, jwk, alg);
                    } catch  {
                        continue;
                    }
                }
            };
            throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
    }
}
async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === undefined) {
        const key = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importJWK"]({
            ...jwk,
            ext: true
        }, alg);
        if (key instanceof Uint8Array || key.type !== 'public') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWKSInvalid"]('JSON Web Key Set members must be public keys');
        }
        cached[alg] = key;
    }
    return cached[alg];
}
function createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    return async function(protectedHeader, token) {
        return set.getKey(protectedHeader, token);
    };
}

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/fetch_jwks.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/fetch_jwks.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/remote.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/remote.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/unsecured.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/unsecured.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/base64url.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/base64url.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_protected_header.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_protected_header.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_jwt.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/generate.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/generate.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_key_pair.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_key_pair.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_secret.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_secret.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/runtime.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/runtime/runtime.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/runtime.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/runtime.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {locals}": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$compact$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/compact/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jws/general/verify.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './jwt/verify.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$compact$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/compact/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jws/general/sign.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './jwt/sign.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/thumbprint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwk$2f$embedded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/embedded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwks$2f$local$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/local.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwks$2f$remote$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/remote.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jwt/unsecured.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$export$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/export.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/import.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_protected_header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_protected_header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$generate_key_pair$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_key_pair.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$generate_secret$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_secret.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/base64url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {exports}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GeneralEncrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GeneralEncrypt"],
    "generalDecrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generalDecrypt"]
});
(()=>{
    const e = new Error("Cannot find module './jwe/compact/encrypt.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$compact$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/compact/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwk$2f$embedded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/embedded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$general$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/general/sign.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jwt/sign.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './jwt/unsecured.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/base64url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwk/thumbprint.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jwe/compact/decrypt.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './jws/compact/verify.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwks$2f$local$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwks/local.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jwks/remote.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$decode_protected_header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/decode_protected_header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/util/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$export$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/export.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$flattened$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/flattened/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/flattened/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwe$2f$general$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwe/general/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jws$2f$general$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jws/general/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$generate_key_pair$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_key_pair.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$generate_secret$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/generate_secret.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$key$2f$import$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/key/import.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './key/import.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/jwt/decrypt.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './jwt/verify.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {facade}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CompactEncrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["CompactEncrypt"],
    "CompactSign": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["CompactSign"],
    "EmbeddedJWK": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["EmbeddedJWK"],
    "EncryptJWT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["EncryptJWT"],
    "FlattenedEncrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["FlattenedEncrypt"],
    "FlattenedSign": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["FlattenedSign"],
    "GeneralEncrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["GeneralEncrypt"],
    "GeneralSign": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["GeneralSign"],
    "SignJWT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["SignJWT"],
    "UnsecuredJWT": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["UnsecuredJWT"],
    "base64url": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["base64url"],
    "calculateJwkThumbprint": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["calculateJwkThumbprint"],
    "calculateJwkThumbprintUri": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["calculateJwkThumbprintUri"],
    "compactDecrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["compactDecrypt"],
    "compactVerify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["compactVerify"],
    "createLocalJWKSet": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["createLocalJWKSet"],
    "createRemoteJWKSet": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["createRemoteJWKSet"],
    "cryptoRuntime": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["cryptoRuntime"],
    "decodeJwt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["decodeJwt"],
    "decodeProtectedHeader": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["decodeProtectedHeader"],
    "errors": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["errors"],
    "exportJWK": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["exportJWK"],
    "exportPKCS8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["exportPKCS8"],
    "exportSPKI": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["exportSPKI"],
    "flattenedDecrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["flattenedDecrypt"],
    "flattenedVerify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["flattenedVerify"],
    "generalDecrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["generalDecrypt"],
    "generalVerify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["generalVerify"],
    "generateKeyPair": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["generateKeyPair"],
    "generateSecret": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["generateSecret"],
    "importJWK": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["importJWK"],
    "importPKCS8": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["importPKCS8"],
    "importSPKI": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["importSPKI"],
    "importX509": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["importX509"],
    "jwtDecrypt": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["jwtDecrypt"],
    "jwtVerify": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__["jwtVerify"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$5$2e$2$2e$0$2f$node_modules$2f$jose$2f$dist$2f$node$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$7b$exports$7d$__ = __turbopack_import__("[project]/node_modules/.pnpm/jose@5.2.0/node_modules/jose/dist/node/esm/index.js [app-rsc] (ecmascript) {exports}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=bd7ee_jose_dist_node_esm_f5b8cc._.js.map