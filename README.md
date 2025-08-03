# How to create the React project using vite
1.yarn create vite real_estate
2.cd real_estate
3.yarn
4.yarn run dev

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
4.Start your build process using below command:

yarn run dev

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

#Add the Router using react-router-dom
- Install the react-router-dom
  npm -i react-router-dom


# create the server in the backend
- create the api folder
- initlize the npm using below command:
  npm init -y
- update the package.json file to update/track node server contineoue

#connect to the database (mongodb)
- Install the mongoose package
- To connect with mongoDB.
  - login to mongoDB web.
  - create project give name to the project.
- Create the .env file and add in the variable.