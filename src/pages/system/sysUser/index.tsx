import { Divider, Button, Space, message } from 'antd';
import { Dropdown, Menu } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { SysUser } from './data';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import ViewForm from './ViewForm';
import { retrievePageList, retrievePageListSys } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { handleAdd, handleUpdate, handleRemove, handleAddSys, handleUpdateSys, handleRemoveSys, handleRemoveSysById } from '@/global/HandleOps';
import SysUserColumns from './Columns';
import { DEFAULT_PAGE_SIZE } from '@/constants/constants';
import { DownloadOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { isMobile } from '@/global/DeviceUtils';
import NativeList from './nativeList'
import PasswordForm from './PasswordForm';
import { resetPassword } from '@/pages/user/login/service';
import ResponseCodeEnum from '@/constants/ResponseCodeEnum';
import OBtnUpload from "@/components/OBtnUpload";
import { constructImportUrl } from '@/global/CommonUtils';
import httpBaseConfig from '@/api/base/httpBaseConfig';

/**
 * 模块主页面
 */
const SysUserTableList: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [viewModalVisible, handleViewModalVisible] = useState<boolean>(false);
  const [passwordModalVisible, handlePasswordModalVisible] = useState<boolean>(false);


  const [editFormValues, setEditFormValues] = useState({});
  const [viewFormValues, setViewFormValues] = useState({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [params, setParams] = useState({});
  const columns: ProColumns<SysUser>[] = [
    ...SysUserColumns
    ,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space split={<Divider type="vertical" />} size={[0, 8]} wrap>

          <a title="查看" onClick={() => {
            setViewFormValues(record)
            handleViewModalVisible(true)
          }}><EyeOutlined /></a>
          {/* <Divider type="vertical" /> */}
          <a title="编辑" onClick={() => {
            setEditFormValues(record);
            handleUpdateModalVisible(true);
          }}
          ><EditOutlined /></a>
          {/* <Divider type="vertical" /> */}
          <a
            onClick={() => {
              setEditFormValues(record);
              handlePasswordModalVisible(true);
            }}
          >
            <ReloadOutlined />
          </a>
          {/* <Divider type="vertical" /> */}
          <a title="删除" onClick={() => {
               let selectedIds: number[] = [];
               record.userId && selectedIds.push(record.userId);
               handleRemoveSysById(selectedIds,actionRef,NamespaceEnum.SysUser);
          }}><DeleteOutlined /></a>
        </Space>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      {
        isMobile() ? <NativeList
          handleModalVisible={(e: boolean) => handleModalVisible(e)}
          setViewFormValues={(e: boolean) => setViewFormValues(e)}
          setEditFormValues={(e: boolean) => setEditFormValues(e)}
          handleUpdateModalVisible={(e: boolean) => handleUpdateModalVisible(e)}
          handleViewModalVisible={(e: boolean) => handleViewModalVisible(e)}
          handleRemove={(id: any, actionRefs: any) => handleRemoveSys(id, actionRefs, NamespaceEnum.SysUser)} /> :
          <ProTable<SysUser>
            actionRef={actionRef}
            rowKey="userId"
            toolBarRender={(action, { selectedRows }) => [
              
              <OBtnUpload actionRef={actionRef} text={'批量导入'} types={1} url={constructImportUrl(NamespaceEnum.SysUser)} />,

              <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
                新建
              </Button>,
              // selectedRows && selectedRows.length > 0 && (
              //   <Dropdown
              //     overlay={
              //       <Menu
              //         onClick={async e => {
              //           const selectedIds = selectedRows.map(row => row.userId || -1);
              //           if (e.key === 'remove') {
              //             await handleRemoveSysById(selectedIds, actionRef, NamespaceEnum.SysUser);
              //             action?.reload();
              //           }
              //         }}
              //         selectedKeys={[]}
              //       >
              //         <Menu.Item key="remove">批量删除</Menu.Item>
              //       </Menu>
              //     }
              //   >
              //     <Button>
              //       批量操作 <DownOutlined />
              //     </Button>
              //   </Dropdown>
              // ),
            ]}
            params={params}
            request={requestParams => {
              return retrievePageList(requestParams, NamespaceEnum.SysUser);
            }}
            columns={columns}
            tableAlertRender={false}
            rowSelection={{}}
            search={{ collapseRender: () => false, collapsed: false, }}
            pagination={{
              pageSize: DEFAULT_PAGE_SIZE,
              showQuickJumper: false,// {goButton:<span>前往 <input/>页</span>},
              // showSizeChanger: false,
              hideOnSinglePage: true,
            }}
            onChange={(pagination, filters, sorter: any) => {
              const parameters = { filed: sorter.field, order: sorter.order, ...filters }
              setParams(parameters)
            }}
          />
      }
      {createModalVisible && <CreateForm
        onSubmit={async (value: any) => {
          setSubmitting(true)
          const success = await handleAddSys(value, NamespaceEnum.SysUser);
          setSubmitting(false);
          if (success) {
            handleModalVisible(false);
            actionRef.current?.reload();
          }
        }}
        onCancel={() => handleModalVisible(false)}
        submitting={submitting}
        modalVisible={createModalVisible}
      />
      }

      {updateModalVisible && <UpdateForm
        onSubmit={async (value: any) => {
          setSubmitting(true)
          const success = await handleUpdateSys(value, NamespaceEnum.SysUser);
          setSubmitting(false);
          if (success) {
            handleUpdateModalVisible(false);
            setEditFormValues({});
            actionRef.current?.reload();
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setEditFormValues({});
        }}
        updateModalVisible={updateModalVisible}
        submitting={submitting}
        values={editFormValues}
      />
      }

      {passwordModalVisible && <PasswordForm
        onSubmit={async (value) => {
          setSubmitting(true);
          const res: any = await resetPassword({
            userId: value.userId,
            password: value.password,
            newPassword: value.newPassword,
          });
          setSubmitting(false);
          if (res?.code === ResponseCodeEnum.SUCCESS) {
            message.success(res.msg);
            handlePasswordModalVisible(false);
            actionRef?.current?.reload();
          } else {
            message.error(res.msg);
          }
        }}
        onCancel={() => {
          handlePasswordModalVisible(false);
          // setEditFormValues({});
        }}
        passwordModalVisible={passwordModalVisible}
        submitting={submitting}
        values={editFormValues}
      />
      }



      {viewModalVisible && <ViewForm
        onCancel={() => handleViewModalVisible(false)}
        viewModalVisible={viewModalVisible}
        values={viewFormValues}
      />
      }
    </PageHeaderWrapper>
  );
};

export default SysUserTableList;
