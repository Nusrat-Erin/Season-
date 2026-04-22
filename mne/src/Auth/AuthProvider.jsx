import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    // create user with email
    const newUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in with email and password
    const emailLogin=( email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign in with google
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // handle logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // user observer
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            const loggedUser=currentUser?.email || user?.email
            setUser(currentUser)
            setLoading(false)
            // if user have token
            if(currentUser){
                // https://seasons-server.vercel.app
                // axios.post('https://seasons-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                axios.post('https://seasons-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res=>console.log(res.data))
            }else{
                axios.post('https://seasons-server.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>console.log(res.data))
            }
        })
        return ()=>{
            unSubscribe()
        }
        },[user?.email])

    
    const authInfo={newUser,emailLogin,user,logOut,loading,google}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;

 