import { initializeApp } from "firebase/app";

/**
 * getStorage nos permite conectarnos a la base de datos, este pide como parametro la configuración de firebase.
 * ref nos permite crear referencias a la ruta donde se guardan los archivos
 * uploadBytes es una función que recibe como parametro la referencia donde se guardara y el archivo que se desea subir y devuelve la url del archivo subido.
 * getDownloadURL nos permite obtener la url de descarga
 * listAll nos permite obtener todas las imagenes
 */
// Importando firebase/storage de firebase
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

/**
 * Configuración de Firebase para subir imagenes
 */
const firebaseConfig = {
  apiKey: "AIzaSyDQvrtMSgN2nULxMkQhITgsiRYQRMRrIRc",
  authDomain: "subir-imagen-react.firebaseapp.com",
  projectId: "subir-imagen-react",
  storageBucket: "subir-imagen-react.appspot.com",
  messagingSenderId: "220546917601",
  appId: "1:220546917601:web:2d516faf1e9bcf251043a0",
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

/**
 * La función subirImagenFirebase nos permite subir archivos a firebase, esta recibe como parametro un archivo
 */
export async function subirImagenFirebase(file) {
  // const storageRef = ref(storage, uuidv4());
  // const storageRef = ref(storage, file.name);
  const storageRef = ref(storage, "fotos/" + uuidv4());

  /*
  const storageRef = ref(storage, `images/${file.name}`);
  return uploadBytes(storageRef, file);
  */

  await uploadBytes(storageRef, file);
  const urlFoto = await getDownloadURL(storageRef);
  return urlFoto;

  /*
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Archivo subido!", snapshot);
  });
  */
}

/**
 * La función fetchImages nos permite obtener todas las imagenes subidas a Firebase
 */
export async function obtenerImagenesFirebase() {
  const listRef = ref(storage, "fotos/"); // Referencia a la carpeta "fotos/" en Firebase Storage.
  const res = await listAll(listRef); // Obtiene todas las referencias de los archivos dentro de la carpeta.
  const urls = await Promise.all(
    res.items.map((itemRef) => getDownloadURL(itemRef)) // Obtiene las URLs de descarga de cada archivo.
  );
  return urls; // Devuelve un array de URLs.
}
