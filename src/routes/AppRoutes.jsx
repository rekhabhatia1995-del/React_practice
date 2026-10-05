import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import About from "../components/AboutPage";
import ProductPage from "../components/ProductPage";
import ContactPage from "../components/ContactPage";
import Category from "../components/CatageryPage";
import Login from "../components/Login";
import Navbar from "../Navbar/Navbar";
import Parent from "../props/Parent";
import Detail from "../components/Detail";
import ProtectRoute from "../Protectrounting";
import Cart from "../components/Cart";
import OTP from "../components/OTP";



function AppRoutes() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<ProtectRoute><HomePage /></ProtectRoute> } />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent" element={<Parent/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/cart" element={<Cart/>}/>
         <Route path="/otp" element={<OTP/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;