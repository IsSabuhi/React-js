/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Container, Media, Row, Col, ListGroup, Card } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                         <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Mollit sunt duis aliqua do occaecat adipisicing qui consectetur ad proident non. 
                                 Velit officia reprehenderit cillum anim esse laborum anim ex ex dolor ullamco id. 
                                 Duis dolore consequat est culpa cupidatat minim quis eiusmod. 
                                 Eiusmod irure ex aliquip pariatur eu aliquip proident fugiat.</p>
                         </Media.Body>
                        </Media>

                        <Media className="m-5">
                         <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Mollit sunt duis aliqua do occaecat adipisicing qui consectetur ad proident non. 
                                 Velit officia reprehenderit cillum anim esse laborum anim ex ex dolor ullamco id. 
                                 Duis dolore consequat est culpa cupidatat minim quis eiusmod. 
                                 Eiusmod irure ex aliquip pariatur eu aliquip proident fugiat.</p>
                         </Media.Body>
                        </Media>

                        <Media className="m-5">
                         <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Mollit sunt duis aliqua do occaecat adipisicing qui consectetur ad proident non. 
                                 Velit officia reprehenderit cillum anim esse laborum anim ex ex dolor ullamco id. 
                                 Duis dolore consequat est culpa cupidatat minim quis eiusmod. 
                                 Eiusmod irure ex aliquip pariatur eu aliquip proident fugiat.</p>
                         </Media.Body>
                        </Media>    

                        <Media className="m-5">
                         <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                         />
                         <Media.Body>
                             <h5>Blog post</h5>
                             <p>Mollit sunt duis aliqua do occaecat adipisicing qui consectetur ad proident non. 
                                 Velit officia reprehenderit cillum anim esse laborum anim ex ex dolor ullamco id. 
                                 Duis dolore consequat est culpa cupidatat minim quis eiusmod. 
                                 Eiusmod irure ex aliquip pariatur eu aliquip proident fugiat.</p>
                         </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5" >Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JsvaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                        <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                 Velit officia reprehenderit cillum anim esse laborum anim ex ex dolor ullamco id. 
                                 Duis dolore consequat est culpa cupidatat minim quis eiusmod. 
                                 Eiusmod irure ex aliquip pariatur eu aliquip proident fugiat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
