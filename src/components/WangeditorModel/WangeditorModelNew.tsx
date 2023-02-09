import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import React, { useState, useEffect } from 'react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { ImageElement, InsertFnType } from './data';

function MyEditor() {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>');

  //菜单配置
  const MENU_CONF = {
    insertImage: {
      onInsertedImage(imageNode: ImageElement | null) {
        // TS 语法
        // onInsertedImage(imageNode) {                    // JS 语法
        if (imageNode == null) return;

        const { src, alt, url, href } = imageNode;
        console.log('inserted image', src, alt, url, href);
      },
      checkImage: customCheckImageFn, // 也支持 async 函数
      parseImageSrc: customParseImageSrc, // 也支持 async 函数
    },
    editImage: {
      onUpdatedImage(imageNode: ImageElement | null) {
        // TS 语法
        // onUpdatedImage(imageNode) {                    // JS 语法
        if (imageNode == null) return;

        const { src, alt, url } = imageNode;
        console.log('updated image', src, alt, url);
      },
      checkImage: customCheckImageFn, // 也支持 async 函数
      parseImageSrc: customParseImageSrc, // 也支持 async 函数
    },
    uploadImage: {
      server: '/api/upload',
    },
    customInsert(res: any, insertFn: InsertFnType) {
      // TS 语法
      // customInsert(res, insertFn) {                  // JS 语法
      // res 即服务端的返回结果

      // 从 res 中找到 url alt href ，然后插图图片
      let url = '';
      let alt = '';
      let href = '';
      insertFn(url, alt, href);
    },
    // 自定义上传
    async customUpload(file: File, insertFn: InsertFnType) {
      // TS 语法
      // async customUpload(file, insertFn) {                   // JS 语法
      // file 即选中的文件
      // 自己实现上传，并得到图片 url alt href
      // 最后插入图片
      let url = '';
      let alt = '';
      let href = '';
      insertFn(url, alt, href);
    },
  };

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>');
    }, 1500);
  }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {              +// JS 语法

    placeholder: '请输入内容...',
    ...MENU_CONF,
  };

  // 自定义校验图片
  function customCheckImageFn(src: string, alt: string, url: string): boolean | undefined | string {
    // TS 语法
    // function customCheckImageFn(src, alt, url) {                                                    // JS 语法
    if (!src) {
      return;
    }
    if (src.indexOf('http') !== 0) {
      return '图片网址必须以 http/https 开头';
    }
    return true;

    // 返回值有三种选择：
    // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
    // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
    // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
  }

  // 转换图片链接
  function customParseImageSrc(src: string): string {
    // TS 语法
    // function customParseImageSrc(src) {               // JS 语法
    if (src.indexOf('http') !== 0) {
      return `http://${src}`;
    }
    return src;
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>{html}</div>
    </>
  );
}

export default MyEditor;
