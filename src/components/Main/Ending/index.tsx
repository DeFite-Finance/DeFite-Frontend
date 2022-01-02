import React from 'react';
import { Container } from 'react-bootstrap';
import './index.css';

const Ending = () => {
    return (
        <>
            <Container fluid>
                <div className="row">
                    <h4 className="mt-2 mb-2 ending-title">iRIS Fintech</h4>
                    <p className="mt-0 mb-4 ending-content">
                        Copyright © 2022 iRIS Fintech
                        <br />
                        All rights reserved.
                    </p>
                </div>
            </Container>
        </>
    );
};

export default Ending;
