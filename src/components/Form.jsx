import img_firebase from "../assets/imgs/firebase.png";
import img_react from "../assets/imgs/react.svg";

const Form = ({ subirImagen }) => {
  return (
    <>
      <div className="col-md-4 border-right">
        <h1 className="text-center titulo mb-5">
          React.JS y Firebase Storage <hr />
          <img src={img_react} alt="React" /> <strong>+</strong>
          <img src={img_firebase} alt="Firebase" style={{ width: "200px" }} />
        </h1>

        <form onSubmit={subirImagen}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Seleccione la imagen
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control form-control-sm"
            />
          </div>
          <button className="btn btn-primary btn_add">
            Subir imagen a Firebase
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
