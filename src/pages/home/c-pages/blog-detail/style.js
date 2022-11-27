import styled from "styled-components";

export const BlogDetailWrapper = styled.div`
  .article-title{
    margin-left: 10%;
    line-height: 28px;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .intro{
    display: flex;
    align-items: center;
    margin: 10px auto;
    width: 80%;
    font-size: 14px;
    .keyword{
      margin-right: 60px;
    }
    .user{
      margin-right: 20px;
    }
    .create{
      color:#999;
    }
  }
  .editor{
    width: 80%;
    margin: auto;
    border: 1px solid #eee;
  }
`