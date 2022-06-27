import { useState } from "react";

import "./App.css";

import { Top } from "./components/Fixed/Top/Top";
import { Columns } from "./components/Columns";
import { Footer } from "./components/Fixed/Footer/Footer";

import { Keys } from "./components/Common/Keys";
import { Cols } from "./components/Common/Cols";

export const App = () => {
  const [cols, setCols] = useState(Cols.getInitial());
  const [keys, setKeys] = useState(Keys.getInitial());

  window.setCols = setCols;
  window.setKeys = setKeys;

  window.onpopstate = () => {
    const keysFromHistory = true;
    setKeys([...Keys.getKeysFromUrl(), keysFromHistory]);
  };

  window.onresize = () => {
    window.innerWidth > 992
      ? setCols({ left: true, middle: true, right: true })
      : setCols({ left: false, middle: true, right: false });
  };

  return (
    <div className="App">
      <Top cols={cols} />
      <Columns keys={keys} cols={cols} />
      <Footer keys={keys} />
    </div>
  );
};
