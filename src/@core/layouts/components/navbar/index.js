// ** React Imports
import { Fragment } from "react"

// ** Custom Components


// ** Third Party Components
import {Menu } from "react-feather"

// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap"

const ThemeNavbar = (props) => {
  // ** Props
  const { setMenuVisibility } = props

  // // ** Function to toggle Theme (Light/Dark)
  // const ThemeToggler = () => {
  //   if (skin === "dark") {
  //     return <Sun className="ficon" onClick={() => setSkin("light")} />
  //   } else {
  //     return <Moon className="ficon" onClick={() => setSkin("dark")} />
  //   }
  // }

  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        <ul className="navbar-nav d-xl-none">
          <NavItem className="mobile-menu me-auto">
            <NavLink
              className="nav-menu-main menu-toggle hidden-xs is-active"
              onClick={() => setMenuVisibility(true)}
            >
              <Menu className="ficon" />
            </NavLink>
          </NavItem>
        </ul>
        <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
          </NavLink>
        </NavItem>
      </div>
    </Fragment>
  )
}

export default ThemeNavbar
