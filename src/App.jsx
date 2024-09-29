import { useState } from "react";
import "./App.css";
import ShowCv from "./components/CvShow";
import PersonalInfo from "./components/Personal-info";
import Education from "./components/Education";

function App() {
  // it's an array at the end - so, needs to changes it to array.
  // empty array could do it.
  // this is empty array for the PesronalData on save
  // in the pesronal data, the state is for the inputs
  const [personalData, setPersonalData] = useState([]);
  const [educationData, setEducationData] = useState([]);

  function handleEducationInfoChanges(data) {
    // assumming we get a new reference, not the actual state
    setEducationData(data);
  }

  function handlePersonalInfoChanges(data) {
    // data should be a new object, so we are not mutating state
    setPersonalData(data);
  }

  return (
    <>
      {personalData.length > 0 && (
        <ShowCv compData={personalData} title="Personal Information" />
      )}
      {educationData.length > 0 && (
        <ShowCv compData={educationData} title="Education Information" />
      )}

      <PersonalInfo handlePersonalInfoChanges={handlePersonalInfoChanges} />
      <Education handleEducationInfoChanges={handleEducationInfoChanges} />
    </>
  );
}

export default App;
