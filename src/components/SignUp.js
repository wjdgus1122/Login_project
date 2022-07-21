import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://img.freepik.com/free-vector/gradient-background-vector-in-spring-colors_53876-117271.jpg?w=360)
    no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8i0-f7u0vj5oZeQYo6nxipfW0OCiKwufD9A&usqp=CAU)
      no-repeat center/cover;
  }
`;
const LoginWrap = styled.div`
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
const LeftWrap = styled.div`
  width: 40%;
  background: url(https://i.pinimg.com/originals/9e/e4/51/9ee451c9c5c07fb8c66a428ef0189879.jpg)
    no-repeat center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
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
const FormWrap = styled.div`
  width: 60%;
  background-color: ${mainstyle.color};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 100px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 80%;
    padding: 0 40px;
    align-items: center;
    background-color: rgba(${mainstyle.colorrgb}, 0.7);
    border-top-left-radius: 100px;
    position: absolute;
    bottom: 0;
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${mainstyle.logocolor};
  margin-top: 70px;
  margin-bottom: 60px;
  @media screen and (max-width: 500px) {
    color: ${mainstyle.logocolor};
    margin-top: 150px;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-top: 30px;
  &.first {
    margin-top: 0;
  }
`;
const Text = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${mainstyle.fontcolor};
  @media screen and (max-width: 500px) {
    color: ${mainstyle.fontcolor};
  }
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  color: ${mainstyle.fontcolor};
  border-bottom: 1px solid ${mainstyle.inputcolor};
  font-size: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    height: 30px;
    border-bottom: 1px solid ${mainstyle.fontcolor};
    font-size: 15px;
  }
`;
const PwTrue = styled.div`
  position: absolute;
  right: 25px;
  bottom: 10px;
  color: green;
  display: ${(props) => props.dis};
`;
const PwFalse = styled.div`
  position: absolute;
  right: 25px;
  bottom: 10px;
  color: red;
  display: ${(props) => props.dis};
`;
const BottomBtn = styled.div`
  width: 100%;
  color: ${mainstyle.fontcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 70px;
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
  color: ${mainstyle.color};
  background-color: ${mainstyle.btncolor};
  opacity: ${(props) => props.opa};
  cursor: ${(props) => props.cur};
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 70%;
    border-radius: 15px;
    border-top-right-radius: 0;
    background-color: ${mainstyle.btncolor};
    color: ${mainstyle.color};
  }
`;
const ErrorMsg = styled.div`
  width: 100%;
  font-size: 12px;
  color: ${mainstyle.btncolor};
  padding: 5px 10px;
`;

const SignIn = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${mainstyle.fontcolor};
  font-style: italic;
  @media screen and (max-width: 500px) {
    color: ${mainstyle.fontcolor};
  }
`;

export const SignUp = () => {
  const [pwok, setPwOk] = useState("none");
  const [pwfalse, setPwFalse] = useState("none");

  const nagivate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onsubmit = () => {
    const { password, pwcheck } = getValues();

    if (password != pwcheck) {
      setError("pwcheckError", { message: "비밀번호가 일치하지않습니다." });
      setPwOk("none");
      setPwFalse("block");
    }
    if (password === pwcheck) {
      setPwFalse("none");
      setPwOk("block");
      nagivate("/");
    }
  };
  return (
    <>
      <Wrap>
        <LoginWrap>
          <LeftWrap>
            <LeftTitle>Welcome to Jh</LeftTitle>
            <LeftText>This app is a login related app.</LeftText>
          </LeftWrap>
          <FormWrap>
            <Title>JH-SIGNUP</Title>
            <Form onSubmit={handleSubmit(onsubmit)}>
              <InputWrap className="first">
                <Text>아이디 </Text>
                <Input
                  {...register("username", {
                    required: "아이디를 입력해주세요.",
                    minLength: {
                      value: 3,
                      message: "아이디는 3글자 이상이어야합니다.",
                    },
                  })}
                  type="text"
                />
              </InputWrap>
              {errors?.username?.message && (
                <ErrorMsg>{errors?.username?.message}</ErrorMsg>
              )}

              <InputWrap>
                <Text>비밀번호 </Text>
                <Input
                  {...register("password", {
                    required: "비밀번호를 입력해주세요.",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상 입력해야합니다.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                      message:
                        "비밀번호는 8자 이상 16자이하, 특수문자 포함이어야 합니다.",
                    },
                    onChange() {
                      clearErrors("pwcheckError");
                    },
                  })}
                  type="password"
                />
                <PwTrue dis={pwok}>
                  <FontAwesomeIcon icon={faCheck} />
                </PwTrue>
                <PwFalse dis={pwfalse}>
                  <FontAwesomeIcon icon={faClose} />
                </PwFalse>
              </InputWrap>

              {errors?.password?.message && (
                <ErrorMsg>{errors?.password?.message}</ErrorMsg>
              )}
              {errors?.pwcheckError?.message && (
                <ErrorMsg>{errors?.pwcheckError?.message}</ErrorMsg>
              )}

              <InputWrap>
                <Text>비밀번호 확인</Text>
                <Input
                  {...register("pwcheck", {
                    required: "비밀번호를 입력해주세요.",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상 입력해야합니다.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                      message:
                        "비밀번호는 8자 이상, 특수문자 포함이어야 합니다.",
                    },
                    onChange() {
                      clearErrors("pwcheckError");
                    },
                  })}
                  type="password"
                />

                <PwTrue dis={pwok}>
                  <FontAwesomeIcon icon={faCheck} />
                </PwTrue>
                <PwFalse dis={pwfalse}>
                  <FontAwesomeIcon icon={faClose} />
                </PwFalse>
              </InputWrap>

              {errors?.pwcheck?.message && (
                <ErrorMsg>{errors?.pwcheck?.message}</ErrorMsg>
              )}
              {errors?.pwcheckError?.message && (
                <ErrorMsg>{errors?.pwcheckError?.message}</ErrorMsg>
              )}

              <BottomBtn>
                <Button
                  opa={isValid ? 1 : 0.5}
                  cur={isValid ? "pointer" : "auto"}
                >
                  Sign Up
                </Button>
                <Link to="/">
                  <SignIn>LogIn</SignIn>
                </Link>
              </BottomBtn>
            </Form>
          </FormWrap>
        </LoginWrap>
      </Wrap>
    </>
  );
};
