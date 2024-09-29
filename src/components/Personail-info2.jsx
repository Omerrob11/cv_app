import useFormLogic from "./FormLogic";
import FormHeader from "./form-comp/heafForm";

function PersonalInfo2({ handlePersonalInfoChanges }) {
  const initalInputs = [
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
  const headingPerosnalInformationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        className="icon"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z"
      />
    </svg>
  );

  return (
    <div className="information_component">
      <FormHeader
        title={title}
        icon={headingPerosnalInformationIcon}
        // show form, we show it based on is value
        toggleForm={toggleForm}
      />
      {showForm && (
        <form
          className="form_container"
          onSubmit={(e) => {
            e.preventDefault();
            handlePersonalInfoChanges([...inputValues]);
            setSubmittedValues([...inputValues]);
            setShowForm(false);
            if (!isSubmitted) {
              setIsSubmitted(true);
            }
          }}
        >
          <FormInputs inputsArr={inputsConfig} />
          <SaveButton />
        </form>
      )}
    </div>
  );
}

// DECONSTRUCTING PATTERN:
//name of the assigment should match the property names in the returned object
// than, we can use them when needed.
// the idea of deconstruct - is that you would use them in your code

// idea of custom hooks:
// seperate the renderlogic and state managment to another component
// you will responsbile for only the UI
