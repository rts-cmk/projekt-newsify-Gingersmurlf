import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";

import NotFound from "./components/main-routes/notfound";
import Archive from "./components/main-routes/archive";
import Favourite from "./components/main-routes/favourite";
import Settings from "./components/main-routes/settings";
import Splash from "./components/main-routes/splashscreen";
import Login from "./components/main-routes/login";

import Onboarding1 from "./components/onboarding/onboarding1";
import Onboarding2 from "./components/onboarding/onboarding2";
import Onboarding3 from "./components/onboarding/onboarding3";

import "./scss/style.scss";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
