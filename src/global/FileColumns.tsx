import React from "react";
import styles from '@/global/styles.less';
import eye from '@/assets/imgs/eye.png';
import download from '@/assets/imgs/download2.png';

const FileColumns = [
    {
      title: '文件',
      dataIndex: 'fileName',
      render: (text:string) => <span className={styles.fileText}>{text}</span>,
    },
    {
      title: '上传时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (record:any) => {
        // console.log(record)
        return (
         <div>
          <span className={styles.actionBtn} onClick={() => {
            const w:any=window.open('about:blank');
            const utl=`${record.fileUrl}`
            w.location.href=`/new/preview?name=${utl}`
          }}><img src={eye} className={styles.actionImg}/>预览</span>
          <span className={styles.actionBtn} onClick={() => {
            window.location.href=`http://123.56.128.228:9000/${record.fileUrl}`
          }}><img src={download} className={styles.actionImg}/>下载</span>
        </div> 
        )
      },
    },
  ];

  export default FileColumns;