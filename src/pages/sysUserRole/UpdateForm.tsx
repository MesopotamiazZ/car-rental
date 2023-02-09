import React, {useEffect } from 'react';
import { Form, Button, Modal} from 'antd';

import { SysUserRole } from './data';
import {formLayout} from '@/constants/constants';
import {StringToDateTime} from '@/global/DateTimeUtils';
import SysUserRoleFormItem from './Form';

export interface FormValueType extends Partial<SysUserRole> {
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting:boolean;
  updateModalVisible: boolean;
  values: Partial<SysUserRole>;
}

export interface UpdateFormState {
}

const UpdateSysUserRoleForm: React.FC<UpdateFormProps> = props => {
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
      title="修改用户与角色对应关系"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <SysUserRoleFormItem form={form} />
      </Form>
    </Modal>
  );
};

export default UpdateSysUserRoleForm;
