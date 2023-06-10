import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user} = useContext(AuthContext)
    

    
    const { isLoading, error, data : isAdmin , refetch } = useQuery({
        queryKey: ['isAdmin', user?.email ],
        queryFn: () =>
          fetch(`http://localhost:8000/users/admin/${user?.email}`)
          .then(
            (res) => res.json(),
          ),
      })


      return [isAdmin]
};

export default useAdmin;