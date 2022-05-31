import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Connect } from "@stacks/connect-react";
import { Buffer } from "@stacks/common";

import { userSession } from "./components/ConnectWallet";

global.Buffer = Buffer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Connect
      authOptions={{
        appDetails: {
          name: "Stacks React Template",
          // todo:
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <App />
    </Connect>
  </React.StrictMode>
);
