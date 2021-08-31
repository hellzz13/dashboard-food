import styled from "styled-components";

export const KitchenArea = styled.div`
  background-color: #fff;
  /* border: red solid 1px; */
  height: 50vh;
  max-width: 100%;
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
    height: 80%;
    
  }

  .KitchenOrder {
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
    width: 80%;
    margin: 10px auto;
    opacity: 0.3;
  }
  .backButton{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
