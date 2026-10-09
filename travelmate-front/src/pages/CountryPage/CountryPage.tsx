import { CountryList } from "../../components/molecules/CountryList/CountryList"
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper"
import { ContainerStyled } from "../../styled/container.styled"

export const CountryPage = () => {
    return (
        <ContentWrapper title="Countries">
            <ContainerStyled>
                <CountryList />
            </ContainerStyled>
        </ContentWrapper>
    )
}
