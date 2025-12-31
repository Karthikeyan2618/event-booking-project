import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  return (
    <div className="loading-container">
      <div className={`spinner ${size}`}>
        <div className="spinner-inner"></div>
      </div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export const InlineLoading = ({ size = 'small' }) => (
  <div className={`inline-spinner ${size}`}>
    <div className="spinner-inner"></div>
  </div>
);

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className={`skeleton ${type}`}>
      <div className="skeleton-shimmer"></div>
    </div>
  ));

  return <>{skeletons}</>;
};

export default LoadingSpinner;
