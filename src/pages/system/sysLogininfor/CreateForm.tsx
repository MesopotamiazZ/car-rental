import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { SysLogininfor } from './data';
import {formLayout} from '@/constants/constants';
import SysLogininforFormItem from './Form';


type CreateSysLogininforFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: SysLogininfor) => void;
  onCancel: () => void;
}

const CreateSysLogininforForm: React.FC<CreateSysLogininforFormProps> = props => {
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
      title="创建登录日志"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <SysLogininforFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateSysLogininforForm;
