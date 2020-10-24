import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
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
                        src="/fa-logo3.png"
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
                        playsinline
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">
                        <b>OUR GOALS:</b><br/>
                        To motivate clients to meet and exceed their fitness goals, encourage networking and personal development, 
                        build an inclusive and diverse fitness community, and educate our clients on better nutritional and lifestyle habits.
                    </p>
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
                        playsinline
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">
                        <b>OUR MISSION:</b><br/> 
                        At The Fitness Academy our mission is simple - to deliver the BEST experiences possible through integrated group training, 
                        personal training, balanced nutrition, and group engagement activities.
                    </p>
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
                        playsinline
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">    
                        <b>Where you Train says everything about how you train!</b>
                    </p>
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
                        playsinline
                     />
                </Col>
            </Row>
            <Row className="fa-paragraph-row1">
                <Col>
                    <p className="fa-paragraph">
                        <b>We offer everything the chains offer.... and what they don’t, guaranteed! So why pay more for less?!</b>
                    </p>
                </Col>
            </Row>
            <Footer />
        </Container>
    );
}

export default HomeScreen;