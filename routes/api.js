const express = require('express');
const router = express.Router();
const TrialRequest = require('../models/TrialRequest');
const passport = require('passport');

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

    let newTrialRequest = new TrialRequest({ firstName, lastName, phoneNumber, email, resolved: false });
    
    newTrialRequest.save((err, trialRequest) => {
        if (err)
            sendDatabaseError(res);
        if (!trialRequest)
            sendError(res, "Could not send request to database");
        else
            sendSuccess(res, "Successfully submitted request");
    });
});

router.get('/resolve/:id', authentication, (req, res) => {
    const { id } = req.params;
    
    TrialRequest.findById(id, (err, trialRequest) => {
        if (err)
            sendDatabaseError(res);
        if (!res)
            sendError(res, "Could not find trial request");
        else {
            trialRequest.update({ resolved: true }, (err) => {
                if (err)
                    sendError(res, "Could not update request");
                else
                    sendSuccess(res, "Successfully resolved request");
            });
        }
    });
});

module.exports = router;