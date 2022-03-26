<template>
    <div>
        Admin
        <p>games</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Game type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in getGamesList" :key="game">
                    <td>{{game.game_code}}</td>
                    <td>{{game.game_libelle}}</td>
                    <td>{{game.game_image}}</td>
                    <td>{{game.game_type_code}}</td>
                </tr>
            </tbody>
        </table>

        <p>game types</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game_type in getGameTypesList" :key="game_type">
                    <td>{{game_type.game_type_code}}</td>
                    <td>{{game_type.game_type_libelle}}</td>
                </tr>
            </tbody>
        </table>

        <p>platforms</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="platform in getPlatformsList" :key="platform">
                    <td>{{platform.platform_code}}</td>
                    <td>{{platform.platform_libelle}}</td>
                </tr>
            </tbody>
        </table>
        
        <p>runs</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Time</th>
                    <th>Run category</th>
                    <th>Platform</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="run in getRunsList" :key="run">
                    <td>{{run.run_code}}</td>
                    <td>{{run.run_time}}</td>
                    <td>{{run.run_category_code}}</td>
                    <td>{{run.run_platform}}</td>
                    <td>{{run.run_user_id}}</td>
                </tr>
            </tbody>
        </table>
        
        <p>run categories</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="run_cat in getRunCatsList" :key="run_cat">
                    <td>{{run_cat.run_category_code}}</td>
                    <td>{{run_cat.run_category_libelle}}</td>
                </tr>
            </tbody>
        </table>
        
        <p>users</p>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in getUsersList" :key="user">
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_mail}}</td>
                    <td>{{user.user_points}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            gamesList : [],
            gameTypesList : [],
            platformsList : [],
            runsList : [],
            runCatsList : [],
            usersList : [],
        }
    },
    created(){
        fetch("http://localhost:8000/api/games/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.gamesList = data;
            })
        })

        fetch("http://localhost:8000/api/game_types/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.gameTypesList = data;
            })
        })

        fetch("http://localhost:8000/api/platforms/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.platformsList = data;
            })
        })

        fetch("http://localhost:8000/api/runs/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.runsList = data;
            })
        })

        fetch("http://localhost:8000/api/run_categories/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.runCatsList = data;
            })
        })

        fetch("http://localhost:8000/api/users/", {
            method: "GET",
        }).then( (rep) =>{
            rep.json().then((data)=>{
                this.usersList = data;
            })
        })
    },
    computed:{
        getGamesList(){
            return this.gamesList
        },
        getGameTypesList(){
            return this.gameTypesList
        },
        getPlatformsList(){
            return this.platformsList
        },
        getRunsList(){
            return this.runsList
        },
        getRunCatsList(){
            return this.runCatsList
        },
        getUsersList(){
            return this.usersList
        },
        getInput(){
            return this.input
        },
    }
}
</script>

<style>
h1{
    text-align: center;
}
table, th, td{
    margin:auto;
    border: solid;
    border-collapse: collapse;
    padding: 2px;
    background-color: #301B59;
    text-align: center;
}

@media (max-width: 600px) {
    h1{
    text-align: center;
}

    table {
        margin:auto;
        border: solid;
        border-collapse: collapse;
        padding: 2px;
        background-color: #301B59;
        text-align: center;
        font-size: 15px
    }
}

</style>