const model_run_categories = require("../models/run_types_model")

function add_platform(req, res) {
    const libelle = req.body.libelle;
    const promise = model_run_categories.postRunCat(libelle)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_platform_by_id(req, res) {
    const id = req.params.id;
    promise = model_run_categories.getRunCatById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_platform(req, res) {
    const id = req.params.id;
    const libelle = req.body.libelle;
    const image = req.body.image;
    const type_code = req.body.type_code;
    promise = model_games.putGame(id, libelle, image, type_code)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}


module.exports = {
    add_platform,
    select_platform_by_id,
    update_platform,
}

