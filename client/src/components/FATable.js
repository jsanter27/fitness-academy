import React from 'react';
import { Button, Table } from 'react-bootstrap';
import api from '../services/apiService';

const FATable = (props) => {

    let dataType = props.dataType;
    let data = props.data;
    let refetch = props.refetch;

    const handleAction = (id) => {
        if (dataType === 'unresolved') {
            api.resolveTrialRequest(id).then( (result) => {
                refetch();
            });
        }
        else if (dataType === 'resolved') {
            api.unresolveTrialRequest(id).then( (result) => {
                refetch();
            })
        }
    }

    if (!data[0]) {
        return null;
    }

    return (
        <Table className="fa-table" striped bordered hover>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>#</th>
                    <th style={{textAlign:"center"}}>Info</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((trial, index) => (
                       <tr>
                           <td>{index+1}</td>
                           <td style={{textAlign:"center"}}>
                               {trial.firstName}<br/>
                               {trial.lastName}<br/>
                               {trial.phoneNumber}<br/>
                               {trial.email}
                            </td>
                            <td style={{textAlign:"center"}}>
                                <Button variant={dataType === 'unresolved' ? 'success' : 'warning'} size="sm" onClick={() => handleAction(trial._id)}>
                                    {dataType === 'unresolved' ? 'Resolve' : 'Unresolve'}
                                </Button>
                            </td>
                       </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default FATable;