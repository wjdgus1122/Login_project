import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  color: "#F9F9F9",
  logocolor: "#FFAFAF",
  inputcolor: "#FFE6BC",
  fontcolor: "#AAAAAA",
  btncolor: "#FF9999",
  colorrgb: "249,249,249",
  logorgb: "255,175,175",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    body{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
      text-decoration: none;
    }
`;
