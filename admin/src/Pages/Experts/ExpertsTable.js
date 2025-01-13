import React from 'react';
import { UserCheck } from 'lucide-react';
import { UserX } from 'lucide-react';

export const ExpertsTable = ({ data, showApproveButton = false, showDeclineButton = true, onApprove, onReject }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          {(showApproveButton || showDeclineButton) && <th className="text-right">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((expert) => (
          <tr key={expert.expertID}>
            <td>{expert.expertName}</td>
            <td>{expert.expertID}</td>
            <div className='actions-buttons'>
              {showApproveButton && (
                <td className="text-right">
                  <button 
                    className="button button-primary"
                    onClick={() => onApprove(expert.expertID, expert.expertName)}
                  >
                    <UserCheck size={16} />
                    Approve
                  </button>
                </td>
              )}
              {showDeclineButton && (
                <td className="text-right">
                <button 
                className="button button-secondary"
                onClick={() => onReject(expert.expertID, expert.expertName)}
              >
                <UserX size={16} />
                remove
              </button>
              </td>
              )}
            </div>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExpertsTable;
