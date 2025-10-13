// src/components/Contact.js
import React, { useRef } from 'react';
import '../App.css'; // Import the styling
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'; // Icons for contact methods
import AnimatedSection from "./AnimatedSection";
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const form = useRef(); // Create a ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_w210gdw', 'template_ybd8rx4', form.current, '_kinG3Fg0FmZltCSS')
      .then((result) => {
          console.log(result.text); // Log the result
          alert("Message sent successfully!"); // Optional success message
      }, (error) => {
          console.log(error.text); // Log the error
          alert("Failed to send message, please try again."); // Optional error message
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>
            <FaEnvelope /> Email: <a style={{color : "skyblue"}} href="mailto:mesharialtawfiq@gmail.com">mesharialtawfiq@gmail.com</a>
          </p>
          <p>
            <FaPhone /> Phone: +966 53-655-4592
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mkatq" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/mkatq" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
