import React from "react";
import { createRoot } from "react-dom/client";
import createHashHistory from "history/createHashHistory";
import Root from "./root.jsx";

const rootEl = document.getElementById("app-container");
const history = createHashHistory();
const root = createRoot(rootEl);

root.render(<Root history={history} />);
