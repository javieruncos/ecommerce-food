import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './components/common/Menu'
import Inicio from './components/view/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuProducts from './components/view/MenuProducts'

function App() {


  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Menu></Menu>
          <Routes>
            <Route path='/' element={ <Inicio></Inicio>}></Route>
            <Route path='/menuProduct' element={<MenuProducts></MenuProducts>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
