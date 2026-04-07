import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <ListaCitas />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;