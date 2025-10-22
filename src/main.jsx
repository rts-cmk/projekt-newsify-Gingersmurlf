import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { motion } from "motion/react";

import App from "./App";
import NotFound from "./components/notfound";
import Archive from "./components/archive";
import Favourite from "./components/favourite";
import Settings from "./components/settings";
import Splash from "./components/splashscreen";
import FirstTime from "./components/firsttime";

import "./scss/style.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/firsttime" element={<FirstTime />} />
      <Route path="/home" element={<App /> } />
      <Route path="/archive" element={<Archive />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
