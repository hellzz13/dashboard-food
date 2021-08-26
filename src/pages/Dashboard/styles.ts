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
    grid-template-columns: 3fr 1fr;
  }
    
`