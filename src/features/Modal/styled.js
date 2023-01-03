import styled from "styled-components";

// 모달창 외부화면
export const modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modalBody = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

export const modalclose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

// 후기 입력 input
export const review = styled.input`
  display: absolute;

  width: 444px;
  height: 70px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 40px;

  background-color: #e9ecef;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Wraper = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
