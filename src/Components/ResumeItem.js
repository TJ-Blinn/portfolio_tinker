import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>

      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.section`
  display: flex;
  @media screen and (max-width: 420px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }

  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;

    /* This section is to create bullet points for each title | not working | */
    /* &::before{
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 17px;
      width: 17px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    } */
    p {
      display: inline-block;
    }
    h6 {
      padding-bottom: 0.4rem;
      font-size: 1.5rem;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
  }
`;

export default ResumeItem;
