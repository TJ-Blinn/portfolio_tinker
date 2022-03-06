import React from "react";
import styled from "@emotion/styled";
import { MainLayout, InnerLayout } from "../styles/layouts";
import Title from "../Components/Title";

function ContactPage() {
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <InnerLayout className={"contact-section"}>
        <div className="left-content">
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

            <div className="text-area">
              <label htmlFor="text-area">Enter your Message*</label>
              <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
            </div>
          </form>
        </div>
        <div className="right-content"></div>
      </InnerLayout>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section``;

export default ContactPage;
