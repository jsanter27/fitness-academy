import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { FaBuilding } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const FAFooter = () => {

    return(
        <IconContext.Provider value={{className:"contact-icons"}}>
            <Col className="fa-footer" id="fa-footer">
                <Row className="fa-footer-top">
                    <Col>
                        <Row className="fa-footer-title1">
                            <Col className="d-flex justify-content-start">
                                <h5><b>Hours</b></h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-start">
                                <ListGroup className="fa-hours-list">
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Sunday</b><br/>7:00am - 5:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Monday</b><br/>5:00am - 10:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Tueday</b><br/>5:00am - 10:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Wednesday</b><br/>5:00am - 10:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Thursday</b><br/>5:00am - 10:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Friday</b><br/>5:00am - 9:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Saturday</b><br/>7:00am - 7:00pm
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="fa-footer-info">
                        <Row className="fa-footer-title2 d-flex justify-content-start">
                            <h5><b>Contact</b></h5>
                        </Row>
                        <Row className="d-flex justify-content-start">
                            <p className="fa-contact-info">
                                <FaBuilding/><br/>
                                153 Temple Hill Road<br/>
                                New Windsor, NY<br/><br/>
                                <AiFillPhone/><br/>
                                (845) 781-3077<br/><br/>
                                <GrMail /><br/>
                                coachsanter1031@yahoo.com<br/>
                            </p>
                        </Row>
                        <Row className="fa-footer-title2 d-flex justify-content-start">
                            <h5><b>Social Media</b></h5>
                        </Row>
                        <Row className="d-flex justify-content-start" style={{marginBottom: "1.5em"}}>
                            <div className="fa-contact-info">
                                <SocialIcon className="fa-social-button" url="https://www.facebook.com/Santer-Fitness-227206090662880/?ref_type=bookmark"/>
                                <SocialIcon className="fa-social-button" url="https://twitter.com/santerfitness" />
                                <SocialIcon className="fa-social-button" url="https://www.instagram.com/santerfitness/" /> 
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className="fa-footer-bottom d-flex justify-content-center">
                    <p>Copyright © 2020 - Fitness Academy Hudson Valley</p>
                </Row>
            </Col>
        </IconContext.Provider>
    );
}

export default FAFooter;