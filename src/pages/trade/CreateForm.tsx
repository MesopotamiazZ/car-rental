import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { Trade } from './data';
import {formLayout} from '@/constants/constants';
import TradeFormItem from './Form';


interface CreateTradeFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: Trade) => void;
  onCancel: () => void;
}

const CreateTradeForm: React.FC<CreateTradeFormProps> = props => {
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
      title="创建订单表"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <TradeFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateTradeForm;
