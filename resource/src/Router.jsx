import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/Pages/client/Home"
import About from "./assets/Pages/client/About"
import Header from "./assets/Layout/Header"
import NotFoundPage from "./assets/Pages/client/NotFoundPage"
import Products from "./assets/Pages/client/Products"
import ProductDetails from "./assets/Pages/client/ProductDetails"
import "./assets/css/reset.css"
import Footer from "./assets/Layout/Footer"
import Blog from "./assets/Pages/client/Blog"
import Contact from "./assets/Pages/client/Contact"
import LogIn from "./assets/Pages/client/auth/LogIn"
import ForgotPassword from "./assets/Pages/client/ForgotPassword"
import OTP from "./assets/Pages/client/OTP"
import SignUp from "./assets/Pages/client/SignUp"
import { ProductProvider } from "./assets/context/ProductProvider"
import Basket from "./assets/Pages/client/Basket"
import ProductList from "./assets/Pages/admin/product/ProductList"
import Dashboard from "./assets/Pages/admin/Dashboard"
import CategoryAdd from "./assets/Pages/admin/category/CategoryAdd"
import CategoryList from "./assets/Pages/admin/category/CategoryList"
import ProductAdd from "./assets/Pages/admin/product/ProductAdd"
import ProductEdit from "./assets/Pages/admin/product/ProductEdit"
import CategoryEdit from "./assets/Pages/admin/category/CategoryEdit"

const Router = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/otp" element={<OTP />}></Route>
          <Route path="/basket" element={<Basket />}></Route>

          {/* DASHBOARD */}

          <Route path="/dashboard" element={<Dashboard />}></Route>

          {/* DASHBOARD PRODUCT */}


          <Route path="/dashboard/product" element={<ProductList />}></Route>
          <Route path="/dashboard/product/add" element={<ProductAdd />}></Route>
          <Route path="/dashboard/product/edit/:id" element={<ProductEdit />}></Route>


          {/* DASHBOARD CATEGORY */}


          <Route path="/dashboard/category" element={<CategoryList />}></Route>
          <Route path="/dashboard/category/add" element={<CategoryAdd />}></Route>
          <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />}></Route>



        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductProvider>
  )
}

export default Router;