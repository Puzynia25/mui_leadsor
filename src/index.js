import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactFlowProvider } from "@xyflow/react";

import "./index.css";
import theme from "./utils/theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ReactFlowProvider>
                <App />
            </ReactFlowProvider>
        </ThemeProvider>
    </React.StrictMode>
);
