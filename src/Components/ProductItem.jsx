import React, { useState } from "react";

const ProductItem = ({ name, price, setTotalCount }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>상품명: {name}</p>
      <p>가격: {price}원</p>
      <p>
        개수:
        <input type="number" value={count} />
        <button
          onClick={() => {
            if (count <= 0) {
              return;
            }
            if (count > 0) {
              setCount((prev) => prev - 1);
              setTotalCount((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            if (count < 20) {
              setCount((prev) => prev + 1);
              setTotalCount((prev) => prev + 1);
            }
          }}
        >
          +
        </button>
      </p>
    </>
  );
};

export default ProductItem;
