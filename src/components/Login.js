import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://img.freepik.com/free-vector/gradient-background-vector-in-spring-colors_53876-117271.jpg?w=360)
    no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrap = styled.div`
  width: 450px;
  padding: 20px;
  background-color: ${mainstyle.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: ${mainstyle.logocolor};
  margin-bottom: 100px;
`;
const Form = styled.form``;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${mainstyle.inputcolor};
  font-size: 20px;
  color: ${mainstyle.inputcolor};
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainstyle.color};
  background-color: ${mainstyle.logocolor};
`;

export const Login = () => {
  return (
    <Wrap>
      <FormWrap>
        <Title>JH-LOGIN</Title>
        <Form>
          <Input type="text" placeholder="아이디를 입력해주세요." />
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
          <Button>Login</Button>
        </Form>
      </FormWrap>
    </Wrap>
  );
};
