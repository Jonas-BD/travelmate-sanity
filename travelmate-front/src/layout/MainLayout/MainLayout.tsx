import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Main Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
