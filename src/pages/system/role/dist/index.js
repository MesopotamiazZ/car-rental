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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var pro_layout_1 = require("@ant-design/pro-layout");
var pro_table_1 = require("@ant-design/pro-table");
var CreateForm_1 = require("./CreateForm");
var UpdateForm_1 = require("./UpdateForm");
var ViewForm_1 = require("./ViewForm");
var CommonService_1 = require("@/global/CommonService");
var NamespaceEnum_1 = require("@/constants/NamespaceEnum");
var HandleOps_1 = require("@/global/HandleOps");
var Columns_1 = require("./Columns");
var constants_1 = require("@/constants/constants");
var icons_1 = require("@ant-design/icons");
var icons_2 = require("@ant-design/icons");
var DeviceUtils_1 = require("@/global/DeviceUtils");
var nativeList_1 = require("./nativeList");
/**
 * 模块主页面
 */
var RoleTableList = function () {
    var _a = react_1.useState(false), createModalVisible = _a[0], handleModalVisible = _a[1];
    var _b = react_1.useState(false), updateModalVisible = _b[0], handleUpdateModalVisible = _b[1];
    var _c = react_1.useState(false), viewModalVisible = _c[0], handleViewModalVisible = _c[1];
    var _d = react_1.useState({}), editFormValues = _d[0], setEditFormValues = _d[1];
    var _e = react_1.useState({}), viewFormValues = _e[0], setViewFormValues = _e[1];
    var _f = react_1.useState(false), submitting = _f[0], setSubmitting = _f[1];
    var actionRef = react_1.useRef();
    var _g = react_1.useState({}), params = _g[0], setParams = _g[1];
    var columns = __spreadArrays(Columns_1["default"], [
        // {
        //   title: '状态',
        //   dataIndex: 'status',
        //   search: false,
        //   render: (_, record) => {
        //     return (
        //       <Switch checked={record.status === 0 ? true : false} onChange={async (e) => {
        //         console.log(e);
        //         await getById(record.roleId, NamespaceEnum.Role).then(async (res: any) => {
        //           const success = await handleUpdateSys({ ...record, ...res.role, status: e ? 0 : 1 }, NamespaceEnum.Role);
        //           if (success) {
        //             actionRef.current?.reload();
        //           }
        //         });
        //       }} />
        //     )
        //   },
        // },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: function (_, record) { return (react_1["default"].createElement(antd_1.Space, { split: react_1["default"].createElement(antd_1.Divider, { type: "vertical" }), size: [0, 8], wrap: true },
                react_1["default"].createElement("a", { title: "\u67E5\u770B", onClick: function () {
                        setViewFormValues(record);
                        handleViewModalVisible(true);
                    } },
                    react_1["default"].createElement(icons_2.EyeOutlined, null)),
                react_1["default"].createElement("a", { title: "\u7F16\u8F91", onClick: function () {
                        setEditFormValues(record);
                        handleUpdateModalVisible(true);
                    } },
                    react_1["default"].createElement(icons_2.EditOutlined, null)),
                react_1["default"].createElement("a", { title: "\u5220\u9664", onClick: function () { return HandleOps_1.handleRemoveSys([record.roleId], actionRef, NamespaceEnum_1["default"].Role); } },
                    react_1["default"].createElement(icons_2.DeleteOutlined, null)))); }
        },
    ]);
    return (react_1["default"].createElement(pro_layout_1.PageHeaderWrapper, null,
        DeviceUtils_1.isMobile() ? react_1["default"].createElement(nativeList_1["default"], { handleModalVisible: function (e) { return handleModalVisible(e); }, setViewFormValues: function (e) { return setViewFormValues(e); }, setEditFormValues: function (e) { return setEditFormValues(e); }, handleUpdateModalVisible: function (e) { return handleUpdateModalVisible(e); }, handleViewModalVisible: function (e) { return handleViewModalVisible(e); }, handleRemove: function (id, actionRefs) { return HandleOps_1.handleRemoveSys(id, actionRefs, NamespaceEnum_1["default"].Role); } }) :
            react_1["default"].createElement(pro_table_1["default"], { actionRef: actionRef, rowKey: "roleId", toolBarRender: function (action, _a) {
                    var selectedRows = _a.selectedRows;
                    return [
                        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.PlusOutlined, null), type: "primary", onClick: function () { return handleModalVisible(true); } }, "\u65B0\u5EFA"),
                    ];
                }, params: params, request: function (requestParams) {
                    return CommonService_1.retrievePageList(requestParams, NamespaceEnum_1["default"].Role);
                }, columns: columns, tableAlertRender: false, rowSelection: {}, search: { collapseRender: function () { return false; }, collapsed: false }, pagination: {
                    pageSize: constants_1.DEFAULT_PAGE_SIZE,
                    showQuickJumper: false,
                    // showSizeChanger: false,
                    hideOnSinglePage: true
                }, onChange: function (pagination, filters, sorter) {
                    var parameters = __assign({ filed: sorter.field, order: sorter.order }, filters);
                    setParams(parameters);
                } }),
        createModalVisible && react_1["default"].createElement(CreateForm_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setSubmitting(true);
                            return [4 /*yield*/, HandleOps_1.handleAddSys(value, NamespaceEnum_1["default"].Role)];
                        case 1:
                            success = _b.sent();
                            setSubmitting(false);
                            if (success) {
                                handleModalVisible(false);
                                (_a = actionRef.current) === null || _a === void 0 ? void 0 : _a.reload();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () { return handleModalVisible(false); }, submitting: submitting, modalVisible: createModalVisible }),
        updateModalVisible && react_1["default"].createElement(UpdateForm_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setSubmitting(true);
                            return [4 /*yield*/, HandleOps_1.handleUpdateSys(value, NamespaceEnum_1["default"].Role)];
                        case 1:
                            success = _b.sent();
                            setSubmitting(false);
                            if (success) {
                                handleUpdateModalVisible(false);
                                setEditFormValues({});
                                (_a = actionRef.current) === null || _a === void 0 ? void 0 : _a.reload();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () {
                handleUpdateModalVisible(false);
                setEditFormValues({});
            }, updateModalVisible: updateModalVisible, submitting: submitting, values: editFormValues }),
        viewModalVisible && react_1["default"].createElement(ViewForm_1["default"], { onCancel: function () { return handleViewModalVisible(false); }, viewModalVisible: viewModalVisible, values: viewFormValues })));
};
exports["default"] = RoleTableList;
