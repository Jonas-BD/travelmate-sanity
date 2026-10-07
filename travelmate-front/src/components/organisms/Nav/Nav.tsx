import { NavLink } from "react-router-dom"
import { NavStyled } from "./Nav.styled"

export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="/Cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/places">Places</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </NavStyled>
  )
}
