import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PersonalInfo from "./components/Personal-info";
import "./index.css";
function RenderContent(props) {
  console.log(props);
  return <div></div>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersonalInfo />
  </StrictMode>
);
