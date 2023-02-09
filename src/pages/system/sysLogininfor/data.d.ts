import type BaseEntity from '@/global/BaseEntity';
export type SysLogininfor = BaseEntity & {
  loginName? : string ;  // 登录账号 
  ipaddr? : string ;  // 登录IP地址 
  loginLocation? : string ;  // 登录地点 
  browser? : string ;  // 浏览器类型 
  os? : string ;  // 操作系统 
  msg? : string ;  // 提示消息 
  loginTime? : date ;  // 访问时间 
  createId? : number ;  // 创建者 
  createTime? : date ;  // 创建时间 
  modifyId? : string ;  // 更新者 
  modifyTime? : date ;  // 更新时间 
}
