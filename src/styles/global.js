import { createGlobalStyle } from "styled-components";

const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
  }
  :root {
      font-size: ${px2vw(24)};
      background: #464541;
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
        background: #464541;
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
        background: #464541;
      }
    }
`;

export default Global;