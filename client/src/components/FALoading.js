import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BounceLoader } from 'react-spinners';

const FALoading = () => {
    return (
        <Container>
            <Row className="my-auto d-flex justify-content-center">
                <h2 className="fa-loading-text"><b>Loading...</b></h2>
            </Row>
            <Row className="my-auto d-flex justify-content-center">
                <BounceLoader/>
            </Row>
        </Container>
    )
}

export default FALoading;