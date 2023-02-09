import React, { useState, useEffect } from 'react';
import ImgCrop from 'antd-img-crop';

import { Button, message, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

import { UploadOutlined } from '@ant-design/icons';
import { getTokenFromStorage } from '@/global/CommonUtils';
import styles from './index.less';
import cardIcon1 from '@/assets/icon-card-1.png';
import httpBaseConfig from '../../api/base/httpBaseConfig';
import { formatImgUrl, formatImgUrlClear } from '@/utils/utils';

interface UploadProps {
  value?: any[] | string;
  cropHide?: boolean;
  aspect?: number;
  action?: string;
  listType?: string;
  maxCount?: number;
  multiple?: boolean;
  name?: string;
  onFinishUpload?: (val?: any) => void;
  onRemove?: (file: UploadFile) => void;
  showUploadList?: boolean;
  onPreview?: (file: UploadFile) => void;
  defaultFileList?: any[];
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
function getUrlName(url: string) {
  let i = url.lastIndexOf('/');
  return url.slice(i + 1);
}
const OImgUpload: React.FC<any> = (props: UploadProps) => {
  const [imageUrl, setImageUrl] = useState('');
  // console.log("props.url",props.url,props);
  useEffect(() => {
    // setImageUrl(props.imageUrl)
    // console.log("value",props.value);
  }, [props.value]);

  let defaultFileList: any[] = [];

  if (Array.isArray(props.value)) {
    defaultFileList = [];
    console.log('props.value []', props.value);
    for (let i = 0; i < props.value.length; i++) {
      defaultFileList.push({
        uid: Date.now() + '' + i,
        name: getUrlName(props.value[i]),
        status: 'done',
        url: formatImgUrl(props.value[i]),
      });
    }
  } else if (typeof props.value == 'string') {
    defaultFileList = [];

    console.log('props.value str', props.value, props);
    // props.value = formatImgUrl(props.value);
    defaultFileList.push({
      uid: Date.now() + '',
      name: getUrlName(props.value),
      status: 'done',
      url: formatImgUrl(props.value),
    });
  }

  const pigts = {
    name: props.name,
    multiple: props.multiple,
    action: props.action,
    maxCount: props.maxCount,
    listType: props.listType,
    // data: props.data,
    // headers:{userId:getUserIdFromStorage(),Authorization : "Bearer " + getTokenFromStorage()},
    headers: { Authorization: getTokenFromStorage() },
    showUploadList: props.showUploadList,
    onPreview: (file: UploadFile) => {
      props.onPreview && props.onPreview(file);
    },
    onRemove: (file: UploadFile) => {

      return true;
    },
    defaultFileList: defaultFileList,
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
        message.success('上传成功');
        // getBase64(info.file.originFileObj, imageUrl =>
        //   setImageUrl(imageUrl) /test/temp/575255326639566848.jpg
        // );
        if (typeof response.data == 'string') {
          response.data = JSON.parse(response.data);
        }
        console.log('upload file response', response);
        let imgurl = response.data.name;

        const newUrl = imageUrl + imgurl;

        setImageUrl(newUrl);
        props.onFinishUpload && props.onFinishUpload(imgurl);
      }
      if (status === 'removed') {
        console.log('onRemove', info);
        const findUrl = formatImgUrlClear(info?.file?.url || info?.response?.data?.name);
        const arr = imageUrl.split(',');

        arr.splice(
          arr.findIndex((item) => item === findUrl),
          1,
        );

        setImageUrl(arr.join(','));

        // setImageUrl("")
        props.onRemove && props.onRemove(info.file);
      }
      if (status == 'error') {
        message.error('上传失败');
      }
    },
  };

  const uploadButton = (
    <div className={props.isImgs ? '' : styles.antUploadText}>
      {props.isImgs ? (
        <div
          style={{
            width: 140,
            minHeight: 80,
            backgroundImage: 'url(' + cardIcon1 + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* {
              props.imgTypes == 'material' && <img src={`${httpBaseConfig.imgurl4}${props.isImgs}`} alt="" style={{ width: 140, }} />
            }

            {
              props.imgTypes == 'businessCard' && <img src={`${httpBaseConfig.imgurl3}${props.isImgs}`} alt="" style={{ width: 140, }} />
            } */}

          {!props.imgTypes && (
            <img src={`${httpBaseConfig.imgUrls}${props.isImgs}`} alt="" style={{ width: 140 }} />
          )}
        </div>
      ) : (
        <div>
          <img src={cardIcon1} />
          <div>上传图片</div>
        </div>
      )}
    </div>
  );

  let imgsrc = '';
  console.log('defaultFileList', pigts);


  return (
    <>
      {props.cropHide ? (
        <Upload {...pigts}>
          {imageUrl
            ? imageUrl.split(',').map((item) => {
              return <img src={`${item}`} alt="" style={{ width: 140 }} />;
            })
            : uploadButton}
        </Upload>
      ) : (
        // <ImgCrop aspect={props.aspect}>
        <Upload {...pigts}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        // </ImgCrop>
      )}
    </>
  );
};
{
  /* {imageUrl ? <img src={`${imageUrl}`} alt="" style={{ width: 140, }} /> : uploadButton} */
}

OImgUpload.defaultProps = {
  // url: 'http://123.56.128.228:9001/minio/upload',
  data: {
    bucketName: 'avatar',
  },
  listType: 'picture',
  maxCount: 1,
  multiple: false,
  name: 'file',
  showUploadList: true,
};
export default OImgUpload;
