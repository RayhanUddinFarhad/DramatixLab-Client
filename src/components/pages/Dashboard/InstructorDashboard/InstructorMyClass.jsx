import React, { useEffect, useState } from 'react';

const InstructorMyClass = () => {


    const [myclass, setMyClass] = useState([])


    useEffect(() => { 


        fetch (``)







    }, [])
    return (
        <div>

            Instructor Class
            
        </div>
    );
};

export default InstructorMyClass;