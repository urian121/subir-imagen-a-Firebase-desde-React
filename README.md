# Subir Archivos a Firebase desde React

##### Hacer uso de la biblioteca firebase la cual nos permite conectarnos a multiples servicios de firebase.

    https://www.npmjs.com/package/firebase
    https://firebase.google.com/docs/storage/web/start?hl=es-419

##### Instalar

    npm install firebase

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

###

Subir múltiples imagenes a Firebase con ReactJs
Sube archivos con Cloud Storage en la Web - Firebase
Como subir archivos a Cloud Storage en la Web - Firebase - con REACT
como subir imagenes a firebase en react
firebase storage
Cloud Storage for Firebase
Upload Files
Cloud Storage for Firebas
