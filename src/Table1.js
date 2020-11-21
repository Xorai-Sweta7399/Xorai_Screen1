import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { FaNotesMedical } from "react-icons/fa";

import './table1.css';

function Table1(){
    return(   
<>
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<FaNotesMedical className="icon"/>
<span className="top-text">
<span className="custo">Appointment</span>
  <span className="sear">Confirmation</span>
  </span>
</ReactBootStrap.Navbar>
</>

)
}

export default Table1