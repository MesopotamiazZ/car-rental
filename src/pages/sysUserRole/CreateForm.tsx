import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { SysUserRole } from './data';
import {formLayout} from '@/constants/constants';
import SysUserRoleFormItem from './Form';


interface CreateSysUserRoleFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: SysUserRole) => void;
  onCancel: () => void;
}

const CreateSysUserRoleForm: React.FC<CreateSysUserRoleFormProps> = props => {
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
      title="创建用户与角色对应关系"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <SysUserRoleFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateSysUserRoleForm;
