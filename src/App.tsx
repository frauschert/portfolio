import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      event.preventDefault();
      const targetId = (event.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1);
      const targetElement = document.getElementById(targetId!);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <div id="root">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <h1>Fabian's Portfolio</h1>
        <p>Welcome to my personal portfolio website!</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Fabian, a passionate software developer with experience in
          building web applications using modern technologies.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </section>
      <footer>
        <p>© 2023 Fabian Rauschert. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
