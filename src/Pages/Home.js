import React, { Component } from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Home extends Component {
    render() {
        return (
        <>
            <CarouselBox />

            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">

                    <Card>
                        <Card.Img variant="bottom"
                        src="https://www.hexacta.com/wp-content/uploads/2020/09/KPIs-and-Agile-software-development-metrics-for-teams-1.jpg"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Consectetur laboris reprehenderit eiusmod reprehenderit. 
                                Excepteur nisi velit eiusmod adipisicing irure amet. 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light" border="success" text="primary">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Consectetur laboris reprehenderit eiusmod reprehenderit. 
                                Excepteur nisi velit eiusmod adipisicing irure amet. 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="top"
                        src="https://miro.medium.com/max/12000/1*27BN72yePYNr9F-b_vTOtg.jpeg"/>
                    </Card>

                    <Card>
                        <Card.Img variant="top"
                        src="https://www.chartattack.com/wp-content/uploads/2019/09/train-696x418.jpg"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Consectetur laboris reprehenderit eiusmod reprehenderit. 
                                Excepteur nisi velit eiusmod adipisicing irure amet. 
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    

                </CardDeck>
            </Container>

        </>
        )
    }
}
