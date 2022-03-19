const pool = require("../bd/bd");

function postGameType( game_type_libelle){
    return new Promise((resolve, reject) => {
        const values = [game_type_libelle];
        const sql = "INSERT INTO \
                    GAME_TYPES(game_type_libelle)  \
                    VALUES \
                    ($1)"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

function getGameTypeById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM GAME_TYPES WHERE game_type_code = $1"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

module.exports ={
    postGameType,
    getGameTypeById,
}