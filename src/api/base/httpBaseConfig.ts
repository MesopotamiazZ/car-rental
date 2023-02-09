import { IS_PRODUCTION } from '../../constants/constants';

const url = `${window.location.protocol}//${window.location.hostname}`

const httpBaseConfig = {
  // baseUrl: !IS_PRODUCTION ? 'http://172.17.68.190:' : 'http://172.17.68.190:',
  // baseUrl: !IS_PRODUCTION ? 'http://iw267j.natappfree.cc' : 'http://iw267j.natappfree.cc',
  // baseUrl: !IS_PRODUCTION ? 'http://123.150.11.50:' : 'http://123.150.11.50:',//外网
  // baseUrl: !IS_PRODUCTION ? 'http://g4r4nj.natappfree.cc' : 'http://tnxb74.natappfree.cc',//打包


  baseUrl: !IS_PRODUCTION ? `${'http://t2bqnv.natappfree.cc'}` : `${url}`, //线上测试
  // baseUrl: !IS_PRODUCTION ? `${'https://mgmt.c-ncap.org.cn'}` : `${url}`, //生产

  port: !IS_PRODUCTION ? '/carrental-admin' : '/carrental-admin',//生产
  // port: !IS_PRODUCTION ? '8080' : '8080',//本地 
  // port: !IS_PRODUCTION ? '' : '',//本地

  // baseUrl:!IS_PRODUCTION? 'http://localhost:':'http://ip:',
  // port: !IS_PRODUCTION?'81':'9001',   
  prefix: !IS_PRODUCTION ? '/' : '/',
  minioUrl: 'http://ip:9000',
  // imgUrls: 'http://vjmbs6.natappfree.cc/taxi-admin/map_src/',
  imgUrls: 'https://cncap.obs.cn-north-4.myhuaweicloud.com',

  // imgBaseUrl:baseUrl,
  // imgPort:port,
  imgPrefix: !IS_PRODUCTION ? '/assets/' : '/img/',
  microService: '',
  //  http://onlinetaxi.tjgjyt.com:8301/img/
  // downloadUrl: "http://vjmbs6.natappfree.cc/taxi-admin/download/",
  downloadUrl: 'http://onlinetaxi.tjgjyt.com:8301/img/',
  templateUrl: 'http://onlinetaxi.tjgjyt.com:8301/img/template/'
}

export default httpBaseConfig
