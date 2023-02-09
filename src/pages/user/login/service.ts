import request from 'umi-request';
import httpBaseConfig from '../../../api/base/httpBaseConfig';
import axiosRequest from '@/api/base/request';
export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}


export async function login(params: LoginParamsType) {
  return axiosRequest.post(httpBaseConfig.baseUrl + httpBaseConfig.port + '/login/login', {
    ...params,
  });
}

export async function validate(params: LoginParamsType) {
  return axiosRequest.post(httpBaseConfig.baseUrl + httpBaseConfig.port + '/api/v1/client/validate', {
    ...params,
  });
}

export async function logout() {
  return axiosRequest.get(httpBaseConfig.baseUrl + httpBaseConfig.port + '/taxi-admin/sys/logout', {
  });
}


export async function resetPassword(parames: any) {
  return axiosRequest.post(httpBaseConfig.baseUrl + httpBaseConfig.port + '/login/adminResetPwd',
    parames,
  );
};
