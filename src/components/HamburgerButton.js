import * as React from "react"
import PropTypes from "prop-types"

const HamburgerButton = ({ showMenu, onClick }) => {
    // copied from website styling (devtools inspect)
    return (
        <button style={{
            height: showMenu ? "28px" : "35px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            margin: "0vw",
            border: "0",
            background: "transparent",
        }}
        onClick={() => onClick()}
        >
            {
                showMenu ? (
                    <>
                    < div style={{
                        transform: "translate3d(0px, 10px, 0px) rotate(45deg)",
                        background: "black",
                        height: "4px",
                        width: "50px"
                    }}></div >
                    <div style={{
                        transform: "translate3d(0px, -12px, 0px) rotate(-45deg)",
                        background: "black",
                        height: "4px",
                        width: "50px",
                    }}></div>
                    </>
                ) : (
                    <>
                    < div style={{
                        background: "black",
                        height: "4px",
                        width: "45px"
                    }}></div >
                    < div style={{
                        background: "black",
                        height: "4px",
                        width: "45px"
                    }}></div >
                    <div style={{
                        background: "black",
                        height: "4px",
                        width: "45px",
                    }}></div>
                    </>
                )
            }
        </button >
    )
}

HamburgerButton.propTypes = {
    showMenu: PropTypes.bool,
    onClick: PropTypes.func
}

export default HamburgerButton;