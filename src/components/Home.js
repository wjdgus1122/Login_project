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
  justify-content: center;
  align-items: center;
`;
const Btn = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
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
          <Btn link={"/signup"}>SignUp</Btn>
          <Btn link={"/login"}>Login</Btn>
        </BtnWrap>
      </Con>
    </HomeWrap>
  );
};
