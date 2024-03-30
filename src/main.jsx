import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LaptopProvider from "./component/context/LaptopProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LaptopProvider>
      <App />
    </LaptopProvider>
  </React.StrictMode>
);
