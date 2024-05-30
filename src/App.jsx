import { useState, useEffect } from "react";
import { uploadImage, getImages } from "./firebase/config.js";

import "./styles/loading.css";

// Componente para mostrar las imagenes subidas
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading.jsx";
import Form from "./components/Form.jsx";
import ListImg from "./components/ListImg.jsx";
import Titulo from "./components/Titulo.jsx";

function App() {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);

  // El hook useEffect nos permite ejecutar una función cuando se renderiza el componente y obtener las imagenes subidas
  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const images = await getImages();
      setImageList(images);
    } catch (error) {
      console.error("Error al recuperar las imágenes:", error);
    }
  }

  async function subirImagen(e) {
    e.preventDefault();
    let file = e.target[0].files[0];
    if (file === undefined) return;

    setLoading(true);

    try {
      const respuesta = await uploadImage(file);
      setImageList((prevList) => [...prevList, respuesta]);
      toast.success("Imagen subida correctamente");
    } catch (error) {
      toast.warning("Error al subir la imagen");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loading />}

      <ToastContainer />
      <div className="row justify-content-center mb-5">
        <div className="col-md-12">
          <Titulo />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 border-right">
          <Form subirImagen={subirImagen} loading={loading} />
        </div>

        <div className="col-md-8">
          <ListImg imageList={imageList} />
        </div>
      </div>
    </>
  );
}

export default App;
