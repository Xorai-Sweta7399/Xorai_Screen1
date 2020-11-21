import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './navbar.css';
import { AiFillDashboard } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import {BiCalendarPlus}  from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { GrNotes } from "react-icons/gr";

function Navbar(){
    return(
<>
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><ReactBootStrap.NavDropdown title="SCHEDULER" id="collasible-nav-dropdown">   </ReactBootStrap.NavDropdown></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#"><AiFillDashboard className="icon" /><p className="icon_up">Dashboard</p></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#"><IoIosPeople  className="icon"/><p className="icon_up">Appointments</p></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#"><BsFillPeopleFill className="icon" /><p className="icon_up">Customers</p></ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#"><BiCalendarPlus className="icon"/></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#"><RiContactsFill className="icon"/></ReactBootStrap.Nav.Link>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
<div className="MakeApp">
  <h4 className="text">MAKE APPOINTMENT</h4>
  <span className="right_icons"><VscGraph className="frsticon"/>
      <GrNotes className="frsticon"/>
      </span>
</div>

</>
       
    )
}

export default Navbar