import React from 'react';
import { Form, Input } from 'antd';
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { DEFAULT_DATE_TIME_FORMAT } from '@/constants/constants';
import RoleTree from './RoleTree';
const { Option } = Select;
const MenuFormItem = (props: any) => {

  return (
    <>
      {/* <Form.Item
        label="父菜单id"
        name="parentId"
      >
        <Input placeholder="请输入" />
      </Form.Item> */}

      <Form.Item
        name="parentId"
        label="父菜单"
        rules={[{ required: false, message: '请选择角色菜单' }]}
      >
        <RoleTree form={props.form} />
      </Form.Item>



      <Form.Item
        label="菜单名称："
        name="name"
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="菜单编码："
        name="menuId"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="请求地址："
        name="url"
        rules={[{ required: true, message: '不能为空' }]}>

        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="权限标识"//(多个用逗号分隔，如：user:list,user:create)：
        name="perms"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item name="type"
        label="菜单类型："
        rules={[{ required: true, message: '请选择菜单类型' }]}>
        <Select style={{ width: '100%' }}>
          <Option value="0">目录</Option>
          <Option value="1">菜单</Option>
          <Option value="2">按钮</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="菜单图标："
        name="icon"
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="显示顺序："
        name="orderNum"
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="创建者："
        name="createId"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="更新者："
        name="modifyId"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
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
      </Form.Item>
    </>
  );
};
export default MenuFormItem;