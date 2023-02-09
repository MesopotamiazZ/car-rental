import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { SysRole } from './data';
import {formLayout} from '@/constants/constants';
import SysRoleFormItem from './Form';


interface CreateSysRoleFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: SysRole) => void;
  onCancel: () => void;
}

const CreateSysRoleForm: React.FC<CreateSysRoleFormProps> = props => {
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
      title="创建角色"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <SysRoleFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateSysRoleForm;
