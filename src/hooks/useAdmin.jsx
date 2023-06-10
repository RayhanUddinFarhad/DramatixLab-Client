import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user} = useContext(AuthContext)
    const token = localStorage.getItem('access_token')
    

    
    const { isLoading, error, data : isAdmin , refetch } = useQuery({
        queryKey: ['isAdmin', user?.email ],
        queryFn: async () => {
              const res = await fetch(`http://localhost:8000/users/admin/${user?.email}`, { headers: {
                  authorization: `bearer ${token}`
              }})
              return res.json();
          },
          
      })


      return [isAdmin]
};

export default useAdmin;