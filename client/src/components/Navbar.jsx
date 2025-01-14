import { useState } from "react";
import { Link } from "react-router";

// Import icons
import homeIcon from '../images/home.png';
import cyberCrimeIcon from '../images/cyber-crime.png';
import harassmentIcon from '../images/sexual-harassment.png';
import eatingIcon from '../images/eating.png';

/*
Using useState to toggle underline under the current page.
Using Link to connect a page to its path and render to the current page later.
Added icons for each navigation option.
*/
const Navbar = () => {
    const [navBarOption, setNavBarOption] = useState("Home");

    return (
        <div className="navbar">
            <ul className="navbar-options">

                {/* Home */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("Home")}>
                        <img src={homeIcon} alt="Home" className="navbar-icon" /> Home
                    </li>
                    {navBarOption === "Home" ? <hr /> : null}
                </Link>

                {/* Cyber Bullying */}
                <Link to="/Cyber-Bullying" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("Cyber Bullying")}>
                        <img src={cyberCrimeIcon} alt="Cyber Bullying" className="navbar-icon" /> Cyber Bullying
                    </li>
                    {navBarOption === "Cyber Bullying" ? <hr /> : null}
                </Link>

                {/* Sexual Harassment */}
                <Link to="/Sexual-Harassment" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("Sexual Harassment")}>
                        <img src={harassmentIcon} alt="Sexual Harassment" className="navbar-icon" /> Sexual Harassment
                    </li>
                    {navBarOption === "Sexual Harassment" ? <hr /> : null}
                </Link>

                {/* Eating Disorders */}
                <Link to="/Eating-Disorders" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("Eating Disorders")}>
                        <img src={eatingIcon} alt="Eating Disorders" className="navbar-icon" /> Eating Disorders
                    </li>
                    {navBarOption === "Eating Disorders" ? <hr /> : null}
                </Link>

            </ul>
        </div>
    );
}

export default Navbar;