import React, { useRef } from "react";
import { Ref } from "react";

const UseRef = () => {
  const refFocus = useRef("");
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>UseRef Hook</h1>
      <input
        style={{ width: "250px" }}
        ref={refFocus}
        placeholder="I will be focused by clicking button below"
      />
      <button onClick={() => refFocus.current.focus()}>focus</button>
    </div>
  );
};

export default UseRef;
