import React, { } from 'react';
import { Button, message, Upload, notification } from 'antd'
import { PlusOutlined, } from '@ant-design/icons';
import { getUserIdFromStorage, getTokenFromStorage } from '@/global/CommonUtils';
interface UploadProps {
  url?: string,
  data?: any,
  text?: any,
  types?: any,
  actionRef?: any
}
const OBtnUpload: React.FC<any> = (props: UploadProps) => {
  console.log(props);

  const pigts = {
    name: 'file',
    multiple: true,
    action: props.url,
    data: {
      type: props.types
    },
    // headers:{userId:getUserIdFromStorage(),Authorization : "Bearer " + getTokenFromStorage()},
    headers: { Authorization: localStorage.getItem("TOKEN") },
    onChange(info: any) {
      const { status, response } = info.file;
      // console.log(status)
      // console.log(response)
      if (status == 'done') {

        message.success("导入成功")
        notification.success({
          message: response.msg,
        })
        props.actionRef.current && props.actionRef.current.reload();
      }

      if (status == 'error') {
        message.error("上传失败")
      }



    },
  };
  return (
    <>
      <Upload   {...pigts} showUploadList={false} >
        <Button className="left-side-button" icon={<PlusOutlined />} type="primary"  >
          {props.text}
        </Button>
      </Upload>
    </>
  );
}

OBtnUpload.defaultProps = {
  text: '批量导入',
  url: 'http://123.56.128.228:9001/minio/upload',
  data: {},
  types: 1
}
export default OBtnUpload;
