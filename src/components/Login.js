import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
const LoginWrap = styled.div`
  display: flex;
  width: 60%;
  height: 70vh;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;
const LeftWrap = styled.div`
  width: 40%;
  background: url(https://mblogthumb-phinf.pstatic.net/MjAxNzA5MDNfMTIx/MDAxNTA0NDAyMzc3OTEy.Otb_Nb-WRINsvRKBn-Fmtrx2NZ2lX_uP1m1SQtcofmog.YeeMkz8jkqMvwNDNmBLEtoPistAf3z8GwegCwrKA6Pkg.JPEG.jinmichu/IMG_6491.jpg?type=w800)
    no-repeat center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  position: relative;
`;
const LeftTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 120px;
  color: rgb(${mainstyle.color});
`;
const LeftText = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: rgb(${mainstyle.color});
  position: absolute;
  bottom: 50px;
`;
const FormWrap = styled.div`
  width: 60%;
  padding: 0 100px;
  background-color: rgba(${mainstyle.color}, 1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: ${mainstyle.logocolor};
  margin-top: 70px;
  margin-bottom: 30px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${mainstyle.fontcolor};
  margin-top: 30px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid ${mainstyle.inputcolor};
  color: ${mainstyle.fontcolor};
  font-size: 20px;
  padding: 5px 10px;
  box-sizing: border-box;
`;
const PwWrap = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${mainstyle.inputcolor};
  margin-top: 10px;
  input {
    margin-top: 0;
    margin-bottom: 0;
    border: none;
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
  margin-top: 50px;
  margin-bottom: 50px;
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
  text-align: center;
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
      <LoginWrap>
        <LeftWrap>
          <LeftTitle>Welcome to Jh</LeftTitle>
          <LeftText>This app is a login related app.</LeftText>
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
            <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
              Login
            </Button>
          </Form>
          <Link to="/signup">
            <SignUp>회원가입</SignUp>
          </Link>
        </FormWrap>
      </LoginWrap>
    </Wrap>
  );
};
