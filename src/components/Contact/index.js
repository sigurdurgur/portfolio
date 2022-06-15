import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { FaSms } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_3dsikoc',
        'template_94m1une',
        form.current,
        'mVa7em1MjfoOEhEQO'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


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
              strArray={['s', 'm', 's', ' ', 'm', 'e']}
              idx={15}
              
            />
            <FaSms className='sms' /> 
          </h1>

          {/* <p>
            sms me 
          </p> */}

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input type="text" name="name" placeholder="Subject" required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
