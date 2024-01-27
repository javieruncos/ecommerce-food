import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './components/common/Menu'
import Inicio from './components/view/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuProducts from './components/view/MenuProducts'
import DetalleProducto from './components/view/DetalleProducto'
import StateCarrito from './context/StateCarrito'
import PageUbicacion from './components/view/PageUbicacion'
import Team from './components/view/Team'
import Testimonios from './components/view/Testimonios'
import Login from './components/Login'
import RegistroUser from './components/RegistroUser'
import StateUsuarios from './context/StateUsuarios'
import RutasAdmin from './routes/RutasAdmin'
import FooterMenu from './components/common/FooterMenu'
import { useEffect } from 'react'
import Aos, { init } from 'aos'
import "aos/dist/aos.css"
import RutasProtegidas from './routes/RutasProtegidas'

function App() {

  useEffect(()=>{
     Aos,init({
      duration:1000
     })
  },[])
 
  const basename = '';

  return (
    <>
      <StateUsuarios>
        <StateCarrito>
          <div className='App'>
            <BrowserRouter basename={basename}>
              <Menu></Menu>
              <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/menuProduct' element={<MenuProducts></MenuProducts>}></Route>
                <Route path='/ubicacion' element={<PageUbicacion></PageUbicacion>}></Route>
                <Route path='/team' element={<Team></Team>}></Route>
                <Route path='/testimonios' element={<Testimonios></Testimonios>}></Route>
                <Route path='/detalleProducto/:id' element={<DetalleProducto></DetalleProducto>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/registro' element={<RegistroUser></RegistroUser>}></Route>
                <Route path='/administrar/*' element={
                  <RutasProtegidas>
                    <RutasAdmin></RutasAdmin>
                  </RutasProtegidas>
                }></Route>
              </Routes>
              <FooterMenu></FooterMenu>
            </BrowserRouter>
          </div>
        </StateCarrito>
      </StateUsuarios>
    </>
  )
}

export default App
