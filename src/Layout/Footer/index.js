import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../index.css';
class Footer extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <footer className="bg-dark">
                    <Container>
                        <Row>
                            <Col>
                                &copy; Copyright 2020 Irtsamle
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;
