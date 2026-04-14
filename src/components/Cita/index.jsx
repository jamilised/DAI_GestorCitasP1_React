import "./Cita.css";
import BotonEliminar from "../BotonEliminar";

const Cita = ({ mascota, dueño, fecha, hora, sintomas, eliminar }) => {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>

      <BotonEliminar onClick={eliminar} />
    </div>
  );
};

export default Cita;