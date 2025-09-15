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
- update the package.json file to update/track node server continoue

#connect to the database (mongodb)
- Install the mongoose package
- To connect with mongoDB.
  - login to mongoDB web.
  - create project give name to the project.
- Create the .env file and add in the variable.

#Create the UserSchema in mongoDB:
- Create the model folder inside the file named as user_model.js.

```
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

```

#Create the API routes.
- Create the controller folder for keep the user api function and call in the api.(user.contoller.js)
- call the user function api inside the routes by calling the api function.


#Create the middleware and a function to handle possible errors.
- In server.js file I have added the middleware to handle the possible error.
- and call that where we want to use it using next().

#Complete signup page UI

#Backend and frontend connection:
1.Connect the frontend using fetch api.
2.configure the backend api inside the vite.config.js.
server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: []

Q.How to persist the user data in local storage in react ?

- Add Redux persist which helps us to store the user data inside the local storage.
- So you need to add redux persist package using yarn.
$ yarn add redux-persist
or 
$npm install redux-persist

- Steps :
1.Install the redux-persist package to store the data in local storage.
2.In store combine all the reducer using combineReducer()
3.To store the redux state in the local storage we need use persistReducer()whih will take two parameters config and combinedReducer.
4.Add that persistReducer in store.
5.Once add the persistReducer export the persistStore which will make the store persist and pass the store from it.
6.To use the persistStore wrap the app component inside the PersistGate component.

## Add the Google oauth functionality
- create the one component in Oauth.jsx.


### How to create the FireBase authenitication.
- On google search firebase google.
- Create and account and go to console
- Create the project and register your app
- After  that install 
npm install firebase
- Add the SDK in your project.
- mistake declear the .env the root of client folder.

### Update the header and make profile page private.