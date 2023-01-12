import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalCss from "./utils/global.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<BrowserRouter>
		<GlobalCss />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
);
