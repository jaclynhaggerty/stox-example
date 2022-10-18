import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import MobileMenu from "./MobileMenu"
import PropTypes from "prop-types"


const Layout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const toggleMenu = () => {
    // Switch between true and false each click
    setShowMobileMenu(!showMobileMenu);
  }


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header showMenu={showMobileMenu} toggleMenu={toggleMenu} siteTitle={data.site.siteMetadata?.title || `Title`} />
      {showMobileMenu && <MobileMenu></MobileMenu>}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >

        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
