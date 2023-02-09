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
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var CommonUtils_1 = require("@/global/CommonUtils");
var index_less_1 = require("./index.less");
var icon_card_1_png_1 = require("@/assets/icon-card-1.png");
var httpBaseConfig_1 = require("../../api/base/httpBaseConfig");
var utils_1 = require("@/utils/utils");
function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () { return callback(reader.result); });
    reader.readAsDataURL(img);
}
function getUrlName(url) {
    var i = url.lastIndexOf('/');
    return url.slice(i + 1);
}
var OImgUpload = function (props) {
    var _a = react_1.useState(''), imageUrl = _a[0], setImageUrl = _a[1];
    // console.log("props.url",props.url,props);
    react_1.useEffect(function () {
        // setImageUrl(props.imageUrl)
        // console.log("value",props.value);
    }, [props.value]);
    var defaultFileList = [];
    if (Array.isArray(props.value)) {
        defaultFileList = [];
        console.log('props.value []', props.value);
        for (var i = 0; i < props.value.length; i++) {
            defaultFileList.push({
                uid: Date.now() + '',
                name: getUrlName(props.value[i]),
                status: 'done',
                url: utils_1.formatImgUrl(props.value[i])
            });
        }
    }
    else if (typeof props.value == 'string') {
        defaultFileList = [];
        console.log('props.value str', props.value, props);
        // props.value = formatImgUrl(props.value);
        defaultFileList.push({
            uid: Date.now() + '',
            name: getUrlName(props.value),
            status: 'done',
            url: utils_1.formatImgUrl(props.value)
        });
    }
    var pigts = {
        name: props.name,
        multiple: props.multiple,
        action: props.action,
        maxCount: props.maxCount,
        listType: props.listType,
        // data: props.data,
        // headers:{userId:getUserIdFromStorage(),Authorization : "Bearer " + getTokenFromStorage()},
        headers: { Authorization: CommonUtils_1.getTokenFromStorage() },
        showUploadList: props.showUploadList,
        onPreview: function (file) {
            props.onPreview && props.onPreview(file);
        },
        onRemove: function (file) {
            return true;
        },
        defaultFileList: defaultFileList,
        // beforeUpload(file: any) {
        //   // const isJpg = file.type === 'image/jpeg';
        //   const isJpg = file.type === 'image/jpeg' || file.type === 'image/png';
        //   if (!isJpg) {
        //     message.error('图片格式错误');
        //   }
        //   return isJpg;
        // },
        onChange: function (info) {
            var _a, _b, _c;
            console.log(info);
            var _d = info.file, status = _d.status, response = _d.response;
            if (status == 'done' && response.code == 200) {
                antd_1.message.success('上传成功');
                // getBase64(info.file.originFileObj, imageUrl =>
                //   setImageUrl(imageUrl) /test/temp/575255326639566848.jpg
                // );
                if (typeof response.data == 'string') {
                    response.data = JSON.parse(response.data);
                }
                console.log('upload file response', response);
                var imgurl = response.data.name;
                var newUrl = imageUrl + imgurl;
                setImageUrl(newUrl);
                props.onFinishUpload && props.onFinishUpload(imgurl);
            }
            if (status === 'removed') {
                console.log('onRemove', info);
                var findUrl_1 = utils_1.formatImgUrlClear(((_a = info === null || info === void 0 ? void 0 : info.file) === null || _a === void 0 ? void 0 : _a.url) || ((_c = (_b = info === null || info === void 0 ? void 0 : info.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.name));
                var arr = imageUrl.split(',');
                arr.splice(arr.findIndex(function (item) { return item === findUrl_1; }), 1);
                setImageUrl(arr.join(','));
                // setImageUrl("")
                props.onRemove && props.onRemove(info.file);
            }
            if (status == 'error') {
                antd_1.message.error('上传失败');
            }
        }
    };
    var uploadButton = (react_1["default"].createElement("div", { className: props.isImgs ? '' : index_less_1["default"].antUploadText }, props.isImgs ? (react_1["default"].createElement("div", { style: {
            width: 140,
            minHeight: 80,
            backgroundImage: 'url(' + icon_card_1_png_1["default"] + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        } }, !props.imgTypes && (react_1["default"].createElement("img", { src: "" + httpBaseConfig_1["default"].imgUrls + props.isImgs, alt: "", style: { width: 140 } })))) : (react_1["default"].createElement("div", null,
        react_1["default"].createElement("img", { src: icon_card_1_png_1["default"] }),
        react_1["default"].createElement("div", null, "\u4E0A\u4F20\u56FE\u7247")))));
    var imgsrc = '';
    console.log('defaultFileList', pigts);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, props.cropHide ? (react_1["default"].createElement(antd_1.Upload, __assign({}, pigts), imageUrl
        ? imageUrl.split(',').map(function (item) {
            return react_1["default"].createElement("img", { src: "" + item, alt: "", style: { width: 140 } });
        })
        : uploadButton)) : (
    // <ImgCrop aspect={props.aspect}>
    react_1["default"].createElement(antd_1.Upload, __assign({}, pigts),
        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.UploadOutlined, null) }, "Upload"))
    // </ImgCrop>
    )));
};
{
    /* {imageUrl ? <img src={`${imageUrl}`} alt="" style={{ width: 140, }} /> : uploadButton} */
}
OImgUpload.defaultProps = {
    // url: 'http://123.56.128.228:9001/minio/upload',
    data: {
        bucketName: 'avatar'
    },
    listType: 'picture',
    maxCount: 1,
    multiple: false,
    name: 'file',
    showUploadList: true
};
exports["default"] = OImgUpload;
