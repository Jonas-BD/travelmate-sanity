import { useParams } from "react-router-dom"
import { useCountries } from "../../../hooks/useCountries"
import { ContentWrapper } from "../../../layout/ContentWrapper/ContentWrapper"
import { CountryDetailsStyled } from "./CountryDetails.styled"
import { ContainerStyled } from "../../../styled/container.styled"

export const CountryDetails = () => {
    const { id } = useParams()
    const { countries } = useCountries()

    const country = countries.find((country) => country._id === id)

    if (!country) {
        return <div>Indlæser...</div>
    }

    return (
        <ContentWrapper title={`Country - ${country.name}`}>
            <ContainerStyled>
                <CountryDetailsStyled>
                    <img src={country.image} alt={country.name} />
                    <p>{country.description}</p>
                </CountryDetailsStyled>
            </ContainerStyled>
        </ContentWrapper>
    )
}
