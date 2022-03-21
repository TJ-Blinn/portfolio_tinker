import React from "react";
import styled from "styled-components";
// import Particle from "../Components/Particle.js";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>

      <div className="typography">
        <h1>
          Hi! my name is <span> Jenn!</span>
        </h1>
        <p>
          I'm happiest when things are organized neatly with colour-coding, I'm annoyed by plot-holes and bad scripts in my favourite TV shows and movies, and I
          know enough gaming/nerd/internet culture references that I can probably host a weekly podcast. If you want to chat, ask me about The Sims!
        </p>

        {/* Update links below for Social Media */}
        <div className="icons">
          <a href="https://www.facebook.com/jenn.guzzo" className="icon i-facebook">
            <FacebookIcon />
          </a>

          <a href="https://www.linkedin.com/in/jenniferguzzo/" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    /* z-index: 2; */
    line-height: 1.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        /* display: inline-block; */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          cursor: pointer;
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: 0.5rem;
        }
      }
      /* Adding diff colors for each icon */
      .i-facebook {
        &:hover {
          border: 2px solid rgb(56, 88, 152);
          color: rgb(56, 88, 152);
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid rgb(10, 102, 194);
          color: rgb(10, 102, 194);
        }
      }
    }
  }
`;

export default HomePage;
