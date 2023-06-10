import React, { useContext, useState } from 'react';
import useUser from '../../../../hooks/useUser';
import axios from 'axios';
import { AuthContext } from '../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useBooking from '../../../../hooks/useBooking';
import useAdmin from '../../../../hooks/useAdmin';
import useInstructor from '../../../../hooks/useInstructor';

const AllClass = ({ data, selectbutton, studentDashboar }) => {


  const { user } = useContext(AuthContext)
  const [, refetch] = useBooking()

  const [isAdmin] = useAdmin()
  const [Isinstructor] = useInstructor()

  const [disable, setDisabled] = useState(false)















  const item = { data, email: user?.email }



  const handleDelete = (id) => {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {




        fetch(`http://localhost:8000/myBooking/${id}`, {

          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)

            if (data.deletedCount > 1) {

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )


            }

            refetch()




          })

      }
    })



  }

  const handleBookings = (id) => {


    axios.post('http://localhost:8000/myBooking', item)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(id);



  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl text-white h-full">
        <figure><img src={data.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p> Instructor: {data.instructor}</p>
          <p>Available Seats : {data.availableSeats}</p>
          <p>Price : ${data.price}</p>
          <p>Total Enrolled : {data.totalEnrolled}</p>


          {

            selectbutton && <button onClick={() => handleBookings(data._id)}  className={`${isAdmin?.admin || Isinstructor?.instructor || data.availableSeats <= 0 ? 'btn btn-disabled' : 'button-primary'}`}>select now</button>
          }

          {

            studentDashboar && <div className='flex justify-between'>


              <button className='button-primary'>Pay Now</button>
              <button onClick={() => handleDelete(data._id)} className='btn btn-error'>Delete</button>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default AllClass;