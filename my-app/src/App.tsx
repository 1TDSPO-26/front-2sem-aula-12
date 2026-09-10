import Cabecalho from "./components/Cabecalho";
import ObservadorDeRota from "./components/ObservadorDeRota";

import Rodape from "./components/Rodape";
import { Outlet, Link } from "react-router";

export default function App() {
  return (
    <div>
      <Cabecalho/>
      
      <Rodape/>
      <>
        <ObservadorDeRota/>
      <header>
        <nav>
          <Link to="/">Início</Link> | 
          <Link to="/produtos">Produtos</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© Sistema de Produtos</p>
      </footer>
    </>
  
    </div>
  )
}
