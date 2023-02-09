import BaseEntity from '@/global/BaseEntity';

export interface SysUser extends BaseEntity {
	
      	   username? : string ;  // 登陆名 
         	   sex? : string ;  // 用户性别1男 2女 3未知 
         	   password? : string ;  // 密码 
         	   email? : string ;  // 用户邮箱 
         	   mobile? : string ;  // 手机号码 
         	   jobNumber? : string ;  // 工号 
         	   nativerPlace? : string ;  // 籍贯 
         	   graduationCollege? : string ;  // 毕业院校 
         	   graduationTime? : date ;  // 毕业时间 
         	   qualifications? : string ;  // 学历 
         	   subject? : string ;  // 所学专业 
            status? : string ;  // 状态:下拉框要求字符串编辑框才会反显
         	   createId? : number ;  // 创建者 
         	   modifyId? : string ;  // 更新者 
         	   modifyTime? : date ;  // 更新时间 
         	   passwordResetDate? : date ;  //  
   }
