

const mysql = require('mysql');
var connection; 



module.exports = {

    dbConnection : function (){
         connection = mysql.createConnection({
            host:'mysql-dev',
            user: 'root',
            password: 'root',
            database: 'app',
            port:3306
        })

        connection.connect(function(err){
            if(err) throw err;
            console.log("connected");
        });



        

        return connection;



    }
}









