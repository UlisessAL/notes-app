import {auth} from "../services/Firebase"
import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import Swal from 'sweetalert2'


export const authContext = createContext();

export const useAuthContext = () => {
    const context = useContext(authContext)
    if (!context) {
        console.log("error creating auth context");
    }
    return context;
};

export function AuthProvider({children}){

    const [user, setUser] = useState("")
    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                console.log("no hay usuario");
                setUser("")
            }else{
                setUser(currentUser)
            }
        })
        return () => suscribed()
    }, [])
    

    const register = async (email, password) => {

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            return response
        }
        catch{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error has ocurred while creating the user, check out if your email is valid and if your password is long enough',
                
            })
        }
    };

    const login = async (email, password) => {
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            return response
        }
        catch{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or/and password invalid',
            })
        }
        
    };

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        return await signInWithPopup(auth, responseGoogle);
    };

    const logOut = async () => {
        const response = await signOut(auth)
        console.log(response);
        return response
    }

    return <authContext.Provider value={{register, login, loginWithGoogle, logOut, user}} >
        {children}
    </authContext.Provider>
}