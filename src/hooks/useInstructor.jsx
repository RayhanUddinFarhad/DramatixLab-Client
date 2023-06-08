import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useContext(AuthContext)

    
    const { isLoading, error, data : Isinstructor , refetch } = useQuery({
        queryKey: ['Isinstructor', user?.email ],
        queryFn: () =>
          fetch(`http://localhost:8000/users/instructor/${user?.email}`)
          .then(
            (res) => res.json(),
          ),
      })


      return [Isinstructor]
};

export default useInstructor;