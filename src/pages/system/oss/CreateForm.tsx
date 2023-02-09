import React  from 'react';
import { Form, Modal , Button } from 'antd';
import type { Oss } from './data';
import {formLayout} from '@/constants/constants';
import OssFormItem from './Form';


type CreateOssFormProps = {
  modalVisible: boolean;
  submitting:boolean;
  onSubmit: (fieldsValue: Oss) => void;
  onCancel: () => void;
}

const CreateOssForm: React.FC<CreateOssFormProps> = props => {
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
      title="创建文件上传"
      visible={modalVisible}
      footer={renderFooter()}
      onCancel={() => onCancel()}
    >
      <Form {...formLayout} form={form}>
          <OssFormItem  form={form}/>
      </Form>
    </Modal>
  );
};

export default CreateOssForm;
