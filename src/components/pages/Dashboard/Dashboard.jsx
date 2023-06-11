import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import useStudent from '../../../hooks/useStudent';
import { FaBookmark, FaChalkboardTeacher, FaCheck, FaCheckCircle, FaCog, FaCreditCard, FaEnvelope, FaGraduationCap, FaHome, FaPlusCircle, FaUser, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
  const [Isinstructor] = useInstructor();
  const [IsStudent] = useStudent()
  console.log(IsStudent);
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
        <div className="drawer-side bg-base-200 p-5">
          <div className='space-y-5 text-center'>
            <img className="object-contain  border-2 border-red-300 rounded-full mx-auto w-52" src={user?.photoURL} alt="" />
            <h1 className="text-center text-xl font-bold flex items-center"> <FaUser className='mr-2'></FaUser> {user?.displayName}</h1>
            <h1 className="text-center text-xl font-bold flex items-center"> <FaEnvelope className='mr-2'></FaEnvelope> {user?.email}</h1>


          </div>
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-96 h-full bg-base-200 font-semibold">
            {/* Sidebar content here */}



            <>
              {isAdmin ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Admin</span></h1>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>
                    <Link to="/dashboard/manageClasses"> <FaCog></FaCog> Manage Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageUsers"> <FaUsers></FaUsers> Manage Users</Link>
                  </li>
                </>
              ) : Isinstructor ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Instructor</span></h1>


                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li>


                    <Link to="/dashboard/addClass"> <FaPlusCircle></FaPlusCircle> Add A class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/instructorClass"> <FaGraduationCap></FaGraduationCap> My Classes</Link>
                  </li>
                </>
              ) : IsStudent ? (
                <>
                  <h1 className='text-3xl font-bold'>Hello <span className='text-primary-content'>Student</span></h1>
                  <li><Link to="/dashboard"> <FaHome></FaHome> User Home</Link></li>

                  <li className='flex'>
                    <Link to="/dashboard/myClass"><FaCheckCircle></FaCheckCircle> My Selected Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/myEnrolledClass"> <FaBookmark></FaBookmark>My Enrolled Class</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymentHistory"> <FaCreditCard></FaCreditCard> My Payment History</Link>
                  </li>
                </>
              )
                :

                <p>Loading.....</p>

              }
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
