import React from 'react';

// Get Style File!
import './style/App.css'; 

// Get layout File!
import Header from './components/layout/header';
import Footer from './components/layout/footer';

// Get contents File!
import Home from './components/contents/home'
import Skills from './components/contents/skills'


const MainContent: React.FC = () => {
  return (
    <main className="main-content">
      <Home/>
      <Skills/>


      <section id="projects" className="section section-alt">
        <h2>주요 프로젝트 (Projects)</h2>
        <div className="project-card">
          <h3>프로젝트 A: [서비스 이름]</h3>
          <p>사용자 역할: [기능 요약]</p>
          <p>사용 기술: React, TypeScript, Styled-Components</p>
          <a href="[GitHub Repo]" target="_blank" rel="noopener noreferrer">코드 보기</a>
        </div>
        <div className="project-card">
          <h3>프로젝트 B: [서비스 이름]</h3>
          <p>사용자 역할: [기능 요약]</p>
          <p>사용 기술: Vue.js, Firebase, SCSS</p>
          <a href="[GitHub Repo]" target="_blank" rel="noopener noreferrer">코드 보기</a>
        </div>
      </section>
      

      <section id="contact" className="section">
        <h2>연락처 (Contact)</h2>
        <p>이메일: <a href="mailto:your-email@example.com">[your-email@example.com]</a></p>
        <p>LinkedIn: <a href="[LinkedIn 주소]" target="_blank" rel="noopener noreferrer">연결</a></p>
      </section>
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