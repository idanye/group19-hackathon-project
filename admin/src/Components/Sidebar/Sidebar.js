import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <nav className="sidebar">
            <div className='sidebar-options'>
                <Link className='sidebar-link' to='/experts'>
                    <button className = "sidebar-item">experts</button>
                </Link>
                <Link className='sidebar-link' to='/pending-approval'>
                    <button className = "sidebar-item">Pending Approval</button>
                </Link>
            </div>
        </nav>
    );
}

export default Sidebar;