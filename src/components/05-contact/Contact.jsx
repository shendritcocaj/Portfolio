import "./contact.css";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="contact container">
        <div className="contact-top-info">
          <h2 className="contact-title">CONTACT</h2>
          <div className="line-bottom"></div>
          <p className="contact-description">
            Feel free to Contact me. I will get back to you as soon as possible
          </p>
        </div>
        <div className="contact-bottom-info">
          {" "}
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
