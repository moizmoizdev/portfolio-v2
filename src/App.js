import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<div>Home Page Content</div>} />
              <Route path="/education" element={<div>Education Page Content</div>} />
              <Route path="/projects" element={<div>Projects Page Content</div>} />
              <Route path="/contact" element={<div>Contact Page Content</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
