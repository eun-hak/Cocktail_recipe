import React from "react";
import * as Styled from "./styled";

function Signin() {
  return (
    <>
      <div>
        <Styled.LogoWrapper>
          <Styled.Logo to="/">Cocktail</Styled.Logo>
        </Styled.LogoWrapper>

        <br />
        <br />

        <p> 아이디</p>
        <Styled.Id placeholder="아이디를 입력해주세요"></Styled.Id>
        <div>
          <p> 비밀번호</p>
          <Styled.Pwd placeholder="비밀번호를 입력해주세요"></Styled.Pwd>
          <p>닉네임</p>
          <Styled.Pwd placeholder="닉네임을 입력해주세요"></Styled.Pwd>
          <Styled.StyledButton>
            <p>회원가입</p>
          </Styled.StyledButton>
        </div>
      </div>
    </>
  );
}

export default Signin;
