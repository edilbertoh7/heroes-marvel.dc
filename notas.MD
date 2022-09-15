
1 Paso 
instalacion de tailwind
npm i -D tailwindcss postcss autoprefixer 

2 Paso 
creacion de archivos de configuracion
npx tailwindcss init -p 

3 Paso 
@import "tailwindcss/base"; 
@import "tailwindcss/components"; 
@import "tailwindcss/utilities"; 

4 Paso en el archivo tailwind.config.cjs
content: ["./index.html", "./src/**/*.jsx"], 

recordar crear la referencia a los archivos que renderizaran las clases de tailwind en el archivo tailwind.config.cjs

extensiones necesarias
css peek
Tailwind CSS IntelliSense


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