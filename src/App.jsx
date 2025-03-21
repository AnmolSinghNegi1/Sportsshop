import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopDetailsPage from './pages/ShopDetailsPage';
import Registerform from "./pages/Registerform";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/:id" element={<ShopDetailsPage />} />
            <Route path="/registerform" element={<Registerform/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;