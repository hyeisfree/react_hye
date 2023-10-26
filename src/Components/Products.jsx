import React, { useEffect, useState } from "react";

function Products() {
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      //삼항연산자 ?
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 잘 받아왔음! 🪺");
        setProducts(data);
      });
    return () => {
      console.log("청소부가 정리합니다. 🔥");
    };
  }, [checked]);
  // 위에 있는 [] 이거는 의존성 배열.. useEffect 관련해서 찾아보기
  // useEffect (() => {}, []); ()는 콜백 함수

  return (
    <>
      <input
        type="checkbox"
        id="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">할인하고 있는 상품들만 보기! 💘</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
