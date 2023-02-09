import BaseEntity from '@/global/BaseEntity';

export interface CarBasicFee extends BaseEntity {
	
      	   basicKm? : number ;  // 基本公里数 
         	   thanKmFee? : number ;  // 超公里价格（元/公里） 
         	   externalThanKmFee? : number ;  // 外租超公里价格（元/公里） 
         	   rentFee? : number ;  // 基本租车费(全天) 
         	   driverFee? : number ;  // 驾驶员工资(全天) 
         	   rentHalfFee? : number ;  // 基本租车费(半天) 
         	   driverHalfFee? : number ;  // 驾驶员工资(半天) 
         	   externalBasicFee? : number ;  // 外租基本租车费(全天) 
         	   externalDriverFee? : number ;  // 外租驾驶员工资(全天) 
         	   externalHalfBasicFee? : number ;  // 外租基本租车费(半天) 
         	   externalHalfDriverFee? : number ;  // 外租驾驶员工资(半天) 
         	   aveOilFee? : number ;  // 燃油费(每公里油费) 
         	   externalOilFee? : number ;  // 燃油费(每公里油费) 
         	   licensePlate? : string ;  // 车辆牌照 
         	   carModel? : string ;  // 车型 
         	   company? : string ;  // 车辆单位 
            status? : string ;  // 状态:下拉框要求字符串编辑框才会反显
         	   createId? : number ;  // 创建者 
         	   modifyId? : string ;  // 更新者 
         	   modifyTime? : date ;  // 更新时间 
         	   orderId? : string ;  // 派单号 
   }
