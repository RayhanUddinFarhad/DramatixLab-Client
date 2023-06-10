import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);







    const signUp = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)


    }

    const googleLogin = () => {
        setLoading(true)



        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }

    const logIn = (email, password) => {

        setLoading(true)


        return signInWithEmailAndPassword(auth, email, password)




    }




    useEffect(() => {



        const unsubscribe = onAuthStateChanged(auth, currentUser => {


            setUser(currentUser)


            if (currentUser) {


                axios.post(`http://localhost:8000/jwt`, { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem ('access_token', data.data.token)
                        setLoading(false)
                    })
            }

            else {
                localStorage.removeItem ('access_token')
            }
        })


        return () => {


            return unsubscribe()
        }
    }, [])



    const authInfo = {


        user,
        signUp,
        googleLogin,
        logOut,
        logIn,
        loading
    }










    return (
        <AuthContext.Provider value={authInfo}>

            {children}



        </AuthContext.Provider>
    );
};

export default AuthProvider;