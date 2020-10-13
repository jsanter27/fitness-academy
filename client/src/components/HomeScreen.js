import React from 'react';
import { Row, Col, Image, Container, Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import Navbar from './FANavbar';
import Footer from './FAFooter';

const HomeScreen = (props) => {

    return (
        <Container className="fa-container" fluid="xl">
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
                    <h3 className="fa-header">Where Do You Train?</h3>
                </Col>                
            </Row>
            <Row className="fa-video-row" style={{paddingTop:"1.5em"}}>
                <Col className="d-flex justify-content-center">
                    <ReactPlayer
                        className="fa-video-player"
                        url='videos/Video1.mp4'
                        playing
                        muted
                        config={{ file: { attributes: { disablepictureinpicture: 'true' }}}}
                        loop
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">Sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text
                        sample text sample text sample text sample text sample text 
                        sample</p>
                </Col>
            </Row>
            <Row className="fa-video-row">
                <Col className="d-flex justify-content-center">
                    <ReactPlayer
                        className="fa-video-player"
                        url='videos/Video2.mp4'
                        playing
                        muted
                        config={{ file: { attributes: { disablepictureinpicture: 'true' }}}}
                        loop
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">Sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text
                        sample text sample text sample text sample text sample text 
                        sample</p>
                </Col>
            </Row>
            <Row className="fa-video-row">
                <Col className="d-flex justify-content-center">
                    <ReactPlayer
                        className="fa-video-player"
                        url='videos/Video3.mp4'
                        playing
                        muted
                        config={{ file: { attributes: { disablepictureinpicture: 'true' }}}}
                        loop
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">Sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text
                        sample text sample text sample text sample text sample text 
                        sample</p>
                </Col>
            </Row>
            <Row className="fa-video-row">
                <Col className="d-flex justify-content-center">
                    <ReactPlayer
                        className="fa-video-player"
                        url='videos/Video4.mp4'
                        playing
                        muted
                        config={{ file: { attributes: { disablepictureinpicture: 'true' }}}}
                        loop
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">Sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text 
                        sample text sample text sample text sample text sample text
                        sample text sample text sample text sample text sample text 
                        sample</p>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default HomeScreen;