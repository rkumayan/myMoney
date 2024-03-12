import { useState} from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';
import {useNavigate} from 'react-router-dom';
export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) =>{
        setError(null);
        setIsPending(true);

        // Login the user
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            dispatch( {type : 'LOGIN' , payload : res.user } )

            setIsPending(false);
            setError(null);      
            navigate("/");              
        }
        catch( err){
            console.log( err.message);        
            setError( err.message);
            setIsPending(false);                    
        }
    }


    
    return {login, error, isPending}
}