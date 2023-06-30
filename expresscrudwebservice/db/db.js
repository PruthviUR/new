var mysql=require("mysql");
const mysqlconnection = require("./dbconnect");
const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"root123",
    "port":"3306",
    "database":"test"

})
mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occured"+JSON.stringify(error));
    }
    else{
        console.log("connection done")
    }
})
module.exports=mysqlconnection;