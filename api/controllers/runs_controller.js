const model_games = require("../models/games_model")

function add_run(req, res) {
    const time = req.body.time;
    const category = req.body.category;
    const platform = req.body.platform;
    const user_id = req.body.user_id;
    const promise = model_games.postRun(time, category, platform, user_id)
    
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_run_by_id(req, res) {
    const id = req.params.id;
    promise = model_games.getRunById(id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_user(req, res) {
    const user = req.params.user;
    promise = model_games.getRunsByUser(user)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_plat(req, res) {
    const plat = req.params.plat;
    promise = model_games.getRunsByPlat(plat)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs_by_cat(req, res) {
    const cat = req.params.cat;
    promise = model_games.getRunsByCat(cat)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function select_runs(req, res) {
    promise = model_games.getRuns()
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

function update_run(req, res) {
    const id = req.params.id;
    const time = req.body.time;
    const category = req.body.category;
    const platform = req.body.platform;
    const user_id = req.body.user_id;
    promise = model_games.putRun(id, time, category, platform, user_id)
    promise.then((values) => {
        res.send(values.rows)
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    add_run,
    select_run_by_id,
    select_runs_by_user,
    select_runs_by_plat,
    select_runs_by_cat,
    select_runs,
    update_run,
}
