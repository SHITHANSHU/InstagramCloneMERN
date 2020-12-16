import React from 'react'
import SignupForms from './SignupForms';
import Card from 'react-bootstrap/Card';
import logoLarge from '../../Assets/logoLarge.png';

function SignupCard() {
    return (
        <div>

            <center>
            <Card className="loginCard">
            <Card.Body >
                <Card.Title><img src={logoLarge} width="60%"></img></Card.Title>
    
                <div className="SignupHead">
                    Sign up to see photos and videos from your friends
                </div>
                <br></br>
                <Card.Text className="loginCard-body">
                <SignupForms></SignupForms>
                </Card.Text>
          
            </Card.Body>
            </Card>

            <Card className="signUpLoginCard">
            <Card.Body >
   
    
                <Card.Text className="loginCard-body" style={{color:"#262626",fontSize:"13px"}}>
                    Have an account ? <a href="/" style={{textDecoration:"none"}}>Log in</a>
                </Card.Text>
          
            </Card.Body>
            </Card>





            </center>
           
            
        </div>
    )
}

export default SignupCard
