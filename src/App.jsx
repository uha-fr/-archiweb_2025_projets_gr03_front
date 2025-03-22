import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
