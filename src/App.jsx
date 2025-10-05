import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Fregistro from "./pages/Fregistro"
import Accesorios from "./componentes/Accesorios"
import Ubicacion from "./componentes/ubicacion"
import Pedido from "./componentes/pedido"
import Carrito from "./componentes/carrito"
import Registro from "./componentes/registro"
const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Inicio/>}/>
      <Route exact path="/R_I" element={<Fregistro/>}/>
      <Route exact path="/Accesorio" element={<Accesorios/>}/>
      <Route exact path="/Ubicacion" element={<Ubicacion/>}/>
      <Route exact path="/Pedido" element={<Pedido/>}/>
      <Route exact path="/Carrito" element={<Carrito/>}/>
      <Route exact path="/Registro" element={<Registro/>}/>
    </Routes>
  </BrowserRouter>
)
export default App