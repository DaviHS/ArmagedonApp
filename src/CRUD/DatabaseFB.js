import Firebird from "node-firebird";

const dbOptions = {
    host: '192.168.0.3',
    port: 3050,
    database: 'C:\\Quatro14\\ArqSql\\MOISES_FINAL.AX1',    
    user: 'SYSDBA',
    password: 'masterkey',
    lowercase_keys: true, // set to true to lowercase keys
    role: null,            // default    
    pageSize: 4096        // default when creating database
};

//"delete from alecsandra where a_nome = 'teste'"
// "select * from alecsandra";
function executeQuery(ssql, params, callback) {

Firebird.attach(dbOptions, function(err, db) {

    if (err){

        return callback(err, []);

    }
          
    // db = DATABASE
    db.query( ssql, params, function(err, result) {
        // IMPORTANT: close the connection
        db.detach();

        if(err){
            return callback(err, []);
        } else {
            console.log(result);
          //  return callback(undefined, result);
        }
    });

});
}

export {executeQuery};

/**
 *  verbos http
 *  GET -> Retornar dados;
 *  POST -> Cadastrar dados;
 *  PUT -> Editar dados;
 *  PATCH -> Editar dados; 
 *  DELETE - Apagar;
 */