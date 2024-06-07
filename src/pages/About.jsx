import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Myimage from '../assets/images/office.jpeg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";



function About() {
    const now = 92;
    const jjj = 95;
  return (
    <main>
          <Hero/>
   

    
    <section id='about' className='block about-block '>
        <Container fluid>
            <div className='title-holder'>
               <h2>About us</h2>
               <div className='subtitle'>learn more about us</div>
            </div>
      <Row>
        <Col sm={6}>
        <Image src={Myimage} alt="my photo" style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '10px', margin: ' auto' }} />
        </Col>
        <Col sm={6}>
           <p>"At Bentech, we're a team of innovative software developers passionate about building cutting-edge websites that drive results. Leveraging the power of React and Django, we craft custom web applications that are fast, scalable, and secure. Our expert team of frontend developers harnesses the capabilities of React to create responsive, user-friendly interfaces that provide exceptional user experiences.</p>
           <p>Meanwhile, our backend developers utilize Django's robust framework to design and build efficient, scalable server-side architectures that power our clients' online presence. With a focus on collaboration and innovation, we deliver tailored solutions that meet the unique needs of our clients, helping them achieve their online goals and succeed in today's digital landscape.".</p>
           <div className='progress-block'>
            <h4>React, Html,css</h4>
            <ProgressBar now={now} label={`${now}%`} />
            <h4>Python, java, Django</h4>
            <ProgressBar now={jjj} label={`${jjj}%`}  />
           </div>
        </Col>
      </Row>
    </Container>

    </section>
    <Footer/>
    </main>
  )
}

export default About