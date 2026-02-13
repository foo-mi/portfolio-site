import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a passionate software engineer with a love for building elegant solutions to complex problems.
          With experience in full-stack development, cloud infrastructure, and DevOps, I focus on creating scalable and performant applications.
        </p>
        <h3>Skills & Technologies</h3>
        <ul>
          <li>Cloud: AWS (EC2, IAM, VPC, Lambda)</li>
          <li>Frontend: React, TypeScript</li>
          <li>Backend: Java, Python, Go, C++</li>
          <li>Infrastructure: Docker, Kubernetes, Terraform</li>
          <li>Automation: Ansible, Bash</li>
        </ul>
        <h3>Experience</h3>
        <p>
          I am a Software Engineer with a B.A. in Computer Science from Texas State University, bringing hands-on experience in cloud infrastructure and DevSecOps from my role as Associate Consultant at Oteemo. I've contributed to federal projects involving container security, observability tools, and infrastructure automation using AWS, Terraform, Ansible, and Kubernetes. My technical skill set spans full-stack development with React and TypeScript, along with strong foundations in multiple programming languages including Python, Java, C++, and Go.
        </p>
      </div>
    </section>
  );
};

export default About;
