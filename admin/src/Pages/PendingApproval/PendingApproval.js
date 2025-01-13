import React from 'react';
import { AlertCircle, UserX } from 'lucide-react';
import { ExpertsTable } from '../Experts/ExpertsTable';
import { useFetch } from '../../Hooks/useFetch';  // שינוי כאן

const PendingApproval = () => {
  const { data: experts, isLoading, error } = useFetch('http://localhost:5000/admin/unApprovedExperts');

  const handleApprove = async (expertId) => {
    try {
      // Implement your approval logic here
      console.log('Approving expert:', expertId);
    } catch (error) {
      console.error('Error approving expert:', error);
    }
  };

  return (
    <div className="content-container">
      <div className="page-header">
        <h1 className="page-title">Pending Approvals</h1>
        <p className="page-subtitle">Review and approve expert applications</p>
      </div>

      {isLoading && (
        <div className="status-container">
          <div className="loading-spinner" />
          Loading...
        </div>
      )}

      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          Error loading pending approvals: {error}
        </div>
      )}

      {!experts && !isLoading && (
        <div className="status-container">
          <UserX size={40} />
          <p>No pending approval requests</p>
        </div>
      )}

      {experts?.data && (
        <ExpertsTable 
          data={experts.data} 
          showApproveButton={true}
          onApprove={handleApprove}
        />
      )}
    </div>
  );
};

export default PendingApproval;