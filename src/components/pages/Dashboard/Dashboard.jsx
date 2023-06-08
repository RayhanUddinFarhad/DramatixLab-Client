import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {


    const { user } = useContext(AuthContext)

    const [isAdmin] = useAdmin()
    console.log(isAdmin.admin);




    const [userOne] = useUser()

    console.log(userOne);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">


                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <div >

                        <img className='object-contain  border-2 border-red-300 rounded-full mx-auto' src={user?.photoURL} alt="" />
                        <h1 className='text-center text-xl font-bold'>{user?.displayName}</h1>

                        <h1 className='text-center text-xl font-bold'>{user?.email}</h1>
                    </div>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-96 h-full bg-base-200 text-white">
                        {/* Sidebar content here */}









                        <>
                            {
                                isAdmin.admin ? <> <li><Link to="/dashboard/myClass">Manage Class</Link></li>
                                    <li><Link to="/dashboard/manageUsers">Manage Users</Link></li></> : <> <li><Link to="/dashboard/myClass">My selected  class</Link></li>
                                    <li><Link>My Enrolled Class</Link></li></>
                            }

                        </>
                    </ul>

                </div>
            </div>        </div>
    );
};

export default Dashboard;