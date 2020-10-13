import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import api from '../services/apiService';
import Modal from './FAModal';

const FAForm = () => {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    });

    const [show, setShow] = useState(false);

    const [message, setMessage] = useState({
        msgBody: "",
        msgError: false
    });

    const handleClose = () => {
        setShow(false);
        setMessage({
            msgBody: "",
            msgError: false
        });
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        api.requestTrial({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phoneNumber: form.phoneNumber
        }).then( (result) => {
            setMessage(result.message);
            setShow(true);
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
            });
        });
    }

    const phoneregex = /^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/;
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isDisabled = false;
    if (form.firstName.trim() === "" || form.lastName.trim() === "" || form.email.trim() === "" || form.phoneNumber.trim() === "" || !phoneregex.test(form.phoneNumber) || !emailregex.test(form.email))
        isDisabled= true;

    return (
        <Row className="fa-paragraph-row1">
            <Col className="d-flex justify-content-center">
                <Form className="fa-form" onSubmit={handleSubmit}>
                    <Form.Group className="fa-form-group" controlId="firstName">
                        <Form.Label><b>First Name:</b></Form.Label>
                        <Form.Control name="firstName" type="text" value={form.firstName} placeholder="John" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="fa-form-group" controlId="lastName">
                        <Form.Label><b>Last Name:</b></Form.Label>
                        <Form.Control name="lastName" type="text" value={form.lastName} placeholder="Smith" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="fa-form-group" controlId="email">
                        <Form.Label><b>Email Address:</b></Form.Label>
                        <Form.Control name="email" type="email" value={form.email} placeholder="coachsanter1031@yahoo.com" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="fa-form-group" controlId="phoneNumber">
                        <Form.Label><b>Phone Number:</b></Form.Label>
                        <Form.Control name="phoneNumber" type="text" value={form.phoneNumber} placeholder="8457813077" onChange={handleChange}/>
                    </Form.Group>
                    <div className="fa-button-container d-flex justify-content-center">
                        <Button className="fa-button" type="submit" variant="primary" size="lg" block disabled={isDisabled}>
                            Submit Request
                        </Button>
                    </div>
                    <Form.Text className="fa-form-footer">
                        All requests are reviewed by staff and may take time to process.<br/>
                        <b>All fields required.</b>
                    </Form.Text>
                </Form>
                <Modal show={show} onHide={handleClose} message={message}/>
            </Col>
        </Row>
    );
}

export default FAForm;