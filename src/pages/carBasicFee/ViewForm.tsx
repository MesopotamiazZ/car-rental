import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { CarBasicFee } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<CarBasicFee> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<CarBasicFee >;
}

export interface ViewFormState {
}

const ViewCarBasicFeeForm: React.FC<ViewFormProps> = props => {
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
      title="查看车辆使用费用"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="基本公里数">
							{newValues?.basicKm}
					</Descriptions.Item>
				
    		<Descriptions.Item label="超公里价格（元/公里）">
							{newValues?.thanKmFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="外租超公里价格（元/公里）">
							{newValues?.externalThanKmFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="基本租车费(全天)">
							{newValues?.rentFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="驾驶员工资(全天)">
							{newValues?.driverFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="基本租车费(半天)">
							{newValues?.rentHalfFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="驾驶员工资(半天)">
							{newValues?.driverHalfFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="外租基本租车费(全天)">
							{newValues?.externalBasicFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="外租驾驶员工资(全天)">
							{newValues?.externalDriverFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="外租基本租车费(半天)">
							{newValues?.externalHalfBasicFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="外租驾驶员工资(半天)">
							{newValues?.externalHalfDriverFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="燃油费(每公里油费)">
							{newValues?.aveOilFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="燃油费(每公里油费)">
							{newValues?.externalOilFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="车辆牌照">
							{newValues?.licensePlate}
					</Descriptions.Item>
				
    		<Descriptions.Item label="车型">
							{newValues?.carModel}
					</Descriptions.Item>
				
    		<Descriptions.Item label="车辆单位">
							{newValues?.company}
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
				
    		<Descriptions.Item label="派单号">
							{newValues?.orderId}
					</Descriptions.Item>
				
      </Descriptions>
    </Modal>
  );
};

export default ViewCarBasicFeeForm;
