import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, images, description, link }) => {
  return (
    <div className="skills-info-card">
    <h6>{heading}</h6>
    <div className="skills-info-content">
      {images.map((item, index) => (
        <React.Fragment key={`skill_${index}`}>
          <div className="skill-info">
            {/* Render Image */}
            {item.img && (
              <img src={item.img} alt={item.alt || "Skill Image"} className="skill-image" />
            )}
            <p>{description}</p>
            {/* <a href="https://www.cursor.com/downloads" className="skill-link">Learn More</a> */}
            
                 {/* Render Link */}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-website-link">
            Visit Link
          </a>
        )}

          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
  );
};

export default SkillsInfoCard;
