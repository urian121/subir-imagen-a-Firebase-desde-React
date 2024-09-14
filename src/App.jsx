import { useState, useEffect } from "react";
import {
  subirImagenFirebase,
  obtenerImagenesFirebase,
} from "./firebase/config.js";

// Importamos el paquete para las alertas
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

// Importamos el paquete para el Loading que se muestra cuando se envia el form
import { showLoading, hideLoading } from "loading-request";
import "loading-request/dist/index.css";

import Formulario from "./components/Form.jsx";
import ListImg from "./components/ListImg.jsx";
import Titulo from "./components/Titulo.jsx";

function App() {
  // Declarando mis variables de estado
  const [imageList, setImageList] = useState([]);

  // El hook useEffect nos permite ejecutar una función cuando se renderiza el componente y obtener las imagenes subidas
  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const images = await obtenerImagenesFirebase();
      setImageList(images);
    } catch (error) {
      console.error("Error al recuperar las imágenes:", error);
    }
  }

  async function subirImagen(e) {
    e.preventDefault();
    let file = e.target[0].files[0];
    if (file === undefined) return;

    showLoading({
      message: "Enviando imagen a Firebase...",
      textLoadingSize: "20px",
    });

    try {
      const respuesta = await subirImagenFirebase(file);
      setImageList((prevList) => [...prevList, respuesta]);
      toast.success("¡La operación se realizó con éxito!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "swingInverted",
        icon: "",
        sonido: true,
      });
    } catch (error) {
      toast.error("¡La operación no se pudo realizar!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "",
        sonido: true,
      });
    } finally {
      hideLoading({ timeLoading: 500 });
    }
  }

  return (
    <>
      <Titulo />
      <div className="row justify-content-center">
        <Formulario subirImagen={subirImagen} />
        <ListImg imageList={imageList} />
      </div>
    </>
  );
}

export default App;
