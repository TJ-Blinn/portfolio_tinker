import React from "react";
import { MainLayout, InnerLayout } from "../styles/layouts";
import styled from "styled-components";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <WorkIcon />;
  const school = <SchoolIcon />;

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        {/* Resume work section  */}
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Concordia Univeristy"}
            text={
              "Lorem Ipsum Praesent sed cursus metus. Aliquam efficitur leo viverra, convallis justo eu, porta lectus. Nulla commodo commodo ligula vitae feugiat. Nullam id libero est. Donec placerat nisi pharetra, sollicitudin felis maximus"
            }
          />

          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Concordia Univeristy"}
            text={
              "Lorem Ipsum Praesent sed cursus metus. Aliquam efficitur leo viverra, convallis justo eu, porta lectus. Nulla commodo commodo ligula vitae feugiat. Nullam id libero est. Donec placerat nisi pharetra, sollicitudin felis maximus"
            }
          />

          <ResumeItem
            year={"2015-2020"}
            title={"Computer Science"}
            subTitle={"Concordia Univeristy"}
            text={
              "Lorem Ipsum Praesent sed cursus metus. Aliquam efficitur leo viverra, convallis justo eu, porta lectus. Nulla commodo commodo ligula vitae feugiat. Nullam id libero est. Donec placerat nisi pharetra, sollicitudin felis maximus"
            }
          />
        </div>
        {/* ----------------- Resume School section  */}
        <div className="small-title">
          <SmallTitle icon={school} title={"School Experience"} />
        </div>

        <ResumeItem
          year={"2015-2020"}
          title={"Bachelor's degree"}
          subTitle={"Concordia Univeristy"}
          text={"Lorem Ipsum Praesent sed cursus metus. Aliquam efficitur leo viverra"}
        />

        <ResumeItem
          year={"2015-2020"}
          title={"BAC"}
          subTitle={"Concordia Univeristy"}
          text={"Lorem Ipsum Praesent sed cursus metus. Aliquam efficitur leo viverra"}
        />
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
