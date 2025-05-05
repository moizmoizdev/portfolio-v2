import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import SideNav from './components/layout/SideNav';
import HeroSection from './components/sections/Hero';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer';
import { PageTitleProvider } from './context/PageTitleContext';

function App() {
  return (
    <Router>
      <PageTitleProvider>
        <div className="App">
          <Header />
          <div className="app-container">
            <SideNav />
            <div className="content-container">
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </PageTitleProvider>
    </Router>
  );
}

// Home page component that includes the hero section
const Home = () => {
  return (
    <div className="page-transition">
      <HeroSection />
    </div>
  );
};

export default App;
