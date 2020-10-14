import React from 'react';
import { Container, Row } from 'react-bootstrap';

const FAError = () => {
    return (
        <Container className="fa-container" fluid="xl">
            <Row className="my-auto d-flex justify-content-center">
                <h2 className="fa-loading-text">Error</h2>
            </Row>
        </Container>
    )
}

export default FAError;