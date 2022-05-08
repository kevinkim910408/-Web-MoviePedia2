// CSS
import '../components/Header.scss'

// Header
function Header(){
    return(
        <div className='Header'>
            {/* Title */}
            <div className="Header-title">
                <a href='/'>
                    <h3>MoviePedia II</h3>
                </a>
            </div>

            {/* Categories  */}
            <div className="Header-menus">
                <ol className="Header-category">
                    <a href='/'><ul>High Rating(over 9)</ul></a>
                    <a href='/'><ul>Crime</ul></a>
                    <a href='/'><ul>Comedy</ul></a>
                    <a href='/'><ul>Action</ul></a>
                    <a href='/'><ul>Romance</ul></a>
                    <a href='/'><ul>Horror</ul></a>
                    <a href='/'><ul>Fantasy</ul></a>
                    <a href='/'><ul>Drama</ul></a>
                    <a href='/'><ul>Adventure</ul></a>
                </ol>
            </div>

            {/* Sign In/ Log In */}
            <div className="Header-menus">
                <ol className="Header-login_out">
                    <a href='/'><ul>Log In</ul></a>
                    <a href='/'><ul>Sign In</ul></a>
                    <a href='/'><ul>About Me</ul></a>
                </ol>
            </div>
        </div>
    )
}

export default Header;
