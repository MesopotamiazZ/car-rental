import type BaseEntity from '@/global/BaseEntity';
export type Oss = BaseEntity & {
  url? : string ;  // url地址 
  createId? : number ;  // 创建者 
  createTime? : date ;  // 创建时间 
  modifyId? : string ;  // 更新者 
  modifyTime? : date ;  // 更新时间 
}
