import "./Styles.scss";
import { useState } from "react";
import Technologies from "../components/Technologies";
import { INFO } from "../info/Info";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { Button, MainButton } from "../components/ButtonStyled";
import { Hero } from "../components/CardStyled";
import 'animate.css';

const { education, experience, technologies } = INFO;

const Home = () => {
  const [ShowEducation, setShowEducation] = useState(true);
  return (
    <>
      <div className="wrapper">
        <h1 className="home-title">Hi! I'm Gisela Claure Mérida</h1>
        <div className="typing-hero">Junior Full Stack developer</div>
        <MainButton>
          <a href="#About me">Know more about me</a>
        </MainButton>
      </div>
      <section id="About me" className="about">
        <Hero>
          <div>
            <img src="https://i.imgur.com/US7hc0O.jpg?1" alt="" />
          </div>
          <div class="animate__animated animate__fadeInRight">
            <h1>ABOUT ME</h1>
            <p>
              My name is Gisela and I am a Junior Full Ftack Developer from
              Madrid. I have experience in B2B commerce and marketing, but now I
              am looking forward to starting a long and solid career as a
              developer. I am passionate about dancing and travelling, but I
              also enjoy playing Animal Crossing and watching Netflix crime
              documentaries 😊
            </p>
          </div>
        </Hero>
        <div className="about-container">
          <Button className="custom-btn" onClick={() => setShowEducation(true)}>
            Education
          </Button>
          <Button
            className="custom-btn"
            onClick={() => setShowEducation(false)}
          >
            Experience
          </Button>
          {ShowEducation ? (
            <Education education={education}></Education>
          ) : (
            <Experience experience={experience}></Experience>
          )}
          <Technologies  experience={technologies}></Technologies>
        </div>
      </section>
    </>
  );
};

export default Home;
