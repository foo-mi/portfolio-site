import React from 'react';

const Intro: React.FC = () => {
  const email = 'foomi.business@gmail.com';

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <section className="intro">
      <h3>Interested in Cloud Technology or Game Design? Let's chat.</h3>

      <p>
        I graduated with a B.A in Computer Science and have 1.5 years of experience in devsecops. I combine creative and technical skills to build engaging web experiences. I have a passion for cloud technology, game design, and all things tech. I'm always eager to connect with like-minded individuals and explore new opportunities.
      </p>
      
      <div className="email-section">
        <p>Feel free to reach out:</p>
        <button 
          onClick={handleEmailClick} 
          className="email-link"
          aria-label="Copy email to clipboard"
        >
          {email}
        </button>
      </div>
    </section>
  );
};

export default Intro;