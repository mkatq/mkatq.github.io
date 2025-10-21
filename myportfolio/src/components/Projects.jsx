import React from "react";
import ProjectCard from "./ProjectCard";
import "../App.css";

const Projects = () => {
  const projectData = [
    {
      classn: "project-image",
      title: "Coffee Order App",
      description:
        "Developed a real-time Flutter application enabling users to order coffee from multiple shops. Implemented features like shop location tracking, wait time estimation, and crowd level detection. Integrated AI-powered NLP to analyze user feedback and automatically generate trustworthy ratings.",
      images: [
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/1.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/2.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/3.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/10.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/4.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/5.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/11.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/6.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/7.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/8.png",
      ],
      tools: ["Flutter", "Firebase", "Google Maps", "RESTful APIs"],
      logos: [
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/firebase",
        "https://cdn.simpleicons.org/dart",
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/docker",
        "https://cdn.simpleicons.org/google",
        "https://cdn.simpleicons.org/figma",
      ],
      liveLink: "https://example.com/coffee-order-app",
      gitHubLink: "https://github.com/mkatq/coffee_order_application",

      appicon:
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P1/coffeeicon.png",
    },

    {
      classn: "project-image",
      title: "Tamirah",
      description:
        "Designed a mobile app for real-time classification of dates fruit images. Achieved 97% accuracy using a Convolutional Neural Network (CNN) model.",
      images: [
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P4/1.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P4/2.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P4/3.png",
      ],
      tools: [
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/tensorflow",
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/figma",
      ],
      logos: [
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/dart",
        "https://cdn.simpleicons.org/python",
        "https://cdn.simpleicons.org/tensorflow",
        "https://cdn.simpleicons.org/googlecolab",
      ],
      liveLink: "https://example.com/dates-fruit-classification",
      gitHubLink: "https://github.com/mkatq/Dates_Fruit_Classification_App",
      appicon:
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749506517/assets/P4/datesappicon.png",
    },
    {
      classn: "project-image1",
      title: "Receptionist Task Management System",
      description:
        "Built a Laravel-based system to streamline receptionist workflows, including appointment scheduling, visitor tracking, and task management.",
      images: [
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600411/assets/P3/view-front.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600408/assets/P3/add-front.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600411/assets/P3/update-front.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600408/assets/P3/delete-front.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600408/assets/P3/reports-front.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749600407/assets/P3/admin-front.png",
      ],
      tools: ["Laravel", "JavaScript", "HTML/CSS", "MySQL"],
      logos: [
        "https://cdn.simpleicons.org/laravel",
        "https://cdn.simpleicons.org/html5",
        "https://cdn.simpleicons.org/css",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/bootstrap",
        "https://cdn.simpleicons.org/mysql",
      ],
      liveLink: "https://example.com/receptionist-optimization",
      gitHubLink: "https://github.com/user/receptionist-optimization",
      appicon:
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749511106/assets/P3/download_2.png",
    },
    
    {
      classn: "project-image1",
      title: "DevOps Pipeline for a Cloud-Native Microservices App",
      description:
        "Designed and deployed a scalable microservices application on Kubernetes using Docker, while automating infrastructure provisioning and CI/CD pipelines with Terraform, Ansible, and Azure Pipelines. Integrated tools like SonarQube for code quality analysis and Prometheus with Grafana for real-time monitoring and observability.",
      images: [
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/2.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/3.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/1.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/8.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/4.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/6.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/5.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752425071/assets/P6/7.png",
      ],
      tools: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Azure Pipelines",
        "SonarQube",
        "Prometheus",
        "Grafana",
      ],
      logos: [
        "https://cdn.simpleicons.org/docker",
        "https://cdn.simpleicons.org/kubernetes",
        "https://cdn.simpleicons.org/terraform",
        "https://cdn.simpleicons.org/ansible",
        "https://cdn.simpleicons.org/prometheus",
        "https://cdn.simpleicons.org/grafana",
      ],
      liveLink: "https://example.com/coffee-order-app",
      gitHubLink: "https://github.com/mkatq/coffee_order_application",

      appicon: "https://cdn-icons-png.flaticon.com/512/2621/2621091.png",
    },
    {
      classn: "project-image",
      title: "Bassathaly",
      description:
        "Developed an educational app that generates quizzes, explanations, and summaries using AI. Enhanced learning efficiency for students by automating content generation.",
      images: [
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/1.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/2.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/3.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/4.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/5.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/6.png",
        "https://res.cloudinary.com/drmiuvc9x/image/upload/assets/P2/7.png",
      ],
      tools: [
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/dart",
        "https://cdn.simpleicons.org/tensorflow",
        "https://cdn.simpleicons.org/figma",
      ],
      logos: [
        "https://cdn.simpleicons.org/flutter",
        "https://cdn.simpleicons.org/dart",
        "https://cdn.simpleicons.org/tensorflow",
        "https://cdn.simpleicons.org/google",
        "https://cdn.simpleicons.org/openai",
      ],
      liveLink: "https://example.com/ai-content-generator",
      gitHubLink: "https://github.com/user/ai-content-generator",
      appicon:
        "https://res.cloudinary.com/drmiuvc9x/image/upload/v1749508808/assets/P2/AIappicon.png",
    },
    
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
