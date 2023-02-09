import { ProColumns } from "@ant-design/pro-table";
import { SysMenu } from "./data";

 const  SysMenuColumns: ProColumns<SysMenu>[] = [

    {
      title: '序号',
      valueType: 'index',
      width:80,
    },
	{
    	title: '父部门',
        dataIndex: 'parentId',
	                                            
        
	    },

	{
    	title: '菜单名称',
        dataIndex: 'name',
	                                      ellipsis: true, width:250,
                
        
	    },

	{
    	title: '请求地址',
        dataIndex: 'url',
	                                            
        
	    },

	{
    	title: '权限标识(多个用逗号分隔，如：user:list,user:create)',
        dataIndex: 'perms',
	                                            
        
	    },

	{
    	title: '菜单类型',
        dataIndex: 'type',
	                                            
        
	        initialValue:'0' ,
        valueEnum: {
        	'': { text: '全部', status: 'Default' },
              	0: { text: '目录', status: 'Success' },
              	1: { text: '菜单', status: 'Success' },
              	2: { text: '按钮', status: 'Success' },
            },
        },

	{
    	title: '菜单图标',
        dataIndex: 'icon',
	                                            
        
	    },

	{
    	title: '显示顺序',
        dataIndex: 'orderNum',
	     hideInTable:true,	
                         hideInSearch:true,	
                                
        
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

  export default SysMenuColumns;
     



