import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import useHandleApproved from '../../../../hooks/useHandleApproved';
import { useForm } from 'react-hook-form';

const ManageClass = () => {

  // const [classes, setClasses] = useState([])




  // useEffect(() => {

  //   fetch(`http://localhost:8000/classes`)
  //     .then(res => res.json())
  //     .then(data => setClasses(data))
  // }, [])


  const [classInfo, refetch] = useHandleApproved()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();



  const handleApproved = (id) => {
    console.log(id);




    fetch(`http://localhost:8000/approved/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        refetch()

      })

  }


  const handleDeny = (id) => {


    fetch(`http://localhost:8000/deny/${id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => console.log(data))

    refetch()







  }



 



  const [feedbackId, setFeedbackId] = useState(null); // State to hold the ID for sending feedback

  const showModal = (id) => {
    setFeedbackId(id); // Set the ID when the modal is shown
  };

  const SendFeedback = (event) => {
    event.preventDefault();
    const message = event.target.feedback.value;
    console.log(message);

    if (feedbackId) {
      fetch(`http://localhost:8000/sendFeedback/${feedbackId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
        .then(res => res.json())
        .then(data => console.log(data));

      // Close the modal after sending feedback
      const modalCheckbox = document.getElementById('my_modal_6');
      modalCheckbox.checked = false;
    }
  };

  





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
                        <button onClick={() => handleDeny(data._id)} className='btn btn-error'>Deny</button>


                        {/* The button to open modal */}
                        <label htmlFor="my_modal_6" className="button-primary" onClick={() => showModal(data._id)}>Send Feedback</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                          <form onSubmit={SendFeedback}   className="modal-box">
                          <textarea placeholder="Your Feedback" name='feedback' className="textarea textarea-bordered textarea-lg w-full max-w-xs" >

                            
                          </textarea>

                          <button onClick={() => sendingto(data._id)} className='button-primary'>send Now</button>

                            <div className="modal-action">
                              <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                          </form>
                        </div>




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