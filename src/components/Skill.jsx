import PropTypes from "prop-types";

const Skill = (props) => {
  return (
    <div className="skill">
      <img src={`/cv-portfolio/skills/${props.skill}`} alt="" className="skill-img" />
    </div>
  );
};
Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};
export default Skill;
