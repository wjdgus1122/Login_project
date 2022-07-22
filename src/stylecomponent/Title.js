import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";

const STitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${mainstyle.logocolor};
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    margin-top: 150px;
  }
`;

export const Title = ({ title }) => {
  return <STitle>{title}</STitle>;
};
