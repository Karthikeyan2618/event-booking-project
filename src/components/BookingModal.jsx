import React, { useState, useEffect } from 'react';
import { useBooking, useAvailability } from '../hooks/useApiCall';
import { useToast } from './Toast';
import { InlineLoading } from './LoadingSpinner';
import './BookingModal.css';

const BookingModal = ({ service, isOpen, onClose, onBookingComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: 1,
    requirements: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  
  const { submitBooking, loading: bookingLoading, error: bookingError, reset: resetBooking } = useBooking();
  const { checkAvailability, loading: availabilityLoading, availability, reset: resetAvailability } = useAvailability();
  const toast = useToast();

  if (!isOpen || !service) return null;

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!bookingData.date) newErrors.date = 'Date is required';
        if (!bookingData.time) newErrors.time = 'Time is required';
        break;
      case 2:
        if (bookingData.guests < 1) newErrors.guests = 'At least 1 guest is required';
        if (bookingData.guests > 100) newErrors.guests = 'Maximum 100 guests allowed';
        break;
      case 3:
        if (!bookingData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!bookingData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!bookingData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(bookingData.email)) newErrors.email = 'Email is invalid';
        if (!bookingData.phone.trim()) newErrors.phone = 'Phone number is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
    
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      
      const bookingConfirmation = {
        ...bookingData,
        service: service.name,
        serviceId: service.id,
        totalPrice: service.price * bookingData.guests,
        bookingId: `BK-${Date.now()}`,
        bookingDate: new Date().toISOString()
      };
      
      onBookingComplete(bookingConfirmation);
      onClose();
    }
  };

  const renderStep1 = () => (
    <div className="booking-step">
      <h3>Select Date & Time</h3>
      <div className="form-group">
        <label htmlFor="date">Date *</label>
        <input
          type="date"
          id="date"
          value={bookingData.date}
          onChange={(e) => handleInputChange('date', e.target.value)}
          className={errors.date ? 'error' : ''}
          min={new Date().toISOString().split('T')[0]}
        />
        {errors.date && <span className="error-text">{errors.date}</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="time">Time *</label>
        <select
          id="time"
          value={bookingData.time}
          onChange={(e) => handleInputChange('time', e.target.value)}
          className={errors.time ? 'error' : ''}
        >
          <option value="">Select a time</option>
          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="13:00">1:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
        </select>
        {errors.time && <span className="error-text">{errors.time}</span>}
      </div>

      <div className="availability-info">
        <h4>Available Dates:</h4>
        <div className="date-tags">
          {service.availabilityCalendar.availableDates.slice(0, 5).map((date, index) => (
            <span key={index} className="date-tag available">
              {new Date(date).toLocaleDateString()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="booking-step">
      <h3>Guest Information</h3>
      <div className="form-group">
        <label htmlFor="guests">Number of Guests *</label>
        <input
          type="number"
          id="guests"
          value={bookingData.guests}
          onChange={(e) => handleInputChange('guests', parseInt(e.target.value) || 1)}
          className={errors.guests ? 'error' : ''}
          min="1"
          max="100"
        />
        {errors.guests && <span className="error-text">{errors.guests}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="requirements">Special Requirements</label>
        <textarea
          id="requirements"
          value={bookingData.requirements}
          onChange={(e) => handleInputChange('requirements', e.target.value)}
          placeholder="Any special requests or requirements for your event..."
          rows="4"
        />
      </div>

      <div className="price-summary">
        <h4>Price Summary</h4>
        <div className="price-item">
          <span>Base Price:</span>
          <span>${service.price}</span>
        </div>
        <div className="price-item">
          <span>Guests:</span>
          <span>{bookingData.guests} × ${service.price}</span>
        </div>
        <div className="price-total">
          <span>Total:</span>
          <span>${service.price * bookingData.guests}</span>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="booking-step">
      <h3>Contact Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            value={bookingData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={errors.firstName ? 'error' : ''}
            placeholder="John"
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            value={bookingData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={errors.lastName ? 'error' : ''}
            placeholder="Doe"
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={bookingData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={errors.email ? 'error' : ''}
          placeholder="john.doe@example.com"
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          value={bookingData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className={errors.phone ? 'error' : ''}
          placeholder="+1 (555) 123-4567"
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="notes">Additional Notes</label>
        <textarea
          id="notes"
          value={bookingData.notes}
          onChange={(e) => handleInputChange('notes', e.target.value)}
          placeholder="Any additional information we should know..."
          rows="3"
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="booking-step">
      <h3>Booking Summary</h3>
      <div className="summary-card">
        <div className="summary-header">
          <h4>{service.name}</h4>
          <span className="category">{service.category}</span>
        </div>

        <div className="summary-details">
          <div className="detail-item">
            <span>Date:</span>
            <span>{new Date(bookingData.date).toLocaleDateString()}</span>
          </div>
          <div className="detail-item">
            <span>Time:</span>
            <span>{bookingData.time}</span>
          </div>
          <div className="detail-item">
            <span>Guests:</span>
            <span>{bookingData.guests}</span>
          </div>
          <div className="detail-item">
            <span>Total Price:</span>
            <span>${service.price * bookingData.guests}</span>
          </div>
        </div>

        <div className="contact-info">
          <h5>Contact Details</h5>
          <p>{bookingData.firstName} {bookingData.lastName}</p>
          <p>{bookingData.email}</p>
          <p>{bookingData.phone}</p>
        </div>

        {bookingData.requirements && (
          <div className="requirements">
            <h5>Special Requirements</h5>
            <p>{bookingData.requirements}</p>
          </div>
        )}

        {bookingData.notes && (
          <div className="notes">
            <h5>Additional Notes</h5>
            <p>{bookingData.notes}</p>
          </div>
        )}
      </div>

      <div className="confirmation-note">
        <p>Please review your booking details carefully. Once confirmed, you'll receive a confirmation email.</p>
      </div>
    </div>
  );

  const getStepTitle = () => {
    const titles = {
      1: 'Date & Time',
      2: 'Guest Info',
      3: 'Contact Info',
      4: 'Confirmation'
    };
    return titles[currentStep];
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="booking-modal-header">
          <h2>Book {service.name}</h2>
          <div className="booking-progress">
            <div className="progress-steps">
              {[1, 2, 3, 4].map(step => (
                <div
                  key={step}
                  className={`progress-step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                >
                  <span className="step-number">{step}</span>
                  <span className="step-label">{getStepTitle(step)}</span>
                </div>
              ))}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentStep - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="booking-modal-body">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        <div className="booking-modal-footer">
          {currentStep > 1 && (
            <button className="btn-secondary" onClick={handleBack}>
              Back
            </button>
          )}
          
          {currentStep < 4 ? (
            <button className="btn-primary" onClick={handleNext}>
              Continue
            </button>
          ) : (
            <button className="btn-confirm" onClick={handleSubmit}>
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
