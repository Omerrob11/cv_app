import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/Personal-info";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  function handlePersonalInfoChanges(data) {
    // data should be a new object, so we are not mutating state
    console.log(data);
    setPersonalData(data);
  }

  return (
    <>
      <PersonalInfo handlePersonalInfoChanges={handlePersonalInfoChanges} />
    </>
  );
}

export default App;
