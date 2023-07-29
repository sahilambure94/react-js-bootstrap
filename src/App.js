import './App.css';
import analyticsImg from './analytics.png';
import mainPersonPng from './personImg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import socialMediaImg from './socialMedia.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import womanImg from './womanImg.jpg';
import barChartImg from './barChartImg.png';
import seatTableImg from './seatOne.png';
import potraitTechWomen from './potraitTechImg.jpg';
import seatAvail from './seatAvailability.png';
function App() {
  return (
    <div className="App">
      <>
      <Navbar className="color-nav" data-bs-theme="light">
        <Container fluid style={{paddingLeft: '5%', paddingRight: '5%'}}>
          <Navbar.Brand href="#home">Brand Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            <button className='btn btn-failure'>Sign In</button>
          </Nav>
          <Nav> 
            <button className='btn btn-primary'>Sign Up</button>
          </Nav>
        </Container>
      </Navbar>
    </>
    <Container fluid className="container-style-upper">
      <Container fluid style={{paddingLeft: '5%', paddingRight: '5%'}}>
      <Row>
        <Col>
        <div className="top-div">
            <h1 className="text-start">We Build Business Convert Ideas Into Software</h1>
            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="d-flex justify-content-start">
              <Button variant="outline-primary" className="m-1" size='lg'>Sign In</Button>
              <Button variant="primary" className="m-1" size='lg'>Sign Up</Button>
            </div>
        </div>
        </Col>
        <Col>
        <div style={{ position: 'relative' , display: 'flex', justifyContent: 'flex-end'}}>
            <img src={mainPersonPng} alt="Image 3" style={{ position: 'relative', top: 60, left: 60 , width: '600px', height: '600px', marginRight: '50px', }} />
            <img src={analyticsImg} alt="Image 1" style={{ position: 'absolute', top: 400, left: 189, width: '100px', height: '100px', }} />
            <img src={socialMediaImg} alt="Image 2" style={{ position: 'absolute', top: 150, right: -50, width: '150px', height: '150px'}} />
          </div>
        </Col>
      </Row>
      </Container>
    </Container>
    <Container fluid className="container-style-down">
      <Container fluid style={{paddingLeft: '50px', paddingRight: '50px', }}>
      <Row>
        <Col>
        <div style={{ position: 'relative' , display: 'flex', left: 350}}>
            <img src={womanImg} alt="Image 3" className="rounded-main-image" />
          </div>
        </Col>
        <Col>
        <div style={{ position: 'relative' , marginTop: '50px', right: -50}}>
            <h1 className="text-start">Booking History</h1>
            <img src={barChartImg} alt="Image 3" style={{height: '180px', width:'350px', marginRight: '500px'}}/>
            <div class="d-flex justify-content-start">
              <Button variant="primary" className="m-1" size='lg'>Get Started</Button>
            </div>
        </div>
        </Col>
      </Row>
      </Container>
    </Container>
    <Container fluid className="container-style-last">
      <Container fluid style={{paddingLeft: '50px', paddingRight: '50px', marginBottom: '50px'}}>
      <Row>
        <Col>
        <div style={{ position: 'relative' , marginTop: '50px', left: 350}}>
            <img src={seatTableImg} alt="Image 3" style={{ width:'350px', marginRight: '500px'}}/>
        </div>
        </Col>
        <Col>
        <div style={{ position: 'relative' , display: 'flex', right: -50}}>
            <img src={potraitTechWomen} alt="Image 3" className="rounded-main-image-2" />
            <img src={seatAvail} alt="Image 3" className="rounded-main-image-2" style={{ position: 'absolute', width: '250px', height: '250px', top: 175, left: -120 , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)'}} />
          </div>
        </Col>
      </Row>
      </Container>
    </Container>
    </div>
  );
}

export default App;
