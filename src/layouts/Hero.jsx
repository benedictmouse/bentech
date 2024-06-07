import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Myimage from '../assets/images/vid.jpeg'
import yimage from '../assets/images/contact.jpeg'
import myimage from '../assets/images/succes.jpeg'


function Hero() {
  return (
    <section id='home'className='hero-block  bg-body-tertiary'>
       <Carousel>
      <Carousel.Item>
        <img src={Myimage}alt ="photo" />
        <Carousel.Caption>
          <h3>Wlcome</h3>
          <p>your Number one Tech solution</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimage}alt ="photo" />
        <Carousel.Caption>
          <h3>our services</h3>
          <p>we build Websites create it according to our customers preferences</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={yimage}alt ="photo" />
        <Carousel.Caption>
          <h3>contact</h3>
          <p>
            Feel free to contact as whenever you want
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Hero