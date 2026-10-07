import HeroImage from "../../../assets/travelmate-hero.png"
import { HeroStyled } from "./Hero.styled"

export const Hero = () => {
  return (
    <HeroStyled>
        <img src={HeroImage} alt="TravelMate Hero" />
    </HeroStyled>
  )
}