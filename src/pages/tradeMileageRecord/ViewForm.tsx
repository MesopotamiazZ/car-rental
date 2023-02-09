import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { TradeMileageRecord } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<TradeMileageRecord> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<TradeMileageRecord >;
}

export interface ViewFormState {
}

const ViewTradeMileageRecordForm: React.FC<ViewFormProps> = props => {
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
      title="查看订单里程记录"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="派车单号">
							{newValues?.orderId}
					</Descriptions.Item>
				
    		<Descriptions.Item label="放空起公里">
							{newValues?.emptyStartKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="起公里">
							{newValues?.startKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="止公里">
							{newValues?.endKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="放空止公里">
							{newValues?.emptyEndKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="放空累计公里数">
							{newValues?.emptyTotalKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="累计公里">
							{newValues?.totalKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="超里程数">
							{newValues?.thanKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开始时间">
							{newValues?.startTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="结束时间">
							{newValues?.endTime}
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

export default ViewTradeMileageRecordForm;
