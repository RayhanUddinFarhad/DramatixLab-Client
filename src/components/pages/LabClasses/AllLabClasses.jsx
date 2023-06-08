import React from 'react';
import useClasses from '../../../hooks/useClasses';
import AllClass from '../Home/popularclass/AllClass';

const AllLabClasses = () => {




    const [allClass] = useClasses()
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {

                allClass && allClass.map (data => <AllClass data={data}></AllClass>)
            }
        </div>
    );
};

export default AllLabClasses;