import PropTypes from "prop-types";
import { FaGraduationCap, FaExternalLinkAlt, FaSearchLocation, FaBookOpen } from "react-icons/fa";
import {FaUniversity} from "react-icons/fa";

const EducationCard = (props) => {
    return (
        <div className="education-card">
          <br/>
          <div className="education-schoolImg">
            <img src={props.schoolImage} alt={props.schoolName} />
          </div>
          <div className="education-schoolLink">
            <span><FaExternalLinkAlt /></span>
            <a href={props.link} alt={props.schoolName} target="_blank">{props.schoolName}</a>
          </div>
          <div className="education-area">
            <span><FaGraduationCap /> {props.area}</span>
          </div>
          {props.degree != null 
          ?
          <div className="education-degree">
            <span><FaUniversity /> {props.degree}</span>
          </div>
          : null}
          <div className="education-location">
            <span><FaSearchLocation /> {props.location}, {props.country}</span>
          </div>
          {props.dissertationLink != null
          ?
          <div className="education-dissertation">
            <span><FaBookOpen /></span>
            <a href={props.dissertationLink} alt={props.area} target="_blank">Dissertation Link</a>
          </div>
          : null}
        </div>
      );
};
    
EducationCard.propTypes = {
    schoolName: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    schoolImage: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    degree: PropTypes.string,
    location: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    dissertationLink: PropTypes.string
};

export default EducationCard;