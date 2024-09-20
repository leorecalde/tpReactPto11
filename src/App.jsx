import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";

function App() {
  const [noticia, setNoticia] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    consultarApi();
  }, [categoria]);

  const consultarApi = async () => {
    try {
      if (categoria !== "") {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_537107b8897ef7124db12aad79f1548e057ab&category=${categoria}`
        );
        const dato = await respuesta.json();
        setNoticia(dato.results);
        console.log(noticia)
      }
    } catch (error) {}
  };

  return (
    <>
      <Titulo></Titulo>
      <Formulario
        noticia={noticia}
        categoria={categoria}
        setCategoria={setCategoria}
      ></Formulario>
    </>
  );
}

export default App;
