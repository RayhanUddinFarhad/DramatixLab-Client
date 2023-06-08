import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClasses = () => {
    const { isLoading, error, data : classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: () =>
          fetch('http://localhost:8000/classes').then(
            (res) => res.json(),
          ),
      })


      return [classes, refetch]
};

export default useClasses;