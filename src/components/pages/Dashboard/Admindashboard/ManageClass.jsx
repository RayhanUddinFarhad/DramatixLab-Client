import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import useHandleApproved from '../../../../hooks/useHandleApproved';

const ManageClass = () => {

  // const [classes, setClasses] = useState([])




  // useEffect(() => {

  //   fetch(`http://localhost:8000/classes`)
  //     .then(res => res.json())
  //     .then(data => setClasses(data))
  // }, [])


  const [classInfo] = useHandleApproved()


  const handleApproved = (id) => {
    console.log(id);




    fetch(`http://localhost:8000/approved/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }





  return (
    <div>





      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>






            {

              classInfo && classInfo.map(data => {


                return (


                  <>
                    <tr className='text-white'>
                      <td><div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={data.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div> </td>

                      <td>{data.name}</td>
                      <td>{data.instructor}</td>
                      <td>{data?.email}</td>
                      <td>{data.availableSeats}</td>
                      <td>{data.price}</td>
                      <td>{data.status}</td>
                      <td>


                        <button onClick={() => handleApproved(data._id)} className='button-primary'>Approve</button>
                        <button className='btn btn-error'>Deny</button>
                        <button className='button-primary'>Send Feedback</button>
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

export default ManageClass;