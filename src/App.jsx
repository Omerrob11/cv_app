import { useState } from "react";
import "./App.css";
import ShowCv from "./components/CvShow";
import Education from "./components/Education";
import PersonalInfo from "./components/Personal_Info";
import Experience from "./components/Experience";

function App() {
  // it's an array at the end - so, needs to changes it to array.
  // empty array could do it.
  // this is empty array for the PesronalData on save
  // in the pesronal data, the state is for the inputs
  const [educationData, setEducationData] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  function handleEducationInfoChanges(data) {
    // assumming we get a new reference, not the actual state
    setEducationData(data);
  }

  function handlePersonalInfoChanges(data) {
    // data should be a new object, so we are not mutating state
    setPersonalData(data);
  }

  function handleExperienceInfoChanges(data) {
    setExperienceData(data);
  }

  return (
    <>
      {educationData.length > 0 && (
        <ShowCv compData={educationData} title="Education Information" />
      )}

      <Education handleEducationInfoChanges={handleEducationInfoChanges} />
      <PersonalInfo handlePersonalInfoChanges={handlePersonalInfoChanges} />
      {personalData.length > 0 && (
        <ShowCv compData={personalData} title="Personal Information 2" />
      )}

      <Experience handleExperienceInfoChanges={handleExperienceInfoChanges} />
    </>
  );
}

export default App;
