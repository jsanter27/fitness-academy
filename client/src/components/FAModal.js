import React from 'react';
import { Modal } from 'react-bootstrap';

const FAModal = (props) => {

    if (props.message) {
        return (
            <Modal show={props.show} onHide={props.onHide} className="fa-modal">
                <Modal.Header className="fa-modal-header" closeButton>
                    <Modal.Title className="fa-modal-title" style={{color:(props.message.msgError ? "red" : "black")}}>
                        <b>{props.message.msgError ? "Error" : ""}</b>
                        <b>{!props.message.msgError && props.message.msgBody.trim() !== '' ? "Success" : ""}</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="fa-modal-body">
                        {props.message.msgBody}
                </Modal.Body>
            </Modal>
        );
    }
    else {
        return (
            <Modal show={props.show} onHide={props.onHide} className="fa-modal">
                <Modal.Header className="fa-modal-header" closeButton>
                    <Modal.Title className="fa-modal-title">
                        <b>Complete</b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="fa-modal-body">
                        Please verify that the action has completed
                </Modal.Body>
            </Modal>
        );
    }
};

export default FAModal;