import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { TradeMileageRecord } from './data';
import {formLayout} from '@/constants/constants';
import TradeMileageRecordFormItem from './Form';


interface CreateTradeMileageRecordFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: TradeMileageRecord) => void;
  onCancel: () => void;
}

const CreateTradeMileageRecordForm: React.FC<CreateTradeMileageRecordFormProps> = props => {
  const [form] = Form.useForm();
  const { modalVisible,submitting, onSubmit: handleAdd, onCancel } = props;
  const okHandle = async () => {
  	const fieldsValue = await form.validateFields();
    console.log('fieldsValue....', fieldsValue)
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
      title="创建订单里程记录"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <TradeMileageRecordFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateTradeMileageRecordForm;
