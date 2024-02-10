import {useEffect, useState} from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    // when component is unmounted
    const [isCancelled, setIsCancelled] = useState(false);

    const login = async (email, password) =>{
        setError(null);
        setIsPending(true);

        // sign the user out
        try{
            await projectAuth.signInWithEmailAndPassword(email, password);
            dispatch( {type : 'LOGIN' , payload : res.user } )

            // when component is unmounted, don't update the states
            if( !isCancelled){
                setIsPending(false);
                setError(null);
            }            
        }
        catch( err){
            console.log( err.message);
            if( !isCancelled){
                setError( err.message);
                setIsPending(false);
            }            
        }
    }


    useEffect( ()=>{
        // when component is unmounted, don't update the states
        return () =>{
            setIsCancelled(true);
        }
    }, []);
    return {login, error, isPending}
}