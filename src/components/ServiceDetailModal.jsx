import React, { useState } from 'react';
import './ServiceDetailModal.css';

const ServiceDetailModal = ({ service, isOpen, onClose, onBookNow }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 3;

  if (!isOpen || !service) return null;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Pagination for reviews
  const totalReviewPages = Math.ceil(service.reviews.length / reviewsPerPage);
  const currentReviews = service.reviews.slice(
    (currentReviewPage - 1) * reviewsPerPage,
    currentReviewPage * reviewsPerPage
  );

  const nextReviewPage = () => {
    if (currentReviewPage < totalReviewPages) {
      setCurrentReviewPage(currentReviewPage + 1);
    }
  };

  const prevReviewPage = () => {
    if (currentReviewPage > 1) {
      setCurrentReviewPage(currentReviewPage - 1);
    }
  };

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{service.name}</h2>
          <div className="modal-category">{service.category}</div>
        </div>

        {/* Image Gallery with Carousel */}
        <div className="image-gallery">
          <div className="main-image-container">
            <img
              src={service.images[currentImageIndex]}
              alt={service.name}
              className="main-image"
            />
            {service.images.length > 1 && (
              <>
                <button className="nav-button prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="nav-button next" onClick={nextImage}>
                  ›
                </button>
              </>
            )}
          </div>

          {service.images.length > 1 && (
            <div className="thumbnail-container">
              {service.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${service.name} ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="modal-body">
          <div className="service-details">
            <div className="detail-section">
              <h3>Service Details</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-label">Price:</span>
                  <span className="detail-value">₹{service.price}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">📍 {service.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Rating:</span>
                  <span className="detail-value">
                    {renderStars(service.rating)}
                    <span className="rating-text">({service.rating})</span>
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Availability:</span>
                  <span className={`detail-value availability ${service.availability.toLowerCase()}`}>
                    {service.availability}
                  </span>
                </div>
              </div>
            </div>

            <div className="description-section">
              <h3>Description</h3>
              <p>{service.longDescription}</p>
            </div>

            {/* Contact Information */}
            <div className="contact-section">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">{service.contactInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">{service.contactInfo.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Website:</span>
                  <span className="contact-value">
                    <a href={`https://${service.contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                      {service.contactInfo.website}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Reviews Section with Pagination */}
            <div className="reviews-section">
              <h3>Customer Reviews ({service.reviews.length})</h3>
              {currentReviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-user">{review.user}</div>
                    <div className="review-date">{formatDate(review.date)}</div>
                  </div>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))}

              {service.reviews.length > reviewsPerPage && (
                <div className="pagination-controls">
                  <button
                    className="pagination-btn"
                    onClick={prevReviewPage}
                    disabled={currentReviewPage === 1}
                  >
                    Previous
                  </button>
                  <span className="pagination-info">
                    Page {currentReviewPage} of {totalReviewPages}
                  </span>
                  <button
                    className="pagination-btn"
                    onClick={nextReviewPage}
                    disabled={currentReviewPage === totalReviewPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Availability Calendar */}
            <div className="availability-section">
              <h3>Availability Calendar</h3>
              <div className="calendar-info">
                <div className="availability-status">
                  <span className="status-dot available"></span>
                  <span>Available</span>
                </div>
                <div className="availability-status">
                  <span className="status-dot booked"></span>
                  <span>Booked</span>
                </div>
              </div>
              <div className="calendar-dates">
                <h4>Available Dates:</h4>
                <div className="date-list">
                  {service.availabilityCalendar.availableDates.map((date, index) => (
                    <span key={index} className="date-tag available">
                      {formatDate(date)}
                    </span>
                  ))}
                </div>

                <h4>Booked Dates:</h4>
                <div className="date-list">
                  {service.availabilityCalendar.bookedDates.map((date, index) => (
                    <span key={index} className="date-tag booked">
                      {formatDate(date)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className={`book-now-btn ${service.availability === 'Booked' ? 'booked' : ''}`}
            onClick={() => onBookNow(service)}
            disabled={service.availability === 'Booked'}
          >
            {service.availability === 'Booked' ? 'Already Booked' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
