import './MobileNav.css';
import PropTypes from 'prop-types';

const MobileNav= ({isOpen, toggleMenu}) => {
    return (
<>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >    
        <div className="mobile-menu-container">
          <p>PORTFOLIO</p>
          <ul>
          <li>
                <a className="menu-item">Home</a>
            </li>
            <li>
                <a className="menu-item">Skills</a>
            </li>
            <li>
                <a className="menu-item">Work Experience</a>
            </li>
            <li>
                <a className="menu-item">Contact Me</a>
            </li>
<button className="contact-btn" onClick={() => {}}>Hire Me</button>
          </ul>
       </div>
       </div>
    </> 
       
    )
}

MobileNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default MobileNav;