import "./Formulario.css";
import CampoInput from "../CampoInput";
import CampoTextarea from "../CampoTextarea";
import { useState } from "react";

const Formulario = ({ setCitas }) => {

  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const ValidacionCampo = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const ValidacionEnvio = (e) => {
    e.preventDefault();

    if (
      cita.mascota === "" ||
      cita.dueño === "" ||
      cita.fecha === "" ||
      cita.hora === "" ||
      cita.sintomas === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setCitas((prev) => [...prev, cita]);
  };

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form onSubmit={ValidacionEnvio}>

        <CampoInput label="Nombre Mascota" type="text" name="mascota" onChange={ValidacionCampo} />
        <CampoInput label="Nombre Dueño" type="text" name="dueño" onChange={ValidacionCampo}/>
        <CampoInput label="Fecha" type="date" name="fecha" onChange={ValidacionCampo} />
        <CampoInput label="hora" type="time" name="hora" onChange={ValidacionCampo} />
        <CampoTextarea label="Síntomas" name="sintomas" onChange={ValidacionCampo} />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;