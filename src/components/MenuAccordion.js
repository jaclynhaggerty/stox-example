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
                {["Daily", "Sport", "Walk", "Travel", "Recover", "Medical", "Ski"].map((item, index) => {
                    return (
                        <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header>{item}</Accordion.Header>
                            <Accordion.Body>
                                test
                                bootstrap
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
}
export default MenuAccordion;



