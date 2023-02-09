// import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import { Dispatch, connect, history } from 'umi';
import styles from '../login/style.less';
import { StateType } from '../login/model';



const Login: React.FC<any> = (props) => {
  const [type, setType] = useState<string>('account');
 
  return (
    <div>
      
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
