import React, { useEffect, useState } from 'react';
import { Button,  Descriptions, Divider, Drawer } from 'antd';
import type { SysLogininfor } from './data';
import {DateTimeToString} from '@/global/DateTimeUtils';
import { isMobile } from '@/global/DeviceUtils';
import { getById } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import SourceEnum from '@/constants/SourceEnum';

export type FormValueType = Partial<SysLogininfor> 

export type ViewFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  viewModalVisible: boolean;
  values: Partial<SysLogininfor >;
}

const ViewSysLogininforForm: React.FC<ViewFormProps> = props => {
  const {
    onCancel: handleViewModalVisible,
    viewModalVisible,
    values,
  } = props;
  
  const [creatByName,setCreatByName] =useState<string>();

 
  const newValues:FormValueType =  DateTimeToString(values);
  const renderFooter = () => {
      return (
        <>
          <Button onClick={() => handleViewModalVisible(false, newValues)}>关闭</Button>
        </>
      );
  };

  useEffect(() => {
    
	if(newValues?.createBy){
		if(newValues?.source === SourceEnum.ADMIN){
			getById(newValues.createBy, NamespaceEnum.SysUser)
			.then(res => {
			 if (res.data) {
			   setCreatByName(res.data.loginName)
			 }
		   })
		}
		// else{
			// setCreatByName(clientUserName)
		// }
	  }
  }, [newValues?.createBy]);
  
  return (
    <Drawer
      width={isMobile()?350:700}
      destroyOnClose
      title="查看登录日志"
      visible={viewModalVisible}
      footer={renderFooter()}
      onClose={() => handleViewModalVisible(false, newValues)}
    >
      <Descriptions column={1}>
      
		<Descriptions.Item label="登录账号">
			 {newValues?.loginName}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="登录IP地址">
			 {newValues?.ipaddr}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="登录地点">
			 {newValues?.loginLocation}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="浏览器类型">
			 {newValues?.browser}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="操作系统">
			 {newValues?.os}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="提示消息">
			 {newValues?.msg}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="访问时间">
			 {newValues?.loginTime}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="创建者">
			 {newValues?.createId}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="创建时间">
			 {newValues?.createTime}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="更新者">
			 {newValues?.modifyId}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="更新时间">
			 {newValues?.modifyTime}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
      </Descriptions>
    </Drawer>
  );
};

export default ViewSysLogininforForm;
