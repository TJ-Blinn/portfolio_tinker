import React from "react";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
import { InnerLayout, MainLayout } from "../styles/layouts";

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
