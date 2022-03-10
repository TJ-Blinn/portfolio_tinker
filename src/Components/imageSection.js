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
          I am <span>Lorem Ipsum</span>
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, purus ac convallis gravida, urna ex luctus elit, vel lacinia nisl lorem et
          orci. Morbi sapien mauris, placerat eget turpis non, condimentum tempor.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>

          <div className="info">
            <p>Lorem Ipsum</p>
            <p>36</p>
            <p>Canadian</p>
            <p>English, French</p>
            <p>Montreal, Canada</p>
            <p>Writer</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
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
      padding: 1rem 0;
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
