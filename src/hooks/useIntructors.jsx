import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useIntructors = () => {
    const { isLoading, error, data : instructor = [], refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: () =>
          fetch('http://localhost:8000/instructors').then(
            (res) => res.json(),
          ),
      })


      return [instructor, refetch]
};

export default useIntructors;