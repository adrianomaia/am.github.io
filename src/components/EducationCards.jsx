import PropTypes from "prop-types";

const EducationCard = (props) => {
    return (
        <div className="education-card">
          <div className="education-school">
            <h2>{props.schoolName}</h2>
          </div>
          <div className="education-schoolImg">
            <img src={props.schoolImage} alt={props.schoolName} />
        </div>
          <div className="education-area">
            <p>{props.area}</p>
          </div>
        </div>
      );
};
    
EducationCard.propTypes = {
    schoolName: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    schoolImage: PropTypes.string.isRequired
};

export default EducationCard;