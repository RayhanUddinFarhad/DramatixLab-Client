import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const UserHome = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
<div className="hero bg-base-200">
  <div className="hero-content flex-col  lg:flex-row">
    <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-6 text-2xl">{user?.email}</p>
    </div>
  </div>
</div>        </div>
    );
};

export default UserHome;