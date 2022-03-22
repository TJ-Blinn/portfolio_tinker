import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, contact1 }) {
  let titleBlurb =
    title === "Email" ? (
      <a className="email-link" href="mailto:guzzojenn@gmail.com" aria-role="link">
        {contact1}
      </a>
    ) : (
      <p>{contact1}</p>
    );
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>

      <div className="right-content">
        <h6>{title}</h6>
        {titleBlurb}
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;

  /* give margin bottom to all except last child | Not pseudo element */
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  /* Styling for the icons */
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }

  .email-link {
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: color 0.5s;
  }

  a[href^="mailto"]:hover {
    content: attr(title);
    color: var(--white-color);
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }

    p {
      padding: 0.1rem 0;
      color: var(--primary-color);
    }
  }
`;

export default ContactItem;
