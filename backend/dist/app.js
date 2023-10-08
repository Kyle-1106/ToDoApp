"use strict";
var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userRouter = require('./routes/userRoutes');
var loginRouter = require('./routes/loginRoutes');
var workoutRouter = require('./routes/workoutRoutes');
//CORS許可
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true,
    optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}));
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
app.use("/workout", workoutRouter);
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
//# sourceMappingURL=app.js.map