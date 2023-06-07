import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)






    const signUp = (email, password) => {

        return createUserWithEmailAndPassword (auth, email, password)


    }

    const googleLogin = () => {



        return signInWithPopup (auth, provider)
     }

     const logOut = () => {

      return  signOut (auth)
     }

     const logIn = (email, password) => {


        return signInWithEmailAndPassword (auth, email, password)




      }




    useEffect (() => { 



        const unsubscribe = onAuthStateChanged (auth, currentUser => {


            setUser (currentUser)
        } )


        return () => {


            return unsubscribe()
         }
    }, [])



    const authInfo = {


        user,
        signUp,
        googleLogin,
        logOut,
        logIn
    }




    





    return (
        <AuthContext.Provider value={authInfo}>

            {children}

            
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;