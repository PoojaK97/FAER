import React, { Component } from 'react'
import { Navbar, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/Dashboard">Sahajya</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventkey={1} componentClass={Link} href="/Dashboard" to="/Dashboard">
              Dashboard
            </NavItem>
            <NavItem eventkey={2} componentClass={Link} href="/DistressLocations" to="/DistressLocations">
              Distress Locations
            </NavItem>
            <NavItem eventkey={3} componentClass={Link} href="/DistressLocations" to="/DistressLocations">
              Emergency Help
            </NavItem>
            <NavItem eventkey={4} componentClass={Link} href="/Volunteers" to="/Volunteers">
              Volunteers
            </NavItem>
            <NavItem eventkey={5} componentClass={Link} href="/Doctors" to="/Doctors">
              Doctors
            </NavItem>
            <NavItem eventkey={6} componentClass={Link} href="/ReliefCamps" to="/ReliefCamps">
              Relief Camps
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}