# Backend 

## init the package.json file using below command:
- Execute on root level:
npm init -y
Or 
yarn init -y

## install express using below command:
- it is used for to create the backend api.

npm install express
or
yarn add express

- if you want to use express,mongoose,dotenv pakages using import Add "type": "module" at the top level in package.json
and if you want use require() then add "type": "commonjs",


- Connect the database to mongodb so for that install below module.

npm install mongoose
or
yarn add mongoose

- For DB creation and connection refer below video and see the 54 min to 1hr 5min
Link :
https://www.youtube.com/watch?v=VAaUy_Moivw


- Create the Signup api routes.
- Create the routes in the routes in the routes folder.
- Inside the routes import the controller file.


- create the middle ware to handle the possible errors
- create the custom error function.


- create the routes for Signin
1.in auth.contorller.js create the Signin functionality
2.When the authinticate user and password then we can do the authintication by adding cookies inside the browser.
So for authonitication we are using JWT to use that we have installed the JWT token.
npm install jsonwebtoken

And to create the jwt token import the jsonwebtoken at the top and for creation of token you can use sign()

import jwt from 'jsonwebtoken'
.
.
.
const token = jwt.sign({ id: vaildUser._id }, process.env.JWT_SECRET);   // cerate the JWT token for each user by using id 


# create the routes for google
1.in route folder cerate the route.
2.in controller folder create a function named as google
3.fetch the user from the database.
4. check if user is already exist.create the token for it and save the data in cookies.
5.
5.1.If not create the new user.
5.2.Genrate the password ,username and set the default photo
5.3.save that new user in the database.
5.4.Create the new token save that token into the cookies.