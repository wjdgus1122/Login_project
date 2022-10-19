import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Con = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 50px;
`;
const BtnWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & a {
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Btn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #333;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: beige;
    font-style: oblique;
    color: salmon;
  }
`;

export const Home = () => {
  return (
    <HomeWrap>
      <Con>
        <Text>Home!</Text>
        <BtnWrap>
          <Link to={"/signup"}>
            <Btn>SignUp</Btn>
          </Link>
          <Link to={"/login"}>
            <Btn>Login</Btn>
          </Link>
        </BtnWrap>
      </Con>
    </HomeWrap>
  );
};
