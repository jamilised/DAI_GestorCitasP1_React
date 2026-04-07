import "./Formulario.css";
import CampoInput from "../CampoInput";
import CampoTextarea from "../CampoTextarea";

const Formulario = () => {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <CampoInput label="Nombre Mascota" type="text" name="mascota" />
        <CampoInput label="Nombre Dueño" type="text" name="propietario" />
        <CampoInput label="Fecha" type="date" name="fecha" />
        <CampoInput label="Hora" type="time" name="hora" />

        <CampoTextarea label="Síntomas" name="sintomas" />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;