import { useState } from 'react';
import SkillCard from './SkillCard/SkillCard';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Projects</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            images={selectedSkill.images} // Passing the correct prop
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
