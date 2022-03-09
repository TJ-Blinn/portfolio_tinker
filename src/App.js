// import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
// import BlogsPage from "./Pages/BlogsPage";
import BlogsPage from "../src/Components/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import LightModeIcon from "@mui/icons-material/LightMode";
// "Switch" has already been imported for react-router-dom and conflicts with this component for material-ui
// It has been renamed "Switching" as a work-around
import { Switch as Switching } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <div className="light-dark-mode">
          <div className="left-content">
            <LightModeIcon />
          </div>
          <div className="right-content">
            <Switching
              value=""
              //checked={true}
              //onChange={}
              inputProps={{ "aria-label": "" }}
            />
          </div>
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

  .light-dark-mode {
    position: absolute;
    right: 0;
    top: 10%;
    background-color: red;
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      align-items: center;
    }
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
