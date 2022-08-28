import "./index.scss";
import {
  BiBandAid,
  BiBody,
  BiBrain,
  BiBullseye,
  BiDizzy,
  BiQuestionMark,
} from "react-icons/bi";

import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
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
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["a", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          Full stack Web Developer who recently graduated a 1+ year intensive
          training in Fullstack Web Development (MERN stack)
        </p>
      </div>

      <div className="cubeContainer">
        <div className="cubeSpinner">
          <div className="face1">
            <BiBandAid />
          </div>
          <div className="face2">
            <BiBody />
          </div>
          <div className="face3">
            <BiBrain />
          </div>
          <div className="face4">
            <BiBullseye />
          </div>
          <div className="face5">
            <BiDizzy />
          </div>
          <div className="face6">
            <BiQuestionMark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
