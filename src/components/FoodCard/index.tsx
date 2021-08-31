import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1255px;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .buttonHover {
    color: #5b3e96;
    transition: color 0.2;

    &:hover {
      color: ${shade(0.3, "#5b3e96")};
    }
  }
`;

export const FoodCard = styled.div`
  width: 400px;
  height: 170px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  padding: 5px;
  margin: 10px;
  box-shadow: 5px 5px 5px grey;
  text-align: center;

  .card-side-left {
    width: 200px;
    height: 100%;
    display: flex;

    img {
      margin: auto;
      padding: 5px;
      width: 85%;
      border-radius: 100px;
    }
  }
  .card-side-right {
    width: 200px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;

    h2 {
      margin: 20px;
    }
    div {
      font-size: 1.7rem;
      margin: 10px;
      display: flex;
      justify-content: space-between;
    }
    hr {
      width: 88%;
      margin: auto;
      color: grey;
      opacity: 0.5;
    }
  }
`;

export const FoodCardOrder = styled.div`
  width: 380px;
  height: 200px;
  margin-bottom: 10px;
  max-height: 80px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: solid #d1bdee 1px;
  justify-content: space-around;

  img {
    width: 80px;
    border-radius: 100px;
  }
  h2 {
    font-size: 1.1rem;
  }
`;
