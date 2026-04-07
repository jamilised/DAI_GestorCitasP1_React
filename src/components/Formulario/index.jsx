import ".../styles/global.css";

const Formulario = () => {

  const campos = [
    { label: "Nombre Mascota", type: "text" },
    { label: "Nombre Dueño", type: "text" },
    { label: "Fecha", type: "date" },
    { label: "Hora", type: "time" }
  ];

  return (
    <>
      <h2>Crear mi Cita</h2>

      <form>
        {campos.map(campo => (
          <label>{campo.label}</label>)
          (<input type={campo.type} className="u-full-width"/>
        ))}

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;