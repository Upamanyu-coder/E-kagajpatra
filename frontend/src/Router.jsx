import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layout/Layout";
import App from "./App";
import Services from "./Pages/Services";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import NotFoundPage from "./Pages/NotFound";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
