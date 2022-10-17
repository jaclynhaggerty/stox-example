import * as React from "react"

const HamburgerButton = () => {
    // copied from website styling (devtools inspect)
    return (
        <button style={{
            height: "28px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            margin: "0vw",
            border: "0",
            background: "transparent",
        }}>
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
        </button >
    )
}

export default HamburgerButton;