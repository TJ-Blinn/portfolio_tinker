import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogsPage from "./Pages/BlogsPage";
// import BlogsPage from "../src/Components/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import LightModeIcon from "@mui/icons-material/LightMode";
// "Switch" has already been imported for react-router-dom and conflicts with this component for material-ui
// It has been renamed "Switching" as a work-around
import { IconButton, Switch as Switching } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const [checked, setChecked] = useState(true);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
      setChecked(false);
    } else {
      setTheme("dark-theme");
      setChecked(true);
    }
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="light-dark-mode">
        <div className="left-content">
          <LightModeIcon />
        </div>
        <div className="right-content">
          <Switching value="" color="primary" checked={checked} onClick={themeToggler} inputProps={{ "aria-label": "" }} size="medium" />
        </div>
      </div>

      <div className="line-menu-icon">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    margin-left: 0px;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
