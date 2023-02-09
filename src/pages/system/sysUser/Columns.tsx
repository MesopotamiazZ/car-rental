import type { ProColumns } from '@ant-design/pro-table';
import moment from 'moment';
import type { SysUser } from './data';
import React from 'react';
import { Role } from '../role/data';

const SysUserColumns: ProColumns<SysUser>[] = [
  {
    title: '序号',
    valueType: 'index',
  },
  {
    title: '用户id',
    dataIndex: 'userId',
  },

  {
    title: '登陆账号',
    dataIndex: 'username',
  },

  // {
  //   title: '密码',
  //   dataIndex: 'password',
  //   hideInForm: true,
  //   hideInTable: true,
  // },
  // {
  //   title: '盐加密',
  //   dataIndex: 'salt',
  //   hideInForm: true,
  //   hideInTable: true,
  // },
  // {
  //   title: '用户邮箱',
  //   dataIndex: 'email',
  // },

  {
    title: '创建时间',
    dataIndex: 'createTime',
     search: false,
    hideInTable: true,
  },
  // {
  //   title: '创建者',
  //   dataIndex: 'createId',
  //   hideInForm: true,
  //   hideInTable: true,
  // },
  // {
  //   title: '更新者',
  //   dataIndex: 'modifyId',
  //   hideInForm: true,
  //   hideInTable: true,
  // },
  // {
  //   title: '更新时间',
  //   dataIndex: 'modifyTime',
  //    search: false,
  //   align: 'center',
  //   hideInForm: true,
  //   hideInTable: true,
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'createTime',
  //   valueType: "dateTimeRange",
  //   render: (_value, row) => {
  //     return moment(row.createTime).format('YYYY-MM-DD HH:mm');
  //   },
  // },
  {
    title: '具备角色',
    dataIndex: 'roles',
     search: false,
    render: (_value, row) => {
      const roleList: Role[] = row.roleList;
      return roleList?.map((role) => role.description).join();
    },
  },
];
export default SysUserColumns;
