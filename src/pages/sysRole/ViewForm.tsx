import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { SysRole } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<SysRole> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<SysRole >;
}

export interface ViewFormState {
}

const ViewSysRoleForm: React.FC<ViewFormProps> = props => {
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
      title="查看角色"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="角色名称">
							{newValues?.roleName}
					</Descriptions.Item>
				
    		<Descriptions.Item label="人员数量">
							{newValues?.userNumber}
					</Descriptions.Item>
				
    		<Descriptions.Item label="描述">
							{newValues?.description}
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
				
      </Descriptions>
    </Modal>
  );
};

export default ViewSysRoleForm;
