import linkedinLogo from "../../public/linkedinlogo.svg";
import githublogo from "../../public/githublogo.svg";
import indeedlogo from "../../public/indeedlogo.svg";
import anon from "../../public/anon.svg";
import styled from "styled-components";

const SocialHolder = styled.div`
  display: flex;
  width: 15rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ProfileIcon = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
`;

function Socials() {
  return (
    <>
      <ProfileIcon src={anon} alt="User Profile Picture" width="100px" />
      <SocialHolder className="Socials">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/jan-achumbre-8bb611296/"
        >
          <img src={linkedinLogo} alt="LinkedIn Logo" height="40px" />
        </a>
        <a target="_blank" href="https://github.com/Tetryss">
          <img src={githublogo} alt="github Logo" height="40px" />
        </a>
        <a target="_blank" href="https://profile.indeed.com/p/jana-4x2qryl">
          <img src={indeedlogo} alt="indeed Logo" height="40px" />
        </a>
      </SocialHolder>
    </>
  );
}

export default Socials;
