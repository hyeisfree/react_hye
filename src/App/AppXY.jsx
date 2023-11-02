import React, { useState } from "react";
import "../Styles/AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const xyHandler = (xyHandler) => {
    const mouseX = xyHandler.clientX;
    const mouseY = xyHandler.clientY;

    setPointer({ x: mouseX, y: mouseY });
    console.log(pointer.x, pointer.y);
  };
  return (
    <div className="container" onMouseMove={xyHandler}>
      <div
        className="pointer"
        style={{ transform: `translate(${pointer.x}px, ${pointer.y}px)` }}
      ></div>
    </div>
  );
}
