import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import {useLogout} from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const {logout, error , isPending} = useLogout();
    const {user} = useAuthContext();
    return ( 
        <nav className={ styles.navbar}>
            <ul>
                <li className= {styles.title} > <Link to = "/">myMoney</Link></li>
                {
                    !user &&
                    <>
                        <li> <Link to="/login"> Login</Link></li>
                        <li> <Link to="/signup"> Signup </Link></li>
                    </>
                }
                {
                    user && 
                    <>
                        <p> Hello, {user.displayName}</p>
                        <li>                        
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                    
                }
                
            </ul>
        </nav>
     );
}
 
export default Navbar;
