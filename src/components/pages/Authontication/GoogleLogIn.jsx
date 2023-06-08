import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import axios from 'axios';

const GoogleLogIn = () => {

    const { googleLogin } = useContext(AuthContext)



    const handleGoogleLogin = () => {




        googleLogin()
            .then(res => {

                const loggedInUser = res.user
                console.log(loggedInUser);



                const data = {
                    name: loggedInUser.displayName, image: loggedInUser.photoURL, email: loggedInUser.email,
                    role : 'user'
                }


                axios.post('http://localhost:8000/users', data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })

            .catch(err => {

                console.log(err);
            })
    }

    return (
        <div>
            <h1 onClick={handleGoogleLogin} className='flex border p-3 items-center justify-center '><FaGoogle className='mr-2' /> Continue with google</h1>

        </div>
    );
};

export default GoogleLogIn;