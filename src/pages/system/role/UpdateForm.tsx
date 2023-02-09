import React, { useEffect } from 'react';
import { Form, Button, Modal } from 'antd';

import type { Role } from './data';
import { formLayout } from '@/constants/constants';
import { StringToDateTime } from '@/global/DateTimeUtils';
import RoleFormItem from './Form';
import { getById } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';

export type FormValueType = Partial<Role>

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  submitting: boolean;
  updateModalVisible: boolean;
  values: Partial<Role>;
}


const UpdateRoleForm: React.FC<UpdateFormProps> = props => {
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    submitting,
    values,
  } = props;

  const [form] = Form.useForm();
  const newValues: any = StringToDateTime(values);
  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      ...newValues,
    });

    // const getRoleIds = () => {
    //   if (values?.roleId) {
    //     // getById(values.roleId, NamespaceEnum.RoleInfo).then((res: any) => {

    //       // let newList = []
    //       // if (res.role && res.role.menuIdList) {
    //       //   newList = res.role.menuIdList.map((item: any) => (item + ''))
    //       // }
    //       // console.log(res?.role, 'newListnewListnewListnewList')
    //       form.setFieldsValue({
    //         ...newValues,
    //         // ...res?.role,
    //         // menuIdList: newList
    //       });
    //     // });
      // }
    // };

    // getRoleIds();
  }, [newValues]);


  const handleUpdateForm = async () => {
    const fieldsValue = await form.validateFields();
    handleUpdate({ ...fieldsValue, roleId: newValues.roleId });
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
      title="修改角色"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, newValues)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form  {...formLayout} form={form} >
        <RoleFormItem form={form} value={newValues} />
      </Form>
    </Modal>
  );
};

export default UpdateRoleForm;
