import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15vw;
  background-color: gray;
  .left{
    color:#fff;
    font-weight: bold;
    font-size: 22px;
  }
  .right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:#fff;
    font-size: 18px;
    .item{
      color:#fff;
      margin-right:10px;
      a{
        color:#fff;
      }
    }
  }
`