import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebases";
const Googleprovider = new GoogleAuthProvider();

export const Authcontext = createContext(null)

const Authprovider = ({children}) => {
    const [loading, setloading] = useState(true)
    const [user, setStay] = useState(null)
    console.log(user);
    const auth = getAuth(app)

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setStay(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    const Googlesign = () => {
        setloading(true)
        return signInWithPopup(auth, Googleprovider)

    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currenuser => {
            setloading(false)
            setStay(currenuser)
            console.log('user login here', currenuser)
        })
        return () => {
            unsubscribe();
        }


    }, [])

    const Authemail = { createuser, signin, signOut, logout, user, Googlesign, loading }

    return (
        <Authcontext.Provider value={Authemail}>
            {children}

        </Authcontext.Provider>
    );
};

export default Authprovider;