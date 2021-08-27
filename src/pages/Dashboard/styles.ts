import { shade } from "polished";
import styled from "styled-components";

export const MainGrid = styled.main`
    height: 100vh;
    width: 100%;
    /* grid-gap: 10px; */
    margin: auto;
    max-width: 500px;
    
    .menu {
        background: #EBE2F7;
        display: none;
        max-width: 100%;
        @media (min-width: 860px) {
        display: block;
         }
    }
    .order {
     border-radius: 50px 0 0 50px;
     background: #fff;
    }
    

    @media (min-width: 860px) {
    max-width: 100%;
    display: grid;
    grid-template-areas: "menu order";
    grid-template-columns: 2fr 1fr;
  }

  /* hr{
      max-width: 93%;
      margin: auto;
      
  } */
    
`
export const Form = styled.form `
    margin-top: 40px;
    max-width: 95%;
    display: flex;

    input {
        flex: 1;
        margin-left: 30px;
        height: 35px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;


        &::placeholder{
            color: #a8a8b3;
        }
    }

    button{
        width: 50px;
        background-color: #000;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2;

        &:hover {
            background-color: ${shade(0.2, '#000')};
        }
        
    }

`;

export const Title = styled.h2`
    font-size: 25px;
    color: #33054D;
    max-width: 450px;
    line-height: 56px;
    margin: 0px 40px;

`
