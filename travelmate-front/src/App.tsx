import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { HomePage } from './pages/HomePage/HomePage'
import { CountryPage } from './pages/CountryPage/CountryPage'
import { CountryDetails } from './components/molecules/CountryDetails/CountryDetails'
import { CityPage } from './pages/CityPage/CityPage'
import { CityDetails } from './components/molecules/CityDetails/CityDetails'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries" element={<CountryPage />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
          <Route path="/cities" element={<CityPage />} />
          <Route path="/cities/:id" element={<CityDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
