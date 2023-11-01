import React, { useState } from "react";
import "../Styles/AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const MouseMove = (pointer) => {
    setPointer({ x: setPointer.mouseX, y: setPointer.mouseY });
  };
  return (
    <div className="container">
      <div className="pointer" onMouseMove={() => MouseMove(setPointer)}></div>
    </div>
  );
}
