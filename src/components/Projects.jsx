import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

function Projects() {
  const projectArray = Object.entries(projects);
  const myRefs = Array.from({ length: projectArray.length }, () =>
    useRef(null)
  );
  const [selectedElemIndex, setSelectedElemIndex] = useState(null);
  const [mobile, setMobile] = useState(false);

  const clickHandler = (index) => {
    setSelectedElemIndex(index);
  };

  useEffect(() => {
    window?.navigator?.userAgentData?.mobile === true ? setMobile(true) : null;
  }, []);

  useEffect(() => {
    // Reset width for all elements EXCEPT selected one
    myRefs.forEach((ref, index) => {
      const element = ref.current;
      if (element) {
        element.style.width = index === selectedElemIndex ? "50rem" : "5rem";
      }
    });
  }, [selectedElemIndex, myRefs]);
  return (
    <>
      <TitleH1>Notable Projects</TitleH1>
      <ProjectHolder>
        {projectArray.map((current, index) => {
          const [holder, [name, desc, link, image]] = current;
          //     ^ Obj    ^ Content, in an array, destructured
          return (
            <Project
              onClick={() => clickHandler(index)}
              ref={myRefs[index]}
              key={index}
              className={selectedElemIndex === index ? "selected" : ""}
            >
              <h2>{name}</h2>
              <VisibleWrapper>
                <ContentContainer>
                  <CustomImg src={image} alt="Project Image" height="350px" />
                  {desc}
                </ContentContainer>
                {/* Fixes the link behavior on the title of the project, still not sure of the cause */}
                {selectedElemIndex === index ? (
                  <CustomA target="_blank" href={link}>
                    {link ? "Visit Project" : null}
                  </CustomA>
                ) : null}
              </VisibleWrapper>
            </Project>
          );
        })}
      </ProjectHolder>
    </>
  );
}

const TitleH1 = styled.h1`
  margin: 0;
  padding: 0;
`;

const CustomImg = styled.img`
  border-radius: 1rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const CustomA = styled.a`
  color: #e07a5f;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: all 200ms ease-out;

  position: absolute;
  right: 1.5rem;
  &:hover {
    color: #232535;
    border-right: 0.2rem solid #232535;
    border-radius: 1rem;
    padding-right: 0.3rem;
  }
`;

const Description = styled.p`
  color: #232535;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const ProjectHolder = styled.div`
  width: 90%;
  height: 90vh;
  /* background-color: #232535; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Project = styled.div`
  padding: 0;
  margin: 0;
  color: #232535;
  background-color: #f4f1de;
  height: 70%;
  width: 5rem;
  border-radius: 1rem;
  writing-mode: vertical-lr;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    color: #e07a5f;
  }
  &.selected {
    color: #e07a5f;
    writing-mode: horizontal-tb;
    transition: 900ms;
    cursor: default;
  }
  &.selected ${() => VisibleWrapper} {
    position: relative;
    opacity: 1;
  }
`;

const VisibleWrapper = styled.div`
  opacity: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;
const projects = {
  PokemonCards: [
    "Pokemon Cards",
    <Description>
      After learning react in-depth, this was my attempt to apply the knowledge
      I had learned. This project is supposed to mimic Pokemon cards with a
      different aesthetic twist. Users are able to add pokemon cards by simply
      typing their names and pressing add or enter. Depending on the Pokemon's
      type, the card background changes color. If a Pokemon has two types, it
      will gradient into those two colors. If the Pokemon only has one, then it
      will gradient into a different hue. The information is fetched from
      PokeAPI.
    </Description>,
    "https://tetryss.github.io/pokemon-cards/",
    "https://i.imgur.com/6Zoaagd.png",
  ],
  TextRain: [
    "Text Rain",
    <Description>
      As its name suggests, this project involves raining text! Users are able
      to turn their cameras on and interact with the falling text. When a text
      character collides with the user, the text will be stuck in place and
      change into a random color. This is done through React + TypeScript and
      GopherGFX (ThreeJS wrapper).
    </Description>,
    "https://csci-4611-fall-2023.github.io/assignment-1-Tetryss/",
    "https://i.imgur.com/qNwIk1e.png",
  ],
  Earthquakes: [
    "Earthquake Viewer",
    <Description>
      This is another project made with GopherGFX (ThreeJS Wrapper) that
      displays all of the earthquakes that has occurred (up to 2006) as spheres
      on the map. The magnitude of the earthquake corresponds with the sphere's
      hue. The map also has 2 modes: map and globe. All of the tranisitions are
      achieved with linear interpolation.
    </Description>,
    "https://csci-4611-fall-2023.github.io/assignment-3-Tetryss/",
    "https://i.imgur.com/0rn1qr4.png",
  ],
  Dance: [
    "Ants Can Dance",
    <Description>
      Another college project made with GopherGFX. This project went into matrix
      transformations in 3D space as well as linear interpolation of motion
      captured animations.
    </Description>,
    "https://github.com/CSCI-4611-Fall-2023/assignment-4-Tetryss",
    "https://i.imgur.com/OkoHGeb.png",
  ],
  Harold: [
    "Harold: A World Made of Drawings",
    <Description>
      This is one of my notable college projects. As the name suggests, this is
      twist of the original Harold project which allowed users to turn 2D
      drawing inputs into 3D! The twist here is that there is very little to no
      User Interface (Except for chaning colors and adjusting the brush). This
      is to create a very seamless and immersive user experience. Users are also
      able to move around using WASD on their keyboards.
    </Description>,
    "https://csci-4611-fall-2023.github.io/assignment-6-Tetryss/",
    "https://i.imgur.com/ErTql5e.png",
  ],
  Shaders: [
    "Shaders",
    <Description>
      A Project made in college going into Graphics Card Programming with
      fragment and vertex shaders. The shaders implemented are: Gourad, Phong,
      Normal, and Toon + Outline(Cel-shading). This project is also implemented
      using GopherGFX.
    </Description>,
    "https://csci-4611-fall-2023.github.io/assignment-5-Tetryss/",
    "https://i.imgur.com/i2ISgNs.png",
  ],
  Microblogging: [
    "Ribbit Ribbit Microblogging Site",
    <Description>
      This is a project made with Vanilla JavaScript + ExpressJS + MySQL for the
      backend. The frontend is composed of HTML/PUG templating and CSS. This
      projects mimics microblogging websites which allows for posting, post
      editing, liking (and retaining its like count through database), post
      deletion, account creation (with user authentication), as well as page
      pagination for posts.
    </Description>,
    "",
    "https://i.imgur.com/PYNaiJ1.png",
  ],
};
export default Projects;
