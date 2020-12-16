import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ForgotPassword() {
    return (
        <div>
             <Form>
                    <Form.Group controlId="formBasicEmail">
                       
                        <Form.Control className="textLogin" type="email" 
                        placeholder="Phone number, username, or email" 
                        />
       
                   
                    </Form.Group>
                  
                    <Button className="buttonlogin" variant="primary" type="submit" block>
                       Send Login Link
                    </Button>

                </Form>
  
                <br></br>
                <div className="separator">
                <div className="line"></div>
                <p style={{fontSize:"13px",fontWeight:"600"}}>OR</p>
                <div className="line"></div>
                </div>
<a href="/signup" style={{color:'#262626',fontWeight:'500'}}>Create New Account</a>
                <br>
                </br>
        </div>
    )
}

export default ForgotPassword
