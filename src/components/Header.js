import React from "react"
import logo from "../elements/logo.png"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <div className="nav-container">
          <div className="nav-items">
            <NavLink to="/plan">
              <div className="nav-item" activeClassName="active">
                PLAN
              </div>
            </NavLink>
            <NavLink to="/materials">
              <div className="nav-item" activeClassName="active">
                MATERIALS
              </div>
            </NavLink>
            <NavLink to="/tools">
              <div className="nav-item" activeClassName="active">
                TOOLS
              </div>
            </NavLink>
            <NavLink to="/obstacles">
              <div className="nav-item" activeClassName="active">
                OBSTACLES
              </div>
            </NavLink>
            <NavLink to="/tipstricks">
              <div className="nav-item" activeClassName="active">
                TIPS &amp; TRICKS
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
