import type { ProColumns } from "@ant-design/pro-table";
import type { UserToken } from "./data";

const  UserTokenColumns: ProColumns<UserToken>[] = 
  [
    {
      title: '序号',
      valueType: 'index',
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
       search: false,	
      align: 'center',
    },
    {  
	  title: '更新时间',
      dataIndex: 'modifyTime',
	  hideInTable: true,
      valueType: "dateTimeRange",
      render: (_value, row) => {
         return row.modifyTime;
       },
    },	  
]
export default UserTokenColumns;
     



