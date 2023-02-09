import { Divider, Button, Space, Switch } from 'antd';
import { Dropdown, Menu } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { Role } from './data.d';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import ViewForm from './ViewForm';
import { getById, retrievePageList, retrievePageListSys } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { handleAdd, handleUpdate, handleRemove, handleAddSys, handleUpdateSys, handleRemoveSys } from '@/global/HandleOps';
import RoleColumns from './Columns';
import { DEFAULT_PAGE_SIZE } from '@/constants/constants';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { isMobile } from '@/global/DeviceUtils';
import NativeList from './nativeList'
/**
 * 模块主页面
 */
const RoleTableList: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [viewModalVisible, handleViewModalVisible] = useState<boolean>(false);

  const [editFormValues, setEditFormValues] = useState({});
  const [viewFormValues, setViewFormValues] = useState({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [params, setParams] = useState({});
  const columns: ProColumns<Role>[] = [
    ...RoleColumns
    ,
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   search: false,
    //   render: (_, record) => {
    //     return (
    //       <Switch checked={record.status === 0 ? true : false} onChange={async (e) => {
    //         console.log(e);

    //         await getById(record.roleId, NamespaceEnum.Role).then(async (res: any) => {

    //           const success = await handleUpdateSys({ ...record, ...res.role, status: e ? 0 : 1 }, NamespaceEnum.Role);
    //           if (success) {
    //             actionRef.current?.reload();
    //           }
    //         });

    //       }} />
    //     )
    //   },
    // },
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
          <a title="删除" onClick={() => handleRemoveSys([record.roleId], actionRef, NamespaceEnum.Role)}><DeleteOutlined /></a>
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
          handleRemove={(id: any, actionRefs: any) => handleRemoveSys(id, actionRefs, NamespaceEnum.Role)} /> :
          <ProTable<Role>
            actionRef={actionRef}
            rowKey="roleId"
            toolBarRender={(action, { selectedRows }) => [
              <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
                新建
              </Button>,
              // selectedRows && selectedRows.length > 0 && (
              //   <Dropdown
              //     overlay={
              //       <Menu
              //         onClick={async e => {
              //           const selectedIds = selectedRows.map(row => row.id || -1);
              //           if (e.key === 'remove') {
              //             await handleRemoveSys(selectedIds, actionRef, NamespaceEnum.Role);
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
              return retrievePageList(requestParams, NamespaceEnum.Role);
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
          const success = await handleAddSys(value, NamespaceEnum.Role);
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
          const success = await handleUpdateSys(value, NamespaceEnum.Role);
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

      {viewModalVisible && <ViewForm
        onCancel={() => handleViewModalVisible(false)}
        viewModalVisible={viewModalVisible}
        values={viewFormValues}
      />
      }
    </PageHeaderWrapper>
  );
};

export default RoleTableList;
