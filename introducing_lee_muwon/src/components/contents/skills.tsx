import React, { useEffect, useState } from 'react';

// Get Style File!
import '../../style/App.css';
import '../../style/skills.css';

// Get react-markdown to Write in Markdown
import ReactMarkdown from 'react-markdown';

const Home: React.FC = () => {
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        // add an animation class after mount to trigger CSS animations if needed
        setAnimationClass('active');
    }, []);

    return(
        <div id="skills-container" className={`slide-in-animation ${animationClass}`}>
            <section id="skills" className="section section-alt-skills">
                <h1>What I do</h1>
            </section>
        </div>
    );
}

export default Home;