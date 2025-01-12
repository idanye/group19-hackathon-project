import './Navbar.css';
import logo from '../../Images/admin-logo.PNG';

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <img className = "nav-logo" alt = "" src = {logo}></img>
        </nav>
    );
}

export default Navbar;