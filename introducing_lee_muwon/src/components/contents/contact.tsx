import React, { FC } from 'react';
import '../../style/contact.css';
import '../../style/App.css';


const App: FC = () => {
  return (
    <section id="blogs" className="contact">
        <div className="con-div">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <a href="tel:+8201090916420">Contact : 010-9091-6420</a>
                <a href="mailto:lmw.hpc@gmail.com">EMail : lmw.hpc@gmail.com</a>
            </div>
        </div>  
    </section>
  );
};

export default App;