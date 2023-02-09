import { ProColumns } from "@ant-design/pro-table";
import { SysRoleMenu } from "./data";

 const  SysRoleMenuColumns: ProColumns<SysRoleMenu>[] = [

    {
      title: '序号',
      valueType: 'index',
      width:80,
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

  export default SysRoleMenuColumns;
     



