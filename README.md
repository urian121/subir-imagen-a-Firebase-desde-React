# Subir Archivos a Firebase desde React

##### Este proyecto demuestra cómo subir archivos a Firebase Storage utilizando una aplicación desarrollada en React. La implementación incluye la configuración de Firebase, la creación de una interfaz de usuario para seleccionar archivos y el manejo de eventos para cargar estos archivos en el almacenamiento en la nube de Firebase de manera eficiente y segura. Ademas poder obtener una lista de todas las imagenes subidas. Tambien haemos uso de los Hooks useEffect y useState.

##### Hacer uso de la biblioteca firebase la cual nos permite conectarnos a multiples servicios de firebase para este caso en particular (storage).

    https://www.npmjs.com/package/firebase
    https://firebase.google.com/docs/storage/web/start?hl=es-419

##### Instalar

    npm install firebase

##### instalar la libreria react-toastify para crear las alertas.

    npm install --save react-toastify

##### Documentación oficial

    https://www.npmjs.com/package/react-toastify

##### Usar el paquete uuid, para renombrar cada archivo antes de subirlo con un nombre unico.

    https://www.npmjs.com/package/uuid
    https://www.youtube.com/watch?v=A5yjN73Aj7s
    https://lasfi.to/tutoriales/guardar-firebase-storage-react/

##### Sitio Web de Firebase console

    https://console.firebase.google.com/u/1/?hl=es-419

##### Importante:

    Ya en el panel de Firebase  en la sección de storage, debemos ir a Reglas y modificar a true, por defecto es false, lo cual no tendriamos permisos para subir archivos.

        service firebase.storage {
        match /b/{bucket}/o {
            match /{allPaths=**} {
            // allow read, write: if false;
            allow read, write: if true;
            }
        }
        }

##### Ejemplo

Subir múltiples imagenes a Firebase con ReactJs
Sube archivos con Cloud Storage en la Web - Firebase
Como subir archivos a Cloud Storage en la Web - Firebase - con REACT
como subir imagenes a firebase en react
firebase storage
Cloud Storage for Firebase
Upload Files
Cloud Storage for Firebas
