import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { SysMenu } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<SysMenu> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<SysMenu >;
}

export interface ViewFormState {
}

const ViewSysMenuForm: React.FC<ViewFormProps> = props => {
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
      title="查看菜单"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="父部门">
							{newValues?.parentId}
					</Descriptions.Item>
				
    		<Descriptions.Item label="菜单名称">
							{newValues?.name}
					</Descriptions.Item>
				
    		<Descriptions.Item label="请求地址">
							{newValues?.url}
					</Descriptions.Item>
				
    		<Descriptions.Item label="权限标识(多个用逗号分隔，如：user:list,user:create)">
							{newValues?.perms}
					</Descriptions.Item>
				
    		<Descriptions.Item label="菜单类型">
							{newValues?.type?getLableFromType(columns,"type",newValues.type):"未知"}
					</Descriptions.Item>
				
    		<Descriptions.Item label="菜单图标">
							{newValues?.icon}
					</Descriptions.Item>
				
    		<Descriptions.Item label="显示顺序">
							{newValues?.orderNum}
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

export default ViewSysMenuForm;
