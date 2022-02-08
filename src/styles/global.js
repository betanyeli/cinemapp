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
      background: #e5e5e5;
      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
        background: #e5e5e5;
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
        background: #e5e5e5;
      }
    }
`;

export default Global;