import React from 'react';
import { Form,  DatePicker, Input, Select } from 'antd';
import { DEFAULT_DATE_FORMAT } from '@/constants/constants';
import SearchSelect from '@/components/SearchSelect/SearchSelect';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { imgUploadUrl } from '@/global/CommonUtils';
import OimgUpload from "@/components/OimgUpload";

const { Option } = Select;
const { TextArea } = Input;
const SysUserFormItem = (props:any) => {
    return (
      <>
        	    <Form.Item
          label="登陆名："
          name="username"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="用户性别1男 2女 3未知："
          name="sex"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="密码："
          name="password"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="用户邮箱："
          name="email"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="手机号码："
          name="mobile"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="工号："
          name="jobNumber"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="籍贯："
          name="nativerPlace"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="毕业院校："
          name="graduationCollege"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="graduationTime"
          label="毕业时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            	    <Form.Item
          label="学历："
          name="qualifications"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="所学专业："
          name="subject"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
                		<Form.Item name="status" label="状态 "  rules={[{ required: true, message: '请选择状态' }]}>
          <Select style={{ width: '100%' }}>
                      <Option value="0">正常</Option>
                      <Option value="1">异常</Option>
                    </Select>
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
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            		<Form.Item
          name="passwordResetDate"
          label=""
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
        
      </>
    );
  };

  export default SysUserFormItem;