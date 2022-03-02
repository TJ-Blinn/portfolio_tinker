import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar() {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  z-index: 10;
  background-color: var(--sidebar-dark-color);
`;

export default Sidebar;
