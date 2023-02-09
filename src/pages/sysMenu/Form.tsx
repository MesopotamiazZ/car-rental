import React from 'react';
import { Form,  DatePicker, Input, Select } from 'antd';
import { DEFAULT_DATE_FORMAT } from '@/constants/constants';
import SearchSelect from '@/components/SearchSelect/SearchSelect';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { imgUploadUrl } from '@/global/CommonUtils';
import OimgUpload from "@/components/OimgUpload";

const { Option } = Select;
const { TextArea } = Input;
const SysMenuFormItem = (props:any) => {
    return (
      <>
        	    <Form.Item
          label="父部门："
          name="parentId"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="菜单名称："
          name="name"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="请求地址："
          name="url"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="权限标识(多个用逗号分隔，如：user:list,user:create)："
          name="perms"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item name="type" label="菜单类型 "  rules={[{ required: true, message: '请选择菜单类型' }]}>
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
        
      </>
    );
  };

  export default SysMenuFormItem;