import React, { useState, useEffect } from 'react';
import E from 'wangeditor'
import r from '../../api/base/httpBaseConfig'

function App(props: any) {
    const { domName, contents, propsFrom } = props
    let editor: any = null

    useEffect(() => {
        // 注：class写法需要在componentDidMount 创建编辑器
        editor = new E(`#${domName}`)

        editor.config.uploadImgServer = r.baseUrl + r.port + '/api-service/tgy/file/upload'
        editor.config.uploadImgHeaders = {
            Authorization: `${localStorage.getItem('TOKEN')}`,
        }
        editor.config.uploadFileName = 'file'
        editor.config.uploadImgHooks = {
            customInsert: function (insertImgFn: any, result: any) {
                // result 即服务端返回的接口
                console.log('customInsert', result)
                // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
                insertImgFn(r.imgUrl + result.msg)
            }
        }
        editor.config.onchange = (newHtml: any) => {
            propsFrom.form.setFieldsValue({ 'content': newHtml })
        }
        editor.config.onblur = function (newHtml: any) {
            propsFrom.form.setFieldsValue({ 'content': newHtml })
        }

        /**一定要创建 */
        editor.create()
        console.log('contents' + contents)
        if (contents) {
            editor.txt.html(contents)
        }
        return () => {
            // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
            editor.txt.html('')
            editor.destroy()
        }
    }, [])

    return (
        <div>
            <div id={domName} ></div>
        </div>
    );
}

export default App;