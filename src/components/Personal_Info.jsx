import useFormLogic from "./FormLogic";
import FormHeader from "./form-comp/heafForm";
import FormInputs from "./form-comp/formInputs";
import { SaveButton } from "./form-comp/buttons";
import Footer from "./form-comp/footerForm";
import "../styles/form-style.css";
import { SvgIcon } from "./SvgIcon";

function PersonalInfo({ handlePersonalInfoChanges }) {
  const initialInputs = [
    { name: "", id: crypto.randomUUID() },
    { email: "", id: crypto.randomUUID() },
    { tel: "", id: crypto.randomUUID() },
  ];

  const {
    inputValues,
    isSubmitted,
    submittedValues,
    showForm,
    getInputHandler,
    getObjectIndex,
    handleSubmit,
    toggleForm,
  } = useFormLogic(initialInputs, handlePersonalInfoChanges);

  const title = "Personal Information";

  // const secondHeaing = () => <SvgIcon name="personalInfo" />;
  const inputsConfig = [
    {
      name: "name",
      type: "text",
      id: "full_name",
      label: "full_name",
      placeholder: "Enter your name",
      text: "Full Name:",
      value: inputValues[getObjectIndex("name")].name,
      onChange: getInputHandler("name", getObjectIndex("name")),
    },
    {
      name: "email",
      type: "email",
      id: "email",
      label: "email",
      placeholder: "Enter your email",
      text: "Email:",
      value: inputValues[getObjectIndex("email")].email,
      onChange: getInputHandler("email", getObjectIndex("email")),
    },
    {
      name: "tel",
      type: "tel",
      id: "tel",
      label: "tel",
      placeholder: "Enter your tel number",
      text: "Tel:",
      value: inputValues[getObjectIndex("tel")].tel,
      onChange: getInputHandler("tel", getObjectIndex("tel")),
    },
  ];

  const HeadingPersonalInformationIcon = () => <SvgIcon name="personalInfo" />;

  return (
    <div className="information_component">
      <FormHeader
        title={title}
        icon={<HeadingPersonalInformationIcon />}
        // show form, we show it based on is value
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

export default PersonalInfo;

// DECONSTRUCTING PATTERN:
//name of the assigment should match the property names in the returned object
// than, we can use them when needed.
// the idea of deconstruct - is that you would use them in your code

// idea of custom hooks:
// seperate the renderlogic and state managment to another component
// you will responsbile for only the UI
