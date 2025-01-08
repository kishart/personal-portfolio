import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css';

import { useState } from 'react';

const Navbar = () => {
    const [open, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggled:', !open);
        setOpenMenu(!open);
    };

    return (
        <>
            <MobileNav isOpen={open} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
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
                        <button className="contact-btn">Hire Me</button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: '1.8rem' }}
                        >
                            {open ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
