import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Image, Row, Col } from 'react-bootstrap';
import {HouseDoorFill, CalendarDateFill, PeopleFill, EnvelopeFill, List} from 'react-bootstrap-icons';

const FANavbar = (props) => {

    const [expanded, setExpanded] = useState(false);

    const history = useHistory();

    const goToHome = () => {
        if (props.admin){
            return;
        }
        history.push('/');
    };

    const goToSchedule = () => {
        history.push('/schedule');
    };

    const goToMemberships = () => {
        history.push("/memberships");
    }

    return (
        <Navbar bg="dark" variant="primary" expand="sm" expanded={expanded}>
            <Row>
                <Col xs={8}>
                    <Navbar.Brand>
                        <Image
                            /* src="/fa-logo1.jpeg" */
                            className="fa-logo-img"
                            alt="Fitness Academy Logo"
                            rounded
                            onClick={goToHome}
                        />
                    </Navbar.Brand>
                </Col>
                <Col className="fa-nav-toggle">
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}><List/></Navbar.Toggle>
                </Col>
            </Row>
            <Navbar.Collapse>
                <Nav className="justify-content-end" style={{width:"100%"}}>
                    <Nav.Link className="fa-nav-link" onClick={goToHome} disabled={props.admin}><b>Home</b></Nav.Link>
                    <Nav.Link className="fa-nav-link" onClick={goToSchedule} disabled={props.admin}><b>Classes</b></Nav.Link>
                    <Nav.Link className="fa-nav-link" onClick={goToMemberships} disabled={props.admin}><b>Memberships</b></Nav.Link>
                    <Nav.Link className="fa-nav-link" href="#fa-footer" disabled={props.admin}><b>Contact</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default FANavbar;