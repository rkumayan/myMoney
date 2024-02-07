import { useEffect, useState } from "react"

import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () =>{
    const [err, setErr] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    // when component is unmounted
    const [isCancelled, setIsCancelled] = useState(false);
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

            if(!isCancelled){
                setIsPending(false);
                setErr(null);
            }
            
        }
        catch( err){
            console.log(err.message);
            if( !isCancelled){
                setErr(err.message);
                setIsPending(false);
            }
            
        }
        
    }
    useEffect( ()=>{
        return ()=>{
            setIsCancelled(true);
        }
    }, []);
    return { err, isPending, signup}
    
}