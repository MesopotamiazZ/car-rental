import { ProColumns } from "@ant-design/pro-table";
import { Trade } from "./data";

 const  TradeColumns: ProColumns<Trade>[] = [

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
    	title: '业务员',
        dataIndex: 'salesman',
	                                            
        
	    },

	{
    	title: '用车单位',
        dataIndex: 'customerCompany',
	                                            
        
	    },

	{
    	title: '用车联系人',
        dataIndex: 'customer',
	                                            
        
	    },

	{
    	title: '联系方式',
        dataIndex: 'customerMobile',
	                                            
        
	    },

	{
    	title: '用车开始时间',
        dataIndex: 'useStartTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '用车结束时间',
        dataIndex: 'useEndTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '是否外租',
        dataIndex: 'selfCar',
	                                            
        
	        initialValue:'0' ,
        valueEnum: {
        	'': { text: '全部', status: 'Default' },
              	0: { text: '否', status: 'Success' },
              	1: { text: '是', status: 'Success' },
            },
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
    	title: '驾驶员',
        dataIndex: 'driver',
	                                            
        
	    },

	{
    	title: '驾驶员联系方式',
        dataIndex: 'driverMobile',
	                                            
        
	    },

	{
    	title: '业务行程',
        dataIndex: 'businessTrip',
	                                            
        
	    },

	{
    	title: '业务行程备注',
        dataIndex: 'businessTripRemark',
	                                            
        
	    },

	{
    	title: '台数',
        dataIndex: 'num',
	                                            
        
	    },

	{
    	title: '出车天数',
        dataIndex: 'days',
	                                            
        
	    },

	{
    	title: '总台数',
        dataIndex: 'numDays',
	                                            
        
	    },

	{
    	title: '过路费',
        dataIndex: 'toll',
	                                            
        
	    },

	{
    	title: '停车费',
        dataIndex: 'parkingFee',
	                                            
        
	    },

	{
    	title: 'ect费用',
        dataIndex: 'etcFee',
	                                            
        
	    },

	{
    	title: '超时长',
        dataIndex: 'timeout',
	                                            
        
	    },

	{
    	title: '超时费',
        dataIndex: 'timeoutFee',
	                                            
        
	    },

	{
    	title: '驾驶员餐费',
        dataIndex: 'meals1',
	                                            
        
	    },

	{
    	title: '顾客餐费',
        dataIndex: 'meals2',
	                                            
        
	    },

	{
    	title: '住宿费',
        dataIndex: 'hotelFee',
	                                            
        
	    },

	{
    	title: '其他费用',
        dataIndex: 'otherFee',
	                                            
        
	    },

	{
    	title: '油费',
        dataIndex: 'oilFee',
	                                            
        
	    },

	{
    	title: '小吃费',
        dataIndex: 'snacksFee',
	                                            
        
	    },

	{
    	title: '杂费税',
        dataIndex: 'incidentalTax',
	                                            
        
	    },

	{
    	title: '驾驶员垫付',
        dataIndex: 'driverPayment',
	                                            
        
	    },

	{
    	title: '总共杂费',
        dataIndex: 'incidentalTotal',
	                                            
        
	    },

	{
    	title: '总费用',
        dataIndex: 'totalPrice',
	                                            
        
	    },

	{
    	title: '开票名称',
        dataIndex: 'invoiceName',
	                                            
        
	    },

	{
    	title: '开票时间',
        dataIndex: 'invoiceDate',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '开票号',
        dataIndex: 'invoiceNo',
	                                            
        
	    },

	{
    	title: '开票备注',
        dataIndex: 'invoiceRemark',
	                                            
        
	    },

	{
    	title: '付款时间',
        dataIndex: 'paymentDate',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '是否付款',
        dataIndex: 'hasPay',
	                                            
        
	        initialValue:'0' ,
        valueEnum: {
        	'': { text: '全部', status: 'Default' },
              	0: { text: '未付款', status: 'Success' },
              	1: { text: '已付款', status: 'Success' },
            },
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
    	title: '外租超时费',
        dataIndex: 'timeoutFeeOut',
	                                            
        
	    },

	{
    	title: '合作单位总费用',
        dataIndex: 'totalMoney',
	                                            
        
	    },

	{
    	title: '开票名称(周)',
        dataIndex: 'invoiceNameWeek',
	                                            
        
	    },

	{
    	title: '开票时间(周)',
        dataIndex: 'invoiceDateWeek',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '年月',
        dataIndex: 'dateYear',
	                                            
        
	    },

	{
    	title: '日',
        dataIndex: 'dateDay',
	                                            
        
	    },


  ]

  export default TradeColumns;
     



