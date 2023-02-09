import httpBaseConfig from '@/api/base/httpBaseConfig';
import axiosRequest from '@/api/base/request';

// 菜单栏
export async function getMenuByUser(params: any) {
  return axiosRequest.post('/menu/byUser/' + params, null);
}
// 菜单栏2
export async function getMenuByUser2(params: any) {
  return axiosRequest.post('/sysMenu/list/tree', null);
}
//  POST /car/sysMenu/list/tree
// 部门列表
export async function getDeptNameList(params: any) {
  return axiosRequest.post(`dept/list/page`, params);
}
