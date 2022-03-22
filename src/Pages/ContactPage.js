import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/layouts";
import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AlertTitle, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("Xd1SuwKkglLgY1XX5");

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  // method for generating a contact number on emailJS form
  // const Contact = () => {
  const [contactNumber, setContactNumber] = useState("000000");

  const [statusMessage, setStatusMessage] = useState("Message");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log("ERRORS ----------", errors);

  // character counter for message box in ContactPage
  const message = watch("textarea") || "";
  const messageCharsLeft = 1500 - message.length;

  function onSubmit(values) {
    // console.log("THIS IS ONSUBMIT VALUES --------", values);

    const statusMessage = document.querySelector(".status-message");

    // reset the form when the sendForm() function is successful.
    const form = document.querySelector(".form");

    generateContactNumber();
    sendForm("contact_form", "template_3irqhvp", ".form").then(
      function (response) {
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
        form.reset();
      },
      function (error) {
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
        }, 5000);
      }
    );
  }

  const handleError = (errors) => {};

  // Form Validation
  const registerOptions = {
    name: { required: "A name is required" },
    email: { required: "An email is required" },
    subject: { required: "A subject is required" },
    textarea: {
      required: "A message is required",
      minLength: {
        value: 4,
        message: "Your message must be longer than 4 characters.",
      },
      maxLength: {
        value: 1500,
        message: "For messages over 1500 characters, please email guzzojenn@gmail.com",
      },
    },
  };

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          {/* LEFT SIDE CONTENT ------------------------- */}
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>

              <Alert severity="success">
                <AlertTitle className="status-message">Success</AlertTitle>
                {statusMessage}
              </Alert>
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit, handleError)}>
              <div className="form-field">
                <input type="hidden" name="contact_number" value={contactNumber} />

                <label htmlFor="name"> Enter your name* </label>
                <input type="text" id="name" name="name" {...register("name", registerOptions.name)} />
                <small className="text-danger">{errors.name?.message}</small>
              </div>

              <div className="form-field">
                <label htmlFor="email"> Enter your email* </label>
                <input type="email" id="email" name="email" {...register("email", registerOptions.email)} />
                <small className="text-danger">{errors.email?.message}</small>
              </div>

              <div className="form-field">
                <label htmlFor="subject"> Subject: </label>
                <input type="text" id="subject" name="subject" {...register("subject", registerOptions.subject)} />
                <small className="text-danger">{errors.subject?.message}</small>
              </div>

              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea type="text" id="textarea" name="textarea" {...register("textarea", registerOptions.textarea)} cols="30" rows="10"></textarea>
                <small className="text-danger">{errors.textarea?.message}</small>
                <p className="message-chars-left">{messageCharsLeft}</p>
              </div>

              <div className="form-button">
                {/* <PrimaryButton title={"Send Email"} type="submit" /> */}
                <button type="submit" title={"Send Email"} className="button">
                  Send Email
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE CONTENT ------------------------- */}
          <div className="right-content">
            <ContactItem title={"Phone"} icon={phone} contact1={"+1-514-555-5555"} />
            <ContactItem title={"Email"} icon={email} contact1={"guzzojenn@gmail.com"} />
            <ContactItem title={"Location"} icon={location} contact1={"Montreal, QC Canada"} />
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
    grid-column-gap: 2rem;
    @media screen and (max-width: 970px) {
      grid-template-columns: repeat(1, 1fr);
      .form-button {
        margin-bottom: 3rem;
      }
    }

    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 500px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 500px) {
        width: 100%;
      }

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
    .form-button {
      margin-top: 1.5rem;
      .button {
        border: none;
        background-color: var(--primary-color);
        padding: 0.8rem 2.5rem;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        text-transform: uppercase;
        position: relative;
        transition: all 0.4s ease-in-out;
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0.2rem;
          transition: all 0.4s ease-in-out;
          left: 0;
          bottom: 0;
        }
        &:hover::after {
          width: 100%;
          background-color: var(--white-color);
        }
      }
    }
    .text-danger {
      color: red;
      padding-bottom: 0.5rem;
    }

    .failure {
      opacity: 1;
      color: red;
    }
  }
`;

export default ContactPage;
