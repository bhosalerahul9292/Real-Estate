Client application:

How to create the the react application.
Create a application using below command :
$ npm create vite@latest client
$ cp client 
$ npm install
$ npm run dev

install tailwind CSS using vite.

#How to install tailwindcss
1.Install Tailwind CSS using npm or yarn
npm install tailwindcss @tailwindcss/vite

2.Configure the Vite plugin : dd the @tailwindcss/vite plugin to your Vite configuration.
```
vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

```
3.Import Tailwind CSS : Add an @import to your CSS file that imports Tailwind CSS.

```
@import "tailwindcss";

```
5.Start using Tailwind in your HTML in our case link index.css in index.html
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

```

