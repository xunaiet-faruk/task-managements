import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Authcontext = createContext(null)
import app from '../../Firebase/Firebases'
const Googleprovider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [loading, setloading] = useState(true)
    const [user, setStay] = useState(null)
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

    const Authemail = { createuser, signin, signOut, logout, user, Googlesign, loading }

    return (
        <Authcontext.Provider value={Authemail}>
            {children}

        </Authcontext.Provider>
    );
};

export default Authprovider;