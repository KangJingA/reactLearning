import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${backgroundImg});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: lightcoral;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    /* background-image: linear-gradient(180deg, #fff, #87f1ff); */
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`;
