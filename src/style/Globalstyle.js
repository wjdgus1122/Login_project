import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  color: "#F9F9F9",
  logocolor: "#FFAFAF",
  inputcolor: "#FFE6BC",
  btncolor: "#FF9999",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
