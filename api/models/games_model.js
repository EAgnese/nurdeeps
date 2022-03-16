var pool = require("../bd/bd");

//post a game with the values of the request
function postGame( game_libelle, game_image, game_type_code){
    return new Promise((resolve, reject) => {
        var values = [game_libelle, game_image, game_type_code];
        const sql = "INSERT INTO \
                    GAMES(game_libelle, game_image, game_type_code)  \
                    VALUES \
                    ($1,$2,$3)"
        pool.query(sql, values, (err, result) => {
            if (err){
                console.log(err);
            }
            else{
                resolve(result);
            }
        });
    });
}
