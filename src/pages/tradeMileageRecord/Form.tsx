import React from 'react';
import { Form,  DatePicker, Input, Select } from 'antd';
import { DEFAULT_DATE_FORMAT } from '@/constants/constants';
import SearchSelect from '@/components/SearchSelect/SearchSelect';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { imgUploadUrl } from '@/global/CommonUtils';
import OimgUpload from "@/components/OimgUpload";

const { Option } = Select;
const { TextArea } = Input;
const TradeMileageRecordFormItem = (props:any) => {
    return (
      <>
        	    <Form.Item
          label="派车单号："
          name="orderId"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="放空起公里："
          name="emptyStartKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="起公里："
          name="startKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="止公里："
          name="endKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="放空止公里："
          name="emptyEndKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="放空累计公里数："
          name="emptyTotalKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="累计公里："
          name="totalKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="超里程数："
          name="thanKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="startTime"
          label="开始时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            		<Form.Item
          name="endTime"
          label="结束时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
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

  export default TradeMileageRecordFormItem;