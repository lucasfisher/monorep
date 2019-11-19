var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./databaseScripts.js');
var circJSON = require('circular-json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Function to interact with DB and retrieve scans from DB
getSecurityScan =   function(){
  return new Promise(function(resolve,reject){
        var connection =  db.dbConnection();
        connection.query("select * from securityScans;",function(err,rows,fields){
                console.log("inside")
                console.log(rows)
                resolve(rows);
          });
  })
   
}

//Function to insert Scan into database
addSecurityScan = function(newScan){
    return new Promise(function(resolve,reject){
        var connection =  db.dbConnection();

        console.log(newScan.findings)
        values=[[newScan.ID, newScan.status, newScan.repoName, newScan.findings , new Date(newScan.queuedAt).toISOString().slice(0, 19).replace('T', ' ') , new Date(newScan.scanningAt).toISOString().slice(0, 19).replace('T', ' ') ,new Date(newScan.finishedAt).toISOString().slice(0, 19).replace('T', ' ') ]];
        connection.query("Insert into securityScans(ID, status, repositoryName,findings,queuedAt,scanningAt,finishedAt ) Values ?",[values],function(err,rows,fields){
            if(err) console.log(err);
            resolve(rows);
        });
    })
}




module.exports = app;
