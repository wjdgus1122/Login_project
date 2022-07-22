import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { userDB } from "./SignUp";

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
  height: 100%;
  background: url(https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDNfMTIx/MDAxNTA0NDAyMzc3OTEy.Otb_Nb-WRINsvRKBn-Fmtrx2NZ2lX_uP1m1SQtcofmog.YeeMkz8jkqMvwNDNmBLEtoPistAf3z8GwegCwrKA6Pkg.JPEG.jinmichu/IMG_6491.jpg?type=w800)
    no-repeat center/cover;
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const LeftTextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: -100%;
  animation: textmove 1s 0.5s 1 forwards;
  @keyframes textmove {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
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
  padding: 0 100px;
  background-color: ${mainstyle.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 80%;
    padding: 0 40px;
    position: absolute;
    bottom: -100%;
    border-top-right-radius: 100px;
    background-color: rgba(${mainstyle.colorrgb}, 0.8);
    animation: move 1s 0.5s 1 forwards;
    @keyframes move {
      0% {
        bottom: -100%;
      }
      100% {
        bottom: 0;
      }
    }
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${mainstyle.logocolor};
  margin-top: 70px;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    margin-top: 150px;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;
const InputTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${mainstyle.fontcolor};
  margin-top: 30px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${mainstyle.inputcolor};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    height: 30px;
    font-size: 15px;
    border-bottom: 1px solid ${mainstyle.fontcolor};
  }
`;
const PwWrap = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${mainstyle.inputcolor};
  input {
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
  @media screen and (max-width: 500px) {
    height: 30px;
    font-size: 15px;
    border-bottom: 1px solid ${mainstyle.fontcolor};
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
  @media screen and (max-width: 500px) {
    top: 3px;
  }
`;
const NotView = styled.span`
  display: ${(props) => props.dis};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    top: 3px;
  }
`;
const BottomBtn = styled.div`
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
const ErrorMsg = styled.div`
  width: 100%;
  font-size: 13px;
  color: ${mainstyle.btncolor};
  padding: 5px 10px;
`;
const SignUp = styled.div`
  font-size: 18px;
  font-style: italic;
  color: ${mainstyle.fontcolor};
  font-weight: 500;
  text-align: center;
`;
export const Login = () => {
  const [pwtype, setPwType] = useState("password");
  const [pwview, setPwView] = useState("block");
  const [pwnot, setPwNot] = useState("none");
  const nagivate = useNavigate();
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
    const { username: dbuser, password: dbpassword } = userDB;
    const CompareUser = userDB.filter((username) => username === username);
    const ComparePassWrod = userDB.filter((password) => password === password);

    if (username != CompareUser[0].username) {
      setError("userResult", { message: "아이디가 틀렸습니다." });
    }
    if (password != ComparePassWrod[0].password) {
      setError("passResult", { message: "비밀번호가 틀렸습니다." });
    }
    if (
      username === CompareUser[0].username &&
      password === ComparePassWrod[0].password
    ) {
      nagivate("/");
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
      <LoginWrap>
        <LeftWrap>
          <LeftTextWrap>
            <LeftTitle>Welcome to Jh</LeftTitle>
            <LeftText>This app is a login related app.</LeftText>
          </LeftTextWrap>
        </LeftWrap>
        <FormWrap>
          <Title>JH-LOGIN</Title>
          <Form onSubmit={handleSubmit(onsubmit)}>
            <InputTitle>아이디</InputTitle>
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
            />
            {errors?.username?.message && (
              <ErrorMsg>{errors?.username?.message}</ErrorMsg>
            )}
            {errors?.userResult?.message && (
              <ErrorMsg>{errors?.userResult?.message}</ErrorMsg>
            )}
            <InputTitle>비밀번호</InputTitle>
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
              />{" "}
              <PWViewWrap>
                <View onClick={pwhandle} dis={pwview}>
                  <FontAwesomeIcon icon={faEye} />
                </View>
                <NotView onClick={pwhandle} dis={pwnot}>
                  <FontAwesomeIcon icon={faEyeSlash} />
                </NotView>
              </PWViewWrap>
            </PwWrap>
            {errors?.password?.message && (
              <ErrorMsg>{errors?.password?.message}</ErrorMsg>
            )}
            {errors?.passResult?.message && (
              <ErrorMsg>{errors?.passResult?.message}</ErrorMsg>
            )}
            <BottomBtn>
              <Button
                opa={isValid ? 1 : 0.5}
                cur={isValid ? "pointer" : "auto"}
              >
                Login
              </Button>
              <Link to="/signup">
                <SignUp>SignUp</SignUp>
              </Link>
            </BottomBtn>
          </Form>
        </FormWrap>
      </LoginWrap>
    </Wrap>
  );
};
