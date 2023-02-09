import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Divider, Drawer } from 'antd';
import type { SysUser } from './data';
import { DateTimeToString } from '@/global/DateTimeUtils';
import { isMobile } from '@/global/DeviceUtils';
import { getById } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import SourceEnum from '@/constants/SourceEnum';

export type FormValueType = Partial<SysUser>

export type ViewFormProps = {
	onCancel: (flag?: boolean, formVals?: FormValueType) => void;
	viewModalVisible: boolean;
	values: Partial<SysUser>;
}

const ViewSysUserForm: React.FC<ViewFormProps> = props => {
	const {
		onCancel: handleViewModalVisible,
		viewModalVisible,
		values,
	} = props;

	const [creatByName, setCreatByName] = useState<string>();


	const newValues: FormValueType = DateTimeToString(values);
	const renderFooter = () => {
		return (
			<>
				<Button onClick={() => handleViewModalVisible(false, newValues)}>关闭</Button>
			</>
		);
	};

	useEffect(() => {

		if (newValues?.createBy) {
			if (newValues?.source === SourceEnum.ADMIN) {
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
			width={isMobile() ? 350 : 700}
			destroyOnClose
			title="查看系统用户"
			visible={viewModalVisible}
			footer={renderFooter()}
			onClose={() => handleViewModalVisible(false, newValues)}
		>
			<Descriptions column={1}>

				<Descriptions.Item label="登陆账号">
					{newValues?.username}
				</Descriptions.Item>
				{/* {!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="密码">
			 {newValues?.password}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="盐加密">
			 {newValues?.salt}
		</Descriptions.Item> */}

				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="用户角色">
					{newValues?.roleList?.map((role:any) => role.description).join()}
				</Descriptions.Item>



				{/* {!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="创建者">
			 {newValues?.createId}
		</Descriptions.Item> */}
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="创建时间">
					{newValues?.createTime}
				</Descriptions.Item>
				{/* {!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="更新者">
			 {newValues?.modifyId}
		</Descriptions.Item>
		{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
		<Descriptions.Item label="更新时间">
			 {newValues?.modifyTime}
		</Descriptions.Item> */}
			</Descriptions>
		</Drawer>
	);
};

export default ViewSysUserForm;
