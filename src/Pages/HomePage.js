import React from "react";
import styled from "styled-components";
// import Particle from "../Components/Particle.js";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">{/* <Particle /> */}</div>

      <div className="typography">
        <h1>
          Hi! my name is <span> Bufford!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate justo non velit aliquet interdum. Curabitur finibus consequat sodales.
          Nullam.
        </p>

        <div className="icons">
          <div className="icon i-facebook">
            <FacebookIcon />
          </div>
          <div className="icon i-github">
            <GitHubIcon />
          </div>
          <div className="icon i-youtube">
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    z-index: 2;
  }

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      .icon {
        border: 2px solid var(--border-color);
        display: inline-block;
      }
    }
  }
`;

export default HomePage;
