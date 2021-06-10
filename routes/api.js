const express = require('express');
const router = express.Router();
const TrialRequest = require('../models/TrialRequest');
const passport = require('passport');
const nodemailer = require('nodemailer');

require('../config/passport');
require('dotenv').config();

const authentication = passport.authenticate('jwt', {session : false});

const sendResponse = (res, statusNum, messageBody, isError) => {
    res.status(statusNum).json({message: {msgBody: messageBody, msgError: isError}});
};

const sendDatabaseError = (res) => {
    sendResponse(res, 500, "Database error", true);
};

const sendError = (res, message) => {
    sendResponse(res, 400, message, true);
};

const sendSuccess = (res, message) => {
    sendResponse(res, 201, message, false);
};

router.post('/trial', (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;

    if (!firstName || firstName.trim() === '' || 
        !lastName || lastName.trim() === '' || 
        !email || email.trim() === '' || 
        !phoneNumber || phoneNumber.trim() === '') {
        
        sendError(res, "Invalid fields");
    }

    TrialRequest.findOne({ $or:[{'email': email}, {'phoneNumber': phoneNumber}] }, (err, request) => {
        if (err)
            sendDatabaseError(res);
        if (request)
            sendError(res, "Request has already been made with that email or phone number");
        else {
            let newTrialRequest = new TrialRequest({ firstName, lastName, phoneNumber, email, resolved: false });
    
            newTrialRequest.save((err, trialRequest) => {
                if (err)
                    sendDatabaseError(res);
                if (!trialRequest)
                    sendError(res, "Could not send request to database");
                else {
                    //sendSuccess(res, "Successfully submitted request");
                    const mailOptions = {
                        from: 'noreply@thefitnessacademyhv.com',
                        to: process.env.ADMIN_EMAIL,
                        subject: `New Trial Request: ${firstName} ${lastName}`,
                        text: 'Resolve the request at https://thefitnessacademyhv.com/admin',
                        html: '<p>Resolve the request <a href="https://thefitnessacademyhv.com/admin" target="_blank">here</a></p>'
                    };
                    const smtpTransporter = nodemailer.createTransport({
                        port: 465,
                        host: process.env.SMTP_HOST,
                        secure: true,
                        auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS
                        }
                    });
                    smtpTransporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log(err.message);
                        }
                        sendSuccess(res, "Successfully submitted request");
                    });
                }
            });
        }
    });
});

router.get('/resolve/:id', authentication, (req, res) => {
    const { id } = req.params;
    
    TrialRequest.findById(id, (err, trialRequest) => {
        if (err)
            sendDatabaseError(res);
        if (!trialRequest)
            sendError(res, "Could not find trial request");
        if (trialRequest.resolved)
            sendError(res, "Trial request has already been resolved");
        else {
            trialRequest.updateOne({ resolved: true }, (err) => {
                if (err)
                    sendError(res, "Could not update request");
                else
                    sendSuccess(res, "Successfully resolved request");
            });
        }
    });
});

router.get('/unresolve/:id', authentication, (req, res) => {
    const { id } = req.params;
    
    TrialRequest.findById(id, (err, trialRequest) => {
        if (err)
            sendDatabaseError(res);
        if (!trialRequest)
            sendError(res, "Could not find trial request");
        if (!trialRequest.resolved)
            sendError(res, "Trial request is already unresolved");
        else {
            trialRequest.updateOne({ resolved: false }, (err) => {
                if (err)
                    sendError(res, "Could not update request");
                else
                    sendSuccess(res, "Successfully unresolved request");
            });
        }
    });
});

router.get('/delete/:id', authentication, (req, res) => {
    const { id } = req.params;

    TrialRequest.findByIdAndRemove(id, (err, trialRequest) => {
        if (err)
            sendDatabaseError(res);
        if (!trialRequest)
            sendError(res, "Could not find trial request");
        else {
            sendSuccess(res, "Successfully removed request");
        }
    });
});

module.exports = router;