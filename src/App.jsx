import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Socials from "./components/Socials.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/ContactInfo.jsx";
import "./App.css";

const Section = styled.section`
  text-align: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: #f4f1de;
  display: flex;
  flex-direction: column;
  gap: 0rem;
  justify-content: center;
  align-items: center;
`;
const Name = styled.h1`
  position: relative;
`;
function App() {
  const [location, setLocation] = useState(null);

  // On mount, set location to the current hash
  useEffect(() => {
    setLocation(window.location.hash);
    console.log(`App Mounted`);
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setLocation(`#${sectionId}`);
    }
  }
  return (
    <>
      <Navbar setLocation={scrollToSection} />
      <Section id="home">
        <Name>Jan Achumbre</Name>
        <Socials />
      </Section>
      {/* <Section id="about">
        <h1>About Me Section</h1>
      </Section> */}
      <Section id="portfolio">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}

export default App;
