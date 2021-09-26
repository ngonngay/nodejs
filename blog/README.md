# install
## express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
```
npm install express         
```
## nodemon 
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
```
npm i nodemon --save-dev      
```
## HTTP log - morgan
```
npm i morgan --save-dev   
```
## handlebars
View engine
```
npm install express-handlebars
```
## Sass
Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.

It allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
```
npm i node-sass --save-dev
```
## Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
```
npm install mongoose
```
## method override
HTML form only supports two HTTP methods is GET and POST. When follow Restful API rules, we need send to server by other HTTP methods like : PUT,PATCH,DELETE and OPTIONS.\
So method override is middleware help we solve this\

**Note from authors**\
>Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
```
npm install method-override
```