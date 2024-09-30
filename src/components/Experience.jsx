import useFormLogic from "./FormLogic";
import FormHeader from "./form-comp/heafForm";
import FormInputs from "./form-comp/formInputs";
import { SaveButton } from "./form-comp/buttons";
import Footer from "./form-comp/footerForm";
import "../styles/form-style.css";

export default function Experience(handleExperienceInfoChanges) {
  const initialInputs = [
    { jobTitle: "", id: crypto.randomUUID() },
    { company: "", id: crypto.randomUUID() },
    { startDate: "", id: crypto.randomUUID() },
    { endDate: "", id: crypto.randomUUID() },
    { description: "", id: crypto.randomUUID() },
  ];

  const {
    inputValues,
    isSubmitted,
    submittedValues,
    showForm,
    getInputHandler,
    getObjectIndex,
    toggleForm,
    handleSubmit,
  } = useFormLogic(initialInputs, handleExperienceInfoChanges);

  const headingExperienceIcon = getComponentIcon();
  const title = "Experience";
  // last 2 line - by the keys of the inputVaLUES

  const inputsConfig = [
    {
      name: "jobTitle",
      type: "text",
      id: "job_title",
      label: "job_title",
      placeholder: "Enter your job Title",
      text: "JobTitle",
      value: inputValues[getObjectIndex("jobTitle")].jobTitle,
      onChange: getInputHandler("name", getObjectIndex("name")),
    },
    {
      name: "startDate",
      type: "date",
      id: "start_date",
      label: "start Date",
      placeholder: "Enter your start Date",
      text: "Start Date:",
      value: inputValues[getObjectIndex("startDate")].startDate,
      onChange: getInputHandler("startDate", getObjectIndex("startDate")),
    },
    {
      name: "endDate",
      type: "date",
      id: "end_date",
      label: "end Date",
      placeholder: "Enter your end Date",
      text: "End DATE:",
      value: inputValues[getObjectIndex("endDate")].endDate,
      onChange: getInputHandler("endDate", getObjectIndex("endDate")),
    },
    {
      name: "company",
      type: "text",
      id: "company",
      label: "company",
      placeholder: "Enter your company",
      text: "Company:",
      value: inputValues[getObjectIndex("company")].company,
      onChange: getInputHandler("company", getObjectIndex("company")),
    },
    {
      name: "description",
      type: "text",
      id: "description",
      label: "description",
      placeholder: "Enter your description",
      text: "Description:",
      value: inputValues[getObjectIndex("description")].description,
      onChange: getInputHandler("description", getObjectIndex("description")),
    },
  ];

  return (
    <div className="experience_component">
      <FormHeader
        title={title}
        icon={headingExperienceIcon}
        toggleForm={toggleForm}
      />
      {showForm && (
        <form className="form_container" onSubmit={handleSubmit}>
          <FormInputs inputsArr={inputsConfig} />
          <SaveButton />
        </form>
      )}

      {isSubmitted && (
        <Footer inputsDataArr={submittedValues} toggleForm={toggleForm} />
      )}
    </div>
  );
}

function getComponentIcon() {
  const jobExperienceIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        className="icon"
        d="M16 8c0-2.21-1.79-4-4-4S8 5.79 8 8v4H6v10h12V12h-2V8zm-4-2c1.1 0 2 .9 2 2v4H10V8c0-1.1.9-2 2-2z"
      />
    </svg>
  );
  return jobExperienceIcon;
}
