import styled from "styled-components";
import { mainstyle } from "../style/Globalstyle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
const InputWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  position: relative;
`;
const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${mainstyle.fontcolor};
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
        <FormWrap>
          <Title>JH-SignUp</Title>
          <Form onSubmit={handleSubmit(onsubmit)}>
            <InputWrap>
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
                    message: "비밀번호는 8자 이상, 특수문자 포함이어야 합니다.",
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
                    message: "비밀번호는 8자 이상, 특수문자 포함이어야 합니다.",
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

            <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
              Sign Up
            </Button>
          </Form>
        </FormWrap>
      </Wrap>
    </>
  );
};
