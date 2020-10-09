import React from 'react';
import gql from 'graphql-tag';
import { Carousel, Row, Col, Image, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaDoorOpen, FaRulerHorizontal, FaDumbbell, FaSprayCan } from 'react-icons/fa';

import Navbar from './FANavbar';
import Footer from './FAFooter';
import Card from './FACard';
import Alert from './FAAlert';
import Loading from './FALoading';
import Error from './FAError';

const HomeScreen = (props) => {

    return (
        <div>
            <Navbar admin={props.admin} />
            <Footer />
        </div>
    );
}

export default HomeScreen;