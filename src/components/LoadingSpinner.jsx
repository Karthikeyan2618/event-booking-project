import React from 'react';
import './LoadingSpinner.css';

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div key={index} className={`skeleton ${type}`}>
      <div className="skeleton-shimmer"></div>
    </div>
  ));

  return <>{skeletons}</>;
};



