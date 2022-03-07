import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ContactPage() {
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>

            <form className="form">
              <div className="form-field">
                <label htmlFor="name"> Enter your name* </label>
                <input type="text" id="name" />
              </div>

              <div className="form-field">
                <label htmlFor="email"> Enter your email* </label>
                <input type="email" id="email" />
              </div>

              <div className="form-field">
                <label htmlFor="subject"> Subject: </label>
                <input type="text" id="subject" />
              </div>

              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              </div>

              <div className="form-field">
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem icon={PhoneIcon} title={"Phone"} contact1={"+1-514-555-5555"} contact1={"+1-514-555-5555"} />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          left: 20px;
          top: -13px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0rem 0.5rem;
          color: inherit;
        }

        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 55px;
          padding: 0.5rem 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
