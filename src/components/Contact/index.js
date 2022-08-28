import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dsikoc",
        "template_94m1une",
        form.current,
        "mVa7em1MjfoOEhEQO"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("oops, something went wrong, please try again");
        }
      );
  };

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="contact-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              // strArray={["c", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              strArray={[
                "g",
                "e",
                "t",
                " ",
                "i",
                "n",
                " ",
                "t",
                "o",
                "u",
                "c",
                "h",
                '.',
                '.',
                '.',
              ]}
              idx={15}
            />
            {/* <FaSms className='sms' />  */}
          </h1>

          {/* <p>
            sms me 
          </p> */}

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="half"
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="half"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>

              <input type="submit" className="flat-button" value="send" />
            </form>
          </div>
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sigurdurgur"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/sigurdurgur"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
