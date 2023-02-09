/***
 * 
 *统一定义接口，有利于维护 
 * 
 **/
/*
* NOTE:Please use ip address instead of localhost. otherwise its not working in Android
*/
import {IS_PRODUCTION}  from '../../constants/constants';
const URL ={
    signUp:!IS_PRODUCTION? '/movies.json':'/index.php',
    homePage:!IS_PRODUCTION? '/homepage.json':'/index.php',
}



export default URL