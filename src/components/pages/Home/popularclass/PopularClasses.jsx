import React, { useEffect, useState } from 'react';
import AllClass from './AllClass';
import { FaChessKing } from 'react-icons/fa';
import useClasses from '../../../../hooks/useClasses';
import usePopularClasses from '../../../../hooks/usePopularClasses';

const PopularClasses = () => {

    // const allClass = [
    //     {
    //         "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg68nQofvdJmbi0E2UCqtYCw31mXXYABIi-hWjqarw559SXysrswnfvPhDZYIBcLAkgEdQULPPqHObsbtTyrxiycMPJnrIxl-mjCaBbybJqYw-vnXKDt04Mitu2spvIXHGLKe--qMyG3Nn0b63nhyWEWSSCXQT3chcFBPS-1oTFO8fs-uTsomfGSsXJPw/s754/2022-07-02%20213229.png",
    //         "name": "Introduction to Acting",
    //         "instructor": "John Smith",
    //         "availableSeats": 15,
    //         "price": 99.99,
    //         "status": "pending"
    //     },
    //     {
    //         "image": "https://api.time.com/wp-content/uploads/2019/11/time-best-of-culture-2019-theater-hadestown.jpg",
    //         "name": "Musical Theater Performance",
    //         "instructor": "Emily Johnson",
    //         "availableSeats": 12,
    //         "price": 129.99,
    //         "status": "pending"

    //     },
    //     {
    //         "image": "https://media.istockphoto.com/id/1394017865/photo/diverse-actors-practice-play-in-studio.jpg?s=612x612&w=0&k=20&c=Fjn5gmyy6jzcSlWJPwFb5gfJ6yGYmc2Kqj2OzcMGFwg=",
    //         "name": "Playwriting and Script Analysis",
    //         "instructor": "David Thompson",
    //         "availableSeats": 10,
    //         "price": 89.99,
    //         "status": "pending"

    //     },
    //     {
    //         "image": "https://mrspencersacht.files.wordpress.com/2016/10/ceafb9be29c0a256d4b951d014195601.jpg",
    //         "name": "Stagecraft and Set Design",
    //         "instructor": "Sarah Wilson",
    //         "availableSeats": 8,
    //         "price": 109.99,
    //         "status": "pending"

    //     },
    //     {
    //         "image": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/12335/small_thumb%401x.jpg",
    //         "name": "Shakespearean Acting",
    //         "instructor": "Michael Anderson",
    //         "availableSeats": 10,
    //         "price": 94.99,
    //         "status": "pending"

    //     },
    //     {
    //         "image": "https://chelseatroy.com/wp-content/uploads/2015/08/improv-comedy.jpg",
    //         "name": "Improvisation and Comedy",
    //         "instructor": "Jessica Davis",
    //         "availableSeats": 15,
    //         "price": 79.99,
    //         "status": "pending"

    //     }
    // ]

    // const [allClass , setClass] = useState([])


    // useEffect (() => {

    //     fetch (`http://localhost:8000/classes`)
    //     .then (res => res.json())
    //     .then (data => setClass(data))

    // }, [])


    const [popularClasses] = usePopularClasses()









    return (
        <div>

            <div className='text-center mx-auto my-10'>

                <h1 className='text-3xl text-base-content font-extrabold border-b lg:mx-96 border-red-400 pb-2'>Popular Classes</h1>

            </div>


            <div className='grid lg:grid-cols-3 gap-5'>



                {

                    popularClasses && popularClasses.slice(0, 6).map(data => <AllClass data={data}></AllClass>)
                }
            </div>



        </div>
    );
};

export default PopularClasses;