var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var userRouter = require('./routes/userRoutes');
var loginRouter = require('./routes/loginRoutes');

var app = express();

//CORS許可
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200', //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))



// view engine setup
app.set('views', path.join('views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));

app.use('/user', userRouter);
app.use("/login",loginRouter);


// catch 404 and forward to error handler
app.use(function(req: any, res: any, next: any) {  
  next(createError(404));
});

// error handler
app.use(function(err: any, req: any, res: any, next: any) {  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
