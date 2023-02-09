import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { CarBasicFee } from './data';
import {formLayout} from '@/constants/constants';
import CarBasicFeeFormItem from './Form';


interface CreateCarBasicFeeFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: CarBasicFee) => void;
  onCancel: () => void;
}

const CreateCarBasicFeeForm: React.FC<CreateCarBasicFeeFormProps> = props => {
  const [form] = Form.useForm();
  const { modalVisible,submitting, onSubmit: handleAdd, onCancel } = props;
  const okHandle = async () => {
  	const fieldsValue = await form.validateFields();
  	handleAdd(fieldsValue);
  	form.resetFields();
  };
  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => onCancel()}>取消</Button>
        <Button type="primary" onClick={() => okHandle()}  loading={submitting}>确定 </Button>
      </>
    );

};
  return (
    <Modal
      destroyOnClose
      title="创建车辆使用费用"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <CarBasicFeeFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateCarBasicFeeForm;
