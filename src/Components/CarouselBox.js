/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import forestImg from '../assets/forests.jpg';
import dforestImg from '../assets/dforest.jpg';



export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt='Forest'
                        height="600px"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Pariatur veniam consequat do occaecat tempor nostrud dolor.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dforestImg}
                        alt='Forest'
                        height="600px"
                    />
                    <Carousel.Caption>
                        <h3> Dark Forest image</h3>
                        <p>Pariatur veniam consequat do occaecat tempor nostrud dolor.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg}
                        alt='Forest'
                        height="600px"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Pariatur veniam consequat do occaecat tempor nostrud dolor.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}
