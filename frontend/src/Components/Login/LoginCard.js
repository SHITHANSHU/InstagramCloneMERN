import React from 'react'
import LoginForms from './LoginForms';
import Card from 'react-bootstrap/Card';
import logoLarge from '../../Assets/logoLarge.png';

function LoginCard() {
    return (
        <div>

            <center>
            <Card className="loginCard">
            <Card.Body >
                <Card.Title><img src={logoLarge} width="60%"></img></Card.Title>
                

                
    
                <Card.Text className="loginCard-body">
                <LoginForms></LoginForms>
                </Card.Text>
          
            </Card.Body>
            </Card>

            <Card className="signUpLoginCard">
            <Card.Body >
   
    
                <Card.Text className="loginCard-body" style={{color:"#262626",fontSize:"13px"}}>
                    Dont have an Account ? <a href="/signup" style={{textDecoration:"none"}}>Sign Up</a>
                </Card.Text>
          
            </Card.Body>
            </Card>





            </center>
           
            
        </div>
    )
}

export default LoginCard
