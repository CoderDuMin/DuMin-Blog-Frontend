import React, { memo, useEffect ,useState} from 'react'
import { queryBlogDetail } from '../../../../service/atricle'
import { BlogDetailWrapper } from './style'
import { Editor, } from '@wangeditor/editor-for-react'

export default memo(function BlogDetail(props) {
  const id = props?.match?.params?.id || undefined
  // editor 实例
  const [editor, setEditor] = useState(null)    
  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>') 
  // 编辑器配置
  const editorConfig = {             
    readOnly: true
  }
  console.log(editor);
  const [articleInfo, setArticleInfo] = useState({})
  useEffect(()=>{
    queryBlogDetail(id).then(res => {
      console.log('获取博客详情',res.data)
      setArticleInfo(res.data)
      setHtml(res.data.content)
    })
  },[id])
  return (
    <BlogDetailWrapper>
      <h2>博客详情</h2>
      <p className='article-title'>{articleInfo?.title}</p>
      <div className='intro'>
        <span className='keyword'>关键词:{articleInfo?.keywords}</span>
        <div className='creator'>
          <span className='user'>创建用户:{}</span>
          <span className='create'>创建时间:{articleInfo.createTime}</span>
        </div>
      </div>
      <div className='editor'>
          <Editor
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={editor => setHtml(editor.getHtml())}
              mode="default"
              style={{ height: 'auto', overflowY: 'hidden' }}
          />
      </div>
    </BlogDetailWrapper>
  )
})
