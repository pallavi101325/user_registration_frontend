import {NavLink as ReactLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import {  isLoggedIn, getCurrentUserDetail, doLogout } from "./auth/index";



const customNavbar = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [login, setLogin] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState(undefined);

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {

 setLogin(isLoggedIn())
 setUser(getCurrentUserDetail());

}, [login])

const logout = () => {
  doLogout(() =>{
    setLogin(false);
      navigate("/")
  })
}


    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Navbar >
        <NavbarBrand tag={ReactLink} to="/">Resgistration System</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {
              login && (
                <>
                <NavItem>
                  <NavLink onClick={logout}>
                    LogOut
                  </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink >
                    {user.email}
                  </NavLink>
                  </NavItem>
                </>
              )
            }
            <NavItem>
              <NavLink tag={ReactLink} to="/">Home</NavLink>
            
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/private/profile">
                Profile
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}
export default customNavbar;