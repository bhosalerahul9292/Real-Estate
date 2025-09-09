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
# Create the Routes using react-router-dom:
- To create the routing install the react-router-dom package using  below commmand:
npm install react-router-dom
or 
yarn add react-router-dom


To use the icon in component install below package.
npm install react-icons
or 
yarn add react-icons


<!-- create the signup page -->

Q.Why we are  defining the proxy inside  the vite.config.js
- It Helps avoid CORS during development.
- When you call /api/users in React:
- Vite dev server forwards it to http://localhost:3000/api/users.

- No need to write the full backend URL in your frontend code.

Q2. Where to configure the proxy ?
- it depends on the creating the application
 CRA → proxy in package.json
 Vite → proxy in vite.config.js

- Once you signup and after that you want to navigate to login page then you can use useNavigate() Hooks for navigation.

- create the Signin functionality .

