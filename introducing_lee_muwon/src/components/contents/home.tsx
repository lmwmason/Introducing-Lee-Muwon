import React, { useEffect, useState } from 'react';

// Get Style File!
import '../../App.css'; 

// Get react-markdown to Write in Markdown
import ReactMarkdown from 'react-markdown';

// Get Icon Components
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
    return(
        <section id="home" className="section section-alt">
        <h1>👋 Hello! I am Lee Muwon(happy coding)!</h1>

        <a href="https://github.com/lmwmason">
            <FaGithub />
            lmwmason
        </a>
        <ReactMarkdown>
            I am a **Frontend Developer**!
        </ReactMarkdown>
        <ReactMarkdown>
            I am using **React**&**TypeScript** for my main frame work and programming language!
        </ReactMarkdown>
        <button className="cta-button">
            Watch Projects
        </button>
        </section>
    );
}

export default Home;