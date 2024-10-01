import Child from "./child";
import { useState } from "react";

function BtnComp({ handleChange }) {
  return (
    <div>
      <button onClick={handleChange}>press me</button>
    </div>
  );
}
function Father() {
  const [state, setState] = useState("inital");
  let thisIs = "init";
  function lala() {
    debugger;
    console.log("are we changing");
    setState("dod");
    thisIs = "zzzzz";
  }
  return (
    <div>
      <BtnComp handleChange={lala} />
      <Child title={state} />
    </div>
  );
}

export default Father;
