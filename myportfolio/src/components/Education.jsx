// src/components/Education.js
import React from "react";
import EducationCard from "./EducationCard";
import "../App.css";

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <EducationCard
        degree="- Bachelor of Computer Science"
        university="King Faisal University"
        date="- Graduated 2024"
        gpa="- Second-Class Honours"
        project={{
          title: "Coffee Order Application",
          description:
            "A cross-platform mobile app for ordering coffee from nearby shops.",
          features: [
            " Locate the nearest coffee shops using real-time GPS.",
            " Estimate crowd levels and wait times.",
            " Use NLP to analyze customer comments and auto-generate sentiment-based ratings.",
          ],
        }}
        coursework="Data Structures & Algorithms, OOP, Web Development, Data Science, AI, Software Engineering"
        awards="Dean’s List (2022, 2023, 2024)"
        clubs="Artificial Intelligence And Programming Club"
        image="https://res.cloudinary.com/drmiuvc9x/image/upload/v1746990013/assets/logo.png"
      />
    </section>
  );
};

export default Education;
