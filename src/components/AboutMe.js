import React from 'react';
import profile_photo from '../images/artem.jpeg';
import wallet from '../images/wallet.jpg';

const AboutMe = () => {
  return (
    <div id="about-me" className="section">
      <div className="pageHeader-container">
        <h1>ABOUT PROJECT</h1>
        <p>and me</p>
      </div>
      <img src={profile_photo} alt="profile_photo" className="profile_photo" />
      <p className="aboutProject">
        Hello!<br /><br />
        I'm Artem, a 35-year-old engineer with a passion for leathercraft. In my quest for a fulfilling hobby, I discovered the enchanting world of leatherworking, and it has become a significant part of my life. Creating leather goods is not just a pastime for me; it is a form of meditation and a profound source of inspiration.<br /><br />
        Every project I undertake is crafted with meticulous care and dedication. The process of transforming raw leather into beautiful, functional items is both a challenge and a joy, providing me with a sense of accomplishment and peace.<br /><br />
        Whether it's a custom order or a personal project, I pour my heart and soul into every piece. I believe in sharing this passion with others and continuously strive to develop my skills and expand my creative horizons. Through this website, I invite you to explore my work, learn about my journey, and perhaps find inspiration for your own.<br /><br />
        Thank you for visiting my site. Let's embark on this creative journey together!<br /><br />
        Best regards,<br />
        Artem
      </p>
      <img src={wallet} alt="wallet" className="wallet" />
    </div>
  );
};

export default AboutMe;