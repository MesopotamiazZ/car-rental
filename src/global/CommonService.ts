import request from '../api/base/request';
import NamespaceEnum from '@/constants/NamespaceEnum';
import ResponseCodeEnum from '@/constants/ResponseCodeEnum';
import httpBaseConfig from '../api/base/httpBaseConfig';
import { BaseEntity } from './BaseEntity';
import StatusEnum from '@/constants/StatusEnum';
import { getOrderBy } from './HandleOps';
import { FilterToMap, getUserIdFromStorage } from './CommonUtils';
import { Form } from 'antd';

export async function retrievePageListCommon(params: any, namespace: NamespaceEnum, path: string) {
  // const pageNum:number = params.current || 1;
  // const pageSize:number =params.pageSize || 20;
  // const orderByColumn:string = params.field || "create_time";
  // const isAsc:string = getOrderBy(params.order) || 'desc';
  // const pd={pd:{pageNum,pageSize,orderByColumn,isAsc}};

  const current: number = params.current || 1;
  const size: number = params.pageSize || 1000;
  // const orderByColumn:string = params.field || "create_time";
  // const isAsc:string = getOrderBy(params.order) || 'desc';
  params.pageSize = undefined;
  params.current = undefined;
  params.field = undefined;

  const page = {
    page: {
      current, size,
      "orderBy": "create_time",
      "isAsc": "desc"
    }
  };
  // if (params.page) {
  //   for (let key in params.page) {
  //     page.page[key] = params.pd[key]
  //   }
  // }
  FilterToMap(params);
  // console.log(params)
  // return request.post(`${namespace}/${path}`, {...params,...pd,status:StatusEnum.ACTIVE} ) .then(function({ data }) {

  //   console.log(data)
  //   return data && data.code ===ResponseCodeEnum.SUCCESS ?{
  //     data: data.rows,
  //     total: data.total,
  //     ...params,
  //   }:{data:[]};

  // })
  // return request.post(`${namespace}/${path}`, {...params,...pd,status:StatusEnum.ACTIVE} ) .then((data)=>{

  let newParams: any = {};

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (Boolean(params[key])) {
        newParams[key] = params[key];
      }
    }
  }


  return request.post(`${namespace}/${path}`, { ...newParams, ...page, }).then((data: any) => {

    return data && data.code === ResponseCodeEnum.SUCCESS ? {
      data: data.data.records,
      total: data.data.total,
      ...params,
      oldData: data
    } : { data: [] };

  })
}



export async function retrievePageListCommonSys(params: any, namespace: NamespaceEnum, path: string) {


  const current: number = params.current || 1;
  const size: number = params.pageSize || 1000;


  const page = current + ''
  const limit = size + ''

  params.pageSize = undefined;
  params.current = undefined;
  params.field = undefined;


  FilterToMap(params);


  let newParams: any = {};

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (Boolean(params[key])) {
        newParams[key] = params[key];
      }
    }
  }


  return request.post(`${namespace}/${path}`, { ...newParams, page, limit, "sidx":"create_time",
          "order":"desc" }).then((data: any) => {
    return data && data.code === ResponseCodeEnum.SUCCESS ? {
      data: data.page.list,
      total: data.page.totalCount,
      ...params,
    } : { data: [] };

  })
}


// 结算管理用
export async function retrievePageListCommonSysJs(params: any, namespace: NamespaceEnum, path: string) {


  const current: number = params.current || 1;
  const size: number = params.pageSize || 1000;


  const page = current + ''
  const limit = size + ''

  params.pageSize = undefined;
  params.current = undefined;
  params.field = undefined;


  // FilterToMap(params);

  let newParams: any = {};

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (Boolean(params[key])) {
        newParams[key] = params[key];
      }
    }
  }


  return request.post(`${namespace}/${path}`, { ...newParams, page, limit }).then((data: any) => {
    return data && data.code === ResponseCodeEnum.SUCCESS ? {
      data: data.data,
      total: data.total,
      ...params,
    } : { data: [] };

  })
}


export async function retrievePageListCommonTreeSys(params: any, namespace: NamespaceEnum, path: string) {


  const current: number = params.current || 1;
  const size: number = params.pageSize || 1000;


  const page = current + ''
  const limit = size + ''

  params.pageSize = undefined;
  params.current = undefined;
  params.field = undefined;


  FilterToMap(params);


  let newParams: any = {};

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      if (Boolean(params[key])) {
        newParams[key] = params[key];
      }
    }
  }


  return request.post(`${namespace}/${path}`, { ...newParams, page, limit }).then((data: any) => {
    return data && data.code === ResponseCodeEnum.SUCCESS ? {
      data: data.menuList,
      total: data.menuList.length,
      ...params,
    } : { data: [] };

  })
}

export async function retrievePageList(params: any, namespace: NamespaceEnum) {
  return retrievePageListCommon(params, namespace, 'list/page');
}

export async function getById(id: number, namespace: any) {
  return request.get(`${namespace}/${id}`);
}
export async function getByIdByView(id: number, namespace: any) {
  return request.get(`${namespace}/${namespace}/${id}`);
}

export async function create(entity: BaseEntity, namespace: NamespaceEnum) {
  if (!entity.createBy) entity.createBy =Number(getUserIdFromStorage());

  // console.log("getUserIdFromStorage()=" + getUserIdFromStorage())
  return request.post(`${namespace}/add`, entity);
}

export async function createBatch(entity: BaseEntity[], namespace: NamespaceEnum) {
  return request.post(`${namespace}/add`, entity);
}

export async function update(entity: BaseEntity, namespace: NamespaceEnum) {
  if (!entity.modifyId) entity.modifyId = Number(getUserIdFromStorage());
  return request.post(`${namespace}/edit`, entity);
}


export async function remove(ids: number[], namespace: NamespaceEnum) {
  // let entity: BaseEntity = { ids };
  // return request.delete(`${namespace}/remove`, entity);
  return request.get(`${namespace}/delete/`+ids.join(","), ids);
}

export async function removeById(id: number, namespace: NamespaceEnum) {
  // let entity: BaseEntity = {};
  // return request.delete(`${namespace}/remove/` + id, entity);
  let entity: BaseEntity = { id };
  return request.get(`${namespace}/delete/`+id, entity);
}

export async function exportTable(namespace: NamespaceEnum, ids?: number[]) {
  let entity: BaseEntity = { ids, status: StatusEnum.ACTIVE };
  return request.post(`${namespace}/export`, entity);
}

export function getImportUrl(namespace: NamespaceEnum) {
  let url = `${httpBaseConfig.baseUrl}${httpBaseConfig.port}${httpBaseConfig.prefix}${namespace}/import`
  return url;
}

export async function retrieveToBeAllocatedPageList(params: any, namespace: NamespaceEnum) {

  return retrievePageListCommon(params, namespace, '/toAllocateList');
}


export async function progressTitle(params: any, namespace: NamespaceEnum) {
  return request.post(`${namespace}/selectExecutionProgressTitle`, params);
}

export async function agentTaskAdds(params: any, namespace: NamespaceEnum) {
  return request.post(`${namespace}/adds`, params);
}


export async function retrievePageListSys(params: any, namespace: NamespaceEnum) {
  return retrievePageListCommonSys(params, namespace, 'list/page');
}

// 结算管理用
export async function retrievePageListSysJs(params: any, namespace: any) {
  return retrievePageListCommonSysJs(params, namespace, 'list');
}

export async function retrievePageListTreeSys(params: any, namespace: NamespaceEnum) {
  return retrievePageListCommonTreeSys(params, namespace, 'list/tree');
}
export async function createSys(entity: BaseEntity, namespace: NamespaceEnum) {
  if (!entity.createBy) entity.createBy = getUserIdFromStorage();
  // console.log("getUserIdFromStorage()=" + getUserIdFromStorage())
  return request.post(`${namespace}/add`, entity);
}

export async function updateSys(entity: BaseEntity, namespace: NamespaceEnum) {
  // if (!entity.updateBy) entity.updateBy = getUserIdFromStorage();
  return request.post(`${namespace}/edit`, entity);
}

export async function removeSys(ids: number[], namespace: NamespaceEnum) {
  return request.get(`${namespace}/delete`+`/${ids}`);
}

export async function removeSysById(ids: number[], namespace: NamespaceEnum) {
  let entity: BaseEntity = { ids };
  return request.get(`${namespace}/deleteById/`+ids.join(","), entity);
}

export async function removeByIdSys(id: number, namespace: NamespaceEnum) {
  let entity: BaseEntity = {};
  return request.get(`${namespace}/deleteById/` + id, entity);
}