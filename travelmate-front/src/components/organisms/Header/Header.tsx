import { Link } from "react-router-dom"
import { ContainerStyled } from "../../../styled/container.styled"
import { Nav } from "../Nav/Nav"
import { HeaderStyled } from "./Header.styled"

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <Link to="/">
          <h1>✈️ Travel<span>Mate</span></h1>
        </Link>
        <Nav />
      </ContainerStyled>
    </HeaderStyled>
  )
}
