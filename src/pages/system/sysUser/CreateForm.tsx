import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { SysUser } from './data';
import {formLayout} from '@/constants/constants';
import SysUserFormItem from './Form';


type CreateSysUserFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: SysUser) => void;
  onCancel: () => void;
}

const CreateSysUserForm: React.FC<CreateSysUserFormProps> = props => {
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
      title="创建系统用户"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <SysUserFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateSysUserForm;
