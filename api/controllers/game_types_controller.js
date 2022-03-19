const model_game_type = require("../models/game_types_model")

function add_game_type(req, res) {
    const libelle = req.body.libelle;
    const promise = model_game_type.postGameType(libelle)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_type_by_id(req, res) {
    const id = req.params.id;
    promise = model_game_type.getGameTypeById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}


module.exports = {
    add_game_type,
    select_game_type_by_id,
}

