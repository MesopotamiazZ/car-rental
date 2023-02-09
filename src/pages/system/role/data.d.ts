import type BaseEntity from '@/global/BaseEntity';
export type Role = BaseEntity & {
  roleName?: string;  // 角色名称 
  createId?: number;  // 创建者 
  createTime?: date;  // 创建时间 
  modifyId?: string;  // 更新者 
  modifyTime?: date;  // 更新时间 
  description?: string;
  status?: string;
}
