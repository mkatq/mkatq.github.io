// src/components/Certifications.js
import React from "react";
import "../App.css";
import CertificationsCard from "./CertificationsCard";

const certifications = [
  {
    title: "DevOps Foundation (DOFD)®",
    issuer: "DEVOPS INSTITUTE",
    date: "July 2025",
    link: "https://www.peoplecert.org/public-profile?ed=XCHu3ZqUTNJlPdFV61%2f%2fXTl0L9IIUwa4",
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1751824769/assets/cert-images/DevOps_Cert.png",
  },

  {
    title: "Certificate of Completion – DevOps Bootcamp (SDA)",
    issuer: "Saudi Digital Academy",
    date: "May 2025",
    link: "https://eu.credential.net/51b7e27a-f685-40ab-94fb-3b7f1ec215d9#acc.WEB4IjYv",
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1752423529/assets/cert-images/DevOps-SDA-Meshari-Altawfiq_Page_1.png",
  },
  {
    title: "Google Project Management",
    issuer: "Coursera",
    date: "Jun 2024",
    link: "https://coursera.org/verify/professional-cert/9ANTJKLRUCN2",
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1748568792/assets/cert-images/Coursera_9ANTJKLRUCN2.png",
  },
  {
    title: "The Complete Flutter Development Guide [2024 Edition]",
    issuer: "Udemy",
    date: "Apr 2024",
    link: "https://www.udemy.com/certificate/UC-d25424e6-9bd5-41f6-a90b-069044d7f75b/",
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1748568792/assets/cert-images/cert2.png",
  },
  {
    title: "Huawei HCIA-AI",
    issuer: "Saudi Digital Academy",
    date: "May 2023",
    link: "https://drive.google.com/file/d/1-64J1poZzkfhjD2tfMOeDKIoZNZhASVs/view", // Replace with actual verification link if available
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1748568792/assets/cert-images/cert3.png",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/ESWJZFEA5Y5M", // Replace with actual certificate link
    image:
      "https://res.cloudinary.com/drmiuvc9x/image/upload/v1748568792/assets/cert-images/cert4.png",
  },
];

const Certifications = () => {
  return (
    <section id="Certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <CertificationsCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            image={cert.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
