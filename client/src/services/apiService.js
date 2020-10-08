import axios from 'axios';

const getResponse = (res) => {
    return res.data;
}

const catchErrors = (err) => {
    if (err.response.status !== 401){
        return err.response.data;
    }
    else {
        return { message : { msgBody : "Your session has expired. Please re-login.", msgError: true } };
    }
}

export default {
    requestTrial : (data) => {
        return axios.post('/api/trial', data).then(getResponse).catch(catchErrors);
    },
    resolveTrialRequest : (id) => {
        return axios.get(`/api/resolve/${id}`).then(getResponse).catch(catchErrors);
    },
    unresolveTrialRequest : (id) => {
        return axios.get(`/api/unresolve/${id}`).then(getResponse).catch(catchErrors);
    }
}