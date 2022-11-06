import styled from "styled-components";

export const BlogListWrapper = styled.div`
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
      margin: 15px 0;
      padding:10px 15px;
      border: 1px solid #eee;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0,0,0,.1);
      &:hover{
        box-shadow: 0 5px 15px rgba(0,0,0,.1);
      }
    }
    @media screen and (max-width: 767px) {
      .item{
        width: 90%;
      }
    }
    @media screen and (min-width: 767px ) and (max-width: 1279px ) {
      .item{
        width: 33%;
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