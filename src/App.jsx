import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './components/common/Menu'
import Inicio from './components/view/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuProducts from './components/view/MenuProducts'
import DetalleProducto from './components/view/DetalleProducto'
import StateCarrito from './context/StateCarrito'
import Administrador from './components/view/Administrador'
import AddProduct from './components/view/AddProduct'
import EditarProducto from './components/view/EditarProducto'
import Ubicacion from './components/Ubicacion'
import PageUbicacion from './components/view/PageUbicacion'
import Team from './components/view/Team'
import Testimonios from './components/view/Testimonios'
import Login from './components/Login'
import RegistroUser from './components/RegistroUser'
import StateUsuarios from './context/StateUsuarios'
import RutasAdmin from './routes/RutasAdmin'

function App() {


  return (
    <>
      <StateUsuarios>
        <StateCarrito>
          <div className='App'>
            <BrowserRouter>
              <Menu></Menu>
              <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/menuProduct' element={<MenuProducts></MenuProducts>}></Route>
                <Route path='/ubicacion' element={<PageUbicacion></PageUbicacion>}></Route>
                <Route path='/team' element={<Team></Team>}></Route>
                <Route path='/testimonios' element={<Testimonios></Testimonios>}></Route>
                <Route path='/newProduct' element={<AddProduct></AddProduct>}></Route>
                <Route path='/editProduct/:id' element={<EditarProducto></EditarProducto>}></Route>
                <Route path='/detalleProducto/:id' element={<DetalleProducto></DetalleProducto>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/registro' element={<RegistroUser></RegistroUser>}></Route>
                <Route path='/administrar/*' element={
                  <RutasAdmin>
                    <Administrador></Administrador>
                  </RutasAdmin>
                }
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </StateCarrito>
      </StateUsuarios>
    </>
  )
}

export default App
