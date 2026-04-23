import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import App from "./App";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
