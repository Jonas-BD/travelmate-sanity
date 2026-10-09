import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import { ListStyled } from "../../../styled/elements.styled"
import { useCities } from "../../../hooks/useCities"

export const CityList = () => {
    const { cities } = useCities()

  return (
    <ListStyled>
        {cities.map(item => {
            return (
                <li key={item._id}>
                    <Link key={item._id} to={`/cities/${item._id}`}>
                        <Card image={item.image} title={item.name} subtitle={item.description} />
                    </Link>
                </li>
            )
        })}
    </ListStyled>
  )
}
