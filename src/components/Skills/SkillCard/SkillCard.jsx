
import PropTypes from 'prop-types';
import './SkillCard.css'

const SkillCard = ({title, isActive, onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""}`}
    onClick={() => onClick()}>
      
        <span>{title}</span>
    </div>
  )
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SkillCard