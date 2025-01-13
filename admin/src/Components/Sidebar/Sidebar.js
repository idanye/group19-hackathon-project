
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, UserPlus } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="sidebar-nav">
      <NavLink
        to="/experts"
        className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
      >
        <Users size={20} />
        Experts
      </NavLink>
      
      <NavLink
        to="/pending-approval"
        className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
      >
        <UserPlus size={20} />
        Pending Approval
      </NavLink>
    </nav>
  );
};

export default Sidebar;