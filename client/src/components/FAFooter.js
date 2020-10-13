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
                <Row className="fa-footer-top" xs={1}>
                    <Col>
                        <Row className="fa-footer-title1">
                            <Col className="d-flex justify-content-center">
                                <h3>Hours</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <ListGroup className="fa-hours-list">
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Weekdays</b><br/>5:00am - 11:00pm
                                    </ListGroup.Item>
                                    <ListGroup.Item className="fa-hours-list-item">
                                        <b>Weekends</b><br/>7:00am - 8:00pm
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="fa-footer-info">
                        <Row className="fa-footer-title1 d-flex justify-content-center">
                            <h3>Contact</h3>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <p className="fa-contact-info">
                                <FaBuilding className="fa-contact-icon"/><br/>
                                153 Temple Hill Road<br/>
                                New Windsor, NY<br/><br/>
                                <AiFillPhone className="fa-contact-icon"/><br/>
                                <a href="tel:8457813077">(845) 781-3077</a><br/><br/>
                                <GrMail className="fa-contact-icon"/><br/>
                                <a href="mailto:coachsanter1031@yahoo.com">coachsanter1031@yahoo.com</a><br/>
                            </p>
                        </Row>
                        <Row className="d-flex justify-content-center" style={{marginBottom: "1.5em"}}>
                            <div className="fa-contact-info">
                                <SocialIcon className="fa-social-button" url="https://www.facebook.com/fitnessacademyHV/"/>
                                <SocialIcon className="fa-social-button" url="https://twitter.com/fit_academy_hv" />
                                <SocialIcon className="fa-social-button" url="https://www.instagram.com/_fitness.academy_/" /> 
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