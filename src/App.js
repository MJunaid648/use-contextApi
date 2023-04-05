import A from "./A";
import React from "react";
import { useState } from "react";
import SecondA from "./SecondA";
import UseRef from "./UseRef";

export const userContext = React.createContext();
function App() {
  const [name, setName] = useState("Junaid");
  const toggleName = () => {
    name === "Junaid" ? setName("Muhammad Junaid") : setName("Junaid");
  };
  return (<>
    <div style={{ backgroundColor: "rgba(15,362,125,1)" }}>
      <h1 style={{ textAlign: "center" }}>App</h1>
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <userContext.Provider value={{ name, toggleName }}>
          <A />
          <SecondA />
        </userContext.Provider>
      </div>
    </div>
    <UseRef/>
    </>
  );
}

export default App;
