import { useState } from "react";
import { Link } from "react-router";

/*
using useState to toggle underLine under the current page
using Link to connect a page to its path and render to the current page later*/ 
const Navbar = () => {

    const [navBarOption, setNavBarOption] = useState("Home");

    return (
        <div className="navbar">
            <ul className="navbar-options">
                <Link to="/" style={{textDecoration : 'none'}}>
                    <li className="navbar-option" onClick={() => setNavBarOption("Home")}>
                        Home
                    </li>
                    {navBarOption === "Home" ? <hr /> : null}
                </Link>

                <Link to="/cyber-bullying" style={{textDecoration : 'none'}}>
                    <li className="navbar-option" onClick={() => setNavBarOption("cyber-bullying")}>
                        Cyber Bullying
                    </li>
                    {navBarOption === "cyber-bullying" ? <hr /> : null}
                </Link>

                <Link to="/sexual-harassment" style={{textDecoration : 'none'}}>
                    <li className="navbar-option" onClick={() => setNavBarOption("sexual-harassment")}>
                        Sexual Harassment
                    </li>
                    {navBarOption === "sexual-harassment" ? <hr /> : null}
                </Link>

                <Link to="/eating-disorders" style={{textDecoration : 'none'}}>
                    <li className="navbar-option" onClick={() => setNavBarOption("eating-disorders")}>
                        Eating Disorders
                    </li>
                    {navBarOption === "eating-disorders" ? <hr /> : null}
                </Link>

            </ul>

        </div>
    );
}

export default Navbar;