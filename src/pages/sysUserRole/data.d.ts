import BaseEntity from '@/global/BaseEntity';

export interface SysUserRole extends BaseEntity {
	
         status? : string ;  // 状态:下拉框要求字符串编辑框才会反显
         	   createId? : number ;  // 创建者 
         	   modifyId? : string ;  // 更新者 
         	   modifyTime? : date ;  // 更新时间 
   }
