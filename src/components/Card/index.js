import React from "react";
import * as Styled from "./styled";
import Data from "../Data";
import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";
import img_array from "../Data";
import Cocktail from "../Cocktail";
import { useParams } from "react-router-dom";

function Card() {
  //   const card = Data.map((a, i) => {
  //     <div>
  //       <h4>{a}</h4>
  //     </div>;
  //   });
  //let { id } = useParams();
  const image_array = [img1, img2, img3, img5, img6];

  return (
    <>
      {img_array.map(function (a, i) {
        return (
          <div>
            <Styled.Box>
              <Styled.link to={"/Explain/" + a.id}>     {/* 라우터로 칵테일당 페이지 구분 /0 /1 이런식으로   */}
                <img
                  src={a.image}
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
              </Styled.link>
              <Styled.FontWrapper>
                <p>{a.name}</p>
                <p>도수 : {a.alchol}</p>
                <p>평점 : {a.grade}</p>
              </Styled.FontWrapper>
            </Styled.Box>
          </div>
        );
      })}
    </>
  );
}

export default Card;
