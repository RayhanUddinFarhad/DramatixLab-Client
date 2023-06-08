import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUser = () => {
    const { isLoading, error, data : user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
          fetch('http://localhost:8000/users').then(
            (res) => res.json(),
          ),
      })


      return [user, refetch]
};

export default useUser;