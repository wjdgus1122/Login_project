import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { Link } from "react-router-dom";

const SBottomBtn = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 100;
  color: ${mainstyle.fontcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 160px;
  @media screen and (max-width: 500px) {
    bottom: 110px;
  }
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: ${mainstyle.color};
  background-color: ${mainstyle.btncolor};
  opacity: ${(props) => props.opa};
  cursor: ${(props) => props.cur};
  @media screen and (max-width: 500px) {
    width: 70%;
    border-radius: 15px;
    border-top-right-radius: 0;
  }
`;
const SignUp = styled.div`
  font-size: 18px;
  font-style: italic;
  color: ${mainstyle.fontcolor};
  font-weight: 500;
  text-align: center;
`;
export const BottomBtn = ({ isvalid, buttontext, link, linktext }) => {
  return (
    <SBottomBtn>
      <Button opa={isvalid ? 1 : 0.5} cur={isvalid ? "pointer" : "auto"}>
        {buttontext}
      </Button>
      <Link to={link}>
        <SignUp>{linktext}</SignUp>
      </Link>
    </SBottomBtn>
  );
};
