import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import CustomerLogin from './components/CustomerLogin';
import DesignTool from './components/DesignTool';
import CustomerPortal from './components/CustomerPortal';
import Payment from './components/Payment';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<CustomerLogin />} />
            <Route path="/design" element={<DesignTool />} />
            <Route path="/portal" element={<CustomerPortal />} />
            <Route path="/payment" element={<Payment amount={200} />} /> {/* Example amount */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
