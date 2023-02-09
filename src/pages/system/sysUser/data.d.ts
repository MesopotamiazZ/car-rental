import type BaseEntity from '@/global/BaseEntity';
export type SysUser = BaseEntity & {
  username? : string ;  // 登陆名 
  nickname? : string ;  // 姓名 
  sex? : string ;  // 性别
  password? : string ;  // 密码 
  salt? : string ;  // 盐加密 
  email? : string ;  // 用户邮箱 
  mobile? : string ;  // 手机号码 
  createId? : number ;  // 创建者 
  createTime? : date ;  // 创建时间 
  modifyId? : string ;  // 更新者 
  modifyTime? : date ;  // 更新时间 
  status? : string ;  // 状态 

  jobNumber? : string ;  // 工号
  nativerPlace? : string ;  // 籍贯
  graduationCollege? : string ;  // 毕业院校
  graduationTime? : string ;  // 毕业时间
  qualifications? : string ;  // 学历
  subject? : string ;  // 所学专业 
  remark? : string ;  // 备注
}
