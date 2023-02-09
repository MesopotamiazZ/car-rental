// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  history: {
    type: "hash"
  },// 默认是 browser
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          // Routes: ['src/pages/Authorized'],
          // authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/home',
            },
            // {
            //   path: '/dashboard',
            //   name: '工作台',
            //   icon: 'dashboard',
            //   routes: [
            //     {
            //       name: 'analysis',
            //       icon: 'smile',
            //       path: '/dashboard/analysis',
            //       component: './dashboard/analysis',
            //     },
            //   ],
            // },
            {
              name: 'result',
              icon: 'CheckCircleOutlined',
              hideInMenu: "true",
              path: '/result',
              routes: [
                {
                  name: 'success',
                  icon: 'smile',
                  path: '/result/success',
                  component: './result/success',
                },
                {
                  name: 'fail',
                  icon: 'smile',
                  path: '/result/fail',
                  component: './result/fail',
                },
              ],
            },
            {
              name: 'exception',
              icon: 'warning',
              path: '/exception',
              hideInMenu: "true",
              routes: [
                {
                  name: '403',
                  icon: 'smile',
                  path: '/exception/403',
                  component: './exception/403',
                },
                {
                  name: '404',
                  icon: 'smile',
                  path: '/exception/404',
                  component: './exception/404',
                },
                {
                  name: '500',
                  icon: 'smile',
                  path: '/exception/500',
                  component: './exception/500',
                },
              ],
            },



            // 平台管理

            {
              path: '/sys',
              name: '系统管理',
              icon: 'setting',
              routes: [

                {
                  name: '系统用户',
                  icon: 'smile',
                  path: '/sys/sysUser',
                  component: './system/sysUser',
                },


                {
                  name: '菜单管理',
                  icon: 'smile',
                  path: '/sys/menu',
                  component: './system/menu',
                },
                {
                  name: '角色管理',
                  icon: 'smile',
                  path: '/sys/role',
                  component: './system/role',
                },
                // {
                //   name: '系统用户Token',
                //   icon: 'smile',
                //   path: '/sys/userToken',
                //   component: './system/userToken',
                // },
                // {
                //   name: '验证码',
                //   icon: 'smile',
                //   path: '/sys/captcha',
                //   component: './system/captcha',
                // },
                // {
                //   name: '文件上传',
                //   icon: 'smile',
                //   path: '/sys/oss',
                //   component: './system/oss',
                // },
              ]
            },
            {
              path: '/car',
              name: '车辆管理',
              icon: 'user',
              routes: [
                {
                  name: '车辆基础费用',
                  icon: 'smile',
                  path: '/car/basicFee',
                  component: './carBasicFee',
                },
                {
                  name: '菜单',
                  icon: 'smile',
                  path: '/car/sysMenu',
                  component: './sysMenu',
                },
                {
                  name: '角色',
                  icon: 'smile',
                  path: '/car/sysRole',
                  component: './sysRole',
                },
                {
                  name: '角色菜单',
                  icon: 'smile',
                  path: '/car/sysRoleMenu',
                  component: './sysRoleMenu',
                },
                {
                  name: '用户',
                  icon: 'smile',
                  path: '/car/sysUser',
                  component: './sysUser',
                },
                {
                  name: '用户角色',
                  icon: 'smile',
                  path: '/car/sysUserRole',
                  component: './sysUserRole',
                },
                {
                  name: '订单',
                  icon: 'smile',
                  path: '/car/trade',
                  component: './trade',
                },
                {
                  name: '订单里程数据',
                  icon: 'smile',
                  path: '/car/record',
                  component: './tradeMileageRecord',
                },
              ]
            }
            // {
            //   path: '/car',
            //   name: '车辆管理',
            //   icon: 'user',
            //   routes: [
            //     {
            //       name: '车型列表',
            //       icon: 'smile',
            //       path: '/car/basicCarInfo',
            //       component: './car/basicCarInfo',
            //     },
            //     {
            //       name: '汽车品牌',
            //       icon: 'smile',
            //       path: '/car/brandCar',
            //       component: './car/brandCar',
            //     },
            //     {
            //       name: '制造商',
            //       icon: 'smile',
            //       path: '/car/manufacturerCar',
            //       component: './car/manufacturerCar',
            //     },
            //     {
            //       name: '测评成绩',
            //       icon: 'smile',
            //       path: '/car/evaluateCarData',
            //       component: './car/evaluateCarData',
            //     },
            //     {
            //       name: '车系管理',
            //       icon: 'smile',
            //       path: '/car/seriesCarHome',
            //       component: './car/seriesCarHome',
            //     },
            //     {
            //       name: '车辆安全',
            //       icon: 'smile',
            //       path: '/car/carSafetySystem',
            //       component: './car/carSafetySystem',
            //     },
            //   ]
            // },
            // {
            //   path: '/cms',
            //   name: 'CMS管理',
            //   icon: 'user',
            //   routes: [
            //     {
            //       name: 'CMS内容',
            //       icon: 'smile',
            //       path: '/cms/columnnContent',
            //       component: './cms/columnnContent',
            //     },
            //     {
            //       name: 'CMS栏目',
            //       icon: 'smile',
            //       path: '/cms/columnnSummary',
            //       component: './cms/columnnSummary',
            //     },
            //     {
            //       name: '技术资料',
            //       icon: 'smile',
            //       path: '/cms/dataInfo',
            //       component: './cms/dataInfo',
            //     },
            //     {
            //       name: '资料分类',
            //       icon: 'smile',
            //       path: '/cms/dataCategory',
            //       component: './cms/dataCategory',
            //     },
            //     {
            //       name: '测评通知',
            //       icon: 'smile',
            //       path: '/cms/notice',
            //       component: './cms/notice',
            //     },
            //     {
            //       name: '网站配置',
            //       icon: 'smile',
            //       path: '/cms/siteConfig',
            //       component: './cms/siteConfig',
            //     },
            //   ]
            // },

            // // {
            // //   path: '/daily',
            // //   name: '日常管理',
            // //   icon: 'wallet',
            // //   routes: [
            // //     // {
            // //     //   name: '常用路线',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/commonPath',
            // //     //   component: './daily/commonPath',
            // //     // },
            // //     // {
            // //     //   name: '常用地址',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/commonPosition',
            // //     //   component: './daily/commonPosition',
            // //     // },
            // //     // {
            // //     //   name: '司机订单反馈',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/driverOrderComplain',
            // //     //   component: './daily/driverOrderComplain',
            // //     // },
            // //     // {
            // //     //   name: '司机客服联系记录',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/driverServiceRecord  ',
            // //     //   component: './daily/driverServiceRecord',
            // //     // },
            // //     // {
            // //     //   name: '司机钱包信息',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/driverWalletInfo',
            // //     //   component: './daily/driverWalletInfo',
            // //     // },
            // //     // {
            // //     //   name: '订单聊天',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/orderContact  ',
            // //     //   component: './daily/orderContact',
            // //     // },
            // //     // {
            // //     //   name: '支付配置',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/payApp',
            // //     //   component: './daily/payApp',
            // //     // },
            // //     // {
            // //     //   name: '紧急联系人',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/urgencyContact',
            // //     //   component: './daily/urgencyContact',
            // //     // },
            // //     // {
            // //     //   name: '乘客客服联系记录',
            // //     //   icon: 'smile',
            // //     //   path: '/daily/userServiceRecord',
            // //     //   component: './daily/userServiceRecord',
            // //     // },
            // //   ]
            // // },

            // {
            //   path: '/statisticalManagement',
            //   name: '规程管理',
            //   icon: 'user',
            //   routes: [
            //     {
            //       name: '访客浏览量',
            //       icon: 'smile',
            //       path: '/statisticalManagement/visitorViews',
            //       component: './statisticalManagement/visitorViews',
            //     },
            //   ]
            // },


            // {
            //   path: '/',
            //   name: '规程管理',
            //   icon: 'user',
            //   routes: [
            //     {
            //       name: '规程管理',
            //       icon: 'smile',
            //       path: '/rule',
            //       component: './rule',
            //     },
            //   ]
            // },
            //  {
            //   path: '/',
            //   name: '规程管理',
            //   icon: 'user',
            //   routes: [
            //     {
            //       name: '规程管理',
            //       icon: 'smile',
            //       path: '/rule',
            //       component: './rule',
            //     },
            //   ]
            // },

            // 运营平台


          ],
        },
        {
          component: '404',
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
