import React, {useEffect } from 'react';
import { Form, Button, Modal} from 'antd';

import { CarBasicFee } from './data';
import {formLayout} from '@/constants/constants';
import {StringToDateTime} from '@/global/DateTimeUtils';
import CarBasicFeeFormItem from './Form';

export interface FormValueType extends Partial<CarBasicFee> {
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting:boolean;
  updateModalVisible: boolean;
  values: Partial<CarBasicFee>;
}

export interface UpdateFormState {
}

const UpdateCarBasicFeeForm: React.FC<UpdateFormProps> = props => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    submitting, 
    values,
  } = props;

  const [form] = Form.useForm();
  let newValues :any = StringToDateTime(values);
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
      title="修改车辆使用费用"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <CarBasicFeeFormItem form={form} />
      </Form>
    </Modal>
  );
};

export default UpdateCarBasicFeeForm;
