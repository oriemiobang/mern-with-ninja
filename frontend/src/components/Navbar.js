import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const NavBar = ()=>{
    const {logout} = useLogout();
    const {user} = useAuthContext()
    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className='container'>
            <h4>Workout Buddy</h4>
                <Link to='/'>
                </Link>
                <nav>
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>)}
                   {!user && ( <div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>)}
                </nav>

            </div>
        </header>
    )
}

export default NavBar