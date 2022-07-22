import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { userDB } from "./SignUp";
import { Wrap } from "../stylecomponent/Wrap";
import { LoginWrap } from "../stylecomponent/LoginWrap";
import { LeftTextWrap } from "../stylecomponent/LeftTextWrap";
import { Title } from "../stylecomponent/Title";
import { BottomBtn } from "../stylecomponent/BottomBtn";
import { InputTitle } from "../stylecomponent/InputTitle";

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

const ErrorMsg = styled.div`
  width: 100%;
  font-size: 13px;
  color: ${mainstyle.btncolor};
  padding: 5px 10px;
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
          <LeftTextWrap />
        </LeftWrap>
        <FormWrap>
          <Title title="JH-LOGIN" />
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
            <BottomBtn
              isvalid={isValid}
              buttontext="Login"
              link={`/signup`}
              linktext="SignUp"
            />
          </Form>
        </FormWrap>
      </LoginWrap>
    </Wrap>
  );
};
