import React, { useState } from 'react';
import useBooking from '../../../../hooks/useBooking';
import AllClass from '../../Home/popularclass/AllClass';
import MyClass from './MyClass';

const MyBooking = () => {




    const [booking] = useBooking()
    console.log(booking);
    const [studentDashboar, setStudentDashboar] =  useState(true)
    return (
        <div className='grid grid-cols-2 gap-5'>

           

            {

                booking && booking.map (data => <MyClass data = {data}></MyClass>)
                
            }
            
        </div>
    );
};

export default MyBooking;