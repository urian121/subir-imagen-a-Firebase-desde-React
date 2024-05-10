import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDQvrtMSgN2nULxMkQhITgsiRYQRMRrIRc",
  authDomain: "subir-imagen-react.firebaseapp.com",
  projectId: "subir-imagen-react",
  storageBucket: "subir-imagen-react.appspot.com",
  messagingSenderId: "220546917601",
  appId: "1:220546917601:web:2d516faf1e9bcf251043a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// El getStorage nos permite conectarnos a la base de datos, pide como parametro la consfiguracion de firebase
export const storage = getStorage(app);

/**
 * La funcion uploadImage nos permite subir archivos a firebase, esta recibe como parametro un archivo
 */
export function uploadImage(file) {
  console.log(file);
  const storageRef = ref(storage, uuidv4());
  //const storageRef = ref(storage, 'fotos/' + file.name + uuidv4());
  //const storageRef = ref(storage, 'fotos/' + uuidv4());

  //  const storageRef = ref(storage, uuidv4() + file.name);
  // const storageRef = ref(storage, file.name);

  // uploadBytes es una funcion que recibe como parametro la referencia y el archivo
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Archivo subido!", snapshot);
  });

  /*
  const storageRef = ref(storage, `images/${file.name}`);
  return uploadBytes(storageRef, file);
  */
}
