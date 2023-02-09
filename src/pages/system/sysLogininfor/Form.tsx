import React from 'react';
import { Form, Input } from 'antd';
import { DatePicker } from 'antd';
import { DEFAULT_DATE_TIME_FORMAT } from '@/constants/constants';
  const SysLogininforFormItem = () => {

  return (
    <>
      <Form.Item
        label="登录账号："
        name="loginName"
        rules={[
          { max: 50, message: '长度不能大于50！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="登录IP地址："
        name="ipaddr"
        rules={[
          { max: 50, message: '长度不能大于50！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="登录地点："
        name="loginLocation"
        rules={[
          { max: 255, message: '长度不能大于255！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="浏览器类型："
        name="browser"
        rules={[
          { max: 50, message: '长度不能大于50！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="操作系统："
        name="os"
        rules={[
          { max: 50, message: '长度不能大于50！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="提示消息："
        name="msg"
        rules={[
          { max: 255, message: '长度不能大于255！' },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
	  <Form.Item
        name="loginTime"
        label="访问时间"
      >
       <DatePicker
          showTime
          placeholder="请选择"
          format={DEFAULT_DATE_TIME_FORMAT}
          style={{ width: '100%' }}
       />
      </Form.Item> 
      <Form.Item
        label="创建者："
        name="createId"
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="更新者："
        name="modifyId"
      >
        <Input placeholder="请输入" />
      </Form.Item>
	  <Form.Item
        name="modifyTime"
        label="更新时间"
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
export default SysLogininforFormItem;