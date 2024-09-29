import { useState } from "react";
import "./App.css";
import ShowCv from "./components/CvShow";
import PersonalInfo from "./components/Personal-info";

function App() {
  // it's an array at the end - so, needs to changes it to array.
  // empty array could do it.
  // this is empty array for the PesronalData on save
  // in the pesronal data, the state is for the inputs
  const [personalData, setPersonalData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  function handlePersonalInfoChanges(data) {
    console.log(data);
    // data should be a new object, so we are not mutating state
    setPersonalData(data);
  }

  return (
    <>
      <ShowCv personalData={personalData} title="Personal Information" />
      <PersonalInfo handlePersonalInfoChanges={handlePersonalInfoChanges} />
    </>
  );
}

export default App;
