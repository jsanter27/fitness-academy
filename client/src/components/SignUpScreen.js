import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Navbar from './FANavbar';
import Footer from './FAFooter';
import Form from './FAForm';

const SignUpScreen = () => {
    return (
        <Container className="fa-container" fluid="xl">
            <Navbar />
            <Row className="fa-header-row1">
                <Col className="d-flex justify-content-center">
                    <h3>Free Trial</h3>
                </Col>
            </Row>
            <Form />
            <Footer />
        </Container>
    );
}

export default SignUpScreen;