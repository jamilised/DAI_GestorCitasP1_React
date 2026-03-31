import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

function App() {
const [citas, setCitas] = useState([
  {
    id: 1,
    mascota: "Nina",
    propietario: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  },
  {
    id: 2,
    mascota: "Sifon",
    propietario: "Flecha",
    fecha: "2023-08-05",
    hora: "09:24",
    sintomas: "Duerme mucho"
  },
  {
    id: 3,
    mascota: "Floki",
    propietario: "Ari",
    fecha: "2023-08-05",
    hora: "16:15",
    sintomas: "No está comiendo"
  }
]);

  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <ListaCitas citas={citas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
