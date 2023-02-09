import React  from 'react';
import { Form, Modal , Button } from 'antd';
import { SysRoleMenu } from './data';
import {formLayout} from '@/constants/constants';
import SysRoleMenuFormItem from './Form';


interface CreateSysRoleMenuFormProps {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: SysRoleMenu) => void;
  onCancel: () => void;
}

const CreateSysRoleMenuForm: React.FC<CreateSysRoleMenuFormProps> = props => {
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
      title="创建角色与菜单对应关系"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <SysRoleMenuFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateSysRoleMenuForm;
