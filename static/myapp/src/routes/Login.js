import Header from "../components/Header.js";
import Button from 'react-bootstrap/Button'
import './Login.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


function Login(){
    return(
        <div>
            <Header />
            <div className="wrap">
                <div className="card-container">
                    <header className="card-header">
                        <div className="card-header-text">
                            Log In
                        </div>
                        <div className="card-header-icon-group">
                            <div className="card-header-icon">
                               <h1><FaTwitter /></h1>
                            </div>
                            <div className="card-header-icon">
                                <h1><FaFacebook /></h1>
                            </div>
                            <div className="card-header-icon">
                                <h1><FaInstagram /></h1>
                            </div>
                        </div>
                    </header>
                    <main className="card-main">
                        <input type="email" placeholder="Your Email"/>
                        <input type="paswword" placeholder="Your Password"/>
                    </main>
                    <footer className="card-footer">
                        <Button variant="warning" className="card-footer-button">Log In</Button>
                        <div className="card-text-group">
                            <p className="card-text">forgot <strong>Password?</strong></p>
                            <p className="card-text">Not a Member? <strong>Register</strong></p>
                        </div>
                        
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Login;