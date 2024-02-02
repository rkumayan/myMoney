import { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
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
            <button className="btn">signup</button>
        </form>
     );
}
 
export default Signup;