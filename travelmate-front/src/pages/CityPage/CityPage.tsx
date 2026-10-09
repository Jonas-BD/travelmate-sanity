import { CityList } from "../../components/molecules/CityList/CityList"
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper"
import { ContainerStyled } from "../../styled/container.styled"

export const CityPage = () => {
    return (
        <ContentWrapper title="Cities">
            <ContainerStyled>
                <CityList />
            </ContainerStyled>
        </ContentWrapper>
    )
}
