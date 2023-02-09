/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
  SettingDrawer,
} from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { Link, useIntl, connect, Dispatch, history } from 'umi';
// import { GithubOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { getAuthorityFromRouter } from '@/utils/utils';
import logo from '../assets/logo.svg';
import { IS_IGNORE_LOGIN } from '../constants/constants';
import { getMenuByUser, getMenuByUser2 } from '@/services/menu';
import styles from './UserLayout.less';
// import './UserLayout.less';

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={<>
    <span>{`${new Date().getFullYear()}  中汽测评`}</span>
    <span style={{ marginLeft:'10px' }} onClick={()=>{window.open('https://beian.miit.gov.cn/')}} >{`津ICP备2020010153号-5`}</span>
    </>}
    links={[
      // {
      //   key: '津ICP备2020010153号-5',
      //   title: '津ICP备2020010153号-5',
      //   href: 'https://beian.miit.gov.cn/',
      //   // blankTarget: true,
      // },
      // {
      //   key: 'github',
      //   title: 'github',
      //   href: 'https://github.com/ant-design/ant-design-pro',
      //   blankTarget: true,
      // },
      // {
      //   key: 'Ant Design',
      //   title: 'Ant Design',
      //   href: 'https://ant.design',
      //   blankTarget: true,
      // },
    ]}
  />
);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  /**
   * constructor
   */
  console.log('propspropspropspropsprops', props);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  /**
   * init variables
   */
  let [menuData, setMenuData] = useState<any>([]);
  let [allMenuData, setAllMenuData] = useState<any>([]);
  let oldMenu = [
    {
      path: '/',
      redirect: '/dashboard/analysis',
    },
    {
      path: '/dashboard',
      name: '工作台',
      children: [
        {
          name: '首页',
          icon: 'smile',
          path: '/dashboard/analysis',
          component: './dashboard/analysis',
        },
      ],
    },
  ];

  const [pageTypes, setPageTypes] = useState<any>([
    { page: '1', name: '平台管理' },
    { page: '2', name: '运营管理' },
    { page: '3', name: '客服系统' },
  ]);
  const [pageType, setPageType] = useState({ page: '1', name: '平台管理' });

  useEffect(() => {
    if (!IS_IGNORE_LOGIN) {
      getMenuByUser2(localStorage.getItem('USER_ID'))
        .then((res: any) => {
          const newData = treeDataFormat(res?.menuList || []);

          console.log('newData', newData);

          setAllMenuData(newData);
          changeTabMenu(newData, pageType);
          // let arrs: any = [...oldMenu, ...newData]
          // localStorage.setItem('newMenus', JSON.stringify(arrs));
        })
        .catch(() => {});
    }
  }, []);

  function changeTabMenu(allMenuData: any, pageType: any) {
    // let menus = allMenuData.find((item: any, index: any) => item.name == pageType.name)

    setMenuData([...(allMenuData || [])]);
  }

  function treeDataFormat(data: any[]) {
    const newData = data.map((item) => {
      item.path = '' + (item.url || item.name);
      if (item.children) {
        item.children = treeDataFormat(item.children || []);
      }
      return item;
    });
    return newData;
  }

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  const { formatMessage } = useIntl();

  return (
    <>
      <ProLayout
        logo={logo}
        // formatMessage={formatMessage}
        onCollapse={handleMenuCollapse}
        onMenuHeaderClick={() => history.push('/')}
        //死菜单
        // menuDataRender={(menuData) => {
        //   console.log(menuData)
        //   return menuData
        // }}

        //活菜单
        menuDataRender={() => menuData}
        // menuDataRender={() => {
        //   let newMenus: any = localStorage.getItem('newMenus')
        //   return JSON.parse(newMenus)
        // }}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }

          // console.log('menuItemProps', menuItemProps)
          // console.log('defaultDom', defaultDom)

          return <Link to={menuItemProps.path}>{menuItemProps.name}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({
              id: 'menu.home',
            }),
          },
          ...routers,
        ]}
        // itemRender={(route, params, routes, paths) => {
        //   const first = routes.indexOf(route) === 0;
        //   return first ? (
        //     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        //   ) : (
        //     <span>{route.breadcrumbName}</span>
        //   );
        // }}
        layout={'mix'}
        footerRender={() => defaultFooterDom}
        // menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        {...props}
        {...settings}
      >
        <Authorized authority={authorized!.authority} noMatch={noMatch}>
          {children}
        </Authorized>
      </ProLayout>
      {/* <SettingDrawer
        settings={settings}
        onSettingChange={(config) =>
          dispatch({
            type: 'settings/changeSetting',
            payload: config,
          }) 
        }
      /> */}
    </>
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
