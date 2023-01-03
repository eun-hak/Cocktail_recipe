import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  //칵테일 나열 박스
  display: relative;
  width: 444px;
  height: 160px;
  margin: auto;
  margin-top: 30px;
  background-color: #e9ecef;
  border: 1px solid black;
  border-radius: 10px;
`;

export const imgBox = styled.image`
  width: 10px;
  height: 10px;
  object-fit: cover;
  vertical-align: middle;
`;

export const FontWrapper = styled.div`
  display: relative;
  margin-top: 30px;
  /* justify-content: center; //가로가운데
  align-items: center; //세로가운데 */
`;

export const link = styled(Link)``;
