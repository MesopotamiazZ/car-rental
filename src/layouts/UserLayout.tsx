import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, SelectLang, useIntl, ConnectProps, connect } from 'umi';
import React from 'react';
import { ConnectState } from '@/models/connect';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>后台管理平台</span>
              </Link>
            </div>
            <div className={styles.desc}>后台管理平台</div>
          </div>
          {children}
        </div>
        <DefaultFooter
          copyright={
            <>
              <span>{`${new Date().getFullYear()}  中汽测评`}</span>
              <span
                style={{ marginLeft: '10px' }}
                onClick={() => {
                  window.open('https://beian.miit.gov.cn/');
                }}
              >{`津ICP备2020010153号-5`}</span>
            </>
          }
          links={[
            {
              key: '',
              title: '',
              href: '',
            },
          ]}
        />
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
