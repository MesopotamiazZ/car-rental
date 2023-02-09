import moment from "moment";
import { DEFAULT_DATE_FORMAT, DEFAULT_DATE_TIME_FORMAT } from "@/constants/constants";

export  function DateTimeToString(fields:any) {
    let deepCopiedFields ={...fields};
    let dateFromat:string= DEFAULT_DATE_FORMAT;
    if (fields.timestamps) dateFromat = DEFAULT_DATE_TIME_FORMAT;
    for (let key in deepCopiedFields){
        //数据库设计时时间字段都规定了必须以Time结尾
        if(key.endsWith("Time")){
          deepCopiedFields[key] = moment(deepCopiedFields[key]).format(dateFromat);
        }
      }
    return deepCopiedFields;
}

export  function StringToDateTime(fields:any) {
    let deepCopiedFields ={...fields};
    for (let key in fields){
        //数据库设计时时间字段都规定了必须以Time结尾
        if(key.endsWith("Time") && deepCopiedFields[key]){
          deepCopiedFields[key] = moment(deepCopiedFields[key]);
        }
      }
      return deepCopiedFields;
}


export  function displayFormattedDate(dateTime:any) {
  return moment(dateTime).format(DEFAULT_DATE_FORMAT)
}


export  function removeTFromDateTime(dateTime:string) {
  return dateTime?dateTime.replace("T"," "):"-"
}