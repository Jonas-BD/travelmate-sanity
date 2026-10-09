import { useParams } from "react-router-dom"
import { ContentWrapper } from "../../../layout/ContentWrapper/ContentWrapper"
import { CityDetailsStyled } from "./CityDetails.styled"
import { ContainerStyled } from "../../../styled/container.styled"
import { useCities } from "../../../hooks/useCities"

export const CityDetails = () => {
    const { id } = useParams()
    const { cities } = useCities()

    const city = cities.find((city) => city._id === id)

    if (!city) {
        return <div>Indlæser...</div>
    }

    return (
        <ContentWrapper title={`City - ${city.name}`}>
            <ContainerStyled>
                <CityDetailsStyled>
                    <img src={city.image} alt={city.name} />
                    <p>{city.description}</p>
                </CityDetailsStyled>
            </ContainerStyled>
        </ContentWrapper>
    )
}
