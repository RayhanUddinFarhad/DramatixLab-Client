import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {

    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleGoogleLogin = () => {




        googleLogin()
            .then(res => {

                const loggedInUser = res.user
                console.log(loggedInUser);
                navigate(from, { replace: true });



                const data = {
                    name: loggedInUser.displayName, image: loggedInUser.photoURL, email: loggedInUser.email,
                    role : 'user'
                }


                axios.post('https://dramatix-lab-server-3hg5zxg3j-rayhanuddinfarhad.vercel.app/users', data)
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