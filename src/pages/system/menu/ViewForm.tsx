import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Divider, Drawer } from 'antd';
import type { Menu } from './data';
import { DateTimeToString } from '@/global/DateTimeUtils';
import { getLableFromType } from '@/global/CommonUtils';
import columns from './Columns';
import { isMobile } from '@/global/DeviceUtils';
import { getById } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import SourceEnum from '@/constants/SourceEnum';

export type FormValueType = Partial<Menu>

export type ViewFormProps = {
	onCancel: (flag?: boolean, formVals?: FormValueType) => void;
	viewModalVisible: boolean;
	values: Partial<Menu>;
}

const ViewMenuForm: React.FC<ViewFormProps> = props => {
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
			title="查看菜单"
			visible={viewModalVisible}
			footer={renderFooter()}
			onClose={() => handleViewModalVisible(false, newValues)}
		>
			<Descriptions column={1}>

				<Descriptions.Item label="父部门">
					{newValues?.parentId}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="菜单名称">
					{newValues?.name}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="请求地址">
					{newValues?.url}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="权限标识">
					{/* //(多个用逗号分隔，如：user:list,user:create) */}
					{newValues?.perms}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="菜单类型">
					{getLableFromType(columns, "type", newValues.type) || "未知"}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="菜单图标">
					{newValues?.icon}
				</Descriptions.Item>
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />}
				<Descriptions.Item label="显示顺序">
					{newValues?.orderNum}
				</Descriptions.Item>
				{/* {!isMobile() && <Divider style={{ margin: '10px 0' }} />}
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
				{!isMobile() && <Divider style={{ margin: '10px 0' }} />} */}
			</Descriptions>
		</Drawer>
	);
};

export default ViewMenuForm;
