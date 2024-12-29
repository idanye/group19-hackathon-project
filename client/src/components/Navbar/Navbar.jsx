
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router";

/*
using useState to toggle underLine under the current page
using Link to connect a page to its path and render to the current page later*/ 
const Navbar = () => {

    const [navBarOption, setNavBarOption] = useState("Home");

    return (
        <div className="Navbar">
            <ul className="navbar-options">
                <Link to="/page3" style={{textDecoration : 'none'}}>
                    <li className="navbar-option-4" onClick={() => setNavBarOption("Page3")}>
                        עמוד 3
                    </li>
                    {navBarOption === "Page3" ? <hr /> : null}
                </Link>
                <Link to="/page2" style={{textDecoration : 'none'}}>
                    <li className="navbar-option-3" onClick={() => setNavBarOption("Page2")}>
                        עמוד 2
                    </li>
                    {navBarOption === "Page2" ? <hr /> : null}
                </Link>
                <Link to="/page1" style={{textDecoration : 'none'}}>
                    <li className="navbar-option-2" onClick={() => setNavBarOption("Page1")}>
                        עמוד 1
                    </li>
                    {navBarOption === "Page1" ? <hr /> : null}
                </Link>
                <Link to="/" style={{textDecoration : 'none'}}>
                    <li className="navbar-option-1" onClick={() => setNavBarOption("Home")}>
                        עמוד הבית
                    </li>
                    {navBarOption === "Home" ? <hr /> : null}
                </Link>
            </ul>

        </div>
    );
}

export default Navbar;