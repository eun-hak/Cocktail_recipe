import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Stars = styled.div`
  display: flex;
  padding-bottom: 5px;

  position: relative;

  left: 25%;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;
