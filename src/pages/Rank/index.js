import React from "react";
import * as Styled from "./styled";
import Rating from "../../components/Star";
import ColorSchemesExample from "../../components/Nav";
import ColorSchemesExample2 from "../../components/Nav2";

import { useState } from "react";
import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";

function Rank() {
  const image_array = [img1, img2, img3, img5, img6];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div>
        <p> Ranking </p>
        {/* 로그인 되어있으면 내정보nav가 뜨고 아니면 로그인 회원가입nav가 뜸 */}
        {isLoggedIn ? <ColorSchemesExample2 /> : <ColorSchemesExample />}

        {[1, 2, 3, 4, 5].map(function (a, i) {
          return (
            <div>
              <Styled.Box>
                <img
                  src={image_array[i]}
                  style={{
                    width: "130px",
                    height: " 130px",
                    display: "relaitve",
                    marginTop: "15px",
                    marginLeft: "10px",
                    margin: "inline",
                    float: "left",
                  }}
                />

                <Rating></Rating>
              </Styled.Box>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Rank;
