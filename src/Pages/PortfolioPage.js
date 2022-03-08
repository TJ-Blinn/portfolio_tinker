import React from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/layouts";

function PortfolioPage() {
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"Portfolios"} />
      <InnerLayout></InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
