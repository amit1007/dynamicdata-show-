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

var user=require('./routes/users')
var qlickuser=require('./routes/qlickuser')
app.use('/users',user);
app.use('/qlickuser',qlickuser)
const routes = require('./routes/index');
app.use('/', routes);

///////////////////////////

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())


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