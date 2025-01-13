import React from 'react';
import { UserCheck } from 'lucide-react';

export const ExpertsTable = ({ data, showApproveButton = false, onApprove }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          {showApproveButton && <th className="text-right">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((expert) => (
          <tr key={expert.expertID}>
            <td>{expert.expertName}</td>
            <td>{expert.expertID}</td>
            {showApproveButton && (
              <td className="text-right">
                <button 
                  className="button button-primary"
                  onClick={() => onApprove(expert.expertID)}
                >
                  <UserCheck size={16} />
                  Approve
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpertsTable;
