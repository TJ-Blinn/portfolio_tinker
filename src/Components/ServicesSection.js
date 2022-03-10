import React from "react";
import { InnerLayout } from "../styles/layouts";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CasinoIcon from "@mui/icons-material/Casino";
import ChairIcon from "@mui/icons-material/Chair";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            icon={<VideogameAssetIcon fontSize="large" />}
            title={"Video Game Writer"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, purus acconvallis gravida, urna ex luctus elit, vel lacinia nisl lorem et orci. Morbi sapien mauris, placerat eget turpis non, condimentum tempor."
            }
          />
          <div className="mid-card">
            <ServiceCard
              icon={<CasinoIcon fontSize="large" />}
              title={"Amateur Boardgame Designer"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, purus acconvallis gravida, urna ex luctus elit, vel lacinia nisl lorem et orci. Morbi sapien mauris, placerat eget turpis non, condimentum tempor."
              }
            />
          </div>

          <ServiceCard
            icon={<ChairIcon fontSize="large" />}
            title={"Amateur Miniatures Crafter"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, purus acconvallis gravida, urna ex luctus elit, vel lacinia nisl lorem et orci. Morbi sapien mauris, placerat eget turpis non, condimentum tempor."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      /* .mid-card {
        margin: 2rem 0;
      } */
    }

    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }

    /* .mid-card {
      margin: 0 1rem;
    } */
  }
`;

export default ServicesSection;
