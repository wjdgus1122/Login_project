import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";

const SLeftTextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
const LeftTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 120px;
  color: ${mainstyle.color};
`;
const LeftText = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: ${mainstyle.color};
  position: absolute;
  bottom: 50px;
`;

export const LeftTextWrap = () => {
  return (
    <SLeftTextWrap>
      <LeftTitle>Welcome to Jh</LeftTitle>
      <LeftText>This app is a login related app.</LeftText>
    </SLeftTextWrap>
  );
};
