import "./Header.css";

const Header = () => {
const campos = ["ADMINISTRADOR DE PACIENTES"]
  return (
  <div className="header">
    {campos.map(campo => (<h1>{campo}</h1>))}
  </div> )
};

export default Header;