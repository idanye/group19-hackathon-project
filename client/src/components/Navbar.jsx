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
                <Link to="/cyber-bullying" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("cyber-bullying")}>
                        <img src={cyberCrimeIcon} alt="Cyber Bullying" className="navbar-icon" /> Cyber Bullying
                    </li>
                    {navBarOption === "cyber-bullying" ? <hr /> : null}
                </Link>

                {/* Sexual Harassment */}
                <Link to="/sexual-harassment" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("sexual-harassment")}>
                        <img src={harassmentIcon} alt="Sexual Harassment" className="navbar-icon" /> Sexual Harassment
                    </li>
                    {navBarOption === "sexual-harassment" ? <hr /> : null}
                </Link>

                {/* Eating Disorders */}
                <Link to="/eating-disorders" style={{ textDecoration: 'none' }}>
                    <li className="navbar-option" onClick={() => setNavBarOption("eating-disorders")}>
                        <img src={eatingIcon} alt="Eating Disorders" className="navbar-icon" /> Eating Disorders
                    </li>
                    {navBarOption === "eating-disorders" ? <hr /> : null}
                </Link>

            </ul>
        </div>
    );
}

export default Navbar;