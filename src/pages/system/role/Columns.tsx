import type { ProColumns } from "@ant-design/pro-table";
import type { Role } from "./data";

const RoleColumns: ProColumns<Role>[] =
  [
    {
      title: '序号',
      valueType: 'index',
    },
    {
      title: '职务名称',
      dataIndex: 'roleName',
    },

    {
      title: '人员数量',
      dataIndex: 'userNumber',
      search: false,
    },

    {
      title: '职务描述',
      search: false,
      dataIndex: 'description',
    },
    // {
    //   title: '创建者',
    //   dataIndex: 'createId',
    // },
    // {
    //   title: '更新者',
    //   dataIndex: 'modifyId',
    // },
    
    {
      title: '创建时间',
      dataIndex: 'createTime',
       search: false,
      hideInTable:true,
      align: 'center',
    },
    // {
    //   title: '更新时间',
    //   dataIndex: 'modifyTime',
    //    search: false,
    //   align: 'center',
    // },
    // {
    //   title: '更新时间',
    //   dataIndex: 'modifyTime',
    //   hideInTable: true,
    //   valueType: "dateTimeRange",
    //   render: (_value, row) => {
    //     return row.modifyTime;
    //   },
    // },
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   initialValue: '',
    //   hideInTable: true,
    //   valueEnum: {
    //     '': { text: '全部', status: 'Success' },
    //     0: { text: '开启', status: 'Success' },
    //     1: { text: '禁用', status: 'Success' },
    //   },
    // },
  ]
export default RoleColumns;




