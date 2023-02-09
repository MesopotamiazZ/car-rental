import React from 'react';
import { Form, Input } from 'antd';
import { DatePicker } from 'antd';
import { DEFAULT_DATE_TIME_FORMAT } from '@/constants/constants';
  const OssFormItem = () => {

  return (
    <>
      <Form.Item
        label="url地址："
        name="url"
      >
        <Input placeholder="请输入" />
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
export default OssFormItem;