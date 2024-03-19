import Header from "./components/header/Header"
import Home from "./components/pages/home/Home"
import Footer from "./components/footer/Footer"
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/pages/contact/Contact"
import Products from "./components/pages/products/Products";

function App() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
