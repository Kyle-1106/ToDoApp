"use strict";
var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var session = require('express-session');
var userRouter = require('./routes/userRoutes');
var loginRouter = require('./routes/loginRoutes');
//CORS許可
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));
const secretKey = 'your-secret-key';
// //passport関連
// app.use(express.urlencoded({ extended: true }));
// app.use(session({ 
//   secret: 'your-secret-key', 
//   resave: false, 
//   saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session())
// view engine setup
app.set('views', path.join('views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));
//ルーティング処理
app.use('/user', userRouter);
app.use("/login", loginRouter);
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
