import PageDomain from './PageDomain'
export interface BaseEntity extends PageDomain{
    id?: number
    ids?: number[]
    createBy?: number;
    createTime?: date;
    updateBy?: number;
    modifyId?:number;
    createId?:number;
    updateTime?: date;
    delFlg?: string;
    remark?: string;
    searchValue?: string;
    status?:StatusEnum
    params?:map;
    deptId?:number;
    timestamps?:boolean
  }



