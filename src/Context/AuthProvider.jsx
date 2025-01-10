import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google Login context
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Email password registration
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // Login with email and password
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out functionality
    const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser.email };
                axios.post('http://localhost:9000/jwt', user, { withCredentials: true })
                .then((res) => {
                    setLoading(false);
                })
            }
            else {
                axios.post('http://localhost:9000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false)
                })
            }
        })
    
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        handleGoogleLogin,
        handleRegister,
        updateUserProfile,
        handleLogin,
        handleLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;