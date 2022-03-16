var model_games = require("../models/games_model")

function create_game(req, res) {
    const id = req.params.id;
    promiseIngr = model_ingredient.getIngredientWithCode(id)
    promiseAllergene = model_ingredient.getAllAllergene()
    promiseCategorie = model_ingredient.getAllCategoriesIngredient()
    Promise.all([promiseAllergene, promiseCategorie, promiseUnite]).then((values) => {
        var alertVal = req.tempData.get('alert_val');
        res.send({
            model : id,
            listeTVA : values[3].rows,
            ingr : values[4].rows[0],
            alertContent : ilesttresfort
        })
    }).catch((error) => {
        res.redirect("/ingredient")
    })
}
