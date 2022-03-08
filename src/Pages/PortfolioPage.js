import React, { useState } from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/layouts";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfolioPage() {
  const [menuItem, setMenuItem] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
