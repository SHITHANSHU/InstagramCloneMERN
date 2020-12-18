import React from 'react'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoLarge from '../../Assets/ForgotPasswordLogo.png';
import InstalogoLarge from '../../Assets/logoLarge.png';
import FeedPost from './FeedPost';
function FeedsMain() {
    return (
        <div>
                                
                             
                                    <Navbar expand="md" variant="light" bg="light" className="FeedsNavBar">
                                        <Navbar.Brand href="#" ><img src={InstalogoLarge} height="40rem"></img></Navbar.Brand>
                                    </Navbar>
                               

                <center>
                        <FeedPost></FeedPost>

                </center>


        </div>
    )
}

export default FeedsMain
