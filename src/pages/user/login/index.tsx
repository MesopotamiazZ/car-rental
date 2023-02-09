// import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, Col, Form, Input, message, Row, Image } from 'antd';
import React, { useState } from 'react';
import { Dispatch, connect, history } from 'umi';
import { StateType } from './model';
import styles from './style.less';
import { LoginParamsType, login, getCaptchaImg } from './service';
import LoginFrom from './components/Login';
import { getMenuByUser } from '@/services/menu'
import { PictureOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import httpBaseConfig from '@/api/base/httpBaseConfig';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = LoginFrom;
interface LoginProps {
  dispatch: Dispatch;
  userAndlogin: StateType;
  submitting?: boolean;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC<LoginProps> = (props) => {
  const { userAndlogin = {}, submitting } = props;
  const { status, type: loginType } = userAndlogin;
  // const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');
  const [uuid, setUuid] = useState<string>(getUuid(16, 16));

  //获取uuid
  function getUuid(len: number, radix: number) {
    //len 几位， radix 多少进制
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  }

  const handleSubmit = (values: any) => {
    // const { dispatch } = props;
    // dispatch({
    //   type: 'userAndlogin/login',
    //   payload: {
    //     ...values,
    //     type,
    //   },
    // });

    login({
      ...values,
      uuid,
    }).then(res => {
      // console.log(res)
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
      ]

      if (res.code == 200) {
        console.log("res",res);
        message.success('登录成功！');
        localStorage.setItem('TOKEN', res?.data.token);
        history.push('/')
        localStorage.setItem('USER_ID', res?.data.userDetail.user?.userId);
        localStorage.setItem('userDetail', JSON.stringify(res?.data.userDetail));

        // getMenuByUser(res.data.userDetail.id).then((res: any) => {
        //   let arrs: any = [...oldMenu, ...res]

        //   localStorage.setItem('newMenus', JSON.stringify(arrs));
        //   history.push('/')
        // }).catch(() => { history.push('/') })

      } else{
        setUuid(getUuid(16, 16))
      }

    })
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab="账户密码登录">
          {status === 'error' && loginType === 'account' && !submitting && (
            <LoginMessage content="账户或密码错误" />
          )}

          <UserName
            name="username"
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: '请输入验证码！' }]}
          >
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Col span={15}>
                <Input
                  size="large"
                  // style={{ padding: '6.5px 11px' }}
                  prefix={<PictureOutlined style={{ fontSize: '14px', color: '#1890ff' }} />}
                  type="text"
                  placeholder="请输入验证码"
                />
              </Col>
              <Col>
                <div style={{ border: '1px solid #d9d9d9', cursor: 'pointer' }} onClick={() => setUuid(getUuid(16, 16))}>
                  <Image
                    preview={false}
                    width={120}
                    height={38}
                    src={`${httpBaseConfig.baseUrl}${httpBaseConfig.port}/login/captcha.jpg?uuid=${uuid}`}
                  />
                </div>
              </Col>
            </Row>
          </Form.Item>
        </Tab>
        {/* <Tab key="mobile" tab="手机号登录">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="验证码错误" />
          )}
          <Mobile
            name="mobile"
            placeholder="手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <Captcha
            name="captcha"
            placeholder="验证码"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="秒"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
          />
        </Tab> */}
        {/* <div>
          <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
            自动登录
          </Checkbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div> */}
        <Submit loading={submitting}>登录</Submit>
        {/* <div className={styles.other}>
          其他登录方式
          <AlipayCircleOutlined className={styles.icon} />
          <TaobaoCircleOutlined className={styles.icon} />
          <WeiboCircleOutlined className={styles.icon} />
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div> */}
      </LoginFrom>
    </div>
  );
};

export default connect(
  ({
    userAndlogin,
    loading,
  }: {
    userAndlogin: StateType;
    loading: {
      effects: {
        [key: string]: boolean;
      };
    };
  }) => ({
    userAndlogin,
    submitting: loading.effects['userAndlogin/login'],
  }),
)(Login);
