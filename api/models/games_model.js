const pool = require("../bd/bd");

//post a game with the values of the request
function postGame( game_libelle, game_image, game_type_code){
    return new Promise((resolve, reject) => {
        const values = [game_libelle, game_image, game_type_code];
        const sql = "INSERT INTO \
                    GAMES(game_libelle, game_image, game_type_code)  \
                    VALUES \
                    ($1,$2,$3)"
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

function getGameById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT $1 FROM GAMES"
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

function getGames(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM GAMES"
        pool.query(sql, [], (err, result) => {
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
    postGame,
    getGameById,
    getGames
}