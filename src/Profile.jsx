import "./App.css";

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  return (
    <div className="App" style={style}>
      <MyHeader />
      <h2>안녕 리액트</h2>
      <b>React.js</b>
      <MyFooter />
    </div>
  );
}

export default App;
