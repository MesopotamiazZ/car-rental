import React from 'react';
import { Button, Modal, Descriptions, Divider} from 'antd';
import { Trade } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export interface FormValueType extends Partial<Trade> {
}

export interface ViewFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<Trade >;
}

export interface ViewFormState {
}

const ViewTradeForm: React.FC<ViewFormProps> = props => {
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
      title="查看订单表"
      visible={viewModalVisible}
      footer={renderFooter()}
      onCancel={() => handleViewModalVisible(false, newValues)}
      afterClose={() => handleViewModalVisible()}
    >
      <Descriptions bordered column={2}>
      
    	
    		<Descriptions.Item label="派车单号">
							{newValues?.orderId}
					</Descriptions.Item>
				
    		<Descriptions.Item label="业务员">
							{newValues?.salesman}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用车单位">
							{newValues?.customerCompany}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用车联系人">
							{newValues?.customer}
					</Descriptions.Item>
				
    		<Descriptions.Item label="联系方式">
							{newValues?.customerMobile}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用车开始时间">
							{newValues?.useStartTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="用车结束时间">
							{newValues?.useEndTime}
					</Descriptions.Item>
				
    		<Descriptions.Item label="是否外租">
							{newValues?.selfCar?getLableFromType(columns,"selfCar",newValues.selfCar):"未知"}
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
				
    		<Descriptions.Item label="驾驶员">
							{newValues?.driver}
					</Descriptions.Item>
				
    		<Descriptions.Item label="驾驶员联系方式">
							{newValues?.driverMobile}
					</Descriptions.Item>
				
    		<Descriptions.Item label="业务行程">
							{newValues?.businessTrip}
					</Descriptions.Item>
				
    		<Descriptions.Item label="业务行程备注">
							{newValues?.businessTripRemark}
					</Descriptions.Item>
				
    	
    		<Descriptions.Item label="台数">
							{newValues?.num}
					</Descriptions.Item>
				
    		<Descriptions.Item label="出车天数">
							{newValues?.days}
					</Descriptions.Item>
				
    		<Descriptions.Item label="总台数">
							{newValues?.numDays}
					</Descriptions.Item>
				
    		<Descriptions.Item label="过路费">
							{newValues?.toll}
					</Descriptions.Item>
				
    		<Descriptions.Item label="停车费">
							{newValues?.parkingFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="ect费用">
							{newValues?.etcFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="超时长">
							{newValues?.timeout}
					</Descriptions.Item>
				
    		<Descriptions.Item label="超时费">
							{newValues?.timeoutFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="驾驶员餐费">
							{newValues?.meals1}
					</Descriptions.Item>
				
    		<Descriptions.Item label="顾客餐费">
							{newValues?.meals2}
					</Descriptions.Item>
				
    		<Descriptions.Item label="住宿费">
							{newValues?.hotelFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="其他费用">
							{newValues?.otherFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="油费">
							{newValues?.oilFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="小吃费">
							{newValues?.snacksFee}
					</Descriptions.Item>
				
    		<Descriptions.Item label="杂费税">
							{newValues?.incidentalTax}
					</Descriptions.Item>
				
    		<Descriptions.Item label="驾驶员垫付">
							{newValues?.driverPayment}
					</Descriptions.Item>
				
    		<Descriptions.Item label="总共杂费">
							{newValues?.incidentalTotal}
					</Descriptions.Item>
				
    		<Descriptions.Item label="总费用">
							{newValues?.totalPrice}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票名称">
							{newValues?.invoiceName}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票时间">
							{newValues?.invoiceDate}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票号">
							{newValues?.invoiceNo}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票备注">
							{newValues?.invoiceRemark}
					</Descriptions.Item>
				
    		<Descriptions.Item label="付款时间">
							{newValues?.paymentDate}
					</Descriptions.Item>
				
    		<Descriptions.Item label="是否付款">
							{newValues?.hasPay?getLableFromType(columns,"hasPay",newValues.hasPay):"未知"}
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
				
    		<Descriptions.Item label="外租超时费">
							{newValues?.timeoutFeeOut}
					</Descriptions.Item>
				
    		<Descriptions.Item label="合作单位总费用">
							{newValues?.totalMoney}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票名称(周)">
							{newValues?.invoiceNameWeek}
					</Descriptions.Item>
				
    		<Descriptions.Item label="开票时间(周)">
							{newValues?.invoiceDateWeek}
					</Descriptions.Item>
				
    		<Descriptions.Item label="年月">
							{newValues?.dateYear}
					</Descriptions.Item>
				
    		<Descriptions.Item label="日">
							{newValues?.dateDay}
					</Descriptions.Item>
				
      </Descriptions>
    </Modal>
  );
};

export default ViewTradeForm;
