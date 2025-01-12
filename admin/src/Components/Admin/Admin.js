import '../Admin/Admin.css';
import { Routes, Route } from 'react-router-dom';
import Experts from '../../Pages/Experts/Experts.js';
import PendingApproval from '../../Pages/PendingApproval/PendingApproval.js';
import Sidebar from '../Sidebar/Sidebar.js';

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/experts" element={<Experts />} />
                <Route path="/pending-approval" element={<PendingApproval />} />
            </Routes>
        </div>
    );
}

export default Admin;