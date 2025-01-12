import logo from '../../Images/logo.jpeg';

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="nav-logo-container">
                 <img className="nav-logo" alt="Logo" src={logo} />
                 <div className="text-container">
                  <span className="admin-text">Admin</span>
                  <span className="safe-space-text">Safe Space</span>
                 </div>
             </div>
        </nav>

    );
}

export default Navbar;