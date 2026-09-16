import { NavLink } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Contact
      </NavLink>
    </nav>
  )
}