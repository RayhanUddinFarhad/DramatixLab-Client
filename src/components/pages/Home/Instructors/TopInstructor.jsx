import React from 'react';
import AllClass from '../popularclass/AllClass';
import InstructorList from './InstructorList';

const TopInstructor = () => {

    const Instructor = [
        {
            "image": "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
            "name": "John Smith",
            "topic": "Acting Techniques",
            "students": 25
        },
        {
            "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            "name": "Emily Johnson",
            "topic": "Musical Theatre",
            "students": 20
        },
        {
            "image": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "name": "David Thompson",
            "topic": "Playwriting",
            "students": 18
        },
        {
            "image": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "name": "Sarah Wilson",
            "topic": "Stage Design",
            "students": 15
        },
        {
            "image": "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            "name": "Michael Anderson",
            "topic": "Shakespearean Acting",
            "students": 22
        },
        {
            "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            "name": "Jessica Davis",
            "topic": "Improvisation Skills",
            "students": 30
        }
    ]




    return (
        <div>




            <div className='text-center mx-auto my-10'>

                <h1 className='text-3xl text-white font-extrabold border-b lg:mx-96 border-red-400 pb-2'>Top Instructor</h1>



            </div>

            <div className='grid lg:grid-cols-3 gap-5'>




                {
                    Instructor && Instructor.map(data => <InstructorList data={data}></InstructorList>)
                }
            </div>


        </div>
    );
};

export default TopInstructor;