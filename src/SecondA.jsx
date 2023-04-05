import React from "react";
import SecondB from "./SecondB";

const SecondA = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        padding: "5px",
        border: "5px solid green",
        backgroundColor: "rgba(15,62,421,1)",
      }}
    >
      <h1>Sec A</h1>
      <SecondB />
    </div>
  );
};

export default SecondA;
