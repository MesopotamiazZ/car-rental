import BaseEntity from '@/global/BaseEntity';

export interface TradeMileageRecord extends BaseEntity {
	
      	   orderId? : string ;  // 派车单号 
         	   emptyStartKm? : number ;  // 放空起公里 
         	   startKm? : number ;  // 起公里 
         	   endKm? : number ;  // 止公里 
         	   emptyEndKm? : number ;  // 放空止公里 
         	   emptyTotalKm? : number ;  // 放空累计公里数 
         	   totalKm? : number ;  // 累计公里 
         	   thanKm? : number ;  // 超里程数 
         	   startTime? : date ;  // 开始时间 
         	   endTime? : date ;  // 结束时间 
            status? : string ;  // 状态:下拉框要求字符串编辑框才会反显
         	   createId? : number ;  // 创建者 
         	   modifyId? : string ;  // 更新者 
         	   modifyTime? : date ;  // 更新时间 
   }
