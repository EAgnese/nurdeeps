const model_games = require("../models/games_model")

function add_game(req, res) {
    const libelle = req.body.libelle;
    const image = req.body.image;
    const promise = model_games.postGame(id)

    promise.then((values) => {
        res.send({
            game_libelle : values[0].rows[0],
            game_image : values[1].rows[0],
            game_type_code : ilesttresfort
        })
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_game_by_id(req, res) {
    const id = req.params.id;
    promise = model_games.getGameById(id)
    promise.then((values) => {
        res.redirect("/games")
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_game,
    select_game_by_id,
}

