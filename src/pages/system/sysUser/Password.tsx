import React from 'react';
import { Form, Input } from 'antd';

const PasswordFormItem = () => {
  return (
    <>
      <span style={{ position: 'absolute', top: '-10000px' }}>
        <input type="text" />
        <input type="text" name="username" />
        <input type="password" name="password" autoComplete={'new-password'} />
        <input type="password" name="confirm" autoComplete={'new-password'} />
      </span>
      <Form.Item label="登陆名：" name="username">
        <Input placeholder="请输入" disabled={true} />
      </Form.Item>
      {/* <Form.Item label="旧密码：" name="password" >
        <Input.Password placeholder="请输入" value="" autoComplete="new-password" />
      </Form.Item> */}
      <Form.Item label="新密码：" name="password">
        <Input.Password placeholder="请输入" value="" autoComplete="new-password" />
      </Form.Item>
      <Form.Item label="确认新密码：" name="confirm">
        <Input.Password placeholder="请输入" value="" autoComplete="new-password" />
      </Form.Item>
    </>
  );
};

export default PasswordFormItem;
