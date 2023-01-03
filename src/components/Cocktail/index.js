import React from "react";
import * as Styled from "./styled";
import Data from "../Data";
import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";

function Cocktail() {
  const image_array = [img1, img2, img3, img5, img6];
  return (
    <>
      {image_array.map(function (a, i) {
        return (
          <div>
            <img
              src={a}
              style={{
                width: "130px",
                height: " 130px",
                display: "flex",
                marginTop: "15px",
                marginLeft: "10px",
                margin: "inline",
              }}
            />
          </div>
        );
      })}
    </>
  );
}

export default Cocktail;
