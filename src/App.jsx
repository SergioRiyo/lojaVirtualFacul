import CadastroLogin from './pages/cadastroLogin'
import "./App.css"
import Carrinho from './conponentes/carrinho'
import Produto from './conponentes/produto'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers/Routers'

function App() {

  return (
  <>
    <BrowserRouter>
     <Routers/> 
    </BrowserRouter>
    </>
  )
}

export default App
