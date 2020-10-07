const mongoose = require('mongoose');

const TrialRequestSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    resolved: Boolean
});

module.exports = mongoose.model("TrialRequest", TrialRequestSchema);