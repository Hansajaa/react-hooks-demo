import React, { useContext } from "react";
import BaseContext from "../context/BaseContext";
import ThemeContext from "../context/ThemeContext";

function Item(props) {
  const clickMe = useContext(BaseContext);
  const themeColour = useContext(ThemeContext);

  return (
    <div>
      <p>{props.name}</p>
      <button style={{backgroundColor:themeColour,color:"black"}} onClick={clickMe}>buy</button>
    </div>
  );
}

export default Item;
