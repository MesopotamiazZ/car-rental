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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
var pro_layout_1 = require("@ant-design/pro-layout");
var react_1 = require("react");
var umi_1 = require("umi");
// import { GithubOutlined } from '@ant-design/icons';
var antd_1 = require("antd");
var Authorized_1 = require("@/utils/Authorized");
var RightContent_1 = require("@/components/GlobalHeader/RightContent");
var utils_1 = require("@/utils/utils");
var logo_svg_1 = require("../assets/logo.svg");
var constants_1 = require("../constants/constants");
var menu_1 = require("@/services/menu");
// import './UserLayout.less';
var noMatch = (react_1["default"].createElement(antd_1.Result, { status: 403, title: "403", subTitle: "Sorry, you are not authorized to access this page.", extra: react_1["default"].createElement(antd_1.Button, { type: "primary" },
        react_1["default"].createElement(umi_1.Link, { to: "/user/login" }, "Go Login")) }));
/**
 * use Authorized check all menu item
 */
var menuDataRender = function (menuList) {
    return menuList.map(function (item) {
        var localItem = __assign(__assign({}, item), { children: item.children ? menuDataRender(item.children) : undefined });
        return Authorized_1["default"].check(item.authority, localItem, null);
    });
};
var defaultFooterDom = (react_1["default"].createElement(pro_layout_1.DefaultFooter, { copyright: react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("span", null, new Date().getFullYear() + "  \u4E2D\u6C7D\u6D4B\u8BC4"),
        react_1["default"].createElement("span", { style: { marginLeft: '10px' }, onClick: function () { window.open('https://beian.miit.gov.cn/'); } }, "\u6D25ICP\u59072020010153\u53F7-5")), links: [
    // {
    //   key: '津ICP备2020010153号-5',
    //   title: '津ICP备2020010153号-5',
    //   href: 'https://beian.miit.gov.cn/',
    //   // blankTarget: true,
    // },
    // {
    //   key: 'github',
    //   title: 'github',
    //   href: 'https://github.com/ant-design/ant-design-pro',
    //   blankTarget: true,
    // },
    // {
    //   key: 'Ant Design',
    //   title: 'Ant Design',
    //   href: 'https://ant.design',
    //   blankTarget: true,
    // },
    ] }));
var BasicLayout = function (props) {
    var dispatch = props.dispatch, children = props.children, settings = props.settings, _a = props.location, location = _a === void 0 ? {
        pathname: '/'
    } : _a;
    /**
     * constructor
     */
    console.log('propspropspropspropsprops', props);
    react_1.useEffect(function () {
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent'
            });
        }
    }, []);
    /**
     * init variables
     */
    var _b = react_1.useState([]), menuData = _b[0], setMenuData = _b[1];
    var _c = react_1.useState([]), allMenuData = _c[0], setAllMenuData = _c[1];
    var oldMenu = [
        {
            path: '/',
            redirect: '/dashboard/analysis'
        },
        {
            path: '/dashboard',
            name: '工作台',
            children: [
                {
                    name: '首页',
                    icon: 'smile',
                    path: '/dashboard/analysis',
                    component: './dashboard/analysis'
                },
            ]
        },
    ];
    var _d = react_1.useState([
        { page: '1', name: '平台管理' },
        { page: '2', name: '运营管理' },
        { page: '3', name: '客服系统' },
    ]), pageTypes = _d[0], setPageTypes = _d[1];
    var _e = react_1.useState({ page: '1', name: '平台管理' }), pageType = _e[0], setPageType = _e[1];
    react_1.useEffect(function () {
        if (!constants_1.IS_IGNORE_LOGIN) {
            menu_1.getMenuByUser2(localStorage.getItem('USER_ID'))
                .then(function (res) {
                var newData = treeDataFormat((res === null || res === void 0 ? void 0 : res.menuList) || []);
                console.log('newData', newData);
                setAllMenuData(newData);
                changeTabMenu(newData, pageType);
                // let arrs: any = [...oldMenu, ...newData]
                // localStorage.setItem('newMenus', JSON.stringify(arrs));
            })["catch"](function () { });
        }
    }, []);
    function changeTabMenu(allMenuData, pageType) {
        // let menus = allMenuData.find((item: any, index: any) => item.name == pageType.name)
        setMenuData(__spreadArrays((allMenuData || [])));
    }
    function treeDataFormat(data) {
        var newData = data.map(function (item) {
            item.path = '' + (item.url || item.name);
            if (item.children) {
                item.children = treeDataFormat(item.children || []);
            }
            return item;
        });
        return newData;
    }
    var handleMenuCollapse = function (payload) {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload: payload
            });
        }
    }; // get children authority
    var authorized = utils_1.getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
        authority: undefined
    };
    var formatMessage = umi_1.useIntl().formatMessage;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(pro_layout_1["default"], __assign({ logo: logo_svg_1["default"], 
            // formatMessage={formatMessage}
            onCollapse: handleMenuCollapse, onMenuHeaderClick: function () { return umi_1.history.push('/'); }, 
            //死菜单
            // menuDataRender={(menuData) => {
            //   console.log(menuData)
            //   return menuData
            // }}
            //活菜单
            menuDataRender: function () { return menuData; }, 
            // menuDataRender={() => {
            //   let newMenus: any = localStorage.getItem('newMenus')
            //   return JSON.parse(newMenus)
            // }}
            menuItemRender: function (menuItemProps, defaultDom) {
                if (menuItemProps.isUrl || !menuItemProps.path) {
                    return defaultDom;
                }
                // console.log('menuItemProps', menuItemProps)
                // console.log('defaultDom', defaultDom)
                return react_1["default"].createElement(umi_1.Link, { to: menuItemProps.path }, menuItemProps.name);
            }, breadcrumbRender: function (routers) {
                if (routers === void 0) { routers = []; }
                return __spreadArrays([
                    {
                        path: '/',
                        breadcrumbName: formatMessage({
                            id: 'menu.home'
                        })
                    }
                ], routers);
            }, 
            // itemRender={(route, params, routes, paths) => {
            //   const first = routes.indexOf(route) === 0;
            //   return first ? (
            //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
            //   ) : (
            //     <span>{route.breadcrumbName}</span>
            //   );
            // }}
            layout: 'mix', footerRender: function () { return defaultFooterDom; }, 
            // menuDataRender={menuDataRender}
            rightContentRender: function () { return react_1["default"].createElement(RightContent_1["default"], null); } }, props, settings),
            react_1["default"].createElement(Authorized_1["default"], { authority: authorized.authority, noMatch: noMatch }, children))));
};
exports["default"] = umi_1.connect(function (_a) {
    var global = _a.global, settings = _a.settings;
    return ({
        collapsed: global.collapsed,
        settings: settings
    });
})(BasicLayout);
