import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import HeroSection from './components/sections/Hero';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-container">
          <SideNav />
          <div className="content-container">
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<div>Skills Page Content</div>} />
                <Route path="/projects" element={<div>Projects Page Content</div>} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

// Home page component that includes the hero section
const Home = () => {
  return (
    <div className="page-transition">
      <HeroSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
