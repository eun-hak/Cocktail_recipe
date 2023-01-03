import React from "react";
import * as Styled from "./styled";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };
  return (
    <>
      <Styled.Wrap>
        <Styled.Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="50"
                onClick={() => handleStarClick(el)}
                className={clicked[el] && "yellowStar"}
              />
            );
          })}
        </Styled.Stars>
      </Styled.Wrap>
    </>
  );
}

export default Rating;
