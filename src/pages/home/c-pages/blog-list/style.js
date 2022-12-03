import styled from "styled-components";

export const BlogListWrapper = styled.div`
  %btw{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  width: 100%;
  min-height: 600px;
  padding: 15px;
  .list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    .item{
      margin: 15px 10px;
      padding:10px 15px;
      border: 1px solid #eee;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0,0,0,.1);
      cursor: pointer;
      &:hover{
        box-shadow: 0 5px 15px rgba(0,0,0,.1);
      }
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;

        .title{
          font-size:18px;
          font-weight: bolder;
          width:80%;
          margin-right: 10px;
        }
        .more{
          flex:1;
        }
      }
      .info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color:#333;
        padding: 10px 0;
        .keywords{
          flex:1.2;
          margin-right: 10px;
        }
        .type{
          flex:1;
        }
      }
      .other-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        font-size: 14px;
        color:#999;
      }
    }
    @media screen and (max-width: 767px) {
      .item{
        width: 90%;
      }
    }
    @media screen and (min-width: 767px ) and (max-width: 1279px ) {
      .item{
        width: 30%;
      }
    }
    @media screen and (min-width: 1280px ) and (max-width: 1920px ) {
      .item{
        width: 22%;
      }
    }
    @media screen and (min-width: 1921px ) {
      .item{
        width: 22%;
      }
    }
  }
`