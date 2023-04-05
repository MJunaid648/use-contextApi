import React, { useContext } from "react";
import { userContext } from "./App";

const SecondB = () => {
  let context = useContext(userContext);
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      padding: "5px",
      border: "5px solid blue",backgroundColor:'rgba(158,262,25,1)'
    }}>
      <h1>Sec B</h1>
      <h3>component C sets name as: </h3>
      <h3>{context.name}</h3>
    </div>
  );
};

export default SecondB;
