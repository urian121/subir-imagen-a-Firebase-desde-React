import { useState, useEffect } from "react";
import { uploadImage, getImages } from "./firebase/config.js";

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
      console.log("respuesta", respuesta);
      setImageList((prevList) => [...prevList, respuesta]);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-md-12">
          <h2 className="text-center">
            Subir Imagen a Firebase Storage desde ReactJS <hr />
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 border-right">
          <form onSubmit={subirImagen}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Seleccione la imagen
              </label>
              <input type="file" accept="image/*" className="form-control form-control-sm" />
            </div>
            <button className="btn btn-primary btn_add">
              {" "}
              {loading ? "Enviando..." : "Subir Imagen"}{" "}
            </button>
          </form>
        </div>

        <div className="col-md-8">
          <section className="section__masonry">
            <div className="section__masonry-wrapper">
              <div className="section__masonry-wrapper__item">
                {imageList.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt="Imagen subida"
                    className="section__masonry-wrapper__item-img"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
