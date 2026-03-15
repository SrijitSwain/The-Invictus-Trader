import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home/home';
import About from './pages/about/about';
import Cours from './pages/cours/cours';
import Service from './pages/service/service';
import Blog from './pages/blog/blog';
import LinkPage from './pages/link/link';
import Contact from './pages/contact/contact';

const AppRoutes = () => {
    return (
        <Router>
            <App />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cours" element={<Cours />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/link" element={<LinkPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
