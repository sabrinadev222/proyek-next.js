import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiFlutter, SiDart, SiVite } from "react-icons/si";
import "./skills.css";
import { JSX } from "react";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Flutter", icon: <SiFlutter color="#02569B" /> },
    { name: "Dart", icon: <SiDart color="#0175C2" /> },
    { name: "Vite", icon: <SiVite color="#646CFF" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#000" /> },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
