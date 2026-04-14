import "./ListaCitas.css";
import Cita from "../Cita";

const ListaCitas = ({ citas, setCitas }) => {

  const eliminarCita = (index) => {
    if (confirm("¿Eliminar esta cita?")) {
      const nuevas = citas.filter((_, i) => i !== index);
      setCitas(nuevas);
    }
  };

  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita
          key={index}
          {...cita}
          eliminar={() => eliminarCita(index)}
        />
      ))}
    </>
  );
};

export default ListaCitas;