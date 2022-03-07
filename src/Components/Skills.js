import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/layouts";
import ProgressBar from "./ProgressBar";
import Title from "./Title";

// The prop inside the ProgressBar for width will control the display on ProgressBar component when rendering inside the ResumePage
function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title={"Resume"} span={"Resume"} />
        <InnerLayout>
          <div className="skills">
            <ProgressBar title={"Narrative Design"} width={"80%"} text={"80%"} />
            <ProgressBar title={"Dialogue Writing"} width={"70%"} text={"70%"} />
            <ProgressBar title={"Character Creation and Development"} width={"70%"} text={"70%"} />
            <ProgressBar title={"World Building and Lore Creation"} width={"50%"} text={"50%"} />
            <ProgressBar title={"Pitch and Design Document Writing"} width={"30%"} text={"30%"} />
            <ProgressBar title={"Creative Writing"} width={"60%"} text={"60%"} />
          </div>
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
