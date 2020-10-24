import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Navbar from './FANavbar';
import Footer from './FAFooter';
import Form from './FAForm';

const SignUpScreen = () => {

    const bootcampSignUp = () => {
        window.open("https://checkout.square.site/pay/af4bdc1e-d5d2-4228-b144-e5819e79c56f?t=1602211884.001827", "_blank");
    }

    return (
        <Container className="fa-container" fluid="xl">
            <Navbar />
            <Row className="fa-header-row1">
                <Col className="d-flex justify-content-center">
                    <h3>Bootcamp</h3>
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col className="d-flex justify-content-center">
                    <p className="fa-paragraph">
                        Burn <b>500-1000</b> calories with our dynamic and smart workouts that are focused on building lean muscle and torching fat! 
                        Our training is so effective that you continue burning fat up to <b>48 hrs</b> post workout! 
                        Our Bootcamp workouts use only the most proven methods of strength training, interval &amp; metabolic style training.
                    </p>
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col className="d-flex justify-content-center">
                    <p className="fa-paragraph">
                    All of our Trainers have certifications from nationally accredited programs. 
                    With experiences from Strength &amp; Conditioning Coaches at the collegiate level, Masters Degrees in Exercise Science, 
                    with over 20yrs experience in the Fitness industry! We hold our trainers to the highest standard in the industry &amp; it shows! 
                    </p>
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col className="d-flex justify-content-center">
                    <Button className="fa-button" block size="lg" variant="primary" onClick={bootcampSignUp}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
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