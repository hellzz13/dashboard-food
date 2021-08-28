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
        display: block;
        max-width: 950px;
        height: 100vh;
        margin: auto;
        @media (min-width: 860px) {
        display: block;
         }
    }
    .order {
     border-radius: 50px 0 0 50px;
     background: #fff;
     text-align: center;
    }
    

    @media (min-width: 860px) {
    max-width: 100%;
    display: grid;
    grid-template-areas: "menu order";
    grid-template-columns: 2fr 1fr;
  }


`
export const Form = styled.form `
    margin: auto;
    margin-top: 40px;
    margin-bottom: 10px;
    max-width: 94%;
    display: flex;

    input {
        flex: 1;
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
        background-color: #5b3e96;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2;

        &:hover {
            background-color: ${shade(0.3, '#5b3e96')};
        }
        
    }

`;

export const Title = styled.h2`
    font-size: 25px;
    color: #33054D;
    max-width: 450px;
    margin: 0px 40px;
    @media (max-width: 1258px){
        text-align: center;
        margin: auto;
    }

`;

export const TitleOrder = styled.h2`
    font-size: 25px;
    color: #000;
    margin: auto;
    max-width: 450px;
    line-height: 56px;
    margin-top: 40px;
`
