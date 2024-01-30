import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div className="container">
      <motion.div
        className="pfp"
      >
        <img src={props.img} alt="" />
      </motion.div>

      <Heading firstWord="Who" secondWord="AmI?" />
      <div className="hero-typewriter">
        <h3>I am</h3>
        <Typewriter
          options={{
            strings: [
              "A Father",
              "A Husband", 
              "A Tech Enthusiast",
              "A Sports Enthusiast",
              "A Learner",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter"
        />
      </div>
      {/* <HeroHeading /> */}
      <div className="button-effect">
        {/* <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">IAM</span>
          </span>
        </button>
        <br />
        <button className="glowing-btn">
          <span className="glowing-txt">
            <span className="faulty-letter">R</span>ANDIL
            <span className="faulty-letter">T</span>HARUSHA
          </span>
        </button> */}
        <div className="hero-text">
          <p className="hero-desc">{props.description}</p>
        </div>
        <br />
        <br />
        Find me on:
        <div className="hero-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={`/socials/${social.icon}`} alt="" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
