import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, onClick }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="service-card" onClick={() => onClick(service)}>
      <div className="service-image">
        <img src={service.image} alt={service.name} />
        <div className={`availability-badge ${service.availability.toLowerCase()}`}>
          {service.availability}
        </div>
      </div>
      
      <div className="service-info">
        <h3 className="service-name">{service.name}</h3>
        <p className="service-category">{service.category}</p>
        <p className="service-location">📍 {service.location}</p>
        
        <div className="service-rating">
          {renderStars(service.rating)}
          <span className="rating-text">({service.rating})</span>
        </div>
        
        <div className="service-price">
          ${service.price}
        </div>
        
        <p className="service-description">{service.description}</p>
        
        <button 
          className={`book-btn ${service.availability === 'Booked' ? 'booked' : ''}`}
          disabled={service.availability === 'Booked'}
        >
          {service.availability === 'Booked' ? 'Booked' : 'Book Now'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
