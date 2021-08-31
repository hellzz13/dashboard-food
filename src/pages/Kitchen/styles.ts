import styled from "styled-components";

export const KitchenArea = styled.div`
  background-color: #fff;
  /* border: red solid 1px; */
  height: 50vh;
  max-width: 80%;
  margin: auto;
  padding: 20px;

  .headerKitchen{
      display: flex;
      align-items: center;
      justify-content: space-around;
  }

  .title{
      display: inline-block;
      font-size: 2rem;
  }

  .scroll {
    overflow-y: scroll;
    scrollbar-color: transparent;
    /* border: red solid 1px; */
    height: 80%;
    
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
     display: flex;
     justify-content: center;
  }

  hr {
    opacity: 0.3;
  }
`;
