import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

import Navbar from './FANavbar';
import Footer from './FAFooter';


const ScheduleScreen = () => {

    return (
        <Container className="fa-container" fluid="xl">
            <Navbar />
            <Row className="fa-header-row1">
                <Col className="d-flex justify-content-center">
                    <h3>Schedule</h3>
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col className="d-fex justify-content-center">
                    <Image
                        src="/schedule.png"
                        className="fa-schedule-img"
                        alt="Fitness Academy Schedule"
                        style={{maxWidth:"100%"}}
                    />
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default ScheduleScreen;