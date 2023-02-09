import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { Role } from './data';
import {formLayout} from '@/constants/constants';
import RoleFormItem from './Form';


type CreateRoleFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: Role) => void;
  onCancel: () => void;
}

const CreateRoleForm: React.FC<CreateRoleFormProps> = props => {
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
      title="创建角色"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <RoleFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateRoleForm;
