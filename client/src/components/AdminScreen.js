import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Tabs, Tab } from 'react-bootstrap';
import auth from '../services/authService';
import { AuthContext } from '../context/AuthContext';

import Loading from './FALoading';
import Error from './FAError';
import Table from './FATable';

const GET_REQUESTS = gql`
    query{
        getUnresolvedRequests {
            _id
            firstName
            lastName
            phoneNumber
            email
        }
        getResolvedRequests {
            _id
            firstName
            lastName
            phoneNumber
            email
        }
    }
`;


const AdminHomeScreen = () => {

    const { setUser, setIsAuthenticated } = useContext(AuthContext);

    const [msg, setMsg] = useState({
        msgBody: "",
        msgError: false
    });

    const { data, loading, error, refetch } = useQuery(GET_REQUESTS);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    const logOut = () => {
        auth.logout().then( (result) => {
            setUser(result.user);
            setIsAuthenticated(result.isAuthenticated);
        })
    }

    return (
        <Container className="fa-container" fluid={"xl"}>
            <Row className="fa-header-row1 d-flex justify-content-center">
                <h3>Trial Requests</h3>
            </Row>
            <Row className="fa-paragraph-row1 d-flex justify-content-center">
                <Button className="fa-button" variant='danger' block size="lg" style={{marginTop:"1em", marginBottom:"1.5em"}} onClick={logOut}>Log Out</Button>
            </Row>
            <Row className="fa-paragraph-row1 d-flex justify-content-center" style={{paddingBottom:"1.5em"}}>
                <Link to="/"><b>Home</b></Link>
            </Row>
            <Row className="fa-paragraph-row1 d-flex justify-content-center">
                <p style={{color:(msg.msgError ? "red" : (msg.msgBody !== "" ? "black" : "white"))}}>{msg.msgBody !== "" ? msg.msgBody : "Hidden Text Here"}</p>
            </Row>
            <Row className="fa-tab-row1 d-flex justify-content-center">
                <Tabs className="fa-tabs" defaultActiveKey="unresolved" id="fa-tabs">
                    <Tab className="fa-tab" eventKey="unresolved" title="Unresolved">
                        <Table
                            data={data.getUnresolvedRequests}
                            dataType={"unresolved"}
                            refetch={refetch}
                            setMsg={setMsg}
                        />
                    </Tab>
                    <Tab className="fa-tab" eventKey="resolved" title="Resolved">
                        <Table
                            data={data.getResolvedRequests}
                            dataType={"resolved"}
                            refetch={refetch}
                            setMsg={setMsg}
                        />
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default AdminHomeScreen;