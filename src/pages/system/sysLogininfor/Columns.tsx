import type { ProColumns } from "@ant-design/pro-table";
import type { SysLogininfor } from "./data";

const SysLogininforColumns: ProColumns<SysLogininfor>[] =
  [
    {
      title: '序号',
      valueType: 'index',
    },
    {
      title: '登录账号',
      dataIndex: 'loginName',
    },
    {
      title: '登录IP地址',
      dataIndex: 'ipaddr',
      search: false
    },
    {
      title: '登录地点',
      dataIndex: 'loginLocation',
      search: false
    },
    {
      title: '浏览器类型',
      dataIndex: 'browser',
      search: false
    },
    {
      title: '操作系统',
      dataIndex: 'os',
      search: false
    },
    {
      title: '提示消息',
      dataIndex: 'msg',
      search: false
    },
    {
      title: '访问时间',
      dataIndex: 'loginTime',
       search: false,
      sorter: true,
      align: 'center',
    },
    {
      title: '创建者',
      dataIndex: 'createId',

      search: false
    },
    {
      title: '更新者',
      dataIndex: 'modifyId',
      search: false
    },
    {
      title: '更新时间',
      dataIndex: 'modifyTime',
       search: false,
      align: 'center',
    },
    {
      title: '访问时间',
      dataIndex: 'loginTime',
      hideInTable: true,
      search: false,
      valueType: "dateTimeRange",
      render: (_value, row) => {
        return row.loginTime;
      },
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
export default SysLogininforColumns;




