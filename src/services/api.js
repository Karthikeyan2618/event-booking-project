
const simulateDelay = (min = 300, max = 1000) => 
  new Promise(resolve => setTimeout(resolve, Math.random() * (max - min) + min));

const shouldFail = () => Math.random() < 0.1;

export const api = {

  async getServices(filters = {}) {
    await simulateDelay();
    
    if (shouldFail()) {
      throw new Error('Failed to fetch services. Please try again.');
    }

    const { servicesData } = await import('../data/mockData');

    let filteredServices = [...servicesData];
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredServices = filteredServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm) ||
        service.description.toLowerCase().includes(searchTerm) ||
        service.category.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.category && filters.category !== 'All') {
      filteredServices = filteredServices.filter(service => 
        service.category === filters.category
      );
    }
    
    if (filters.location && filters.location !== 'All') {
      filteredServices = filteredServices.filter(service => 
        service.location === filters.location
      );
    }
    
    if (filters.minPrice !== undefined) {
      filteredServices = filteredServices.filter(service => 
        service.price >= filters.minPrice
      );
    }
    
    if (filters.maxPrice !== undefined) {
      filteredServices = filteredServices.filter(service => 
        service.price <= filters.maxPrice
      );
    }
    
    if (filters.minRating !== undefined) {
      filteredServices = filteredServices.filter(service => 
        service.rating >= filters.minRating
      );
    }
    
    return filteredServices;
  },


  async getServiceById(id) {
    await simulateDelay(200, 500);
    
    if (shouldFail()) {
      throw new Error('Failed to fetch service details. Please try again.');
    }

    const { servicesData } = await import('../data/mockData');
    const service = servicesData.find(s => s.id === parseInt(id));
    
    if (!service) {
      throw new Error('Service not found');
    }
    
    return service;
  },

  
  async submitBooking(bookingData) {
    await simulateDelay(1000, 2000); 
    
    if (shouldFail()) {
      throw new Error('Booking submission failed. Please try again.');
    }
    
    
    const bookingId = `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      ...bookingData,
      bookingId,
      status: 'confirmed',
      confirmationDate: new Date().toISOString()
    };
  },


  async checkAvailability(serviceId, date) {
    await simulateDelay(100, 300);
    
    if (shouldFail()) {
      throw new Error('Availability check failed. Please try again.');
    }

    const { servicesData } = await import('../data/mockData');
    const service = servicesData.find(s => s.id === parseInt(serviceId));
    
    if (!service) {
      throw new Error('Service not found');
    }
    
    
    const isAvailable = !service.availabilityCalendar.bookedDates.includes(date);
    
    return {
      available: isAvailable,
      message: isAvailable ? 'Available' : 'Already booked'
    };
  }
};


export const useApi = () => {
  const callApi = async (apiFunction, ...args) => {
    try {
      const result = await apiFunction(...args);
      return { data: result, error: null };
    } catch (error) {
      return { data: null, error: error.message };
    }
  };

  return { callApi };
};

export default api;
