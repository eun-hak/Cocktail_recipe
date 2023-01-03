import { React, useCallback, useState } from "react";
import * as Styled from "./styled";
import { Form, Input, Button } from "antd";
import useinput from "../../Hooks/useinput";
import { StyledButton } from "../Login/styled";

function Register() {
  const [id, onChangeId] = useinput("");

  const [nickname, onChangeNickname] = useinput("");
  const [password, onChangePassword] = useinput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  // const [id, setId] = useState('')
  // const onChangeId = useCallback((e)=>{
  //     setId(e.target.value);
  // },[])
  //   const [password, setPassword] = useState("");
  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck]);
  return (
    <>
      <tittle>회원가입</tittle>

      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>

        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />

          {passwordError && (
            <Styled.Errormessage>
              비밀번호가 일치하지 않습니다.
            </Styled.Errormessage>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Register;
