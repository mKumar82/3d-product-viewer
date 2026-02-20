import ReactDOM from "react-dom/client";
import App from "./App";
import { ViewerProvider } from "./context/ViewerContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ViewerProvider>
    <App />
  </ViewerProvider>,
);
