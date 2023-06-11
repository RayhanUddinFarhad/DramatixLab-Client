import React from 'react';
import { FaAlignRight, FaArrowRight, FaGraduationCap, FaMedal } from 'react-icons/fa';

const AnotherExtraSection = () => {
    return (
        <div className='lg:flex space-x-5'>


            <img className='rounded-2xl lg:w-9/12' src="https://d3s3zh7icgjwgd.cloudfront.net/AcuCustom/Sitename/DAM/248/Into-The-Woods-directed-by-Nona-Shepphard-RADA-Photo-Linda-_Standard.jpg" alt="" />

            <div className='space-y-5'>



                <p className='text-red-500 font-bold'>About Us ----------</p>

                <h1 className='text-4xl font-bold'>Welcome To the DramatixLab</h1>
                <p>Discover the magic of drama and theatre at DramatixLab. Unleash your creativity through engaging programs, experienced instructors, and a supportive community. Let your imagination take center stage!</p>


                <p className='text-3xl font-bold flex items-center'><FaMedal className='mr-2 bg-sky-500 text-white p-1 rounded-lg'></FaMedal> Best Quality</p>
                <p className='text-3xl font-bold flex items-center'><FaGraduationCap className='mr-2 bg-sky-500 text-white p-1 rounded-lg'></FaGraduationCap> Best Expert Instructor</p>

                <button className='button-primary flex items-center'>Explore More <FaArrowRight className='ml-2'></FaArrowRight></button>
            </div>
            
        </div>
    );
};

export default AnotherExtraSection;