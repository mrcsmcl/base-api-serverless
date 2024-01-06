/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.auth = void 0;
var userService_1 = __webpack_require__(/*! @/handlers/user/userService */ "./src/handlers/user/userService.ts");
var error_1 = __webpack_require__(/*! ./error */ "./lib/error.ts");
var jwt_1 = __webpack_require__(/*! ./jwt */ "./lib/jwt.ts");
var TOKEN_HEADER_KEY = 'x-api-key';
var parseUserPayload = function (event) {
    var token = event.headers[TOKEN_HEADER_KEY];
    var user = jwt_1.jwt.verify(token);
    if (!user) {
        throw error_1.error.buildNotAuthorizedError();
    }
    return user;
};
var authUser = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = parseUserPayload(event);
                return [4 /*yield*/, userService_1.userService.findById(payload.user_id)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
var authToken = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = parseUserPayload(event);
                return [4 /*yield*/, userService_1.userService.findById(payload.user_id)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user];
        }
    });
}); };
var verifyContext = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, authUser(event)];
            case 1:
                user = _a.sent();
                event.user = user;
                return [2 /*return*/];
        }
    });
}); };
var verifyLogged = function (handler) { return function (event) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, authToken(event)];
                case 1:
                    user = _a.sent();
                    event.user = user;
                    return [2 /*return*/, handler.apply(void 0, __spreadArray([event], __read(rest), false))];
            }
        });
    });
}; };
var auth = {
    verifyLogged: verifyLogged,
    verifyContext: verifyContext,
    parseUserPayload: parseUserPayload,
    TOKEN_HEADER_KEY: TOKEN_HEADER_KEY
};
exports.auth = auth;


/***/ }),

/***/ "./lib/database.ts":
/*!*************************!*\
  !*** ./lib/database.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.disconnectWith = exports.disconnect = exports.connect = void 0;
var config_1 = __webpack_require__(/*! @/config */ "./src/config.ts");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var conn = null;
var connect = function (connectOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var mongoConfig;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mongoConfig = __assign({ ignoreUndefined: true, autoIndex: false, autoCreate: false, maxPoolSize: 1 }, connectOptions);
                return [4 /*yield*/, mongoose.set('strictQuery', true)];
            case 1:
                _a.sent();
                if (!(!config_1.config.IS_TEST && !conn)) return [3 /*break*/, 3];
                return [4 /*yield*/, mongoose.connect(config_1.config.DATABASE_URL, mongoConfig)];
            case 2:
                conn = _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/, conn];
        }
    });
}); };
exports.connect = connect;
var disconnect = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(!config_1.config.IS_LOCAL && !config_1.config.IS_TEST)) return [3 /*break*/, 2];
                return [4 /*yield*/, mongoose.disconnect()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
exports.disconnect = disconnect;
var disconnectWith = function (connect) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(!config_1.config.IS_LOCAL && !config_1.config.IS_TEST)) return [3 /*break*/, 2];
                return [4 /*yield*/, connect.connection.close()];
            case 1:
                _a.sent();
                conn = null;
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
exports.disconnectWith = disconnectWith;


/***/ }),

/***/ "./lib/error.ts":
/*!**********************!*\
  !*** ./lib/error.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = void 0;
var ErrorTypesEnum_1 = __webpack_require__(/*! @/types/ErrorTypesEnum */ "./src/types/ErrorTypesEnum.ts");
var i18n_1 = __webpack_require__(/*! ./i18n */ "./lib/i18n.ts");
var error_messages_json_1 = __webpack_require__(/*! ./i18n/error_messages.json */ "./lib/i18n/error_messages.json");
var build = function (options, params) {
    var error = new Error();
    return __assign(__assign({}, error), { message: options.message, 
        // stack: error.stack,
        type: options.type, statusCode: options.statusCode, params: params });
};
var buildSchemaValidationError = function (originalError) {
    if (originalError.errors) {
        var keyErrors = Object.keys(originalError.errors);
        var errorMessages = keyErrors.map(function (keyError) { return originalError.errors[keyError]; });
        var finalMessage = errorMessages.map(function (fildName) { return i18n_1.i18n.get(error_messages_json_1.MESSAGES.SCHEMA_VALIDATION_ERROR, {
            fieldName: fildName.message
        }); });
        originalError.message = finalMessage;
    }
    originalError.type = ErrorTypesEnum_1.ErrorTypesEnum.INVALID_SCHEMA;
    originalError.statusCode = 422;
    return originalError;
};
var buildInvalidUpdateInputError = function (originalError) {
    if (originalError.errors) {
        var keyErrors = Object.keys(originalError.errors);
        var errorMessages = keyErrors.map(function (keyError) { return originalError.errors[keyError]; });
        var finalMessage = errorMessages.map(function (fildName) { return i18n_1.i18n.get(error_messages_json_1.MESSAGES.UPDATE_VALIDATION_ERROR, {
            fieldName: fildName.path,
            value: fildName.value
        }); });
        originalError.message = finalMessage;
    }
    originalError.type = ErrorTypesEnum_1.ErrorTypesEnum.INVALID_UPDATE_INPUT;
    originalError.statusCode = 422;
    return originalError;
};
var buildNotAuthorizedError = function (msg) {
    if (msg === void 0) { msg = i18n_1.i18n.get(error_messages_json_1.MESSAGES.NOT_AUTHORIZED_ERROR); }
    var error = new Error();
    return __assign(__assign({}, error), { message: msg, stack: error.stack, type: ErrorTypesEnum_1.ErrorTypesEnum.NOT_AUTHORIZED, statusCode: 401 });
};
var buildDependencyFailedError = function (msg) {
    if (msg === void 0) { msg = i18n_1.i18n.get(error_messages_json_1.MESSAGES.DEPENDENCY_FAILED); }
    var error = new Error();
    return __assign(__assign({}, error), { message: msg, stack: error.stack, type: ErrorTypesEnum_1.ErrorTypesEnum.DEPENDENCY_FAILED, statusCode: 424 });
};
var buildUserNotSessionOwner = function () { return error.build({
    message: i18n_1.i18n.get(error_messages_json_1.MESSAGES.USER_NOT_SESSION_OWNER),
    statusCode: 412,
    type: ErrorTypesEnum_1.ErrorTypesEnum.USER_NOT_SESSION_OWNER
}); };
var buildSomethingWentWrongInGameError = function () { return error.build({
    message: i18n_1.i18n.get(error_messages_json_1.MESSAGES.SOMETHING_WENT_WRONG_IN_GAME),
    statusCode: 412,
    type: ErrorTypesEnum_1.ErrorTypesEnum.SOMETHING_WENT_WRONG_IN_GAME
}); };
var buildNotImplemented = function () { return error.build({
    message: i18n_1.i18n.get(error_messages_json_1.MESSAGES.NOT_IMPLEMENTED),
    statusCode: 412,
    type: ErrorTypesEnum_1.ErrorTypesEnum.NOT_IMPLEMENTED
}); };
var buildUserNotHasPartner = function () { return error.build({
    message: i18n_1.i18n.get(error_messages_json_1.MESSAGES.NOT_HAS_PARTNER),
    statusCode: 412,
    type: ErrorTypesEnum_1.ErrorTypesEnum.NOT_AUTHORIZED
}); };
var error = {
    build: build,
    buildSchemaValidationError: buildSchemaValidationError,
    buildInvalidUpdateInputError: buildInvalidUpdateInputError,
    buildNotAuthorizedError: buildNotAuthorizedError,
    buildDependencyFailedError: buildDependencyFailedError,
    buildUserNotSessionOwner: buildUserNotSessionOwner,
    buildSomethingWentWrongInGameError: buildSomethingWentWrongInGameError,
    buildNotImplemented: buildNotImplemented,
    buildUserNotHasPartner: buildUserNotHasPartner
};
exports.error = error;


/***/ }),

/***/ "./lib/hash.ts":
/*!*********************!*\
  !*** ./lib/hash.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hash = void 0;
var crypto_1 = __webpack_require__(/*! crypto */ "crypto");
var encode = function (content, algorithm) {
    if (content === void 0) { content = ''; }
    if (algorithm === void 0) { algorithm = 'sha1'; }
    return (0, crypto_1.createHash)(algorithm).update(content).digest('hex');
};
var randomHash = function (bytes) {
    if (bytes === void 0) { bytes = 4; }
    return (0, crypto_1.randomBytes)(bytes).toString('hex');
};
var randomPassword = function () {
    return (0, crypto_1.randomBytes)(20).toString('hex');
};
var hash = {
    encode: encode,
    randomHash: randomHash,
    randomPassword: randomPassword
};
exports.hash = hash;


/***/ }),

/***/ "./lib/i18n.ts":
/*!*********************!*\
  !*** ./lib/i18n.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.i18n = void 0;
var addMessage = function (message, response, body) {
    return __assign(__assign({}, response), { body: JSON.stringify(__assign(__assign({}, body), { message: message })) });
};
var parseTemplates = function (message, params) {
    var e_1, _a;
    if (!params) {
        return message;
    }
    var keys = Object.keys(params);
    var text = message;
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            var search = "{".concat(key, "}");
            text = text.replace(new RegExp(search, 'g'), params[key]);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return text;
};
var resolve = function (_a) {
    var language = _a.language, response = _a.response;
    try {
        var parsedBody = JSON.parse(response === null || response === void 0 ? void 0 : response.body);
        var message = parsedBody.message;
        if (Array.isArray(message)) {
            if (language === 'en') {
                var templates_1 = message.map(function (parse) { return parseTemplates(parse === null || parse === void 0 ? void 0 : parse.en, parse.params); });
                var finalMessage_1 = templates_1.join(', ');
                return addMessage(finalMessage_1, response, parsedBody);
            }
            var templates = message.map(function (parse) { return parseTemplates(parse === null || parse === void 0 ? void 0 : parse.ptBr, parse.params); });
            var finalMessage = templates.join(', ');
            return addMessage(finalMessage, response, parsedBody);
        }
        if (language === 'en' && (message === null || message === void 0 ? void 0 : message.en)) {
            return addMessage(parseTemplates(message === null || message === void 0 ? void 0 : message.en, message.params), response, parsedBody);
        }
        if (message === null || message === void 0 ? void 0 : message.ptBr) {
            return addMessage(parseTemplates(message === null || message === void 0 ? void 0 : message.ptBr, message.params), response, parsedBody);
        }
        return response;
    }
    catch (error) {
        return response;
    }
};
var get = function (definition, params) {
    return __assign(__assign({}, definition), { params: params });
};
var translator = function (definition, language, params) {
    if (language === void 0) { language = 'ptBr'; }
    var languageSelected = definition[language] ? language : 'ptBr';
    return parseTemplates(definition[languageSelected], (params || {}));
};
var i18n = {
    resolve: resolve,
    get: get,
    translator: translator,
    parseTemplates: parseTemplates
};
exports.i18n = i18n;


/***/ }),

/***/ "./lib/jwt.ts":
/*!********************!*\
  !*** ./lib/jwt.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwt = void 0;
var config_1 = __webpack_require__(/*! @/config */ "./src/config.ts");
var jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var create = function (data, options) {
    if (options === void 0) { options = {}; }
    return (0, jsonwebtoken_1.sign)(data, config_1.config.JWT_SECRET, options);
};
var verify = function (token) {
    try {
        var payload = (0, jsonwebtoken_1.verify)(token, config_1.config.JWT_SECRET);
        return payload;
    }
    catch (e) {
        return null;
    }
};
var getData = function (token) {
    try {
        var _a = __read(token.split('.'), 2), data = _a[1];
        var rawData = Buffer.from(data, 'base64').toString();
        return JSON.parse(rawData);
    }
    catch (e) {
        return null;
    }
};
var jwt = {
    create: create,
    verify: verify,
    getData: getData
};
exports.jwt = jwt;


/***/ }),

/***/ "./lib/mongooseErrorValidator.ts":
/*!***************************************!*\
  !*** ./lib/mongooseErrorValidator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mongooseErrorValidator = void 0;
/* eslint-disable no-console */
var error_1 = __webpack_require__(/*! @/lib/error */ "./lib/error.ts");
var mongooseErrorValidator = function (schema) {
    var changeToInvalidSchemaError = function (err, _, next) {
        if (err) {
            return next(error_1.error.buildInvalidUpdateInputError(err));
        }
        return next();
    };
    var catchInvalidSchema = function (err, _, next) {
        if (err) {
            return next(error_1.error.buildSchemaValidationError(err));
        }
        return next();
    };
    schema.post('validate', catchInvalidSchema);
    schema.post('findOneAndUpdate', changeToInvalidSchemaError);
};
exports.mongooseErrorValidator = mongooseErrorValidator;


/***/ }),

/***/ "./lib/router.ts":
/*!***********************!*\
  !*** ./lib/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildHandler = exports.buildRouter = void 0;
var lambda_router_1 = __webpack_require__(/*! lambda-router */ "lambda-router");
var ErrorTypesEnum_1 = __webpack_require__(/*! @/types/ErrorTypesEnum */ "./src/types/ErrorTypesEnum.ts");
var database_1 = __webpack_require__(/*! @/lib/database */ "./lib/database.ts");
var auth_1 = __webpack_require__(/*! ./auth */ "./lib/auth.ts");
var i18n_1 = __webpack_require__(/*! ./i18n */ "./lib/i18n.ts");
var buildRouter = function () {
    var router = (0, lambda_router_1.Router)({
        parseBody: true,
        decodeEvent: true,
        includeErrorStack: true
    });
    router.unknown(function (_event, _a, path, method) {
        var response = _a.response;
        return response(404, {
            message: "".concat(method, " on ").concat(path, " not found")
        });
    });
    router.beforeRoute(function (event) {
        var _a = event.pathParameters, pathParameters = _a === void 0 ? {} : _a, _b = event.queryStringParameters, queryStringParameters = _b === void 0 ? {} : _b, body = event.body;
        event.params = pathParameters;
        event.query = queryStringParameters;
        event.body = body !== null && body !== void 0 ? body : {};
    });
    router.formatError(function (_statusCode, error) {
        if (!error.type) {
            error.type = ErrorTypesEnum_1.ErrorTypesEnum.UNKNOWN;
        }
        return error;
    });
    return router;
};
exports.buildRouter = buildRouter;
var connPromise = (0, database_1.connect)({ maxPoolSize: 1, minPoolSize: 0, maxIdleTimeMS: 1000 });
var buildHandler = function (router, config) {
    return function (event, context) { return __awaiter(void 0, void 0, Promise, function () {
        var result, response;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    context = context || {};
                    return [4 /*yield*/, connPromise];
                case 1:
                    _b.sent();
                    context.callbackWaitsForEmptyEventLoop = false;
                    if (config === null || config === void 0 ? void 0 : config.auth) {
                        router.beforeRoute(function (event) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, auth_1.auth.verifyContext(event)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    return [4 /*yield*/, router.route(event, context)];
                case 2:
                    result = _b.sent();
                    response = i18n_1.i18n.resolve({
                        language: (_a = event === null || event === void 0 ? void 0 : event.headers) === null || _a === void 0 ? void 0 : _a.language,
                        response: result.response
                    });
                    return [2 /*return*/, response];
            }
        });
    }); };
};
exports.buildHandler = buildHandler;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
var config = {
    DATABASE_URL: (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : '',
    IS_PRODUCTION: "development" === 'production',
    IS_TEST: "development" === 'test',
    IS_LOCAL: "development" === 'development',
    JWT_SECRET: (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : '5ce5ecba-608a-4561-932a-05e25b86f672'
};
exports.config = config;


/***/ }),

/***/ "./src/handlers/aulas/aulaService.ts":
/*!*******************************************!*\
  !*** ./src/handlers/aulas/aulaService.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveProgress = exports.updateAula = exports.listAulas = exports.getAula = exports.deleteAula = exports.createAula = exports.main = void 0;
var saveProgress_1 = __webpack_require__(/*! ./saveProgress */ "./src/handlers/aulas/saveProgress.ts"); // Importe o novo handler
var auth_1 = __webpack_require__(/*! @/lib/auth */ "./lib/auth.ts"); // Importe o módulo de autenticação
var router_1 = __webpack_require__(/*! @/lib/router */ "./lib/router.ts");
var createAula_1 = __webpack_require__(/*! ./createAula */ "./src/handlers/aulas/createAula.ts");
var deleteAula_1 = __webpack_require__(/*! ./deleteAula */ "./src/handlers/aulas/deleteAula.ts");
var getAula_1 = __webpack_require__(/*! ./getAula */ "./src/handlers/aulas/getAula.ts");
var listAulas_1 = __webpack_require__(/*! ./listAulas */ "./src/handlers/aulas/listAulas.ts");
var updateAula_1 = __webpack_require__(/*! ./updateAula */ "./src/handlers/aulas/updateAula.ts");
var router = (0, router_1.buildRouter)();
router.post('/aulas', auth_1.auth.verifyLogged(createAula_1.createAulaHandler));
router.get('/aulas/{aulaId}', auth_1.auth.verifyLogged(getAula_1.getAulaHandler));
router.put('/aulas', auth_1.auth.verifyLogged(updateAula_1.updateAulaHandler));
router.get('/aulas', auth_1.auth.verifyLogged(listAulas_1.listAulasHandler));
router.delete('/aulas/{aulaId}', auth_1.auth.verifyLogged(deleteAula_1.deleteAulaHandler));
// Adicione a nova rota para salvar progresso
router.post('/aulas/{aulaId}/mine', auth_1.auth.verifyLogged(saveProgress_1.saveProgressHandler));
var main = (0, router_1.buildHandler)(router);
exports.main = main;
var aulaModel_1 = __webpack_require__(/*! @/models/aulaModel */ "./src/models/aulaModel.ts");
var createAula = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var novaAula;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, aulaModel_1.Aula.create(data)];
            case 1:
                novaAula = _a.sent();
                return [2 /*return*/, novaAula];
        }
    });
}); };
exports.createAula = createAula;
var deleteAula = function (aulaId) { return __awaiter(void 0, void 0, void 0, function () {
    var aulaExcluida;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, aulaModel_1.Aula.findByIdAndDelete(aulaId)];
            case 1:
                aulaExcluida = _a.sent();
                return [2 /*return*/, aulaExcluida];
        }
    });
}); };
exports.deleteAula = deleteAula;
var getAula = function (aulaId) { return __awaiter(void 0, void 0, void 0, function () {
    var aula;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, aulaModel_1.Aula.findById(aulaId)];
            case 1:
                aula = _a.sent();
                return [2 /*return*/, aula];
        }
    });
}); };
exports.getAula = getAula;
var listAulas = function (filtro) {
    if (filtro === void 0) { filtro = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var query, aulas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = {};
                    if (filtro.titulo) {
                        query.titulo = { $regex: filtro.titulo, $options: 'i' };
                    }
                    if (filtro.descricao) {
                        query.descricao = { $regex: filtro.descricao, $options: 'i' };
                    }
                    if (filtro.temVideo !== undefined) {
                        query.urlVideo = { $exists: filtro.temVideo };
                    }
                    return [4 /*yield*/, aulaModel_1.Aula.find(query)];
                case 1:
                    aulas = _a.sent();
                    return [2 /*return*/, aulas];
            }
        });
    });
};
exports.listAulas = listAulas;
var updateAula = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var aulaId, atualizacoes, aulaAtualizada;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                aulaId = data.aulaId, atualizacoes = __rest(data, ["aulaId"]);
                return [4 /*yield*/, aulaModel_1.Aula.findByIdAndUpdate(aulaId, { $set: atualizacoes }, { new: true })];
            case 1:
                aulaAtualizada = _a.sent();
                return [2 /*return*/, aulaAtualizada];
        }
    });
}); };
exports.updateAula = updateAula;
var saveProgress = function (aulaId, progress, performance) { return __awaiter(void 0, void 0, void 0, function () {
    var aula;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, aulaModel_1.Aula.findById(aulaId)];
            case 1:
                aula = _a.sent();
                if (!aula) {
                    throw new Error('Aula não encontrada');
                }
                aula.progress = progress;
                aula.performance = performance;
                return [4 /*yield*/, aula.save()];
            case 2:
                _a.sent();
                return [2 /*return*/, aula];
        }
    });
}); };
exports.saveProgress = saveProgress;


/***/ }),

/***/ "./src/handlers/aulas/createAula.ts":
/*!******************************************!*\
  !*** ./src/handlers/aulas/createAula.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createAulaHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var createAulaHandler = function (_a) {
    var body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var aula, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, aulaService_1.createAula)(body)];
                case 1:
                    aula = _b.sent();
                    return [2 /*return*/, { aula: aula }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.createAulaHandler = createAulaHandler;


/***/ }),

/***/ "./src/handlers/aulas/deleteAula.ts":
/*!******************************************!*\
  !*** ./src/handlers/aulas/deleteAula.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteAulaHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var deleteAulaHandler = function (_a) {
    var pathParameters = _a.pathParameters;
    return __awaiter(void 0, void 0, void 0, function () {
        var aulaId, aulaExcluida, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    aulaId = pathParameters.aulaId;
                    return [4 /*yield*/, (0, aulaService_1.deleteAula)(aulaId)];
                case 1:
                    aulaExcluida = _b.sent();
                    return [2 /*return*/, { message: 'Aula excluída com sucesso' }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.deleteAulaHandler = deleteAulaHandler;


/***/ }),

/***/ "./src/handlers/aulas/getAula.ts":
/*!***************************************!*\
  !*** ./src/handlers/aulas/getAula.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAulaHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var getAulaHandler = function (_a) {
    var pathParameters = _a.pathParameters;
    return __awaiter(void 0, void 0, void 0, function () {
        var aulaId, aula, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    aulaId = pathParameters.aulaId;
                    return [4 /*yield*/, (0, aulaService_1.getAula)(aulaId)];
                case 1:
                    aula = _b.sent();
                    return [2 /*return*/, { aula: aula }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.getAulaHandler = getAulaHandler;


/***/ }),

/***/ "./src/handlers/aulas/listAulas.ts":
/*!*****************************************!*\
  !*** ./src/handlers/aulas/listAulas.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.listAulasHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var listAulasHandler = function (_a) {
    var queryStringParameters = _a.queryStringParameters;
    return __awaiter(void 0, void 0, void 0, function () {
        var filtro, aulas, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    filtro = queryStringParameters || {};
                    return [4 /*yield*/, (0, aulaService_1.listAulas)(filtro)];
                case 1:
                    aulas = _b.sent();
                    return [2 /*return*/, { aulas: aulas }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.listAulasHandler = listAulasHandler;
// import { listAulas } from './aulaService';
// const listAulasHandler = async () => {
//   try {
//     const aulas = await listAulas();
//     return { aulas };
//   } catch (error) {
//     return { error: error.message };
//   }
// };
// export { listAulasHandler };


/***/ }),

/***/ "./src/handlers/aulas/saveProgress.ts":
/*!********************************************!*\
  !*** ./src/handlers/aulas/saveProgress.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saveProgressHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var saveProgressHandler = function (_a) {
    var pathParameters = _a.pathParameters, body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var aulaId, progress, performance, aulaAtual, aula, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    aulaId = pathParameters.aulaId;
                    progress = body.progress, performance = body.performance;
                    // Verifique se aulaId, progress e performance estão presentes
                    if (!aulaId || !progress || !performance) {
                        throw new Error('Parâmetros inválidos');
                    }
                    return [4 /*yield*/, (0, aulaService_1.getAula)(aulaId)];
                case 1:
                    aulaAtual = _b.sent();
                    // Verifique se a aula não é nula e se já está finalizada
                    if (aulaAtual !== null && aulaAtual.progress === 100) {
                        throw new Error('Aula já finalizada, não é possível atualizar o progresso.');
                    }
                    return [4 /*yield*/, (0, aulaService_1.saveProgress)(aulaId, progress, performance)];
                case 2:
                    aula = _b.sent();
                    return [2 /*return*/, { aula: aula }];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.saveProgressHandler = saveProgressHandler;


/***/ }),

/***/ "./src/handlers/aulas/updateAula.ts":
/*!******************************************!*\
  !*** ./src/handlers/aulas/updateAula.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateAulaHandler = void 0;
var aulaService_1 = __webpack_require__(/*! ./aulaService */ "./src/handlers/aulas/aulaService.ts");
var updateAulaHandler = function (_a) {
    var body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var aulaAtualizada, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, aulaService_1.updateAula)(body)];
                case 1:
                    aulaAtualizada = _b.sent();
                    return [2 /*return*/, { aula: aulaAtualizada }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1.message }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.updateAulaHandler = updateAulaHandler;


/***/ }),

/***/ "./src/handlers/user/userErrors.ts":
/*!*****************************************!*\
  !*** ./src/handlers/user/userErrors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userErrors = void 0;
var ErrorTypesEnum_1 = __webpack_require__(/*! @/types/ErrorTypesEnum */ "./src/types/ErrorTypesEnum.ts");
var error_1 = __webpack_require__(/*! @/lib/error */ "./lib/error.ts");
var uniqueEmailError = function (email) {
    return error_1.error.build({
        message: "O email ".concat(email, " j\u00E1 existe"),
        statusCode: 422,
        type: ErrorTypesEnum_1.ErrorTypesEnum.EMAIL_ALREADY_EXISTS
    });
};
var buildUserNotFoundError = function (user) {
    return error_1.error.build({
        message: "Usu\u00E1rio ".concat(user, " n\u00E3o encontrado!"),
        statusCode: 412,
        type: ErrorTypesEnum_1.ErrorTypesEnum.USER_NOT_FOUND
    });
};
var buildEmailNotInformedError = function () {
    return error_1.error.build({
        message: 'O email não foi informado!',
        statusCode: 422,
        type: ErrorTypesEnum_1.ErrorTypesEnum.EMAIL_NOT_INFORMED
    });
};
var buildWrongPasswordError = function () { return error_1.error.build({
    message: 'Senha incorreta!',
    statusCode: 412,
    type: ErrorTypesEnum_1.ErrorTypesEnum.WRONG_PASSWORD
}); };
var buildPasswordNotInformedError = function () { return error_1.error.build({
    message: 'Senha não informada!',
    statusCode: 422,
    type: ErrorTypesEnum_1.ErrorTypesEnum.PASSWORD_NOT_INFORMED
}); };
var userErrors = {
    uniqueEmailError: uniqueEmailError,
    buildUserNotFoundError: buildUserNotFoundError,
    buildPasswordNotInformedError: buildPasswordNotInformedError,
    buildWrongPasswordError: buildWrongPasswordError,
    buildEmailNotInformedError: buildEmailNotInformedError
};
exports.userErrors = userErrors;


/***/ }),

/***/ "./src/handlers/user/userService.ts":
/*!******************************************!*\
  !*** ./src/handlers/user/userService.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userService = void 0;
var hash_1 = __webpack_require__(/*! @/lib/hash */ "./lib/hash.ts");
var jwt_1 = __webpack_require__(/*! @/lib/jwt */ "./lib/jwt.ts");
var userModel_1 = __webpack_require__(/*! @/models/userModel */ "./src/models/userModel.ts");
var userErrors_1 = __webpack_require__(/*! ./userErrors */ "./src/handlers/user/userErrors.ts");
var nanoid_1 = __webpack_require__(/*! nanoid */ "nanoid");
var create = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var passHash, email, user, userDb;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                passHash = hash_1.hash.encode(data.password);
                email = data === null || data === void 0 ? void 0 : data.email;
                return [4 /*yield*/, findByEmail(email)];
            case 1:
                if (_a.sent()) {
                    throw userErrors_1.userErrors.uniqueEmailError(email);
                }
                return [4 /*yield*/, userModel_1.User.create(__assign(__assign({}, data), { password: passHash }))];
            case 2:
                user = _a.sent();
                userDb = user.toObject();
                return [2 /*return*/, userDb];
        }
    });
}); };
var findByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userModel_1.User.findOne({
                    email: email
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var findById = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userModel_1.User.findById(userId)];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw userErrors_1.userErrors.buildUserNotFoundError(userId);
                }
                return [2 /*return*/, user];
        }
    });
}); };
var createToken = function (userId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, jwt_1.jwt.create({ user_id: userId })];
}); }); };
var userService = {
    create: create,
    findById: findById,
    createToken: createToken,
    findByEmail: findByEmail,
    customAlphabet: nanoid_1.customAlphabet
};
exports.userService = userService;


/***/ }),

/***/ "./src/models/aulaModel.ts":
/*!*********************************!*\
  !*** ./src/models/aulaModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Aula = void 0;
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var aulaSchema = new mongoose_1.Schema({
    titulo: {
        type: String,
        required: [true, 'Título é obrigatório'],
    },
    descricao: {
        type: String,
    },
    urlCapa: {
        type: String,
        required: [true, 'URL da capa é obrigatória'],
    },
    urlVideo: {
        type: String,
        required: [true, 'URL do vídeo é obrigatória'],
    },
    urlArquivoComplementar: {
        type: String,
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
    performance: {
        type: Number,
        default: 0,
        min: 0,
        max: 100,
    },
});
exports.Aula = (0, mongoose_1.model)('Aula', aulaSchema);
// // aulaModel.ts
// import { Schema, model } from 'mongoose';
// const aulaSchema = new Schema({
//   titulo: {
//     type: String,
//     required: [true, 'Título é obrigatório'],
//   },
//   descricao: {
//     type: String,
//   },
//   urlCapa: {
//     type: String,
//     required: [true, 'URL da capa é obrigatória'],
//   },
//   urlVideo: {
//     type: String,
//     required: [true, 'URL do vídeo é obrigatória'],
//   },
//   urlArquivoComplementar: {
//     type: String,
//   },
// });
// export const Aula = model('Aula', aulaSchema);


/***/ }),

/***/ "./src/models/userModel.ts":
/*!*********************************!*\
  !*** ./src/models/userModel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
var TableEnum_1 = __webpack_require__(/*! @/types/TableEnum */ "./src/types/TableEnum.ts");
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var validator_1 = __webpack_require__(/*! validator */ "validator");
var mongooseErrorValidator_1 = __webpack_require__(/*! @/lib/mongooseErrorValidator */ "./lib/mongooseErrorValidator.ts");
var UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'name']
    },
    email: {
        type: String,
        unique: true,
        validate: [validator_1.isEmail, '{VALUE} não é um email válido'],
        sparse: true,
        index: true
    },
    password: {
        type: String,
        required: [true, 'password'],
        index: true
    },
    photo: String
}, {
    timestamps: true
});
(0, mongooseErrorValidator_1.mongooseErrorValidator)(UserSchema);
var User = mongoose_1.models.users || (0, mongoose_1.model)(TableEnum_1.CollectionsEnum.Users, UserSchema, TableEnum_1.CollectionsEnum.Users);
exports.User = User;


/***/ }),

/***/ "./src/types/ErrorTypesEnum.ts":
/*!*************************************!*\
  !*** ./src/types/ErrorTypesEnum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorTypesEnum = void 0;
var ErrorTypesEnum;
(function (ErrorTypesEnum) {
    ErrorTypesEnum["USER_CONTRACT_ALREADY_EXISTS"] = "USER_CONTRACT_ALREADY_EXISTS";
    ErrorTypesEnum["RENT_TRANSACTION_NOT_FOUND"] = "RENT_TRANSACTION_NOT_FOUND";
    ErrorTypesEnum["ALREADY_PAID_THE_RENT"] = "ALREADY_PAID_THE_RENT";
    ErrorTypesEnum["RD_STATION_RESPONSE"] = "RD_STATION_RESPONSE";
    ErrorTypesEnum["AXIOS_SETUP"] = "AXIOS_SETUP";
    ErrorTypesEnum["CANT_ACCEPT_QUERY"] = "CANT_ACCEPT_QUERY";
    ErrorTypesEnum["CANT_ACCEPT_ORIGIN"] = "CANT_ACCEPT_ORIGIN";
    ErrorTypesEnum["INVALID_SCHEMA"] = "INVALID_SCHEMA";
    ErrorTypesEnum["INVALID_UPDATE_INPUT"] = "INVALID_UPDATE_INPUT";
    ErrorTypesEnum["EMAIL_ALREADY_EXISTS"] = "EMAIL_ALREADY_EXISTS";
    ErrorTypesEnum["ORGANIZATION_ALREADY_EXISTS"] = "ORGANIZATION_ALREADY_EXISTS";
    ErrorTypesEnum["UNKNOWN"] = "UNKNOWN";
    ErrorTypesEnum["USER_NOT_FOUND"] = "USER_NOT_FOUND";
    ErrorTypesEnum["INVALID_PASSWORD_OR_EMAIL"] = "INVALID_PASSWORD_OR_EMAIL";
    ErrorTypesEnum["NOT_AUTHORIZED"] = "NOT_AUTHORIZED";
    ErrorTypesEnum["EMPTY_PASSWORD"] = "EMPTY_PASSWORD";
    ErrorTypesEnum["PASSWORD_EQUAL_TO_PREVIUS"] = "PASSWORD_EQUAL_TO_PREVIUS";
    ErrorTypesEnum["PREVIOUS_PASSWORD_NOT_MATCH"] = "PREVIOUS_PASSWORD_NOT_MATCH";
    ErrorTypesEnum["SOCKET_CONNECTION_NOT_FOUND"] = "SOCKET_CONNECTION_NOT_FOUND";
    ErrorTypesEnum["USER_SOCKET_CONNECTION_NOT_FOUND"] = "USER_SOCKET_CONNECTION_NOT_FOUND";
    ErrorTypesEnum["ITEM_NOT_FOUND"] = "ITEM_NOT_FOUND";
    ErrorTypesEnum["LOG_NOT_FOUND"] = "LOG_NOT_FOUND";
    ErrorTypesEnum["PARTNER_NOT_FOUND"] = "PARTNER_NOT_FOUND";
    ErrorTypesEnum["CONTRACT_NOT_FOUND"] = "CONTRACT_NOT_FOUND";
    ErrorTypesEnum["ORGANIZATION_NOT_FOUND"] = "ORGANIZATION_NOT_FOUND";
    ErrorTypesEnum["TERRITORY_NOT_FOUND"] = "TERRITORY_NOT_FOUND";
    ErrorTypesEnum["ORGANIZATION_UPDATE_NOT_POSSIBLE"] = "ORGANIZATION_UPDATE_NOT_POSSIBLE";
    ErrorTypesEnum["HELP_NOT_FOUND"] = "HELP_NOT_FOUND";
    ErrorTypesEnum["SYSTEM_PROFILE_ACCESS_NOT_FOUND"] = "SYSTEM_PROFILE_ACCESS_NOT_FOUND";
    ErrorTypesEnum["TIP_NOT_FOUND"] = "TIP_NOT_FOUND";
    ErrorTypesEnum["CONTRACT_UPDATE_NOT_POSSIBLE"] = "CONTRACT_UPDATE_NOT_POSSIBLE";
    ErrorTypesEnum["SYSTEM_MODULE_NOT_FOUND"] = "SYSTEM_MODULE_NOT_FOUND";
    ErrorTypesEnum["USER_ITEM_NOT_FOUND"] = "USER_ITEM_NOT_FOUND";
    ErrorTypesEnum["TEAM_NOT_FOUND"] = "TEAM_NOT_FOUND";
    ErrorTypesEnum["GUEST_CODE_NOT_FOUND"] = "GUEST_CODE_NOT_FOUND";
    ErrorTypesEnum["TEAM_UPDATE_NOT_POSSIBLE"] = "CONTRACT_UPDATE_NOT_POSSIBLE";
    ErrorTypesEnum["INSUFFICIENT_CREDIT"] = "INSUFFICIENT_CREDIT";
    ErrorTypesEnum["GUEST_LINK_NOT_ALLOWED"] = "GUEST_LINK_NOT_ALLOWED";
    ErrorTypesEnum["GUEST_USER_FIELDS_MISSING"] = "GUEST_USER_FIELDS_MISSING";
    ErrorTypesEnum["AVATAR_ITEM_NOT_FOUND"] = "AVATAR_ITEM_NOT_FOUND";
    ErrorTypesEnum["ITEM_NOT_PURCHASED"] = "ITEM_NOT_PURCHASED";
    ErrorTypesEnum["AVATAR_TYPE_NOT_FOUND"] = "AVATAR_TYPE_NOT_FOUND";
    ErrorTypesEnum["GENDER_NOT_GIVEN"] = "GENDER_NOT_GIVEN";
    ErrorTypesEnum["ITEMS_IDS_CANNOT_BE_EMPTY"] = "ITEMS_IDS_CANNOT_BE_EMPTY";
    ErrorTypesEnum["TERRITORY_ITEM_NOT_FOUND"] = "TERRITORY_ITEM_NOT_FOUND";
    ErrorTypesEnum["CLASS_ITEM_NOT_FOUND"] = "CLASS_ITEM_NOT_FOUND";
    ErrorTypesEnum["CERTIFICATE_VALUE_NOT_ALLOWED"] = "CERTIFICATE_VALUE_NOT_ALLOWED";
    ErrorTypesEnum["CLASS_NOTE_NOT_FOUND"] = "CLASS_NOT_FOUND";
    ErrorTypesEnum["CLASS_NOTE_NOT_FROM_USER"] = "CLASS_NOTE_NOT_FROM_USER";
    ErrorTypesEnum["CLASS_NOT_FOUND"] = "CLASS_NOT_FOUND";
    ErrorTypesEnum["COURSE_NOT_FOUND"] = "COURSE_NOT_FOUND";
    ErrorTypesEnum["USER_TERRITORY_NOT_FOUND"] = "USER_TERRITORY_NOT_FOUND";
    ErrorTypesEnum["USER_TERRITORY_BASE_NOT_FOUND"] = "USER_TERRITORY_BASE_NOT_FOUND";
    ErrorTypesEnum["USER_NOTE_NOT_FOUND"] = "USER_NOTE_NOT_FOUND";
    ErrorTypesEnum["INVALID_USER_NOTE"] = "INVALID_USER_NOTE";
    ErrorTypesEnum["JORNAL_NOT_FOUND"] = "JORNAL_NOT_FOUND";
    ErrorTypesEnum["CLASS_COMMENT_NOT_FOUND"] = "CLASS_COMMENT_NOT_FOUND";
    ErrorTypesEnum["REMOVE_CLASS_COMMENT_NOT_ALLOWED"] = "REMOVE_CLASS_COMMENT_NOT_ALLOWED";
    ErrorTypesEnum["UPDATE_CLASS_COMMENT_NOT_ALLOWED"] = "UPDATE_CLASS_COMMENT_NOT_ALLOWED";
    ErrorTypesEnum["CLASS_PLAN_NOT_FROM_USER"] = "CLASS_PLAN_NOT_FROM_USER";
    ErrorTypesEnum["CLASS_PLAN_NOT_FOUND"] = "CLASS_PLAN_NOT_FOUND";
    ErrorTypesEnum["CLASS_PLAN_MARKETPLACE_TRUE"] = "CLASS_PLAN_MARKETPLACE_TRUE";
    ErrorTypesEnum["QUIZ_NOT_FOUND"] = "QUIZ_NOT_FOUND";
    ErrorTypesEnum["CLASS_ITEM_TASK_NOT_FOUND"] = "CLASS_ITEM_TASK_NOT_FOUND";
    ErrorTypesEnum["PLAYER_NOT_FOUND"] = "PLAYER_NOT_FOUND";
    ErrorTypesEnum["CLASS_ITEM_RESPONSE_NOT_FOUND"] = "CLASS_ITEM_RESPONSE_NOT_FOUND";
    ErrorTypesEnum["MESSAGE_NOT_FOUND"] = "MESSAGE_NOT_FOUND";
    ErrorTypesEnum["MESSAGE_WAS_ALREADY_READ"] = "MESSAGE_WAS_ALREADY_READ";
    ErrorTypesEnum["MESSAGE_NOT_FROM_USER"] = "MESSAGE_NOT_FROM_USER";
    ErrorTypesEnum["CODE_ALREADY_EXISTS"] = "CODE_ALREADY_EXISTS";
    ErrorTypesEnum["TERRITORY_TEAM_NOT_SPECIFIED"] = "TERRITORY_TEAM_NOT_SPECIFIED";
    ErrorTypesEnum["FREE_BACKPACK_NOT_FOUND"] = "FREE_BACKPACK_NOT_FOUND";
    ErrorTypesEnum["CODE_OR_EMAIL_NOT_INFORMED"] = "CODE_OR_EMAIL_NOT_INFORMED";
    ErrorTypesEnum["REQUEST_FORGOTTEN_PASSWORD_NOT_ALLOWED"] = "REQUEST_FORGOTTEN_PASSWORD_NOT_ALLOWED";
    ErrorTypesEnum["ONLY_CODE_OR_EMAIL_ALLOWED"] = "ONLY_CODE_OR_EMAIL_ALLOWED";
    ErrorTypesEnum["NEW_PASSWORD_MATCH_PREVIOUS"] = "NEW_PASSWORD_MATCH_PREVIOUS";
    ErrorTypesEnum["PASSWORD_NOT_INFORMED"] = "PASSWORD_NOT_INFORMED";
    ErrorTypesEnum["WRONG_PASSWORD"] = "WRONG_PASSWORD";
    ErrorTypesEnum["STORAGE_ITEM_TYPE_OR_CATEGORY_INVALID"] = "STORAGE_ITEM_TYPE_OR_CATEGORY_INVALID";
    ErrorTypesEnum["MISSION_NOT_FOUND"] = "MISSION_NOT_FOUND";
    ErrorTypesEnum["MODULE_NOT_FOUND"] = "MODULE_NOT_FOUND";
    ErrorTypesEnum["USER_NOT_LOGGED_IN_A_TERRITORY"] = "USER_NOT_LOGGED_IN_A_TERRITORY";
    ErrorTypesEnum["STORAGE_ITEM_NOT_AVAILABLE_SPACE"] = "STORAGE_ITEM_NOT_AVAILABLE_SPACE";
    ErrorTypesEnum["ACTION_NOT_FOUND"] = "ACTION_NOT_FOUND";
    ErrorTypesEnum["TASK_ANSWER_NOT_FOUND"] = "TASK_ANSWER_NOT_FOUND";
    ErrorTypesEnum["INSUFICCIENT_XP_AMOUNT"] = "INSUFICCIENT_XP_AMOUNT";
    ErrorTypesEnum["BUY_TIP_NOT_POSSIBLE"] = "BUY_TIP_NOT_POSSIBLE";
    ErrorTypesEnum["INVALID_USER_MISSION"] = "INVALID_USER_MISSION";
    ErrorTypesEnum["ACTION_HAS_NO_TIPS"] = "ACTION_HAS_NO_TIPS";
    ErrorTypesEnum["INTERACT_ACTION_NOT_FOUND"] = "INTERACT_ACTION_NOT_FOUND";
    ErrorTypesEnum["FIRST_ACTION_NOT_FOUND"] = "FIRST_ACTION_NOT_FOUND";
    ErrorTypesEnum["HIDDEN_ITEM_NOT_FOUND"] = "HIDDEN_ITEM_NOT_FOUND";
    ErrorTypesEnum["REQUIRED_ITEMS_NOT_FOUND"] = "REQUIRED_ITEMS_NOT_FOUND";
    ErrorTypesEnum["INSUFFICIENT_VALUE"] = "INSUFFICIENT_VALUE";
    ErrorTypesEnum["COURSE_MODULE_NOT_FOUND"] = "COURSE_MODULE_NOT_FOUND";
    ErrorTypesEnum["JOB_NOT_FOUND"] = "JOB_NOT_FOUND";
    ErrorTypesEnum["JOB_NOT_AVAILABLE_VACANCIES"] = "JOB_NOT_AVAILABLE_VACANCIES";
    ErrorTypesEnum["NOT_ENOUGH_CERTIFICATES"] = "NOT_ENOUGH_CERTIFICATES";
    ErrorTypesEnum["TEAM_MEET_INITIAL_NOT_ENABLED"] = "TEAM_MEET_INITIAL_NOT_ENABLED";
    ErrorTypesEnum["ITEM_MEET_INITIAL_NOT_ENABLED"] = "ITEM_MEET_INITIAL_NOT_ENABLED";
    ErrorTypesEnum["MEET_NOT_POSSIBLE"] = "MEET_NOT_POSSIBLE";
    ErrorTypesEnum["MEET_NOT_FOUND"] = "MEET_NOT_FOUND";
    ErrorTypesEnum["DEPENDENCY_FAILED"] = "DEPENDENCY_FAILED";
    ErrorTypesEnum["NOT_AVAILABLE_TO_RENT"] = "NOT_AVAILABLE_TO_RENT";
    ErrorTypesEnum["USER_HAS_OPEN_RENT_CONTRACT"] = "USER_HAS_OPEN_RENT_CONTRACT";
    ErrorTypesEnum["RESIDENCE_NOT_FOUND"] = "RESIDENCE_NOT_FOUND";
    ErrorTypesEnum["USER_RESIDENCE_NOT_FOUND"] = "USER_RESIDENCE_NOT_FOUND";
    ErrorTypesEnum["ACTION_TASK_NOT_FOUND"] = "ACTION_TASK_NOT_FOUND";
    ErrorTypesEnum["PRIMARY_TERRITORY_NOT_FOUND"] = "PRIMARY_TERRITORY_NOT_FOUND";
    ErrorTypesEnum["REWARD_NOT_FOUND"] = "REWARD_NOT_FOUND";
    ErrorTypesEnum["INVALID_ACTION_MINE"] = "INVALID_ACTION_MINE";
    ErrorTypesEnum["USER_PYRAMID_NOT_FOUND"] = "USER_PYRAMID_NOT_FOUND";
    ErrorTypesEnum["PYRAMID_NEEDS_NOT_FOUND_BY_KEYCODE"] = "PYRAMID_NEEDS_NOT_FOUND_BY_KEYCODE";
    ErrorTypesEnum["PYRAMID_NEEDS_NOT_FOUND_BY_ID"] = "PYRAMID_NEEDS_NOT_FOUND_BY_ID";
    ErrorTypesEnum["DAY_NOT_INFORMED"] = "DAY_NOT_INFORMED";
    ErrorTypesEnum["REDEEM_NOT_POSSIBLE"] = "REDEEM_NOT_POSSIBLE";
    ErrorTypesEnum["MUST_CONFIRM_EMAIL"] = "MUST_CONFIRM_EMAIL";
    ErrorTypesEnum["EMAIL_NOT_INFORMED"] = "EMAIL_NOT_INFORMED";
    ErrorTypesEnum["KINSHIP_PROPS_NOT_INFORMED"] = "KINSHIP_PROPS_NOT_INFORMED";
    ErrorTypesEnum["BIRTH_DATE_NOT_INFORMED"] = "BIRTH_DATE_NOT_INFORMED";
    ErrorTypesEnum["PERSONAL_EMAIL_MATCHES_KINSHIP_EMAIL"] = "PERSONAL_EMAIL_MATCHES_KINSHIP_EMAIL";
    ErrorTypesEnum["ACCOUNT_VALIDATION_CODE_NOT_MATCH_USER_CODE"] = "ACCOUNT_VALIDATION_CODE_NOT_MATCH_USER_CODE";
    ErrorTypesEnum["RESEND_CONFIRMATION_EMAIL_NOT_ALLOWED"] = "RESEND_CONFIRMATION_EMAIL_NOT_ALLOWED";
    ErrorTypesEnum["GAME_NOT_FOUND"] = "GAME_NOT_FOUND";
    ErrorTypesEnum["GAME_NOT_SET"] = "GAME_NOT_SET";
    ErrorTypesEnum["ITEM_NOT_CONSUMABLE"] = "ITEM_NOT_CONSUMABLE";
    ErrorTypesEnum["CONSUMABLE_ITEM_HAS_NO_PYRAMID_KEYCODE"] = "CONSUMABLE_ITEM_HAS_NO_PYRAMID_KEYCODE";
    ErrorTypesEnum["GAME_SESSION_NOT_FOUND"] = "GAME_SESSION_NOT_FOUND";
    ErrorTypesEnum["CHANNEL_NOT_FOUND"] = "CHANNEL_NOT_FOUND";
    ErrorTypesEnum["USER_OWNER_REQUIRED_IN_PRIVATE_CHANNEL"] = "USER_OWNER_REQUIRED_IN_PRIVATE_CHANNEL";
    ErrorTypesEnum["TEAM_DONT_HAVE_ACCESS_TO_TERRITORY"] = "TEAM_DONT_HAVE_ACCESS_TO_TERRITORY";
    ErrorTypesEnum["USER_NOT_CHANNEL_MEMBER"] = "USER_NOT_CHANNEL_MEMBER";
    ErrorTypesEnum["MESSAGE_MUST_HAVE_ONLY_ONE_RECEIVER_ENTITY"] = "MESSAGE_MUST_HAVE_ONLY_ONE_RECEIVER_ENTITY";
    ErrorTypesEnum["USER_DONT_HAVE_ACCESS_TO_MODULE"] = "USER_DONT_HAVE_ACCESS_TO_MODULE";
    ErrorTypesEnum["INVALID_BOARD_EXCHANGE"] = "INVALID_BOARD_EXCHANGE";
    ErrorTypesEnum["ITEM_NOT_BOARD"] = "ITEM_NOT_BOARD";
    ErrorTypesEnum["CARD_NOT_FOUND"] = "CARD_NOT_FOUND";
    ErrorTypesEnum["BOARD_NOT_FOUND"] = "BOARD_NOT_FOUND";
    ErrorTypesEnum["LABEL_NOT_FOUND"] = "LABEL_NOT_FOUND";
    ErrorTypesEnum["LABEL_NOT_ON_CARD"] = "LABEL_NOT_ON_CARD";
    ErrorTypesEnum["LABEL_ON_CARD_ALREADY"] = "LABEL_ON_CARD_ALREADY";
    ErrorTypesEnum["USER_NOT_ON_CARD"] = "USER_NOT_ON_CARD";
    ErrorTypesEnum["USER_ON_CARD_ALREADY"] = "USER_ON_CARD_ALREADY";
    ErrorTypesEnum["ATTACHMENT_TYPE_INVALID"] = "ATTACHMENT_TYPE_INVALID";
    ErrorTypesEnum["CARD_ATTACHMENT_NOT_FOUND"] = "CARD_ATTACHMENT_NOT_FOUND";
    ErrorTypesEnum["CARD_ATTACHMENT_ALREADY_ATTACHED"] = "CARD_ATTACHMENT_ALREADY_ATTACHED";
    ErrorTypesEnum["CARD_COMMENT_NOT_FOUND"] = "CARD_COMMENT_NOT_FOUND";
    ErrorTypesEnum["USER_IS_NOT_CARD_COMMENT_AUTHOR"] = "USER_IS_NOT_CARD_COMMENT_AUTHOR";
    ErrorTypesEnum["NPC_NOT_FOUND"] = "NPC_NOT_FOUND";
    ErrorTypesEnum["CARD_CHECKLIST_NOT_FOUND"] = "CARD_CHECKLIST_NOT_FOUND";
    ErrorTypesEnum["CARD_CHECKLIST_ITEM_NOT_FOUND"] = "CARD_CHECKLIST_ITEM_NOT_FOUND";
    ErrorTypesEnum["ITEMS_IN_CARD_NOT_FOUND"] = "ITEMS_IN_CARD_NOT_FOUND";
    ErrorTypesEnum["INVALID_POSITION"] = "INVALID_POSITION";
    ErrorTypesEnum["INVALID_DIRECTION"] = "INVALID_DIRECTION";
    ErrorTypesEnum["CARD_SESSION_ALREADY_OPEN"] = "CARD_SESSION_ALREADY_OPEN";
    ErrorTypesEnum["CARD_SESSION_NOT_OPEN"] = "CARD_SESSION_NOT_OPEN";
    ErrorTypesEnum["USER_NOT_SESSION_OWNER"] = "USER_NOT_SESSION_OWNER";
    ErrorTypesEnum["USER_IN_SESSION_ALREADY"] = "USER_IN_SESSION_ALREADY";
    ErrorTypesEnum["ACCEPT_CARD_SESSION_INVITE_NOT_ALLOWED"] = "ACCEPT_CARD_SESSION_INVITE_NOT_ALLOWED";
    ErrorTypesEnum["USER_NOT_SESSION_MEMBER"] = "USER_NOT_SESSION_MEMBER";
    ErrorTypesEnum["APP_NOT_FOUND"] = "APP_NOT_FOUND";
    ErrorTypesEnum["ORGANIZATION_TYPE_NOT_FOUND"] = "ORGANIZATION_TYPE_NOT_FOUND";
    ErrorTypesEnum["USER_NOT_ALLOWED_TO_REMOVE_CARD_CONSUMED_HISTORY"] = "USER_NOT_ALLOWED_TO_REMOVE_CARD_CONSUMED_HISTORY";
    ErrorTypesEnum["CARD_CONSUMED_HISTORY_NOT_FOUND"] = "CARD_CONSUMED_HISTORY_NOT_FOUND";
    ErrorTypesEnum["GROUP_NOT_FOUND"] = "GROUP_NOT_FOUND";
    ErrorTypesEnum["USER_ALREADY_GROUP_MEMBER"] = "USER_ALREADY_GROUP_MEMBER";
    ErrorTypesEnum["USER_NOT_GROUP_MEMBER"] = "USER_NOT_GROUP_MEMBER";
    ErrorTypesEnum["CONTENT_CATEGORY_NOT_FOUND"] = "CONTENT_CATEGORY_NOT_FOUND";
    ErrorTypesEnum["USER_NOT_INVITED_TO_MEET"] = "USER_NOT_INVITED_TO_MEET";
    ErrorTypesEnum["PEER_ID_NOT_INFORMED"] = "PEER_ID_NOT_INFORMED";
    ErrorTypesEnum["INVALID_RESIDENCE_TERRITORY"] = "INVALID_RESIDENCE_TERRITORY";
    ErrorTypesEnum["USER_PROFESSIONAL_NOT_FOUND"] = "USER_PROFESSIONAL_NOT_FOUND";
    ErrorTypesEnum["HISTORY_WORK_RECORD_NOT_FOUND"] = "HISTORY_WORK_RECORD_NOT_FOUND";
    ErrorTypesEnum["NO_POINT_RECORD_FOUND"] = "NO_POINT_RECORD_FOUND";
    ErrorTypesEnum["INVALID_LAST_EVENT"] = "INVALID_LAST_EVENT";
    ErrorTypesEnum["INSUFFICIENT_BALANCE"] = "INSUFFICIENT_BALANCE";
    ErrorTypesEnum["INVALID_VALUE"] = "INVALID_VALUE";
    ErrorTypesEnum["USER_WALLET_NOT_FOUND"] = "USER_WALLET_NOT_FOUND";
    ErrorTypesEnum["INVALID_USER_TO_TRANSFER_CREDITS"] = "INVALID_USER_TO_TRANSFER_CREDITS";
    ErrorTypesEnum["USER_HAS_ALREADY_ANSWERED_TASK"] = "USER_HAS_ALREADY_ANSWERED_TASK";
    ErrorTypesEnum["TRANSACTION_NOT_FOUND"] = "TRANSACTION_NOT_FOUND";
    ErrorTypesEnum["TRANSACTION_FUTURE_NOT_FOUND"] = "TRANSACTION_FUTURE_NOT_FOUND";
    ErrorTypesEnum["TASK_ANSWERED"] = "TASK_ANSWERED";
    ErrorTypesEnum["QUIZ_CATEGORY_NOT_FOUND"] = "QUIZ_CATEGORY_NOT_FOUND";
    ErrorTypesEnum["TEAM_HAS_NO_TERRITORY_TO_CREATE_DEFAULT_CHANNEL"] = "TEAM_HAS_NO_TERRITORY_TO_CREATE_DEFAULT_CHANNEL";
    ErrorTypesEnum["COURSE_CANNOT_BE_USED_AS_TEMPLATE"] = "COURSE_CANNOT_BE_USED_AS_TEMPLATE";
    ErrorTypesEnum["COURSE_NOT_FOUND_IN_ORGANIZATION_CONTRACT"] = "COURSE_NOT_FOUND_IN_ORGANIZATION_CONTRACT";
    ErrorTypesEnum["COURSE_ALREADY_CLONED"] = "COURSE_ALREADY_CLONED";
    ErrorTypesEnum["USER_NOT_ABLE_TO_UPDATE_MEET"] = "USER_NOT_ABLE_TO_UPDATE_MEET";
    ErrorTypesEnum["PYRAMID_NEEDS_PERIOD_NOT_FOUND"] = "PYRAMID_NEEDS_PERIOD_NOT_FOUND";
    ErrorTypesEnum["TERRITORY_ITEM_DOES_NOT_HAVE_VALID_STORAGE_CAPACITY"] = "TERRITORY_ITEM_DOES_NOT_HAVE_VALID_STORAGE_CAPACITY";
    ErrorTypesEnum["FIRST_ACTION_MODULE_NOT_FOUND"] = "FIRST_ACTION_MODULE_NOT_FOUND";
    ErrorTypesEnum["IMPOSSIBLE_CONSUME_DATE_EXPIRATED_ITEM"] = "IMPOSSIBLE_CONSUME_DATE_EXPIRATED_ITEM";
    ErrorTypesEnum["END_DATE_LESS_INIT_DATE"] = "END_DATE_LESS_INIT_DATE";
    ErrorTypesEnum["AWAITING_TEAM_CONFIRMATION"] = "AWAITING_TEAM_CONFIRMATION";
    ErrorTypesEnum["SELECT_A_REJECTED_TEAM"] = "SELECT_A_REJECTED_TEAM";
    ErrorTypesEnum["AWAITING_USER_CONFIRMATION"] = "AWAITING_USER_CONFIRMATION";
    ErrorTypesEnum["EMAIL_ALREADY_EXISTS_IN_THIS_TEAM"] = "EMAIL_ALREADY_EXISTS_IN_THIS_TEAM";
    ErrorTypesEnum["EMAIL_ALREADY_REGISTERED_TO_THOSE_TEAMS"] = "EMAIL_ALREADY_REGISTERED_TO_THOSE_TEAMS";
    ErrorTypesEnum["SCRIPT_NOT_FOUND"] = "SCRIPT_NOT_FOUND";
    ErrorTypesEnum["USER_HAS_NO_ACCESS_TO_TEAM"] = "USER_HAS_NO_ACCESS_TO_TEAM";
    ErrorTypesEnum["USER_IS_NOT_A_PLAYER_ON_THE_TEAM"] = "USER_IS_NOT_A_PLAYER_ON_THE_TEAM";
    ErrorTypesEnum["USER_IS_NOT_ON_THE_TEAM"] = "USER_IS_NOT_ON_THE_TEAM";
    ErrorTypesEnum["USER_IS_NOT_PROFESSOR_IN_TEAM_SELECTED"] = "USER_IS_NOT_PROFESSOR_IN_TEAM_SELECTED";
    ErrorTypesEnum["SYSTEM_CONFIG_NOT_FOUND"] = "SYSTEM_CONFIG_NOT_FOUND";
    ErrorTypesEnum["TEAM_DONT_HAVE_TERRITORIES"] = "TEAM_DONT_HAVE_TERRITORIES";
    ErrorTypesEnum["UNABLE_TO_CHANGE_USER_STATUS_ON_TEAM"] = "UNABLE_TO_CHANGE_USER_STATUS_ON_TEAM";
    ErrorTypesEnum["ONLY_ACCEPT_OR_REJECT_TEAM_INVITATION"] = "ONLY_ACCEPT_OR_REJECT_TEAM_INVITATION";
    ErrorTypesEnum["CLASS_ITEM_CALCULATE_TOTAL_TASK_WEIGHTS_FAILED"] = "CLASS_ITEM_CALCULATE_TOTAL_TASK_WEIGHTS_FAILED";
    ErrorTypesEnum["CLASS_ITEM_GRADE_NOT_ALLOWED"] = "CLASS_ITEM_GRADE_NOT_ALLOWED";
    ErrorTypesEnum["MESSAGE_RESPONSE_NOT_FOUND"] = "MESSAGE_RESPONSE_NOT_FOUND";
    ErrorTypesEnum["CENSORED_MESSAGE"] = "CENSORED_MESSAGE";
    ErrorTypesEnum["PREDEFINED_PHRASE_NOT_FOUND"] = "PREDEFINED_PHRASE_NOT_FOUND";
    ErrorTypesEnum["TEAM_CHAT_READ_ONLY"] = "TEAM_CHAT_READ_ONLY";
    ErrorTypesEnum["TERRITORY_IS_NOT_PRIMARY"] = "TERRITORY_IS_NOT_PRIMARY";
    ErrorTypesEnum["INVALID_MEET_CLASS_ITEM"] = "INVALID_MEET_CLASS_ITEM";
    ErrorTypesEnum["CLASS_ITEM_TASKS_IDS_NOT_INFORMED"] = "CLASS_ITEM_TASKS_IDS_NOT_INFORMED";
    ErrorTypesEnum["SHOP_NOT_FOUND"] = "SHOP_NOT_FOUND";
    ErrorTypesEnum["SHOP_PRICE_NOT_INFORMED"] = "SHOP_PRICE_NOT_INFORMED";
    ErrorTypesEnum["COURSE_ID_NOT_INFORMED"] = "COURSE_ID_NOT_INFORMED";
    ErrorTypesEnum["INVALID_PERFORMANCE_VALUE"] = "INVALID_PERFORMANCE_VALUE";
    ErrorTypesEnum["ACTION_REWARD_ITEM_NOT_FOUND"] = "ACTION_REWARD_ITEM_NOT_FOUND";
    ErrorTypesEnum["REPORT_NOT_FOUND"] = "REPORT_NOT_FOUND";
    ErrorTypesEnum["CONTRACT_EXISTS"] = "CONTRACT_EXISTS";
    ErrorTypesEnum["CONFIG_DOES_NOT_EXIST"] = "CONFIG_DOES_NOT_EXIST";
    ErrorTypesEnum["CONFIG_IS_NOT_RIGHT"] = "CONFIG_IS_NOT_RIGHT";
    ErrorTypesEnum["ITEM_IS_NOT_STORABLE"] = "ITEM_IS_NOT_STORABLE";
    ErrorTypesEnum["USER_IS_ALREADY_IN_JOB"] = "USER_IS_ALREADY_IN_JOB";
    ErrorTypesEnum["DELETE_ACTION_LINKED_TO_MISSION"] = "DELETE_ACTION_LINKED_TO_MISSION";
    ErrorTypesEnum["USER_WITHOUT_PROFESSION"] = "USER_WITHOUT_PROFESSION";
    ErrorTypesEnum["ACTION_NEED_CODE_FIELD_NOT_FOUND"] = "ACTION_NEED_CODE_FIELD_NOT_FOUND";
    ErrorTypesEnum["INCORRECT_NEED_CODE"] = "INCORRECT_NEED_CODE";
    ErrorTypesEnum["SOMETHING_WENT_WRONG_IN_GAME"] = "SOMETHING_WENT_WRONG_IN_GAME";
    ErrorTypesEnum["INVALID_DATE_RANGE"] = "INVALID_DATE_RANGE";
    ErrorTypesEnum["ITEM_IS_NOT_ALLOWED_DELETE"] = "ITEM_IS_NOT_ALLOWED_DELETE";
    ErrorTypesEnum["INSUFFICIENT_BALANCE_TO_COMPLETE_ACTION"] = "INSUFFICIENT_BALANCE_TO_COMPLETE_ACTION";
    ErrorTypesEnum["CSV_FILE_NOT_FOUND"] = "CSV_FILE_NOT_FOUND";
    ErrorTypesEnum["INCOMPLETE_IMPORT_PROGRESS_NOT_FOUND"] = "INCOMPLETE_IMPORT_PROGRESS_NOT_FOUND";
    ErrorTypesEnum["CSV_USER_EMAIL_CODE_NOT_INFORMED"] = "CSV_USER_EMAIL_CODE_NOT_INFORMED";
    ErrorTypesEnum["CSV_TEAM_ID_NOT_INFORMED"] = "CSV_TEAM_ID_NOT_INFORMED";
    ErrorTypesEnum["CSV_DATE_TIME_NOT_INFORMED"] = "CSV_DATE_TIME_NOT_INFORMED";
    ErrorTypesEnum["CSV_WRONG_DATE_PATTERN"] = "CSV_WRONG_DATE_PATTERN";
    ErrorTypesEnum["CSV_USER_SESSION_INVALID_SECONDS"] = "CSV_USER_SESSION_INVALID_SECONDS";
    ErrorTypesEnum["CSV_USER_NOT_FOUND_BY_EMAIL_CODE"] = "CSV_USER_NOT_FOUND_BY_EMAIL_CODE";
    ErrorTypesEnum["CSV_TEAM_NOT_FOUND"] = "CSV_TEAM_NOT_FOUND";
    ErrorTypesEnum["CSV_USER_NOT_FOUND_IN_TEAM"] = "CSV_USER_NOT_FOUND_IN_TEAM";
    ErrorTypesEnum["USER_IS_NOT_PROFESSOR_ON_CSV_TEAM"] = "USER_IS_NOT_PROFESSOR_ON_CSV_TEAM";
    ErrorTypesEnum["CSV_CLASS_ITEM_ID_NOT_INFORMED"] = "CSV_CLASS_ITEM_ID_NOT_INFORMED";
    ErrorTypesEnum["CSV_CLASS_ITEM_ID_NOT_FOUND"] = "CSV_CLASS_ITEM_ID_NOT_FOUND";
    ErrorTypesEnum["CSV_NUMBER_FIELD_INVALID"] = "CSV_NUMBER_FIELD_INVALID";
    ErrorTypesEnum["USER_IS_ALREADY_ON_TEAM"] = "USER_IS_ALREADY_ON_TEAM";
    ErrorTypesEnum["CURRENT_USERS_TEAM_NOT_FOUND"] = "CURRENT_USERS_TEAM_NOT_FOUND";
    ErrorTypesEnum["TEAM_TO_TRANSFER_USERS_NOT_FOUND"] = "TEAM_TO_TRANSFER_USERS_NOT_FOUND";
    ErrorTypesEnum["TERRITORY_CLONE_ITEMS_OPTION_REQUIRED_TO_CLONE_ACTIONS"] = "TERRITORY_CLONE_ITEMS_OPTION_REQUIRED_TO_CLONE_ACTIONS";
    ErrorTypesEnum["TERRITORY_CLONE_ACTIONS_OPTION_REQUIRED_TO_CLONE_MISSIONS"] = "TERRITORY_CLONE_ACTIONS_OPTION_REQUIRED_TO_CLONE_MISSIONS";
    ErrorTypesEnum["SUB_TERRITORY_NOT_FOUND"] = "SUB_TERRITORY_NOT_FOUND";
    ErrorTypesEnum["INVALID_CSV_FILE"] = "INVALID_CSV_FILE";
    ErrorTypesEnum["CSV_REQUIRED_FIELDS_ERROR_WHEN_EMAIL_NOT_INFORMED"] = "CSV_REQUIRED_FIELDS_ERROR_WHEN_EMAIL_NOT_INFORMED";
    ErrorTypesEnum["CSV_REQUIRED_FIELDS_NOT_INFORMED"] = "CSV_REQUIRED_FIELDS_NOT_INFORMED";
    ErrorTypesEnum["CSV_INVALID_FIELD"] = "CSV_INVALID_FIELD";
    ErrorTypesEnum["NO_SHOP_CLONED_COURSES_FOUND"] = "NO_SHOP_CLONED_COURSES_FOUND";
    ErrorTypesEnum["SCRIPT_SYNC_SHOP_ALREADY_RUNNING"] = "SCRIPT_SYNC_SHOP_ALREADY_RUNNING";
    ErrorTypesEnum["SCRIPT_ALREADY_RUNNING"] = "SCRIPT_ALREADY_RUNNING";
    ErrorTypesEnum["GET_QUEUE_URL_JOB_INTERNAL_ERROR"] = "GET_QUEUE_URL_JOB_INTERNAL_ERROR";
    ErrorTypesEnum["SEND_MESSAGE_QUEUE_JOB_INTERNAL_ERROR"] = "SEND_MESSAGE_QUEUE_JOB_INTERNAL_ERROR";
    ErrorTypesEnum["CLASS_MODULE_NOT_FOUND"] = "CLASS_MODULE_NOT_FOUND";
    ErrorTypesEnum["CLASS_TEAM_NOT_FOUND"] = "CLASS_TEAM_NOT_FOUND";
    ErrorTypesEnum["COURSE_MODULES_EMPTY"] = "COURSE_MODULES_EMPTY";
    ErrorTypesEnum["CLASS_COURSE_TYPE_NOT_QUESTIONS_TRAIL"] = "CLASS_COURSE_TYPE_NOT_QUESTIONS_TRAIL";
    ErrorTypesEnum["LAPLACE_RANDOM_QUESTION_NOT_FOUND"] = "LAPLACE_RANDOM_QUESTION_NOT_FOUND";
    ErrorTypesEnum["LAPLACE_RANDOM_QUESTION_WITHOUT_ALTERNATIVES"] = "LAPLACE_RANDOM_QUESTION_WITHOUT_ALTERNATIVES";
    ErrorTypesEnum["USER_CLASS_NOT_FOUND"] = "USER_CLASS_NOT_FOUND";
    ErrorTypesEnum["USER_CLASS_QUESTION_ALREADY_ANSWERED"] = "USER_CLASS_QUESTION_ALREADY_ANSWERED";
    ErrorTypesEnum["CLASS_QUESTION_ANSWER_NOT_FOUND"] = "CLASS_QUESTION_ANSWER_NOT_FOUND";
    ErrorTypesEnum["CLASS_COURSE_NOT_FOUND"] = "CLASS_COURSE_NOT_FOUND";
    ErrorTypesEnum["LEVEL_SCHOOL_NOT_FOUND_OR_NOT_INFORMED"] = "LEVEL_SCHOOL_NOT_FOUND_OR_NOT_INFORMED";
    ErrorTypesEnum["CLASS_QUESTION_RESPONSES_ATTEMPTS_TYPE_NOT_FOUND"] = "CLASS_QUESTION_RESPONSES_ATTEMPTS_TYPE_NOT_FOUND";
    ErrorTypesEnum["IMPOSSIBLE_CALCULATE_CLASS_PROGRESS_BY_COURSE_TYPE"] = "IMPOSSIBLE_CALCULATE_CLASS_PROGRESS_BY_COURSE_TYPE";
    ErrorTypesEnum["IMPOSSIBLE_CALCULATE_COURSE_PROGRESS_BY_COURSE_TYPE"] = "IMPOSSIBLE_CALCULATE_COURSE_PROGRESS_BY_COURSE_TYPE";
    ErrorTypesEnum["TEAM_DOES_NOT_HAVE_ACCESS_MODULE"] = "TEAM_DOES_NOT_HAVE_ACCESS_MODULE";
    ErrorTypesEnum["LAPLACE_REQUIRED_DATA_NOT_FOUND"] = "LAPLACE_REQUIRED_DATA_NOT_FOUND";
    ErrorTypesEnum["USER_CANNOT_UPDATE_ITEM"] = "USER_CANNOT_UPDATE_ITEM";
    ErrorTypesEnum["USER_CANNOT_DELETE_ITEM"] = "USER_CANNOT_DELETE_ITEM";
    ErrorTypesEnum["TERRITORY_EXCEEDED_ATTEMPTS_TO_GENERATE_OPERATION_ID"] = "TERRITORY_EXCEEDED_ATTEMPTS_TO_GENERATE_OPERATION_ID";
    ErrorTypesEnum["COURSE_FILTERS_LEVELS_NOT_FOUND"] = "COURSE_FILTERS_LEVELS_NOT_FOUND";
    ErrorTypesEnum["COURSE_FILTER_LEVEL_ID_NOT_FOUND"] = "COURSE_FILTER_LEVEL_ID_NOT_FOUND";
    ErrorTypesEnum["INVALID_COURSE_MODULE_LEVEL_SCHOOL"] = "INVALID_COURSE_MODULE_LEVEL_SCHOOL";
    ErrorTypesEnum["INVALID_LAPLACE_FILTER_NAME"] = "INVALID_LAPLACE_FILTER_NAME";
    ErrorTypesEnum["LAPLACE_FILTER_ALL_IDS_NOT_FOUND"] = "LAPLACE_FILTER_ALL_IDS_NOT_FOUND";
    ErrorTypesEnum["LAPLACE_FILTER_ONE_ID_NOT_FOUND"] = "LAPLACE_FILTER_ONE_ID_NOT_FOUND";
    ErrorTypesEnum["COURSE_TYPE_UPDATE_IS_NOT_ALLOWED"] = "COURSE_TYPE_UPDATE_IS_NOT_ALLOWED";
    ErrorTypesEnum["CLASS_QUESTION_TYPE_NOT_FOUND"] = "CLASS_QUESTION_TYPE_NOT_FOUND";
    ErrorTypesEnum["INVALID_CLASS_QUESTION_TYPE"] = "INVALID_CLASS_QUESTION_TYPE";
    ErrorTypesEnum["CLASS_QUESTION_TYPE_IS_NOT_RANDOM"] = "CLASS_QUESTION_TYPE_IS_NOT_RANDOM";
    ErrorTypesEnum["CLASS_QUESTION_NOT_FOUND"] = "CLASS_QUESTION_NOT_FOUND";
    ErrorTypesEnum["COURSE_QUESTIONS_CONFIG_TYPE_NOT_INFORMED"] = "COURSE_QUESTIONS_CONFIG_TYPE_NOT_INFORMED";
    ErrorTypesEnum["TOTAL_RANDOM_QUESTIONS_NOT_INFORMED"] = "TOTAL_RANDOM_QUESTIONS_NOT_INFORMED";
    ErrorTypesEnum["LAPLACE_QUESTIONS_IDS_NOT_INFORMED_OR_EMPTY"] = "LAPLACE_QUESTIONS_IDS_NOT_INFORMED_OR_EMPTY";
    ErrorTypesEnum["RESPONSES_ATTEMPT_TYPE_NOT_INFORMED"] = "RESPONSES_ATTEMPT_TYPE_NOT_INFORMED";
    ErrorTypesEnum["RESPONSES_TOTAL_ATTEMPTS_NOT_INFORMED"] = "RESPONSES_TOTAL_ATTEMPTS_NOT_INFORMED";
    ErrorTypesEnum["LEVEL_SCHOOL_NOT_FOUND"] = "LEVEL_SCHOOL_NOT_FOUND";
    ErrorTypesEnum["LAPLACE_QUESTION_NOT_FOUND_BY_ID"] = "LAPLACE_QUESTION_NOT_FOUND_BY_ID";
    ErrorTypesEnum["QUIZZES_FORMAT_NOT_FOUND_BY_NAME"] = "QUIZZES_FORMAT_NOT_FOUND_BY_NAME";
    ErrorTypesEnum["LAPLACE_API_ERROR"] = "LAPLACE_API_ERROR";
    ErrorTypesEnum["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    ErrorTypesEnum["INVALID_AUDIO_STREAM"] = "INVALID_AUDIO_STREAM";
    ErrorTypesEnum["ACTION_EXTERNAL_SLIDER_TASKS_NOT_UNIQUE"] = "ACTION_EXTERNAL_SLIDER_TASKS_NOT_UNIQUE";
    ErrorTypesEnum["IA_AUDIO_NOT_FOUND_IN_S3_BUCKET"] = "IA_AUDIO_NOT_FOUND_IN_S3_BUCKET";
    ErrorTypesEnum["GET_IA_AUDIO_S3_BUCKET_FAILED"] = "GET_IA_AUDIO_S3_BUCKET_FAILED";
    ErrorTypesEnum["ACTION_NO_ITEM_FALLBACK"] = "ACTION_NO_ITEM_FALLBACK";
    ErrorTypesEnum["ACTION_INCORRECT_CODE_FALLBACK"] = "ACTION_INCORRECT_CODE_FALLBACK";
    ErrorTypesEnum["ACTION_NO_LEVEL_FALLBACK"] = "ACTION_NO_LEVEL_FALLBACK";
    ErrorTypesEnum["INSUFFICIENT_LEVEL_TO_ACCESS_ACTION"] = "INSUFFICIENT_LEVEL_TO_ACCESS_ACTION";
    ErrorTypesEnum["ACTION_DIALOG_CANNOT_HAVE_NOTEPAD_FIELDS"] = "ACTION_DIALOG_CANNOT_HAVE_NOTEPAD_FIELDS";
    ErrorTypesEnum["USER_TERRITORY_BASE_SELECTED_NOT_FOUND"] = "USER_TERRITORY_BASE_SELECTED_NOT_FOUND";
    ErrorTypesEnum["PLAYER_DOES_NOT_HAVE_THE_ITEM"] = "PLAYER_DOES_NOT_HAVE_THE_ITEM";
    ErrorTypesEnum["ACTION_VISUALIZATION_ITEM_NOT_FINISHED"] = "ACTION_VISUALIZATION_ITEM_NOT_FINISHED";
    ErrorTypesEnum["ACTION_INTERACTION_AFTER_ITEM_NOT_EPUB"] = "ACTION_INTERACTION_AFTER_ITEM_NOT_EPUB";
    ErrorTypesEnum["INVALID_ACTIONS_TO_BE_RELEASE_AFTER_CLASS_ITEM_PROVIDED"] = "INVALID_ACTIONS_TO_BE_RELEASE_AFTER_CLASS_ITEM_PROVIDED";
    ErrorTypesEnum["ACTION_NO_VALID_EPUB_FOUND_IN_INTERACTION_AFTER_ITEMS"] = "ACTION_NO_VALID_EPUB_FOUND_IN_INTERACTION_AFTER_ITEMS";
    ErrorTypesEnum["USER_WITHOUT_REQUIRED_LEVEL"] = "USER_WITHOUT_REQUIRED_LEVEL";
    ErrorTypesEnum["ACTION_NO_INTERACTION_AFTER_ITEMS_FOUND"] = "ACTION_NO_INTERACTION_AFTER_ITEMS_FOUND";
    ErrorTypesEnum["BLOCKLY_CONTEXT_IS_REQUIRED"] = "BLOCKLY_CONTEXT_IS_REQUIRED";
    ErrorTypesEnum["BLOCKLY_METHOD_IS_REQUIRED"] = "BLOCKLY_METHOD_IS_REQUIRED";
    ErrorTypesEnum["USER_ACTION_RELEASE_BY_CLASS_ITEM_OPEN_NOT_FOUND"] = "USER_ACTION_RELEASE_BY_CLASS_ITEM_OPEN_NOT_FOUND";
    ErrorTypesEnum["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ErrorTypesEnum || (ErrorTypesEnum = {}));
exports.ErrorTypesEnum = ErrorTypesEnum;


/***/ }),

/***/ "./src/types/TableEnum.ts":
/*!********************************!*\
  !*** ./src/types/TableEnum.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollectionsEnum = void 0;
var CollectionsEnum;
(function (CollectionsEnum) {
    CollectionsEnum["Users"] = "users";
    CollectionsEnum["Contracts"] = "contracts";
    CollectionsEnum["SystemModules"] = "system_modules";
    CollectionsEnum["SystemProfilesAccess"] = "system_profiles_access";
    CollectionsEnum["Organizations"] = "organizations";
    CollectionsEnum["Teams"] = "teams";
    CollectionsEnum["Territories"] = "territories";
    CollectionsEnum["Tilesets"] = "tilesets";
    CollectionsEnum["UserConnections"] = "user_connections";
    CollectionsEnum["Logs"] = "logs";
    CollectionsEnum["LogsIntegration"] = "logs_integration";
    CollectionsEnum["DeepLink"] = "deep_links";
    CollectionsEnum["Items"] = "items";
    CollectionsEnum["Partners"] = "partners";
    CollectionsEnum["Helps"] = "helps";
    CollectionsEnum["Tips"] = "tips";
    CollectionsEnum["Transactions"] = "transactions";
    CollectionsEnum["Credits"] = "credits";
    CollectionsEnum["TerritoryItems"] = "territory_items";
    CollectionsEnum["ClassItems"] = "class_items";
    CollectionsEnum["Classes"] = "classes";
    CollectionsEnum["Courses"] = "courses";
    CollectionsEnum["ClassComments"] = "class_comments";
    CollectionsEnum["ClassNote"] = "class_notes";
    CollectionsEnum["TeamTerritories"] = "team_territories";
    CollectionsEnum["UserNotes"] = "user_notes";
    CollectionsEnum["Npcs"] = "npcs";
    CollectionsEnum["Jornals"] = "jornals";
    CollectionsEnum["ClassPlans"] = "class_plans";
    CollectionsEnum["Quizzes"] = "quizzes";
    CollectionsEnum["ClassItemResponses"] = "class_item_responses";
    CollectionsEnum["UserTerritories"] = "user_territories";
    CollectionsEnum["CourseProgress"] = "course_progress";
    CollectionsEnum["Messages"] = "messages";
    CollectionsEnum["MessagesRead"] = "messages_read";
    CollectionsEnum["ContactMessage"] = "contacts_message";
    CollectionsEnum["Missions"] = "missions";
    CollectionsEnum["Actions"] = "actions";
    CollectionsEnum["XpHistory"] = "xp_history";
    CollectionsEnum["UserMissions"] = "user_missions";
    CollectionsEnum["Modules"] = "modules";
    CollectionsEnum["UserActions"] = "user_actions";
    CollectionsEnum["UserActionClick"] = "user_action_click";
    CollectionsEnum["HiddenItems"] = "hidden_items";
    CollectionsEnum["TerritoryItemShow"] = "territory_item_show";
    CollectionsEnum["UserActionsRandom"] = "user_actions_random";
    CollectionsEnum["TerritoryItemHidden"] = "territory_item_hidden";
    CollectionsEnum["ClassProgress"] = "class_progress";
    CollectionsEnum["ClassItemViews"] = "class_item_views";
    CollectionsEnum["ProfessionalsRoles"] = "professionals_roles";
    CollectionsEnum["ProfessionalsTerritory"] = "professionals_territory";
    CollectionsEnum["UserProfessionals"] = "user_professionals";
    CollectionsEnum["TransactionFuture"] = "transactions_future";
    CollectionsEnum["PyramidNeeds"] = "pyramid_needs";
    CollectionsEnum["UserPyramids"] = "user_pyramids";
    CollectionsEnum["Meets"] = "meets";
    CollectionsEnum["ResidencesTerritory"] = "residences_territory";
    CollectionsEnum["UserResidences"] = "user_residences";
    CollectionsEnum["UserRewards"] = "user_rewards";
    CollectionsEnum["UserQuizzes"] = "user_quizzes";
    CollectionsEnum["Games"] = "games";
    CollectionsEnum["GameSessions"] = "game_sessions";
    CollectionsEnum["TerritoryItemsConsumed"] = "territory_items_consumed";
    CollectionsEnum["Notifications"] = "notifications";
    CollectionsEnum["Channels"] = "channels";
    CollectionsEnum["UserClassItems"] = "user_class_items";
    CollectionsEnum["Cards"] = "cards";
    CollectionsEnum["Boards"] = "boards";
    CollectionsEnum["CardComments"] = "card_comments";
    CollectionsEnum["Labels"] = "labels";
    CollectionsEnum["OrganizationTypes"] = "organization_types";
    CollectionsEnum["Apps"] = "apps";
    CollectionsEnum["ContentCategories"] = "content_categories";
    CollectionsEnum["Groups"] = "groups";
    CollectionsEnum["Script"] = "scripts";
    CollectionsEnum["SystemConfig"] = "configs";
    CollectionsEnum["WordsForbidden"] = "words_forbidden";
    CollectionsEnum["Phrase"] = "phrases";
    CollectionsEnum["Shopping"] = "shopping";
    CollectionsEnum["Reports"] = "reports";
    CollectionsEnum["UserSession"] = "user_sessions";
    CollectionsEnum["UserStatistic"] = "user_statistics";
    CollectionsEnum["QuizzesEnemCognitiveAxes"] = "quizzes_enem_cognitive_axes";
    CollectionsEnum["QuizzesGraphicElements"] = "quizzes_graphic_elements";
    CollectionsEnum["QuizzesEnemAreas"] = "quizzes_enem_areas";
    CollectionsEnum["QuizzesKnowledgeSets"] = "quizzes_knowledge_sets";
    CollectionsEnum["QuizzesThematicUnits"] = "quizzes_thematic_units";
    CollectionsEnum["QuizzesSubjects"] = "quizzes_subjects";
    CollectionsEnum["QuizzesTopics"] = "quizzes_topics";
    CollectionsEnum["QuizzesChapters"] = "quizzes_chapters";
    CollectionsEnum["QuizzesDisciplines"] = "quizzes_disciplines";
    CollectionsEnum["QuizzesBNCCAreas"] = "quizzes_bncc_areas";
    CollectionsEnum["QuizzesEnemMatrixs"] = "quizzes_enem_matrixs";
    CollectionsEnum["QuizzesBNCCCompetency"] = "quizzes_bncc_competencies";
    CollectionsEnum["QuizzesBNCCSkills"] = "quizzes_bncc_skills";
    CollectionsEnum["QuizzesYears"] = "quizzes_years";
    CollectionsEnum["QuizzesDifficultyLevels"] = "quizzes_difficulty_levels";
    CollectionsEnum["QuizzesComplexities"] = "quizzes_complexities";
    CollectionsEnum["QuizzesInstitutions"] = "quizzes_institutions";
    CollectionsEnum["QuizzesFormats"] = "quizzes_formats";
    CollectionsEnum["QuizzesPhases"] = "quizzes_phases";
    CollectionsEnum["QuizzesExams"] = "quizzes_exams";
    CollectionsEnum["Countries"] = "countries";
    CollectionsEnum["States"] = "states";
    CollectionsEnum["Regionals"] = "regionals";
    CollectionsEnum["Cities"] = "cities";
    CollectionsEnum["SyncAssets"] = "sync_assets";
    CollectionsEnum["ImportLotesProgress"] = "import_lotes_progress";
    CollectionsEnum["DatasetSeed"] = "dataset_seed";
    CollectionsEnum["EmailValidations"] = "email_validations";
    CollectionsEnum["SubscriptionPlans"] = "subscription_plans";
    CollectionsEnum["Subscriptions"] = "subscriptions";
    CollectionsEnum["JobSyncLogs"] = "job_sync_logs";
    CollectionsEnum["UserClasses"] = "user_classes";
    CollectionsEnum["Transcriptions"] = "transcriptions";
    CollectionsEnum["Blocks"] = "blocks";
})(CollectionsEnum || (CollectionsEnum = {}));
exports.CollectionsEnum = CollectionsEnum;


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lambda-router":
/*!********************************!*\
  !*** external "lambda-router" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lambda-router");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "./lib/i18n/error_messages.json":
/*!**************************************!*\
  !*** ./lib/i18n/error_messages.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"MESSAGES":{"UPLOAD_FIELDS_REQUIRED":{"ptBr":"Type e fileName são parametros obrigatórios","en":"Type and fileName are required parameters","es":"Type y fileName son parámetros obligatorios"},"UPLOAD_FILE_NOT_SUPPORTED":{"ptBr":"Esse tipo de arquivo não é suportado","en":"This file type is not supported","es":"Este tipo de archivo no es compatible"},"SCHEMA_VALIDATION_ERROR":{"ptBr":"O campo {fieldName} é obrigatório","en":"The field {fieldName} is required","es":"El campo {fieldName} es obligatorio"},"UPDATE_VALIDATION_ERROR":{"ptBr":"Erro no campo {fieldName} com valor {value}","en":"Error in field {fieldName} with value {value}","es":"Error en el campo {fieldName} con valor {value}"},"NOT_AUTHORIZED_ERROR":{"ptBr":"Ação não autorizada, contate o suporte","en":"Unauthorized action, contact support","es":"Acción no autorizada, póngase en contacto con el servicio de asistencia"},"DEPENDENCY_FAILED":{"ptBr":"Algo deu errado, tente novamente em alguns segundos","en":"Something went wrong, try again in a few seconds","es":"Algo salió mal, inténtalo de nuevo en unos segundos"},"USER_NOT_SESSION_OWNER":{"ptBr":"Ação autorizada apenas para o dono da sessão","en":"Action allowed only to user session owner","es":"Acción autorizada solo para el propietario de la sesión"},"SOMETHING_WENT_WRONG_IN_GAME":{"ptBr":"Oops, algo deu errado... Tente novamente em alguns minutos ou contate o suporte","en":"Oops, something went wrong... Please try again in a few minutes or contact support","es":"Oops, algo salió mal... Vuelve a intentarlo en unos minutos o ponte en contacto con el servicio de asistencia."},"NOT_IMPLEMENTED":{"ptBr":"Oops, este recurso não foi implementado ou ainda não está disponível, dúvida fale com suporte!","en":"Oops, something went wrong... Please try again in a few minutes or contact support","es":"Oops, algo salió mal... Vuelve a intentarlo en unos minutos o ponte en contacto con el servicio de asistencia."},"NOT_HAS_PARTNER":{"ptBr":"Oops, seu usuário não está licenciado a nenhum parceiro de negócio, dúvida fale com suporte!","en":"Oops, your user is not licensed to any business partner, do not hesitate to contact support!","es":"Vaya, su usuario no tiene licencia para ningún socio comercial, ¡no dude en ponerse en contacto con el soporte!"},"INTERNAL_SERVER_ERROR":{"ptBr":"Erro interno do servidor, entre em contato com o suporte","en":"Internal server error, please contact support","es":"Error interno del servidor, póngase en contacto con soporte."}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************!*\
  !*** ./src/handlers/aulas/handler.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
var saveProgress_1 = __webpack_require__(/*! ./saveProgress */ "./src/handlers/aulas/saveProgress.ts"); // Importe o novo handler
var auth_1 = __webpack_require__(/*! @/lib/auth */ "./lib/auth.ts"); // Importe o módulo de autenticação
var router_1 = __webpack_require__(/*! @/lib/router */ "./lib/router.ts");
var createAula_1 = __webpack_require__(/*! ./createAula */ "./src/handlers/aulas/createAula.ts");
var deleteAula_1 = __webpack_require__(/*! ./deleteAula */ "./src/handlers/aulas/deleteAula.ts");
var getAula_1 = __webpack_require__(/*! ./getAula */ "./src/handlers/aulas/getAula.ts");
var listAulas_1 = __webpack_require__(/*! ./listAulas */ "./src/handlers/aulas/listAulas.ts");
var updateAula_1 = __webpack_require__(/*! ./updateAula */ "./src/handlers/aulas/updateAula.ts");
var router = (0, router_1.buildRouter)();
router.post('/aulas', auth_1.auth.verifyLogged(createAula_1.createAulaHandler));
router.get('/aulas/{aulaId}', auth_1.auth.verifyLogged(getAula_1.getAulaHandler));
router.put('/aulas', auth_1.auth.verifyLogged(updateAula_1.updateAulaHandler));
router.get('/aulas', auth_1.auth.verifyLogged(listAulas_1.listAulasHandler));
router.delete('/aulas/{aulaId}', auth_1.auth.verifyLogged(deleteAula_1.deleteAulaHandler));
// Adicione a nova rota para salvar progresso
router.post('/aulas/{aulaId}/mine', auth_1.auth.verifyLogged(saveProgress_1.saveProgressHandler));
var main = (0, router_1.buildHandler)(router);
exports.main = main;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=handler.js.map