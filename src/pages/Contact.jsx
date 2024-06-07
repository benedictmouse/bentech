import React from 'react'
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import myimage from "../assets/images/nerd2.jpeg"
import Myimage from "../assets/images/nerd3.jpeg"
import yimage from "../assets/images/nerd4.jpeg"





function Contact() {
  return (
    <main>
      <Hero/>
      <section id = "blog" className='block blog-block'>
      <Container fluid>
        <div className='title-holder'>
            <h2>our team</h2>
            <div className='subtitle'>meet our team</div>
        </div>
        <Row>
           <Col sm={4}>
            <div className='Holder'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={myimage}/>
             <Card.Body>
               <Card.Title>John doe</Card.Title>
            <Card.Text>
            "I am the founder and a full-stack developer, passionate about building innovative solutions that drive results."
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
           </Col>

           <Col sm={4}>
            <div className='Holder'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={yimage}/>
             <Card.Body>
               <Card.Title>Nancy Nafula</Card.Title>
            <Card.Text>
            "I am a frontend developer, specializing in crafting responsive, user-friendly, and scalable web applications that deliver exceptional user experiences."
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
           </Col>

           <Col sm={4}>
            <div className='Holder'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Myimage}/>
             <Card.Body>
               <Card.Title>Emilio Mark</Card.Title>
            <Card.Text>
            "I am a backend developer, designing and building scalable, secure, and efficient server-side architectures that power fast and reliable web applications."
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
           </Col>
           
        </Row>
      </Container>
      </section>
      <section>
      <Form
  style={{
    maxWidth: "600px", /* set the maximum width of the form */
    margin: "40px auto", /* add some margin and center the form */
    padding: "20px", /* add some padding to the form */
    border: "1px solid #ddd", /* add a light grey border */
    borderRadius: "10px", /* add a rounded border */
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", /* add a subtle shadow */
  }}
>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      techafrica@gmail.com
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="email me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </section>
      <Footer/>
    </main>
  
  )
}

export default Contact