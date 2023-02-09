import { Divider,Button, Dropdown, Menu} from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PlusOutlined, DownOutlined } from '@ant-design/icons';
import { SysUserRole } from './data.d';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';
import ViewForm from './ViewForm';
import { retrievePageList} from '@/global/CommonService';
import NamespaceEnum from '@/constants/NamespaceEnum';
import {constructImportUrl} from '@/global/CommonUtils';
import { handleAdd, handleUpdate, handleRemove,handleExport } from '@/global/HandleOps';
import SysUserRoleColumns from './Columns';
import {DEFAULT_PAGE_SIZE} from '@/constants/constants';
import OBtnUpload from "@/components/OBtnUpload";


/**
 * 模块主页面
 */


const SysUserRoleTableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [viewModalVisible, handleViewModalVisible] = useState<boolean>(false);
  
  const [editFormValues, setEditFormValues] = useState({});
  const [viewFormValues, setViewFormValues] = useState({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [params, setParams] = useState({});
  const columns: ProColumns<SysUserRole>[] = [
    ...SysUserRoleColumns,
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width:200,
      render: (_, record) => (
        <>
          <a onClick={() => {
            setViewFormValues(record)
            handleViewModalVisible(true)
          }}>查看</a>
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
              record.id && selectedIds.push(record.id);
              handleRemove(selectedIds,actionRef,NamespaceEnum.SysUserRole);
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
      <ProTable<SysUserRole>
        // headerTitle="查询表格"
        locale={{ emptyText: (<div className="nodata-placeholder">
          <div className="nodata-img"></div>
              <span>暂无数据</span>
          </div>)
        }}
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
                               新建
          </Button>,

          <OBtnUpload url={constructImportUrl(NamespaceEnum.SysUserRole)}/>,
         selectedRows && selectedRows.length > 0 && (
          <Dropdown
            overlay={
              <Menu
                onClick={async e => {
                  let selectedIds = selectedRows.map(row => row.id || -1);
                  if (e.key === 'delete') {
                    await handleRemove(selectedIds,actionRef,NamespaceEnum.SysUserRole);
                    action.reload();
                  }
                  else if (e.key === 'export') {
                    await handleExport(NamespaceEnum.SysUserRole,selectedIds);
                  }
                  else if (e.key === 'exportAll') {
                    await handleExport(NamespaceEnum.SysUserRole);
                  }
                }}
                selectedKeys={[]}
              >
                <Menu.Item key="delete">批量删除</Menu.Item>
                                              </Menu>
            }
          >
            <Button>
                                    批量操作 <DownOutlined />
            </Button>
          </Dropdown>
        ),
        ]}
        params={params}
        request={params => {
                	                	        	                        	        	                        	                	        	                        	                	        	                        	        	                          return retrievePageList(params, NamespaceEnum.SysUserRole);
        }}
        columns={columns}
        tableAlertRender={false}
        rowSelection={{}}
        search={{ collapseRender: ()=>false, collapsed: false ,}}
        pagination={{
          pageSize: DEFAULT_PAGE_SIZE , 
          showQuickJumper:false,// {goButton:<span>前往 <input/>页</span>},
         // showSizeChanger: false,
          hideOnSinglePage:true ,
        }}
        onChange={(pagination, filters, sorter:any) => {
          let parameters = {filed:sorter.field,order:sorter.order,...filters}
          setParams(parameters)

        }}
      />
      
      <CreateForm
        onSubmit={async value => {
          setSubmitting(true)
          const success = await handleAdd(value,NamespaceEnum.SysUserRole);
          setSubmitting(false);
          if (success) {
            handleModalVisible(false);
            actionRef.current && actionRef.current.reload();
          }
        }}
        onCancel={() => handleModalVisible(false)}
        submitting = {submitting}
        modalVisible={createModalVisible}
      />
      <UpdateForm
        onSubmit={async value => {
          setSubmitting(true)
          const success = await handleUpdate(value,NamespaceEnum.SysUserRole);
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
        submitting = {submitting}
        values={editFormValues}
      />
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

export default SysUserRoleTableList;
