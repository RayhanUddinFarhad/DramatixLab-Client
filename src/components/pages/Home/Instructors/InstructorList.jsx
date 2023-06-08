import React from 'react';

const InstructorList = ({data}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-white h-full">
        <figure><img src={data.image} className='h-96  object-cover rounded-lg' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p> Topic: {data.topic}</p>
          <p>Students : {data.students}</p>
          <p>Email : {data.email}</p>
          
        </div>
      </div>
    );
};

export default InstructorList;