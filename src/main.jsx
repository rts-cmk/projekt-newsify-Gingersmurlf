import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router";

import App from "./App";
import NotFound from "./components/notfound"
import Archive from "./components/archive";

import "./scss/style.scss"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/archive" element={<Archive />} />
      {/* <Route path="/favourite" element={<Favourite />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
