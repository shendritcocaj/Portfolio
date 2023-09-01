import { BsMessenger } from "react-icons/bs";

const contactInfo = () => {
  return (
    <div className="contact-info">
      <h3 className="contact-content-title">Talk to me</h3>
      <div className="contact-card">
        <i className="uil uil-envelope-minus"></i>
        <h3 className="contact-card-title">Email</h3>
        <span className="contact-card-data mail">
          shendritcocaj@hotmail.com
        </span>
        <a
          href="mailto:shendritcocaj@hotmail.com"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          Write me <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
      <div className="contact-card">
        <i className="uil uil-whatsapp"></i>
        <h3 className="contact-card-title">Whatsapp</h3>
        <span className="contact-card-data"> 049-377-922</span>
        <a
          href="https://wa.me/+38349377922"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          Write me <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
      <div className="contact-card">
        <BsMessenger className="contact-messenger" />
        <h3 className="contact-card-title mesenger">Messenger</h3>
        <span className="contact-card-data">Shendrit Cocaj</span>
        <a
          href="https://m.me/shendritt"
          rel="noreferrer"
          target="_blank"
          className="contact-button"
        >
          Write me <i className="uil uil-arrow-right contact-button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default contactInfo;
