import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Divider, Drawer } from 'antd';
import type { Role } from './data';
import { DateTimeToString } from '@/global/DateTimeUtils';
import { isMobile } from '@/global/DeviceUtils';
import { getById } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import SourceEnum from '@/constants/SourceEnum';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';

export type FormValueType = Partial<Role>

export type ViewFormProps = {
	onCancel: (flag?: boolean, formVals?: FormValueType) => void;
	viewModalVisible: boolean;
	values: Partial<Role>;
}

const ViewRoleForm: React.FC<ViewFormProps> = props => {
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
			title="查看角色"
			visible={viewModalVisible}
			footer={renderFooter()}
			onClose={() => handleViewModalVisible(false, newValues)}
		>
			<Descriptions column={1}>

				<Descriptions.Item label="职务名称">
					{newValues?.roleName}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}

				<Descriptions.Item label="职务描述">
					{newValues?.description}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}

				<Descriptions.Item label="人员数量">
					{newValues?.userNumber}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}

				{/* <Descriptions.Item label="创建者">
					{newValues?.createId}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />} */}
				<Descriptions.Item label="创建时间">
					{newValues?.createTime}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				{/* 	<Descriptions.Item label="更新者">
					{newValues?.modifyId}
				</Descriptions.Item> 
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}*/}
				<Descriptions.Item label="更新时间">
					{newValues?.modifyTime}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}

				<Descriptions.Item label="状态">
					{newValues?.status != null ? getLableFromType(columns, "status", newValues.status) : "未知"}
				</Descriptions.Item>
			</Descriptions>
		</Drawer>
	);
};

export default ViewRoleForm;
