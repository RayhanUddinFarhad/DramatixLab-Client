import React from 'react';
import useUser from '../../../../hooks/useUser';

const ManageUsers = () => {


    const [userOne] = useUser()
    console.log(userOne);




    const handleMakeAdmin = (id) => {


        fetch (`http://localhost:8000/users/admin/${id}`, {

        method : 'PATCH'
        })
        .then (response => response.json())
        .then (data => console.log(data))





     }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>


                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {

                            userOne && userOne.map(userInfo => {

                                return (

                                    <tr>
                                        <th>

                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={userInfo.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{userInfo?.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {userInfo.email}

                                        </td>
                                        <td>{userInfo.role}</td>
                                        <th>
                                            <button onClick={() => handleMakeAdmin (userInfo._id)} className="button-primary">Make Admin</button>
                                            <button className="button-primary">Make Instructor</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                        {/* row 2 */}

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ManageUsers;