import React, { useEffect } from 'react';
import { Form, Button, Modal } from 'antd';

import type { Menu } from './data';
import { formLayout } from '@/constants/constants';
import { StringToDateTime } from '@/global/DateTimeUtils';
import MenuFormItem from './Form';

export type FormValueType = Partial<Menu>

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting: boolean;
  updateModalVisible: boolean;
  values: Partial<Menu>;
}


const UpdateMenuForm: React.FC<UpdateFormProps> = props => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    submitting,
    values,
  } = props;

  const [form] = Form.useForm();
  const newValues: any = StringToDateTime(values);

  console.log(newValues);
  
  
  // 下拉框需要转成字符串才能反显
  newValues.type = String(newValues.type)
  newValues.parentId = String(newValues.parentId)
  // useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      ...newValues,
    });
  // }, [newValues]);
  console.log(form);
  


  const handleUpdateForm = async () => {
    const fieldsValue = await form.validateFields();
    handleUpdate({ ...fieldsValue, id: newValues.menuId });
  };


  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, newValues)}>取消</Button>
        <Button type="primary" onClick={() => handleUpdateForm()} loading={submitting}>确定 </Button>
      </>
    );

  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="修改菜单"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <MenuFormItem form={form} value={newValues} />
      </Form>
    </Modal>
  );
};

export default UpdateMenuForm;
