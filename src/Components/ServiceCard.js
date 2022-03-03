import React from "react";
import styled from "styled-components";

function ServiceCard({ icon, title, paragraph }) {
  return (
    <ServiceCardStyled>
      <div className="container">
        <span>{icon}</span>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
}

const ServiceCardStyled = styled.div``;

export default ServiceCard;
