import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./components/NavBar/NavBar";

const App = () => (
  <div>
    <NavBar />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
