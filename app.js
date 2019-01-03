var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

//var mongoose = require('mongoose');
////////////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/register", { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log("Connected to Database");
});
mongoose.connection.on('error', () => {
  console.log("Error connecting Database");
});

////////////////////////////////////
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var userRouter=require('./routes/user')
var QlikUserS=require('./routes/qlickUser')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use(logger('dev'));

var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');


app.use(methodOverride());
app.use(cookieParser());

console.log(path.join(__dirname,'../client', 'dist/Register'));
app.use(express.static(path.join(__dirname,'../client','dist/Register')));
app.use('/', express.static(path.join(__dirname,'../client','dist/Register')));
//comman


app.use('/', express.static(path.join(__dirname,'../client','dist/Register')));
app.use('/createUser', express.static(path.join(__dirname,'../client','dist/Register')));
app.use('/userDetails', express.static(path.join(__dirname,'../client','dist/Register')));
app.use('/editUserDetails', express.static(path.join(__dirname,'../client','dist/Register')));

// app.use('/users',user);
// app.use('/qlickuser',qlickuser)
// const routes = require('./routes/index');
// app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.locals.user = req.user || null
  next();
})

app.use('/user', userRouter);
app.use('/QlikUserSync',QlikUserS);
///////////////////////////

// app.use(cors());
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json())


// const routes = require('./routes/index');
// app.use('/', routes);
let port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;