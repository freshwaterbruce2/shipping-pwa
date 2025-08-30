import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/responsive.css";
import { registerServiceWorker } from "./utils/registerServiceWorker";
import PwaWrapper from "./components/pwa/PwaWrapper";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PwaWrapper>
      <App />
    </PwaWrapper>
  </React.StrictMode>,
);

// Register service worker for PWA capabilities
registerServiceWorker();
