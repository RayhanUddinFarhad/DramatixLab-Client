import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [Isinstructor] = useInstructor(); 
  const [IsStudent] = useStudent()
  console.log( IsStudent);
  console.log(isAdmin, Isinstructor, IsStudent);

  const [userOne] = useUser();

  console.log(userOne);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-base-200 py-5">
          <div>
            <img className="object-contain  border-2 border-red-300 rounded-full mx-auto w-52" src={user?.photoURL} alt="" />
            <h1 className="text-center text-xl font-bold">{user?.displayName}</h1>
            <h1 className="text-center text-xl font-bold">{user?.email}</h1>
            
          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-96 h-full bg-base-200 ">
            {/* Sidebar content here */}
            <>
              {isAdmin ? (
                <>
                <h1 className='text-3xl font-bold'>Hello Admin,</h1>
                  <li>
                    <Link to="/dashboard/manageClasses">Manage Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageUsers">Manage Users</Link>
                  </li>
                </>
              ) : Isinstructor ? (
                <>
                  <li>
                  <h1 className='text-3xl font-bold'>Hello Instructor,</h1>

                    <Link to="/dashboard/addClass">Add A class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/instructorClass">My Classes</Link>
                  </li>
                </>
              ) : IsStudent ? (
                <> 
                <h1>Hello Student, </h1>
                  <li>
                    <Link to="/dashboard/myClass">My Selected Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myEnrolledClass">My Enrolled Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymentHistory">My Payment History</Link>
                  </li>
                </>
              )
              :

              <p>No Route</p>
            
            }
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
