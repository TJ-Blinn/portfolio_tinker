import React from "react";
import styled from "styled-components";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
// icons here are for Pinterest and Google Drive. Can change these to Github + anything else for external links of each project in portfolios

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <PinterestIcon />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <AddToDriveIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: none;
      }
    }
  }
`;

export default Menu;
