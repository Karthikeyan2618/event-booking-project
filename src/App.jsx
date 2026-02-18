import React, { useState, useEffect, useCallback } from 'react';
import Filters from './components/Filters';
import ServiceCard from './components/ServiceCard';
import ServiceDetailModal from './components/ServiceDetailModal';
import BookingModal from './components/BookingModal';

import { ToastProvider, useToast } from './components/Toast';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useServices } from './hooks/useApiCall';
import { categories, locations } from './data/mockData';
import './App.css';

const AppContent = () => {

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState(null);

  const { services, loading, error, fetchServices } = useServices();
  const toast = useToast();

  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    location: 'All',
    minPrice: 0,
    maxPrice: 50000,
    minRating: 0
  });

  // Fetch services on component mount and when filters change
  useEffect(() => {
    fetchServices(filters);
  }, [filters, fetchServices]);

  // Handle API errors
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, toast]);

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);



  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedService(null);
  }, []);

  const handleBookNow = useCallback((service) => {
    setBookingService(service);
    setIsBookingModalOpen(true);
    handleCloseModal();
  }, [handleCloseModal]);

  const handleCloseBookingModal = useCallback(() => {
    setIsBookingModalOpen(false);
    setBookingService(null);
  }, []);

  const handleBookingComplete = useCallback((bookingData) => {
    console.log('Booking completed:', bookingData);
    toast.success(`Booking confirmed! Your booking ID: ${bookingData.bookingId}`);
  }, [toast]);


  const renderLoading = () => (
    <div className="services-section">
      <div className="services-header">
        <h2>Loading Services...</h2>
      </div>
      <div className="skeleton-grid">
        <p>Loading...</p>
      </div>
    </div>
  );


  const renderError = () => (
    <div className="services-section">
      <div className="services-header">
        <h2>Available Services</h2>
      </div>
      <div className="error-state">
        <div className="error-icon">⚠️</div>
        <h3>Unable to load services</h3>
        <p>{error}</p>
        <button
          className="btn-primary"
          onClick={() => fetchServices(filters)}
        >
          Try Again
        </button>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="services-section">
      <div className="services-header">
        <h2>Available Services ({services.length})</h2>
        {services.length === 0 && !loading && (
          <p className="no-results">No services match your filters. Try adjusting your search criteria.</p>
        )}
      </div>

      <div className="services-grid">
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onClick={handleServiceClick}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Eventify</h1>
              <p>Find and book the best event services</p>
            </div>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="content-wrapper">
            {/* Filters Sidebar */}
            <aside className="filters-sidebar">
              <Filters
                filters={filters}
                onFiltersChange={handleFiltersChange}
                categories={categories}
                locations={locations}
              />
            </aside>

            {/* Services Content */}
            {loading && renderLoading()}
            {error && renderError()}
            {!loading && !error && renderServices()}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Spotlight. All rights reserved.</p>
        </div>
      </footer>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        similarServices={selectedService ? services.filter(s => s.category === selectedService.category && s.id !== selectedService.id).slice(0, 4) : []}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onBookNow={handleBookNow}
        onSelectService={handleServiceClick}
      />

      {/* Booking Modal */}
      <BookingModal
        service={bookingService}
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        onBookingComplete={handleBookingComplete}
      />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
