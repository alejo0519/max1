import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Fregistro from "./pages/Fregistro"
import Accesorios from "./componentes/Accesorios"
const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/R_I" element={<Fregistro/>}/>
      <Route exact path="/Accesorio" element={<Accesorios/>}/>
    </Routes>
  </BrowserRouter>
)
export default App