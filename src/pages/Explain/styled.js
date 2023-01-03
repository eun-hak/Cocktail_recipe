import styled from "styled-components";

export const RatingText = styled.div`
  // 주황글씨
  color: #787878;
  font-size: 16px;
  font-weight: 400;
  color: #e2703a;
`;

export const Box = styled.div`
  //레시피랑 후기 박스
  display: relative;
  width: 444px;
  height: 120px;
  margin: auto;

  background-color: #e9ecef;
  border: 1px solid black;
  border-radius: 10px;
`;

export const FontWraper = styled.div`
  //술이름 wrapper
  margin-top: 15px;
  font-size: 28px;
  font-weight: bold;
  color: black solid black;
`;

export const FontWraper2 = styled.div`
  // 준비물 후기 wrapper
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const Button = styled.div`
  border: none;

  color: white;

  padding: 15px 30px;

  text-align: center;

  text-decoration: none;

  display: inline-block;

  font-size: 16px;

  margin: 4px 2px;

  cursor: pointer;
`;

export const StyledButton = styled.button`
  //후기 등록 버튼
  margin: 0;
  border: none;
  cursor: pointer;
  width: 108px;
  margin: auto;
  margin-top: 25px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #e9ecef);
  color: var(--button-color, black);
  text-align: center;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #e9ecef);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
export const Img = styled.div``;

export const ingredient = styled.div`
  //레시피랑 후기 박스
  display: relative;
  width: 244px;
  height: 80px;
  margin: auto;
  font-weight: normal;
  text-align: center;

  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
`;
