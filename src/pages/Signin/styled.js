import styled from "styled-components";
import { Link } from "react-router-dom";

export const Id = styled.input`
  display: relative;
  width: 444px;
  height: 50px;
  margin: auto;
  margin-bottom: 30px;

  background-color: #e9ecef;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Pwd = styled.input`
  display: static;
  width: 444px;
  height: 50px;
  margin: auto;
  margin-bottom: 30px;
  background-color: #e9ecef;
  border: 1px solid black;
  border-radius: 10px;
`;
// 회원가입 버튼
export const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  width: 200px;
  margin: auto;
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, black);
  color: var(--button-color, white);
  text-align: center;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, blue);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;

//  로고
export const LogoWrapper = styled.div`
  background: black;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled(Link)`
  color: white;
  font-family: "Rajdhani";
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;
