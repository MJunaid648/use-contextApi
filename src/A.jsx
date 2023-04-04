import React from "react";
import B from "./B";

const A = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "5px",
        border: "5px solid green",
      }}
    >
      <h1>I am component A</h1>
      <B />
    </div>
  );
};

export default A;
