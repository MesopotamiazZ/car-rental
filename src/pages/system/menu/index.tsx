import { Divider, Button, Dropdown, Menu } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PlusOutlined, DownOutlined } from '@ant-design/icons';
import { MenuType } from './data.d';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import ViewForm from './ViewForm';
import { retrievePageList, retrievePageListSys, retrievePageListTreeSys } from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { handleAdd, handleUpdate, handleRemove, handleExport, handleRemoveSys, handleAddSys, handleUpdateSys, handleRemoveSysById } from '@/global/HandleOps';
import MenuColumns from './Columns';

/**
 * 模块主页面
 */

const MenuTableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [viewModalVisible, handleViewModalVisible] = useState<boolean>(false);

  const [editFormValues, setEditFormValues] = useState({});
  const [viewFormValues, setViewFormValues] = useState({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [params, setParams] = useState({});
  const columns: ProColumns<MenuType>[] = [
    ...MenuColumns,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 200,
      align: 'center',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              setViewFormValues(record);
              handleViewModalVisible(true);
            }}
          >
            查看
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              setEditFormValues(record);
              handleUpdateModalVisible(true);
            }}
          >
            编辑
          </a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              let selectedIds: number[] = [];
              record.menuId && selectedIds.push(record.menuId);
              // handleRemove(selectedIds, actionRef, NamespaceEnum.Menu);
              handleRemoveSysById(selectedIds, actionRef, NamespaceEnum.Menu);
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];

  return (
    <PageHeaderWrapper>
      <ProTable<MenuType>
        // headerTitle="查询表格"
        locale={{
          emptyText: (
            <div className="nodata-placeholder">
              <div className="nodata-img"></div>
              <span>暂无数据</span>
            </div>
          ),
        }}
        actionRef={actionRef}
        rowKey="menuId"
        toolBarRender={(action, { selectedRows }) => [
          <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
            新建
          </Button>,
          // selectedRows && selectedRows.length > 0 && (
          //   <Dropdown
          //     overlay={
          //       <Menu
          //         onClick={async (e) => {
          //           let selectedIds = selectedRows.map((row) => row.menuId || -1);
          //           if (e.key === 'remove') {
          //             await handleRemoveSys(selectedIds, actionRef, NamespaceEnum.Menu);
          //             action && action.reload();
          //           } else if (e.key === 'export') {
          //             await handleExport(NamespaceEnum.Menu, selectedIds);
          //           } else if (e.key === 'exportAll') {
          //             await handleExport(NamespaceEnum.Menu);
          //           }
          //         }}
          //         selectedKeys={[]}
          //       >
          //         <Menu.Item key="remove">批量删除</Menu.Item>
          //         <Menu.Item key="export">批量导出</Menu.Item>
          //         <Menu.Item key="exportAll">导出全部</Menu.Item>
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
        request={async (params) => {
          return retrievePageListTreeSys(params, NamespaceEnum.Menu);
        }}
        columns={columns}
        tableAlertRender={false}
        rowSelection={{}}
        search={{ collapseRender: () => false, collapsed: false }}
        // pagination={{
        //   pageSize: DEFAULT_PAGE_SIZE ,
        //   hideOnSinglePage: true,
        //   showQuickJumper:false,// {goButton:<span>前往 <input/>页</span>},
        //  // showSizeChanger: false,
        // }}
        pagination={false}
        onChange={(pagination, filters, sorter: any) => {
          let parameters = { filed: sorter.field, order: sorter.order, ...filters };
          setParams(parameters);
        }}
      />

      <CreateForm
        onSubmit={async (value) => {
          setSubmitting(true);
          const success = await handleAddSys(value, NamespaceEnum.Menu);
          setSubmitting(false);
          if (success) {
            handleModalVisible(false);
            actionRef.current && actionRef.current.reload();
          }
        }}
        onCancel={() => handleModalVisible(false)}
        submitting={submitting}
        modalVisible={createModalVisible}
      />
      {
        updateModalVisible && <UpdateForm
          onSubmit={async (value) => {
            setSubmitting(true);
            const success = await handleUpdateSys(value, NamespaceEnum.Menu);
            setSubmitting(false);
            if (success) {
              handleUpdateModalVisible(false);
              setEditFormValues({});

              actionRef.current && actionRef.current.reload();
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
      <ViewForm
        onCancel={() => {
          handleViewModalVisible(false);
        }}
        viewModalVisible={viewModalVisible}
        values={viewFormValues}
      />
    </PageHeaderWrapper>
  );
};

export default MenuTableList;
