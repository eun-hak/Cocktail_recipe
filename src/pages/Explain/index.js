import React from "react";
import * as Styled from "./styled";
import ColorSchemesExample from "../../components/Nav";
import Rating from "../../components/Star";
import TodoTemplate from "../../components/Templete";
import { Modal } from "../../features/Modal";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import img_array from "../../components/Data";
import { useParams } from "react-router-dom";
import ColorSchemesExample2 from "../../components/Nav2";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers";
import { useCallback } from "react";
import PostCard from "../../components/PostCard";

function Explain(props) {
  // 후기작성
  const { mainPosts } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);
  // 후기작성

  const [signup, setSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <TodoTemplate>
        {/* 로그인 되어있으면 내정보nav가 뜨고 아니면 로그인 회원가입nav가 뜸 */}
        {isLoggedIn ? <ColorSchemesExample2 /> : <ColorSchemesExample />}

        <BackButton></BackButton>
        {/* 사진  */}
        <div className="Card1">
          <div className="c1image">
            <img
              className="phoneImage"
              alt="iPhone_01"
              src={img_array[id].image}
            />
          </div>
        </div>
        {/* 사진 */}

        {/* 별점 컴포넌트 */}
        <Rating></Rating>
        {/* 별점 컴포넌트 */}
        <Styled.RatingText>선호도를 입력해주세요.</Styled.RatingText>
        <Styled.FontWraper>
          <p> {img_array[id].name}</p>
        </Styled.FontWraper>
        <Styled.FontWraper2>
          <p> 😃 도수 : {img_array[id].alchol}</p>
        </Styled.FontWraper2>

        {/* 준비물과 레시피 및 후기 등록 */}
        <div>
          <Styled.FontWraper2>재료</Styled.FontWraper2>
          <Styled.ingredient>{img_array[id].ingredient}</Styled.ingredient>

          <Styled.FontWraper2>
            <p>레시피</p>
          </Styled.FontWraper2>
          <Styled.Box>{img_array[id].recipe}</Styled.Box>
          <Styled.FontWraper2>
            <p>후기</p>
          </Styled.FontWraper2>

          <Styled.Box>
            {mainPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Styled.Box>
        </div>

        <Form onFinish={onSubmit}>
          <Input.TextArea
            value={text}
            onChange={onChangeText}
            placeholder="후기를 입력해 주세요"
          ></Input.TextArea>
          <Button type="primary" htmlType="submit">
            후기 등록
          </Button>
        </Form>
      </TodoTemplate>
    </div>
  );
}

export default Explain;
