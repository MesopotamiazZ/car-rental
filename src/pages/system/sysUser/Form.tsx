import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from '@/constants/constants';
import { retrievePageList, retrievePageListSys } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { Role } from '../role/data';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;

const SysUserFormItem = (props: any) => {
  const [deptResult, setDeptResult] = useState({ deptList: [] });
  const [result, setResult] = useState({ roleList: [] });

  useEffect(() => {
    // pageSize=1000 取出所有的角色
    retrievePageList({ current: 1, pageSize: 1000 }, NamespaceEnum.Role)
      .then((res: any) => {
        console.log(res);
        setResult({ roleList: res.data });
      })
      .catch(() => setResult({ roleList: [] }));

    
  }, []);

  const renderRoleSelection = (roleList: Role[], user: any) => {
    const children: any[] = [];
    roleList.forEach((r: Role) => {
      children.push(
        <Option
          key={r.roleId}
          selected={user?.roleIds?.includes(r.roleId)}
          value={r.roleId}
          label={r.roleId}
        >
          {r.roleName}
        </Option>,
      );
    });
    return children;
  };

 

  return (
    <>
      {/* 解决浏览器自动回填密码 */}
      <span style={{ position: 'absolute', top: '-10000px' }}>
        <input type="text" />
        <input type="text" name="userName" />
        <input type="password" name="password" />
      </span>

      <Form.Item
        label="登陆账号："
        name="username"
        rules={[{ required: true, message: '请输入登陆账号' }]}
      >
        <Input placeholder="请输入" autoComplete="off" />
      </Form.Item>

      <Form.Item
        label="登录密码："
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="请输入" value="" type="text" autoComplete="off" />
      </Form.Item>

      <Form.Item
        name="roleIdList"
        label="用户角色："
        rules={[{ required: true, message: '请选择用户角色' }]}
      >
        <Select mode="multiple" style={{ width: '100%' }}>
          {renderRoleSelection(result?.roleList, props.form.getFieldsValue())}
        </Select>
      </Form.Item>

      <Form.Item label="创建者：" name="createId" hidden>
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="更新者：" name="modifyId" hidden>
        <Input placeholder="请输入" />
      </Form.Item>
      {/* <Form.Item
        name="modifyTime"
        label="更新时间"
        hidden
      >
        <DatePicker
          showTime
          placeholder="请选择"
          format={DEFAULT_DATE_TIME_FORMAT}
          style={{ width: '100%' }}
        />
      </Form.Item> */}
    </>
  );
};
export default SysUserFormItem;
