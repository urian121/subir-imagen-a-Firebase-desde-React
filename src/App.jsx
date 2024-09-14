import { useState, useEffect } from "react";
import {
  subirImagenFirebase,
  obtenerImagenesFirebase,
} from "./firebase/configFirebase.js";

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

  /**
   * La función fetchImages nos permite obtener todas las imagenes subidas a Firebase
   */
  async function fetchImages() {
    try {
      const images = await obtenerImagenesFirebase();
      setImageList(images);
    } catch (error) {
      console.error("Error al recuperar las imágenes:", error);
    }
  }

  /**
   * La función subirImagen nos permite subir archivos a Firebase.
   */
  async function subirImagen(e) {
    e.preventDefault(); // Evitamos que se recargue la página
    // Obtenemos el archivo del formulario
    let file = e.target[0].files[0];

    /**
     * Validar que se haya seleccionado un archivo
     */
    if (file === undefined) {
      toast.error("¡Debe seleccionar una imagen!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "swingInverted",
        icon: "",
        sonido: true,
      });
      return false;
    }

    // Mostarndo Loading
    showLoading({
      message: "Enviando imagen a Firebase...",
      textLoadingSize: "20px",
    });

    try {
      // La funcion subirImagenFirebase recibe como parametro el archivo que se desea subir
      const respuesta = await subirImagenFirebase(file);
      // Actualizando la lista de imagenes
      setImageList((prevList) => [...prevList, respuesta]);
      // Mostrando alerta de exito
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
      // Ocultando Loading
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
