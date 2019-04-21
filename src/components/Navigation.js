
import { Navbar, Nav } from 'react-bootstrap';
import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
class Navigation extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'nav-link active' : 'nav-link';
    }
    render() {
        return (
            <Navbar bg="info" variant="dark">
    <Navbar.Brand >News</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className={this.getNavLinkClass('/')} to="/">Home</NavLink>
    </Nav>
  </Navbar>
        )
    }
};
Navigation = withRouter(Navigation);
export default Navigation;