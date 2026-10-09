import { CityList } from "../../components/molecules/CityList/CityList"
import { CountryList } from "../../components/molecules/CountryList/CountryList"
import { Hero } from "../../components/organisms/Hero/Hero"
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper"
import { ContainerStyled } from "../../styled/container.styled"

export const HomePage = () => {

  return (
    <ContentWrapper title="Home">
      <Hero />
      <ContainerStyled>
        <h2>Popular Countries</h2>
        <CountryList />

        <h2>Popular Cities</h2>
        <CityList />

        <h2>Featured Places</h2>
      </ContainerStyled>
    </ContentWrapper>
  )
}
