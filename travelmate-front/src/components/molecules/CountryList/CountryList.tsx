import { Link } from "react-router-dom"
import { useCountryGraphQL } from "../../../hooks/useCountryGraphQL"
import { Card } from "../Card/Card"

export const CountryList = () => {
    const { countries } = useCountryGraphQL()

  return (
    <div>
        {countries.map(item => {
            return (
                <Link key={item.id} to={`/countries/${item.id}`}>
                    <Card image={item.image.asset.url} title={item.infos[0]?.name} subtitle={item.infos[0]?.description} />
                </Link>
            )
        })}
    </div>
  )
}
