// CSS
import '../components/Header.scss'

// React Router
import { Link } from 'react-router-dom';

// Header
function Header(){
    return(
        <div className='Header'>
            {/* Title */}
            <div className="Header-title">
                <Link to={`/`} className='Header-text'><h3>MoviePedia II</h3></Link>
            </div>

            {/* Categories  */}
            <div className="Header-menus">
                <ol className="Header-category">
                    <Link to={`/crime`} className='Header-text'><ul>Crime</ul></Link>
                    <Link to={`/comedy`} className='Header-text'><ul>Comedy</ul></Link>
                    <Link to={`/action`} className='Header-text'><ul>Action</ul></Link>
                    <Link to={`/romance`} className='Header-text'><ul>Romance</ul></Link>
                    <Link to={`/horror`} className='Header-text'><ul>Horror</ul></Link>
                    <Link to={`/fantasy`} className='Header-text'><ul>Fantasy</ul></Link>
                    <Link to={`/history`} className='Header-text'><ul>History</ul></Link>
                    <Link to={`/adventure`} className='Header-text'><ul>Adventure</ul></Link>
                </ol>
            </div>

            {/* Sign In/ Log In */}
            <div className="Header-menus">
                <ol className="Header-login_out">
                    <Link to={`/login`} className='Header-text'><ul>Log In</ul></Link>
                    <Link to={`/adventure`} className='Header-text'><ul>Sign In</ul></Link>
                    <a href='/' className='Header-text'><ul>About Me</ul></a>
                </ol>
            </div>
        </div>
    )
}

export default Header;
