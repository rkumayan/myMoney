import { useState } from 'react';
import styles from './Signup.module.css';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const  {signup, isPending, err} = useSignup();

    const handleSubmit = (e) =>{
        e.preventDefault();
        signup( email, password, user);
    }
    return ( 
        <form   onSubmit={handleSubmit}
             className= {styles['signup-form']}>
            <h2> Signup</h2>
            
            <label>
                <span> User Name:</span>
                <input type="text"  minLength={3}
                    onChange={ (e)=> setUser(e.target.value) }
                    value = {user}
                />
            </label>
            
            <label>
                <span> Email :</span>
                <input type="email"  
                    onChange={ (e)=> setEmail(e.target.value) }
                    value = {email}
                />
            </label>
            <label>
                <span> Password :</span>
                <input type="password"  
                    onChange={ (e)=> setPassword(e.target.value)}
                    value = {password}
                />
            </label>
            { !isPending && <button className="btn">signup</button> }
            {isPending && <button className="btn" disabled>loading..</button> }
            {err && <p> {err}</p> }
        </form>
     );
}
 
export default Signup;