import React from "react";
import styled from "styled-components";
import { MainLayout } from "../styles/layouts";
import Title from "../Components/Title";
import ImageSectionStyled from "../Components/imageSection";
import ServicesSection from "../Components/ServicesSection";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSectionStyled />
        <ServicesSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
