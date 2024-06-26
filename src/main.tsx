import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LocaleProvider from "./providers/LocaleProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LocaleProvider>
    <App />
  </LocaleProvider>
);
