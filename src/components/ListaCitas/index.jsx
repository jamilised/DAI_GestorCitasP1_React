import "./ListaCitas.css";
import Cita from "../Cita";

const ListaCitas = () => {
  const citas = [
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ];

  return (
    <>
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <Cita key={index} {...cita} />
      ))}
    </>
  );
};

export default ListaCitas;