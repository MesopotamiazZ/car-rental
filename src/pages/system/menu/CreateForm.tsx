import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { Menu } from './data';
import {formLayout} from '@/constants/constants';
import MenuFormItem from './Form';


type CreateMenuFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: Menu) => void;
  onCancel: () => void;
}

const CreateMenuForm: React.FC<CreateMenuFormProps> = props => {
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
      title="创建菜单"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <MenuFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateMenuForm;
