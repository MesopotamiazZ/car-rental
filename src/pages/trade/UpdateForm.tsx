import React, {useEffect } from 'react';
import { Form, Button, Modal} from 'antd';

import { Trade } from './data';
import {formLayout} from '@/constants/constants';
import {StringToDateTime} from '@/global/DateTimeUtils';
import TradeFormItem from './Form';

export interface FormValueType extends Partial<Trade> {
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting:boolean;
  updateModalVisible: boolean;
  values: Partial<Trade>;
}

export interface UpdateFormState {
}

const UpdateTradeForm: React.FC<UpdateFormProps> = props => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    submitting, 
    values,
  } = props;

  const [form] = Form.useForm();
  let newValues :any = StringToDateTime(values);
    	    	    	    	    	    	    	    	    	        //下拉框需要转成字符串才能反显
  		newValues.selfCar = String(newValues.selfCar)
  	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	    	        //下拉框需要转成字符串才能反显
  		newValues.hasPay = String(newValues.hasPay)
  	    	    	    	    	    	    	    	    	    	    	    	    useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      ...newValues,
    });

  }, [newValues]);


  const handleUpdateForm = async () => {
    const fieldsValue = await form.validateFields();
    handleUpdate({...fieldsValue,id:newValues.id});
  };


  const renderFooter = () => {
      return (
        <>
          <Button onClick={() => handleUpdateModalVisible(false, newValues)}>取消</Button>
          <Button type="primary" onClick={() => handleUpdateForm()} loading={submitting}>确定 </Button>
        </>
      );

  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="修改订单表"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <TradeFormItem form={form} />
      </Form>
    </Modal>
  );
};

export default UpdateTradeForm;
