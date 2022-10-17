import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HamburgerButton from "./HamburgerButton"
import { FaSearch } from "react-icons/fa"
import { SlBag } from "react-icons/sl"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderBottom: "1px solid rgb(229, 229, 229)"
    }}
  >
    <div style={{
      float: "left",
      display: "flex",
      alignItems: "center", }}>
      <HamburgerButton> </HamburgerButton>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          alt="STOX Energy Socks"
          src="../images/logo.png"
          height={50}
        />
      </Link>
    </div>
    <div style={{
      float: "right",
      display: "flex",
      alignItems: "center", }}>
      <FaSearch style={{ fontSize: "35px", marginRight: "30px" }} />
      <SlBag style={{ fontSize: "35px", strokeWidth: "40px" }} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
