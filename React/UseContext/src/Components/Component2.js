import React from "react";
import { UseUserContext } from "../App";

function Component2() {
  const { value } = UseUserContext();
  return (
    <div>
      <div>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default Component2;
