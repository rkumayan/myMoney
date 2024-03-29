import { useEffect, useState } from "react"

import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () =>{
    const [err, setErr] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();
    const signup = async ( email, password , displayName) =>{
        setErr(null);
        setIsPending(true);

        try{
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(res.user);

            if( !res){
                throw new Error( 'could not complete signup')
            }
            // add displayName to user
            await res.user.updateProfile({displayName})
            
            // dispatch LOGIN action
            dispatch( { type : 'LOGIN' , payload : res.user})
            
            setIsPending(false);
            setErr(null); 
            navigate("/");               
        }
        catch( err){
            console.log(err.message);
            setErr(err.message);
            setIsPending(false);                        
        }
        
    }
    return { err, isPending, signup}
    
}