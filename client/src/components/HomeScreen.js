import React from 'react';
import gql from 'graphql-tag';
import { Carousel, Row, Col, Image, Button, Container } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaDoorOpen, FaRulerHorizontal, FaDumbbell, FaSprayCan } from 'react-icons/fa';

import Navbar from './FANavbar';
import Footer from './FAFooter';
import Card from './FACard';
import Alert from './FAAlert';
import Loading from './FALoading';
import Error from './FAError';

const HomeScreen = (props) => {

    return (
        <Container fluid={"sm"} style={{width:"100%"}}>
            <Navbar admin={props.admin} />
            <Row className="fa-logo-header">
                <Col>
                    <Image
                        src="/fa-logo1.png"
                        className="fa-logo-img"
                        alt="Fitness Academy"
                        style={{maxWidth:"100%"}}
                    />
                </Col>
            </Row>
            <Row className="fa-header-row1">
                <Col className="fa-header-col1 d-flex justify-content-center">
                    <h3 className="fa-header"><b>Where Do You Train?</b></h3>
                </Col>                
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">Sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text </p>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default HomeScreen;