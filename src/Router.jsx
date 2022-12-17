import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Doacoes } from './pages/Doacoes'
import { Contato } from './pages/Contato'


export function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/doacoes" element={<Doacoes/>} />
            <Route path="/contato" element={<Contato/>} />
        </Routes>
        <Footer />
        </BrowserRouter>

    )
}
