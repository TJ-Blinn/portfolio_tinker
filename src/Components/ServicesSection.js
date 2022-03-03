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

          <ServiceCard
            icon={<CasinoIcon fontSize="large" />}
            title={"Amateur Boardgame Designer"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, purus acconvallis gravida, urna ex luctus elit, vel lacinia nisl lorem et orci. Morbi sapien mauris, placerat eget turpis non, condimentum tempor."
            }
          />

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

const ServicesSectionStyled = styled.section``;

export default ServicesSection;
