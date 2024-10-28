# Listado de usuarios - Documentación

## Descripción del proyecto
Este proyecto es una aplicación móvil desarrollada con React Native que muestra un listado de usuarios. La aplicación consume datos de una API y los presenta en una interfaz de usuario atractiva y responsive.

## Tecnologías utilizadas
- React Native
- React Native CLI (sin Expo)
- Redux
- Axios

## Requisitos del sistema
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- React Native CLI (instalado de forma global)
- Un emulador Android o iOS 

## Instalación y configuración

1. Clona el repositorio del proyecto:
```
git clone git@github.com:Albano7/userList-onlyRN.git
```

2. Navega hasta el directorio del proyecto:
```
cd userList-onlyRN
```

3. Instala las dependencias del proyecto:
```
npm install
```

4. Inicia el servidor de desarrollo de React Native:
```
npm start
```

5. Ejecutar pruebas unitarias (en desarrollo)
```
npm test
```

## Estructura del proyecto
El proyecto sigue una estructura de archivos y carpetas siguiendo el patron de diseño convencional para el proyecto React Native:

```
userList-onlyRN/
├── android/
├── ios/
├── app/
│   ├── api/
│   ├── components/
│   ├── features/
│   ├── styles/
│   ├── store/
│   ├── hooks/
│   ├── interface/
│   ├── commands/
│   └── MyApp.tsx
├── .gitignore
├── babel.config.js
├── metro.config.js
├── package.json
├── App.tsx
├── index.js
└── README.md
```

Esta estructura de carpetas se alinea con los principios del patrón Feature-Driven Development (FDD) y Domain-Driven Design (DDD):

FDD: Organiza el código en torno a las características de la aplicación, lo que facilita el desarrollo y el mantenimiento a medida que el proyecto crece.
DDD: Divide el código en torno a los diferentes dominios de la aplicación, lo que ayuda a mantener una arquitectura limpia y modular.

- `android/` y `ios/`: Contiene los archivos nativos de Android e iOS.
- `app/`: Alberga todo el código fuente de la aplicación React Native.
  - `components/`: Contiene los componentes reutilizables de la aplicación.
  - `features/`: Incluye la nueva raquitectura lógica de Redux (acciones, reducers, store).
  - `styles/`: Almacena los estilos CSS utilizados en la aplicación.
  - `hooks/`: Contiene funciones y utilidades auxiliares.
  - `commands/`: Contiene funciones que interacturan con los actions de redux.
  - `MyApp.tsx`: El componente principal de la aplicación.
- `.gitignore`: Especifica qué archivos y carpetas deben ser ignorados por Git.
- `babel.config.js` y `metro.config.js`: Configuración de Babel y Metro, respectivamente.
- `package.json`: Contiene información del proyecto y las dependencias.
- `README.md`: Este archivo de documentación.
- `index.js`: El punto de entrada de la aplicación.

## Scripts de npm disponibles

- `npm start`: Inicia el servidor de desarrollo de React Native.
- `npm run android`: Ejecuta la aplicación en un emulador o dispositivo Android.
- `npm run ios`: Ejecuta la aplicación en un emulador o dispositivo iOS.

## Licencia
Este proyecto se distribuye bajo la [Licencia MIT](LICENSE).
