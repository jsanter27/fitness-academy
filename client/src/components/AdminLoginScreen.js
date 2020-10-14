import React, { useState, useContext } from 'react';
import { Container, Row, Form, Button} from 'react-bootstrap';
import auth from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import Modal from './FAModal';
import { Link } from 'react-router-dom';

const AdminLoginScreen = () => {

    const { setUser, setIsAuthenticated } = useContext(AuthContext);

    const [userInput, setUserInput] = useState({
        username: "",
        password: ""
    });

    const [modal, setModal] = useState({
        show: false,
        message: {
            msgBody: "",
            msgError: false
        }
    });

    const handleChange = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value 
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        auth.login(userInput).then( (result) => {
            if (result.isAuthenticated){
                setIsAuthenticated(true);
                setUser(result.user);
            }
            else {
                setModal({
                    show: true,
                    message: result.message
                });
            }
        });
    }

    const handleClose = () => {
        setModal({
            show: false,
            message: {
                msgBody: "",
                msgError: false
            }
        });
    }

    let btnDisabled = true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(userInput.username) && userInput.password.length >= 6)
        btnDisabled = false;

    return (
        <Container className="fa-container" fluid="xl">
            <Row className="fa-header-row1 d-flex justify-content-center">
                <h3>Admin Login</h3>
            </Row>
            <Row className="fa-tab-row1 d-flex justify-content-center" style={{paddingTop:"2em"}}>
                <Form className="fa-login" onSubmit={handleSubmit}>
                    <Row className="d-flex justify-content-center">
                        <Form.Group className="fa-login-group">
                            <Form.Label><b>Email Address:</b></Form.Label>
                            <Form.Control type="email" value={userInput.username} id="username" name="username" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Form.Group className="fa-login-group">
                            <Form.Label><b>Password:</b></Form.Label>
                            <Form.Control type="password" value={userInput.password} id="password" name="password" onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button style={{marginTop:"1em"}} className="fa-button" variant="primary" type="submit" size="lg" disabled={btnDisabled}>Login</Button>
                    </Row>
                    <Row className="d-flex justify-content-center" style={{padding:"1em"}}>
                        <Link to="/"><b>Home</b></Link>
                    </Row>
                </Form>
            <Modal show={modal.show} onHide={handleClose} message={modal.message} />
            </Row>
            
        </Container>
    );
};

export default AdminLoginScreen;