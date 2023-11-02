import React, { useState } from "react";
import "../Styles/AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const pointerXY = ({ clientX, clientY }) => {
    const mouseX = clientX;
    const mouseY = clientY;
    /* 내가 쓴 코드: const pointerXY = (pointerXY) => {
      const mouseX = clientX;
      const mouseY = clientY;
    } 이렇게 쓰게 되면 함수와 전달하는 인자 이름이 같아 혼동이 올 수도 있으므로 다희님께서 추천해주신 위의 방법도 있다. 이 방법이 나도 남들도 알아보기 쉬울 것 같다!
    */
    setPointer({ x: mouseX, y: mouseY });
    console.log(pointer.x, pointer.y);
  };
  return (
    <div className="container" onMouseMove={pointerXY}>
      <div
        className="pointer"
        // style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }} //다희님 추천방식 transform은 gpu를 지원하기 때문에 문서(?)
        // 그 자체를 움직이게 하는 것이 아니라 내가 불러온 것을 움직이게 한다..? 그래서 transform을 좀 더 추천함.
        style={{ left: `${pointer.x}px`, top: `${pointer.y}px` }} //주현님의 추천방식 이렇게 하면 마우스 포인터를 따라오는 원이 마우스 포인터에 생기는 것이 아님! div 요소 자체의 left(x), top(y)를 가져옴.
      ></div>
    </div>
  );
}
