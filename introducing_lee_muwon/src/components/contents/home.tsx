import React, { useEffect, useState } from 'react';

// Get Style File!
import '../../style/App.css';
import '../../style/home.css';

// Get react-markdown to Write in Markdown
import ReactMarkdown from 'react-markdown';

// Get Icon Components
import { faGithub, faYoutube, faBlogger, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Import assets
import Ani from '../../assets/Coding Develio.gif';

const Home: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    const animationClass = isLoaded ? 'animate-in' : 'initial-state';
    
    return(
        <div id="home-container" className={`slide-in-animation ${animationClass}`}>
            <section id="home" className="section section-alt">
            <h1>
                Hi! I'm Lee Muwon!  <span className="waving-hand">👋</span>
            </h1>

            <div className="markdown-container">
                <ReactMarkdown>
                    {`A frontend and embedded developer with a passion for crafting engaging and user-friendly web experiences, 
                and a drive to use code to solve my own daily frustrations.  
                Skilled in React/TypeScript/Cpp/Arduino/RaspberryPi and modern web/engineering technologies.  
                I love turning complex problems into simple, beautiful, and intuitive designs.  
                When I'm not coding, you can find me exploring the latest tech trends or contributing to open-source projects.`}
                </ReactMarkdown>
            </div>
            <a
                href={"https://github.com/lmwmason"}
                className="github-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} />
                <span></span>
            </a>

            <a
                href={"https://happycoding1.tistory.com/"}
                className="tstory-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faBlogger} />
                <span></span>
            </a>

            <a
                href={"https://www.youtube.com/@GRASS_CODING"}
                className="youtube-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube} />
                <span></span>
            </a>

            <a
                href={"mailto:lmw.hpc@gmail.com"}
                className="email-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} />
                <span></span>
            </a>

            <a
                href={"https://stackoverflow.com/users/31631734/happy-coding"}
                className="stack-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faStackOverflow} />
                <span></span>
            </a>
        </section>
        <div className="home-image-container">
            <DotLottieReact
            src="https://lottie.host/b61b6e16-6e82-4529-8b4f-bd979f54ce5f/3Qzx9ll39q.lottie"
            loop
            autoplay
            />
        </div>
        </div>
    );
}

export default Home;