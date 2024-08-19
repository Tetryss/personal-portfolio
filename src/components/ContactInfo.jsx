import phone from "../../public/phone.svg";
import mail from "../../public/mail.svg";
import globe from "../../public/globe.svg";
import styled from "styled-components";

function copyText(txt) {
  navigator.clipboard.writeText(txt);
}

function Contact() {
  return (
    <>
      <Holder>
        <Content>
          <CustImg
            src={phone}
            alt="Phone SVG"
            height="150px"
            onClick={() => copyText("7634438483")}
          />
          <h2>(###) 443 - 8483</h2>
          <Para>
            Contact me through this phone number, preferably through text, but
            call if you'd like!
          </Para>
        </Content>
        <Content>
          <CustImg
            src={mail}
            alt="Phone SVG"
            height="150px"
            onClick={() => copyText("jachumbre01@gmail.com")}
          />
          <h2>
            <CustA href="mailto:jachumbre01@gmail.com">
              jachumbre01@gmail.com
            </CustA>
          </h2>
          <Para>
            I check this email multiple times throughout the day, so feel free
            to contact me through here as well.
          </Para>
        </Content>
        <Content>
          <CustImg src={globe} alt="Phone SVG" height="150px" />
          <h2>Minneapolis, MN</h2>
          <Para>
            Currently, I am living in the United States, specifically Minnesota.
          </Para>
        </Content>
      </Holder>
    </>
  );
}
const Para = styled.p`
  text-align: left;
`;
const CustImg = styled.img`
  &:hover {
    cursor: help;
  }
`;
const CustA = styled.a`
  display: block;
  color: #f4f1de;
  text-decoration: none;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
  gap: 10rem;
  width: 90vw;
`;

const Content = styled.div`
  width: 25rem;
`;

export default Contact;
