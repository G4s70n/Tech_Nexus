import { BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Componentes/NavBar/NavBar.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import Home from "./Views/Home/Home.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";
import Contacto from "./Views/Contacto/Contacto.jsx";
import Nosotros from "./Views/Nosotros/Nosotros.jsx";
import Favoritos from "./Views/Favoritos/Favoritos.jsx";
import ProductForm from "./Views/FormProductos/FormProductos.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/Productos/page/:page' element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuevoProd" element={<ProductForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;