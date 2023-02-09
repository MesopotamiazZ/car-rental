import React from 'react';
import { Form,  DatePicker, Input, Select } from 'antd';
import { DEFAULT_DATE_FORMAT } from '@/constants/constants';
import SearchSelect from '@/components/SearchSelect/SearchSelect';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { imgUploadUrl } from '@/global/CommonUtils';
import OimgUpload from "@/components/OimgUpload";

const { Option } = Select;
const { TextArea } = Input;
const CarBasicFeeFormItem = (props:any) => {
    return (
      <>
        	    <Form.Item
          label="基本公里数："
          name="basicKm"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="超公里价格（元/公里）："
          name="thanKmFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="外租超公里价格（元/公里）："
          name="externalThanKmFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="基本租车费(全天)："
          name="rentFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="驾驶员工资(全天)："
          name="driverFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="基本租车费(半天)："
          name="rentHalfFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="驾驶员工资(半天)："
          name="driverHalfFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="外租基本租车费(全天)："
          name="externalBasicFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="外租驾驶员工资(全天)："
          name="externalDriverFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="外租基本租车费(半天)："
          name="externalHalfBasicFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="外租驾驶员工资(半天)："
          name="externalHalfDriverFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="燃油费(每公里油费)："
          name="aveOilFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="燃油费(每公里油费)："
          name="externalOilFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="车辆牌照："
          name="licensePlate"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="车型："
          name="carModel"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="车辆单位："
          name="company"
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
          label="派单号："
          name="orderId"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
        
      </>
    );
  };

  export default CarBasicFeeFormItem;