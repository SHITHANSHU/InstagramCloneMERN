import React from 'react'
import ForgotPassword from './ForgotPassword';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoLarge from '../../Assets/ForgotPasswordLogo.png';
import InstalogoLarge from '../../Assets/logoLarge.png';
function ForgotPasswordCard() {
    return (
        <div>
                                
                             
                                    <Navbar expand="lg" variant="light" bg="light" className="ForgotPasswordNavBar">
                                        <Navbar.Brand href="#" ><img src={InstalogoLarge} height="40rem"></img></Navbar.Brand>
                                    </Navbar>
                               

                <center>
                        <Card className="loginCard">
                    <Card.Body >
                        <Card.Title><img src={logoLarge} width="60%"></img></Card.Title>
            
                        <div className="SignupHead">
                        Enter your email, phone, or username and we'll send you a link to get back into your account.
                        </div>
                        <br></br>
                        <Card.Text className="loginCard-body">
                       <ForgotPassword></ForgotPassword>
                        </Card.Text>
                
                    </Card.Body>
                    <Card.Footer>
                        <a href="/" style={{color:'#262626'}}>Back To Login</a>
                    </Card.Footer>
                    </Card>

             



                </center>


        </div>
    )
}

export default ForgotPasswordCard
