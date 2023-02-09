import NamespaceEnum from "@/constants/NamespaceEnum";
import httpBaseConfig from '../api/base/httpBaseConfig';
import { ProColumns } from "@ant-design/pro-table";
import { USER_ID, TOKEN, DEV_ID, DEPT_ID, IS_TABLE_STYLE, LOGIN_INFO, PERM_INFO, DEPT_Name } from "@/constants/constants";
import SimpleStorage from '../global/SimpleStore';
import { message } from 'antd';

export function composeUrl(type: any) {
  let urls = httpBaseConfig.baseUrl

  switch (type) {
    case type == 'base':
      urls = httpBaseConfig.imgUrl;
      break;
    case type == 'qrcode':
      urls = httpBaseConfig.imgurl2;
      break;
    case type == 'card':
      urls = httpBaseConfig.imgurl3;
      break;
    case type == 'material':
      urls = httpBaseConfig.imgurl4;
      break;
    default:
      break;
  }

  return urls
}

export function composeBaseUrl() {
  const baseUrl = httpBaseConfig.baseUrl;
  const port = httpBaseConfig.port;
  const prefix = httpBaseConfig.prefix;
  //const microService = httpBaseConfig.microService;

  return `${baseUrl}${port}${prefix}`;
}
export function constructImportUrl(namespace: NamespaceEnum) {
  const baseUrl = composeBaseUrl();
  console.log(';asdasdsasd', `${baseUrl}${namespace}/import`);

  return `${baseUrl}${namespace}/import`;
}

// 轮播图
export function imgUploadUrls() {
  const baseUrl = httpBaseConfig.baseUrl;
  const port = httpBaseConfig.port;
  //const microService = httpBaseConfig.microService;
  let _baseUrl = `${baseUrl}${port}`;
  return `${_baseUrl}file/upload`;
}

// 物资
export function materialImgUploadUrls() {
  const baseUrl = composeBaseUrl();
  return `${baseUrl}file/upload/material`;
}

// 名片
export function businessCardImgUploadUrls() {
  const baseUrl = composeBaseUrl();
  return `${baseUrl}file/upload/businessCard`;
}

export function imgUploadUrl() {
  // const baseUrl = composeBaseUrl();
  const baseUrl = httpBaseConfig.baseUrl;
  const port = httpBaseConfig.port;
  //const microService = httpBaseConfig.microService;
  let _baseUrl = `${baseUrl}${port}`;
  return `${_baseUrl}/file/upload`;
}

export async function fileUploadUrl() {
  const baseUrl = composeBaseUrl();
  return `${baseUrl}minio/upload`;
}

export function minioUrl() {
  const baseUrl = httpBaseConfig.minioUrl;
  return `${baseUrl}/`;
}


export async function fileDownloadUrl() {
  const baseUrl = composeBaseUrl();
  return `${baseUrl}minio/download`;
}

export async function FilterToMap(fields: any) {
  let map = new Map();
  let timeMap = new Map();
  for (let key in fields) {
    if (fields[key] && Array.isArray(fields[key])) {

      //数据库设计时时间字段都规定了必须以Time结尾
      if (key.endsWith("Time")) {
        map = new Map();
        let [startTime, endTime] = fields[key];
        timeMap[`${key}StartTime`] = startTime;
        timeMap[`${key}EndTime`] = endTime;
        delete fields[key];
        // fields["params"] = timeMap;

        fields[`${key}StartTime`] = timeMap[`${key}StartTime`]
        fields[`${key}EndTime`] = timeMap[`${key}EndTime`]
      }
      // }else{
      //     timeMap = new Map();
      //     map[key] = fields[key]
      //     delete fields[key]; 
      //     fields["params"] = map;
      // }


    }

  }

}

export function getLableFromType(proColumns: ProColumns<any>[], dataIndex: string, type: string) {
  
  console.log('1111111')
  
  const label = proColumns
    .filter((column) => column.dataIndex === dataIndex)
    .filter((value) => value.valueEnum)
    .map((value) => value.valueEnum && value.valueEnum[type]?.text);

  //   .map((value:any)=>{return value.text})
  return label && label[0]

}

export function uploadFile(info: any) {
  const { status } = info.file;
  if (status !== 'uploading') {
    // console.log(info.file, info.fileList);
  }
  if (status === 'done') {
    message.success(`${info.file.name} 上传成功`);
  } else if (status === 'error') {
    message.error(`${info.file.name} 上传失败`);
  }
  return info && info.fileList;
}

//常态化
export function populateFile(fieldsValue: any) {
  if (fieldsValue.file) {
    let fileList: any[] = [];
    let createBy = getUserIdFromStorage();
    fieldsValue.file.map((fileData: any) => {
      let file: any = { createBy: createBy };
      file.fileUrl = fileData.response.fileUrl;
      file.fileName = fileData.response.fileName;
      file.fileSize = fileData.response.fileSize;
      file.docType = fileData.response.fileType;
      if (fieldsValue.fileType) file.fileType = fieldsValue.fileType;
      if (fieldsValue.generalType) file.generalType = fieldsValue.generalType;
      file.deptId = getDeptIdFromStorage();
      fileList.push(file);
    });
    fieldsValue.regularFileList = fileList;
  }
  return fieldsValue;
}

//常态化外电源追溯图
export function populateFileCustomer(fieldsValue: any, generalId: any) {
  if (fieldsValue.file) {
    let fileList: any[] = [];
    let createBy = getUserIdFromStorage();
    fieldsValue.file.map((fileData: any) => {
      let file: any = { createBy: createBy };
      file.fileUrl = fileData.response.fileUrl;
      file.fileName = fileData.response.fileName;
      file.fileSize = fileData.response.fileSize;
      file.docType = fileData.response.fileType;
      if (fieldsValue.fileType) file.fileType = fieldsValue.fileType;
      file.generalType = 14;
      file.generalId = generalId;
      file.deptId = getDeptIdFromStorage();
      fileList.push(file);
    })
    return fileList;
  }
}

//常态化工程管理
export function populateFileEngineering(fieldsValue: any) {
  let createBy = getUserIdFromStorage();
  let fileList: any[] = [];
  for (var i = 3; i < 10; i++) {
    if (fieldsValue['file' + i]) {
      fieldsValue['file' + i].map((fileData: any) => {
        let file: any = { createBy: createBy };
        file.fileUrl = fileData.response.fileUrl;
        file.fileName = fileData.response.fileName;
        file.fileSize = fileData.response.fileSize;
        file.docType = fileData.response.fileType;
        file.generalType = i;
        if (fieldsValue.fileType) file.fileType = fieldsValue.fileType;
        file.deptId = getDeptIdFromStorage();
        fileList.push(file);
      });
      fieldsValue.regularFileList = fileList;
    }
  }
  return fieldsValue;
}

//重大活动
export function zdPopulateFile(fieldsValue: any, developId: number, generalIdType: number, fileType: number) {
  if (fieldsValue.file) {
    let fileList: any[] = [];
    let createBy = getUserIdFromStorage();
    fieldsValue.file.map((fileData: any) => {
      let file: any = { createBy: createBy };
      file.fileUrl = fileData.response.fileUrl;
      file.fileName = fileData.response.fileName;
      file.fileSize = fileData.response.fileSize;
      file.docType = fileData.response.fileType;
      if (fieldsValue.fileType) file.fileType = fieldsValue.fileType;
      file.deptId = getDeptIdFromStorage();
      file.developmentId = developId;
      file.generalIdType = generalIdType;
      file.fileType = fileType;
      fileList.push(file);
    })
    return fileList;
  }
}


export function getUserIdFromStorage() {
  return SimpleStorage.get(USER_ID) || 1;
}

export function getDeptIdFromStorage() {
  return SimpleStorage.get(DEPT_ID) || 1;
}

export function getDeptNameFromStorage() {
  return SimpleStorage.get(DEPT_Name) || "GWXX城区XX公司XXXXX领导小组";
}

export function getTokenFromStorage() {
  return SimpleStorage.get('TOKEN');
}

//获取当前重大活动的ID
export function getDevelopmentIdFromStorage() {
  return SimpleStorage.get(DEV_ID) || 1;
}

//获取当前重大活动的ID
export function getFileDisplayStyleFromStorage() {
  return SimpleStorage.get(IS_TABLE_STYLE) || true;
}

export function saveLoginUserToStorage(user: any, token: string) {
  SimpleStorage.save(LOGIN_INFO, user)
  SimpleStorage.save(USER_ID, user.userId)
  SimpleStorage.save(TOKEN, token)
}

export function deleteLoginUserFromStorage() {
  SimpleStorage.delete(LOGIN_INFO)
  SimpleStorage.delete(USER_ID)
  SimpleStorage.delete(TOKEN)
}

export function getLoginUserFromStorage() {
  return SimpleStorage.get(LOGIN_INFO);

}

export function saveLoginUserPermsToStorage(perm: any) {
  SimpleStorage.save(PERM_INFO, perm)
}

export function hasPerm(perm: String) {
  //console.log(JSON.stringify(SimpleStorage.get(PERM_INFO)))
  return getUserIdFromStorage() == 1 || (SimpleStorage.get(PERM_INFO) && SimpleStorage.get(PERM_INFO).indexOf(perm) > -1)
}


export function userDisplay(list: any[] | undefined) {
  let display = list ? list.map((technicalSupport: any) => {
    if (technicalSupport.sysUser?.phonenumber) return (technicalSupport.sysUser?.loginName + '(' + technicalSupport.sysUser?.phonenumber + ')')
    else return technicalSupport.sysUser?.loginName
  }
  ).join(",") : "--";

  return display;
}

export function getMultipleDescendantPropValue(obj: any, propKeys: string) {
  let keys = propKeys.split(",");
  let val = "";
  for (let i = 0; i < keys.length; i++) {
    if (i == 0) {
      val = getDescendantPropValue(obj, keys[i]);
    }
    else {
      val = val + "[" + getDescendantPropValue(obj, keys[i]) + "]";
    }
  }

  return val;
}


export function getDescendantPropValue(obj: any, propKey: string) {
  //console.log("propKey " + propKey);
  let arr = propKey.split(".");
  let val = obj;
  for (let i = 0; i < arr.length; i++) {
    val = val[arr[i]];
  }
  //console.log("Val values final  : " + JSON.stringify(val));
  return val;
}