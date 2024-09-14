# Subir Imagenes a Firebase desde React

##### Este proyecto demuestra cómo subir imagenes a Firebase Storage utilizando una aplicación desarrollada en React. La implementación incluye la configuración de Firebase, la creación de una interfaz de usuario para seleccionar archivos y el manejo de eventos para cargar estos archivos en el almacenamiento en la nube de Firebase de manera eficiente y segura. Ademas poder obtener una lista de todas las imagenes subidas. Tambien hacemos uso de los Hooks useEffect y useState.

#### Hacer uso de la biblioteca firebase la cual nos permite conectarnos a multiples servicios de firebase para este caso en particular (storage).

    https://www.npmjs.com/package/firebase
    https://firebase.google.com/docs/storage/web/start?hl=es-419

#### Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/guardar-imagen-con-firebase-storage.png)

##### Instalar firebase

    npm install firebase
    https://www.npmjs.com/package/firebase

#### instalar la libreria nextjs-toast-notify para crear las alertas.

    npm i nextjs-toast-notify

#### Documentación oficial de la libreria nextjs-toast-notify

    https://www.npmjs.com/package/nextjs-toast-notify
    https://www.nextjstoastnotify.com

#### Usar el paquete npm uuid, para renombrar cada archivo antes de subirlo a Firebase con un nombre unico.
    npm i uuid
    https://www.npmjs.com/package/uuid

#### Sitio Web de Firebase console

    https://console.firebase.google.com/u/1/?hl=es-419
    https://firebase.google.com/docs/storage/web/start?hl=es-419

#### Importante

Ya en el panel de Firebase  en la sección de storage, debemos ir a Reglas y modificar a true, por defecto es false, lo cual no tendriamos permisos para subir archivos.

    service firebase.storage {
        match /b/{bucket}/o {
            match /{allPaths=**} {
            // allow read, write: if false;
            allow read, write: if true;
            }
        }
    }

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕

Paypal [Urian Viera](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)

    correo electronico: iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍

##### Creado por: [Urian Viera](https://github.com/urian121)
