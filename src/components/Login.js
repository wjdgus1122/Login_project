import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserDb = {
  dbuser: "test",
  dbpassword: "123123123a",
};

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
  background-color: rgba(${mainstyle.color}, 0.5);
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
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${mainstyle.inputcolor};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  &::placeholder {
    color: ${mainstyle.fontcolor};
  }
`;
const PwWrap = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${mainstyle.inputcolor};
  input {
    margin-bottom: 0;
    border-bottom: none;
  }
`;
const PWViewWrap = styled.span`
  display: flex;
`;
const View = styled.span`
  display: ${(props) => props.dis};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
`;
const NotView = styled.span`
  display: ${(props) => props.dis};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
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
  margin-top: 15px;
  margin-bottom: 10px;
  color: rgb(${mainstyle.color});
  background-color: ${mainstyle.btncolor};
  opacity: ${(props) => props.opa};
  cursor: ${(props) => props.cur};
`;
const ErrorMsg = styled.div`
  width: 100%;
  font-size: 15px;
  color: ${mainstyle.btncolor};
  padding: 5px 10px;
`;
const SignUp = styled.div`
  font-size: 15px;
  font-style: italic;
  color: ${mainstyle.fontcolor};
  font-weight: 100;
`;
export const Login = () => {
  const [pwtype, setPwType] = useState("password");
  const [pwview, setPwView] = useState("block");
  const [pwnot, setPwNot] = useState("none");
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isValid },
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onsubmit = () => {
    const { username, password } = getValues();
    const { dbuser, dbpassword } = UserDb;

    if (username != dbuser) {
      setError("userResult", { message: "아이디가 틀렸습니다." });
    }
    if (password != dbpassword) {
      setError("passResult", { message: "비밀번호가 틀렸습니다." });
    }
    if (username === dbuser && password === dbpassword) {
      alert("로그인 되었습니다.");
    }
  };
  const pwhandle = () => {
    if (pwtype === "password") {
      setPwType("text");
      setPwView("none");
      setPwNot("block");
    } else {
      setPwType("password");
      setPwView("block");
      setPwNot("none");
    }
  };
  return (
    <Wrap>
      <FormWrap>
        <Title>JH-LOGIN</Title>
        <Form onSubmit={handleSubmit(onsubmit)}>
          <Input
            {...register("username", {
              required: "아이디를 입력해주세요.",
              minLength: {
                value: 3,
                message: "아이디는 3글자 이상이어야합니다.",
              },
              onChange() {
                clearErrors("userResult");
              },
            })}
            type="text"
            placeholder="아이디를 입력해주세요."
          />
          {errors?.username?.message && (
            <ErrorMsg>{errors?.username?.message}</ErrorMsg>
          )}
          {errors?.userResult?.message && (
            <ErrorMsg>{errors?.userResult?.message}</ErrorMsg>
          )}
          <PwWrap>
            <Input
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상 입력해야합니다.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                  message: "비밀번호는 8자 이상, 특수문자 포함이어야 합니다.",
                },
                onChange() {
                  clearErrors("passResult");
                },
              })}
              type={pwtype}
              placeholder="비밀번호를 입력해주세요."
            />{" "}
            <PWViewWrap>
              <View onClick={pwhandle} dis={pwview}>
                암호보기
              </View>
              <NotView onClick={pwhandle} dis={pwnot}>
                암호감추기
              </NotView>
            </PWViewWrap>
          </PwWrap>
          {errors?.password?.message && (
            <ErrorMsg>{errors?.password?.message}</ErrorMsg>
          )}
          {errors?.passResult?.message && (
            <ErrorMsg>{errors?.passResult?.message}</ErrorMsg>
          )}
          <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
            Login
          </Button>
        </Form>
        <Link to="/signup">
          <SignUp>회원가입</SignUp>
        </Link>
      </FormWrap>
    </Wrap>
  );
};
