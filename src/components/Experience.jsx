import useFormLogic from "./FormLogic";
import FormHeader from "./form-comp/heafForm";
import FormInputs from "./form-comp/formInputs";
import { SaveButton } from "./form-comp/buttons";
import Footer from "./form-comp/footerForm";
import "../styles/form-style.css";

function Experience() {
  const intialInputs = [
    { jobTitle: "", id: crypto.randomUUID() },
    { company: "", id: crypto.randomUUID() },
    { startDate: "", id: crypto.randomUUID() },
    { endDate: "", id: crypto.randomUUID() },
    { description: "", id: crypto.randomUUID() },
  ];
}
