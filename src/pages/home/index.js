import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, { memo,useEffect,useState } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { uploadImage } from '../..//service/upload'

const Home = memo(() => {
  // editor 实例
  const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>')

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
      setTimeout(() => {
          setHtml('<p>hello world</p>')
      }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig = {                         // JS 语法
      placeholder: '请输入内容...',
      MENU_CONF:{}
  }
  editorConfig.MENU_CONF['uploadImage'] = {
    server: '/api/upload',
    async customUpload(file, insertFn) {                   // JS 语法
        // file 即选中的文件
        // 自己实现上传，并得到图片 url alt href
        // 最后插入图片
        uploadImage(file).then(res => {
            console.log('上传图片成功')
            let url ='http://localhost:5002/' +res.data.filename
            insertFn(url, '', '')
        })
    }
 }

  // 及时销毁 editor ，重要！
  useEffect(() => {
      return () => {
          if (editor == null) return
          editor.destroy()
          setEditor(null)
      }
  }, [editor])
  return (
    <div>
      <div style={{ border: '1px solid #ccc', zIndex: 100}}>
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
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
    </div>
  )
})

export default Home