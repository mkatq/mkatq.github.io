import React from "react";
import "../App.css";
import AnimatedSection from "./AnimatedSection";

import SkillCard from "./SkillCard";
const Skills = () => {
  const skillData = [
    // Programming Languages
    { skill: "Python", logo: "https://cdn.simpleicons.org/python" },
    { skill: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },

    // Web Development
    { skill: "HTML", logo: "https://cdn.simpleicons.org/html5" },
    { skill: "CSS", logo: "https://cdn.simpleicons.org/css" },
    { skill: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
    { skill: "React", logo: "https://cdn.simpleicons.org/react" },
    { skill: "Express JS", logo: "https://cdn.simpleicons.org/express" },
    { skill: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
    { skill: "Laravel", logo: "https://cdn.simpleicons.org/laravel" },
    { skill: "PHP", logo: "https://cdn.simpleicons.org/php" },

    // Mobile App Development
    { skill: "Flutter", logo: "https://cdn.simpleicons.org/flutter" },
    { skill: "Dart", logo: "https://cdn.simpleicons.org/dart" },

    // Database Management
    { skill: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
    { skill: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
    { skill: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
    { skill: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },

    // DevOps & Tools
    { skill: "Git", logo: "https://cdn.simpleicons.org/git" },
    { skill: "GitHub", logo: "https://cdn.simpleicons.org/github" },
    { skill: "Docker", logo: "https://cdn.simpleicons.org/docker" },
    { skill: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
    { skill: "Terraform", logo: "https://cdn.simpleicons.org/terraform" },
    { skill: "Ansible", logo: "https://cdn.simpleicons.org/ansible" },
    { skill: "Prometheus", logo: "https://cdn.simpleicons.org/prometheus" },
    { skill: "Grafana", logo: "https://cdn.simpleicons.org/grafana" },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <SkillCard key={index} skill={skill.skill} logo={skill.logo} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
