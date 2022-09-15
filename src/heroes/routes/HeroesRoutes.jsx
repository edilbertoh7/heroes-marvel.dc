import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../design"
import { MarvelPage,DcPage, HeroPage, InicioPage } from "../Pages"
export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="inicio" element={<InicioPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="heroe/:heroeId" element={<HeroPage />} />
                <Route path="/*" element={<Navigate to="/inicio" />} />
            </Routes>
        </>

    )
}
