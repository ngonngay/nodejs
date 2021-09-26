const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
var methodOverride = require('method-override')
const app = express();
const port = 1408;


const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();


//use static folder
app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
//app.use(morgan('combined'));
// express handlebars
app.engine('hbs', handlebars({
    extname:'.hbs',
    helpers: {
      sum:(a,b) => a + b,
    } 
}));
//form body
app.use(express.urlencoded({
  extended:true,
}));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));



route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});