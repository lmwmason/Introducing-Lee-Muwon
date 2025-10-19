import React, { useEffect, useState } from 'react';

// Get Style File!
import '../../style/App.css';
import '../../style/skills.css';

// Get react-markdown to Write in Markdown
import ReactMarkdown from 'react-markdown';

// Get Icon Components
import { faReact, faJs, faNpm, faHtml5, faCss3, faPython, faUbuntu, faLinux } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';



import { 
    SiTypescript as TSIcon, 
    SiArduino as ArduinoIcon, 
    SiRaspberrypi as RaspberryPiIcon, 
    SiPlatformio as PlatformIOIcon,
    SiC as CIcon,
    SiCplusplus as CppIcon,
    SiUnity as UnityIcon, 
    SiKalilinux as KaliLinuxIcon,
    SiFlutter as FlutterIcon,
    SiDart as DartIcon, 
    SiKicad as KiCadIcon, 
    SiAutocad as AutoCADIcon
} from "react-icons/si";

import { DiDotnet as DotnetIcon } from "react-icons/di";
import { MdOutline3dRotation as ThreeDIcon } from "react-icons/md";

const SiTypescript = TSIcon as unknown as React.FC<any>;
const SiArduino = ArduinoIcon as unknown as React.FC<any>;
const SiRaspberrypi = RaspberryPiIcon as unknown as React.FC<any>;
const SiPlatformio = PlatformIOIcon as unknown as React.FC<any>;
const SiC = CIcon as unknown as React.FC<any>;
const SiCpp = CppIcon as unknown as React.FC<any>;
const SiUnity = UnityIcon as unknown as React.FC<any>;
const SiKalilinux = KaliLinuxIcon as unknown as React.FC<any>;
const SiFlutter = FlutterIcon as unknown as React.FC<any>;
const SiDart = DartIcon as unknown as React.FC<any>;
const SiKicad = KiCadIcon as unknown as React.FC<any>;
const SiAutocad = AutoCADIcon as unknown as React.FC<any>;
const DiDotnet = DotnetIcon as unknown as React.FC<any>;
const MdOutline3dRotation = ThreeDIcon as unknown as React.FC<any>;

const Home: React.FC = () => {
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        setAnimationClass('active');
    }, []);

    return(
        <div id="skills-container" className={`slide-in-animation ${animationClass}`}>
            
            <section id="skills" className="section section-alt-skills">
            <div className="skills-content-container">
            <section id="skills" className="section-img-skills">
                <div className="skills-image-container">
                <DotLottieReact
                src="https://lottie.host/2c0eb707-b5a4-46c7-9db9-b9d12f2fe333/kELx6JpVK9.lottie"
                loop
                autoplay
                />
            </div>
            </section>
            <section id="skills-text" className="section-text-skills">
            <h1> What I do</h1>
            <div className="markdown-container-skills">
                <ReactMarkdown>
                    {`Frontend/embedded developer who makes web and products to solve my daily frustrations.`}
                </ReactMarkdown>
            </div>
                
                <div id="skills-list"> 
                    
                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faReact} />
                        <p className='skills_li_tx'>React</p>
                    </p>
                    
                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiTypescript/>
                        <p className='skills_li_tx'>TypeScript</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faJs} />
                        <p className='skills_li_tx'>JavaScript</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faNpm} />
                        <p className='skills_li_tx'>npm</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faHtml5} />
                        <p className='skills_li_tx'>Html 5</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faCss3} />
                        <p className='skills_li_tx'>Css 3</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiArduino/>
                        <p className='skills_li_tx'>Arduino</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiRaspberrypi/>
                        <p className='skills_li_tx'>Raspberry Pi</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiPlatformio/>
                        <p className='skills_li_tx'>Platform IO</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiKicad/>
                        <p className='skills_li_tx'>Kicad</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiAutocad/>
                        <p className='skills_li_tx'>AutoCad</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <MdOutline3dRotation/>
                        <p className='skills_li_tx'>Fusion 360</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiC/>
                        <p className='skills_li_tx'>C</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiCpp/>
                        <p className='skills_li_tx'>C++</p>
                    </p>

                     <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiUnity/>
                        <p className='skills_li_tx'>Unity</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <DiDotnet/>
                        <p className='skills_li_tx'>C#</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faPython} />
                        <p className='skills_li_tx'>Python</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiFlutter/>
                        <p className='skills_li_tx'>Flutter</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiDart/>
                        <p className='skills_li_tx'>Dart</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinux} />
                        <p className='skills_li_tx'>Linux</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faUbuntu} />
                        <p className='skills_li_tx'>Ubuntu</p>
                    </p>

                    <p
                        className="skills_li"
                        rel="noopener noreferrer"
                    >
                        <SiKalilinux/>
                        <p className='skills_li_tx'>Kali Linux</p>
                    </p>
                    
                    </div>
                </section>
                </div>
            </section>
        </div>
    );
}

export default Home;    