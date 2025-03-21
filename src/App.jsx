import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
