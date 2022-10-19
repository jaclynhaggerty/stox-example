import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './MenuAccordion.css';

const MenuAccordion = () => {
    const types = [
        "SPORT",
        "RUNNING",
        "HOCKEY",
        "SKI",
        "FLIGHT",
        "HIKING",
        "WORK",
    ]


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
                                {types.map((type, index)=> (
                                    <div key={index}> <p>{type} SOCKS </p> <p>  25 products </p></div>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
}
export default MenuAccordion;



