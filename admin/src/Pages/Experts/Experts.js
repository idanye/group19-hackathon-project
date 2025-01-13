import React from 'react';
import { AlertCircle, UserX } from 'lucide-react';
import { ExpertsTable } from './ExpertsTable';
import { useFetch } from '../../Hooks/useFetch';  // שינוי כאן

const ExpertsList = () => {
  const { data: experts, isLoading, error } = useFetch('http://localhost:5000/admin/allExperts');

  return (
    <div className="content-container">
      <div className="page-header">
        <h1 className="page-title">Approved Experts</h1>
        <p className="page-subtitle">Manage and view all approved experts in the system</p>
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
          Error loading experts: {error}
        </div>
      )}

      {!experts && !isLoading && (
        <div className="status-container">
          <UserX size={40} />
          <p>No experts found in the system</p>
        </div>
      )}

      {experts?.data && <ExpertsTable data={experts.data} />}
    </div>
  );
};

export default ExpertsList;