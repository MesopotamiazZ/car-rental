import React, { useState, useRef, useEffect } from 'react';
import ImgCrop from 'antd-img-crop';
import { Button, message, Upload, } from 'antd'
import type { UploadFile } from 'antd/es/upload/interface';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { getUserIdFromStorage, getTokenFromStorage } from '@/global/CommonUtils';
import styles from './index.less';
import cardIcon1 from '@/assets/icon-card-1.png';
import httpBaseConfig from '../../api/base/httpBaseConfig';
import { formatImgUrl } from '@/utils/utils';

export function composeBaseUrl() {
  const baseUrl = httpBaseConfig.baseUrl;
  const port = httpBaseConfig.port;
  const imgUrls = httpBaseConfig.imgUrl;

  return `${baseUrl}${port}${imgUrls}`;
}

interface UploadProps {
  url?: string,
  data?: any,
  isImgs: any,
  aspect: number,
  cropHide: boolean,
  imageUrl:string|any,
  imgTypes: any,
  getImg?: (val: any) => void;
  finishUpload?:(val: any) => void;
  onRemove?:(val?:any)=>void;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const OImgUpload: React.FC<any> = (props: UploadProps) => {
  const [imageUrl, setImageUrl] = useState('');
  console.log("props.url",props.url,props);
  useEffect(()=>{
    setImageUrl(props.imageUrl)
  },[props.imageUrl])
  const pigts = {
    name: 'file',
    multiple: false,
    action: props.url,
    // data: props.data,
    // headers:{userId:getUserIdFromStorage(),Authorization : "Bearer " + getTokenFromStorage()},
    headers: { Authorization: getTokenFromStorage() },
    showUploadList: false,
    // beforeUpload(file: any) {
    //   // const isJpg = file.type === 'image/jpeg';
    //   const isJpg = file.type === 'image/jpeg' || file.type === 'image/png';

    //   if (!isJpg) {
    //     message.error('图片格式错误');
    //   }
    //   return isJpg;
    // },
    onChange(info: any) {
      console.log(info);

      const { status, response } = info.file;
      if (status == 'done' && response.code == 200) {
        message.success("上传成功")
        console.log("upload file response",response);
        // getBase64(info.file.originFileObj, imageUrl =>
        //   setImageUrl(imageUrl) /test/temp/575255326639566848.jpg
        // );
        let imgurl=formatImgUrl(response.data.name);
        setImageUrl(imgurl)
        props.finishUpload && props.finishUpload(response.data.name)
      }
      if (status === 'removed') {
        setImageUrl("")
        props.onRemove && props.onRemove();
      }
      if (status == 'error') {
        message.error("上传失败")
      }
    },
  };


  const uploadButton = (
    <div className={props.isImgs ? '' : styles.antUploadText}>
      {
        props.isImgs ?
          <div style={{ width: 140, minHeight: 80, backgroundImage: 'url(' + cardIcon1 + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            {/* {
              props.imgTypes == 'material' && <img src={`${httpBaseConfig.imgurl4}${props.isImgs}`} alt="" style={{ width: 140, }} />
            }

            {
              props.imgTypes == 'businessCard' && <img src={`${httpBaseConfig.imgurl3}${props.isImgs}`} alt="" style={{ width: 140, }} />
            } */}

            {
              !props.imgTypes && <img src={`${httpBaseConfig.imgUrls}${props.isImgs}`} alt="" style={{ width: 140, }} />
            }

          </div>
          :
          <div>
            <img src={cardIcon1} />
            <div>上传图片</div>
          </div>
      }
    </div>
  );

  let imgsrc = ''
  // if (props.imgTypes == 'material') {
  //   imgsrc = `${httpBaseConfig.imgurl4}${imageUrl}`
  // } else if (props.imgTypes == 'businessCard') {
  //   imgsrc = `${httpBaseConfig.imgurl3}${imageUrl}`
  // } else {
  //   imgsrc = `${httpBaseConfig.imgUrls}${imageUrl}`
  // }

  imgsrc = `${imageUrl}`
  console.log("imgsrc",imgsrc);
  return (
    <>
      {
        props.cropHide ? <Upload  {...pigts}>
          {imageUrl ? <img src={`${imgsrc}`} alt="" style={{ width: 140, }} /> : uploadButton}
        </Upload>
          :
          // <ImgCrop
            // aspect={props.aspect}>
            <Upload  {...pigts}>
              {imageUrl ? <img src={`${imgsrc}`} alt="" style={{ width: 140, }} /> : uploadButton}
            </Upload>
          // </ImgCrop>
      }
    </>
  );
}

OImgUpload.defaultProps = {
  url: 'http://123.56.128.228:9001/minio/upload',
  data: {
    bucketName: 'avatar'
  }
}
export default OImgUpload;
