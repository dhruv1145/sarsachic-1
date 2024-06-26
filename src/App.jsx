import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ForgetPass from "./pages/ForgetPassword/ForgetPass.jsx";
import NewPassword from "./pages/ForgetPassword/NewPassword.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Hero />} index />
        <Route element={<Login />} path="login" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<ProductPage />} path="products" />
        <Route element={<ForgetPass />} path="forget-password" />
        <Route element={<NewPassword />} path="forget-password/new-password" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
