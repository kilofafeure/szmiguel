Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

# Descripción aplicación

Aplicación react/typescript que nos permite añadir, editar o eliminar “tarjetas” con una información muy básica (título,  descripción e imagen).

## Funcionamiento

## Header

Disponemos de un header desde el cual podemos añadir tarjetas (+) y ordenar las ya guardadas.

## Creación de tarjetas

Una vez clicado el icono + se abrirá un modal en el que deberemos ingresar los datos solicitados. El título y la descripción son obligatorios, la imagen (que debe ser una URL) no. En caso de uno informar una URL o una incorrecta (se informará en el modal) si se guarda la tarjeta se guardará la imagen por defecto de la aplicación

### Imágenes para pruebas ya subidas a internet

https://www.linkpicture.com/q/img001_1.jpg
https://www.linkpicture.com/q/img002.bmp
https://www.linkpicture.com/q/poke001.jpg
https://www.linkpicture.com/q/poke002.jpg
https://www.linkpicture.com/q/pokeball.jpg
https://www.linkpicture.com/q/pokes.jpg
https://www.linkpicture.com/q/pokes002.jpg

## Edición / Eliminación de tarjetas

Una vez insertada una tarjeta la podremos editar/eliminar pasando el ratón por encima y clicando el icono correspondiente.
En caso de ser una edición se abrirá el modal de creación con los datos de la tarjeta ya informados.



# Como iniciar la aplicación / Scripts Disponibles

### `npm install`
Instala dependencias

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.
Abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se volverá a cargar si realizan modificaciones.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.


### Licencia

MIT