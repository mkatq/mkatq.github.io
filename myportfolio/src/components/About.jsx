import "../App.css"; // Import the styling

const About = () => (
  <>
    <section id="about" style={{ paddingTop: "100px" }}>
      
      <div className="about1">
        <h1>
            Hello👋, I'm Meshari Altawfiq, a <span className="highlight">Software Engineer</span>🧑‍💻. Specializing
            in mobile and web development. I'm passionate about creating
            innovative solutions. <h5>Let's connect and build something great!</h5> 
        </h1>
      </div>

      <div style={{ display: "block", marginTop: "50px" }}>
        {" "}
        <a
          href="https://github.com/mkatq"
          target="_blank"
          rel="noopener noreferrer"
          className="elevated-button"
          style={{
            backgroundColor: "#eeeeee",
            color: "black",
          }}
        >
          GitHub
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            style={{ width: "20px", height: "20px", marginLeft: "8px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mkatq"
          target="_blank"
          rel="noopener noreferrer"
          className="elevated-button"
        >
          LinkedIn
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Logo"
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "8px",
              filter: "grayscale(100%) brightness(150%)",
            }}
          />
        </a>
      </div>
    </section>
  </>
);
export default About;
