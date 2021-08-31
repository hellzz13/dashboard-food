import styled from "styled-components";

export const KitchenArea = styled.div`
  background-color: #fff;
  /* border: red solid 1px; */
  height: 50vh;
  width: 100%;
  padding: 20px;

  .title{
      display: inline-block;
      font-size: 2rem;
  }

  .scroll {
    overflow-y: scroll;
    scrollbar-color: transparent;
    /* border: red solid 1px; */
    height: 88%;
    
  }

  .KitchenOrder {
    /* border: red solid 1px; */
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .subTitle{
     font-size: 1.5rem;
     color: #8048CF;
  }

  hr {
    opacity: 0.3;
  }
`;
