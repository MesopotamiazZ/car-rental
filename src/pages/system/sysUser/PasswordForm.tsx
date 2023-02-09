import React, { useEffect } from 'react';
import { Form, Button, Modal, Input, message } from 'antd';

import { SysUser } from './data';
import { formLayout } from '@/constants/constants';
import { StringToDateTime } from '@/global/DateTimeUtils';
import PasswordFormItem from './Password';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { getById } from '@/global/CommonService';

export interface FormValueType extends Partial<SysUser> { }

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting: boolean;
  passwordModalVisible: boolean;
  values: Partial<SysUser>;
}

export interface UpdateFormState { }

const PasswordForm: React.FC<UpdateFormProps> = (props) => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    passwordModalVisible,
    submitting,
    values,
  } = props;

  const [form] = Form.useForm();
  let newValues: any = StringToDateTime(values);
  useEffect(() => {
    console.log(values)
    if (values.userId) {
      // getById(values.userId, NamespaceEnum.SysUser).then((res) => {
      //   form.setFieldsValue({
      //     ...newValues,
      //     password: '',
      //   });
      // });

      form.setFieldsValue({
        ...newValues,
        password: '',
      });
    }
  }, [newValues]);

  const handleUpdateForm = async () => {
    const fieldsValue = await form.validateFields();
    if(fieldsValue.password!==fieldsValue.confirm){
      message.info('两次输入不一致')
      return
    }
    handleUpdate({ ...fieldsValue, userId: newValues.userId });
  };

  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, newValues)}>取消</Button>
        <Button type="primary" onClick={() => handleUpdateForm()} loading={submitting}>
          保存{' '}
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="重置密码"
      visible={passwordModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form autoComplete={'off'} {...formLayout} form={form}>
        <PasswordFormItem />
      </Form>
    </Modal>
  );
};

export default PasswordForm;
