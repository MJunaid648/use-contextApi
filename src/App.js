import A from "./A";
import React from "react";
import { useState } from "react";
import SecondA from "./SecondA";

export const userContext = React.createContext();
function App() {
  const [name, setName] = useState("Junaid");
  const toggleName = () => {
    name === "Junaid" ? setName("Muhammad Junaid") : setName("Junaid");
  };
  return (
    <>
      <h1>App</h1>
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "25px",
          backgroundColor: "rgba(15,362,125,1)",
        }}
      >
        <userContext.Provider value={{ name, toggleName }}>
          <A />
          <SecondA />
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
