import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const InstructorMyClass = () => {


    const [myclass, setMyClass] = useState([])

    const {user} = useContext(AuthContext)


    useEffect(() => { 


        fetch (`http://localhost:8000/instructorClass/farhad@gmail.com`)
        .then (res => res.json())
        .then (data => setMyClass(data))







    }, [])
    return (
        <div>

<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>


              <th>Class Info</th>

              <th>Instructor Info</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>






            {

              myclass && myclass.map(data => {


                return (


                  <>
                    <tr className='text-white'>
                      <td><div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>

                        <p>{data.name}</p> </td>

                      <td>



                        <p>{data.instructor}</p>
                        <p>{data?.email}</p>
                      </td>
                      <td>{data.availableSeats}</td>
                      <td>{data.price}</td>
                      <td>{data.status}</td>
                      <td>


                       {data.status === 'approved' || data.status === 'pending' || data.feedback}
                      </td>



                    </tr>



                  </>

                )
              })
            }

          </tbody>

        </table>
      </div>            
        </div>
    );
};

export default InstructorMyClass;