import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>
        Welcome to the Note-Taking App! This app allows users to manage their
        personal notes with ease. You can sign up, log in, create new notes,
        edit existing notes, and delete them as needed.
      </p>
      <p>
        Whether you are organizing ideas, tracking tasks, or simply keeping
        your thoughts in one place, this app is designed to help you stay
        productive and organized.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Sign up and log in to your personal account.</li>
        <li>Create, edit, and delete your notes.</li>
        <li>Organize your notes by content and dates.</li>
        <li>Simple and easy-to-use interface.</li>
      </ul>
      <h2>Technologies Used</h2>
      <ul>
        <li>Frontend: React</li>
        <li>Backend: Node.js with Express</li>
        <li>Database: MongoDB</li>
      </ul>
      <h2>About the Developer</h2>
      <p>
        This app was created by A.Anandhi , a passionate developer with an
        interest in building full-stack applications. The aim is to create a
        seamless and user-friendly note-taking experience.
      </p>
    </div>
  );
};

export default About;
