import { useRef } from "react";
import emailjs from "@emailjs/browser";

const contactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovdixnu",
        "template_cg9ny1m",
        form.current,
        "kICO628dZkkGJpvd_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-info form">
      {" "}
      <h3 className="contact-content-title">Write me your project</h3>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="contact-form-input"
            placeholder="Insert your name"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Mail
          </label>
          <input
            type="email"
            name="user_email"
            className="contact-form-input"
            placeholder="Insert your email"
          />
        </div>
        <div className="contact-form-div">
          <label htmlFor="" className="contact-form-name">
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            className="contact-form-input"
            placeholder="Insert your message"
          ></textarea>
        </div>
        <input type="submit" value="Send" className="about-cv form-button" />
      </form>
    </div>
  );
};

export default contactForm;
