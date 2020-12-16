import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForms() {
    return (
        <div>
               
                <Form>
                    <Form.Group controlId="formBasicEmail">
                       
                        <Form.Control className="textLogin" type="email" 
                        placeholder="Phone number, username, or email" 
                        />
       
                       
                       <Form.Control className="textLogin" type="text" 
                       placeholder="Full Name" 
                       />
                      
            
                       
                       <Form.Control className="textLogin" type="text" 
                       placeholder="Username" 
                       />
                    
                     
                        <Form.Control className="textLogin" type="password" placeholder="Password" />
                    </Form.Group>
                  
                    <Button className="buttonlogin" variant="primary" type="submit" block>
                        Sign Up
                    </Button>

                </Form>
  
                <br></br>
                <div className="termsSignup">

                    By signing up you aggree to our <strong>Terms</strong> ,<strong>Data Policy</strong> and <strong>Cookies Policy</strong>
                    {/* <a href="" style={{textDecoration:"none",color:"#999"}}>
                    Forgot Password ?
                    </a> */}
                    
                </div>
        </div>
    )
}

export default SignupForms
