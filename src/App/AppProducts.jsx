import React, { useState } from "react";
import Products from "../Components/Products";
import "../Styles/AppProducts.css";

function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>
        Toggle Button
      </button>
    </div>
  );
}

export default AppProducts;
