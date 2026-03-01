import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/AuthPages/LoginPage";
import SignUpPage from "../pages/AuthPages/SignUpPage";
import Layout from "../layout/Layout";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
    </Routes>
  );
}
