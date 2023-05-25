import { Router } from "express";
import { executeQuery } from "../CRUD/DatabaseFB.js";

const controllerOS =  Router();

controllerOS.get("/os", function (req, res) {
    let dados = [];
       let ssql = "update alecsandra set "

       ssql += "a_nome =? where a_endereco = 'endereco'";
       dados.push(req.query.bobina);
/*
 let filtro = [];
    if(req.query.f_osnum){
        ssql += "and f_osnum = ? ";
        filtro.push( req.query.f_osnum );
    }*/

  //  ssql += "ORDER by F_DATAFUND desc";
    executeQuery( ssql, dados, function (err, result) {

        if (err) {
            res.status(500).json(err);
        }else{
            res.json(result);
            res.status(200).json(result);
        }
        
    })
   
    
})

export default controllerOS;

/**
 * SQL statement (CRUD)
 * Select -> "select *(variables or * to select all) from *table*"
 * Insert -> "insert into table (--variables--) values(value corresponding to variables)"
 * Update -> "update table set variable = value,  variable2 = value2... where conditional"
 * Delete -> "delete from table where conditional"
 * 
 * Update -> "update fundicao set " + $local + " = ? where f_osnum = " + $os + " and F_NUMBOBINA = " + $bobina +" "
 * insert into alecsandra (a_nome, a_endereco) values('teste', 'enjdrecooo')
 * 
 */

/*controllerOS.get("/os", function (req, res) {

    let filtro = [];
    let ssql = "select * from alecsandra";

    if(req.query.f_osnum){
        ssql += "and f_osnum = ? ";
        filtro.push( req.query.f_osnum );
    }

  //  ssql += "ORDER by F_DATAFUND desc";
  executeQuery( ssql, filtro, function (err, result) {

    if (err) {
        res.status(500).json(err);
    }else{
        res.json(result);
        res.status(200).json(result);
    }
    
})


})*/
