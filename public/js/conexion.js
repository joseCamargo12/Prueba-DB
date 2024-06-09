const { ifError } = require("assert");
const mysql = require("mysql")

const conexion = mysql.createConnection({
    host: "localhost",
    database: "estrategia_empresarial",
    user: "root",
    password: ""
})

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Avtive");
    }
});

const consultoria = "SELECT * FROM consultoria";
conexion.query(consultoria, function(err, list){
    if(err){
        throw err;
    }else{
        console.log(list);
    }
});

conexion.end();