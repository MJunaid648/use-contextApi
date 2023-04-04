import React from "react";
import { userContext } from "./App";
const C = () => {
  const context = React.useContext(userContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "5px",
        border: "5px solid blue",backgroundColor:'rgba(105,152,345,1)'
      }}
    >
      <h2>I am component C </h2>
      <h3>Click button below to change name in SecondB component</h3>
      <button onClick={() => context.toggleName()}>
        CLick me
      </button>
    </div>
  );
};

export default C;
