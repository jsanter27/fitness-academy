import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';

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
        history.push("/signup");
    }

    return (
        <Navbar bg="primary" variant="dark" expand="sm" expanded={expanded}>
            <Row>
                {/* <Col xs={8}>
                    <Navbar.Brand>
                        <Image
                            src="/fa-logo1.png"
                            className="fa-logo-img"
                            alt="Fitness Academy Logo"
                            rounded
                            onClick={goToHome}
                        />
                    </Navbar.Brand>
                </Col> */}
                <Col className="fa-nav-toggle">
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}><List size="1.5em"/></Navbar.Toggle>
                </Col>
            </Row>
            <Navbar.Collapse>
                <Nav className="fa-nav justify-content-start" style={{width:"100%"}}>
                    <Nav.Link className="fa-nav-link" onClick={goToHome} disabled={props.admin}>Home</Nav.Link>
                    <Nav.Link className="fa-nav-link" onClick={goToSchedule} disabled={props.admin}>Schedule</Nav.Link>
                    <Nav.Link className="fa-nav-link" onClick={goToMemberships} disabled={props.admin}>Free Trial</Nav.Link>
                    <Nav.Link className="fa-nav-link" href="#fa-footer" disabled={props.admin}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default FANavbar;