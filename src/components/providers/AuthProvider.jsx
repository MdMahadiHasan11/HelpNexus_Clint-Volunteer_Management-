// import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // const ssignInWithPopup = (auth, githubProvider) => {
    //     setLoading(true);
    //     return signInWithPopup(auth, githubProvider);
    // }

    // 




    const createUser = (email, password, name, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl);
    }


    // update
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        }).then(() => {

        }).catch(() => {

        });
    }



    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user auth state change ', currentUser);

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }


            setUser(currentUser);
            setLoading(false);

            // token
            // if user exist then issue a token
            // console.log(currentUser);
            if (currentUser) {
                axios.post('https://help-nexus-server.vercel.app/jwtt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log('token', res.data);
                    })
            }
            else {

                axios.post('https://help-nexus-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log('tokennn', res.data);
                    })

            }

        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        // ssignInWithPopup,
        setUser,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;