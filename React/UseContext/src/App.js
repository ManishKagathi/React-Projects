import "./styles.css";
import React, { useContext } from "react";
import Component2 from "./Components/Component2";

export const UserContext = React.createContext();
export const UseUserContext = () => useContext(UserContext);

export default function App() {
  const props = {
    value: "Hello CodeSandbox"
  };
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1> */}
      <UserContext.Provider value={props}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
}
