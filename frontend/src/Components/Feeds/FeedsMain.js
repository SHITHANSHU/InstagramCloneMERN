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
                                        
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                                                className="profilePicPost scale-0.8">

                                            </img>
              
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                       
                                    </Navbar>
                               

                <center>
                        <FeedPost></FeedPost>

                </center>


        </div>
    )
}

export default FeedsMain
