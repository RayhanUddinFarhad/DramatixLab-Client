import React, { useContext, useEffect, useState } from 'react';
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { AuthContext } from '../../../../providers/AuthProvider';
import moment from 'moment/moment';

const MyPaymentHistory = () => {
    
    const {user} = useContext(AuthContext)

    const [classInfo, setClasseInfo] = useState([])


    useEffect(() => { 



        fetch (`http://localhost:8000/paymentHistory/${user?.email}`)
        .then (res => res.json())
        .then (data => setClasseInfo(data))
    },[])
    return (
        <div>



<h1>I am payment</h1>



<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>


              <th>Class Image</th>
              <th>Course Name</th>

              <th>Price</th>
              <th>Status</th>
              <th>Payment time</th>
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
                      </div>

                      </td>
                      <td>{data.name}</td>

                      
                      <td>{data.price}</td>
                      <td>Paid</td>
                      <td>{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                      <td>


                       


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

export default MyPaymentHistory;