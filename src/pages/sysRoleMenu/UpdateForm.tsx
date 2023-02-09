import React, {useEffect } from 'react';
import { Form, Button, Modal} from 'antd';

import { SysRoleMenu } from './data';
import {formLayout} from '@/constants/constants';
import {StringToDateTime} from '@/global/DateTimeUtils';
import SysRoleMenuFormItem from './Form';

export interface FormValueType extends Partial<SysRoleMenu> {
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting:boolean;
  updateModalVisible: boolean;
  values: Partial<SysRoleMenu>;
}

export interface UpdateFormState {
}

const UpdateSysRoleMenuForm: React.FC<UpdateFormProps> = props => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    submitting, 
    values,
  } = props;

  const [form] = Form.useForm();
  let newValues :any = StringToDateTime(values);
    	    	    	    	    	    	    	    	    useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      ...newValues,
    });

  }, [newValues]);


  const handleUpdateForm = async () => {
    const fieldsValue = await form.validateFields();
    handleUpdate({...fieldsValue,id:newValues.id});
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
      title="修改角色与菜单对应关系"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <SysRoleMenuFormItem form={form} />
      </Form>
    </Modal>
  );
};

export default UpdateSysRoleMenuForm;
