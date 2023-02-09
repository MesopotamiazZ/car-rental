import { ProColumns } from "@ant-design/pro-table";
import { CarBasicFee } from "./data";

 const  CarBasicFeeColumns: ProColumns<CarBasicFee>[] = [

    {
      title: '序号',
      valueType: 'index',
      width:80,
    },
	{
    	title: '基本公里数',
        dataIndex: 'basicKm',
	                                            
        
	    },

	{
    	title: '超公里价格（元/公里）',
        dataIndex: 'thanKmFee',
	                                            
        
	    },

	{
    	title: '外租超公里价格（元/公里）',
        dataIndex: 'externalThanKmFee',
	                                            
        
	    },

	{
    	title: '基本租车费(全天)',
        dataIndex: 'rentFee',
	                                            
        
	    },

	{
    	title: '驾驶员工资(全天)',
        dataIndex: 'driverFee',
	                                            
        
	    },

	{
    	title: '基本租车费(半天)',
        dataIndex: 'rentHalfFee',
	                                            
        
	    },

	{
    	title: '驾驶员工资(半天)',
        dataIndex: 'driverHalfFee',
	                                            
        
	    },

	{
    	title: '外租基本租车费(全天)',
        dataIndex: 'externalBasicFee',
	                                            
        
	    },

	{
    	title: '外租驾驶员工资(全天)',
        dataIndex: 'externalDriverFee',
	                                            
        
	    },

	{
    	title: '外租基本租车费(半天)',
        dataIndex: 'externalHalfBasicFee',
	                                            
        
	    },

	{
    	title: '外租驾驶员工资(半天)',
        dataIndex: 'externalHalfDriverFee',
	                                            
        
	    },

	{
    	title: '燃油费(每公里油费)',
        dataIndex: 'aveOilFee',
	                                            
        
	    },

	{
    	title: '燃油费(每公里油费)',
        dataIndex: 'externalOilFee',
	                                            
        
	    },

	{
    	title: '车辆牌照',
        dataIndex: 'licensePlate',
	                                            
        
	    },

	{
    	title: '车型',
        dataIndex: 'carModel',
	                                            
        
	    },

	{
    	title: '车辆单位',
        dataIndex: 'company',
	                                            
        
	    },

	{
    	title: '状态',
        dataIndex: 'status',
	                                            
        
	        initialValue:'0' ,
        valueEnum: {
        	'': { text: '全部', status: 'Default' },
              	0: { text: '正常', status: 'Success' },
              	1: { text: '异常', status: 'Success' },
            },
        },

	{
    	title: '创建者',
        dataIndex: 'createId',
	                                            
        
	    },

	{
    	title: '更新者',
        dataIndex: 'modifyId',
	                                            
        
	    },

	{
    	title: '更新时间',
        dataIndex: 'modifyTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '派单号',
        dataIndex: 'orderId',
	                                            
        
	    },


  ]

  export default CarBasicFeeColumns;
     



