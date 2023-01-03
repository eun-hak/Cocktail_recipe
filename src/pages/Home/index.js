import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
import Card from "../../components/Card";
import ColorSchemesExample2 from "../../components/Nav2";
import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import UserProfile from "../../components/UserProfile";
import { useSelector } from "react-redux";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 리덕스 버전
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  return (
    <>
      <TodoTemplate>
        {/* 로그인 되어있으면 내정보nav가 뜨고 아니면 로그인 회원가입nav가 뜸 */}

        <ColorSchemesExample />
        {isLoggedIn ? (
          <UserProfile setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        {/* <LoginForm></LoginForm> */}
        <Card></Card>
      </TodoTemplate>
    </>
  );
}

export default Home;
