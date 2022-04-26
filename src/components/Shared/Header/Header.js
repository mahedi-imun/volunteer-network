import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Group 1329.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img style={{ width: '150px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home' >Dome</Nav.Link>
                        <Nav.Link as={Link} to='/donation' >Donation</Nav.Link>
                        <Nav.Link as={Link} to='/events' >Events</Nav.Link>
                        <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to='/signup' >
                            <button className='btn btn-outline-none bg-primary text-white '> register</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/admin' ><button className='btn btn-outline-none bg-dark text-white '> admin</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;