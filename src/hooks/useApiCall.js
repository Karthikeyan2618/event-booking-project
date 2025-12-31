import { useState, useCallback } from 'react';

export const useApiCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = useCallback(async (apiCall, ...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall(...args);
      setData(result);
      return { data: result, error: null };
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    execute,
    loading,
    error,
    data,
    reset,
    hasError: error !== null,
    hasData: data !== null
  };
};


export const useServices = () => {
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState({});
  
  const apiCall = useApiCall();

  const fetchServices = useCallback(async (newFilters = {}) => {
    const result = await apiCall.execute(
      async () => {
        const { api } = await import('../services/api');
        return api.getServices(newFilters);
      }
    );
    
    if (result.data) {
      setServices(result.data);
      setFilters(newFilters);
    }
    
    return result;
  }, [apiCall.execute]);

  return {
    services,
    filters,
    loading: apiCall.loading,
    error: apiCall.error,
    fetchServices,
    refetch: () => fetchServices(filters),
    reset: apiCall.reset
  };
};

export const useBooking = () => {
  const apiCall = useApiCall();

  const submitBooking = useCallback(async (bookingData) => {
    return apiCall.execute(
      async () => {
        const { api } = await import('../services/api');
        return api.submitBooking(bookingData);
      }
    );
  }, [apiCall.execute]);

  return {
    submitBooking,
    loading: apiCall.loading,
    error: apiCall.error,
    bookingData: apiCall.data,
    reset: apiCall.reset
  };
};


export const useServiceDetails = () => {
  const apiCall = useApiCall();

  const fetchService = useCallback(async (serviceId) => {
    return apiCall.execute(
      async () => {
        const { api } = await import('../services/api');
        return api.getServiceById(serviceId);
      }
    );
  }, [apiCall.execute]);

  return {
    service: apiCall.data,
    loading: apiCall.loading,
    error: apiCall.error,
    fetchService,
    reset: apiCall.reset
  };
};

export const useAvailability = () => {
  const apiCall = useApiCall();

  const checkAvailability = useCallback(async (serviceId, date) => {
    return apiCall.execute(
      async () => {
        const { api } = await import('../services/api');
        return api.checkAvailability(serviceId, date);
      }
    );
  }, [apiCall.execute]);

  return {
    availability: apiCall.data,
    loading: apiCall.loading,
    error: apiCall.error,
    checkAvailability,
    reset: apiCall.reset
  };
};
