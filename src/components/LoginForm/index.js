import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { Form } from "antd";
import * as Styled from "./styled";
import useinput from "../../Hooks/useinput";
import { useDispatch } from "react-redux";
import { loginAction } from "../../reducers/user";

function LoginForm({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const [id, onChangeId] = useinput("");
  const [password, onChangePassword] = useinput("");

  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");

  //   const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  //   }, []);
  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
    //dispatch(loginAction({id,password}))
  }, [id, password]);

  return (
    <>
      <Form onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          ></Input>
        </div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        ></Input>
        <div>
          <Styled.ButtonWrapper>
            <Button type="primary" htmlType="submit" loading={false}>
              로그인
            </Button>
            <Link href="/signup">
              <a>{/* <Button>회원가입</Button> */}</a>
            </Link>
          </Styled.ButtonWrapper>
        </div>

        <div></div>
      </Form>
    </>
  );
}

export default LoginForm;
