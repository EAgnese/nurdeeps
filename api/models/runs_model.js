const pool = require("../bd/bd");

//post a game with the values of the request
function postRun( time, cat, plat, user){
    return new Promise((resolve, reject) => {
        const values = [ time, cat, plat, user];
        const sql = "INSERT INTO \
                    RUNS(run_time, run_category_code, platform_code, user_id)  \
                    VALUES \
                    ($1,$2,$3,$4)"
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

function getRunById(id){
    return new Promise((resolve, reject) => {
        const values = [id];
        const sql = "SELECT * FROM RUNS WHERE run_code = $1"
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

function getRunsByUser(user){
    return new Promise((resolve, reject) => {
        const values = [user];
        const sql = "SELECT * FROM RUNS WHERE user_id = $1"
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

function getRunsByPlat(plat){
    return new Promise((resolve, reject) => {
        const values = [plat];
        const sql = "SELECT * FROM RUNS WHERE platform_code = $1"
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

function getRunsByCat(cat){
    return new Promise((resolve, reject) => {
        const values = [cat];
        const sql = "SELECT * FROM RUNS WHERE run_category_code = $1"
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

function getRuns(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM RUNS"
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

function putRun(id, time, category, platform, user){
    return new Promise((resolve, reject) => {
        const values = [id, time, category, platform, user]
        const sql = "UPDATE RUNS \
                    SET run_time =$2,run_category_code =$3,platform_code =$4,user_id =$5\
                    WHERE run_code=$1"
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
    postRun,
    getRunById,
    getRunsByUser,
    getRunsByPlat,
    getRunsByCat,
    getRuns,
    putRun,
}