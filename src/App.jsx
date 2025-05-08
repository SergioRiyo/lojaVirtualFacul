import { BrowserRouter } from "react-router"
import "./App.css"
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
