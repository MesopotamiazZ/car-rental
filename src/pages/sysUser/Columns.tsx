import { ProColumns } from "@ant-design/pro-table";
import { SysUser } from "./data";

 const  SysUserColumns: ProColumns<SysUser>[] = [

    {
      title: '序号',
      valueType: 'index',
      width:80,
    },
	{
    	title: '登陆名',
        dataIndex: 'username',
	                                            
        
	    },

	{
    	title: '用户性别1男 2女 3未知',
        dataIndex: 'sex',
	                                            
        
	    },

	{
    	title: '密码',
        dataIndex: 'password',
	                                            
        
	    },

	{
    	title: '用户邮箱',
        dataIndex: 'email',
	                                            
        
	    },

	{
    	title: '手机号码',
        dataIndex: 'mobile',
	                                            
        
	    },

	{
    	title: '工号',
        dataIndex: 'jobNumber',
	                                            
        
	    },

	{
    	title: '籍贯',
        dataIndex: 'nativerPlace',
	                                            
        
	    },

	{
    	title: '毕业院校',
        dataIndex: 'graduationCollege',
	                                            
        
	    },

	{
    	title: '毕业时间',
        dataIndex: 'graduationTime',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },

	{
    	title: '学历',
        dataIndex: 'qualifications',
	                                            
        
	    },

	{
    	title: '所学专业',
        dataIndex: 'subject',
	                                            
        
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
    	title: '',
        dataIndex: 'passwordResetDate',
	                                            
        
	        valueType: "dateRange",
        align: 'center',
        },


  ]

  export default SysUserColumns;
     



