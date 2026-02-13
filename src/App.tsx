import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Updates from './components/Updates';
import Miscellaneous from './components/Miscellaneous';
import About from './pages/About';
import Footer from './components/Footer';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <AnimatedBackground />
        <div className="container">
          <Header />
        <BrowserRouter basename="/portfolio-site">
          <Routes>
            <Route path="/" element={
              <>
                <Intro />
                <Projects />
                <Updates />
                <Miscellaneous />
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default App;
