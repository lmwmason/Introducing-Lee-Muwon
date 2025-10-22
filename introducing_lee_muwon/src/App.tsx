import React from 'react';

// Get Style File!
import './style/App.css'; 

// Get layout File!
import Header from './components/layout/header';
import Footer from './components/layout/footer';

// Get contents File!
import Home from './components/contents/home'
import Skills from './components/contents/skills'
import Rates from './components/contents/rates'
import Education from './components/contents/education';
import Achivements from './components/contents/achievements';
import Contact from './components/contents/contact';


const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <Home/>
      <Skills/>
      <Rates />
      <Education />
      <Achivements />
      <Contact />
    </main>
  );
};


const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;