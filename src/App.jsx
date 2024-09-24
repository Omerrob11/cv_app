import { useState } from "react";
import "./App.css";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const handlePerosnalInfoChnges = function (data) {
    // data should be a new object, so we are not mutating state
    setPersonalData(data);
  };
}

export default App;
