import React, { useEffect, useState, useRef } from 'react';
import { Divider, Button, Space, Tag } from 'antd';
import type { SysUser } from './data';
import NamespaceEnum from '@/constants/NamespaceEnum';
import { history } from 'umi';
import { retrievePageList } from '@/global/CommonService';
import { PlusOutlined } from '@ant-design/icons';
import { DeleteOutlined, EditOutlined, EyeOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';
import { DEFAULT_PAGE_SIZE } from '@/constants/constants'

export type FormValueType = Partial<SysUser>

export type ViewFormProps = {
  handleModalVisible: any,
  setViewFormValues: any,
  setEditFormValues: any,
  handleUpdateModalVisible: any,
  handleViewModalVisible: any,
  handleRemove: any,
}

const ViewMicroshopForm: React.FC<ViewFormProps> = props => {
  const {
    handleModalVisible,
    setViewFormValues,
    setEditFormValues,
    handleUpdateModalVisible,
    handleViewModalVisible,
    handleRemove
  } = props;
  const [clientUserIdEnum, setClientUserIdEnum] = useState({});
  const [current, setCurrent] = useState(1)
  const [total, setTotal] = useState(2)
  const [loadMores, setlLoadMores] = useState(true)
  const [dataList, setDataList] = useState<any>([])
  useEffect(() => {
    // retrievePageList({ current: 1, pageSize: 1000 }, NamespaceEnum.ClientUser).then((res: any) => {
    //   const data = {};
    //   res?.data?.map((item: ClientUser) => {
    //     data[item.id] = { text: item.userName, }
    //   })
    //   setClientUserIdEnum(data);
    // });
    // retrievePageList({ current: 1, pageSize: 1000 }, NamespaceEnum.City).then((res: any) => {
    //   const data = {};
    //   res?.data?.map((item: City) => {
    //     data[item.id] = { text: item.name, }
    //   })
    //   setCityIdEnum(data);
    // });
    getList()
  }, [])
  const actionRef = useRef<any>();
  const getList = async () => {
    const requestParams = { current, }
    let res = await retrievePageList(requestParams, NamespaceEnum.Schedule);
    setDataList([...dataList, ...res.data])
    current === 1 && setTotal(Math.ceil(res.total / DEFAULT_PAGE_SIZE))// 计算页数  判断防止多次执行
    current === total && setlLoadMores(false) //防止页数相等按钮不置灰
  }
  useEffect(() => {
    current <= total && getList()
  }, [current])
  const loadMore = (
    <div className='showMore_btn'>
      <Button disabled={!loadMores} onClick={() => setCurrent(current + 1)} >{loadMores ? '加载更多' : '没有更多了'}</Button>
    </div>
  )
  return (

    <ProList<any>
      actionRef={actionRef}
      footer={loadMore}
      toolBarRender={(action, { selectedRows }) => [
        <Button icon={<PlusOutlined />} type="primary" onClick={() => handleModalVisible(true)}>
          新建
        </Button>,
      ]}
      search={{
        filterType: 'light',
      }}
      // pagination={{
      //   defaultPageSize: 8,
      //   showSizeChanger: false,
      // }}
      grid={{ gutter: 16, column: 1 }}
      dataSource={dataList}
      // request={(requestParams) => {
      //   return retrievePageList(requestParams, NamespaceEnum.Microshop);
      // }}
      metas={{
        title: {
          dataIndex: 'name',
          title: '名称',
        },
        // 以下需要具体页面具体分析看哪些展示在手机比较合适
        /* subTitle: {
          search: false,
          dataIndex: 'cityId',
          valueEnum: cityIdEnum,
          render: (text) => (
            <Tag color="#108ee9" >{text}</Tag>
          )
        },
        content: {
          search: false,
          dataIndex: 'clientUserId',
          valueEnum: clientUserIdEnum,
          render: (text, rows) => {
            return <>
              负责人:{text}<br />
         联系手机:{rows?.telephone1}
            </>
          }
        },
        */
        actions: {
          render: (text, item) => [
            [<Space split={<Divider type="vertical" />} size={[0, 8]} wrap>
              <a title="查看" onClick={() => {
                setViewFormValues(item)
                handleViewModalVisible(true)
              }}><EyeOutlined /></a>
              <a title="编辑" onClick={() => {
                setEditFormValues(item);
                handleUpdateModalVisible(true);
              }}
              ><EditOutlined /></a>
              <a title="更多" onClick={() => {
                history.push({
                  pathname: '/lot/michroshopItem',
                  query: {
                    ids: item?.id,
                  },
                });
              }}><MenuUnfoldOutlined /></a>
              <a title="删除" onClick={() => handleRemove([item.id], actionRef)}><DeleteOutlined /></a>
            </Space>]
          ],
        },
      }}
    />
  );
};

export default ViewMicroshopForm;
