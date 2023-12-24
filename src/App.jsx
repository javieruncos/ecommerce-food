import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu'
import Inicio from './components/view/Inicio'

function App() {


  return (
    <>
      <div className='App'>
        <Menu></Menu>
       <Inicio></Inicio>
      </div>
    </>
  )
}

export default App
