import Requests from 'umi-request';
import AxiosRequest from '../../../api/base/request';
import HttpBaseConfig from '../../../api/base/httpBaseConfig';
// 常用的API的调用可以参照 CommonService里的方法，如果不满足的条件的可以再这儿额外增加

export async function FakeChartData() {
  return Requests('/api/fake_chart_data');
}

// token验证
// export const validate = (params: any) => {
//   return axiosRequest.post('/validate', params);
// }
export  async function validate  (){
  return AxiosRequest.get(HttpBaseConfig.baseUrl + HttpBaseConfig.port +'/api/v1/client/validate', {},)
};