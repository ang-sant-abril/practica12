## Compatibilidad con IE

1.- En tsconfig.json cambiar el tipo de paquete

  "compilerOptions": {
    ...
    "target": "es5",
    ...
  },

2.- Descomentar el soporte para IE en .browserslistrc

3.- Archivo polyfills.ts

Añadir import 'core-js'; 
E instalar paquete con npm i core-js --save
