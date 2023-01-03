import React from "react";
import * as Styled from "./styled";
import img1 from "../../image/cocktail1.png";
import img2 from "../../image/cocktail2.png";
import img3 from "../../image/cocktail3.png";
import img5 from "../../image/cocktail5.png";
import img6 from "../../image/cocktail6.png";

// 임시 데이터

const img_array = [
  {
    id: 0,
    name: "아페롤 스프리츠(Aperol Spritz)",
    alchol: "20도",
    grade: 5,
    ingredient:
      "프로세코 60ml / 아페롤(Aperol) 40ml / 탄산수 20ml / 오렌지/슬라이스 1/2조각",
    recipe:
      "잔에 얼음을 채운다.\n잔에 오렌지 슬라이스를 제외한 나머지 재료를 넣는다.\n바 스푼으로 젓는다.\n오렌지 슬라이스를 넣는다.",
    image: img1,
  },
  {
    id: 1,
    name: "벨리니(Bellini)",
    alchol: "13도",
    grade: 5,
    ingredient: "복숭아 퓌레 30ml / 프로세코 100ml",
    recipe:
      "잔에 복숭아 퓌레를 넣는다.\n프로세코를 넣는다.\n바 스푼으로 살짝 저어준다.",
    image: img2,
  },
  {
    id: 2,
    name: "비시클레타(Bicicletta)",
    alchol: "9도",
    grade: 4,
    ingredient:
      "카마리(Campari) 50ml / 화이트 와인(White Wine) 40ml / 탄산수 40ml / 레몬제스트 1조각",
    recipe:
      "잔에 얼음을 채운다.\n잔에 레몬 제스트를 제외한 나머지 재료를 넣는다.\n바 스푼으로 젓는다.\n레몬제스트를 장식한다.",
    image: img3,
  },
  {
    id: 3,
    name: "그레이하운드(Greyhound)",
    alchol: "12도",
    grade: 4,
    ingredient:
      "진(Gin) 50ml / 자몽주스(Grapefruit Juice) 100ml / 자몽 슬라이스 1/4조각",
    recipe:
      "잔에 얼음을 채운다.\n잔에 자몽 슬라이스를 제외한 나머지 재료를 넣는다.\n바 스푼으로 젓는다.\n자몽 슬라이스를 장식한다.",
    image: img5,
  },
  {
    id: 4,
    name: "홀스넥(Horse's Neck)",
    alchol: "7도",
    grade: 3,
    ingredient:
      "코냑(Cognac) 50ml / 진저에일(Ginger Ale) 100ml / 레몬 제스트 1조각",
    recipe:
      "잔에 얼음을 채운다.\n잔에 레몬제스트를 제외한 나머지 재료를 붓는다.\n바 스푼으로 젓는다.\n레몬 제스트를 넣는다.(레몬은 두껍고 길게 모양은 낸다.)",
    image: img6,
  },
];

export default img_array;
