import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import axios from 'axios';
import { getTokenFromStorage } from '@/global/CommonUtils';
import httpBaseConfig from '../../api/base/httpBaseConfig';

const OEditor: React.FC<any> = (props) => {
  const [editor, setEditor] = useState(BraftEditor.createEditorState(props.value));
  const controls = [
    {
      key: 'bold',
      text: <b>加粗</b>,
    },
    'italic',
    'underline',
    'separator',
    'separator',
    'media',
  ];

  let myUploadFn = (param: any) => {
    let data = new FormData();
    data.append('file', param.file);
    // axios.post(httpBaseConfig.baseUrl + httpBaseConfig.port + httpBaseConfig.prefix + 'file/upload', data, { headers: { token: getTokenFromStorage() } }).then((res: any) => {
    axios
      .post(httpBaseConfig.baseUrl + httpBaseConfig.port + '/file/upload', data, {
        headers: { Authorization: getTokenFromStorage() },
      })
      .then((res: any) => {
        console.log('imgimgimg', httpBaseConfig.imgUrls + res.data.data.name);
        param.success({
          url: httpBaseConfig.imgUrls + res.data.data.name,
          meta: {
            id: 'xxx',
            title: res.data.data.originalName,
          },
        });
      });
  };

  return (
    <div>
      <BraftEditor
        controls={
          props.simple
            ? controls
            : [
                'undo',
                'redo',
                'separator',
                'font-size',
                'line-height',
                'letter-spacing',
                'separator',
                'text-color',
                'bold',
                'italic',
                'underline',
                'strike-through',
                'separator',
                'superscript',
                'subscript',
                'remove-styles',
                'emoji',
                'separator',
                'text-indent',
                'text-align',
                'separator',
                'headings',
                'list-ul',
                'list-ol',
                'blockquote',
                'code',
                'separator',
                'link',
                'separator',
                'hr',
                'separator',
                'media',
                'separator',
                'clear',
              ]
        }
        contentStyle={{
          height: 210,
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)',
          ...(props?.contentStyle || {}),
        }}
        value={editor}
        imageControls={[
          'link',
          'float-left', // 设置图片左浮动
          'float-right', // 设置图片右浮动
          'align-left', // 设置图片居左
          'align-center', // 设置图片居中
          'align-right', // 设置图片居右
          'remove', // 删除图片
        ]}
        media={{ uploadFn: myUploadFn }}
        onChange={(data) => {
          props.ContetnChage(data.toHTML());
          setEditor(data);
        }}
      />
    </div>
  );
};
OEditor.defaultProps = {
  value: '',
  false: true,
};
export default OEditor;
