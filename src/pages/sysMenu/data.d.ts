import BaseEntity from '@/global/BaseEntity';

export interface SysMenu extends BaseEntity {
	
      	   parentId? : number ;  // 父部门 
         	   name? : string ;  // 菜单名称 
         	   url? : string ;  // 请求地址 
         	   perms? : string ;  // 权限标识(多个用逗号分隔，如：user:list,user:create) 
            type? : string ;  // 菜单类型:下拉框要求字符串编辑框才会反显
         	   icon? : string ;  // 菜单图标 
         	   orderNum? : number ;  // 显示顺序 
            status? : string ;  // 状态:下拉框要求字符串编辑框才会反显
         	   createId? : number ;  // 创建者 
         	   modifyId? : string ;  // 更新者 
         	   modifyTime? : date ;  // 更新时间 
   }
