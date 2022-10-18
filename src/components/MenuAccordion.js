import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './MenuAccordion.css';

const MenuAccordion = () => {
    return (
        <div
            style={{
                width: "100%"
            }}
        >
            <Accordion>
                {["DAILY", "SPORT", "WALK", "TRAVEL", "RECOVER", "MEDICAL", "SKI"].map((item, index) => {
                    return (
                        <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header><span style={{ marginLeft: '30px' }}>{item}</span></Accordion.Header>
                            <Accordion.Body>
                                <div> <p>SPORT SOCKS </p> <p>  25 products </p></div>
                                <div> <p>RUNNING SOCKS </p> <p> 25 products </p></div>
                                <div> <p>HOCKEY SOCKS  </p> <p> 25 products </p></div>
                                <div> <p>SKI SOCKS   </p> <p>   25 products </p></div>
                                <div> <p>FLIGHT SOCKS  </p> <p> 25 products  </p></div>
                                <div> <p>HIKING SOCKS  </p> <p> 25 products </p></div>
                                <div> <p>WORK SOCKS   </p> <p>  25 products </p></div>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
}
export default MenuAccordion;



