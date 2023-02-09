import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { SysUser } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<SysUser> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<SysUser >;
}

export interface ViewFormState {
}

const ViewSysUserForm: React.FC<ViewFormProps> = props => {
  const {
    onCancel: handleViewModalVisible,
    viewModalVisible,
    values,
  } = props;

  let newValues:FormValueType =  DateTimeToString(values);
  const renderFooter = () => {
    
      return (
        <>
          <Button onClick={() => handleViewModalVisible(false, newValues)}>关闭</Button>
        </>
      );

  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="查看系统用户"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="登陆名">
							{newValues?.username}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用户性别1男 2女 3未知">
							{newValues?.sex}
					</Descriptions.Item>
				
    		<Descriptions.Item label="密码">
							{newValues?.password}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用户邮箱">
							{newValues?.email}
					</Descriptions.Item>
				
    		<Descriptions.Item label="手机号码">
							{newValues?.mobile}
					</Descriptions.Item>
				
    		<Descriptions.Item label="工号">
							{newValues?.jobNumber}
					</Descriptions.Item>
				
    		<Descriptions.Item label="籍贯">
							{newValues?.nativerPlace}
					</Descriptions.Item>
				
    		<Descriptions.Item label="毕业院校">
							{newValues?.graduationCollege}
					</Descriptions.Item>
				
    		<Descriptions.Item label="毕业时间">
							{newValues?.graduationTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="学历">
							{newValues?.qualifications}
					</Descriptions.Item>
				
    		<Descriptions.Item label="所学专业">
							{newValues?.subject}
					</Descriptions.Item>
				
    	
    	
    		<Descriptions.Item label="创建者">
							{newValues?.createId}
					</Descriptions.Item>
				
    		<Descriptions.Item label="创建时间">
							{newValues?.createTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="更新者">
							{newValues?.modifyId}
					</Descriptions.Item>
				
    		<Descriptions.Item label="更新时间">
							{newValues?.modifyTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="">
							{newValues?.passwordResetDate}
					</Descriptions.Item>
				
      </Descriptions>
    </Modal>
  );
};

export default ViewSysUserForm;
