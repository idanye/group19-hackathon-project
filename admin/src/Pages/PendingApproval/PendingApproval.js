import React, { useContext } from 'react';
import { AlertCircle, UserX } from 'lucide-react';
import { ExpertsTable } from '../Experts/ExpertsTable';
import { ExpertsContext } from '../../Context/ExpertsContext';

const PendingApproval = () => {
  // Get context values 
  const {
    unApprovedExperts,
    unApprovedExpertsLoading,
    unApprovedExpertsError,
    approveExpert,
  } = useContext(ExpertsContext);

  const handleApprove = async (expertId) => {
    try {
      await approveExpert(expertId);
      alert(`Expert ${expertId} approved successfully!`);
    } catch (error) {
      console.error('Error approving expert:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="content-container">
      <div className="page-header">
        <h1 className="page-title">Pending Approvals</h1>
        <p className="page-subtitle">Review and approve expert applications</p>
      </div>

      {/* Show loading spinner if data is loading */}
      {unApprovedExpertsLoading && (
        <div className="status-container">
          <div className="loading-spinner" />
          Loading...
        </div>
      )}

      {/* Show error message if there's an error */}
      {unApprovedExpertsError && (
        <div className="error-message">
          <AlertCircle size={20} />
          Error loading pending approvals: {unApprovedExpertsError}
        </div>
      )}

      {/* Show message if no unapproved experts and not loading */}
      {unApprovedExperts?.length === 0 && !unApprovedExpertsLoading && (
        <div className="status-container">
          <UserX size={40} />
          <p>No pending approval requests</p>
        </div>
      )}

      {/* Render ExpertsTable if there are unapproved experts */}
      {unApprovedExperts?.length > 0 && (
        <ExpertsTable 
          data={unApprovedExperts}  
          showApproveButton={true}
          onApprove={handleApprove}
        />
      )}
    </div>
  );
};

export default PendingApproval;

