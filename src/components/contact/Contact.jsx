import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_y9a2sor",
            "template_wldm1vg",
            formRef.current,
            "1_h9ZJw-qC9dRTHvF"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
    }
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +254 717 746 413
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                Joshwarurii55@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                32250 Kangemi Nairobi
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b>Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "Thank you"}
            </form>
          </div>
        </div>
      </div>
    );
}


export default Contact;