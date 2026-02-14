import React from "react";
import Menu from "./components/Menu/menu.jsx";

function App(props) {
  return (
    <div>
      <Menu></Menu>
      {props.children}
    </div>
  );
}

export default App;
