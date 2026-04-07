import "./Header.css";

const Header = () => {
const campos = ["ADMINISTRADOR DE PACIENTES"]
  return (
  <>
    {campos.map(campo => (<h1>{campo}</h1>))}
  </> )
};

export default Header;