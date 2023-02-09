import React from 'react';
import { Form,  DatePicker, Input, Select } from 'antd';
import { DEFAULT_DATE_FORMAT } from '@/constants/constants';
import SearchSelect from '@/components/SearchSelect/SearchSelect';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { imgUploadUrl } from '@/global/CommonUtils';
import OimgUpload from "@/components/OimgUpload";

const { Option } = Select;
const { TextArea } = Input;
const TradeFormItem = (props:any) => {
    return (
      <>
        	    <Form.Item
          label="派车单号："
          name="orderId"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="业务员："
          name="salesman"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="用车单位："
          name="customerCompany"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="用车联系人："
          name="customer"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="联系方式："
          name="customerMobile"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="useStartTime"
          label="用车开始时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            		<Form.Item
          name="useEndTime"
          label="用车结束时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            		<Form.Item name="selfCar" label="是否外租 "  rules={[{ required: true, message: '请选择是否外租' }]}>
          <Select style={{ width: '100%' }}>
                      <Option value="0">否</Option>
                      <Option value="1">是</Option>
                    </Select>
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
            	    <Form.Item
          label="驾驶员："
          name="driver"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="驾驶员联系方式："
          name="driverMobile"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="业务行程："
          name="businessTrip"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="业务行程备注："
          name="businessTripRemark"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
                	    <Form.Item
          label="台数："
          name="num"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="出车天数："
          name="days"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="总台数："
          name="numDays"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="过路费："
          name="toll"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="停车费："
          name="parkingFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="ect费用："
          name="etcFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="超时长："
          name="timeout"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="超时费："
          name="timeoutFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="驾驶员餐费："
          name="meals1"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="顾客餐费："
          name="meals2"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="住宿费："
          name="hotelFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="其他费用："
          name="otherFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="油费："
          name="oilFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="小吃费："
          name="snacksFee"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="杂费税："
          name="incidentalTax"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="驾驶员垫付："
          name="driverPayment"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="总共杂费："
          name="incidentalTotal"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="总费用："
          name="totalPrice"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="开票名称："
          name="invoiceName"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="invoiceDate"
          label="开票时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            	    <Form.Item
          label="开票号："
          name="invoiceNo"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="开票备注："
          name="invoiceRemark"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="paymentDate"
          label="付款时间"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            		<Form.Item name="hasPay" label="是否付款 "  rules={[{ required: true, message: '请选择是否付款' }]}>
          <Select style={{ width: '100%' }}>
                      <Option value="0">未付款</Option>
                      <Option value="1">已付款</Option>
                    </Select>
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
          label="外租超时费："
          name="timeoutFeeOut"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="合作单位总费用："
          name="totalMoney"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="开票名称(周)："
          name="invoiceNameWeek"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            		<Form.Item
          name="invoiceDateWeek"
          label="开票时间(周)"
                  >
          <DatePicker
            showTime
            placeholder="请选择"
            format={DEFAULT_DATE_FORMAT}
            style={{ width: '100%' }}
          />
    </Form.Item> 
            	    <Form.Item
          label="年月："
          name="dateYear"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
            	    <Form.Item
          label="日："
          name="dateDay"
                  >
                 <Input placeholder="请输入" />
            </Form.Item>
        
      </>
    );
  };

  export default TradeFormItem;