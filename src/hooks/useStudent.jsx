import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useStudent = () => {
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')

    
    const { isLoading, error, data : IsStudent , refetch } = useQuery({
        queryKey: ['IsStudent', user?.email ],
        queryFn: async () => {
          const res = await fetch(`http://localhost:8000/users/student/${user?.email}`, { headers: {
              authorization: `bearer ${token}`
          }})
          return res.json();
      },
      })


      return [IsStudent]
};

export default useStudent;