import React, { useState } from "react";
import "../Styles/AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const pointerXY = (pointerXY) => {
    const mouseX = pointerXY.clientX;
    const mouseY = pointerXY.clientY;

    setPointer({ x: mouseX, y: mouseY });
    console.log(pointer.x, pointer.y);
  };
  return (
    <div className="container" onMouseMove={pointerXY}>
      <div
        className="pointer"
        style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }}
      ></div>
    </div>
  );
}
