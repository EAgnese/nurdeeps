const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

let corsOptions = {origin:'*'};

app.use(cors(corsOptions));

app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const gamesRouter = require('./api/routes/games_route');
const gameTypesRouter = require('./api/routes/game_types_route');
// const suggestionsRouter = require('./api/routes/suggestions_route');
const runsRouter = require('./api/routes/runs_route');
const usersRouter = require('./api/routes/users_route');
const platformsRouter = require('./api/routes/platforms_route');
// const comptesRouter = require('./api/routes/comptes_route');

app.use('/api/games', gamesRouter);
app.use('/api/game_types', gameTypesRouter);
// app.use('/api/suggestions', suggestionsRouter);
app.use('/api/runs', runsRouter);
app.use('/api/users', usersRouter);
app.use('/api/platforms', platformsRouter);
// app.use('/api/comptes', comptesRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404).render("error");
});

app.listen(8000,function(){
    console.log("Live at Port 8000");
});

module.exports = app;