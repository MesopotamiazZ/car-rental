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
exports.__esModule = true;
var pro_layout_1 = require("@ant-design/pro-layout");
var react_helmet_async_1 = require("react-helmet-async");
var umi_1 = require("umi");
var react_1 = require("react");
var logo_svg_1 = require("../assets/logo.svg");
var UserLayout_less_1 = require("./UserLayout.less");
var UserLayout = function (props) {
    var _a = props.route, route = _a === void 0 ? {
        routes: []
    } : _a;
    var _b = route.routes, routes = _b === void 0 ? [] : _b;
    var children = props.children, _c = props.location, location = _c === void 0 ? {
        pathname: ''
    } : _c;
    var formatMessage = umi_1.useIntl().formatMessage;
    var breadcrumb = pro_layout_1.getMenuData(routes).breadcrumb;
    var title = pro_layout_1.getPageTitle(__assign({ pathname: location.pathname, formatMessage: formatMessage,
        breadcrumb: breadcrumb }, props));
    return (react_1["default"].createElement(react_helmet_async_1.HelmetProvider, null,
        react_1["default"].createElement(react_helmet_async_1.Helmet, null,
            react_1["default"].createElement("title", null, title),
            react_1["default"].createElement("meta", { name: "description", content: title })),
        react_1["default"].createElement("div", { className: UserLayout_less_1["default"].container },
            react_1["default"].createElement("div", { className: UserLayout_less_1["default"].lang },
                react_1["default"].createElement(umi_1.SelectLang, null)),
            react_1["default"].createElement("div", { className: UserLayout_less_1["default"].content },
                react_1["default"].createElement("div", { className: UserLayout_less_1["default"].top },
                    react_1["default"].createElement("div", { className: UserLayout_less_1["default"].header },
                        react_1["default"].createElement(umi_1.Link, { to: "" },
                            react_1["default"].createElement("img", { alt: "logo", className: UserLayout_less_1["default"].logo, src: logo_svg_1["default"] }),
                            react_1["default"].createElement("span", { className: UserLayout_less_1["default"].title }, "\u540E\u53F0\u7BA1\u7406\u5E73\u53F0"))),
                    react_1["default"].createElement("div", { className: UserLayout_less_1["default"].desc }, "\u540E\u53F0\u7BA1\u7406\u5E73\u53F0")),
                children),
            react_1["default"].createElement(pro_layout_1.DefaultFooter, { copyright: react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("span", null, new Date().getFullYear() + "  \u4E2D\u6C7D\u6D4B\u8BC4"),
                    react_1["default"].createElement("span", { style: { marginLeft: '10px' }, onClick: function () {
                            window.open('https://beian.miit.gov.cn/');
                        } }, "\u6D25ICP\u59072020010153\u53F7-5")), links: [
                    {
                        key: '',
                        title: '',
                        href: ''
                    },
                ] }))));
};
exports["default"] = umi_1.connect(function (_a) {
    var settings = _a.settings;
    return (__assign({}, settings));
})(UserLayout);
