This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


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

### Licencia

MIT