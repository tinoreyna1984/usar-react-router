//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; // React Router

// paginas
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

// componentes
import Navigation from './components/Navigation';

/**
 * App demostrativo para el uso de React Router
 */

function App() {
  return (
    <>
      < Router >
        < Navigation />
        < Routes>
          < Route path='/' element={<Home />} />
          < Route path='/acerca' element={<Acerca />} />
          < Route path='/contacto' element={<Contacto />} />
          < Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
