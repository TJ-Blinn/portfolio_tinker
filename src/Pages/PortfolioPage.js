import React, { useState } from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/layouts";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";

function PortfolioPage() {
  const [menuItem, setmenuItem] = useState(portfolios);

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
