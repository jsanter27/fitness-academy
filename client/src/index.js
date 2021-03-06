import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/main.css';
import * as serviceWorker from './services/serviceWorker';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

import HomeScreen from './components/HomeScreen';
import ScheduleScreen from './components/ScheduleScreen';
import SignUpScreen from './components/SignUpScreen';
import AdminLoginScreen from './components/AdminLoginScreen';
import AdminScreen from './components/AdminScreen';

const client = new ApolloClient({ uri: "/graphql"});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <AuthProvider>
        <Router>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/schedule' component={ScheduleScreen} />
          <Route path='/signup' component={SignUpScreen} />
          <PrivateRoute exact path='/admin' component={AdminScreen} />
          <UnPrivateRoute path='/admin/login' component={AdminLoginScreen} />
        </Router>
      </AuthProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
