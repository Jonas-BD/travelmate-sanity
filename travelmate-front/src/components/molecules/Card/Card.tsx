import { CardStyled } from "./Card.styled"
import type { CardProps } from "./Card.types"

export const Card = ({ image, title, subtitle }: CardProps) => {
  return (
    <CardStyled>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </CardStyled>
  )
}
