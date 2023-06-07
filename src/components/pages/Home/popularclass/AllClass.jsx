import React from 'react';

const AllClass = ({data}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-white h-full">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p> Instructor: {data.instructor}</p>
    <p>Available Seats : {data.availableSeats}</p>
    <p>Price : ${data.price}</p>
    
  </div>
</div>
        </div>
    );
};

export default AllClass;