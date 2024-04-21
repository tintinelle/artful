import React from "react";
import ReactDOM from "react-dom/client";
import "./style/css/normalize.css";
import "./style/css/fonts.scss";
import "./style/css/global.scss";
import "./style/css/mixins.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Practice from "./pages/Practice";
import Feedbacks from "./pages/Feedbacks";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import Services from "./pages/Services";
import ServiceSingle from "./pages/ServiceSingle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<About />} />
      <Route path="practice" element={<Practice />} />
      <Route path="feedbacks" element={<Feedbacks />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="news" element={<News />} />
      <Route path="services" element={<Services />} />
      <Route path="services/:category" element={<Services />} />
      <Route path="services/service" element={<ServiceSingle />} />
    </Routes>
  </BrowserRouter>
);
