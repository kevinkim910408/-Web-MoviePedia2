import '../components/Header.scss'

function Header(){
    return(
        <div className='Header'>
            <div className="Header-title">
                <a href='/'>
                    <h3>MoviePedia II</h3>
                </a>
            </div>
            <div className="Header-menus">
                <ol className="Header-category">
                    <a href='/'><ul>High Rating</ul></a>
                    <a href='/'><ul>Comedy</ul></a>
                    <a href='/'><ul>Action</ul></a>
                    <a href='/'><ul>Romance</ul></a>
                    <a href='/'><ul>Horror</ul></a>
                    <a href='/'><ul>Fantasy</ul></a>
                </ol>
            </div>
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
