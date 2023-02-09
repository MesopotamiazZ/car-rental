import React from 'react';
import { Form, Input, Select } from 'antd';
import { DatePicker } from 'antd';
import { DEFAULT_DATE_TIME_FORMAT } from '@/constants/constants';
import RoleTree from './RoleTree';

const { TextArea } = Input;
const { Option } = Select;
const RoleFormItem = (props: any) => {

  return (
    <>

      <Form.Item
        label="角色名称："
        name="roleId"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="职务名称："
        name="roleName"
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="职务描述："
        name="description"
      >
        <TextArea rows={4} placeholder="请输入" />
      </Form.Item>

      {/* <Form.Item
        name="dataScope"
        label="数据范围："
        rules={[{ required: true, message: '请选择数据范围' }]}
      >
        <Select style={{ width: '100%' }}>
          <Select.Option value="1">全部数据权限</Select.Option>
          <Select.Option value="2">自定数据权限</Select.Option>
        </Select>
      </Form.Item> */}

      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, curValiues) => prevValues.dataScope !== curValiues.dataScope}
      >
        {({ getFieldValue }) => {
          const type = getFieldValue('dataScope');
          if (type === '2') {
            return (
              <Form.Item
                name="menuIdList"
                label="角色菜单："
                rules={[{ required: true, message: '请选择角色菜单' }]}
              >
                <RoleTree form={props.form} />
              </Form.Item>
            );
          } else {
            return <></>;
          }
        }}
      </Form.Item> */}

      {/* <Form.Item
        name="menuIdList"
        label="角色菜单："
        rules={[{ required: true, message: '请选择角色菜单' }]}
      >
        <RoleTree form={props.form} />
      </Form.Item> */}


      <Form.Item
        label="状态："
        name="status"
      >
        <Select style={{ width: '100%' }}>
          <Option value={0}>开启</Option>
          <Option value={1}>禁用</Option>
        </Select>
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
      <Form.Item
        label="id"
        name="id"
        hidden
      >
        <Input placeholder="请输入" />
      </Form.Item>
    </>
  );
};
export default RoleFormItem;