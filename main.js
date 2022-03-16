const express = require('express')
const app = express()
const path = require('path')

app.set("views", path.join(__dirname, "views"));

const gamesRouter = require('./api/routes/games_route');
// const suggestionsRouter = require('./routes/suggestions_route');
// const runsRouter = require('./routes/runs_route');
// const usersRouter = require('./routes/users_route');
// const adminRouter = require('./routes/admin_route');
// const comptesRouter = require('./routes/comptes_route');

app.use('/games', gamesRouter);
// app.use('/suggestions', suggestionsRouter);
// app.use('/runs', recetteRouter);
// app.use('/users', usersRouter);
// app.use('/admin', adminRouter);
// app.use('/comptes', comptesRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404).render("error");
});

module.exports = app;