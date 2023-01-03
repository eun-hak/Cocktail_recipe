import React from "react";
import * as Styled from "./styled";

//  참고 https://joylee-developer.tistory.com/184

function Modals(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <>
      <Styled.modal>
        <div className="Modal" onClick={closeModal}>
          <Styled.modalBody>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
              <Styled.modalclose>
                <button id="modalCloseBtn" onClick={closeModal}>
                  ✖
                </button>
                {props.children}
              </Styled.modalclose>
            </div>
          </Styled.modalBody>
        </div>
      </Styled.modal>
    </>
  );
}

export default Modals;
