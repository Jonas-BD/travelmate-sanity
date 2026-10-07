import { Outlet } from "react-router-dom"
import { Header } from "../../components/organisms/Header/Header"
import { MainStyled } from "../../styled/elements.styled"
import { Footer } from "../../components/organisms/Footer/Footer"

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
