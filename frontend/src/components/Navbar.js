import {Link} from 'react-router-dom'
const NavBar = ()=>{

    return (
        <header>
            <div className='container'>
                <Link to='/'>
                <h4>Workout Buddy</h4>
                </Link>

            </div>
        </header>
    )
}

export default NavBar