import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForms() {
    return (
        <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                       
                        <Form.Control className="textLogin" type="email" 
                        placeholder="Phone number, username, or email" 
                        />
                       
              
                     
                        <Form.Control className="textLogin" type="password" placeholder="Password" />
                    </Form.Group>
                  
                    <Button className="buttonlogin" variant="primary" type="submit" block>
                        Log In
                    </Button>

                </Form>
                <div className="separator">
                <div className="line"></div>
                <p style={{fontSize:"13px",fontWeight:"600"}}>OR</p>
                <div className="line"></div>
            </div>
                
                <div className="forgotPasswordText">
                    <a href="" style={{textDecoration:"none",color:"#999"}}>
                    Forgot Password ?
                    </a>
                    
                </div>
        </div>
    )
}

export default LoginForms
