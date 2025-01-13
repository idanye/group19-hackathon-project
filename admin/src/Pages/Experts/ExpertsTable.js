import React from 'react';
import { UserCheck } from 'lucide-react';
import { UserX } from 'lucide-react';

export const ExpertsTable = ({ data, showApproveButton = false, onApprove, onReject }) => (
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
                <button 
                  className="button button-secondary"
                  onClick={() => onReject(expert.expertID)}
                >
                  <UserX size={16} />
                  Reject
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
