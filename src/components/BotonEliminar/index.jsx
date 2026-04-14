import "./BotonEliminar.css";

const BotonEliminar = ({ onClick }) => {
  return (
    <button className="button eliminar u-full-width" onClick={onClick}>
      Eliminar ×
    </button>
  );
};

export default BotonEliminar;
