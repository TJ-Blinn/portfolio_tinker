import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        {/* replace resume.jpg with other suitable pic for AboutPage */}
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am a <span>Narrative Designer</span>
        </h4>

        <p className="paragraph">
          I have worked as a writer in mobile and AAA platforms. I've gathered several years experience working closely with major franchises, including
          Cosmopolitan, I Know What You Did Last Summer, and America's Next Top Model, CSI: Crime Scene Investigation. My passion for writing extends past work
          hours into my hobbies where I like to dabble in novellas and board game design.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Weapon</p>
            <p>Super Power</p>
          </div>

          <div className="info">
            <p>Jennifer Guzzo</p>
            <p>English, French</p>
            <p>Montreal, Canada</p>
            <p>Plum Paper Planners</p>
            <p>Meta-human Organization Skills</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} href={"https://google.com"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }

  .left-content {
    width: 100%;
    height: 60vh;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1.8rem 2rem;
    }
    .about-info {
      display: flex;
      padding-bottom: 1rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
