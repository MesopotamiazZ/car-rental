import { ProColumns } from "@ant-design/pro-table";
import { TradeMileageRecord } from "./data";

 const  TradeMileageRecordColumns: ProColumns<TradeMileageRecord>[] = [

    {
      title: '序号',
      valueType: 'index',
      width:80,
    },
	{
    	title: '派车单号',
        dataIndex: 'orderId',
	                                            
        
	    },

	{
    	title: '放空起公里',
        dataIndex: 'emptyStartKm',
	                                            
        
	    },

	{
    	title: '起公里',
        dataIndex: 'startKm',
	                                            
        
	    },

	{
    	title: '止公里',
        dataIndex: 'endKm',
	                                            
        
	    },

	{
    	title: '放空止公里',
        dataIndex: 'emptyEndKm',
	                                            
        
	    },

	{
    	title: '放空累计公里数',
        dataIndex: 'emptyTotalKm',
	                                            
        
	    },

	{
    	title: '累计公里',
        dataIndex: 'totalKm',
	                                            
        
	    },

	{
    	title: '超里程数',
        dataIndex: 'thanKm',
	                                            
        
	    },

	{
    	title: '开始时间',
        dataIndex: 'startTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '结束时间',
        dataIndex: 'endTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
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


  ]

  export default TradeMileageRecordColumns;
     



