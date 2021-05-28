import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2" >
                                <Nav.Item>
                                    <Nav.Link eventKey="design" > Design </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="team" > Team </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="programming" > Programming </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="frameworks" > Frameworks </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="libraries" > Libraries </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="design">
                                    <img src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png" width="600px" />
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="team">
                                <img src="https://static2.clutch.co/s3fs-public/software-development-team-1.jpg" width="600px" />
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="programming">
                                <img src="https://content.techgig.com/thumb/msid-77480270,width-860,resizemode-4/Top-25-Enterprise-Programming-Languages-for-developers.jpg?150543" width="600px" />
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="frameworks">
                                <img src="https://miro.medium.com/max/3840/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg" width="600px" />
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="libraries">
                                <img src="https://i.morioh.com/990d21e6a2.png" width="600px" />
                                    <p>Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    Ex occaecat id minim non dolor. Amet culpa laborum aute dolor. Est laborum esse officia magna.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
