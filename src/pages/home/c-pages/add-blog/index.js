import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, { memo,useEffect,useState } from 'react'
import { Button, Checkbox, Form, Input,Select,message } from 'antd';
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { uploadImage } from '../../../../service/upload'
import { AddBlogWrapper } from './style'
import { useCallback } from 'react';
import { addBlog } from '../../../../service/atricle';
import { useRef } from 'react';

const AddBlog = memo(() => {
  // editor 实例
  const [editor, setEditor] = useState(null)                   // JS 语法
  const formRef = useRef()

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
  const onTypeChange = useCallback((value)=>{
    formRef.current.setFieldsValue({ type: value });
  },[formRef])

  const handleSubmit = useCallback((values) => {
    console.log('表单提交',values)
    let form = {
        title:values.title,
        isPublic:values.isPublic ? 0 : 1,
        type:0,
        keywords:values.keywords,
        content:html
    }
    addBlog(form).then(res => {
        message.success('新增博客成功');
    })
  },[html])

  return (
    <AddBlogWrapper>
        <Form
            ref={formRef}
            name="basic"
            layout='inline'
            initialValues={{ remember: true }}
            autoComplete="off"
            size='large'
            onFinish={handleSubmit}
            >
            <Form.Item
                label="文章标题"
                name="title"
                style={{width:'100%',marginBottom:'20px'}}
                rules={[{ required: true, message: '文章标题不能为空!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="关键字"
                name="keywords"
                style={{width:'50%', marginBottom:'20px'}}
                rules={[{ required: true, message: '关键字不能为空!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="type" label="文章类型" rules={[{ required: true }]}>
                <Select
                    style={{ width: 240 }}
                    placeholder="请选择文章类型"
                    options={[
                        {
                        value: 1,
                        label: 'JavaScript',
                        },
                        {
                        value: 2,
                        label: 'CSS特效',
                        },
                        {
                        value: 3,
                        label: 'Vue',
                        },
                        {
                        value: 4,
                        label: 'React',
                        },
                        {
                        value: 5,
                        label: '数据可视化',
                        },
                    ]}
                    onChange={onTypeChange}
                    />
            </Form.Item>

            <Form.Item name="isPublic" valuePropName="checked">
                <Checkbox>是否公开</Checkbox>
            </Form.Item >

            <Form.Item  name="content" style={{width:'100%', marginBottom:'20px'}}>
                <div className='editor'>
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
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>
            {/* <div className='editor'>
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
            </div> */}
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
    </AddBlogWrapper>
  )
})

export default AddBlog