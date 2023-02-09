import type { ProColumns } from "@ant-design/pro-table";
import type { Menu } from "./data";

const MenuColumns: ProColumns<Menu>[] =
  [
    {
      title: 'id',
      dataIndex: 'menuId',
      key: 'id',
      hideInTable: true,
       search: false
    },
    {
      title: '序号',
      valueType: 'index',
    },
    {
      title: '父菜单ID',
      dataIndex: 'parentId',
      search: false,
      hideInTable: true
    },
    {
      title: '菜单名称',
      dataIndex: 'name',
      ellipsis: true,
    },

    {
      title: '菜单id',
      dataIndex: 'menuId',
       search: false,
      hideInTable: true,
    },
    {
      title: '请求地址',
      dataIndex: 'url',
       search: false,
    },
    {
      title: '权限标识',//(多个用逗号分隔，如：user:list,user:create)
      dataIndex: 'perms',
      search: false,
      hideInTable: true,
    },
    {
      title: '菜单类型',
      dataIndex: 'type',
      initialValue: '',
      valueEnum: {
        '': { text: '全部', status: 'Default' },
        '0': { text: '目录', status: 'Success' },
        '1': { text: '菜单', status: 'Success' },
        '2': { text: '按钮', status: 'Success' },
        '3': { text: '平台', status: 'Success' },
      },
    },
    {
      title: '菜单图标',
      dataIndex: 'icon',
      search: false,
      hideInTable: true,
    },
    {
      title: '显示顺序',
      dataIndex: 'orderNum',
      hideInTable: true,
       search: false,
    },
    {
      title: '创建者',
      dataIndex: 'createId',
      hideInTable: true,
       search: false,
    },
    {
      title: '更新者',
      dataIndex: 'modifyId',
      hideInTable: true,
       search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'modifyTime',
       search: false,
      align: 'center',
      hideInTable: true,
    },
    {
      title: '更新时间',
      dataIndex: 'modifyTime',
      hideInTable: true,
       search: false,
      valueType: "dateTimeRange",
      render: (_value, row) => {
        return row.modifyTime;
      },
    },
  ]
export default MenuColumns;




