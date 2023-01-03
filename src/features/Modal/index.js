import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as Styled from "./styled";
import { addPost } from "../../reducers";
import { Button, Form, Input } from "antd";

//  참고 https://joylee-developer.tistory.com/184

function Modal(props) {
  function closeModal() {
    props.closeModal();
  }
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);

  return (
    <>
      <Styled.modal>
        <div
          className="Modal" /*onClick={closeModal} 아무 화면 누르면 닫히는 */
        >
          <Styled.modalBody>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
              <Styled.modalclose>
                <button id="modalCloseBtn" onClick={closeModal}>
                  ✖
                </button>
                {props.children}
              </Styled.modalclose>
              {/* 후기 입력란 */}
              <Styled.Wraper>
                <p>후기 입력</p>
              </Styled.Wraper>

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

              {/* <Styled.review
                onChange={onChangeText}
                placeholder="후기를 입력해 주세요"
              ></Styled.review>
              <button>후기 등록</button> */}
            </div>
          </Styled.modalBody>
        </div>
      </Styled.modal>
    </>
  );
}

export { Modal };
