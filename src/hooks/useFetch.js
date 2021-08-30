import { useState } from 'react';

export const useFetch = callback => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, isError];
};
