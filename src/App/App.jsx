import { useState } from "react";
import "./App.css";
import ProductItem from "../Components/ProductItem";

const App = () => {
  const [totalCount, setTotalCount] = useState(0);
  return (
    <section>
      <h1>장바구니</h1>
      <p>총 상품 개수: {totalCount}</p>
      <ul>
        <li>
          <ProductItem
            name="세제"
            price={13500}
            setTotalCount={setTotalCount}
          ></ProductItem>
        </li>
        <li>
          <ProductItem
            name="도서"
            price={42000}
            setTotalCount={setTotalCount}
          ></ProductItem>
        </li>
      </ul>
    </section>
  );
};

export default App;
