import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { CHEQUE_ROUTE, PRODUCT_ROUTE, SELLER_ROUTE } from "../utils/consts";

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <NavLink to={PRODUCT_ROUTE}>Product service</NavLink> */}
          <Nav className="me-auto">
            <NavLink to={SELLER_ROUTE} className="text-secondary">Seller</NavLink>
            <NavLink to={PRODUCT_ROUTE} className="text-secondary">Product</NavLink>
            <NavLink to={CHEQUE_ROUTE} className="text-secondary">Cheque</NavLink>
          </Nav>

        </Container>
      </Navbar>
    );
}

export default NavBar