import { uploadImage } from "./firebase/config.js";

function App() {
  /*function handelFile(e) {
    console.log(e.target.files[0]);

    // uploadImage(e.target.files[0]);
  }
  */

  return (
    <>
      <h2>Hola Mundo....</h2>
      <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} />
    </>
  );
}

export default App;
