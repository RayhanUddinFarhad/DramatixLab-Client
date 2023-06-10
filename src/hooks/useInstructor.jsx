import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')

    
    const { isLoading, error, data : Isinstructor , refetch } = useQuery({
        queryKey: ['Isinstructor', user?.email ],
        queryFn: async () => {
          const res = await fetch(`http://localhost:8000/users/instructor/${user?.email}`, { headers: {
              authorization: `bearer ${token}`
          }})
          return res.json();
      },
      })


      return [Isinstructor]
};

export default useInstructor;