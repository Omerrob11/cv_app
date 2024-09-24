import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import PersonalInfo from "./components/Personal-info";
import "./index.css";
function RenderContent(props) {
  console.log(props);
  return <div></div>;
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
