"use strict";
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
        while (_) try {
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
exports.__esModule = true;
exports.getOrderBy = exports.cancelConfirm = exports.handleRemoveSysById = exports.handleRemoveSys = exports.handleRemove = exports.handleExport = exports.handleUpdateSys = exports.handleUpdate = exports.handleAccessCouponSys = exports.handleAccessCoupon = exports.handleAddSys = exports.handleAdd = void 0;
var antd_1 = require("antd");
var CommonService_1 = require("./CommonService");
var ResponseCodeEnum_1 = require("@/constants/ResponseCodeEnum");
var OperationEnum_1 = require("@/constants/OperationEnum");
var DateTimeUtils_1 = require("./DateTimeUtils");
var OrderByEnum_1 = require("@/constants/OrderByEnum");
function handleAdd(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在添加');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    DateTimeUtils_1.DateTimeToString(fields);
                    return [4 /*yield*/, CommonService_1.create(fields, namespace)];
                case 2:
                    res = _a.sent();
                    // console.log("fields="+JSON.stringify(fields))
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].ADD)];
                case 3:
                    error_1 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].ADD)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleAdd = handleAdd;
;
function handleAddSys(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在添加');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    DateTimeUtils_1.DateTimeToString(fields);
                    return [4 /*yield*/, CommonService_1.createSys(fields, namespace)];
                case 2:
                    res = _a.sent();
                    // console.log("fields="+JSON.stringify(fields))
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].ADD)];
                case 3:
                    error_2 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].ADD)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleAddSys = handleAddSys;
;
function handleAccessCoupon(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在添加');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    DateTimeUtils_1.DateTimeToString(fields);
                    return [4 /*yield*/, CommonService_1.create(fields, namespace)];
                case 2:
                    res = _a.sent();
                    // console.log("fields="+JSON.stringify(fields))
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].ADD)];
                case 3:
                    error_3 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].ADD)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleAccessCoupon = handleAccessCoupon;
;
function handleAccessCouponSys(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在添加');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    DateTimeUtils_1.DateTimeToString(fields);
                    return [4 /*yield*/, CommonService_1.createSys(fields, namespace)];
                case 2:
                    res = _a.sent();
                    // console.log("fields="+JSON.stringify(fields))
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].ADD)];
                case 3:
                    error_4 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].ADD)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleAccessCouponSys = handleAccessCouponSys;
;
/**
 * 更新节点
 * @param fields
 */
function handleUpdate(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, key, element, res, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在更新');
                    DateTimeUtils_1.DateTimeToString(fields);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    //过滤所有null
                    for (key in fields) {
                        if (Object.prototype.hasOwnProperty.call(fields, key)) {
                            element = fields[key];
                            if (element === null) {
                                fields[key] = undefined;
                            }
                        }
                    }
                    return [4 /*yield*/, CommonService_1.update(__assign({}, fields), namespace)];
                case 2:
                    res = _a.sent();
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].UPDATE)];
                case 3:
                    error_5 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].UPDATE)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleUpdate = handleUpdate;
;
function handleUpdateSys(fields, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, newParams, key, res, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在更新');
                    DateTimeUtils_1.DateTimeToString(fields);
                    newParams = {};
                    for (key in fields) {
                        if (Object.prototype.hasOwnProperty.call(fields, key)) {
                            if (Boolean(fields[key]) || fields[key] === 0 || fields[key] === 1) {
                                newParams[key] = fields[key];
                            }
                        }
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, CommonService_1.updateSys(__assign({}, newParams), namespace)];
                case 2:
                    res = _a.sent();
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].UPDATE)];
                case 3:
                    error_6 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].UPDATE)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleUpdateSys = handleUpdateSys;
;
/**
 * 导出
 * @param fields
 */
function handleExport(namespace, records) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在导出');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, CommonService_1.exportTable(namespace, records)];
                case 2:
                    res = _a.sent();
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].EXPORT)];
                case 3:
                    error_7 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].EXPORT)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleExport = handleExport;
;
/**
 *  删除节点
 * @param selectedRows
 */
function handleRemove(records, actionRef, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var userNameHtml;
        var _this = this;
        return __generator(this, function (_a) {
            userNameHtml = '您确定要删除?';
            antd_1.Modal.confirm({
                title: userNameHtml,
                content: '一但删除，数据将无法恢复，请慎重操作',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, removeRecords(records, namespace)];
                            case 1:
                                _a.sent();
                                actionRef.current && actionRef.current.reload();
                                return [2 /*return*/];
                        }
                    });
                }); },
                onCancel: function () {
                }
            });
            return [2 /*return*/];
        });
    });
}
exports.handleRemove = handleRemove;
;
/**
 *  删除节点
 * @param selectedRows
 */
function handleRemoveSys(records, actionRef, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var userNameHtml;
        var _this = this;
        return __generator(this, function (_a) {
            userNameHtml = '您确定要删除?';
            antd_1.Modal.confirm({
                title: userNameHtml,
                content: '一但删除，数据将无法恢复，请慎重操作',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, removeRecordsSys(records, namespace)];
                            case 1:
                                _a.sent();
                                actionRef.current && actionRef.current.reload();
                                return [2 /*return*/];
                        }
                    });
                }); },
                onCancel: function () {
                }
            });
            return [2 /*return*/];
        });
    });
}
exports.handleRemoveSys = handleRemoveSys;
;
function handleRemoveSysById(records, actionRef, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var userNameHtml;
        var _this = this;
        return __generator(this, function (_a) {
            userNameHtml = '您确定要删除?';
            antd_1.Modal.confirm({
                title: userNameHtml,
                content: '一但删除，数据将无法恢复，请慎重操作',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk: function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, removeRecordsSysById(records, namespace)];
                            case 1:
                                _a.sent();
                                actionRef.current && actionRef.current.reload();
                                return [2 /*return*/];
                        }
                    });
                }); },
                onCancel: function () {
                }
            });
            return [2 /*return*/];
        });
    });
}
exports.handleRemoveSysById = handleRemoveSysById;
;
function cancelConfirm(isFieldsChange, onCancel) {
    return __awaiter(this, void 0, void 0, function () {
        var userNameHtml;
        return __generator(this, function (_a) {
            if (!isFieldsChange)
                onCancel();
            else {
                userNameHtml = '请确认取消';
                antd_1.Modal.confirm({
                    title: userNameHtml,
                    content: '您有修改，确认要放弃',
                    okText: '确定取消',
                    okType: 'danger',
                    cancelText: '不取消',
                    onOk: function () {
                        onCancel();
                    },
                    onCancel: function () {
                    }
                });
            }
            return [2 /*return*/];
        });
    });
}
exports.cancelConfirm = cancelConfirm;
;
function removeRecords(selectedIds, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在删除');
                    if (!selectedIds)
                        return [2 /*return*/, true];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    res = void 0;
                    return [4 /*yield*/, CommonService_1.remove(selectedIds, namespace)];
                case 2:
                    // if (selectedIds.length == 1) {
                    //   res = await removeById(
                    //     selectedIds[0],
                    //     namespace
                    //   );
                    // }
                    // else {
                    //   res = await remove(
                    //     selectedIds,
                    //     namespace
                    //   );
                    // }
                    res = _a.sent();
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].REMOVE)];
                case 3:
                    error_8 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].REMOVE)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
function removeRecordsSysById(selectedIds, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在删除');
                    if (!selectedIds)
                        return [2 /*return*/, true];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    res = void 0;
                    if (!(selectedIds.length == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, CommonService_1.removeByIdSys(selectedIds[0], namespace)];
                case 2:
                    res = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, CommonService_1.removeSysById(selectedIds, namespace)];
                case 4:
                    res = _a.sent();
                    _a.label = 5;
                case 5:
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].REMOVE)];
                case 6:
                    error_9 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].REMOVE)];
                case 7: return [2 /*return*/];
            }
        });
    });
}
;
function removeRecordsSys(selectedIds, namespace) {
    return __awaiter(this, void 0, void 0, function () {
        var hide, res, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hide = antd_1.message.loading('正在删除');
                    if (!selectedIds)
                        return [2 /*return*/, true];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    res = void 0;
                    if (!(selectedIds.length === 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, CommonService_1.removeSysById(selectedIds, namespace)];
                case 2:
                    res = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, CommonService_1.removeSys(selectedIds, namespace)];
                case 4:
                    res = _a.sent();
                    _a.label = 5;
                case 5:
                    hide();
                    return [2 /*return*/, handleResponse(res, OperationEnum_1["default"].REMOVE)];
                case 6:
                    error_10 = _a.sent();
                    hide();
                    return [2 /*return*/, errorMessage(OperationEnum_1["default"].REMOVE)];
                case 7: return [2 /*return*/];
            }
        });
    });
}
;
function handleResponse(res, ops) {
    // console.log(res)
    if (res && res.code === ResponseCodeEnum_1["default"].SUCCESS) {
        // message.success(`${ops}成功，即将刷新`) 
        antd_1.message.success("" + res.msg);
        return true;
    }
    else {
        // return errorMessage(ops);
        var a = res.msg ? res.msg : ops + '失败，请重试';
        antd_1.message.error("" + a);
        return false;
    }
}
function errorMessage(ops) {
    antd_1.message.error(ops + " \u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    return false;
}
function getOrderBy(orderBy) {
    if (orderBy === 'ascend') {
        return OrderByEnum_1["default"].ASC;
    }
    else {
        return OrderByEnum_1["default"].DESC;
    }
}
exports.getOrderBy = getOrderBy;
