import { initializeApp } from "firebase/app";
// Importando firebase/storage de firebase
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

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
// El getStorage nos permite conectarnos a la base de datos, pide como parametro la consfiguración de firebase
export const storage = getStorage(app);

/**
 * La función subirImagenFirebase nos permite subir archivos a firebase, esta recibe como parametro un archivo
 */
export async function subirImagenFirebase(file) {
  console.log(file);
  // const storageRef = ref(storage, uuidv4());
  const storageRef = ref(storage, "fotos/" + uuidv4());
  // const storageRef = ref(storage, file.name);

  /*
  const storageRef = ref(storage, `images/${file.name}`);
  return uploadBytes(storageRef, file);
  */

  // uploadBytes es una función que recibe como parametro la referencia y el archivo que se desea subir
  await uploadBytes(storageRef, file);
  const urlFoto = await getDownloadURL(storageRef);
  return urlFoto;

  /*
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Archivo subido!", snapshot);
  });
  */
}

// función para obtener todas las imagenes subidas
export async function obtenerImagenesFirebase() {
  const listRef = ref(storage, "fotos/");
  const res = await listAll(listRef);
  const urls = await Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
  return urls;
}
