"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var pro_layout_1 = require("@ant-design/pro-layout");
exports["default"] = (function () { return (react_1["default"].createElement(pro_layout_1.PageHeaderWrapper, { content: " \u8FD9\u4E2A\u9875\u9762\u53EA\u6709 admin \u6743\u9650\u624D\u80FD\u67E5\u770B" },
    react_1["default"].createElement(antd_1.Card, null,
        react_1["default"].createElement(antd_1.Alert, { message: "umi ui \u73B0\u5DF2\u53D1\u5E03\uFF0C\u6B22\u8FCE\u4F7F\u7528 npm run ui \u542F\u52A8\u4F53\u9A8C\u3002", type: "success", showIcon: true, banner: true, style: {
                margin: -12,
                marginBottom: 48
            } }),
        react_1["default"].createElement(antd_1.Typography.Title, { level: 2, style: { textAlign: 'center' } },
            react_1["default"].createElement(icons_1.SmileTwoTone, null),
            " \u4E2D\u671F\u6D4B\u8BC4\u7BA1\u7406\u5E73\u53F0 ",
            react_1["default"].createElement(icons_1.HeartTwoTone, { twoToneColor: "#eb2f96" }),
            " You")),
    react_1["default"].createElement("p", { style: { textAlign: 'center', marginTop: 24 } },
        "Want to add more pages? Please refer to",
        ' ',
        react_1["default"].createElement("a", { href: "https://pro.ant.design/docs/block-cn", target: "_blank", rel: "noopener noreferrer" }, "use block"),
        "\u3002"))); });
