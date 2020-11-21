import React from 'react';
import './bigtablecard1.css';
import { Card } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import { MdContacts } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaBus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoIosBookmark,IoIosThumbsUp } from "react-icons/io";
import { GoAlert } from "react-icons/go";
import { GrNotes } from "react-icons/gr";

const Bigtablecard1 = () => {

    const cardInfo = [
         {icon:<MdContacts />,title:"CUSTOMER" ,subtitle:"Judy Troupe"},
         {icon:<GiHouseKeys/> ,title:"VEHICLE" ,subtitle:"2010 BMW 535i"},
         {icon:<MdDateRange /> ,title:"DATE" ,subtitle:"Tuesday,June 4,2013"},
         {icon:<IoMdPeople />,title:"ADVISOR OR TEAM" ,subtitle:"Steve Robertson"},
         {icon:<FaBus  /> ,title:"TRANSPORTATION" ,subtitle:"Loaner"}

    ];

    return(
        <div className ="App">
           <ReactBootStrap.Table responsive>
              <thead>
                <tr>
                    <th><MdContacts  className="icons" /><span className="left_text2"> <span className="top_text">CUSTOMER</span>
                    <span className="bold_text">Judy Troupe</span>
                    </span>
                    </th>
                </tr>
                <tr>
                    <th><GiHouseKeys  className="icons" /><span className="left_text2"> <span className="top_text">VEHICLE</span>
                    <span className="bold_text">2010 BMW 535i</span>
                    </span>
                    </th>
                </tr>
                <tr>
                    <th><MdDateRange  className="icons" /><span className="left_text"> <span className="top_text">DATE</span>
                    <span className="bold_text">Tuesday,June 4,2013</span>
                    </span>
                    </th>
                </tr>
                <tr>
                    <th><IoMdPeople className="icons" /><span className="left_text"> <span className="top_text">ADVISOR OR TEAM</span>
                    <span className="bold_text">Steve Robertson</span>
                    </span>
                    </th>
                </tr>
                <tr>
                    <th><FaBus   className="icons" /><span className="left_text"> <span className="top_text">TRANSPORTATION</span>
                    <span className="bold_text">Loaner</span>
                    </span> 
                    </th>
                </tr>
              </thead>
              <ReactBootStrap.Table responsive>
                  <tr><th className="content"><p><FaCarSide className="small_icons" /></p><p className="spaced">20,000 Mile Service- Factory Schedule 3</p><p className="spaced">2.0</p><p className="spaced">$140.00</p></th></tr>
                  <tr><th className="content"><p><FaTools  className="small_icons" /></p><p className="spaced">Replace Wipers</p><p className="spaced">5</p><p className="spaced">$50.00</p></th></tr>
                  <tr><th className="content"><p><FaTools className="small_icons" /></p><p className="spaced">Defog Headlamps</p><p className="spaced">5</p><p className="spaced">$140.00</p></th></tr>
                  <tr><th className="content"><p><IoIosBookmark  className="small_icons" /></p><p className="spaced">Replace Spark Plugs</p><p className="spaced">1.5</p><p className="spaced">$250.00</p></th></tr>
                  <tr><th className="content"><p><GoAlert className="small_icons" /></p><p className="spaced">Brake Caliper Repair</p><p className="spaced">2.5</p><p className="spaced">$350.00</p></th></tr>
                  <tr><th className="content"><p><GoAlert className="small_icons" /></p><p className="spaced">Electrical System</p><p className="spaced">2.0</p><p className="spaced">$0.00</p></th></tr>
                  <tr><th className="content"><p></p><p className="spaced"></p><p className="spaced">9.0 hrs</p><p className="spaced">$840.00</p></th></tr>
              </ReactBootStrap.Table>
              <tr>
                    <th><IoIosThumbsUp className="icons" /><span className="left_text"> <span className="top_text">CONFIRMATION</span>
                    <span className="bold_text">jodyt2@mac.com</span>
                    </span>
                    </th>
                </tr>
                <tr>
                    <th><GrNotes className="icons" /><span className="left_text"> <span className="top_text1">NOTES FOR DMS</span>
                    <span className="bold_text1">Customer states the call is pulling to the right</span>
                    </span>
                    </th>
                </tr>
                <tr>
                <p>Booking time: June 4 2013 @ 7:22</p>
                <p>Booked by:Steve Robertson</p>
                </tr>
            </ReactBootStrap.Table>
</div>

    );
}
export default Bigtablecard1;