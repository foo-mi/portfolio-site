import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="section">
      <h2>
        Projects
        <a href="/games" className="view-all">view all</a>
      </h2>
      
      <div className="featured-section">
        <span className="featured-label">FEATURED</span>
        <div style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
          Featured game preview area
        </div>
      </div>

      <div className="projects-grid">
        <div className="projects-empty">
          [Projects will appear here]
        </div>
      </div>
    </section>
  );
};

export default Projects;
