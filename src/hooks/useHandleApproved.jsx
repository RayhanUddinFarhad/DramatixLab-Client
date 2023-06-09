import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useHandleApproved = () => {
    const { isLoading, error, data : classInfo , refetch } = useQuery({
        queryKey: ['classInfo' ],
        queryFn: () =>
          fetch(`http://localhost:8000/classes`)
          .then(
            (res) => res.json(),
          ),
      })


      return [classInfo]
};

export default useHandleApproved;