import styled from "styled-components";

export const LoginWrap = styled.div`
  display: flex;
  width: 60%;
  height: 70vh;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    box-shadow: none;
  }
`;
