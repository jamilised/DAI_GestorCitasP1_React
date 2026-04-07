import "./Formulario.css";
import CampoInput from "../CampoInput";
import CampoTextarea from "../CampoTextarea";

const Formulario = () => {
  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        <CampoInput label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" />
        <CampoInput label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño de la mascota" />
        <CampoInput label="Fecha" type="date" name="fecha" />
        <CampoInput label="hora" type="time" name="hora" />

        <CampoTextarea label="Síntomas" name="sintomas" />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;