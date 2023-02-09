import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { UserToken } from './data';
import {formLayout} from '@/constants/constants';
import UserTokenFormItem from './Form';


type CreateUserTokenFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: UserToken) => void;
  onCancel: () => void;
}

const CreateUserTokenForm: React.FC<CreateUserTokenFormProps> = props => {
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
        <Button type="primary" onClick={() => okHandle()}  loading={submitting}>确定</Button>
      </>
    );

};
  return (
    <Modal
      width={640}
      destroyOnClose
      title="创建系统用户Token"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <UserTokenFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateUserTokenForm;
